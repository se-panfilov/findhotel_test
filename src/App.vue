<template>
  <div id="app">
    <main-header class="header"></main-header>
    <hello></hello>
  </div>
</template>

<script>
import MainHeader from './components/main-header'
import SearchPage from './components/search-page'

// TODO (S.Panfilov) font-awesome
// TODO (S.Panfilov) roboto

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

<style lang="stylus" rel="stylesheet/stylus">
  html, body
    margin 0
    padding 0
    height 100%

  body
    background-color #fbfbfb
    color #3c3c3c
    font-family 'Roboto', sans-serif
    font-weight 500
    font-size 16px
    *
      font-family 'Roboto', sans-serif
      font-weight 500

  input[type="search"]
    -moz-appearance textfield
    -webkit-appearance textfield
    appearance textfield
    -webkit-box-sizing border-box
    -moz-box-sizing border-box
    box-sizing border-box

  article, aside, details, figcaption, figure,
  footer, header, menu, nav, section, canvas
    display block

</style>
