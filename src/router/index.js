import Vue from 'vue'
import Router from 'vue-router'
import Good from '../components/Goods'
import Ratings from '../components/Ratings'
import Seller from '../components/Seller'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name:'Goods',
      redirect: '/good'
      // component:Good
    },
    {
      path: '/good',
      // name:'Goods',
      component: Good
    },
    {
      path: '/retings',
      // name:'Goods',
      component: Ratings
    },
    {
      path: '/seller',
      // name:'Goods',
      component: Seller
    }
  ]
})
