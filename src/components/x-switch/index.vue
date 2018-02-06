<template>
    <div class=" weui-cell weui-cell_switch">
        <div class="weui-cell__bd">
            <label class="weui-label" :style="labelStyle" v-html="title"></label>
            <span  v-if="inlineDesc" class="weui-label-desc">{{ inlineDesc }}</span>
        </div>
        <div class="weui-cell__ft">
            <input class="weui-switch" type="checkbox" :disabled="disabled" v-model="currentValue"/>
            <div v-if="preventDefault" class="vux-x-switch-overlay" @click="onClick"></div>
        </div>
    </div>
</template>

<script>
    import cleanStyle from '../../tool/clean-style'

    export default {
        name: 'x-switch',
        components: {},
        computed: {
            labelStyle () {
                let isHTML = /<\/?[^>]*>/.test(this.title)
                let width = Math.min(isHTML ? 5 : (this.title.length + 1), 14) + 'em'
                return cleanStyle({
                    display: 'block',
                    width: this.$parent.labelWidth || width,
                    textAlign: this.$parent.labelAlign
                })
            }
        },
        methods: {
            onClick () {
                this.$emit('on-click', !this.currentValue, this.currentValue)
            }
        },
        props: {
            title: {
                type: String,
                required: true
            },
            disabled: Boolean,
            value: {
                type: Boolean,
                default: false
            },
            inlineDesc: [String, Boolean, Number],
            preventDefault: Boolean
        },
        data () {
            return {
                currentValue: this.value
            }
        },
        watch: {
            currentValue (val) {
                this.$emit('input', val)
                this.$emit('on-change', val)
            },
            value (val) {
                this.currentValue = val
            }
        }
    }
</script>

<style lang="less">
    @import "../../common/style/widget/weui-cell/weui-switch.less";
    @import "../../common/style/widget/weui-cell/weui-form/weui-form_common.less";

    .weui-cell_switch .weui-cell__ft {
        font-size: 0;
        position: relative;
        overflow: hidden;
    }

</style>

