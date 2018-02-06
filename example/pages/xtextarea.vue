<template>
    <nov-page title="textarea" desc="文本输入">
        <group>
            <x-textarea :max="20" :value="value" :placeholder="('placeholder')" @on-change="onChange"
                        @on-focus="onEvent('focus')" @on-blur="onEvent('blur')">
            </x-textarea>
        </group>
        <group :title="'不显示计数器'">
            <x-textarea :max="200" name="detail" :placeholder="('placeholder')" :show-counter="false"></x-textarea>
        </group>
        <group :title="'自动高度'">
            <x-textarea :placeholder="'Type something'" :show-counter="false" :rows="1" autosize></x-textarea>
            <x-textarea :title="'标题'" :placeholder="'Type something'" :show-counter="false" :rows="1"
                        autosize>
            </x-textarea>
        </group>
        <group :title="('设置 高度=200')">
            <x-textarea :title="'标题'" :max="200" :placeholder="'placeholder'" :show-counter="false" :height="200"
                        :rows="8" :cols="30">
            </x-textarea>
        </group>
    </nov-page>
</template>

<script>
    import NovPage from '../components/nov-page'
    import XTextarea from '@/components/x-textarea/x-textarea.vue'
    import Group from '@/components/group/group.vue'

    export default {
        data() {
            return {
                value: 'value',
                placeholder: '我是placeholder'
            }
        },
        components: {
            NovPage,
            XTextarea,
            Group
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
