import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './app/pages/Home.vue'
// import AboutMe from './layout/pages/AboutMe.vue'
// import Education from './layout/pages/Education.vue'
// import WorkExperience from './layout/pages/WorkExperience.vue'
// import Wrestling from './layout/pages/Wrestling.vue'
// import Hobbies from './layout/pages/Hobbies.vue'
// import Blog from './layout/pages/Blog.vue'
import NotFound from './app/pages/NotFound.vue'

// const Category = () => System.import('./theme/Category.vue')
// const Login = () => System.import('./theme/Login.vue')
// const NotFound = () => System.import('./theme/NotFound.vue')

// ^This will provide lazy loading for the import Category, Login, NotFound
// ^so it's only loaded when needed on the client's browser, useful when this list increases in size

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({y: 0}),
  routes: [
    { path: '/', component: Home },
    // { path: '/about-me', component: AboutMe },
    // { path: '/education', component: Education },
    // { path: '/work-experience', component: WorkExperience },
    // { path: '/wrestling', component: Wrestling },
    // { path: '/hobbies', component: Hobbies },
    // { path: '/blog/', component: Blog },
    // { path: '/blog/:id', name: 'blog', component: Blog },
    { path: '*', component: NotFound }
  ]
})

export default router
