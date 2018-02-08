<template>
    <div>
        <group :title="'基本使用'">
            <nov-switch>默认 false</nov-switch>
            <nov-switch :inline-desc="value1 + ''" v-model="value1">默认 true</nov-switch>
        </group>
        <group :title="('disabled')">
            <nov-switch disabled>默认 false</nov-switch>
            <nov-switch :value="true" disabled>默认 true</nov-switch>
        </group>
        <group :title="('prevent default')">
            <nov-switch :prevent-default=true  v-model="value2" @on-click="onClick">默认 false</nov-switch>
        </group>
        <group :title="('html title')">
            <nov-switch ><span style='color:red'>我是红色</span></nov-switch>
        </group>
    </div>
</template>

<script>
    import weui from 'weui.js';
    import Group from '@/components/group/group.vue'
    import novSwitch from '@/components/nov-switch/nov-switch.vue'

    export default {
        components: {
            novSwitch,
            Group
        },
        methods: {
            onClick (newVal, oldVal) {
                console.log(newVal, oldVal)
                let loading = weui.loading('加载中');
                setTimeout(function () {
                    loading.hide();
                }, 2000);
            }
        },
        data () {
            return {
                value1: true,
                value2: false
            }
        }
    }
</script>
