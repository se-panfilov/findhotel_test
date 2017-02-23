<template>
  <section class="item">
    <div class="item__container">
      <section class="item__block item__image -left -relative" :style="bgImg">
        <div class="item__img-buttons">
          <div class="item__label -left great-offer">Great Offer</div>
          <div class="item__label -right">Like</div>
        </div>
        <!--<img :src="item.images[0].small" :alt="item.name" class="item__img"/>-->
      </section>
      <section class="item__block -center">
        <div class="item__vertical-container">
          <div class="item__vertical-block">
            <h3 class="item__name" v-text="item.name"></h3>
            <div class="item__rating">
              <star-rating :rating="item.starRating"></star-rating>
            </div>
          </div>
          <div class="item__vertical-block">
            <div class="item__distance">
              <i class="fa fa-location-arrow"></i>
              <span>120m form city center</span>
            </div>
            <div class="item__quality">
              <guest-vote :rating="item.guestVote"></guest-vote>
            </div>
          </div>
          <div class="item__vertical-block">
            <div class="item__tags">
              <span class="item__tag">Central location</span>
              <span class="item__tag">Very clean</span>
              <span class="item__tag">Canal view</span>
            </div>
          </div>
        </div>
      </section>
      <section class="item__block -right">
        <offers-block :offers="item.offers"></offers-block>
        <div class="-centered">
          <button class="item__btn -link -small">
            Show details
            <i class="fa fa-chevron-down"></i>
          </button>
        </div>
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
    computed: {
      bgImg () {
        return `background-image:url(${this.item.images[0].large})`
      }
    },
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
    border-radius 3px

    &__container
      display flex
      justify-content center
      flex-direction row

    &__block
      flex-basis 200px
      flex-grow 1
      border 1px solid transparent
      &.-left
        border-right-color #f2f2f2
      &.-center
        flex-grow 3
      &.-right
        border-left-color #f2f2f2

    &__img
      z-index 4

    &__img-buttons
      left: 0
      right 0
      top 0
      z-index 5

    &__distance
      color main_color

    &__vertical-container
      display flex
      flex-direction column
      justify-content space-around

    &__vertical-block
      flex 1
      flex-basis 70px
      padding 15px

    &__image
      background-repeat no-repeat
      background-position center
      background-size 100% 100%

    &__name
      font-size 1.2em
      font-weight 500

    &__distance
      padding 5px 0

    &__tag
      margin 5px
      padding 10px
      display inline-block
      background-color #f2f2f2
      border 1px solid #f2f2f2
      border-radius 25px
      font-size 0.9em

    &__label
      font-size 0.7em
      z-index 6
      &.-left
        left 0
      &.-right
        right 0
      &.great-offer
        background-color secondary_color
        color white

    .-centered
      text-align center

    &__btn
      &.-link
        font-weight 700
        border 0
        background none
        outline none
        cursor pointer
        &:hover
          text-decoration underline

</style>
