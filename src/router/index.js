import Vue from 'vue'
import Router from 'vue-router'
import Meistarklases from "@/components/Meistarklases";
import Izrades from "@/components/Izrades";
import Kalendars from "@/components/Kalendars";
import Modal from "@/components/Modal";
import Par from "@/components/Par";
import Biletes from "@/components/Biletes";
import Vietas from "@/components/Vietas";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/meistarklases',
      component: Meistarklases
    },
    {
      path: '/izrades',
      component: Izrades
    },
    {
      path: '/kalendars',
      component: Kalendars
    },
    {
      path: '/par-festivalu',
      component: Par
    },
    {
      path: '/biletes',
      component: Biletes
    },
    {
      path: '/vietas',
      component: Vietas
    }


  ]
})
