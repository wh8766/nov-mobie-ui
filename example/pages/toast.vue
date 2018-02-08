<template>
    <nov-page title="Toast" desc="toast">
        <div style="padding:15px;">
            <NovButton @click.native="showPosition('top')" type="primary">Top</NovButton>
            <NovButton @click.native="showPosition('middle')" type="primary">Middle</NovButton>
            <NovButton @click.native="showPosition('bottom')" type="primary">Bottom</NovButton>
            <NovButton @click.native="showPosition('')" type="primary">Default</NovButton>
        </div>

        <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="基本使用" :position="position">
            基本使用
        </toast>
        <group title="ok">
            <nov-switch v-model="show1">一般使用</nov-switch>
            <nov-switch v-model="show2">type为text</nov-switch>
            <nov-switch v-model="show3">type为cancel</nov-switch>
            <nov-switch v-model="show4">type为warn</nov-switch>
            <nov-switch v-model="show5">显示时间一秒</nov-switch>
            <nov-switch v-model="show6">很长文字</nov-switch>
        </group>

        <toast v-model="show1" @on-hide="onHide">Basic Usage</toast>
        <toast v-model="show2" :time="100000" type="text" :height="'123'">success</toast>
        <toast v-model="show3" type="cancel">type:cancel</toast>
        <toast v-model="show4" type="warn">type:warn</toast>
        <toast v-model="show5" :time="1000">time:1s</toast>
        <toast v-model="show6" type="text" width="20em">show me code</toast>

        <group title="prop:text">
            <nov-switch v-model="show7">type为success</nov-switch>
            <nov-switch v-model="show8">type为text</nov-switch>
        </group>

        <toast v-model="show7" text="Hello World"></toast>
        <toast v-model="show8" type="text" text="Hello World"></toast>
    </nov-page>
</template>

<script>
    import NovPage from '../components/nov-page'
    import NovButton from '@/components/button/button'
    import NovSwitch from '@/components/nov-switch/nov-switch'
    import Toast from '@/components/toast/index'
    import Group from '@/components/group/group'

    export default {
        components: {
            NovPage,
            Toast,
            Group,
            NovSwitch ,
            NovButton
        },
        methods: {
            showPosition (position) {
                this.position = position
                this.showPositionValue = true
            },
            onHide () {
                console.log('on hide')
            },
            onChange (val) {
                window.console.log(val)
            }
        },
        data () {
            return {
                show1: false,
                show2: false,
                show3: false,
                show4: false,
                show5: false,
                show6: false,
                show7: false,
                show8: false,
                show9: false,
                position: 'default',
                showPositionValue: false
            }
        }
    }
</script>
