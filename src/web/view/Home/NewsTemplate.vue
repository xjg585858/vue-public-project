<template>
    <div class="index-Home-wrapper">
        <el-row class="index-Home-wrapper-box" :gutter="20">
            <el-col :span='24'>
              <div class="title"><span>{{title}}</span></div>
            </el-col>
            <el-col :span="12">
              <div class="item new_left" :key='index+item.nation' v-if="index < 1" v-for='(item, index) in news'>
                <p class="img_logo">
                  <img :src="item.logoUrl" alt="">
                </p>
                <a class="info-title" href="javascript:void(0)">{{item.title}}</a>
                <p class="time">
                  <span class="el-icon-star-off"> {{item.starTitle}}</span> <span class="el-icon-time"> 2018-12-15</span> <span class="el-icon-info"> {{item.ment}}</span>
                </p>
                <div class="content" v-html="item.content"></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="item coverlist" :key='index+item.nation' v-if="index!=0" v-for="(item, index) in news">
                <el-row :gutter="5">
                  <el-col :span="6">
                    <div class="coverlist_Icon">
                      <img style="width: 100%" :src="item.logoUrl" alt="">
                    </div>
                  </el-col>
                  <el-col :span="18">
                    <div class="coverlist_text">
                      <h2><a class="title_16" href="">{{item.title}}</a></h2>
                      <p>
                        <span v-html="item.content"></span>
                      </p>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
    </div>
</template>
<script>
export default{
  name: 'Home',
  props: {
    title: String,
    news: Array
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
<style lang="sass" scoped>
.index-Home-wrapper
    // border: 1px solid #eee
    min-height: 500px
    padding: 10px
    .item
        padding: 10px 0
// 主题头部
.title
  position: relative
  height: 35px
  color: #999
  font-size: 16px
  font-weight: 700
  line-height: 35px
  &:after
    position: absolute
    content: ''
    height: 2px
    background: #ea4748
    width: 70px
    left: 0
    bottom: 0
    transition: all .2s linear
    .title:hover
      &:after
        width: 100%
.title_16
  font-size: 16px
  color: #555
  font-weight: 700
// 左边
.new_left
  .info-title
    height: 40px
    display: block
    color: #555
    line-height: 40px
    font-size: 16px
    font-weight: 700
  .img_logo
    img
      width: 100%
  .time
    line-height: 30px
    span
      font-size: 12px
      color: #afafaf
  .content
    padding: 5px 0
    font-size: 14px
    line-height: 18px
    color: #999

// 右边
.coverlist
  .coverlist_Icon
    img
      height: 82px
  .coverlist_text
    h2
      height: 29px
    p
      font-size: 12px
      color: #878787
      line-height: 22px
      height: 44px
      overflow: hidden
.coverlist:not(:nth-child(1))
    border-top: 1px solid #eee

</style>
