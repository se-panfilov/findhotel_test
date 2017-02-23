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

  .filters-block
    display flex
    justify-content center
    flex-direction row
    &__range
      flex 1
      min-height 200px
      background-color deeppink
      &:first-of-type
        background-color orange
      &:last-of-type
        background-color aqua
</style>
