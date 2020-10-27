import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path:'/',
    name:'Home',
    component:()=>import('../comm/Home.vue'),
    children: 
  [  
    {
      path: 'test',
      name: 'test',
      component: ()=>import('../comm/test.vue'),
    },
    {
      path: 'test1',
      name: 'test1',
      component: ()=>import('../comm/test1.vue'),
    },
    {
      path: 'test2',
      name: 'test2',
      component: ()=>import('../comm/test2.vue'),
    },
    {
      path:'wdone',
      name:'wdone',
      component:()=>import('../comm/wdone'),
    },
  
    {
      path:'wdtwo',
      name:'wdtwo',
      component:()=>import('../comm/wdtwo'),
    }
  ]
  },

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
