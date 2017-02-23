<template>
  <section class="range">
    <label class="range__label">
      <div class="range__txt-container">
        <span class="range__label-txt" v-text="model" :style="labelStyle"></span>
      </div>
      <input type="range"
             class="range__slider"
             :min="min"
             :max="max"
             v-model="model"
             @input="onInput"
             :style="style"
      >
    </label>
  </section>
</template>

<script>
  export default {
    name: 'Range',
    data () {
      return {
        style: '',
        labelStyle: '',
        model: 0
      }
    },
    props: {
      initVal: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      }
    },
    mounted () {
      this.model = this.initVal
    },
    methods: {
      getLabelPosition (value, max) {
        const onePercent = max / 100
        return value / onePercent
      },
      setStyle (event) {
        const min = this.min || 0
        const max = this.min || 100
        const value = (event.target.value - min) / (max - min)
        const mainColor = '#37a2d8' // main_color
        const secondaryColor = '#d1d1d1'
        // TODO (S.Panfilov) we have to recount to take real percents
        let labelPosition = this.getLabelPosition(event.target.value, max)
//        if (labelPosition <= 10) labelPosition = 10
//        if (labelPosition >= 90) labelPosition = 90
        this.labelStyle = `margin-left: ${labelPosition}%`

        this.style = `background-image: -webkit-gradient(linear, left top, right top, color-stop(${value}, ${mainColor}),  color-stop(${value}, ${secondaryColor}))`
      },
      onInput (event) {
        this.val = event.target.value + ''
        this.setStyle(event)
        this.$emit('change-value', event.target.value)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../assets/variables.styl'
  .range
    &__txt-container
      padding 0 25px 0 0
    &__label-txt
      display block
    &__slider
      -webkit-appearance none
      width 100%
      margin 7px 0
      height 5px
      background #d1d1d1
      &:focus
        outline none
      &::-webkit-slider-runnable-track
        width 100%
        height 1px
        cursor pointer
        border-radius 1px
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
