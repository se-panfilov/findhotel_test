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

      <div class="sorting__info">hotels</div>
      <div class="sorting__info">
        <button type="button" class="sorting-info__btn">great deals</button>
      </div>
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
  .sorting
    margin 15px
    &__info
      display inline-block

  .sorting-info__btn
    border 0
    background transparent
    outline none
    cursor pointer
    &:hover, &:active
      text-decoration underline
</style>
