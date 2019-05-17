<template>
  <main>
    <div class="c-container">
      <div class="home">
        <div class="tickets">
          <div class="c-header">
            <h3 class="izrades" v-for="p in title">{{p.p}}</h3>
          </div>
          <div class="modal-body modalBody">
            <div v-for="p in venues"><a :href="p.link" target="maps">{{p.p}}</a>
            </div>
          </div>
          <iframe name="maps" class="maps" ></iframe>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import vietas from '../assets/venues'

  export default {
    data() {
      return {
        vietas,
        title: vietas.title,
        venues: vietas.venue
      }
    }
  }
</script>

<style scoped>
  .c-container {
    width: 50%;
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
  .maps {
    float: right;
    border: 0;
  }
</style>
