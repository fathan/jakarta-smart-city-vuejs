<template>
  <div id="PageNotFound">
    <router-link :to="'/'">
      Kembali ke Halaman utama
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
  #PageNotFound{
    text-align: center;
  }
</style>
