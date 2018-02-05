<template>
    <nov-page title="Other" desc="toast">
        <div style="padding:15px;">
            <NovButton @click.native="showPosition('top')" type="primary">Top</NovButton>
            <NovButton @click.native="showPosition('middle')" type="primary">Middle</NovButton>
            <NovButton @click.native="showPosition('bottom')" type="primary">Bottom</NovButton>
            <NovButton @click.native="showPosition('')" type="primary">Default</NovButton>
        </div>

        <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="Hello World" :position="position">
            {{ ('Basic Usage') }}
        </toast>
        <group>
            <x-switch :title="'一般使用'" v-model="show1"></x-switch>
            <x-switch :title="('type为text')" v-model="show2"></x-switch>
            <x-switch :title="('type为cancel')" v-model="show3"></x-switch>
            <x-switch :title="('type为warn')" v-model="show4"></x-switch>
            <x-switch :title="('显示时间一秒')" v-model="show5"></x-switch>
            <x-switch :title="('很长文字')" v-model="show6"></x-switch>
        </group>

        <toast v-model="show1" @on-hide="onHide">{{ ('Basic Usage') }}</toast>
        <toast v-model="show2" type="text">{{('success')}}</toast>
        <toast v-model="show3" type="cancel">{{('type:cancel')}}</toast>
        <toast v-model="show4" type="warn">{{('type:warn')}}</toast>
        <toast v-model="show5" :time="1000">{{('time:1s')}}</toast>
        <toast v-model="show6" type="text" width="20em">{{('show me code')}}</toast>

        <group :title="('prop:text')">
            <x-switch :title="('type为success')" v-model="show7"></x-switch>
            <x-switch :title="('type为text')" v-model="show8"></x-switch>
        </group>

        <toast v-model="show7" text="Hello World"></toast>
        <toast v-model="show8" type="text" text="Hello World"></toast>
    </nov-page>
</template>

<script>
    import NovPage from '../components/nov-page'
    import NovButton from '@/components/button/button'
    import XSwitch from '@/components/x-switch/index'
    import Toast from '@/components/toast/index'
    import Group from '@/components/group/group'
    export default {
        components: {
            NovPage,
            Toast,
            Group,
            XSwitch,
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
                const _this = this
                if (val) {
                    this.$vux.toast.show({
                        text: 'Hello World',
                        onShow () {
                            console.log('Plugin: I\'m showing')
                        },
                        onHide () {
                            console.log('Plugin: I\'m hiding')
                            _this.show9 = false
                        }
                    })
                } else {
                    this.$vux.toast.hide()
                }
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
