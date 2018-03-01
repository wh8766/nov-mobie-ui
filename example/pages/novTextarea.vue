<template>
    <nov-page title="textarea" desc="文本输入">
        <group>
            <novTextarea :max="20" :value="value" :placeholder="('placeholder')" @on-change="onChange"
                        @on-focus="onEvent('focus')" @on-blur="onEvent('blur')">
            </novTextarea>
        </group>
        <group :title="'不显示计数器'">
            <novTextarea :max="200" name="detail" :placeholder="('placeholder')" :show-counter="false"></novTextarea>
        </group>
        <group :title="'自动高度'">
            <novTextarea :placeholder="'Type something'" :show-counter="false" :rows="1" autosize></novTextarea>
            <novTextarea :title="'标题'" :placeholder="'Type something'" :show-counter="false" :rows="1"
                        autosize>
            </novTextarea>
        </group>
        <group :title="('设置 高度=200')">
            <novTextarea :title="'标题'" :max="200" :placeholder="'placeholder'" :show-counter="false" :height="200"
                        :rows="8" :cols="30">
            </novTextarea>
        </group>
    </nov-page>
</template>

<script>
    import NovPage from '../components/nov-page'
    import novTextarea from '@/components/nov-textarea/nov-textarea.vue'
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
            novTextarea,
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
