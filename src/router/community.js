import Main from '@/components/main'

export default [
  {
    path: '/content',
    name: 'content_management',
    meta: {
      icon: 'md-albums',
      title: '内容管理',
      notCache: true
    },
    component: Main,
    children: [
      {
        path: 'index',
        name: 'article_management',
        meta: {
          icon: 'ios-paper',
          title: '文章管理',
          notCache: true
        },
        component: () => import('@/view/content/index.vue')
      },
      {
        path: 'tags',
        name: 'tags_management',
        meta: {
          icon: 'md-pricetags',
          title: '标签管理',
          notCache: true
        },
        component: () => import('@/view/content/tags.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      icon: 'md-albums',
      title: '用户管理',
      notCache: true
    },
    component: Main,
    children: [
      {
        path: 'index',
        name: 'user_management',
        meta: {
          icon: 'ios-people',
          title: '用户管理',
          notCache: true
        },
        component: () => import('@/view/user/index.vue')
      }
    ]
  }
]
