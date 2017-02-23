<template>
  <section class="item">
    <div class="item__container">
      <section class="item__block -left -relative">
        <div class="item__img-buttons">
          <!--<div class="item__label -left great-offer">Great Offer</div>-->
          <!--<div class="item__label -right">Like</div>-->
        </div>
        <img :src="item.images[0].small" :alt="item.name" class="item__img"/>
      </section>
      <section class="item__block -center">
        <h3 class="item__name" v-text="item.name"></h3>
        <div class="item__rating">
          <star-rating :rating="item.starRating"></star-rating>
        </div>
        <div class="item__distance" v-text="item.distance"></div>
        <div class="item__quality">
          <guest-vote :rating="item.guestVote"></guest-vote>
        </div>
        <div class="item__tags"></div>
      </section>
      <section class="item__block -right">
        <offers-block :offers="item.offers"></offers-block>
        <button class="item__btn -link -small">Show details</button>
      </section>
    </div>
  </section>
</template>

<script>
  import StarRating from 'src/components/star-rating'
  import GuestVote from 'src/components/guest-vote'
  import OffersBlock from 'src/components/offers-block'

  export default {
    name: 'Item',
    data () {
      return {}
    },
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {},
    components: {
      StarRating,
      GuestVote,
      OffersBlock
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../assets/variables.styl'

  .item
    background-color white

    &__container
      display flex
      justify-content center
      flex-direction row

    &__block
      //display flex
      flex-basis 200px
      flex-grow 1
      //background-color red
      //&.-relative
      //  position relative
      &.-left
        background-color red
      &.-center
        background-color green
        flex-grow 3
      &.-right
        background-color blue

    &__img
      z-index 4

    &__img-buttons
      position absolute
      left: 0
      right 0
      top 0
      z-index 5

    &__label
      //position absolute
      font-size 0.7em
      z-index 6
      &.-left
        left 0
      &.-right
        right 0
      &.great-offer
        background-color secondary_color
        color white

</style>
