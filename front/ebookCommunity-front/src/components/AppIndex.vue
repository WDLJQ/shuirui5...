<template>
    <div class="container">
      <div class="left-side">
        <div class="typing-container">
          <h1>欢迎大家登录电子书网站</h1>
        </div>
  
        <div class="carousel-wrapper">
          <el-carousel :interval="4000" height="400px" width="250px" @change="changeImg" indicator-position="outside">
            <el-carousel-item v-for="(item, index) in images" :key="index">
              <el-image
                :class="className"
                style="width:80%; height:100%;"
                :src="item.idView"
                fit="fill"
              ></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
  
      <div class="right-side">
        <div class="system-recommendation">系统推荐</div>
        <div class="recommended-books">
          <div class="book-card" v-for="(book, index) in recommendedBooks" :key="index">
            <img :src="book.image" alt="Book Cover" class="book-cover" />
            <div class="book-details">
              <h3>{{ book.title }}</h3>
              <p><strong>作者:</strong> {{ book.author }}</p>
              <p>{{ book.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppIndex",
    data() {
      return {
        images: [
          { id: 0, idView: require("../assets/1.jpg") },
          { id: 1, idView: require("../assets/2.jpg") },
          { id: 2, idView: require("../assets/3.jpg") },
          { id: 3, idView: require("../assets/4.jpg") },
          { id: 4, idView: require("../assets/5.jpg") }
        ],
        className: "",
        recommendedBooks: [
          {
            title: "书名1",
            image: require("../assets/1.jpg"),
            author: "作者1",
            description: "这是一本很棒的书籍，内容丰富，适合各种读者。"
          },
          {
            title: "书名2",
            image: require("../assets/2.jpg"),
            author: "作者2",
            description: "这本书有着深刻的思想，值得一读。"
          }
          // 根据需要添加更多书籍
        ]
      };
    },
    mounted() {
      this.className = "lun-img-two";
      setTimeout(() => {
        this.className = "lun-img";
      }, 300);
    },
    methods: {
      changeImg: function(e) {
        this.className = "lun-img-two";
        setTimeout(() => {
          this.className = "lun-img";
        }, 300);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex; /* 使用Flexbox布局 */
  }
  
  .left-side {
    flex: 1; /* 左侧部分占据页面的一半空间 */
    padding: 20px; /* 添加内边距以增加内容间距 */
  }
  
  .right-side {
    flex: 1; /* 右侧部分占据页面的一半空间 */
    padding: 20px; /* 添加内边距以增加内容间距 */
  }
  
  .typing-container h1 {
    width: 12em;
    animation: typingWords 5s steps(12) infinite, cursor 0.5s steps(1) infinite;
    white-space: nowrap;
    overflow: hidden;
    border-right: 1px solid #000;
  }
  
  @keyframes typingWords {
    0% {
      width: 0;
    }
  }
  
  @keyframes cursor {
    50% {
      border-color: transparent;
    }
  }
  
  .carousel-wrapper {
    margin-top: 50px;
    width: 70%; /* 宽度100%填充父容器 */
    height: 300px;
  }
  
  .el-carousel__item.is-animating {
    transition: transform 1s ease-in-out;
  }
  
  .indicator-item {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0 8px;
  }
  
  .recommended-books {
    width: 100%; /* 宽度100%填充父容器 */
  }
  
  .book-card {
    display: flex; /* 使用Flexbox布局 */
    margin-bottom: 20px; /* 调整书籍卡片之间的间距 */
  }
  
  .book-cover {
    width: 100px; /* 调整书籍封面图片宽度 */
    height: 150px; /* 调整书籍封面图片高度 */
    margin-right: 20px; /* 调整书籍封面与书籍详情之间的间距 */
  }
  
  .book-details {
    flex: 1; /* 填充剩余空间 */
  }
  .system-recommendation{
    font-size: 20px; /* 设置字体大小为20像素 */
  font-weight: bold; /* 设置字体加粗 */
  color: #96239a
  }
  
  </style>