<template>
  <header class="main-header">
    <span class="main-header__label">
      <span class="main-header__label-txt">FindHotel</span>
    </span>
  </header>
</template>

<script>
  export default {
    name: 'MainHeader',
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../assets/variables.styl'

  .main-header
    background-color main_color
    padding 15px
    &__label-txt
      color white
      font-size 1.2em
      text-transform uppercase
</style>
