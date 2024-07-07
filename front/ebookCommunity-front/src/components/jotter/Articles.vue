<!-- <template>
  <div style="margin-top: 40px">

    <div class="articles-area">
      <el-card style="text-align: left">
        <div v-for="article in articles" :key="article.id">
          <div style="float:left;width:85%;height: 150px;">
            <router-link class="article-link" :to="{path:'jotter/article',query:{id: article.id}}"><span style="font-size: 20px"><strong>{{article.articleTitle}}</strong></span></router-link>
            <el-divider content-position="left">{{article.articleDate}}</el-divider>
            <router-link class="article-link" :to="{path:'jotter/article',query:{id: article.id}}"><p>{{article.articleAbstract}}</p></router-link>
          </div>
          <el-image
            style="margin:18px 0 0 30px;width:100px;height: 100px"
            :src="article.articleCover"
            fit="cover"></el-image>
          <el-divider></el-divider>
        </div>
      </el-card>
    </div>
    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>

  export default {
    name: 'Articles',
    data () {
      return {
        articles: [],
        pageSize: 4,
        total: 0
      }
    },
    mounted () {
      //this.loadArticles()
    },
    methods: {
      // loadArticles () {
      //   var _this = this
      //   this.$axios.get('/article/' + this.pageSize + '/1').then(resp => {
      //     if (resp && resp.data.code === 200) {
      //       _this.articles = resp.data.result.content
      //       _this.total = resp.data.result.totalElements
      //     }
      //   })
      // },
      // handleCurrentChange (page) {
      //   var _this = this
      //   this.$axios.get('/article/' + this.pageSize + '/' + page).then(resp => {
      //     if (resp && resp.data.code === 200) {
      //       _this.articles = resp.data.result.content
      //       _this.total = resp.data.result.totalElements
      //     }
      //   })
      // }
    }
  }
</script>

<style scoped>
  .articles-area {
    width: 990px;
    height: 750px;
    margin-left: auto;
    margin-right: auto;
  }

  .article-link {
    text-decoration: none;
    color: #606266;
  }

  .article-link:hover {
    color: #409EFF;
  }
</style> -->

<!-- <template>
  <div>111</div>
</template> -->

<template>
  <div style="overflow-y: scroll; max-height: 650px">
    <div style="display: flex">
      <img
        src="https://img1.doubanio.com/f/vendors/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif"
        alt=""
        style="margin-left: 1200px; width: 15px; height: 15px; margin-top: 17px"
      />
      <span class="note" @click="handleNote">写笔记</span>
    </div>
    <div style="margin-top: 10px">
      <div class="articles-area">
        <el-card style="text-align: left">
          <div v-for="article in articles" :key="article.id">
            <div style="float: left; width: 85%; height: 150px">
              <router-link
                class="article-link"
                :to="{ path: 'jotter/article', query: { id: article.id } }"
              >
                <span style="font-size: 20px"
                  ><strong>{{ article.articleTitle }}</strong></span
                >
              </router-link>
              <el-divider content-position="left">{{
                article.articleDate
              }}</el-divider>
              <router-link
                class="article-link"
                :to="{ path: 'jotter/article', query: { id: article.id } }"
              >
                <p>{{ article.articleAbstract }}</p>
              </router-link>
            </div>
            <!-- <el-image
            style="margin:18px 0 0 30px;width:100px;height: 100px"
            :src="article.articleCover"
            fit="cover"
          ></el-image>
          <el-divider></el-divider> -->
          </div>
        </el-card>
      </div>

      <el-pagination
        background
        layout="total, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
        :page-size="pagination.pageSize"
        :current-page="pagination.currentPage"
        :total="pagination.total"
      ></el-pagination>
    </div>
    <el-dialog
            title="填写笔记"
            :visible.sync="dialogVisible"
            width="30%"
            :center="true"
            @close="resetForm"
        >
            <el-form ref="noteForm" :model="note" label-width="80px">
                <el-form-item label="标题" required>
                    <el-input v-model="note.title" placeholder="请输入标题" style="width: 70%;"></el-input>
                </el-form-item>
                <el-form-item label="日期" required>
                    <el-date-picker v-model="note.date" type="date" placeholder="选择日期" style="width: 70%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="笔记内容" required>
                    <el-input type="textarea" v-model="note.content" placeholder="请输入笔记内容" :rows="5"></el-input>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer" >
                <el-button @click="dialogVisible = false" style="margin-right: 20px;">取 消</el-button>
                <el-button type="primary" @click="saveNote" >确 定</el-button>
            </span>
        </el-dialog>


  </div>
