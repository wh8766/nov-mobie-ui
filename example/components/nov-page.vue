<template>
    <div class="nov-page" :class="type">
        <header class="header">
            <h1>
                <router-link to="/">Home</router-link>
                &nbsp;|&nbsp;
                {{title}}
            </h1>
            <p v-show="desc" class="desc"><slot name="desc">{{desc}}</slot></p>
        </header>
        <div class="wrapper">
            <main class="content">
                <slot>{{content}}</slot>
            </main>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            title: {
                type: String,
                default: '',
                required: true
            },
            type: {
                type: String,
                default: ''
            },
            desc: {
                type: String,
                default: ''
            },
            content: {
                type: String,
                default: ''
            }
        },
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style type="text/less" lang="less" scoped>
    .nov-page {
        background-color: #f5f5f9;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    header {
        padding-left: 15px;
        margin-bottom: 25px;

        h1 {
            font-size: 22px;
            font-weight: lighter;

            a {
                color: #59626f;
            }
        }
        p {
            font-size: 14px;
            font-weight: lighter;
        }
    }
</style>
