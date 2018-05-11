<template>
    <div class="slot-container">
        <ul v-for="(colItems, index) in randomItems" :style="styles[index]">
            <li v-for="item in colItems" ref="refItems">
                <slot :item="item">
                    <img :src="item.src">
                </slot>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    // import SlotColumn from './slot-machine'
    // import SlotColumn from './slot-column'

    export default {
        name: "nov-lottery-slot",
        data() {
            return {
                translateY: [],
                elHeight: 100
            }
        },
        // components: {
        //     SlotColumn
        // },
        props: {
            slotRender: {
                type: Function
            },
            columns: {
                type: Number,
                default: 3
            },
            duration: {
                type: Number,
                default: 4000
            },
            step: {
                type: Number,
                default: 100,
                validator(v) {
                    return v >= 16
                }
            },
            gap: {
                type: Number,
                default: 100,
                validator(v) {
                    return v >= 0
                }
            },
            items: {
                type: Array,
                required: true,
                validator(v) {
                    return v.length > 2
                }
            },
            stepTime: {
                type: Number,
                default: 20,
                validator(v) {
                    return v > 16
                }
            },
        },
        computed: {
            randomItems() {
                let re = [], copyList = [...this.items]
                for (let i = 0; i < this.columns; i++) {
                    let rand = Math.floor(Math.random() * copyList.length + 0)
                    copyList = copyList.slice(rand).concat(copyList.slice(0,rand)).reverse()
                    re.push(copyList)
                }

                // 首尾相接
                re.forEach(colItems => {
                    colItems.push(colItems[0])
                    // 为了能够正确显示index = 0 的奖品，需要在尾部追加第二项，即显示N+1位置
                    colItems.push(colItems[1])
                    // 为了动画切换流畅，增加第三项，即显示N+2时才让列表重置到2位置
                    colItems.push(colItems[2])
                })
                return re;
            },
            styles() {
                let re = []
                for (let i = 0; i < this.columns; i++) {
                    re.push({
                        transform: `translateY(${this.translateY[i]}px)`,
                        transition: this.translateY[i] === -(this.elHeight / 2) ? 'none' : `linear ${this.step+16}ms`
                        // transition: `linear ${this.step}ms`
                    })
                }
                return re
            }
        },
        methods: {
            roll(target) {
                this.randomItems.forEach((items, index) => {
                    setTimeout(() => {
                        this._colRoll(index, target, this.duration + index * 500)
                    }, index * this.gap)
                })
            },
            random(ids) {
                let targets = this.randomItems.map((items, index) => {
                    return this.items[Math.ceil(Math.random() * this.items.length - 1)].id
                })
                // 避免随机到重复元素
                if (!targets.some(t => t !== targets[0])) {
                    targets[0] = this.items[0].id
                    targets[1] = this.items[1].id
                }

                if (ids && this.columns === ids.length) {
                    targets = ids
                }

                this.randomItems.forEach((items, index) => {
                    setTimeout(() => {
                        this._colRoll(index, targets[index], this.duration + index * 500)
                    }, index * this.gap)
                })
            },
            _colRoll(colIndex, freezeTarget, duration) {
                //
                let maxHeight = this.items.length * this.elHeight
                let freezeTargetIndex = this.randomItems[colIndex].findIndex(item => item.id === freezeTarget)

                // 处理index = 0 的显示问题
                if (freezeTargetIndex === 0) {
                    freezeTargetIndex = this.randomItems[colIndex].length - 3
                }
                let targetOffsiteHeight = freezeTargetIndex * this.elHeight - (this.elHeight / 2)

                if (freezeTargetIndex < 0) {
                    throw Error('未能找到对应的奖品')
                }

                let timer = setInterval(() => {
                    duration -= this.step
                    let y = this.translateY[colIndex]

                    if (duration > 0) {
                        // 超出高度，重置为初始高度，并且取消了动画
                        if (Math.abs(y) > maxHeight) {
                            this.translateY.splice(colIndex, 1, -(this.elHeight / 2))
                        } else {
                            this.translateY.splice(colIndex, 1, y - this.elHeight)
                        }
                    } else if (Math.abs(y) !== targetOffsiteHeight) {
                        if (Math.abs(y) > maxHeight) {
                            this.translateY.splice(colIndex, 1, -(this.elHeight / 2))
                        } else {
                            this.translateY.splice(colIndex, 1, y - this.elHeight)
                        }
                    } else {
                        clearInterval(timer)
                    }
                }, this.step)
            }
        },
        mounted() {
            this.elHeight = this.$refs.refItems[0].offsetHeight
            // 初始向上偏移半个元素高度
            this.translateY = Array(this.columns).fill(-this.elHeight / 2)
        },
    }
</script>

<style lang='less' type="text/scss" scoped>
    .slot-container {
        display: flex;
        width: 300px;
        height: 200px;
        overflow: hidden;

        ul {
            flex: 1;
            flex-direction: column;
            position: relative;

            transition-timing-function: linear;
            /*transition-duration: 200ms;*/
            /*transition: linear 200ms;*/

            li {
                position: relative;
                padding: 0;
                margin: 0;
                list-style: none;
                width: 100px;
                height: 100px;
            }
        }
    }
</style>
