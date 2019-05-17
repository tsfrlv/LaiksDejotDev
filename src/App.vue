<template>
  <div id="app">
    <Menu></Menu>
    <router-view class="view-width"/>
  </div>
</template>

<script>

  import Menu from "@/components/Menu";

  export default {
    components: {
      Menu
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    background-color: black;
    line-height: 1.5;
  }

  .view-width {
    width: 80%;
    text-align: left;
  }

  nav div.router-link-active,
  nav div.router-link-exact-active {
    background-color: #e35885;
  }

  .image {
    float: right;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
    display: block;
  }

  p {
    font-size: 22px;
    font-weight: bold;
    color: #7d9098;
  }

  p b {
    color: #ffffff;
    display: inline-block;
    padding: 5px 10px;
    background-color: #c4d7e0;
    border-radius: 2px;
    text-transform: uppercase;
    font-size: 18px;
  }

  h3 {
    color: #EF3D83;
  }

  body {
    background-color: #010101;
    background-image: url(/static/img/poster.553df4c.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: bottom right;
    background-size: 50% auto;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  @media (min-width: 320px) and (max-width: 700px) {

    .modal-container {
      width: 70%;
      height: 80%;
      overflow: auto;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 2px;
      -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      -webkit-transition: all .3s ease;
      transition: all .3s ease;
      font-family: Helvetica, Arial, sans-serif;
    }
  }

</style>
