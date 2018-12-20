<template>
    <el-row class="main-header">
        <el-col :span='8'>
            <div class="logo">
                <router-link to='/'>{{$t('logo')}}</router-link>
            </div>
        </el-col>
        <el-col :span='7'>
            <div class="search">
                <el-input :placeholder="$t('search')" size="small" v-model="input5" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                    <template slot="prepend">
                        <el-dropdown @command="handleCommand">
                            <span class="el-dropdown-link">
                                类型<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="1">黄金糕</el-dropdown-item>
                                <el-dropdown-item command="2">狮子头</el-dropdown-item>
                                <el-dropdown-item command="3">螺蛳粉</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </template>
                </el-input>
            </div>
        </el-col>
        <el-col :span='7'>
            <div class="info">
                <template v-if="token">
                   {{$t('user.username')}}: {{user.account}} {{$t('user.amount')}} {{user.money}} {{$t('user.integral')}} {{user.integral}}<el-button @click="logInOut()" type="danger" size="small">{{$t('user.out')}}</el-button>
                </template>
                <template v-else>
                    <el-button type="" @click="logInMask = true" size="small">{{$t('login.logIn')}}</el-button>
                    <el-button type="danger" size="small">{{$t('registered.registered')}}</el-button>
                </template>
            </div>
        </el-col>
        <el-col :span='2'>
            <div class="Language">
                <languageComponent></languageComponent>
            </div>
        </el-col>
        <login :logInMask.sync='logInMask'></login>
    </el-row>
</template>
<script>
import languageComponent from '../language-Component'
import login from '../logIn'
export default {
  components: {
    languageComponent,
    login
  },
  data () {
    return {
      input5: '',
      logInMask: false
    }
  },
  computed: {
    token: {
      get () {
        return this.$store.state.user.token
      }
    },
    user: {
      get () {
        return this.$store.state.user.user
      }
    }
  },
  mounted () {
  },
  methods: {
    logInOut () {
      this.$store.dispatch('logInOut').then((req) => {
        console.log(req)
      })
    },
    handleCommand (command) {
    //   this.$message('click on item ' + command)
    }
  }
}
</script>
<style lang="sass" scoped>
@import '@/assets/web/mixin.scss'
.main-header
    height: 70px
    line-height: 70px
    font-size: 14px
    .info
        text-align: right
        a
            padding: 3px 10px
            border: 1px solid #e5e5e5
            border-radius: 5px
    .Language
        text-align: right
</style>
