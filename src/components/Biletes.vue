<template>
  <main>
    <div class="c-container">
      <div class="home">
        <div class="tickets">
          <div class="c-header">
            <h3 class="izrades">{{subTitle1}}</h3>
          </div>
          <div class="modal-body modalBody">
            <div v-for="p in body1">{{p.p}}
            </div>
          </div>
          <div class="c-header">
            <h3 class="meistarklases">{{subTitle2}}</h3>
          </div>
          <div class="modal-body modalBody">
            <div v-for="p in body2">{{p.p}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import biletes from '../assets/tickets'

  export default {
    data() {
      return {
        biletes,
        body1: biletes.body1,
        subTitle2: biletes.subTitle2,
        body2: biletes.body2,
        subTitle1: biletes.subTitle1
      }
    }
  }
</script>

<style scoped>
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

  .izrades {
    color: #ef3d83;
  }

  .meistarklases {
    color: #369aa2;
  }
</style>
