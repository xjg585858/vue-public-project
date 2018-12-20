<template>
  <div class="index-Home">
    <el-container>
      <el-main style="padding-top: 0;padding-left: 0">
        <NewsTemplate class="item-news" :title='item.title' :news="item.news" :key="item.country + index" v-for="(item,index) in list"></NewsTemplate>
      </el-main>
      <el-aside width="250px">
        <asideItem></asideItem>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
import asideItem from './aside'
import NewsTemplate from './NewsTemplate'
// import { localNews } from '../../../api/Management.js'
export default {
  name: 'Home',
  data () {
    return {
      list: [
        {country: 'PH', news: [], title: '本地热点'},
        {country: 'zh', news: [], title: '华人世界'}
      ]
    }
  },
  components: {
    asideItem,
    NewsTemplate
  },
  computed: {
    token: {
      get () {
        return this.$store.state.user.token
      }
    }
  },
  created () {
    // for (let i = 0; i < this.list.length; i++) {
    //   localNews({nation: this.list[i].country}).then((req) => {
    //     this.list[i].news = req
    //   })
    // }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
.index-Home
  width: 100%
  min-height: 1100px
  border-radius: 4px
.item-news
  background: #fff
  border-left: 1px solid #eee
  border-right: 1px solid #eee
  border-top: 1px solid #eee
.item-news:last-child
  border-bottom: 1px solid #eee
</style>
