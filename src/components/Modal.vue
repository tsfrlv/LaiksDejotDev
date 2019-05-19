<template>
  <transition name="modal">
    <div class="modal-mask invisible-scrollbar">
      <div class="modal-wrapper" @click="$emit('close')">
        <div class="modal-container" @click.stop>
          <div v-if="title" class="modal-header">
            <div v-for="(p, pIndex) in title">{{p.p}}
            </div>
            <div v-if="date" class="date">
              <br>{{date}}
              <br> {{spot}}
            </div>
            <div v-if="date1" class="date">
              <br>{{date1}}
              <br> {{date2}}
              <br> {{spot}}
            </div>
          </div>
          <div v-if="crew" class="row crew">
            <div v-for="(p, pIndex) in crew">{{p.p}}
            </div>
          </div>
          <Gallery v-if="showImages" :images="images"/>
          <div class="home">
            <div v-if="body" class="modal-body modalBody">
              <div v-for="(p, pIndex) in body">{{p.p}}
              </div>
            </div>
            <div v-else-if="body1" class="tickets">
              <div class="modal-header">
                <br>{{subTitle1}}
              </div>
              <div class="modal-body modalBody">
                <div v-for="(p, pIndex) in body1">{{p.p}}
                </div>
                <div class="modal-header">
                  <br>{{subTitle2}}
                </div>
                <div class="modal-body modalBody">
                  <div v-for="(p, pIndex) in body2">{{p.p}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Gallery from "./Gallery";

  export default {
    name: "Modal",
    components: {Gallery},
    props: ['body', 'title', 'date', 'spot', 'crew', 'images', 'showImages', 'subTitle1', 'subTitle2', 'body1', 'body2', 'date1', 'date2'],
  }
</script>

<style scoped>

  .home {
    padding-top: 35px;
  }

  .modal-header {
    color: #369AA2;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    text-transform: uppercase;
    padding-bottom: 2%;
  }

  /* width */
  .invisible-scrollbar::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  .invisible-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  .invisible-scrollbar::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  .invisible-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .crew {
    color: #777777;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 11px;
    line-height: 16px;
    margin: 0 0 24px;
    text-align: justify;
    text-justify: inter-word;
    display: block;
  }

  .tickets {
    text-align: center;
  }

  .date {
    text-align: left;
    font-size: 12px;
  }

  .modalBody {
    color: #777777;
    font-size: 14px;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 60%;
    height: 85%;
    overflow: auto;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

</style>
