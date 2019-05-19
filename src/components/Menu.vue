<template>
    <nav>
        <div v-for="link in menu" :key="link.menuItem" :class="link.menuItem">
          <router-link :to="createLink(link.menuItem)" tag="div"><a>{{link.title}}</a></router-link>
        </div>
        <a href="http://www.laiksdejotfestivals.lv/">LV</a>
    </nav>
</template>

<script>

  export default {
    data() {
      return {
        active: null,
        menu: [
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
            title: 'Prices and Tickets',
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
    methods: {
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
    background-color:#e35885;
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
