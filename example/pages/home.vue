<template>
    <div class="container">
        <header>
            <h1>Nov Mobile</h1>
            <p>Lenovo Service 移动端组件库</p>
        </header>

        <section>
            <h2>布局 Layout</h2>
            <ul>
                <li><a href="">color</a></li>
                <li>
                    <router-link to="/loading">loading</router-link>
                </li>
                <!--<li>-->
                    <!--<router-link to="/entry-loading">enter loading</router-link>-->
                <!--</li>-->
            </ul>
        </section>
        <section>
            <h2>操作反馈 Feedback</h2>
            <ul>
                <li>
                    <router-link to="/feedback">feedback</router-link>
                </li>
            </ul>
        </section>

        <section>
            <h2>数据展示 Data show</h2>
            <ul>
                <li><a href="">scroll loading</a></li>
                <li><a href="">slide</a></li>
                <li><a href="">index list</a></li>
                <li>
                    <router-link to="/preview">preview</router-link>
                </li>
            </ul>
        </section>

        <section>
            <h2>表单 Form</h2>
            <ul>
                <li>
                    <router-link to="/button">button</router-link>
                </li>
                <li>
                    <router-link to="/form">form</router-link>
                </li>
                <li>
                    <router-link to="/upload">upload</router-link>
                </li>
            </ul>
        </section>

        <section>
            <h2>其他 Other</h2>
            <ul>
                <li>
                    <router-link to="/other">other</router-link>
                </li>
            </ul>
        </section>

        <section>
            <h2>业务组件 Business</h2>
            <ul>
                <li>
                    <router-link to="/scratch">scratch</router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: "home"
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
