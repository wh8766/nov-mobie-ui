<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <ul v-for="group in menu">
                    <li><h4>{{group.name}}</h4></li>
                    <li v-for="m in group.children">
                        <router-link :to="'/doc/'+m.name">{{m.name}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import menu from '../menu'

    export default {
        name: "doc-index",
        data() {
            return {
                menu
            }
        },
    }
</script>

<style lang='less' type="text/less" scoped>
li {
    list-style: none;
}
</style>
