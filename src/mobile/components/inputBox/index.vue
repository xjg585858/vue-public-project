<template>
    <div class="input-box-item row">
        <slot name="label"></slot>
        <input :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" :type='text'>
        <slot name="img"></slot>
    </div>
</template>
<script>
export default{
  name: 'input-item',
  props: ['value', 'text', 'placeholder']
}

</script>
<style lang="sass" scoped>
@import "@/assets/mobile/scss/mixin.scss"
.input-box-item
    position: relative
    width: 100%
    padding-left: size(150)
    margin: size(10) 0
    border: 1px solid #e5e5e5
    background: #fff
    border-radius: 4px
    overflow: hidden
    input
        width: 100%
        padding: size(10)
        font-size: size(40)
    .ImgCode
        position: absolute
        top: size(5)
        right: 0
        height: size(55)
    .label
        position: absolute
        font-size: size(40)
        padding: size(10)
        width: size(150)
        left: 0
        top: 0
        text-align: right
</style>
