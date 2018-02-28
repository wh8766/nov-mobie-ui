<template>
    <div class="container">
        <h2>这里是例子</h2>
        <div class="well">
            <div class="phone">
                <iframe src="./example.html" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: ""
    }
</script>

<style lang='less' type="text/less" scoped>
    .well {
        text-align: center;
    }

    .phone {
        border: 2px solid lightslategrey;
        border-radius: 15px;
        width: 375px;
        height: 667px;
        background-color: lightslategrey;
        padding-top: 60px;
        padding-bottom: 70px;
        box-sizing: content-box;

        margin-left: auto;
        margin-right: auto;

        &:after {
            content: " ";
            display: inline-block;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            border: 2px solid slategrey;
            background-color: #fff;

            margin-top: 10px;
        }

        iframe {
            width: 100%;
            height: 100%;
        }
    }
</style>
