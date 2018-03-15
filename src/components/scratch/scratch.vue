<template>
    <div class="nov-scratch">
        <canvas ref="canvas"></canvas>
        <div class="nov-scratch__cotent">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {offset} from "@/tools/dom";

    let getTransparentPercent = function(ctx, width, height) {
        let imgData = ctx.getImageData(0, 0, width, height),
            pixles = imgData.data,
            transPixs = []

        // 因为存储的结构为[R, G, B, A]，所以要每次跳4个长度
        for (let i = 0, j = pixles.length; i < j; i += 4) {
            let a = pixles[i + 3];    // 拿到存储alpha通道的值
            if (a === 0) {    // alpha通道为0，就代表透明
                transPixs.push(i);
            }
        }
        return (transPixs.length / (pixles.length / 4) * 100).toFixed(2);
    }

    export default {
        name: "nov-scratch",
        props: {
            bgImage: {
                type: String,
                default: ''
            },
            bgColor: {
                type: String,
                default: '#d9e0e0'
            },
            touchRadius: {
                type: Number,
                default: 20
            },
            activeBoundary: {
                type: Number,
                default: 40
            }
        },
        data() {
            return {
                firstScratch: false,
                showResult: false
            }
        },
        mounted() {
            let el = this.$refs.canvas, ctx = el.getContext('2d'), elOffset
            let width = el.parentElement.getBoundingClientRect().width,
                height = el.parentElement.getBoundingClientRect().height

            el.setAttribute('width', width+'px')
            el.setAttribute('height', height+'px')

            ctx.fillStyle = this.bgColor
            ctx.fillRect(0, 0, width, height)

            if (this.bgImage) {
                let img = new Image()
                img.src = this.bgImage
                img.onload = () => {
                    this.$emit('on-image-load')
                    ctx.drawImage(img, 0, 0, width, height)
                }
            }

            el.addEventListener('touchstart', e => {
                elOffset = offset(el)
                // 判断是否真实用户操作
                if (!e.isTrusted) {
                    return
                }
                e.preventDefault()

                //首次刮
                if (!this.firstScratch) {
                    this.firstScratch = true
                    this.$emit('on-first')
                }

                ctx.globalCompositeOperation = 'destination-out';
                // 以线段来画用户的手指轨迹
                // 设置线头和转折部分使用圆角
                ctx.lineWidth  = this.touchRadius * 2;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";

                drawCircle(ctx, e.touches[0].pageX, e.touches[0].pageY)

                if (!this.showResult && getTransparentPercent(ctx, width, height) > this.activeBoundary) {
                    this.$emit('on-show')
                    this.showResult = true
                    el.remove()
                    return
                }

                el.addEventListener('touchmove', touchHandler)
                el.addEventListener('touchend', e => {
                    el.removeEventListener('touchmove', touchHandler)
                })
            })

            let touchHandler = e => {
                // 判断是否真实用户操作
                if (!e.isTrusted) {
                    return
                }
                drawCircle(ctx, e.touches[0].pageX, e.touches[0].pageY)

                e.preventDefault()

                if (!this.showResult && getTransparentPercent(ctx, width, height) > this.activeBoundary) {
                    this.$emit('on-show')
                    this.showResult = true
                    el.remove()
                }
            }

            let drawCircle = (ctx, pageX, pageY) => {
                let x = (pageX - elOffset.left).toFixed(3)
                let y = (pageY - elOffset.top).toFixed(3)
                ctx.beginPath()
                ctx.moveTo(x,y);
                ctx.arc(x, y, this.touchRadius, 0, 2 * Math.PI, false);
                ctx.fill()
            }
        },
        computed: {},
        methods: {}
    }
</script>

<style lang='less' type="text/less" rel="stylesheet/less">
    .nov-scratch {
        position: relative;

        canvas {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
        }
    }

    .nov-scratch__cotent {
        width: 100%;
        overflow: hidden;
    }
</style>
