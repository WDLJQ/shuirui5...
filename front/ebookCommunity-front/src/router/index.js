import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

import Register from '@/views/Register.vue';
import AppIndex from '@/components/AppIndex.vue'
import LibraryIndex from '@/components/library/LibraryIndex.vue'
import Personal from '@/components/personal/Personal.vue'
import Showinfo from '@/components/personal/ShowInfo.vue'
import Infoeditor from '@/components/personal/InfoEditor.vue'
import ImageUp from '@/components/personal/ImageUp.vue'
import MyCollect from '@/components/personal/MyCollect.vue'

import BookInfo from '@/components/library/BookInfo.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
  
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect:'/index',
      children:[
        {
          path:'/index',name:'AppIndex',component: AppIndex
        },
        {
          path: '/jotter',
          name: 'Jotter',
          component: () => import('../components/jotter/Articles')
        },
  
        {
          path: '/jotter/article',
          name: 'Article',
          component: () => import('../components/jotter/ArticleDetails')
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
        },
        {
          path: '/book/:id',
          name: 'BookInfo',
          component: BookInfo,
          props: true
        },

        {
          path: '/personal',
          name: 'Personal',
          component: Personal,
          redirect:'/showinfo',
          children:[
            {
              path: '/showinfo',
          name: 'Showinfo',
          component: Showinfo,
        },
          {
            path: '/infoeditor',
            name: 'Infoeditor',
            component: Infoeditor,
          },
          {
            path: '/imageUp',
            name: 'Imageup',
            component: ImageUp,
          },
          {
            path: '/mycollect',
            name: 'MyCollect',
            component: MyCollect,
          },


          ]
        
        },
        // {
        //   path: '/showinfo',
        //   name: 'Showinfo',
        //   component: Showinfo,
        // },
      ]
    },
    // {
    //   path: '/personal',
    //   name: 'Personal',
    //   component: Personal,
    //   children:[
    //     {path: '/showinfo',
    //   name: 'Showinfo',
    //   component: Showinfo,}
    //   ]
    // },
  
  ]
})