</template>

<script>
export default {
  name: "Articles",
  data() {
    return {
      articles: [],
      pagination: {
        //分页相关模型数据
        currentPage: 1, //当前页码
        pageSize: 4, //每页显示的记录数
        total: 5, //总记录数
      },
      dialogVisible: false,
      note: {
                    title: '',
                    date: '',
                    content: ''
                }

    };
  },
  mounted() {
    this.loadArticles(1); // 初次加载时获取第一页的文章
  },
  methods: {
    loadArticles(page) {
      // 模拟的测试数据
      const testData = [
        {
          id: 1,
          articleTitle: "测试文章1",
          articleDate: "2024-07-01",
          articleAbstract: "这是测试文章1的笔记。",
          articleCover: "https://via.placeholder.com/100",
        },
        {
          id: 2,
          articleTitle: "测试文章2",
          articleDate: "2024-07-02",
          articleAbstract: "这是测试文章2的摘要。",
          articleCover: "https://via.placeholder.com/100",
        },
        {
          id: 3,
          articleTitle: "测试文章3",
          articleDate: "2024-07-03",
          articleAbstract: "这是测试文章3的摘要。",
          articleCover: "https://via.placeholder.com/100",
        },
        {
          id: 4,
          articleTitle: "测试文章4",
          articleDate: "2024-07-04",
          articleAbstract: "这是测试文章4的摘要。",
          articleCover: "https://via.placeholder.com/100",
        },
        {
          id: 4,
          articleTitle: "5",
          articleDate: "2024-07-04",
          articleAbstract: "这是测试文章4的摘要。",
          articleCover: "https://via.placeholder.com/100",
        },
      ];

      // 模拟分页逻辑
      this.articles = testData.slice(
        (page - 1) * this.pagination.pageSize,
        page * this.pagination.pageSize
      );
      this.total = testData.length;
    },
    handleCurrentChange(page) {
      this.pagination.currentPage = page; // 更新当前页码
      this.loadArticles(page);
    },
    handleNote() {
      this.dialogVisible = true;
      
    },
    saveNote() {
                    // 在这里可以处理保存笔记的逻辑，例如将笔记数据发送到后端
                    console.log('保存笔记:', this.note);
                    // 清空表单
                    this.$refs.noteForm.resetFields();
                    // 关闭弹框
                    this.dialogVisible = false;
                    // 可以在这里添加实际的保存逻辑，如发送到后端或存储到本地
                    // 比如通过 API 调用发送数据到后端保存
                    // axios.post('/api/save_note', this.note)
                    //     .then(response => {
                    //         console.log('笔记保存成功:', response.data);
                    //     })
                    //     .catch(error => {
                    //         console.error('保存笔记出错:', error);
                    //     });
                },
                resetForm() {
                    // 在对话框关闭时重置表单数据
                    this.note.title = '';
                    this.note.date = '';
                    this.note.content = '';
                }
  },
};
</script>

<style scoped>
.articles-area {
  width: 990px;
  margin: 0 auto;
}

.article-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.article-link {
  text-decoration: none;
  color: #606266;
}

.article-link:hover {
  color: #409eff;
}

.el-image {
  flex-shrink: 0;
}
.el-pagination {
  margin-top: 30px; /* 可选：设置分页组件与文章列表的间距 */
  text-align: center; /* 将分页组件内部内容居中 */
}
.note {
  margin-top: 15px;
  margin-left: 5px;
  cursor: pointer;
}
</style>