<template>
  <section class="offers-block">
    <section class="offers-block__best-offer">
      <div class="offers-block__old-price">
        <i class="fa fa-euro offers-block__currency-char"></i>
        <span class="offers-block__val" v-text="getOldPrice(bestOffer.price)"></span>
      </div>
      <div class="offers-block__price">
        <i class="fa fa-euro offers-block__currency-char"></i>
        <span class="offers-block__val" v-text="bestOffer.price"></span>
      </div>
      <div class="offers-block__free-cancellation" v-if="bestOffer.hasFreeCancelation">Free cancellation</div>
      <div class="offers-block__btn-container">
        <button class="offers-block__btn -primary -big" v-text="bestOffer.provider.name"></button>
      </div>
    </section>
    <ul class="offers-block__providers-list">
      <li class="offers-block__provider" v-for="item in topThreeOffers">
        <a href="#" class="offers-block__link">
          <span class="offers-block__link-txt" v-text="item.provider.name"></span>
          <span class="offers-block__link-txt -right">
            <i class="fa fa-euro"></i>
            <span v-text="item.price"></span>
          </span>
        </a>
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
    methods: {
      getOldPrice (price) {
        return price + Math.floor(price / 100 * 10) // why not?
      }
    },
    computed: {
      bestOffer () {
        return this.offers.filter(v => v.isBest)[0]
      },
      topThreeOffers () {
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
      text-align center

    &__btn-container
      margin 10px

    &__btn
      cursor pointer
      border-radius 25px
      font-size 1em
      transition background-color ease 0.3s
      &:first-letter
        text-transform capitalize
      &.-primary
        color white
        background-color secondary_color
        border 1px solid secondary_color
        &:hover
          background-color lighten(secondary_color, 5)
      &.-big
        width 100%
        padding 15px

    &__free-cancellation
      color #4d9652
      text-transform capitalize
      font-size 0.8

    &__old-price
      margin 5px
      font-size 1em
      text-decoration line-through
      color secondary_color

    &__price
      margin 5px
      font-size 3em
      color black

    &__providers-list
      list-style none
      padding 10px

    &__link
      text-decoration none
      color main_txt_color
      cursor pointer

    &__link-txt
      color main_txt_color
      &:hover
        color darken(main_txt_color, 15)
      &.-right
        float right
</style>
