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
    <button type="button" v-on:click="onPriceChange(1000)">Demo</button>
  </section>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  import searchVuex from 'src/vuex/modules/views/search'

  import Range from './range'

  export default {
    name: 'FiltersBlock',
    data () {
      return {}
    },
    methods: {
      onPriceChange (val) {
        this.setMaxPrice(val)
      },
      onRatingChange (val) {
        this.setMinRating(val)
      },
      onDistanceChange (val) {
        this.setDistance(val)
      },
      ...mapActions({
        setMaxPrice: searchVuex.types.STATE.MAX_PRICE.SET,
        setMinRating: searchVuex.types.STATE.MIN_RATING.SET,
        setDistance: searchVuex.types.STATE.DISTANCE.SET
      }),
      ...mapGetters({
        getMaxPrice: searchVuex.types.STATE.MAX_PRICE.GET,
        getMinRating: searchVuex.types.STATE.MIN_RATING.GET,
        getDistance: searchVuex.types.STATE.DISTANCE.GET
      })
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
