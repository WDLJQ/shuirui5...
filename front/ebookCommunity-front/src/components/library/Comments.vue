<!-- <template>
    <div>123</div>
</template>
<script>
export default{
    name:'comments'
}
</script> -->


<template>
  <div>评论 {{ 2 }}
    <div class="comment-header">
      <div class="avatar-input-container">
        <img src="@/assets/cc.jpg" alt="" style="width:40px; height:40px; border-radius:50%;margin-right: 10px; ">
        <el-input
          :placeholder="placeholderText"
          v-model="context"
          class="input"
          type="textarea"
          resize="none"
          size="mini"
          :maxlength="contentLength"
          @focus="isShowSecReply(undefined)"
          style="margin-right: 20px"
        ></el-input>
        <el-button
  type="primary"
  style="height: 40px"
  @click="addComment(articleId, undefined)"
>{{ buttonText }}</el-button>
      </div>

</div>
    <div class="comment">
      <div class="comment-body" v-for="(item, index) in comments" :key="item._id + '' + index">
        <!-- 一级评论 -->
        <div class="first-comment">
          <img src="@/assets/cc.jpg" alt="" style="width:40px; height:40px; border-radius:50%;margin-right: 10px; ">
          <div class="content">
            <!-- 一级评论用户昵称 -->
            <h3>{{ item.username }}</h3>
            <!-- 一级评论发布时间 -->
            
            <!-- 一级评论评论内容 -->
            <p>{{ item.content }}</p>
            
            <!-- 一级评论评论点赞 -->
            <div class="comment-right">
                <span style="margin-right: 10px;">{{ item.date }}</span>
              <i
                class="el-icon-star-on"
                @click="giveALike(item, item._id)"
                :class="item.favour.includes(userId) ? 'active' : ''"
                style="margin-right: 5px;"

              ></i>
              {{ item.favour.length || 0 }}
              <i
                class="el-icon-chat-dot-round"
                @click="isShowSecReply(item._id)"
                style="margin-left: 15px;"
              >回复</i>
            </div>

            <!-- 回复一级评论 -->
            <div class="reply-comment" v-show="isShowSec === item._id">
              <el-input
                :placeholder="placeholderText"
                class="input"
                v-model.trim="replyContext"
                :maxlength="contentLength"
              ></el-input>
              <el-button
                type="primary"
                size="mini"
                class="reply-button"
                @click="addComment(item._id, item.username)"
              >回复</el-button>
            </div>
            <!-- 次级评论 -->
            <div
              class="second-comment"
              v-for="(reply, index) in item.replyInfo"
              :key="reply._id + '' + index"
            >
              <!-- 次级评论头像,该用户没有头像则显示默认头像 -->
              <!-- <el-avatar :size="40" :src="reply.avatarUrl"></el-avatar> -->
              <img src="@/assets/cc.jpg" alt="" style="width:40px; height:40px; border-radius:50%;margin-right: 10px; ">
              <div class="content">
                <!-- 次级评论用户昵称 -->
                <h3>{{ reply.username }}</h3>
                <!-- 次级评论评论时间 -->
                
                <!-- <span class="to_reply">{{ reply.username }}</span>
                回复
                <span class="to_reply">{{ reply.replyName }}</span>: -->
                <p>{{ reply.content }}</p>
                <!-- 次级评论评论点赞 -->
                <div class="comment-right">
                    <span style="margin-right: 10px;">{{ reply.date }}</span>
                  <i
                    class="el-icon-star-on"
                    @click="giveALike(reply, item._id)"
                    :class="reply.favour.includes(userId) ? 'active' : ''"
                    style="margin-right: 5px;"
                  ></i>
                  {{ reply.favour ? reply.favour.length : 0 }}
                  <!-- <i
                    class="el-icon-chat-dot-round"
                    @click="isShowSecReply(reply._id)"
                    style="margin-left: 15px;"
                  >回复</i> -->
                </div>
                <div class="reply-comment" v-show="isShowSec === reply._id">
                  <el-input
                    :placeholder="placeholderText"
                    class="input"
                    v-model.trim="replyContext"
                    :maxlength="contentLength"
                  ></el-input>
                  <el-button
                    type="info"
                    size="mini"
                    class="reply-button"
                    @click="addComment(item._id, reply.username)"
                  >回复</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 暂无评论的空状态 -->
      <el-empty :description="emptyText" v-show="comments.length === 0"></el-empty>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      bookid: {
        //评论所属文章 id
        type: Number,
        required: true

      },
      emptyText: {
        // 评论为空的时候显示的文字
        type: String,
        default: "期待你的评论！"
      },
      buttonText: {
        // 按钮文字
        type: String,
        default: "评论"
      },
      contentLength: {
        // 评论长度
        type: Number,
        default: 150
      },
      placeholderText: {
        // 默认显示文字
        type: String,
        default: "请输入最多150字的评论..."
      }
    },
    data() {
      return {
        comments: [
          {
            _id: "first0", // 评论id
            date: "2022.09.01", //创建日期
            username: "孤城浪人", //评论人
            userId: "1",
            avatarUrl:
              "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png", //头像地址
            favour: ["1", "2", "3"], //点赞的用户id
            content: "666", //评论内容
            replyInfo: [
              //回复的内容
              {
                _id: "sec0", // 当前此条回复的id
                date: "2022.09.01", //创建日期
                replyName: "孤城浪人", //回复的对象
                username: "孤城浪人", //评论人
                userId: "1",
                favour: ["2", "3", "4"],
                avatarUrl:
                  "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                content: "博主厉害了" //回复的内容
              }
            ]
          }
        ], // 获取得到的评论
        context: "", // 评论内容
        replyContext: "", //一级评论回复
        isShowSec: "", //是否显示次级回复框
        isClickId: "", //记录点击回复的评论id
        userId: "1", // 浏览器指纹
        username: "孤城浪人", //你的用户名
        firstIdx: 1,
        secIdx: 1,
        avatarUrl:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      };
    },
    created() {
      // 获取评论数据
      // this.getCommentList();
    },
    methods: {
      // 唤起文件选择
      handleClick() {
        this.$refs.avatar.click();
      },
      dealWithdAvatar(e) {
        const maxSize = 2 * 1024 * 1024;
        const file = Array.prototype.slice.call(e.target.files)[0];
        console.log(file);
      },
      // 获取本篇文章所有评论
      async getCommentList() {
        try {
          this.comments = [];
          let id = "";
          if (this.articleId == "messageBoard") {
            id = "messageBoard";
          } else {
            id = this.articleId;
          }
          // this.comments = await getCommentList({ articleId: id });
        } catch (err) {
          this.$message.error("获取评论失败");
          return;
        }
      },
      // 评论点赞
      giveALike(item, _id) {
  try {
    // 判断当前用户是否已经点过赞
    const index = item.favour.indexOf(this.userId);
    if (index !== -1) {
      // 如果已经点过赞，则取消点赞
      item.favour.splice(index, 1);
    } else {
      // 如果未点过赞，则进行点赞操作
      item.favour.push(this.userId);
    }
    // 向后台提交数据等操作可以在这里进行
  } catch (err) {
    this.$message.error(err);
  }
},

      // 回复按钮显隐切换
      isShowSecReply(id) {
        if (this.isShowSec === id) {
          this.isShowSec = "";
        } else {
          this.isShowSec = id;
        }
      },
      // 新增评论
      async addComment(articleId, replyName) {
        // replyName 存在则说明是次级评论
        let addParams = {};
        if (replyName) {
          // 次级评论
          if (!this.replyContext.trim()) {
            this.$message.error("评论内容不可以为空");
            return;
          }
          addParams = {
            articleId: articleId,
            replyName: replyName,
            content: this.replyContext.trim(),
            //创建当前次级评论的id
            _id: this.secIdx,
            date: this.formatDate(),
            username: this.username,
            userId: this.userId,
            avatarUrl: this.avatarUrl,
            favour: []
          };
        } else {
          // 一级评论
          if (!this.context.trim()) {
            this.$message.error("评论内容不可以为空");
            return;
          }
          addParams = {
            articleId: articleId,
            content: this.context.trim(),
            //创建当前评论的id
            _id: this.firstIdx,
            date: this.formatDate(),
            username: this.username,
            userId: this.userId,
            avatarUrl: this.avatarUrl,
            favour: [],
            replyInfo: []
          };
        }
        // 前端模拟生成评论id,自增
        this.firstIdx++;
        this.secIdx++;
        // console.log(addParams);
        // 提交评论
        try {
          // 向后台提交数据
          if (replyName) {
            // 当前次级评论属于哪个一级评论
            let index = this.comments.findIndex((item) => item._id == articleId);
            this.comments[index].replyInfo.push(addParams);
          } else {
            this.comments.unshift(addParams);
          }
          this.replyContext = this.context = "";
          this.$message.success("评论成功");
          this.isShowSec = "";
        } catch (err) {
          this.$message.error(err);
        }
      },
      // 格式化时间
      formatDate() {
        const dt = new Date();
        const y = dt.getFullYear();
        const m = (dt.getMonth() + 1).toString().padStart(2, "0");
        const d = dt
          .getDate()
          .toString()
          .padStart(2, "0");
        const hh = dt
          .getHours()
          .toString()
          .padStart(2, "0");
        const mm = dt
          .getMinutes()
          .toString()
          .padStart(2, "0");
        const ss = dt
          .getSeconds()
          .toString()
          .padStart(2, "0");
        return `${y}.${m}.${d} ${hh}:${mm}:${ss}`;
      }
    }
  };
  </script>
  
  <style scoped>
  /* 原有的less样式改为标准CSS */
