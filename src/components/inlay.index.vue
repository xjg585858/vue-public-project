<template>
  <div ref="index" class="inlay-index">
    <indexHeader>头部</indexHeader>
    <!-- <transition :name="transitionName"> -->
    <router-view/>
    <!-- </transition> -->
    <FooterBar>底部</FooterBar>
  </div>
</template>

<script>
import indexHeader from '../mobile/components/indexHeader'
import FooterBar from '../mobile/components/Footer'
export default {
  name: 'inlayIndex',
  components: {
    FooterBar,
    indexHeader
  },
  data () {
    return {
      // transitionName: 'slide-left'
    }
  }
  // beforeRouteUpdate (to, from, next) {
  //   const toDepth = to.path.split('/').length
  //   const fromDepth = from.path.split('/').length
  //   this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  //   document.getElementsByClassName('inlay-index')[0].style.height = document.getElementsByClassName('child-view')[0].clientHeight + 'px'
  //   next()
  // }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  width: 100%;
  padding-bottom: 60px;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
.inlay-index{
  position: relative;
  overflow: hidden;
  min-height: 50px;
}
</style>
