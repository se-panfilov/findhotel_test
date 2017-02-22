<template>
  <section class="sorting">
    <form name="sorting-form" class="sorting__form">
      <label class="input-block">
        <span class="input-block__text">Sort by</span>
        <select name="sorting"
                class="input-block__input -select"
        >
          <option value="suppliesAndPrice" class="input-block__option" selected>Best supplies and price</option>
        </select>
      </label>

      <div class="sorting__total-hotels"></div>
      <div class="sorting__great-deals"></div>
    </form>
  </section>
</template>

<script>

  export default {
    name: 'SortingBlock',
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
