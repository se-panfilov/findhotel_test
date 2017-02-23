<template>
  <section class="offers-block">
    <section class="offers-block__best-offer">
      <div class="offers-block__old-price">€100</div>
      <div class="offers-block__price">€99</div>
      <div class="offers-block__free-cancellation" v-if="bestOffer.hasFreeCancelation">Free cancellation</div>
      <button class="offers-block__btn -primary -big" v-text="bestOffer.provider.name"></button>
    </section>
    <ul class="offers-block__providers-list">
      <li class="offers-block__provider" v-for="item in topThreeOffers">
        <a href="#" v-text="item.provider.name" class="offers-block__link"></a>
      </li>
    </ul>
  </section>
</template>

<script>

  export default {
    name: 'OffersBlock',
    data () {
      return {}
    },
    props: {
      offers: {
        type: Array,
        required: true
      }
    },
    methods: {},
    computed: {
      bestOffer () {
        return this.offers.filter(v => v.isBest)[0]
      },
      topThreeOffers () {
        console.info(this.offers.filter(v => !v.isBest).slice(0, 3))
        return this.offers.filter(v => !v.isBest).slice(0, 3)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../assets/variables.styl'

  .offers-block
    &__best-offer
      padding 5px

    //buttons
    &__btn
      cursor pointer
      border-radius 25px
      font-size 1em
      &:first-letter
      text-transform capitalize
      &.-primary
        color white
        background-color secondary_color
        border 1px solid secondary_color
      &.-big
        width 100%
        padding 15px

    &__free-cancellation
      color #4d9652
      text-transform capitalize
      font-size 0.8

    &__old-price
      font-size 0.8em
      text-decoration line-through
      color secondary_color

    &__price
      font-size 2em
      color black

    //list
    &__providers-list
      list-style none

    //links
    &__link
      text-decoration none
      color main_txt_color
</style>
