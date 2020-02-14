import Vue from "vue";
import App from "./onboarding.vue";

const admin = document.querySelector("#onboarding-admin");

if (admin) {
    new Vue({
        el: "#onboarding-admin",
        render: h => h(App)
    });
}