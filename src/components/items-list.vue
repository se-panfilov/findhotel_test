<template>
  <section class="items-list">
    <div class="items-list__item-container" v-for="item in getItemsList">
      <item class="items-list__container"
            :item="item"
      ></item>
    </div>
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

</style>
