import("../bootstrap");
import Vue from "vue";
import router from "./router/router";
import vuetify from "./vuetify/vuetify";
import VueSweetAlert from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import App from "./pages/App.vue";

export const  bus = new Vue();

const saOptions = {
    confirmButtonColor: '#41b882',
}


Vue.use(VueSweetAlert,saOptions);
const admin = new Vue({
    el: "#admin",
    vuetify,
    router,
    render: h => h(App),
});
