<template>
  <section class="filters-block">
    <section class="filters-block__filter">
      <h3 class="filters-block__header">
        <i class="fa fa-euro filters-block__header-icon"></i>
        <span class="filters-block__header-txt">Max Price</span>
      </h3>
      <range class="filters-block__range"
             v-on:change-value="onPriceChange"
      ></range>
    </section>

    <section class="filters-block__filter">
      <h3 class="filters-block__header">
        <i class="fa fa-smile-o  filters-block__header-icon"></i>
        <span class="filters-block__header-txt">Min Rating</span>
      </h3>
      <range class="filters-block__range"
             v-on:change-value="onRatingChange"
      ></range>
    </section>

    <section class="filters-block__filter">
      <h3 class="filters-block__header">
        <i class="fa fa-location-arrow filters-block__header-icon"></i>
        <span class="filters-block__header-txt">Distance from city center</span>
      </h3>
      <range class="filters-block__range"
             v-on:change-value="onDistanceChange"
      ></range>
    </section>

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
    &__filter
      flex 1
      padding 10px 35px
    &__header-icon
      color #66696e
    &__header
      font-size 1em
      padding  20px 0
      margin 0
    &__range
      padding 35px 0 20px 0
</style>
