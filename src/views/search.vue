<template>
  <section class="search-page">
    <filters-block></filters-block>
    <sorting-block :total="totalInList"></sorting-block>
    <items-list class="search-page__list"
                v-on:on-like="setLike"
                v-on:on-filtered="onListFiltered"
    ></items-list>
  </section>
</template>

<script>
  import FiltersBlock from 'src/components/filters-block'
  import SortingBlock from 'src/components/sorting-block'
  import ItemsList from 'src/components/items-list'
  import data from 'src/data/data'

  import {
    mapActions
  } from 'vuex'

  import searchVuex from 'src/vuex/modules/views/search'

  export default {
    name: 'SearchPage',
    data () {
      return {
        totalInList: 0
      }
    },
    mounted () {
      this.setList(this.getData())
    },
    methods: {
      onListFiltered (val) {
        this.totalInList = val
      },
      setLike (item, isLike) {
        this.setLikeItem({item, isLike})
      },
      getData () {
        // this is a Pretend of a "fetch data from server"
        // Normally it's gonna be a request to api
        return data
      },
      ...mapActions({
        setLikeItem: searchVuex.types.STATE.ITEM_LIKE.SET,
        setList: searchVuex.types.STATE.LIST.SET
      })
    },
    components: {
      FiltersBlock,
      SortingBlock,
      ItemsList
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search-page
    &__list
      padding 3px 15px
</style>
