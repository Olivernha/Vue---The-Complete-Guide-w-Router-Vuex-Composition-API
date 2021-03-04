import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from '@/components/teams/TeamsList';
import UsersList from '@/components/users/UsersList';
import TeamMembers from '@/components/teams/TeamMembers';
import NotFound from '@/components/nav/NotFound';
import TeamsFooter from '@/components/teams/TeamsFooter';
import UsersFooter from '@/components/users/UsersFooter';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      path: '/teams', name: 'teams',meta:{needsAuth:true},
      components: { default: TeamsList, footer: TeamsFooter },

      children: [
        { path: ':teamId', name: 'team-members', component: TeamMembers, props: true }
      ]
    },
    { path: '/users',
      components: { default: UsersList, footer: UsersFooter } ,
      beforeEnter(to,from,next){
        console.log('user beforeEnter');
        console.log(to,from);
        next();
      },
    },
    { path: '/:NotFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to,from,savedPosition);
    if(savedPosition){
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});
router.beforeEach(function(to,from,next){
  console.log("Global");
  console.log(to,from);
  if(to.meta.needsAuth){
    console.log('Need Auth');
    next();
  }
  else{
    next();
  }


});

export default router;