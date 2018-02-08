<template>
    <div
            class="weui-cell"
            :class="{
      'weui-tap-active': isLink || !!link,
      'weui-cell_access': isLink || !!link,
      'weui-cell-no-border-intent': !borderIntent,
      'weui-cell-disabled': disabled
    }"
            :style="style"
            @click="onClick">
        <div class="weui-cell__hd">
            <slot name="icon"></slot>
        </div>
        <div class="weui-cell-bd" :class="{'weui-cell-primary': primary === 'title' && valueAlign !== 'left'}">
            <p>
                <label class="weui-cell-primary" :style="labelStyles" :class="labelClass" v-if="title || hasTitleSlot">
                    <slot name="title">{{ title }}</slot>
                </label>
                <slot name="after-title"></slot>
            </p>
        </div>
        <div class="weui-cell__ft" :class="valueClass">
            <slot name="value"></slot>
            <slot>{{ value }}</slot>
        </div>
        <slot name="child"></slot>
    </div>
</template>

<script>
    import { go } from '../../tool/router'
    import cleanStyle from '../../tool/clean-style'
    import getParentProp from '../../tool/get-parent-prop'

    export default {
        name: 'cell',
        components: {},
        props: {
            title: [String, Number],
            value: [String, Number, Array],
            isLink: Boolean,
            isLoading: Boolean,
            inlineDesc: [String, Number],
            primary: {
                type: String,
                default: 'title'
            },
            link: [String, Object],
            valueAlign: [String, Boolean, Number],
            borderIntent: {
                type: Boolean,
                default: true
            },
            disabled: Boolean,
            arrowDirection: String, // down or up
            alignItems: String
        },
        created () {
        },
        beforeMount () {
            this.hasTitleSlot = !!this.$slots.title
        },
        computed: {
            labelStyles () {
                return cleanStyle({
                    width: getParentProp(this, 'labelWidth'),
                    textAlign: getParentProp(this, 'labelAlign'),
                    marginRight: getParentProp(this, 'labelMarginRight')
                })
            },
            valueClass () {
                return {
                    'weui-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
                    'weui-cell-align-left': this.valueAlign === 'left',
                    'weui-cell-arrow-transition': !!this.arrowDirection,
                    'weui-cell-arrow-up': this.arrowDirection === 'up',
                    'weui-cell-arrow-down': this.arrowDirection === 'down'
                }
            },
            labelClass () {
                return {
                    'weui-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
                }
            },
            style () {
                if (this.alignItems) {
                    return {
                        alignItems: this.alignItems
                    }
                }
            }
        },
        methods: {
            onClick () {
                /* istanbul ignore next */
                !this.disabled && go(this.link, this.$router)
            }
        },
        data () {
            return {
                hasTitleSlot: true,
                hasMounted: false
            }
        }
    }
</script>
<style lang='less' type="text/less" rel="stylesheet/less">
    @import "../../common/style/widget/weui-cell/weui-access";
    @import "../../common/style/widget/weui-cell/weui-cell_global";

    .weui-cell {
        .weui-tap-active {
            tap-highlight-color: rgba(0, 0, 0, 0);
            user-select: none;
        }
        .weui-tap-active:active {
            background-color: #ECECEC;
        }
        .weui-cell-primary {
            flex: 1;
        }
        .weui-clabel {
            display: block;
            word-wrap: break-word;
            word-break: break-all;
        }
        .weui-cell__ft .weui-loading {
            display: block;
        }
        .weui-cell__ft.weui-cell-align-left {
            text-align: left;
        }
        .weui-cell.weui-cell-no-border-intent:before {
            left: 0;
        }
        .weui-cell_access .weui-cell__ft.weui-cell-arrow-down:after {
            transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(90deg);
        }
        .weui-cell_access .weui-cell__ft.weui-cell-arrow-up:after {
            transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-90deg);
        }
        .weui-cell-arrow-transition:after {
            transition: transform 300ms;
        }

    }

    .weui-cell-justify {
        height: 1.5em;
        &&:after {
            content: ".";
            display: inline-block;
            // width: 100%;
            overflow: hidden;
            height: 0;
        }
    }
</style>

