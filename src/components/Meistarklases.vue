<template>
<main>
  <ul class="inline">
    <li class="workshop" v-for="item in meistarklases"
        :style="{ backgroundImage: 'url('+ imageUrl + item.target + imageEnd +')', backgroundSize: 'cover'}" @click="loadFromGrid(item.target)">
      <div class="date">
        {{item.title}}
      </div>
    </li>
  </ul>
  <Modal v-if="showModal" @close="showModal = false" :body="data.body" :title="data.title" :date="data.date"
         :spot="data.spot" :crew="data.crew" :images="images" :date1="data.date1" :date2="data.date2"
         :showImages="showImages">
  </Modal>
  </main>
</template>

<script>
  import meistarklases from '../assets/workshops'
  import Modal from "@/components/Modal";

  export default {
    components: {Modal},
    data() {
      return {
        meistarklases,
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

  .inline > li {
    display: inline-block;
  }

  .workshop {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 10px;
    padding: -1px;
    padding-bottom: 10px;
    overflow: hidden;
    background: white;
    box-shadow: 5px 5px 5px black;
    border-radius: 10px;
  }

  .date {
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

  .date:hover {
    background: #47C7CD;
    transition: all .4s ease-in-out;
  }
</style>
