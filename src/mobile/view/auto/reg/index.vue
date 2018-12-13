<template>
    <div class="inlay-auto-reg">
        <div class="inlay-auto-reg-box">
          <inputBox v-model="ruleForm.account" text="text" placeholder='请输入用户名'>
            <span slot="label" class="label">账号</span>
          </inputBox>
          <inputBox v-model="ruleForm.pass" text="password" placeholder='请输入密码'>
            <span slot="label" class="label">密码</span>
          </inputBox>
          <inputBox v-model="ruleForm.qrpass" text="password" placeholder='确认密码'>
            <span slot="label" class="label">确认</span>
          </inputBox>
          <inputBox v-model="ruleForm.realName" text="text" placeholder='真实姓名'>
            <span slot="label" class="label">姓名</span>
          </inputBox>
          <inputBox v-model="ruleForm.phone" text="text" placeholder='请输入手机号'>
            <span slot="label" class="label">手机号</span>
          </inputBox>
          <inputBox v-model="ruleForm.code" text="text" placeholder='请输入验证码'>
            <span slot="label" class="label">验证码</span>
            <img class="ImgCode" @click="ImgCode()" ref="ImgCode" slot="img" :src="Images" alt="erification">
          </inputBox>
          <div class="btn" @click="submit()">登录</div>
          <div class="link">
            <router-link :to="{name:'login'}">已有账号，请登录！</router-link>
          </div>
        </div>
    </div>
</template>
<script>
import inputBox from '../../../components/inputBox'
import { Getregistered } from '../../../../api/Management.js'
export default {
  name: 'inlay-auto',
  data () {
    return {
      ruleForm: {
        account: '',
        pass: '',
        realName: '',
        qrpass: '',
        phone: '',
        code: ''
      },
      Images: ''
    }
  },
  components: {
    inputBox
  },
  methods: {
    ImgCode () {
      this.Images = '/api/Verification?d=' + Math.random()
    },
    submit () {
      Getregistered(this.ruleForm).then((req) => {
        if (req.status === 'error') {
          alert(req.massage)
        }
      })
    }
  },
  mounted () {
    this.ImgCode()
    // login({name: '123', qwd: '456'}).then((req) => {
    //   console.log(req)
    // })
  }
}
</script>
<style lang="sass" scoped>
@import "@/assets/mobile/scss/mixin.scss"
.inlay-auto-reg-box
  padding: size(10)
  .btn
    width: 100%
    padding: size(20) size(0)
    font-size: size(40)
    margin: size(20) 0
    text-align: center
    border: 1px solid #e5e5e5
    background: #333
    color: #fff
    border-radius: 5px
  .link
    text-align: right
    a
      font-size: size(36)

</style>
