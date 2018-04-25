<template>
    <nov-page title="Slide" desc="基于cube-ui、better-scroll 的slide 组件">
        <div class="flud-slide">
            <nov-slide>
                <nov-slide-item v-for="(banner, index) in banners" :key="index">
                    <img :src="banner.image">
                </nov-slide-item>
            </nov-slide>
        </div>
        <div class="page">
            <group title="基础Slide">
                <div class="slide-container">
                    <nov-slide
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
                <nov-switch v-model="autoPlay">autoPlay</nov-switch>
                <nov-switch v-model="loop">loop</nov-switch>
            </group>

            <group title="自定义样式">
                <div class="slide-container-custom">
                    <nov-slide>
                        <nov-slide-item v-for="(banner, index) in banners" :key="index">
                            <img :src="banner.image">
                            <p>{{banner.text}}</p>
                        </nov-slide-item>
                        <template slot="dots" slot-scope="props">
                            <span class="my-dot" :class="{active: props.current === index}" v-for="(item, index) in props.dots">{{index + 1}}</span>
                        </template>
                    </nov-slide>
                </div>
            </group>
        </div>
    </nov-page>
</template>

<script type="text/ecmascript-6">
    import NovPage from '../components/nov-page'
    import NovSlide from '@/components/slide/slide'
    import NovSlideItem from '@/components/slide/slide-item'

    import Group from '@/components/group/group'
    import NovSwitch from '@/components/nov-switch/nov-switch'

    export default {
        name: "page-slide",
        components: {
            NovPage,
            NovSlide,
            NovSlideItem,
            Group,
            NovSwitch
        },
        data() {
            return {
                items: [
                    {
                        url: 'http://www.didichuxing.com/',
                        image: 'https://picsum.photos/710/150?random&t=a'
                    }, {
                        url: 'http://www.didichuxing.com/',
                        image: 'https://picsum.photos/710/150?random&t=b'
                    }
                ],
                banners: [
                    {
                        image: 'https://picsum.photos/375/150?random&t=1',
                        text: '狗年大吉'
                    }, {
                        image: 'https://picsum.photos/375/150?random&t=2',
                        text: '红包拿来'
                    }, {
                        image: 'https://picsum.photos/375/150?random&t=3',
                        text: '不给就捣乱'
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

<style lang='less' type="text/less" rel="stylesheet/less" scoped>
    .flud-slide {
        height: 150px;
        overflow: hidden;
    }

    .slide-container {
        height: 75px;
        margin-bottom: 15px;
        transform: translateZ(0px);
        border-radius: 2px;
        overflow: hidden;
        box-shadow: 0 2px 9px #ddd;
    }

    .slide-container-custom {
        overflow: hidden;
        height: 150px;

        img {
            width: 100%;
        }

        .my-dot {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            color: #333;
            text-align: center;
            font-size: 12px;
            line-height: 20px;

            &.active {
                background-color: lightcoral;
                color: white;
            }
        }

        p {
            position: absolute;
            bottom: 0;
            background-color: rgba(50, 50, 50, 0.4);
            color: white;
            text-align: left;
            width: 100%;
            font-size: 14px;
            line-height: 30px;
            padding-left: 15px;
        }
    }
</style>



