<template>
    <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__bd">
            <label class="weui-label" :style="labelStyle" >
                <slot></slot>
            </label>
            <span  v-if="inlineDesc" class="weui-label-desc">{{ inlineDesc }}</span>
        </div>
        <div class="weui-cell__ft">
            <input class="weui-switch" type="checkbox" :disabled="disabled" v-model="currentValue" @click="onClick"/>
        </div>
    </div>
</template>

<script>
    import cleanStyle from '../../tool/clean-style'

    export default {
        name: 'nov-switch',
        components: {},
        computed: {
            labelStyle () {
                return cleanStyle({
                    display: 'block',
                    width: this.$parent.labelWidth,
                    textAlign: this.$parent.labelAlign
                })
            }
        },
        methods: {
            onClick () {
                if(this.preventDefault){
                    this.$emit('on-click', !this.currentValue, this.currentValue)
                }
            }
        },
        props: {
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

