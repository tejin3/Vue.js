import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
import DataBinding from "../views/DataBinding.vue";
import hello from "../views/hello.vue";
import DataBindingClass from "../views/DataBindingClass.vue";
// import DataBindingClass2 from "../views/DataBindingClass2.vue";
import DataBindingStyle from "../views/DataBindingStyle.vue";
import DataBindingList from "../views/DataBindingList.vue";
import DataBindingList2 from "../views/DataBindingList2.vue";
import Renderingif from "../views/Renderingif.vue";
import EventBinding from "../views/EventBinding.vue";
import exBending from "../views/exBending.vue";
import exRest from "../views/exRest.vue";
import Computed from "../views/Computed.vue";
import Watch from "../views/Watch.vue";
import NatedComponent from "../views/NatedComponent.vue";
import NestedComponent2 from "../views/NestedComponent2.vue";
import NestedComponent3 from "../views/NestedComponent3.vue";
import NestedComponent5 from "../views/NestedComponent5.vue";
import NestedComponent4 from "../views/NestedComponent4.vue";

import Parent from "../views/Parent.vue";
import Parent2 from "../views/Parent2.vue";
import SlotUseModalLayout from "../views/SlotUseModalLayout.vue";
import ProvideInject from "../views/ProvideInject.vue";
import DataBindingList3 from "../views/DataBindingList3.vue";

import StoreAccese from "../views/StoreAccese.vue";
import LoginAccess from "../views/LoginAccess.vue";
import Login from "../views/Login.vue";
import kakaologin from "../views/kakaologin.vue";
import kakaologin2 from "../views/kakaologin2.vue";
import naverlogin from "../views/naverlogin.vue";
import NaverLogin2 from "../views/NaverLogin2.vue";

const routes = [
  {
    path: "/",
    name: "Home", //없어도 됨
    component: Home,
  },
  {
    path: "/DataBindingClass",
    name: "DataBindingClass",
    component: DataBindingClass,
  },
  // {
  //   path: "/DataBindingClass2",
  //   name: "DataBindingClass2",
  //   component: DataBindingClass2,
  // },
  {
    path: "/DataBindingStyle",
    name: "DataBindingStyle",
    component: DataBindingStyle,
  },
  {
    path: "/DataBindingList",
    name: "DataBindingList",
    component: DataBindingList,
  },
  {
    path: "/DataBindingList2",
    name: "DataBindingList2",
    component: DataBindingList2,
  },
  {
    path: "/Renderingif",
    name: "Renderingif",
    component: Renderingif,
  },
  {
    path: "/EventBinding",
    name: "EventBinding",
    component: EventBinding,
  },
  {
    path: "/exBending",
    name: "exBending",
    component: exBending,
  },
  {
    path: "/exRest",
    name: "exRest",
    component: exRest,
  },
  {
    path: "/Computed",
    name: "Computed",
    component: Computed,
  },
  {
    path: "/Watch",
    name: "Watch",
    component: Watch,
  },
  {
    path: "/hello",
    name: "hello",
    component: hello,
  },
  {
    path: "/NatedComponent",
    name: "NatedComponent",
    component: NatedComponent,
  },
  {
    path: "/NestedComponent2",
    name: "NestedComponent2",
    component: NestedComponent2,
  },
  {
    path: "/NestedComponent3",
    name: "NestedComponent3",
    component: NestedComponent3,
  },
  {
    path: "/NestedComponent5",
    name: "NestedComponent5",
    component: NestedComponent5,
  },
  {
    path: "/Parent",
    name: "Parent",
    component: Parent,
  },
  {
    path: "/Parent2",
    name: "Parent2",
    component: Parent2,
  },
  {
    path: "/SlotUseModalLayout",
    name: "SlotUseModalLayout",
    component: SlotUseModalLayout,
  },
  {
    path: "/ProvideInject",
    name: "ProvideInject",
    component: ProvideInject,
  },
  {
    path: "/DataBindingList3",
    name: "DataBindingList3",
    component: DataBindingList3,
  },
  {
    path: "/NestedComponent4",
    name: "NestedComponent4",
    component: NestedComponent4,
  },
  {
    path: "/StoreAccese",
    name: "StoreAccese",
    component: StoreAccese,
  },
  {
    path: "/LoginAccess",
    name: "LoginAccess",
    component: LoginAccess,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/kakaologin",
    name: "kakaologin",
    component: kakaologin,
  },
  {
    path: "/kakaologin2",
    name: "kakaologin2",
    component: kakaologin2,
  },
  {
    path: "/naverlogin",
    name: "naverlogin",
    component: naverlogin,
  },
  {
    path: "/naverlogin2",
    name: "NaverLogin2",
    component: NaverLogin2,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About,
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // {
  //   path: "/databinding",
  //   name: "DataBinding",
  //   component: DataBinding,
  // },
  {
    path: "/databinding",
    name: "DataBinding",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "DataBinding" */ "../views/DataBinding.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
