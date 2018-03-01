<template>
    <nov-page title="Preview" desc="数据和结果预览">
        <div class="weui-form-preview">
            <div class="weui-form-preview__hd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">付款金额</label>
                    <em class="weui-form-preview__value">¥2400.00</em>
                </div>
            </div>
            <div class="weui-form-preview__bd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">商品</label>
                    <span class="weui-form-preview__value">电动打蛋机</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">标题标题</label>
                    <span class="weui-form-preview__value">名字名字名字</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">标题标题</label>
                    <span class="weui-form-preview__value">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</span>
                </div>
            </div>
            <div class="weui-form-preview__ft">
                <a class="weui-form-preview__btn weui-form-preview__btn_primary" href="javascript:">操作</a>
            </div>
        </div>
        <br>
        <div class="weui-form-preview">
            <div class="weui-form-preview__hd">
                <label class="weui-form-preview__label">付款金额</label>
                <em class="weui-form-preview__value">¥2400.00</em>
            </div>
            <div class="weui-form-preview__bd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">商品</label>
                    <span class="weui-form-preview__value">电动打蛋机</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">标题标题</label>
                    <span class="weui-form-preview__value">名字名字名字</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">标题标题</label>
                    <span class="weui-form-preview__value">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</span>
                </div>
            </div>
            <div class="weui-form-preview__ft">
                <a class="weui-form-preview__btn weui-form-preview__btn_default" href="javascript:">辅助操作</a>
                <button type="submit" class="weui-form-preview__btn weui-form-preview__btn_primary" href="javascript:">操作</button>
            </div>
        </div>
    </nov-page>
</template>

<script type="text/ecmascript-6">
    import NovPage from '../components/nov-page'

    export default {
        name: "page-preview",
        components: {
            NovPage
        }
    }
</script>

<style lang='less' type="text/less" rel="stylesheet/less" scoped>

</style>
