<template>
    <div>
        <div
                class="weui-cells__title"
                v-if="title"
                :style="cleanStyle({
      color: titleColor
    })"
                v-html="title"></div>
        <slot name="title"></slot>
        <div
                class="weui-cells"
                :class="{
      'weui-no-group-title': !title
    }"
                :style="cleanStyle({
      marginTop: typeof gutter === 'number' ? (gutter + 'px') : gutter
    })">
            <slot name="after-title"></slot>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import cleanStyle from '../../tool/clean-style'

    export default {
        name: 'group',
        methods: {
            cleanStyle
        },
        props: {
            title: String,
            titleColor: String,
            labelWidth: String,
            labelAlign: String,
            labelMarginRight: String,
            gutter: [String, Number]
        }
    }
</script>

<style lang='less' type="text/less" rel="stylesheet/less">
    @import "../../common/style/widget/weui-cell/weui-access";
    @import "../../common/style/widget/weui-cell/weui-cell_global";

    .weui-no-group-title {
        margin-top: 15px;
    }
</style>
