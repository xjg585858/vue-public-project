<template>
    <div class="index-Forum-wrapper">
        <div class="Header">
            <a href="javascript:void(0)" class="active">全部</a>
            <a href="javascript:void(0)" :key="index" v-for="(item,index) in Countrys">{{item.label}}</a>
            <a href="javascript:void(0)" class="newForum" @click='mask = !mask'>新建帖子<i class="el-icon-edit"></i></a>
        </div>
        <Forumlist class="item" :key='index + item.Time' v-for="(item, index) in ForumArr" :item='item'></Forumlist>
        <NewPost></NewPost>
        <NewPost :mask.sync='mask'></NewPost>
    </div>
</template>
<script>
import Country from '@/api/country.js'
import Forumlist from './ForumList'
import { ForumAll } from '@/api/Management.js'
import NewPost from '../NewPost'
let Countrys = new Country()
export default {
  data () {
    return {
      Countrys: Countrys.createType(),
      ForumArr: [],
      mask: false
    }
  },
  created () {
    ForumAll().then((req) => {
      this.ForumArr = req.data
    })
  },
  components: {
    Forumlist,
    NewPost
  }
}
</script>
<style lang="sass" scoped>
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
