<template>
    <div class="container">
        <header>
            <h1>Nov Mobile</h1>
            <p>Lenovo Service 移动端组件库</p>
        </header>

        <section v-for="group in menu">
            <h2>{{group.name}}</h2>
            <ul>
                <li v-for="item in group.children">
                    <router-link :to="'/'+item.name">{{item.name}}</router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import menu from '../../config/menu'

    export default {
        name: "example-home",
        data() {
            return {
                menu: menu.filter(section => section.type === 'components')
            }
        },
    }
</script>

<style type="text/less" lang="less" scoped>
    .container {
        background-color: #f5f5f9;
        padding: 20px 15px 15px;
    }

    header {
        padding-left: 15px;
        margin-bottom: 25px;

        h1 {
            font-size: 22px;
            font-weight: lighter;
        }
        p {
            font-size: 14px;
            font-weight: lighter;
        }
    }

    section {
        margin-bottom: 15px;
        padding: 15px 15px 0;
        background-color: #fff;
        border-radius: 4px;

        h2 {
            font-weight: lighter;
            font-size: 18px;
            line-height: 30px;
        }

        li {
            list-style: none;
            border-bottom: 1px solid #f5f5f9;

            a {
                font-size: 16px;
                font-weight: lighter;
                line-height: 40px;
                color: #333;
                width: 100%;
                display: inline-block;
            }
        }
    }
</style>
