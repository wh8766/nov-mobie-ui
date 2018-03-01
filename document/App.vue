<template>
    <div>
        <nav id="nav" class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <router-link class="navbar-brand" to="/">
                        <img alt="Brand" src="./assets/image/logo-open.png">
                        Nov UI
                    </router-link>
                </div>
                <ul class="nav navbar-nav navbar-right">
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
            </div>
        </nav>

        <router-view></router-view>

        <footer>
            <p>Nov UI, Copy right Lenovo SLS STC.</p>
        </footer>
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
