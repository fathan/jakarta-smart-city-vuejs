<template>
  <div id="Introduction">
    <img src="../assets/logo.png">
    <router-link :to="'data-ambulance'">
      Lihat data informasi
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
  #Introduction{
    text-align: center;
  }

  img {
    width: 500px;
    margin: auto;
    display: table;
    margin-bottom: 3rem;
  }
</style>
