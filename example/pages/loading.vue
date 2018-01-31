<template>
    <nov-page title="Loading" desc="数据加载状态">
        <div class="item">
            <h4 class="item__title">inline loading</h4>
            <p>
                <inline-loading></inline-loading>
            </p>
        </div>
        <div class="item">
            <h4 class="item__title">load more</h4>
            <load-more>加载数据ing</load-more>
            <load-more :loading="false">暂无数据</load-more>
            <load-more :loading="false"></load-more>
        </div>
    </nov-page>
</template>

<script type="text/ecmascript-6">

    import NovPage from '../components/nov-page'

    import NovButton from '@/components/button/button'
    import InlineLoading from '@/components/inline-loading/inline-loading'
    import LoadMore from '@/components/load-more/load-more'

    export default {
        name: "page-loading",
        components: {
            NovPage,
            NovButton,
            InlineLoading,
            LoadMore
        }
    }
</script>

<style lang="less" type="text/less" scoped>
    p {
        text-align: center;
    }
</style>
