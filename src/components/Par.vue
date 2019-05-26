<template>
  <main>
    <div class="c-container">
      <div class="home">
        <div class="c-header" v-for="p in title"><h3>{{p.p}}</h3>
        </div>
        <div class="gallery">
          <Gallery v-if="showImages" :images="images"/>
        </div>
        <div v-if="body" class="modal-body modalBody">
          <div v-for="p in body">{{p.p}}
          </div>
        </div>
        <div class="modalBody">
          <div class="party">
            <br> Organizer:
            <br><a href="http://www.party.org.lv/#/"><img src="/static/img/Party-new-logo.png"></a>
          </div>
          <div class="supporters">
            <br> Supporters:
            <br> <img src="/static/img/dome_logo.jpg"/>
            <img src="/static/img/kkf.jpg"/><img src="/static/img/noass.gif"/>
            <img src="/static/img/LKA_logo_LV-02.png"/><img src="/static/img/Dance.lv.-zuranals.logo.gif"/>
            <img src="/static/img/10458610_669110989863343_4282501409387186033_n.png"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import info from '../assets/home'
  import Gallery from "@/components/Gallery";

  export default {
    components: {Gallery},
    data() {
      return {
        info,
        body: info.body,
        images: info.images,
        showImages: true,
        title: info.title
      }
    }
  }
</script>

<style scoped>
  .gallery {
    display: inline-block;
  }
  .party img {
    width: 300px;
    height: auto;
  }

  .supporters img {
    width: auto;
    height: 100px;
    padding: 10px;
  }

  .c-container {
    width: 70%;
    height: 80%;
    overflow: auto;
    margin: 100px;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .c-header h3 {
    color: #369aa2;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    text-transform: uppercase;
    padding-bottom: 2%;
  }

  .modalBody {
    color: #777777;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
