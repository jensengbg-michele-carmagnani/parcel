import Vue from "vue";
import App from "./components/App";

new Vue({
  render: (h) => h(App),
}).$mount("#app");

console.log("password is:", process.env.PASSWORD);
console.log("password is:", process.env.SECRET_PASSION);
