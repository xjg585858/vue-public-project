<template>
    <router-link @click.native='submit(item.id)' :to="{name:'Forum_Details'}">
        <el-row>
            <el-col :span="2">
                <div class="item-logo item">
                    <p><img :src="item.logoUrl" alt=""></p>
                    <p class="name col-text iconfont icon-huiyuan">{{item.account}} </p>
                </div>
            </el-col>
            <el-col :span="22">
                <div class="item-content item">
                    <h2>{{item.title}} <span style="color: red">{{item.Remarks}}</span></h2>
                    <div class="text col-text">{{item.content}} <el-tag size='mini' v-if="item.Newcomer" type='success'>新人贴</el-tag></div>
                    <p class="time">发表于 {{item.Time}}  最后回复 {{item.replyName + ' ' + item.lastTime}}<span class="Watch"><i class="el-icon-message"></i> {{item.comments}} <i class="el-icon-view"></i> {{item.Views}}</span></p>
                </div>
            </el-col>
        </el-row>
    </router-link>
</template>
<script>
export default{
  props: {
    item: Object
  },
  methods: {
    submit (id) {
      this.$store.dispatch('SetForumDetailsId', id)
    }
  }
}
</script>
<style lang="sass" scoped>
.item
    padding: 5px
.item-logo
    p
        font-size: 13px
        text-align: center
        img
            border-radius: 50%
    .name
        color: #666
        line-height: 22px
.item-content
    h2
        line-height: 26px
        color: #333
        font-size: 16px
    .text
        font-size: 13px
        color: #999
        line-height: 30px
.time
    font-size: 12px
    color: #999
    line-height: 22px
    .Watch
        float: right
</style>
