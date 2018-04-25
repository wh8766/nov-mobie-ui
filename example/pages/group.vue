<template>
    <nov-page title="Group" desc="表单组件，属于`Group`子组件的有：Cell, novInput, novTextarea, novSwitch">
        <group title="group 带颜色" label-width="4.5em" label-margin-right="2em" label-align="left" :titleColor="'green'">
            <cell title="Cell" value="cell" is-link link="link"></cell>
        </group>
        <group
            label-align="justify"
            title="这是分组标题"
            titleColor="red"
            label-width="5.5em"
            labelAlign="left"
            label-margin-right="2em">
            <nov-input placeholder="I'm placeholder"></nov-input>
        </group>
        <group>
            <novTextarea :max="20" :value="value"  :placeholder="('placeholder')" @on-change="onChange" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></novTextarea>
        </group>
    </nov-page>
</template>

<script>
    import NovPage from '../components/nov-page'
    import Group from '@/components/group/group'
    import Cell from '@/components/cell/cell'
    import NovInput from '@/components/nov-input/nov-input'
    import novTextarea from '@/components/nov-textarea/nov-textarea'

    export default {
        components: {
            Group,
            Cell,
            NovPage,
            NovInput,
            novTextarea
        },
        data () {
            return {
                value: ''
            }
        },
        methods: {
            onEvent (event) {
                console.log('on', event)
            },
            onChange (event) {
                console.log('on', event)
            }
        }

    }
</script>
