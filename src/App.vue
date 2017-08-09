<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="body-wrapper">
      <router-view></router-view>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
  }

  .body-wrapper{
    padding: 50px 0px;
  }
</style>
