import Vue from 'vue';
import VueRouter from 'vue-router';
import ListTask from '../pages/tasks/ListTask';
import CreateTask from '../pages/tasks/CreateTask';
import ListCompleted from '../pages/tasks/ListCompletedTask';
import ListPending from '../pages/tasks/ListPendingTasks';
import CompletedTask from '../pages/tasks/CompletedTask';
import DelateTask from '../pages/tasks/DelateTask';
import LogOut from '../Auth/LogOut';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import LayoutMain from '../common/LayoutMain';
Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path: '/create-task',
            name: 'create-task',
            component: CreateTask,
            meta:{
                requireAuth: true
            }
        },
        {
            path: '/list-task',
            name: 'list-task',
            component: ListTask,
            meta:{
                requireAuth: true
            }
        
        },
        {
            path: '/list-completed-task',
            name: 'list-completed-task',
            component: ListCompleted,
            meta:{
                requireAuth: true
            }
        },
        {
            path: '/list-pending-task',
            name: 'list-pending-task',
            component: ListPending,
            meta:{
                requireAuth: true
            }
        },
        {
            path: '/complete-task',
            name: 'complete-task',
            component: CompletedTask,
            meta:{
                requireAuth: true
            }
        },
        {
            path: '/delate-task',
            name: 'delate-task',
            component: DelateTask,
            meta:{
                requireAuth: true
            }
        },
        {
            path: '/log-out',
            name: 'log-out',
            component: LogOut,
            meta:{
                requireAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: (to, from, next) => {
                if(!localStorage.getItem('AuthConfirm')){
                    next();
                }else {
                    next({name: 'list-completed-task' })
                } 
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            beforeEnter: (to, from, next) => {
                if(!localStorage.getItem('AuthConfirm')){
                    next();
                }else {
                    next({name: 'list-completed-task' })
                } 
            }
            
        },
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some((record) => record.meta.requireAuth)){
        if(localStorage.getItem('AuthConfirm')){
            next();
        }else {
            next({name: 'login' })
        }
    }else {
     next();
    }
 })
    
export default router;