.avatar-input-container{
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
}
  
  .comment {
    margin-top: 20px;
    width: 100%;
    padding: 10px;
    border: 1px solid #e4e4e4;
  }
  .comment .comment-header {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  .comment .comment-header .input {
    margin-right: 10px;
    flex-grow: 1;
  }
  .comment .comment-header .el-button {
    flex-shrink: 0;
  }
  .comment .comment-body .first-comment {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  .comment .comment-body .first-comment .content {
    flex-grow: 1;
    margin-left: 10px;
  }
  .comment .comment-body .first-comment .content h3 {
    margin: 0;
    font-size: 14px;
    color: #666;
  }
  .comment .comment-body .first-comment .content span {
    font-size: 12px;
    color: #999;
  }
  .comment .comment-body .first-comment .content p {
    font-size: 14px;
    color: #333;
    margin: 5px 0;
  }
  .comment .comment-body .first-comment .comment-right {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #999;
  }
  .comment .comment-body .first-comment .comment-right i {
    cursor: pointer;
    margin-right: 10px;
  }
  .comment .comment-body .first-comment .comment-right .active {
    color: #f56c6c;
  }
  .comment .comment-body .first-comment .reply-comment {
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
  }
  .comment .comment-body .first-comment .reply-comment .input {
    flex-grow: 1;
    margin-right: 10px;
  }
  .comment .comment-body .first-comment .reply-comment .reply-button {
    flex-shrink: 0;
  }
  .comment .comment-body .first-comment .second-comment {
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
  }
  .comment .comment-body .first-comment .second-comment .content {
    flex-grow: 1;
    margin-left: 10px;
  }
  .comment .comment-body .first-comment .second-comment .content h3 {
    margin: 0;
    font-size: 14px;
    color: #666;
  }
  .comment .comment-body .first-comment .second-comment .content span {
    font-size: 12px;
    color: #999;
  }
  .comment .comment-body .first-comment .second-comment .content p {
    font-size: 14px;
    color: #333;
    margin: 5px 0;
  }
  .comment .comment-body .first-comment .second-comment .comment-right {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #999;
  }
  .comment .comment-body .first-comment .second-comment .comment-right i {
    cursor: pointer;
    margin-right: 10px;
  }
  .comment .comment-body .first-comment .second-comment .comment-right .active {
    color: #f56c6c;
  }


  </style>
  