<template>
    <div class="aside-item">
      <router-link :to="{name:'NewPost'}" class="NewPost">新建帖子</router-link>
      <div class="aside-item-panel">
        <h3 class="title">小贴上</h3>
        <div class="item-content">
          <p class="info">目前最流行的 Rails 部署方式是 Passenger, Thin, Puma 或者 Unicorn 配合 Nginx 使用，此外 Puma 已经开始被 Rails 社区推荐了。</p>
        </div>
      </div>
      <div class="aside-item-photo">
        <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="">
        <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="">
        <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="">
        <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="">
        <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="">
      </div>
      <div class="aside-item-panel">
        <h3 class="title">社区规则</h3>
        <div class="item-content">
          <a href="javascript:void(0)" class="help">规则1</a>
          <a href="javascript:void(0)" class="help">规则1</a>
          <a href="javascript:void(0)" class="help">规则1</a>
          <a href="javascript:void(0)" class="help">规则1</a>
        </div>
      </div>
      <div class="aside-item-panel">
        <h3 class="title">友情社区</h3>
        <div class="item-content">
          <a href="javascript:void(0)" class="help">社区1</a>
          <a href="javascript:void(0)" class="help">社区2</a>
          <a href="javascript:void(0)" class="help">社区3</a>
          <a href="javascript:void(0)" class="help">社区4</a>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'item',
  props: ['ModuleContent'],
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="sass" scoped>
.aside-item
  width: 100%
  .NewPost
    display: block
    height: 40px
    line-height: 40px
    color: #fff
    font-size: 14px
    border-radius: 3px
    text-align: center
    background: #333
  .aside-item-panel
    margin: 15px 0
    border-radius: 3px
    border: 1px solid #eee
    .title
      height: 35px
      line-height: 35px
      background: #fafafa
      padding-left: 5px
      color: #777
      font-size: 14px
      border-bottom: 1px solid #eee
    .item-content
      padding: 10px
      .info
        line-height: 17px
        font-size: 13px
        text-indent: 26px
        color: #404040
      .help
        height: 30px
        line-height: 30px
        display: block
        font-size: 13px
        color: #404040
        &:hover
          color: #ff7700
      .help:not(:nth-child(1))
        border-top: 1px solid #eee
  .aside-item-photo
    padding: 10px
    border: 1px solid #eee
    img
      width: 100%
      margin: 10px 0
</style>
