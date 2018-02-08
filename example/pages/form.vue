<template>
    <nov-page title="Form" desc="form 表单">
        <group title="表单" label-width="4.5em" label-margin-right="2em" label-align="left" :titleColor="'green'">
            <cell title="Cell" value="cell" is-link link="link"></cell>
        </group>
        <group>
            <novTextarea :max="20" :value="value"  :placeholder="('placeholder')" @on-change="onChange" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></novTextarea>
        </group>
    </nov-page>
</template>

<script>
    import NovPage from '../components/nov-page'
    import Group from '@/components/group/group.vue'
    import Cell from '@/components/cell/cell.vue'
    import novTextarea from '@/components/nov-textarea/nov-textarea.vue'


    export default {
        components: {
            Group,
            Cell,
            NovPage,
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
