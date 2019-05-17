<template>
    <nav>
        <div v-for="link in menu" :key="link.menuItem" :class="link.menuItem">
          <router-link :to="createLink(link.menuItem)" tag="div"><a>{{link.title}}</a></router-link>
        </div>
    </nav>
</template>

<script>

  export default {
    data() {
      return {
        menu: [],
        lang: 'LV',
        changeLang: 'EN',
        active: null,
        menuLV: [
          {
            title: 'Par festivālu',
            menuItem: 'par-festivalu',
            showModal: false
          },
          {
            title: 'Programma',
            menuItem: 'kalendars',
            showModal: false
          },
          {
            title: 'Izrādes',
            menuItem: 'izrades',
            showModal: false
          },
          {
            title: 'Meistarklases',
            menuItem: 'meistarklases',
            showModal: false
          },
          {
            title: 'Biļetes',
            menuItem: 'biletes',
            showModal: false
          },
          {
            title: 'Vietas',
            menuItem: 'vietas',
            showModal: false
          }],
        menuEN: [
          {
            title: 'About festival',
            menuItem: 'about',
            showModal: false
          },
          {
            title: 'Program',
            menuItem: 'calendar',
            showModal: false
          },
          {
            title: 'Performances',
            menuItem: 'performances',
            showModal: false
          },
          {
            title: 'Workshops',
            menuItem: 'workshops',
            showModal: false
          },
          {
            title: 'Tickets',
            menuItem: 'tickets',
            showModal: false
          },
          {
            title: 'Venues',
            menuItem: 'venues',
            showModal: false
          }
        ]
      }
    },
    mounted() {
      this.menu = this.menuLV;
    },
    methods: {
      loadMenu(lang) {
        switch (lang) {
          case 'EN':
            this.lang = 'EN';
            this.changeLang = 'LV';
            this.menu = this.menuEN;
            break;
          case 'LV':
            this.lang = 'LV';
            this.changeLang = 'EN';
            this.menu = this.menuLV;
            break;

        }
      },
      createLink(menuItem) {
        return "/"+menuItem;
      },
      makeActive(item){
        this.active = item;
      }
    }

  }
</script>

<style scoped>
  a, a:visited {
    outline:none;
    color:#389dc1;
  }

  a:hover{
    text-decoration:none;
  }

  nav,
  nav div{
    display:inline-block;
    box-shadow:0 1px 1px #ccc;
    border-radius:2px;
  }

  nav a{
    display:inline-block;
    padding: 18px 30px;
    color:#fff !important;
    font-weight:bold;
    font-size:16px;
    text-decoration:none !important;
    line-height:1;
    text-transform: uppercase;
    background-color:transparent;

    -webkit-transition:background-color 0.25s;
    -moz-transition:background-color 0.25s;
    transition:background-color 0.25s;
  }

  nav div:hover{
    background-color:#e35885;
  }
</style>
