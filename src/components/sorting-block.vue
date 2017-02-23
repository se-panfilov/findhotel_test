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

      <div class="sorting__info">
        <span v-text="hotelsCount"></span>
        hotels,
      </div>
      <div class="sorting__info">
        <button type="button" class="sorting-info__btn">
          <span v-text="greatDealsCount"></span>
          with great deals
        </button>
      </div>
    </form>
  </section>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  import searchVuex from 'src/vuex/modules/views/search'

  export default {
    name: 'SortingBlock',
    data () {
      return {}
    },
    methods: {
      ...mapGetters({
        getItemsList: searchVuex.types.STATE.LIST.GET
      })
    },
    computed: {
      hotelsCount () {
        const list = this.getItemsList()
        if (list) return list.length
        return 0
      },
      greatDealsCount () {
        const list = this.getItemsList()
        // Have no idea what does mean 'great deal'
        const greatDealRating = 9
        if (list) return list.filter(v => v.guestVote >= greatDealRating).length
        return 0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../assets/variables.styl'

  .sorting
    margin 0 15px
    &__info
      display inline-block
      padding 0 5px
      font-weight 500

  .sorting-info__btn
    color main_color
    border 1px solid transparent
    background transparent
    outline none
    cursor pointer
    text-decoration none
    padding 0
    font-size 1em
    border-bottom 1px dashed main_color

  .input-block
    &__input
      padding 6px 12px
      height 34px
      font-size 1em
      color #555
      background-color #fff
      border 1px solid transparent
      border-radius 4px
</style>
