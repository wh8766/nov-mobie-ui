<template>
    <button
        class="weui-btn"
        :type="type"
        :class="btnClass"
        @click="onClick">
        <i class="weui-loading" v-if="loading"></i>
        <slot></slot>
    </button>
</template>

<script type="text/ecmascript-6">

    export default {
        name: "nov-button",
        props: {
            icon: {
                type: String,
                default: ''
            },
            type: {
                default: 'default'
            },
            disabled: Boolean,
            mini: Boolean,
            plain: Boolean,
            actionType: String,
            loading: Boolean,
        },
        computed: {
            btnClass() {
                return [
                    {
                        'weui-btn_disabled': !this.plain && this.disabled,
                        'weui-btn_plain-disabled': this.plain && this.disabled,
                        'weui-btn_mini': this.mini
                    },
                    !this.plain ? `weui-btn_${this.type}` : '',
                    this.plain ? `weui-btn_plain-${this.type}` : '',
                    this.loading ? `weui-btn_loading` : ''
                ]
            }
        },
        methods: {
            onClick(event) {
                if (this.disabled) {
                    event.preventDefault()
                    event.stopPropagation()
                    return
                }
                this.$emit('click', event)
            }
        }
    }
</script>

<style lang='less' type="text/less" scoped>
    @import "../../common/style/widget/weui-button/weui-button";
    @import "../../common/style/widget/weui-loading/weui-loading";

</style>
