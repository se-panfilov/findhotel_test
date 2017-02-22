<template>
  <section class="offers-block">
    <div class="item__old-price"></div>
    <div class="item__price"></div>
    <div class="item__cancellation"></div>
    <button class="item__btn --primary --big"> go to</button>
    <ul class="item__providers-list">
      <li class="item__provider"></li>
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
      rating: {
        type: Number,
        required: true
      }
    },
    methods: {},
    computed: {
      bestOffer () {
        // TODO (S.Panfilov)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
