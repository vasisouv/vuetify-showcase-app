const routes = [
  {
    path: '/',
    redirect: '/jobs'
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
  },
  {
    path: '/news/:articleId',
    name: 'article-page',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/ArticlePage.vue')
  }
]

export default routes
