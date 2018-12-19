<template>
    <div class="Details">
        详情页
    </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  created () {
    if (!this.$route.params.id) {
      this.$route.push({ name: 'error' })
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
