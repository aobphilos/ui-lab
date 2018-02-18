import Vue from 'vue'
import Router from 'vue-router'
import PageLanding from '@/components/PageLanding'
import PageAbout from '@/components/PageAbout'
import PageServices from '@/components/PageServices'
import PageVerified from '@/components/PageVerified'
import PageContact from '@/components/PageContact'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'PageLanding',
    component: PageLanding
  },
  {
    path: '/about',
    name: 'PageAbout',
    component: PageAbout
  },
  {
    path: '/services',
    name: 'PageServices',
    component: PageServices
  },
  {
    path: '/verified',
    name: 'PageVerified',
    component: PageVerified
  },
  {
    path: '/contact',
    name: 'PageContact',
    component: PageContact
  }
  ]
})
