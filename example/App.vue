<template>
    <transition :name="transitionName">
        <router-view class="child-view"></router-view>
    </transition>
</template>

<script>
    import FastClick from 'fastclick';

    export default {
        name: 'app',
        data () {
            return {
                transitionName: 'slide-left'
            }
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').filter(path => path).length
                const fromDepth = from.path.split('/').filter(path => path).length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        mounted() {
            FastClick.attach(document.body);
        }
    }
</script>

<style src="../src/common/style/weui.less" lang="less"></style>
<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    .child-view {
        position: absolute;
        transition: all .5s cubic-bezier(.55,0,.1,1);
        top: 0;
        left: 0;
        right: 0;
    }
    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-30px, 0);
        transform: translate(-30px, 0);
    }
    .page {
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 20px;
    }
</style>
