<template>
  <section class="filters-block">
    <range icon="€"
           label="Max price"
           class="filters-block__range"
           v-on:change-value="onPriceChange"
    ></range>
    <range icon="smile"
           label="Min rating"
           class="filters-block__range"
           v-on:change-value="onRatingChange"
    ></range>
    <range icon="location"
           label="Distance from city center"
           class="filters-block__range"
           v-on:change-value="onDistanceChange"
    ></range>
  </section>
</template>

<script>

  import Range from './range'

  export default {
    name: 'FiltersBlock',
    data () {
      return {}
    },
    methods: {
      onPriceChange (){
        // TODO (S.Panfilov)
      },
      onRatingChange (){
        // TODO (S.Panfilov)
      },
      onDistanceChange (){
        // TODO (S.Panfilov)
      }
    },
    components: {
      Range
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  main_color = #37a2d8

  .main-header
    background-color main_color
    padding 15px
    &__label-txt
      color white
      font-size 1.2em
      text-transform uppercase
</style>
