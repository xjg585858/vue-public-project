<template>
    <div class="NewPost">
      <el-dialog title="新建帖子" width='500px' :visible.sync="visible"  @close="$emit('update:mask', false)" :mask="mask">
        <el-form :model="ruleForm2" status-icon :rules="rules2" size="mini" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item :label="$t('NewPost.title')" prop="title">
            <el-input type="text" :maxlength="30" :placeholder="$t('NewPost.titlePlaceholder')" v-model="ruleForm2.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item style="text-align:left" :label="$t('NewPost.type')" prop="type">
            <el-cascader v-if="options" :options="options" :placeholder="$t('NewPost.select')" v-model="ruleForm2.type"></el-cascader>
          </el-form-item>
          <el-form-item :label="$t('NewPost.content')" prop="content">
            <!-- <Tinymce v-model="content"></Tinymce> -->
            <el-input type="textarea" v-model="ruleForm2.content"></el-input>
            <!-- <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="ruleForm2.content"> -->
          </el-form-item>
          <el-form-item style="text-align:left">
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
</template>
<script>
import Tinymce from '../../../Tinymce/index'
import Country from '@/api/country.js'
import { createForum } from '@/api/Management.js'
let nation = new Country().createPlayer()
/* eslint-disable */
export default{
  components: {
    Tinymce
  },
  props:{
    mask: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      content: '',
      options: nation,
      visible: this.mask,
      selectedOptions3: [],
      ruleForm2: {
        title: '',
        type: '',
        content: '',
      },
      rules2: {
        title: [
          { required: true, message: this.$t('NewPost.titlePlaceholder'), trigger: 'blur' },
        ],
        type: [
          { type: 'array', required: true, message: this.$t('NewPost.select'), trigger: 'change' }
        ],
        content: [
          { required: true, message: this.$t('NewPost.contentPlaceholder'), trigger: 'blur' }
        ]
      }
    }
  },
  watch:{
    mask() {
      this.visible = this.mask
    }
  },
  mounted () {
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('GetUserInfo').then((objs) => {
            if (objs.status === 'success') {
              let data = {account: objs.data.account,logoUrl:'http://www.flw.ph/uc_server/images/noavatar_small.gif',nation: this.ruleForm2.type[0],type: this.ruleForm2.type[1]}
              data = Object.assign(data,this.ruleForm2)
              createForum(data).then((req) => {
                if (req.status === 'success') {
                  this.$Message(req.message, 'success')
                  this.$emit('update:mask', false)
                }
              }).catch((err) => {
                console.log(err)
              })
            }
            console.log(objs)
          }).catch((err)=>{
            console.log(err)
          })
          // console.log(this.ruleForm2)
          // alert('submit!')
        } else {
          console.log('error submit!!')
          return false;
        }
      })
    },
    resetForm(formName) {
      // this.
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="sass" scoped>
.NewPost
  text-align: left
  .title
    margin-bottom: 10px
  .el-form-item__content
    text-align: left
</style>
