<!-- <template>
  <div class="container">
    <div class="book-info">
      <el-row :gutter="20">
        <el-col :span="6">
          <img src="@/assets/2.jpg" alt="Book Cover" class="book-cover">
        </el-col>
        <el-col :span="18" class="book-details">
          <h3 style="margin-bottom: 8px;">{{ book.title }}</h3>
          <p style="margin: 5px">{{ book.author }}</p>
          <p style="margin: 5px;">{{ book.date }}</p>
          <p class="description">{{ book.abs }}</p>
          <div class="actions">
            <el-button type="primary">立即阅读</el-button>
            <el-button>加入书架</el-button>
          </div>
        </el-col>
      </el-row>
      <div class="m-bookauthor">
        <h4>作者简介</h4>
        <div class="f-border detail">
          <div class="txt">
            <p>
              鲁迅（1881年9月25日—1936年10月19日），原名周樟寿，1898年改为周树人，字豫山、
              豫亭，后改名为豫才。以笔名鲁迅闻名于世，浙江绍兴人，为中国的近代著名作家，新文化运
              动的领导人之一，
              中国现代文学的奠基人和开山巨匠，在西方世界享有盛誉的中国近代文学家、思想家。
            </p>
            <p>
              鲁迅的主要成就包括杂文、短中篇小说、文学、思想和社会评论、学术著作、自然科学著作、
              古代典籍校勘与研究、散文、现代散文诗、旧体诗、外国文学与学术翻译作品和木刻版画的研究，对于五
              四运动以后的中国社会思想文化发展产生一定的影响，蜚声世界文坛，尤其在韩国、日本思想文化领域有极其重要
              的地位和影响，被誉为“二十世纪东亚文化地图上占最大领土的作家”。毛泽东评价他
              是伟大的无产阶级的文学家、思想家、革命家，是中国文化革命的主将，也被人民称为“民族魂”。
            </p>
            <p>
              鲁迅的主要成就包括杂文、短中篇小说、文学、思想和社会评论、学术著作、自然科学著作、
              古代典籍校勘与研究、散文、现代散文诗、旧体诗、外国文学与学术翻译作品和木刻版画的研究，对于五
              四运动以后的中国社会思想文化发展产生一定的影响，蜚声世界文坛，尤其在韩国、日本思想文化领域有极其重要
              的地位和影响，被誉为“二十世纪东亚文化地图上占最大领土的作家”。毛泽东评价他
              是伟大的无产阶级的文学家、思想家、革命家，是中国文化革命的主将，也被人民称为“民族魂”。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookInfo',
  props: ['id'],
  data() {
    return {
      book: {}
    };
  },
  mounted() {
    this.loadBookInfo();
  },
  methods: {
    loadBookInfo() {
      // 模拟加载图书信息
      const books = [
        {
          id: 1,
          title: '狂人日记',
          author: '鲁迅',
          date: '2024-01-01',
          press: '出版社X',
          abs: '小说通过被迫害者“狂人”的形象以及“狂人”的自述式的描写，揭示了封建礼教的“吃人”本质，表现了作者对以封建礼教为主体内涵的中国封建文化的反抗；也表现了作者深刻的忏悔意识。作者以彻底的“革命民主主义”的立场对中国的文化进行了深刻的反思，同时对中国的甚至是人类的前途表达了深广的忧愤。',
          cover: '@/assets/1.jpg'
        }
      ];
      this.book = books.find(book => book.id == this.id) || {};
    }
  }
};
</script>

<style scoped>
.container {

}

.book-info {
  margin-top: 50px;
  margin-left: 50px;
  width: 80%;
  
}

.book-cover {
  width: 300px;
  height: 350px;
  margin-right: 20px;
}

.book-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.book-details h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-top: 25px;
}

.description {
  width: 70%;
  color: #545c66;
  font-size: 15px;
  margin-top: 1px;
  height: 130px;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: auto;
}

.m-bookauthor h4 {
  font-size: 16px;
  font-weight: 700;
  color: #06080a;
  padding-bottom: 10px;
}

.m-bookauthor .detail {
  padding: 30px 20px;
  color: #888;
  line-height: 20px;
  border: 1px solid #ebe6e1;
}

.m-bookauthor {
  margin-top: 30px;
}

.m-bookauthor h4 {
  font-size: 16px;
  font-weight: 700;
  color: #06080a;
  padding-bottom: 10px;
}

.m-bookauthor .detail {
  padding: 15px 20px;
  color: #888;
  line-height: 20px;
  border: 1px solid #ebe6e1;
}

.m-bookauthor .detail a {
  color: #655;
  font-size: 16px;
}

.m-bookauthor .detail a:hover {
  color: #ca483b;
}

