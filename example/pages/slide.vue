<template>
    <nov-page title="Slide" desc="基于cube-ui、better-scroll 的slide 组件">
        <div class="page">
            <div class="item">
                <h4 class="item__title">基础Slide</h4>
                <div ref="slideWrapper" class="slide-container">
                    <nov-slide
                        ref="slide"
                        :data="items"
                        :initial-index="initialIndex"
                        :loop="loop"
                        :auto-play="autoPlay"
                        :interval="interval"
                        :threshold="threshold"
                        :speed="speed"
                        :allow-vertical="allowVertical">
                    </nov-slide>
                </div>
            </div>
        </div>
    </nov-page>
</template>

<script type="text/ecmascript-6">
    import NovPage from '../components/nov-page'
    import NovSlide from '@/components/slide/slide'

    export default {
        name: "page-button",
        components: {
            NovPage,
            NovSlide
        },
        data() {
            return {
                items: [
                    {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                    }, {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                    }
                ],
                loop: true,
                autoPlay: true,
                interval: 4000,
                threshold: 0.3,
                speed: 400,
                allowVertical: false,
                initialIndex: 1,
                dotsSlot: false,
                addItem3: false
            }
        },
    }
</script>

<style lang='less' type="text/less" scoped>
    .slide-container {
        height: 75px;
        margin-bottom: 15px;
        transform: translateZ(0px);
        border-radius: 2px;
        overflow: hidden;
        box-shadow: 0 2px 9px #ddd;

        .nov-slide-dots .my-dot {
            height: auto;
            font-size: 12px;
            background: none;
            &.active {
                color: #fc9153;
            }
        }
    }
</style>



