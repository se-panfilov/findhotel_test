<template>
  <section class="items-list">
    <item class="items-list__item"
          v-for="item in sortedList"
          :item="item"
          v-on:on-like="onLike"
    ></item>
  </section>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  import searchVuex from 'src/vuex/modules/views/search'

  import Item from './item'

  export default {
    name: 'ItemsList',
    data () {
      return {
        TYPES: {
          string: 'string',
          number: 'number'
        }
      }
    },
    methods: {
      getBestOffer (offers) {
        return offers.filter(v => !!v.isBest)[0]
      },
      sortByPrice (a, b) {
        const bestA = this.getBestOffer(a.offers)
        const bestB = this.getBestOffer(b.offers)

        return this.numberSort(bestA.price, bestB.price)
      },
      sortByName (a, b) {
        return this.stringSort(a.name, b.name)
      },
      stringSort (a, b) {
        if (!a || !b) throw new Error('Strings must be passed')
        if (typeof a !== this.TYPES.string || typeof b !== this.TYPES.string) throw new Error('Invalid strings')

        const v1 = a.toLowerCase()
        const v2 = b.toLowerCase()

        if (v1 < v2) return -1
        if (v1 > v2) return 1
        return 0
      },
      numberSort (a, b) {
        if (!a || !b) throw new Error('Numbers must be passed')
        if (!Number.isFinite(a) || !Number.isFinite(b)) throw new Error('Invalid numbers')

        return a - b
      },
      onLike (item, isLike) {
        this.$emit('on-like', item, isLike)
      },
      ...mapGetters({
        getItemsList: searchVuex.types.STATE.LIST.GET,
        getSorting: searchVuex.types.STATE.SORTING.GET,
        getMaxPrice: searchVuex.types.STATE.MAX_PRICE.GET,
        getMinRating: searchVuex.types.STATE.MIN_RATING.GET,
        getDistance: searchVuex.types.STATE.DISTANCE.GET
      })
    },
    computed: {
      filteredList () {
        const list = this.getItemsList()
        const maxPrice = +this.getMaxPrice()
        const minRating = +this.getMinRating()
        const distance = +this.getDistance()

        const result = list.filter(v => {
          const bestOffer = this.getBestOffer(v.offers)
          const isPriceOk = (+bestOffer.price <= maxPrice) || (maxPrice === 0)
          const isRatingOk = (+v.guestVote >= minRating) || (minRating === 0)
          const isDistanceOk = (+v.distance <= distance) || (distance === 0)

          console.info(`bestOffer.price: ${bestOffer.price}, maxPrice: ${maxPrice}, bestOffer.price <= maxPrice: ${bestOffer.price <= maxPrice}`)
          return isPriceOk && isRatingOk && isDistanceOk
        })

        this.$emit('on-filtered', result.length)
        return result
      },
      sortedList () {
        const list = this.filteredList
        const sorting = this.getSorting()

        let method = this.sortByName
        if (sorting.type === this.TYPES.number && sorting.name === 'price') method = this.sortByPrice
        return list.sort(method.bind(this))
      }
    },
    components: {
      Item
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .items-list
    &__item
      margin 15px 0
</style>
