<template>
    <div id="app">
        <!-- <el-container>
            <el-header height='60px'>
                <pcHeader></pcHeader>
            </el-header>
            <el-main>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container> -->
        <router-view/>
    </div>
</template>
<script>
// import pcHeader from '../web/component/Header'
export default {
  name: 'App',
  components: {
    // pcHeader
  }
}
</script>
<style lang=""></style>
