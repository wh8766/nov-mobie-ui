<template>
    <div class="weui-loadmore" :class="{'weui-loadmore_line':!loading, 'weui-loadmore_dot': !$slots.default && !loading}">
        <i class="weui-loading" v-if="loading"></i>
        <span class="weui-loadmore__tips">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'load-more',
        props: {
            loading: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="less" type="text/less">
    @import "../../common/style/widget/weui-loading/weui-loading.less";
    @import "../../common/style/widget/weui-tips/weui-loadmore.less";

    .weui-loadmore__tips {
        color: #666;
    }
</style>
