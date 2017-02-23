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

        // here we pretend that 'totalRate' === price
        return this.numberSort(bestA.totalRate, bestB.totalRate)
      },
      sortByName (a, b) {
        return this.stringSort(a.name, b.name)
      },
      stringSort (a, b) {
        console.info('string!!!')
        if (!a || !b) throw new Error('Strings must be passed')
        if (typeof a !== this.TYPES.string || typeof b !== this.TYPES.string) throw new Error('Invalid strings')

        const v1 = a.toLowerCase()
        const v2 = b.toLowerCase()

        if (v1 < v2) return -1
        if (v1 > v2) return 1
        return 0
      },
      numberSort (a, b) {
        console.info('number!!!')
        if (!a || !b) throw new Error('Numbers must be passed')
        if (!Number.isFinite(a) || !Number.isFinite(b)) throw new Error('Invalid numbers')

        return a - b
      },
      onLike (item, isLike) {
        this.$emit('on-like', item, isLike)
      },
      ...mapGetters({
        getItemsList: searchVuex.types.STATE.LIST.GET,
        getSorting: searchVuex.types.STATE.SORTING.GET
      })
    },
    computed: {
      sortedList () {
        const list = this.getItemsList()
        const sorting = this.getSorting()

        let method = this.sortByName
        console.info(sorting.type)
        console.info(sorting.name)
        if (sorting.type === this.TYPES.number && sorting.name === 'price') method = this.sortByPrice
//        const demo = list.sort(method.bind(this))[0]
//        if (demo) console.info(demo.name)
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
