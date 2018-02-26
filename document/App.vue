<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <router-link class="navbar-brand" to="/">
                        Nov UI 文档
                    </router-link>
                </div>

                <ul class="nav navbar-nav">
                    <router-link to="/" tag="li" exact>
                        <a>首页</a>
                    </router-link>
                    <router-link to="/doc" tag="li">
                        <a>文档</a>
                    </router-link>
                    <router-link to="/example" tag="li">
                        <a>例子</a>
                    </router-link>
                </ul>
            </div><!-- /.container-fluid -->
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
            }
        },
        methods: {
        },
        computed: {
        },
        mounted() {

        }
    }
</script>

<style lang='less' type="text/less" scoped>

</style>
