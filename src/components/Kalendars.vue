<template>
  <main>
    <ul class="inline" v-for="day in kalendars">
      <div class="header accordion-header">
        {{day.date}}
      </div>
      <li v-for="event in day.events">
        <div class="squares"
             :style="{ backgroundImage: 'url('+ imageUrl + event.target + imageEnd +')', backgroundSize: 'cover'}" @click="loadFromGrid(event.target)">
          <div :class="event.type">{{event.title}}</div>
        </div>
        <div class="time"><br>{{event.chor}} <br>{{event.time}} <br>{{event.venue}}</div>
      </li>
    </ul>
    <Modal v-if="showModal" @close="showModal = false" :body="data.body" :title="data.title" :date="data.date"
           :spot="data.spot" :crew="data.crew" :images="images" :date1="data.date1" :date2="data.date2" :showImages="showImages">
    </Modal>
  </main>

</template>

<script>
  import kalendars from '../assets/calendar'
  import Modal from "@/components/Modal";

  export default {
    components: {Modal},
    data() {
      return {
        kalendars,
        imageUrl: "http://www.laiksdejotfestivals.lv/2019/data/",
        imageEnd: ".png",
        showModal: false,
        showImages: true,
        images: null,
        data: null
      }
    },
    methods: {
      loadFromGrid(target) {
        const url = 'http://www.laiksdejotfestivals.lv/2019/en/';
        fetch(url + target + '.json', {mode: 'cors'}).then((r) => {
          r.json().then((result) => {
            this.data = result;
            this.images = result.images;
            this.showModal = true;
          });
        })
      }
    }
  }
</script>

<style scoped>
  @media (min-width: 320px) and (max-width: 700px) {
    .inline {
      padding-left: 0;
    }
  }

  .accordion-header {
    text-align: center;
    color: #c9d0d4;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 38px;
    font-weight: 100;
    line-height: 50px;
    letter-spacing: 1px;
    padding: 35px 0 2px;
    border-bottom: double #555;
  }

  .inline > li {
    display: inline-block;
    margin: 20px;
  }

  a, a:visited {
    outline:none;
    text-decoration:none;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
  }

  a:hover{
    text-decoration:none;
  }

  .squares {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 10px;
    padding: -1px;
    overflow: hidden;
    background: white;
    box-shadow: 5px 5px 5px black;
    border-radius: 10px;
  }

  .performance{
    background: #CC1F7A;
    padding: 10px;
    text-align: center;
    outline: 0;
    border: 0;
    margin: -1px;
    border-radius: 2px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
  }

  .performance:hover {
    background: #CC1F7A;
    transition: all .4s ease-in-out;
  }

  .workshop{
    background: #47C7CD;
    padding: 10px;
    text-align: center;
    outline: 0;
    border: 0;
    margin: -1px;
    border-radius: 2px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
  }

  .workshop:hover {
    background: #47C7CD;
    transition: all .4s ease-in-out;
  }

  .time {
    padding: 5px;
    font-size: 0.9em;
    color: #ffffff;
    text-align: left;
  }
</style>
