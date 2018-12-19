<template>
    <div class="login-lodding">
        <el-dialog :title="$t('login.logIn')" width='500px' :visible.sync="visible" @close="close()" :logInMask="logInMask">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
                <el-form-item :label="$t('login.username')" prop="account">
                    <el-input type="text" v-model="ruleForm.account" :placeholder="$t('login.Input') + $t('login.username')" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item :label="$t('login.password')" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" :placeholder="$t('login.Input') + $t('login.password')" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item :label="$t('login.code')" prop="code">
                    <el-input type="text" v-model="ruleForm.code" :placeholder="$t('login.Input') + $t('login.code')" autocomplete="off">
                        <el-button style="padding:0" slot="append">
                            <img @click="ImgCode()" :src="Images" style="position:relative;top:6px;height:40px" alt="">
                        </el-button>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
export default{
  name: 'logIn',
  props: {
    logInMask: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    logInMask () {
      this.visible = this.logInMask
    }
  },
  data () {
    var account = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('login.Input') + this.$t('login.username')))
      } else {
        callback()
      }
    }
    var pass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('login.Input') + this.$t('login.password')))
      } else {
        callback()
      }
    }
    var code = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('login.Input') + this.$t('login.code')))
      } else {
        callback()
      }
    }
    return {
      visible: this.logInMask,
      ruleForm: {
        account: 'test0089',
        pass: 'a123456',
        code: ''
      },
      Images: '',
      rules: {
        account: [
          { validator: account, trigger: 'blur' }
        ],
        pass: [
          { validator: pass, trigger: 'blur' }
        ],
        code: [
          { validator: code, trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.ImgCode()
  },
  methods: {
    ImgCode () {
      this.Images = '/api/Verification?d=' + Math.random()
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('loginUserName', this.ruleForm).then((req) => {
            this.resetForm('ruleForm')
            this.$emit('update:logInMask', false)
            this.$Message(req.massage, 'success')
          }).catch((err) => {
            this.ImgCode()
            this.$Message(err.massage, 'error')
            console.log(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    close () {
      this.resetForm('ruleForm')
      this.$emit('update:logInMask', false)
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
