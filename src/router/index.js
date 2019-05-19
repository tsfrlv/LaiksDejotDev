import Vue from 'vue'
import Router from 'vue-router'
import Meistarklases from "@/components/Meistarklases";
import Izrades from "@/components/Izrades";
import Kalendars from "@/components/Kalendars";
import Par from "@/components/Par";
import Biletes from "@/components/Biletes";
import Vietas from "@/components/Vietas";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/workshops',
      component: Meistarklases
    },
    {
      path: '/performances',
      component: Izrades
    },
    {
      path: '/calendar',
      component: Kalendars
    },
    {
      path: '/about',
      component: Par
    },
    {
      path: '/tickets',
      component: Biletes
    },
    {
      path: '/venues',
      component: Vietas
    }


  ]
})
