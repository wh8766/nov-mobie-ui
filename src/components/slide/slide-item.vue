<template>
  <div class="nov-slide-item">
    <slot>
      <a :href="item.url">
        <img :src="item.image">
      </a>
    </slot>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'nov-slide-item'
  export default {
    name: COMPONENT_NAME,
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .nov-slide-item {
      float: left;
      box-sizing: border-box;
      height: 100%;
      text-align: center;

      > a {
          display: block;
          height: 100%;
          overflow: hidden;
          text-decoration: none;
      }

      img {
          display: block;
          height: 100%;
      }
  }
</style>
