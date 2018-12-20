<template>
    <div class="Message-box">
        <el-row class="Message-list" :key='item.id' v-for="item in Message">
            <el-col :span='2' :key='item.id'>
                <div class="logo">
                    <img :src="item.replylogoUrl" alt="">
                </div>
            </el-col>
            <el-col :span='22' :key='item.id'>
                <h2><span class="name">{{item.replyName}}</span> <span class="time">发表于 {{item.Time}}</span></h2>
                <div class="content">
                    {{item.replyMessage}} <span style="color: red">{{item.Remarks}}</span>
                </div>
                <div class="_footer" v-if="account === item.replyName"><a href="javascript:void(0)" class="el-icon-edit"> 回复</a></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default{
  props: {
    Message: {
      type: Array
    },
    account: String
  },
  mounted () {
  },
  methods: {
    submit () {
    }
  }
}
</script>
<style lang="sass" scoped>
.Message-list
    padding: 10px
    border-bottom: 1px solid #eee
    min-height: 120px
    .logo
        img
            border-radius: 50%
            width: 50px
    h2
        line-height: 50px
        .name
            color: red
            font-size: 14px
        .time
            font-size: 12px
            color: #999
    .content
        text-align: left
        padding: 40px 0
        font-size: 16px
        color: #999
    ._footer
        a
            font-size: 12px
            color: #333
</style>
