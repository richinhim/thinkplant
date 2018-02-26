import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import ThinkPlants from '@/components/thinks/ThinkPlants'
import CreateThinkPlant from '@/components/thinks/CreateThinkPlant'
import ThinkPlant from '@/components/thinks/ThinkPlant'
import SignUp from '@/components/User/SignUp'
import SignIn from '@/components/User/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thinkplants',
      name: 'ThinkPlants',
      component: ThinkPlants
    },
    {
      path: '/thinkplant/new',
      name: 'CreateThinkPlant',
      component: CreateThinkPlant
    },
    {
      path: 'thinkplants/:id',
      name: 'ThinkPlant',
      props: true,
      component: ThinkPlant
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ],
  mode: 'history'
})
