<template>
  <div id="web">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    {{ $t("messages.route.dashboard") }}
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    // console.log(this.$axios)
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      // alert(navigator.userAgent)
      // window.location.href ="iPhone.html"
      console.log('iphone')
    } else if (/(Android)/i.test(navigator.userAgent)) {
      // alert(navigator.userAgent)
      // window.location.href ="Android.html"
      console.log('android')
    } else {
      console.log('pc')
      // window.location.href ="pc.html"
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
