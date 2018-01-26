<template>
    <div id="form">
        <div class="weui-cells__title">性别</div>
        <div class="weui-cells weui-cells_radio">
            <label class="weui-cell weui-check__label" for="r1">
                <div class="weui-cell__bd">男</div>
                <div class="weui-cell__ft">
                    <input required type="radio" class="weui-check" name="sex" value="male" id="r1" tips="请选择性别">
                    <span class="weui-icon-checked"></span>
                </div>
            </label>
            <label class="weui-cell weui-check__label" for="r2">
                <div class="weui-cell__bd">女</div>
                <div class="weui-cell__ft">
                    <input type="radio" name="sex" class="weui-check" value="female" id="r2">
                    <span class="weui-icon-checked"></span>
                </div>
            </label>
        </div>

        <div class="weui-cells__title">编码助手(1-2个)</div>
        <div class="weui-cells weui-cells_checkbox">
            <label class="weui-cell weui-check__label" for="c1">
                <div class="weui-cell__hd">
                    <input required pattern="{1,2}" type="checkbox" tips="请勾选1-2个敲码助手" class="weui-check" name="assistance" id="c1">
                    <i class="weui-icon-checked"></i>
                </div>
                <div class="weui-cell__bd">黄药师</div>
            </label>
            <label class="weui-cell weui-check__label" for="c2">
                <div class="weui-cell__hd">
                    <input type="checkbox" name="assistance" class="weui-check" id="c2">
                    <i class="weui-icon-checked"></i>
                </div>
                <div class="weui-cell__bd">欧阳锋</div>
            </label>
            <label class="weui-cell weui-check__label" for="c3">
                <div class="weui-cell__hd">
                    <input type="checkbox" name="assistance" class="weui-check" id="c3">
                    <i class="weui-icon-checked"></i>
                </div>
                <div class="weui-cell__bd">段智兴</div>
            </label>
            <label class="weui-cell weui-check__label" for="c4">
                <div class="weui-cell__hd">
                    <input type="checkbox" name="assistance" class="weui-check" id="c4">
                    <i class="weui-icon-checked"></i>
                </div>
                <div class="weui-cell__bd">洪七公</div>
            </label>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="tel" required pattern="^\d{11}$" maxlength="11" placeholder="输入你现在的手机号" emptyTips="请输入手机号" notMatchTips="请输入正确的手机号">
                </div>
                <div class="weui-cell__ft">
                    <i class="weui-icon-warn"></i>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">身份证号码</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" required pattern="REG_IDNUM" maxlength="18" placeholder="输入你的身份证号码" emptyTips="请输入身份证号码" notMatchTips="请输入正确的身份证号码">
                </div>
                <div class="weui-cell__ft">
                    <i class="weui-icon-warn"></i>
                </div>
            </div>
            <div class="weui-cell weui-cell weui-cell_vcode">
                <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" maxlength="4" type="text" required pattern="REG_VCODE" placeholder="点击验证码更换" tips="请输入验证码">
                </div>
                <div class="weui-cell__ft">
                    <i class="weui-icon-warn"></i>
                    <img class="weui-vcode-img" src="http://temp.im/130x53">
                </div>
            </div>
        </div>
        <div class="weui-btn-area">
            <a id="formSubmitBtn" href="javascript:" class="weui-btn weui-btn_primary">提交</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>
