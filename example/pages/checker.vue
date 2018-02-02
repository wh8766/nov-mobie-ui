<template>
    <nov-page title="checker" desc="单选框">
        <divider>单选，默认不选中任何项</divider>
        <div class="box">
            <checker v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item value="1">{{ ('潘') }}</checker-item>
                <checker-item value="2">{{ ('闲') }}</checker-item>
                <checker-item value="3">{{ ('邓') }}</checker-item>
                <checker-item value="4">{{ ('小') }}</checker-item>
                <checker-item value="5">{{ ('驴') }}</checker-item>
            </checker>
            <br>
            <span>{{currentValue}}: {{ demo1 }}</span>
            <br>
        </div>

        <divider>radioRequired</divider>
        <div class="box">
            <checker v-model="demo1Required" radio-required default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item value="1">{{ ('潘') }}</checker-item>
                <checker-item value="2">{{ ('闲') }}</checker-item>
                <checker-item value="3">{{ ('邓') }}</checker-item>
                <checker-item value="4">{{ ('小') }}</checker-item>
                <checker-item value="5">{{ ('驴') }}</checker-item>
            </checker>
            <br>
            <span>{{currentValue}}: {{ demo1Required }}</span>
            <br>
        </div>

        <divider>单选：object类型</divider>
        <div class="box">
            <checker v-model="demo11" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
            </checker>
            <br>
            <span>{{currentValue}}: {{demo11}}</span>
            <br>
            <br>
            <checker v-model="demo12" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
            </checker>
            <br>
            <span>{{currentValue}}: {{demo12}}</span>
            <br>
        </div>

        <divider>多选：object类型</divider>
        <div class="box">
            <checker v-model="demo21" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
            </checker>
            <br>
            <span>{{currentValue}}: {{demo21}}</span>
            <br>
            <br>
            <checker v-model="demo22" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
            </checker>
            <br>
            <span>{{currentValue}}: {{demo22}}</span>
            <br>
            <br>
            <checker v-model="demo23" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected" :max="2">
                <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
            </checker>
            <br>
            <span>{{currentValue}}: {{demo23}}</span>
            <br>
        </div>


        <divider>多选</divider>
        <div class="box">
            <checker v-model="demo1Checkbox" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item :value="1">{{ ('白') }}</checker-item>
                <checker-item :value="2">{{ ('富') }}</checker-item>
                <checker-item :value="3">{{ ('美') }}</checker-item>
            </checker>
            <br>
            <span>{{currentValue}}: {{demo1Checkbox}}</span>
            <br>
        </div>

        <divider>多选，最多选两个</divider>
        <div class="box">
            <checker v-model="demo1CheckboxMax" :max="2" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item value="1">1</checker-item>
                <checker-item value="2">2</checker-item>
                <checker-item value="3">3</checker-item>
            </checker>
            <br>
            <span>{{currentValue}}: {{demo1CheckboxMax}}</span>
            <br>
        </div>

        <divider>默认值为2</divider>
        <div class="box">
            <checker v-model="demo2" default-item-class="demo2-item" selected-item-class="demo2-item-selected">
                <checker-item value="1">1</checker-item>
                <checker-item value="2">2</checker-item>
                <checker-item value="3">3</checker-item>
            </checker>
            <br>
            <span>{{currentValue}}: {{demo2}}</span>
            <br>
        </div>

        <divider>自定义样式</divider>
        <div class="box">
            <checker v-model="demo3" default-item-class="demo3-item" selected-item-class="demo3-item-selected">
                <checker-item value="one">
                    <img src="http://placeholder.qiniudn.com/80x50/FF3B3B/ffffff" alt="">
                </checker-item>
                <checker-item value="two">
                    <img src="http://placeholder.qiniudn.com/80x50/FFEF7D/ffffff" alt="">
                </checker-item>
                <checker-item value="three">
                    <img src="http://placeholder.qiniudn.com/80x50/8AEEB1/ffffff" alt="">
                </checker-item>
            </checker>
            <br>
            <span>{{currentValue}}: {{demo3}}</span>
            <br>
        </div>
    </nov-page>
</template>



<script>
    import NovPage from '../components/nov-page'
    import Checker from '@/components/checker/checker'
    import CheckerItem from '@/components/checker/checker-item'
    import Group from '@/components/group/group'
    import Cell from '@/components/cell/cell'
    import Divider from '@/components/checker/divider'

    export default {
        directives: {
        },
        components: {
            NovPage,
            Checker,
            CheckerItem,
            Divider,
            Group,
            Cell
        },
        methods: {
        },
        data () {
            return {
                items1: [{
                    key: '1',
                    value: 'A'
                }, {
                    key: '2',
                    value: 'B'
                }, {
                    key: '3',
                    value: 'C'
                }],
                demo1: '',
                demo1Required: '',
                demo11: null,
                demo12: {key: '2', value: 'B'},
                demo21: null,
                demo22: [{key: '2', value: 'B'}],
                demo23: null,
                demo1Checkbox: [2, 1],
                demo1CheckboxMax: ['2', '3'],
                demo2: '2',
                demo3: '',
                currentValue: '当前值为'
            }
        }
    }
</script>

<style scoped>
    .box {
        padding: 0 15px;
    }
    .demo1-item {
        border: 1px solid #ececec;
        padding: 5px 15px;
    }
    .demo1-item-selected {
        border: 1px solid green;
    }
    .demo2-item {
        width: 40px;
        height: 40px;
        border: 1px solid #ccc;
        display: inline-block;
        border-radius: 50%;
        line-height: 40px;
        text-align: center;
    }
    .demo2-item-selected {
        border-color: green;
    }
    .demo3-item {
        padding: 5px 5px;
        font-size: 0;
    }
    .demo3-item-selected {
        outline: 1px solid #8B8AEE;
    }
    .demo4-item {
        background-color: #ddd;
        color: #222;
        font-size: 14px;
        padding: 5px 10px;
        margin-right: 10px;
        line-height: 18px;
        border-radius: 15px;
    }
    .demo4-item-selected {
        background-color: #FF3B3B;
        color: #fff;
    }
    .demo4-item-disabled {
        color: #999;
    }
    .demo5-item {
        width: 100px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        border-radius: 3px;
        border: 1px solid #ccc;
        background-color: #fff;
        margin-right: 6px;
    }
    .demo5-item-selected {
        /*background: #ffffff url(../assets/demo/checker/active.png) no-repeat right bottom;*/
        border-color: #ff4a00;
    }
</style>
