<template>
  <section class="item">
    <div class="item__container">
      <div class="item__left-block">
        <div class="item__img-buttons">
          <div class="item__great-offer-label">Great Offer</div>
          <div class="item__like">Like</div>
        </div>
        <img :src="item.images[0].small" :alt="item.name"/>
      </div>
      <div class="item__center-block">
        <h3 class="item__name" v-text="item.name"></h3>
        <div class="item__rating">
          <star-rating :rating="item.starRating"></star-rating>
        </div>
        <div class="item__distance" v-text="item.distance"></div>
        <div class="item__quality">
          <guest-vote :rating="item.guestVote"></guest-vote>
        </div>
        <div class="item__tags"></div>
      </div>
      <div class="item__right-block">
        <offers-block :list="item.offers"></offers-block>
        <button class="item__btn -link -small">Show details</button>
      </div>
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

</style>
