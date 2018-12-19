<template>
  <div class="index-Forum">
    <el-container>
      <el-main style="padding-top: 0;padding-left: 0">
        <router-view></router-view>
      </el-main>
      <el-aside width="250px">
        <asideItem></asideItem>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
import asideItem from '../aside'
export default {
  name: 'Forum',
  data () {
    return {
    }
  },
  components: {
    asideItem
  },
  computed: {
    token: {
      get () {
        return this.$store.state.user.token
      }
    }
  },
  mounted () {
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
.index-Forum
  width: 100%
  min-height: 1100px
  border-radius: 4px
  .index-Forum-wrapper
    border: 1px solid #eee
    min-height: 850px
    padding: 15px
    background: #fff
    .item
      display: block
    .item:not(:nth-child(1))
      border-top: 1px solid #eee
.Header-title
  line-height: 22px
  height: 22px

.Header
  // padding: 20px 15px
  // background: #e5e5e5
  margin-bottom: 10px
  border-radius: 5px
  font-size: 14px
  a
    display: inline-block
    padding: 10px 10px
    color: #555
    .num
      color: #999
  .active
    color: #fff
    background: #4191f4
    border-radius: 5px
    font-weight: 700
  .newForum
    float: right
    background: #ea4748
    padding: 10px 10px
    border-radius: 5px
    color: #fff
</style>
