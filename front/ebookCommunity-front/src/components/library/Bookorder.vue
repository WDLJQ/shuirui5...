<!--<template>
    <div class="orderByscience">
      <h2>排行榜</h2>
      <ol>
        <li v-for="item in sortedList" :key="item.id">
          {{ item.name }} - {{ item.score }}
        </li>
      </ol>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: '条目 A', score: 95 },
          { id: 2, name: '条目 B', score: 80 },
          { id: 3, name: '条目 C', score: 90 },
          { id: 4, name: '条目 D', score: 70 },
          { id: 5, name: '条目 E', score: 85 },
        ]
      };
    },
    computed: {
      sortedList() {
        return this.items.sort((a, b) => b.score - a.score);
      }
    }
  };
  </script>
  
  <style scoped>
  .orderByscience {
    width: 300px;
    margin: 0 auto;
    text-align: left;
    font-family: Arial, sans-serif;
  }
  
  h2 {
    text-align: center;
  }
  
  ol {
    padding-left: 20px;
  }
  
  li {
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
  }
  
  li:last-child {
    border-bottom: none;
  }
  </style>
  -->
  <template>
    <div class="orderByscience">
      <h2>排行榜</h2>
      
      <div class="rankings">
        <div class="ranking" v-for="(ranking, index) in rankings" :key="index">
          <h3>{{ ranking.title }}</h3>
          <ol>
            <li v-if="ranking.loading">加载中...</li>
            <li v-for="(item, itemIndex) in ranking.items.slice(0, 10)" :key="item.id">
              {{ item.name }} - {{ item.likes }} 个点赞
            </li>
            <li v-if="ranking.error">{{ ranking.error }}</li>
            <li v-if="!ranking.loading && ranking.items.length === 0">暂无数据</li>
          </ol>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        rankings: [
          {
            title: '文学排行榜 ',
            api: 'https://api.example.com/rankings1',
            items: [],
            loading: true,
            error: null
          },
          {
            title: ' 科幻排行榜',
            api: 'https://api.example.com/rankings2',
            items: [],
            loading: true,
            error: null
          },
          {
            title: ' 总排行榜 ',
            api: 'https://api.example.com/rankings3',
            items: [],
            loading: true,
            error: null
          }
        ]
      };
    },
    created() {
      this.rankings.forEach((ranking, index) => {
        this.fetchData(index);
      });
    },
    methods: {
      async fetchData(index) {
        try {
          const response = await axios.get("https://");
          this.$set(this.rankings, index, {
            ...this.rankings[index],
            items: response.data,
            loading: false
          });
        } catch (error) {
          this.$set(this.rankings, index, {
            ...this.rankings[index],
            error: '加载数据时出错',
            loading: false
          });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .orderByscience {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
    font-family: Arial, sans-serif;
  }
  
  h2 {
    text-align: center;
  }
  
  .rankings {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .ranking {
    width: 100%;
    margin-bottom: 20px;
  }
  
  @media (min-width: 600px) {
    .ranking {
      width: 48%;
    }
  }
  
  @media (min-width: 900px) {
    .ranking {
      width: 30%;
    }
  }
  
  ol {
    padding-left: 20px;
  }
  
  li {
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
  }
  
  li:last-child {
    border-bottom: none;
  }
  </style>
  
  