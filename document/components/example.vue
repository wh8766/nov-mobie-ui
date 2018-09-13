<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="alert alert-info" role="alert">
                    <h4>这里是例子</h4>
                    <p>
                        在内网的同学可以通过：
                        <a href="http://fe.g.lenovo.com.cn/nov-mobile-ui/example.html#/">http://fe.g.lenovo.com.cn/nov-mobile-ui/example.html#/</a>
                        来访问
                    </p>
                </div>
                <div class="well">
                    <p>或者使用微信扫描二维码体验：</p>
                    <p>
                        <img :src="qrcode">
                    </p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="phone">
                    <iframe src="./example.html" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    let url = encodeURIComponent(location.origin + location.pathname + 'example.html')

    export default {

        name: "doc-example",
        data() {
            return {
                qrcode: '//api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + url
            }
        },
    }
</script>

<style lang='less' type="text/less" scoped>
    .container {
        padding-top: 100px;
    }

    .phone {
        text-align: center;
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
