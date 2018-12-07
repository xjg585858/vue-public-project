<template>
    <div id="inlay">
      <transition name="fade" mode="out-in">
        <router-view class="view"/>
      </transition>
    </div>
</template>
<script>
// import FooterBar from '../mobile/components/Footer'
export default {
  name: 'inlay',
  components: {
    // FooterBar
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="">
</style>
