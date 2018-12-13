<template>
    <el-dropdown  @command="handleCommand">
        <span class="el-dropdown-link">
            {{$t('language')}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">简体中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
export default {
  methods: {
    handleCommand (command) {
      this.$i18n.locale = command
      this.$store.dispatch('setLanguage', command)
    }
  }
}
</script>
<style lang=""></style>
