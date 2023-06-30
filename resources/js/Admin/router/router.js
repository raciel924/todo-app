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
Vue.use(VueRouter);

let routes = [
    {
        path: '/create-task',
        name: 'create-task',
        component: CreateTask,
    },
    {
        path: '/list-task',
        name: 'list-task',
        component: ListTask,
    },
    {
        path: '/list-completed-task',
        name: 'list-completed-task',
        component: ListCompleted,
    },
    {
        path: '/list-pending-task',
        name: 'list-pending-task',
        component: ListPending,
    },
    {
        path: '/complete-task',
        name: 'complete-task',
        component: CompletedTask,
    },
    {
        path: '/delate-task',
        name: 'delate-task',
        component: DelateTask,
    },
    {
        path: '/log-out',
        name: 'log-out',
        component: LogOut,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
]
export default new VueRouter({
    mode:"history",
    routes
})