import Vue from 'vue'
import Router from 'vue-router'
import Vehicles from '@/components/Vehicles'
import VehiclePage from '@/components/VehiclePage'

Vue.use(Router)
Vue.use(require('vue-moment'));

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vehicles',
      component: Vehicles
    },
    {
      path: '/vehicle/:id',
      name: 'VehiclePage',
      component: VehiclePage
    }
  ]
})
