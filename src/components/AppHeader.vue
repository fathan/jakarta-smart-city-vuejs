<template>
  <div class="header">
    <div class="header__image">
      <img src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss">
  .header {
    background: #333333;
    padding: 20px 0px;

    .header__image{
      width: 150px;
      margin: auto;
      display: table;

      img{
        width: 100%;
        display: block;
      }
    }
  }
</style>
