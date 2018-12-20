<template>
    <div class="Forum-Details">
        <el-container>
            <el-aside width="160px" style="background: #fff">
                <div class="header-logo">
                    <p class="icon">
                        <img :src="info.logoUrl" alt="">
                    </p>
                    <h6 class="iconfont icon-huiyuan">{{info.account}}</h6>
                </div>
            </el-aside>
            <el-main style="padding: 0">
                <div class="Forum-Details-wrapper">
                    <div class="header">
                        <h1>{{info.title}}</h1>
                        <p class="time">{{info.Time}} <i class="el-icon-message"></i>{{info.ment}} <i class="el-icon-view"></i>{{info.Views}}</p>
                    </div>
                    <div class="body">
                        {{info.content}}
                    </div>
                    <div class="footer">
                        <h3>回复 <a href="javascript:void(0)" class="Report">举报</a></h3>
                        <div class="footer-body">
                            <Message class="Message" :account='info.account' :Message='Message'></Message>
                        </div>
                    </div>
                </div>
                <div class="footer-textarea">
                    <h2>留言板</h2>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                        <el-form-item prop="replyMessage">
                            <el-input type="textarea" v-model="ruleForm.replyMessage"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">发表</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import { ForumDetails, createMessage, FindMessage, leaveMessage, ForumMassageOnly } from '@/api/Management.js'
import Message from './Message'
export default{
  components: {
    Message
  },
  data () {
    return {
      Message: [],
      textarea: '',
      ruleForm: {
        replyMessage: ''
      },
      info: {},
      rules: {
        replyMessage: [
          { required: true, message: '请填写留言', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
  },
  computed: {
    DetailsIdPage: {
      get () {
        return this.$store.state.Forum.DetailsIdPage
      }
    }
  },
  created () {
    this.ForumDetails()
    this.FindMessage()
    // this.ForumMessage() // 创建
    // console.log()
    // this.ForumMassageOnly()
    // this.ForumMassage()
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let obj = await this.$store.dispatch('GetUserInfo')
            this.ruleForm.id = this.info.id
            this.ruleForm.replyName = obj.data.account
            this.ruleForm.logoUrl = 'http://www.flw.ph/uc_server/images/noavatar_small.gif'
            createMessage(this.ruleForm).then((req) => {
                if (req.status === 'success') {
                  this.ruleForm.replyMessage = ''
                  this.FindMessage()
                }
            }).catch((err) => {
              this.$Message(err, 'error')
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    ForumDetails () { // 获取详情
      ForumDetails({id: this.DetailsIdPage}).then((req) => {
        this.info = req.data
      }).catch((err) => {
        console.log(err)
      })
    },
    // createMessage () {
    //   createMessage({id: this.DetailsIdPage}).then((req) => {
    //     console.log(req)
    //   }).catch((err) => {
    //     console.log(err)
    //   })
    // },
    FindMessage () {
      FindMessage({id: this.DetailsIdPage}).then((req) => {
        this.Message = req.data
      }).catch((err) => {
        console.log(err)
      })
    },
    leaveMessage () {
    },
    ForumMassageOnly () {
      ForumMassageOnly({id: Number(this.DetailsIdPage)}).then(async (req) => {
        this.info = req.data
      })
    },
    // ForumMassage (vl) {
    //   ForumMassage({id: this.DetailsIdPage}).then((req) => {
    //     this.Message = req.data
    //   })
    // },
    submit () {
    }
  }
}
</script>
<style lang="sass" scoped>
.header-logo
    text-align: center
    .icon
        margin: 10px 0
        img
            border: 3px solid #fff
            border-radius: 50%
            box-shadow: 0 0 4px rgba(200,200,200,.6)
    h6
        font-size: 16px
        color: #555
.Forum-Details-wrapper
    padding: 0 15px 15px 15px
    .header
        background: #fff
        padding-left: 15px
        border-bottom: 3px solid #f2f2f2
        h1
            color: #444
            font-size: 18px
            line-height: 30px
            font-weight: 900
        .time
            font-size: 13px
            color: #999
            line-height: 22px
    .body
        color: #999
        padding: 40px 20px
        background: #fff
    .footer
        margin-top: 30px
        padding: 15px
        background: #fff
        h3
            height: 40px
            line-height: 40px
            padding-right: 15px
            font-size: 14px
            padding-left: 15px
            color: #999
            .Report
                float: right
                font-size: 12px
        .footer-body
            border-top: 1px solid #eee
            min-height: 120px
        .footer-down
            padding-top: 20px
.footer-textarea
    padding: 0 15px 15px 15px
    margin: 15px
    background: #fff
    h2
        color: #333
        font-size: 16px
        line-height: 40px
</style>
