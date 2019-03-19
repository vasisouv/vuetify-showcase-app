const routes = [
  {
    path: '/',
    redirect: '/jobs'
  },
  {
    path: '/reddit',
    name: 'reddit',
    component: () => import(/* webpackChunkName: "news" */ '../views/RedditFeed.vue')
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
