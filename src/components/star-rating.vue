<template>
  <div class="star-rating">
    <i class="star-rating__star fa fa-star-o"
       :class="{'-full': index <= rating, '-empty': index > rating}"
       v-for="(f, index) in maxRating"></i>
  </div>
</template>

<script>

  export default {
    name: 'StarRating',
    data () {
      return {}
    },
    props: {
      rating: {
        type: Number,
        required: true
      },
      maxRating: {
        type: Number,
        default: 5
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../assets/variables.styl'

  .star-rating
    .star-rating__star
      &.-full
        color secondary_color
      &.-empty
        color main_txt_color
</style>
