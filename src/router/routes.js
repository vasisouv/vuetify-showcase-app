const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ '../views/NewsFeed.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/JobsFeed.vue')
  },
  {
    path: '/jobs/:jobId',
    name: 'job-page',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/JobPage.vue')
  }
]

export default routes
