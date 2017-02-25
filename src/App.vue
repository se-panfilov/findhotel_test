<template>
  <div id="app">
    <main-header class="header"></main-header>
    <search-page></search-page>
  </div>
</template>

<script>
  import MainHeader from './components/main-header'
  import SearchPage from './views/search'

  export default {
    name: 'app',
    components: {
      SearchPage,
      MainHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    display block

</style>
