<template>
  <section class="guest-vote">
    <i class="guest-vote__icon fa fa-smile-o" :class="classObj"></i>
    <span v-text="rating"></span>
  </section>
</template>

<script>

  export default {
    name: 'GuestVote',
    data () {
      return {
        rates: {
          amazing: 8,
          very_good: 6,
          good: 5,
          not_bad: 4,
          bad: 2
        }
      }
    },
    props: {
      rating: {
        type: Number,
        required: true
      }
    },
    computed: {
      classObj () {
        for (const k in this.rates) {
          if (this.rates.hasOwnProperty(k)) {
            if (this.rating >= this.rates[k]) return `-${k}`
          }
        }

        return '-bad'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .guest-vote
    font-size 1em
    &__icon
      &.-amazing
        color green
      &.-very_good
        color blue
      &.-good
        color yellow
      &.-not_bad
        color orange
      &.-bad
        color red
</style>
