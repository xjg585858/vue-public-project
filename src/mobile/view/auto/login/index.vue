<template>
    <div class="inlay-auto-login row">
        <div class="inlay-auto-login-box">
          <inputBox v-model="ruleForm.account" text="text" placeholder='请输入用户名'>
            <span class="label" slot='label'>账号:</span>
          </inputBox>
          <inputBox v-model="ruleForm.pass" text="password" placeholder='请输入手机号'>
            <span class="label" slot='label'>密码:</span>
          </inputBox>
          <inputBox v-model="ruleForm.code" text="text" placeholder='请输入验证码'>
            <span class="label" slot='label'>验证码:</span>
            <img class="ImgCode" @click="ImgCode()" ref="ImgCode" slot="img" :src="Images" alt="erification">
          </inputBox>
          <div class="btn" @click="submit()">登录</div>
          <div class="link">
            <router-link :to="{name:'registered'}">没有账号，请注册？</router-link>
          </div>
        </div>
    </div>
</template>
<script>
import { login } from '../../../../api/Management.js'
import inputBox from '../../../components/inputBox'
export default {
  name: 'inlay-auto',
  components: {
    inputBox
  },
  data () {
    return {
      ruleForm: {
        account: '',
        pass: '',
        code: ''
      },
      Images: ''
    }
  },
  mounted () {
    this.ImgCode()
  },
  methods: {
    ImgCode () {
      this.Images = '/api/Verification?d=' + Math.random()
    },
    submit () {
      login(this.ruleForm).then((req) => {
        if (req.status.error) {
          return this.ImgCode()
        } else {
          this.$Message(req.massage, 'success')
          this.$router.push({name: 'Home'})
        }
      })
    }
  }
}
</script>
<style  lang="sass" scoped>
@import "@/assets/mobile/scss/mixin.scss"
.inlay-auto-login
  .inlay-auto-login-box
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
