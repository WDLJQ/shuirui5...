  <template>
    <div style="margin-bottom: 30px;display: flex;justify-content: center;align-items: center">
      <el-input
        @keyup.enter.native="searchClick"
        placeholder="通过书名或作者搜索..."
        prefix-icon="el-icon-search"
        size="small"
        style="width: 400px;margin-right: 10px"
        v-model="keywords">
      </el-input>
      <el-button size="small" type="primary" icon="el-icon-search" @click="searchClick">搜索</el-button>
      <el-button  v-if="isAdmin" size="small" type="success" icon="el-icon-plus" @click="addNew" style="margin-left: 80px;">新增图书</el-button>
    </div>
  </template>

  <script>
      export default {
        name: 'SearchBar',
        data () {
          return {
            keywords: '',
            books: [],
            cardLoading: [],
            isAdmin:true
          }
        },
        methods: {
          searchClick () {
            this.$emit('onSearch')
          },
          addNew() {
      this.$emit('onAddNew');
    }

        }
      }
  </script>

  <style scoped>

  </style>
