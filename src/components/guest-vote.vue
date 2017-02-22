<template>
  <div class="guest-vote">
    smile <span v-text="rating"></span>
  </div>
</template>

<script>

  export default {
    name: 'GuestVote',
    data () {
      return {}
    },
    props: {
      rating: {
        type: Number,
        required: true
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
