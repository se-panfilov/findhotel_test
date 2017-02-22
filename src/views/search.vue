<template>
  <section>
    <filters-block></filters-block>
    <sorting-block></sorting-block>
    <items-list></items-list>
  </section>
</template>

<script>
  import FiltersBlock from 'src/components/filters-block'
  import SortingBlock from 'src/components/sorting-block'
  import ItemsList from 'src/components/items-list'

  export default {
    name: 'SearchPage',
    data () {
      return {}
    },
    components: {
      FiltersBlock,
      SortingBlock,
      ItemsList
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
