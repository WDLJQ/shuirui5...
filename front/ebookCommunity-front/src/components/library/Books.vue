<template>
  <div>
    <el-row style="height: 600px;">
      <search-bar @onSearch="searchResult" @onAddNew="handleAddNew" ref="searchBar"></search-bar>

      <el-tooltip effect="dark" placement="right"
                  v-for="item in books.slice((pagination.currentPage-1)*pagination.pageSize,
                  pagination.currentPage*pagination.pageSize)"
                  :key="item.id">
        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.title}}</p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px">
          <span>{{item.author}}</span> 
          <!-- <span>{{item.date}}</span> /
          <span>{{item.press}}</span> -->
        </p>
        <p slot="content" style="width: 300px" class="abstract">{{item.abs}}</p>
        <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px" class="book"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover" @click="goToBookInfo(item.id)">
            <img :src="item.cover" alt="封面">
            <div class="delete-img" v-if="isAdmin">
                  <i class="el-icon-delete" @click="deleteImg()"></i>
                </div>
          </div>
          <div class="info">
            <div class="title">
              <a href="">{{item.title}}</a>
            </div>
          </div>
          <div class="author">{{item.author}}</div>
        </el-card>
      </el-tooltip>
    </el-row>

    <el-row>
      <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      @current-change="handleCurrentChange"
      :page-size="pagination.pageSize"
      :current-page="pagination.currentPage"
      :total="pagination.total"
    ></el-pagination>
    </el-row>

    <el-dialog
      title="新增图书"
      :visible.sync="dialogVisible"
      width="35%" 
      :center="true"
      @close="handleClose">
      <el-form ref="form" :model="bookForm" label-width="80px">
<div style="display: flex; flex-direction: row;">
      <div style="display: flex; flex-direction: column;">
        <el-form-item label="书名" required>
        <el-input v-model="bookForm.title" placeholder="请输入书名" style="width: 180px"></el-input>
      </el-form-item>
        <el-form-item label="作者" required>
          <el-input v-model="bookForm.author" placeholder="请输入作者" style="width: 180px"></el-input>
        </el-form-item>
        <el-form-item label="日期" required>
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
        <el-form-item label="出版社" >
          <el-input v-model="bookForm.press" placeholder="请输入出版社" style="width: 50%"></el-input>
        </el-form-item>
        <el-form-item label="描述" required>
          <el-input v-model="bookForm.abs" type="textarea" placeholder="请输入书籍描述" ></el-input>
        </el-form-item>
        <el-form-item label="作者简介" required>
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
import SearchBar from './SearchBar'
import ViewSwitch from './ViewSwitch'

export default {
  name: 'Books',
  components: {SearchBar, ViewSwitch},
  data () {
    return {
      books: [
        {
          id: 1,
          title: '书籍标题1',
          author: '作者A',
          date: '2024-01-01',
          press: '出版社X',
          abs: '书籍1的描述',
          cover: '@/assets/1.jpg'
        },
        {
          id: 2,
          title: '书籍标题2',
          author: '作者B',
          date: '2024-02-01',
          press: '出版社Y',
          abs: '书籍2的描述',
          cover: 'https://via.placeholder.com'
        }
      ],
      pagination: {
        currentPage: 1,
        pageSize: 4,
        total: 5
      },
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
    }
  },
  mounted: function () {
    this.loadBooks()
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

    loadBooks () {
      // var _this = this
      // this.$axios.get('/books').then(resp => {
      //   if (resp && resp.data.code === 200) {
      //     _this.books = resp.data.result
      //   }
      // })
      this.pagination.total = this.books.length
    },
    handleCurrentChange: function (currentPage) {
      this.pagination.currentPage = currentPage
    },
    searchResult () {
      var _this = this
      this.$axios
        .get('/search?keywords=' + this.$refs.searchBar.keywords, {
        }).then(resp => {
        if (resp && resp.data.code === 200) {
          _this.books = resp.data.result
        }
      })
    },
    goToBookInfo (id) {
      this.$router.push({ name: 'BookInfo', params: { id: id } })
    },
    handleAddNew() {
      this.dialogVisible=true
      console.log('新增按钮被点击');
      // 处理新增逻辑
    },
    deleteImg() {
      // 阻止事件冒泡
      event.stopPropagation();
      this.$confirm("是否删除该图书?", "删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        // 发送 POST 请求到后端删除接口
      axios.delete('book/deleteBook/${id}')
        .then(response => {
          // 请求成功处理逻辑
          console.log('Book deleted:', response.data);
          // 这里可以根据需要更新前端的书籍列表或其他操作
          // 如重新加载书籍列表等
        })
        .catch(error => {
          // 请求失败处理逻辑
          console.error('Error deleting book:', error);
          this.$message.error('删除图书失败，请稍后重试');
        });

        console.log(111)
      }).catch(() => {
        // 用户点击取消时的处理逻辑
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      });
        
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
}
</script>
<style scoped>
  .cover {
    position: relative; /* 确保 .delete-img 相对于 .cover 定位 */
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 115px;
    height: 172px;
  }

  .title {
    font-size: 14px;
    text-align: left;
  }

  .author {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
  }

  .abstract {
    display: block;
    line-height: 17px;
  }

  .el-icon-delete {
    cursor: pointer;
    float: right;
  }

  .switch {
    display: flex;
    position: absolute;
    left: 780px;
    top: 25px;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }
  .el-pagination {
    margin-top: 30px;
    text-align: center;
  }

  .delete-img {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
  display: none; /* 初始状态隐藏 */
}

.el-card:hover .delete-img {
  display: block; /* 鼠标悬停时显示 */
}

.el-icon-delete {
  cursor: pointer;
  font-size: 18px;
  color: #999;
  transition: color 0.3s ease;
}

.el-icon-delete:hover {
  color: red;
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
