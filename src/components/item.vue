<template>
  <section class="item">
    <div class="item__container">
      <section class="item__block item__image -left -relative" :style="bgImg">
        <div class="item__img-buttons">
          <div class="item__label -great-offer">Great Offer</div>
          <div class="item__label">
            <button type="button" class="item__btn -label-btn -invisible" v-on:click="toggleLike(item)">
              <i class="fa" :class="{'fa-heart-o': !item.isLike, 'fa-heart': item.isLike}"></i>
            </button>
          </div>
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
    methods: {
      toggleLike (item) {
        this.$emit('on-like', item, !item.isLike)
      }
    },
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
    border-radius 5px
    border 0

    &__container
      display flex
      justify-content center
      flex-direction row
      border 0

    &__block
      flex-basis 200px
      flex-grow 1
      border 1px solid transparent
      &.-left
        border-right-color #f2f2f2
        border-top-left-radius 8px
        border-bottom-left-radius 8px
      &.-center
        flex-grow 3
      &.-right
        border-left-color #f2f2f2
        border-top-right-radius 8px
        border-bottom-right-radius 8px

    &__img
      z-index 4

    &__img-buttons
      z-index 5
      display flex
      justify-content space-between
      padding 5px
      color white

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
      border-top-left-radius 5px
      border-bottom-left-radius 5px

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
      font-size 1em
      z-index 6
      &.-great-offer
        height 19px
        color white
        position relative
        background secondary_color
        border 1px solid secondary_color
        &:after, &:before
          left 100%
          top 50%
          border solid transparent
          content " "
          height 0
          width 0
          position absolute
          pointer-events none
        &:after
          border-color transparent
          border-left-color secondary_color
          border-width 5px
          margin-top -5px
        &:before
          border-color transparent
          border-left-color secondary_color
          border-width 11px
          margin-top -11px

    .-label-btn
      font-size 2em
      color white
      font-weight 700
      font-style bold

    .-centered
      text-align center

    &__btn
      &.-invisible
        border 0
        background none
        text-decoration none
        outline none
        cursor pointer
      &.-link
        font-weight 700
        border 0
        background none
        outline none
        cursor pointer
        &:hover
          text-decoration underline

</style>
