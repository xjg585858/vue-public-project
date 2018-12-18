<template>
   <div class="Navigation-item">
       <router-link class="item" :to='{name: "index"}'>{{$t('navbar.home')}}</router-link>
       <router-link class="item" :to='{name: "Forum"}'>{{$t('navbar.forum')}}</router-link>
       <a href="javasrcipt:void(0)" class="item">新手入门</a>
       <a href="javasrcipt:void(0)" class="item">API</a>
       <a href="javasrcipt:void(0)" class="item">关于</a>
   </div>
</template>
<script>
export default{
  data () {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.Navigation-item
    display: flex
    .item
        position: relative
        line-height: 50px
        padding: 0 20px
        min-width: 80px
        text-align: center
        color: #828282
    .router-link-active
        color: #fff
        background: #a01600
        &:after,&:before
            position: absolute
            top: 0
            content: ''
        &:after
            width: 0
            height: 0
            left: -25px
            border-bottom: 50px solid #a01600
            border-left: 25px solid transparent
        &:before
            width: 0
            height: 0
            right: -25px
            border-top: 50px solid #a01600
            border-right: 25px solid transparent
</style>
