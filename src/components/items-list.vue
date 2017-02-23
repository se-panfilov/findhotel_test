<template>
  <section class="items-list">
    <item class="items-list__item"
          v-for="item in getItemsList()"
          :item="item"
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
      return {}
    },
    methods: {
      ...mapGetters({
        getItemsList: searchVuex.types.STATE.LIST.GET
      })
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
