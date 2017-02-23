<template>
  <section class="range">
    <input type="range" class="range__slider" @input="onInput" :style="style">
  </section>
</template>

<script>
  export default {
    name: 'Range',
    data () {
      return {
        style: ''
      }
    },
    methods: {
      onInput (event) {
        const min = event.target.min || 0
        const max = event.target.min || 100
        const value = (event.target.value - min) / (max - min)
        const mainColor = '#37a2d8'
        const secondaryColor = 'white'
        this.style = `background-image: -webkit-gradient(linear, left top, right top, color-stop(${value}, ${mainColor}),  color-stop(${value}, ${secondaryColor}))`
        console.info(this.style)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../assets/variables.styl'
  .range
    &__slider
      -webkit-appearance none
      width 100%
      margin 7px 0
      height 5px
      &:focus
        outline none
      &::-webkit-slider-runnable-track
        width 100%
        height 1px
        cursor pointer
        background main_color
        border-radius 1px
        border 1px solid main_color
      &::-webkit-slider-thumb
        border 2px solid main_color
        height 15px
        width 15px
        border-radius 25px
        background white
        cursor pointer
        -webkit-appearance none
        margin-top -8px

    &:focus::-webkit-slider-runnable-track
      background main_color

    &::-moz-range-track
      width 100%
      height 1px
      cursor pointer
      background main_color
      border-radius 1px
      border 1px solid main_color

    &::-moz-range-thumb
      border 2px solid main_color
      height 15px
      width 15px
      border-radius 25px
      background white
      cursor pointer

    &::-ms-track
      width 100%
      height 1px
      cursor pointer
      background transparent
      border-color transparent
      color transparent

    &::-ms-fill-lower
      background main_color
      border 1px solid main_color
      border-radius 2px

    &::-ms-fill-upper
      background main_color
      border 1px solid main_color
      border-radius 2px

    &::-ms-thumb
      border 2px solid main_color
      height 15px
      width 15px
      border-radius 25px
      background white
      cursor pointer
      height 1px

    &:focus::-ms-fill-lower
      background main_color

    &:focus::-ms-fill-upper
      background main_color


</style>
