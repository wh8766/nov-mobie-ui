<template>
    <div>
        <group label-align="justify" label-width="5.5em" label-margin-right="2em">
            <cell :title="'我的账号'" :value="('Protected')" @click.native="onClick"></cell>
            <cell title="钱" @click.native="onClick" :value="money"></cell>
            <cell :title="'提现'" disabled is-link></cell>
        </group>

        <group :title="('使用 is-link 显示右边箭头')">
            <cell is-link>
                <span slot="title" style="color:green;"><span
                        style="vertical-align:middle;">重要消息</span> </span>
            </cell>
            <cell :title="('通用')" is-link>
                <img slot="icon" width="20" style="display:block;margin-right:5px;"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
        </group>

        <group label-width="5em" title="align-items">
            <cell primary="conten" title="default"
                  value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></cell>
            <cell title="flex-start" align-items="flex-start"
                  value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></cell>
        </group>

        <group :title="('使用slot显示复杂内容')">
            <cell :title="('slot content')">
                <div>
                    <span style="color: green">哈哈哈哈</span>
                </div>
            </cell>
        </group>

        <group :title="('当有设置link属性时，isLink属性会设为true以显示箭头')">
            <cell :title="('前往Radio页面')" link="/component/radio" inline-desc='link="/component/radio"'></cell>
            <cell :title="('前往demo页面')" :link="{path:'/demo'}" inline-desc=':link={path:"/demo"}'></cell>
            <cell :title="('站外链接')" link="https://abc.com" inline-desc='https://abc.com"'></cell>
        </group>
    </div>
</template>

<script>
    import NovPage from '../components/nov-page'
    import Group from '@/components/group/group.vue'
    import Cell from '@/components/cell/cell.vue'

    export default {
        mounted () {
            setTimeout(() => {
                this.money = -1024
            }, 2000)
        },
        components: {
            Group,
            Cell,
            NovPage
        },
        methods: {
            onClick () {
                console.log('on click')
            }
        },
        data () {
            return {
                list: [{
                    label: 'Apple',
                    value: '3.29'
                }, {
                    label: 'Banana',
                    value: '1.04'
                }, {
                    label: 'Fish',
                    value: '8.00'
                }],
                money: null,
                showContent001: false,
                showContent002: false,
                showContent003: false,
                showContent004: false
            }
        }
    }
</script>

<style scoped>
    .sub-item {
        color: #888;
    }

    .slide {
        padding: 0 20px;
        overflow: hidden;
        max-height: 0;
        transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
    }

    .animate {
        max-height: 9999px;
        transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
        transition-delay: 0s;
    }
</style>
