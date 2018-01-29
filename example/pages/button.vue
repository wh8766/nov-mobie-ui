<template>
    <nov-page title="Button" desc="基础按钮样式">
        <a class="weui-btn weui-btn_primary">页面主操作 Normal</a>
        <a class="weui-btn weui-btn_primary weui-btn_loading"><i class="weui-loading"></i>页面主操作
            Loading</a>
        <a class="weui-btn weui-btn_disabled weui-btn_primary">页面主操作 Disabled</a>
        <a class="weui-btn weui-btn_default">页面次要操作 Normal</a>
        <a class="weui-btn weui-btn_default weui-btn_loading"><i class="weui-loading"></i>页面次操作
            Loading</a>
        <a class="weui-btn weui-btn_disabled weui-btn_default">页面次要操作 Disabled</a>
        <a class="weui-btn weui-btn_warn">警告类操作 Normal</a>
        <a class="weui-btn weui-btn_warn weui-btn_loading"><i class="weui-loading"></i>警告类操作
            Loading</a>
        <a class="weui-btn weui-btn_disabled weui-btn_warn">警告类操作 Disabled</a>

        <a class="weui-btn weui-btn_plain-default">按钮</a>
        <a class="weui-btn weui-btn_plain-default weui-btn_plain-disabled">按钮</a>
        <a class="weui-btn weui-btn_plain-primary">按钮</a>
        <a class="weui-btn weui-btn_plain-primary weui-btn_plain-disabled">按钮</a>
        <a class="weui-btn weui-btn_mini weui-btn_primary">按钮</a>
        <a class="weui-btn weui-btn_mini weui-btn_default">按钮</a>
        <a class="weui-btn weui-btn_mini weui-btn_warn">按钮</a>
    </nov-page>
</template>

<script type="text/ecmascript-6">
    import NovPage from '../components/nov-page'

    export default {
        name: "page-button",
        components: {
            NovPage
        }
    }
</script>

<style scoped>

</style>
