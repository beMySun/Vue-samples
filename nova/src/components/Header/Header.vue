<template>
  <div class="nav">
    <div class="nav-item">
      <p class="title"> {{ message }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    productTitle: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      message: this.productTitle
    }
  }
}
</script>

<style lang="scss">

@import '~@/assets/scss/helpers/_mixin';

.nav {
  line-height: 50px;
  background: #fff;

  border-bottom: 1px solid #ccc;
  .nav-item {
    text-align: center;
  }

  .title {
    @include font-dpr(15px);
  }
}
</style>
