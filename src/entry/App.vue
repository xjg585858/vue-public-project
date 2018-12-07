<template>
    <div id="app">
        <el-container>
            <el-header>
                <pcHeader></pcHeader>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import pcHeader from '../web/component/Header'
export default {
  name: 'App',
  components: {
    pcHeader
  }
}
</script>
<style lang=""></style>
