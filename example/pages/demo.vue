<template>
    <nov-page title="Unfinished" desc="未编写示例页面">
        <div class="item">
            <h4 class="item__title">这里原本空空如也</h4>
            <nov-button type="primary" @click="go">加入我们 完善示例</nov-button>
        </div>
    </nov-page>
</template>

<script type="text/ecmascript-6">

    import NovPage from '../components/nov-page'

    import NovButton from '@/components/button/button'

    export default {
        name: "page-demo",
        components: {
            NovPage,
            NovButton
        },
        methods: {
            go() {
                location.assign('http://fe.g.lenovo.com.cn/nov-mobile-ui/')
            }
        },
    }
</script>

<style lang="less" type="text/less" scoped>
    p {
        text-align: center;
    }
</style>
