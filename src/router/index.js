import Vue from 'vue'
import Router from 'vue-router'
import PageLanding from '@/components/PageLanding'
import PageAbout from '@/components/PageAbout'
import PageServices from '@/components/PageServices'
import PageVerify from '@/components/PageVerify'
import PageContact from '@/components/PageContact'

Vue.use(Router)

var mainRouter = new Router({
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
    path: '/verify',
    name: 'PageVerify',
    component: PageVerify
  },
  {
    path: '/contact',
    name: 'PageContact',
    component: PageContact
  }
  ]
})
mainRouter.afterEach((to, from) => {
  $('#navigation').css('height', '80px')
  $('.nav-btn-open').removeClass('ti-close').addClass('ti-menu')
})
export default mainRouter
