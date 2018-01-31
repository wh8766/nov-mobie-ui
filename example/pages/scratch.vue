<template>
    <nov-page title="Scratch" desc="刮刮卡功能">
        <div class="page">
            <div class="item">
                <h4 class="item__title">刮刮卡基本</h4>
                <nov-scratch>
                    <img class="scratch" src="../static/scratch-bg.png">
                </nov-scratch>
            </div>

            <div class="item">
                <h4 class="item__title">刮刮自定义背景、事件</h4>
                <nov-scratch :touchRadius="25"
                             :activeBoundary="60"
                             @on-image-load="onImageLoad"
                             @on-show="onShow"
                             @on-first="onFirst">
                    <div class="scratch-bg">
                        <h4>恭喜哈！狗年要吉祥！</h4>
                        <p>红包拿来</p>
                    </div>
                </nov-scratch>
            </div>

            <div class="item">
                <h4 class="item__title">减小的刮奖区域</h4>
                <nov-scratch :touchRadius="10" :activeBoundary="30">
                    <div class="scratch-bg">
                        <h4>恭喜哈！狗年要吉祥！</h4>
                        <p>红包拿来</p>
                    </div>
                </nov-scratch>
            </div>
        </div>
    </nov-page>
</template>

<script type="text/ecmascript-6">
    import weui from 'weui.js'

    import NovPage from '../components/nov-page'
    import NovScratch from '@/components/scratch/scratch'

    export default {
        name: "page-button",
        components: {
            NovPage,
            NovScratch
        },
        methods: {
            onImageLoad() {
                weui.topTips('刮奖区域图片加载完成')
            },
            onFirst() {
                weui.topTips('首次刮动')
            },
            onShow() {
                weui.alert('刮开奖，看看是什么？')
            }
        },
    }
</script>

<style lang="less" type="text/less" scoped>
    .scratch {
        width: 100%;
        height: 140px;
    }
    .scratch-bg {
        background-image: url("../static/scratch-bg-empty.png");
        background-size: contain;
        height: 140px;
        width: 100%;
        color: lightcoral;
        font-weight: lighter;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;

        h4 {
            font-size: 22px;
        }
        p {
            font-size: 18px;
        }
    }
</style>
