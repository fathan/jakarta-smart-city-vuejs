<template>
  <div class="footer">
    <span>Built with Vue.JS by Fathan Rohman</span>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss">
  .footer{
    background: #333333;
    padding: 20px 0px;
    text-align: center;

    span{
      font-size: 14px;
      color: #FFFFFF;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
</style>
