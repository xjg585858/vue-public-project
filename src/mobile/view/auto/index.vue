<template>
    <div class="inlay-auto">
        <inlayHeader></inlayHeader>
        <router-view/>
    </div>
</template>
<script>
import inlayHeader from '../../components/backHeader'
// import { login } from '../../../api/Management.js'
export default {
  name: 'inlay-auto',
  components: {
    inlayHeader
  },
  mounted () {
    // login({name: '1235', qwd: '456'}).then((req) => {
    //   console.log(req)
    // })
  }
}
</script>
<style lang="">
.box{
    height: 500px;
    background: #f5f5f5
}
</style>