.m-bookauthor .detail span {
  float: right;
  color: #888;
}

.m-bookauthor h5 {
  font-size: 14px;
  color: #655;
  margin-bottom: 25px;
}

.m-bookauthor .txt a {
  display: inline-block;
  margin-left: 10px;
  text-indent: -9999px;
  width: 40px;
  height: 20px;
}

.txt p {
  font-size: 14px;
  color: #655;
}
</style> -->

<template>
  <div class="outer-container">
    <div class="container">
      <div class="book-info">
        
        <el-row :gutter="20">
  <el-col :span="6">
    <img src="@/assets/2.jpg" alt="Book Cover" class="book-cover">
  </el-col>
  <el-col :span="18" class="book-details">
    <div class="title-container" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
      <h3>{{ book.title }}</h3>
      <i v-if="isAdmin" class="el-icon-edit" 
      style="cursor: pointer;margin-right: 200px;font-size: 20px"
      @click="handleEditClick"
      ></i>
    </div>
    <p style="margin: 5px">{{ book.author }}</p>
    <p style="margin: 5px;">{{ book.date }}</p>
    <p class="description">{{ book.abs }}</p>
    <div class="actions">
      <el-button type="primary">立即阅读</el-button>
      <el-button @click="toggleShelf" :type="buttonType">{{ buttonText }}</el-button>
    </div>
  </el-col>
</el-row>

        <div class="m-bookauthor">
          <h4>作者简介</h4>
          <div class="f-border detail">
            <div class="txt">
              <p>
                鲁迅（1881年9月25日—1936年10月19日），原名周樟寿，1898年改为周树人，字豫山、
                豫亭，后改名为豫才。以笔名鲁迅闻名于世，浙江绍兴人，为中国的近代著名作家，新文化运
                动的领导人之一，
                中国现代文学的奠基人和开山巨匠，在西方世界享有盛誉的中国近代文学家、思想家。
              </p>
              <p>
                鲁迅的主要成就包括杂文、短中篇小说、文学、思想和社会评论、学术著作、自然科学著作、
                古代典籍校勘与研究、散文、现代散文诗、旧体诗、外国文学与学术翻译作品和木刻版画的研究，对于五
                四运动以后的中国社会思想文化发展产生一定的影响，蜚声世界文坛，尤其在韩国、日本思想文化领域有极其重要
                的地位和影响，被誉为“二十世纪东亚文化地图上占最大领土的作家”。毛泽东评价他
                是伟大的无产阶级的文学家、思想家、革命家，是中国文化革命的主将，也被人民称为“民族魂”。
              </p>
              <p>
                鲁迅的主要成就包括杂文、短中篇小说、文学、思想和社会评论、学术著作、自然科学著作、
                古代典籍校勘与研究、散文、现代散文诗、旧体诗、外国文学与学术翻译作品和木刻版画的研究，对于五
                四运动以后的中国社会思想文化发展产生一定的影响，蜚声世界文坛，尤其在韩国、日本思想文化领域有极其重要
                的地位和影响，被誉为“二十世纪东亚文化地图上占最大领土的作家”。毛泽东评价他
                是伟大的无产阶级的文学家、思想家、革命家，是中国文化革命的主将，也被人民称为“民族魂”。
              </p>
            </div>
          </div>
        </div>
        <div style="margin-top: 20px;">
          <comments :bookId="id"></comments>
        </div>
      </div>
    </div>
    <el-dialog
      title="新增图书"
      :visible.sync="dialogVisible"
      width="35%" 
      :center="true"
      @close="handleClose">
      <el-form ref="form" :model="bookForm" label-width="80px">
<div style="display: flex; flex-direction: row;">
      <div style="display: flex; flex-direction: column;">
        <el-form-item label="书名" >
        <el-input v-model="bookForm.title" placeholder="请输入书名" style="width: 180px"></el-input>
      </el-form-item>
        <el-form-item label="作者" >
          <el-input v-model="bookForm.author" placeholder="请输入作者" style="width: 180px"></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker v-model="bookForm.date" type="date" placeholder="选择日期" style="width: 180px"></el-date-picker>
        </el-form-item>
      </div>
      <div style="display: flex; flex-direction: column;text-align: center;margin-top: 0px">
        <span>上传封面</span>
        <el-upload
        style="margin-left: 30px; margin-top: 0px"
          class="avatar-uploader"
          action="http://localhost:8090/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="bookForm.imageUrl" :src="'http://localhost:8090/images/upload/' + bookForm.imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      </div>
        <el-form-item label="出版社">
          <el-input v-model="bookForm.press" placeholder="请输入出版社" style="width: 50%"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="bookForm.abs" type="textarea" placeholder="请输入书籍描述" ></el-input>
        </el-form-item>
        <el-form-item label="作者简介">
          <el-input v-model="bookForm.authorinfo" type="textarea" placeholder="请输入书籍描述" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit" style="margin-right: 30px;">提交</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
