<template>
    <transition name="router-fade">
        <router-view></router-view>
    </transition>
</template>
<script>
export default {
    name: 'app'
}
</script>
<style lang="scss">
@import 'style/reset.scss';
.router-fade-enter,
.router-fade-leave {
    opacity: 0;
}

.router-fade-enter-active,
.router-fade-leave-active {
    transition: opacity .3s;
}

//vux loading reset css
.weui-icon_toast.weui-loading {
    margin: 15px 0;
}

.weui-toast {
    width: 100px;
    height: 100px;
    margin-left: -50px;
    min-height: auto;
}
</style>
