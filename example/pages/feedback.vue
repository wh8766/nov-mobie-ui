<template>
    <nov-page title="Feedback" desc="操作反馈">
        <a id="alertBtn" class="weui-btn weui-btn_default">Alert</a>
        <a id="confirmBtn" class="weui-btn weui-btn_default">Confirm</a>
        <a id="toastBtn" class="weui-btn weui-btn_default">Toast</a>
        <a id="loadingBtn" class="weui-btn weui-btn_default">Loading</a>
        <a id="actionSheetBtn" class="weui-btn weui-btn_default">ActionSheet</a>
        <a id="topTipsBtn" class="weui-btn weui-btn_default">TopTips</a>
        <a id="pickerBtn" class="weui-btn weui-btn_default">Picker</a>
        <a id="datePickerBtn" class="weui-btn weui-btn_default">DatePicker</a>
        <a id="multiPickerBtn" class="weui-btn weui-btn_default">Multi-Picker</a>
        <a id="cascadePickerBtn" class="weui-btn weui-btn_default">Cascade-Picker</a>
    </nov-page>
</template>

<script type="text/ecmascript-6">
    import weui from 'weui.js';

    import NovPage from '../components/nov-page'

    export default {
        name: "page-feedback",
        components: {
            NovPage
        },
        mounted() {
            /* dialog */
            document.querySelector('#alertBtn').addEventListener('click', function () {
                weui.alert('自定义标题的alert', function () {
                    console.log('ok')
                }, {
                    title: '自定义标题'
                });
            });


            /* confirm */
            document.querySelector('#confirmBtn').addEventListener('click', function () {
                weui.confirm('自定义标题的confirm', function () {
                    console.log('yes')
                }, function () {
                    console.log('no')
                }, {
                    title: '自定义标题'
                });
            });


            /* toast */
            document.querySelector('#toastBtn').addEventListener('click', function () {
                weui.toast('操作成功', {
                    duration: 3000,
                    className: "bears"
                });
            });


            /* loading */
            document.querySelector('#loadingBtn').addEventListener('click', function () {
                var loading = weui.loading('加载中');
                // setTimeout(function () {
                //     loading.hide();
                // }, 3000);
            });


            /* actionSheet */
            document.querySelector('#actionSheetBtn').addEventListener('click', function () {
                weui.actionSheet([
                    {
                        label: '拍照',
                        onClick: function () {
                            console.log('拍照');
                        }
                    }, {
                        label: '从相册选择',
                        onClick: function () {
                            console.log('从相册选择');
                        }
                    }, {
                        label: '其他',
                        onClick: function () {
                            console.log('其他');
                        }
                    }
                ], [
                    {
                        label: '取消',
                        onClick: function () {
                            console.log('取消');
                        }
                    }
                ], {
                    className: "custom-classname",
                    onClose: function () {
                        console.log('关闭');
                    }
                });
            });


            /* topTips */
            document.querySelector('#topTipsBtn').addEventListener('click', function () {
                weui.topTips('请填写正确的字段', {
                    duration: 3000,
                    className: "custom-classname",
                    callback: function () {
                        console.log('close');
                    }
                });
            });


            /* picker */
// 普通选择器
            document.querySelector('#pickerBtn').addEventListener('click', function () {
                weui.picker([{
                    label: '飞机票',
                    value: 0
                }, {
                    label: '火车票(disabled)',
                    disabled: true,
                    value: 1
                }, {
                    label: '的士票(disabled)',
                    disabled: true,
                    value: 2
                }, {
                    label: '住宿费',
                    value: 3
                }, {
                    label: '礼品费',
                    value: 4
                }, {
                    label: '活动费',
                    value: 5
                }, {
                    label: '通讯费',
                    value: 6
                }, {
                    label: '补助',
                    value: 7
                }, {
                    label: '通讯费',
                    value: 8
                }, {
                    label: '其他',
                    value: 9
                }], {
                    defaultValue: [8],
                    className: 'custom-classname',
                    onChange: function (result) {
                        //console.log(item, index);
                        console.log(result);
                    },
                    onConfirm: function (result) {
                        console.log(result);
                    },
                    id: 'picker'
                });
            });

// 时间选择器
            document.querySelector('#datePickerBtn').addEventListener('click', function () {
                weui.datePicker({
                    start: '2016-12-29',
                    end: '2030-12-29',
                    /**
                     * https://zh.wikipedia.org/wiki/Cron
                     * cron 表达式后三位
                     * 示例：
                     *  * * *                每天
                     *  5 * *                每个月的5日
                     *  1-10 * *             每个月的前10日
                     *  1,5,10 * *           每个月的1号、5号、10号
                     *  *\/2 * *             每个月的 1、3、5、7...日，注意写的时候斜杠“/”前面没有反斜杠“\”，这是因为是注释所以需要转义
                     *  * 2 0                2月的每个周日
                     *  * * 0,6              每个周末
                     *  * * 3                每周三
                     */
                    cron: '* */2 0',
                    defaultValue: [2017, 7, 9],
                    onChange: function (result) {
                        console.log(result);
                    },
                    onConfirm: function (result) {
                        console.log(result);
                    },
                    id: 'datePicker'
                });
            });

// 多列选择器
            document.querySelector('#multiPickerBtn').addEventListener('click', function () {
                weui.picker([
                    {
                        label: '1',
                        value: '1'
                    }, {
                        label: '2',
                        value: '2'
                    }, {
                        label: '3',
                        value: '3'
                    }
                ], [
                    {
                        label: 'A',
                        value: 'A'
                    }, {
                        label: 'B',
                        value: 'B'
                    }, {
                        label: 'C',
                        value: 'C'
                    }
                ], {
                    defaultValue: ['3', 'A'],
                    onChange: function (result) {
                        console.log(result);
                    },
                    onConfirm: function (result) {
                        console.log(result);
                    },
                    id: 'multiPickerBtn',
                    onClose: function () {
                        console.log('onClose');
                    }
                });
            });

// 级联选择器
            document.querySelector('#cascadePickerBtn').addEventListener('click', function () {
                weui.picker([
                    {
                        label: '广东',
                        value: 0,
                        children: [
                            {
                                label: '广州',
                                value: 0,
                                children: [
                                    {
                                        label: '海珠',
                                        value: 0
                                    }, {
                                        label: '番禺',
                                        value: 1
                                    }
                                ]
                            }, {
                                label: '佛山',
                                value: 1,
                                children: [
                                    {
                                        label: '禅城',
                                        value: 0
                                    }, {
                                        label: '南海',
                                        value: 1
                                    }
                                ]
                            }
                        ]
                    }, {
                        label: '广西',
                        value: 1,
                        children: [
                            {
                                label: '南宁',
                                value: 0,
                                children: [
                                    {
                                        label: '青秀',
                                        value: 0
                                    }, {
                                        label: '兴宁',
                                        value: 1
                                    }
                                ]
                            }, {
                                label: '桂林',
                                value: 1,
                                children: [
                                    {
                                        label: '象山',
                                        value: 0
                                    }, {
                                        label: '秀峰',
                                        value: 1
                                    }
                                ]
                            }
                        ]
                    }
                ], {
                    depth: 3,
                    defaultValue: [0, 1, 1],
                    onChange: function (result) {
                        console.log(result);
                    },
                    onConfirm: function (result) {
                        console.log(result);
                    },
                    id: 'cascadePicker'
                });
            });
        }
    }
</script>

<style scoped>

</style>
