<template>
    <nov-page title="Form" desc="form 表单">
        <group title="表单" label-width="4.5em" label-margin-right="2em" label-align="left" :titleColor="'green'">
            <cell title="Cell" value="cell" is-link link="cell"></cell>
        </group>
    </nov-page>
</template>

<script>
    import NovPage from '../components/nov-page'
    import Group from '@/components/group/group.vue'
    import Cell from '@/components/cell/cell.vue'

    export default {
        components: {
            Group,
            Cell,
            NovPage
        },
        data () {
            return {
                addressValue: ['广东省', '深圳市', '南山区'],
                value1: '张三',
                value2: '工艺技术',
                value3: '',
                value7: '',
                value8: '',
                value4: '',
                time1: '2017-06-01',
                value5: ['A'],
                value6: [],
                list: [['A', 'B', 'C']],
                numberValue: 0
            }
        }
    }
</script>
