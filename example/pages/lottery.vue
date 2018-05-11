<template>
    <nov-page title="Lottery" desc="抽奖组件库">
        <group title="老虎机（默认样式）">
            <div class="page">
                <slot-machine :items="items" class="slot" ref="slot">
                </slot-machine>
                <nov-button @click="rollslot">随机奖项（肯定不中）</nov-button>
                <nov-button type="primary" @click="rollslotGet">抽奖（奖项3）</nov-button>
            </div>
        </group>

        <group title="老虎机，自定义内容">
            <div class="page">
                <slot-machine :items="items" class="slot" ref="slot1" :duration="2000">
                    <template slot-scope="{item}">
                        <div class="slot-item">
                            <span>{{item.name}}</span>
                            <img :src="item.src">
                        </div>
                    </template>
                </slot-machine>
                <nov-button @click="rollslot1">随机奖项（肯定不中）</nov-button>
                <nov-button type="primary" plan mini @click="rollslot1('1')">奖项1</nov-button>
                <nov-button type="primary" plan mini @click="rollslot1('2')">奖项2</nov-button>
                <nov-button type="primary" plan mini @click="rollslot1('3')">奖项3</nov-button>
                <nov-button type="primary" plan mini @click="rollslot1('5')">奖项5</nov-button>
                <nov-button type="primary" plan mini @click="rollslot1('7')">奖项7</nov-button>
            </div>
        </group>
    </nov-page>
</template>

<script type="text/ecmascript-6">

    import NovPage from '../components/nov-page'

    import NovButton from '@/components/button/button'
    import Group from '@/components/group/group'
    import SlotMachine from '@/components/lottery/lottery'

    let items = [
        {id: 'id1', name: '奖品1', src: '//temp.im/100x100/1abc9c/fff'},
        {id: 'id2', name: '奖品2', src: '//temp.im/100x100/3498db/fff'},
        {id: 'id3', name: '奖品3', src: '//temp.im/100x100/9b59b6/fff'},
        {id: 'id4', name: '奖品4', src: '//temp.im/100x100/34495e/fff'},
        {id: 'id5', name: '奖品5', src: '//temp.im/100x100/e74c3c/fff'},
        {id: 'id6', name: '奖品6', src: '//temp.im/100x100/f39c12/fff'},
        {id: 'id7', name: '奖品7', src: '//temp.im/100x100/27ae60/fff'},
    ]

    export default {
        name: "page-lottery-demo",
        components: {
            NovPage,
            Group,
            NovButton,
            SlotMachine
        },
        data() {
            return {
                items
            }
        },
        methods: {
            rollslot() {
                this.$refs.slot.random()
            },
            rollslotGet() {
                this.$refs.slot.roll('id3')
            },
            rollslot1(index) {
                index ? this.$refs.slot1.roll(`id${index}`) : this.$refs.slot1.random()
            }
        },
    }
</script>

<style lang="less" type="text/less" scoped>
    .mask {
        box-shadow: inset 0 0 10px #333;
    }

    .slot {
        margin: 20px auto;

        .slot-item {
            border-radius: 50%;
            overflow: hidden;
        }
        span {
            color: white;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>
