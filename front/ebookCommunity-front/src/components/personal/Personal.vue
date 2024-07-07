<!-- <template>
    <div>122</div>
</template> -->

<template>
    <div>
      <el-container style="height: 800px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: white">
          <el-menu :default-openeds="['1']">
   
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-postcard"></i>个人信息</template>
              <el-menu-item-group>
   
                <router-link class="alink" to="/showinfo">
                  <el-menu-item index="1-1">
                    基本信息
                  </el-menu-item>
   
                </router-link>
   
                <router-link class="alink" to="/infoeditor">
                  <el-menu-item index="1-2">
                    信息修改
                  </el-menu-item>
                </router-link>
   
                <router-link class="alink" to="/imageUp">
                  <el-menu-item index="1-3">
   
                    头像修改
   
                  </el-menu-item>
                </router-link>
   
              </el-menu-item-group>
   
            </el-submenu>
            <router-link class="alink" to="/mycollect">
            <el-menu-item index="2">
                <template slot="title">
                    <i class="el-icon-star-on"></i>我的书架</template>
                  </el-menu-item>
                </router-link>
          </el-menu>
        </el-aside>
   
        <el-container
          style="background-image: url(/static/logo/noticesbg.jpg);
          background-repeat: no-repeat;
          background-size:100% 100%;
          "
        >
          <el-main>
            <div style="width: 80%;margin: 0 auto">
              <router-view></router-view>
            </div>
          </el-main>
        </el-container>
   
      </el-container>
   
    </div>
  </template>
   
  <script>
  export default {
    name: "myspace",
    data() {
   
      return {
   
      }
    },
  }
  </script>
   
  <style scoped>
  .el-header {
    background-color: #e5efe2;
    color: #333;
    line-height: 60px;
  }
   
  .el-aside {
    color: #333;
  }
  .router-link-active {
    text-decoration: none;
  }
   
  .alink{
   
    text-decoration: none;
  }
  </style>