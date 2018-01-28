import Vue from 'vue'
import Router from 'vue-router'
import Toplist from '@/components/TopList/Toplist'
import Home from '@/components/Home/Home'
import Songlist from '@/components/Songlist/Songlist'
import Radio from '@/components/Radio/Radio'
import MV from '@/components/MV/MV'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'      
    } ,
    {
      path: '/home',
      name: 'Home',
      component: Home
      
    } ,
    {
      path: '/toplist',
      name: 'Toplist',
      component: Toplist
    } ,
    {
      path: '/songlist',
      name: 'Songlist',
      component: Songlist
    } ,
    {
      path: '/radio/:id?',
      name: 'Radio',
      props: true,
      component: Radio
    } ,
    {
      path: '/mv',
      name: 'MV',
      component: MV
    }
  ]
})