import comments from './Comments.vue'
export default {
  name: 'BookInfo',
  components: {comments},
  props: ['id'],
  data() {
    return {
      book: {},
      // 初始化按钮状态为“加入书架”
      isOnShelf: false,
      isAdmin:true,
      dialogVisible: false,
      bookForm: {  // 新增书籍表单数据
        title: '',
        author: '',
        date: '',
        press: '',
        abs: '',
        authorinfo:'',
        imageUrl:''
      }
    };
  },
  mounted() {
    this.loadBookInfo();
  },
  computed: {
    // 计算按钮文本
    buttonText() {
      return this.isOnShelf ? '已在书架' : '加入书架';
    },
    // 计算按钮类型
    buttonType() {
      return this.isOnShelf ? 'info' : '';
    }
  },
  methods: {
    handleAvatarSuccess(res) {
      console.log("img",res)
      this.registerForm.imageUrl= res
        //this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
    loadBookInfo() {
      // 模拟加载图书信息
      const books = [
        {
          id: 1,
          title: '狂人日记',
          author: '鲁迅',
          date: '2024-01-01',
          press: '出版社X',
          abs: '小说通过被迫害者“狂人”的形象以及“狂人”的自述式的描写，揭示了封建礼教的“吃人”本质，表现了作者对以封建礼教为主体内涵的中国封建文化的反抗；也表现了作者深刻的忏悔意识。作者以彻底的“革命民主主义”的立场对中国的文化进行了深刻的反思，同时对中国的甚至是人类的前途表达了深广的忧愤。',
          cover: '@/assets/1.jpg'
        }
      ];
      this.book = books.find(book => book.id == this.id) || {};
    },
    toggleShelf() {
      // 切换按钮状态
      this.isOnShelf = !this.isOnShelf;
      // 这里可以添加逻辑来更新书架状态，例如调用 API 等

      this.$message.success(this.isOnShelf ? '已加入书架' : '已移出书架');
    },
    handleEditClick() {
      this.dialogVisible=true
      // 编辑图标点击的逻辑处理
      //alert('编辑图标被点击');
    },
    handleClose() {
      // 清空表单数据
      this.$refs['form'].resetFields();
    },
    handleSubmit() {
      // 提交表单数据，可以通过 this.bookForm 获取表单数据，发送到后端进行保存等操作
      console.log('提交表单:', this.bookForm);
      // 在这里可以调用保存数据的方法，比如 this.saveBook(this.bookForm);
      // 提交成功后关闭对话框
      this.dialogVisible = false;
    }
  }
};
</script>

<style scoped>
.outer-container {
  height:90vh;
  overflow-y: auto;
}

.container {
  padding: 20px;
}

.book-info {
  margin-top: 40px;
  margin-left: 50px;
  width: 80%;
}

.book-cover {
  width: 300px;
  height: 350px;
  margin-right: 20px;
}

.book-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.book-details h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-top: 25px;
}

.description {
  width: 70%;
  color: #545c66;
  font-size: 15px;
  margin-top: 1px;
  height: 130px;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: auto;
}

.m-bookauthor h4 {
  font-size: 16px;
  font-weight: 700;
  color: #06080a;
  padding-bottom: 10px;
}

.m-bookauthor .detail {
  padding: 30px 20px;
  color: #888;
  line-height: 20px;
  border: 1px solid #ebe6e1;
}

.m-bookauthor {
  margin-top: 30px;
}

.m-bookauthor h4 {
  font-size: 16px;
  font-weight: 700;
  color: #06080a;
  padding-bottom: 10px;
}

.m-bookauthor .detail {
  padding: 15px 20px;
  color: #888;
  line-height: 20px;
  border: 1px solid #ebe6e1;
}

.m-bookauthor .detail a {
  color: #655;
  font-size: 16px;
}

.m-bookauthor .detail a:hover {
  color: #ca483b;
}

.m-bookauthor .detail span {
  float: right;
  color: #888;
}

.m-bookauthor h5 {
  font-size: 14px;
  color: #655;
  margin-bottom: 25px;
}

.m-bookauthor .txt a {
  display: inline-block;
  margin-left: 10px;
  text-indent: -9999px;
  width: 40px;
  height: 20px;
}

.txt p {
  font-size: 14px;
  color: #655;
}


.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 170px;
    height: 170px;
    line-height: 170px;
    text-align: center;
  }
  .avatar {
    width: 170px;
    height: 170px;
    display: block;
  }
</style>
