import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./views/Home/index.vue');
const Position = () => import('./views/Position/index.vue');
const PositionDetail = () => import('./views/Position/detail.vue');
const Company = () => import('./views/Company/index.vue');
const User = () => import('./views/User/index.vue');
const UserBase = () => import('./views/User/base.vue');
const UserEducation = () => import('./views/User/education.vue');
const UserEducationAdd = () => import('./views/User/education-add.vue');
const UserEducationEdit = () => import('./views/User/education-edit.vue');
const UserWork = () => import('./views/User/work.vue');
const UserWorkAdd = () => import('./views/User/work-add.vue');
const UserWorkEdit = () => import('./views/User/work-edit.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        tabbar: 0,
      },
    },
    {
      path: '/position',
      name: 'position',
      component: Position,
      meta: {
        tabbar: 1,
      },
    },
    {
      path: '/company/:id',
      name: 'company',
      component: Company,
      meta: {
        tabbar: 1,
      },
    },
    {
      path: '/position/:id',
      name: 'position-detail',
      component: PositionDetail,
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {
        tabbar: 2,
      },
    },
    {
      path: '/user/base',
      name: 'user-base',
      component: UserBase,
    },
    {
      path: '/user/education',
      name: 'user-education',
      component: UserEducation,
    },
    {
      path: '/user/education/add',
      name: 'user-education-add',
      component: UserEducationAdd,
    },
    {
      path: '/user/education/edit',
      name: 'user-education-edit',
      component: UserEducationEdit,
    },
    {
      path: '/user/work',
      name: 'user-work',
      component: UserWork,
    },
    {
      path: '/user/work/add',
      name: 'user-work-add',
      component: UserWorkAdd,
    },
    {
      path: '/user/work/edit',
      name: 'user-work-edit',
      component: UserWorkEdit,
    },
  ],
});
