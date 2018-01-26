<template>
    <div class="content">
        <div class="item">
            <h4 class="item__title">搜索框</h4>
            <div class="weui-search-bar" id="searchBar">
                <form class="weui-search-bar__form">
                    <div class="weui-search-bar__box">
                        <i class="weui-icon-search"></i>
                        <input type="search" class="weui-search-bar__input" placeholder="搜索" required="">
                        <a href="javascript:" class="weui-icon-clear"></a>
                    </div>
                    <label class="weui-search-bar__label">
                        <i class="weui-icon-search"></i>
                        <span>搜索</span>
                    </label>
                </form>
                <a href="javascript:" class="weui-search-bar__cancel-btn">取消</a>
            </div>
        </div>
        <div class="item">
            <h4 class="item__title">滑块</h4>
            <div class="item__ctn">
                <div class="weui-slider-box">
                    <div id="slider" class="weui-slider">
                        <div class="weui-slider__inner">
                            <div class="weui-slider__track"></div>
                            <div class="weui-slider__handler"></div>
                        </div>
                    </div>
                    <div id="sliderValue" class="weui-slider-box__value"></div>
                </div>
            </div>
        </div>
        <div class="item">
            <h4 class="item__title">滑块(step=10)</h4>
            <div class="item__ctn">
                <div class="weui-slider-box">
                    <div id="sliderStep" class="weui-slider">
                        <div class="weui-slider__inner">
                            <div class="weui-slider__track"></div>
                            <div class="weui-slider__handler"></div>
                        </div>
                    </div>
                    <div id="sliderStepValue" class="weui-slider-box__value"></div>
                </div>
            </div>
        </div>
        <div class="item">
            <h4 class="item__title">滑块(分3步)</h4>
            <div class="item__ctn">
                <div class="weui-slider-box">
                    <div id="sliderBlock" class="weui-slider">
                        <div class="weui-slider__inner">
                            <div class="weui-slider__track"></div>
                            <div class="weui-slider__handler"></div>
                        </div>
                    </div>
                    <div id="sliderBlockValue" class="weui-slider-box__value"></div>
                </div>
            </div>
        </div>
        <div class="item">
            <h4 class="item__title">预览框</h4>
            <div class="weui-form-preview">
                <div class="weui-form-preview__hd">
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">付款金额</label>
                        <em class="weui-form-preview__value">¥2400.00</em>
                    </div>
                </div>
                <div class="weui-form-preview__bd">
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">商品</label>
                        <span class="weui-form-preview__value">电动打蛋机</span>
                    </div>
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">标题标题</label>
                        <span class="weui-form-preview__value">名字名字名字</span>
                    </div>
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">标题标题</label>
                        <span class="weui-form-preview__value">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</span>
                    </div>
                </div>
                <div class="weui-form-preview__ft">
                    <a class="weui-form-preview__btn weui-form-preview__btn_primary" href="javascript:">操作</a>
                </div>
            </div>
            <br>
            <div class="weui-form-preview">
                <div class="weui-form-preview__hd">
                    <label class="weui-form-preview__label">付款金额</label>
                    <em class="weui-form-preview__value">¥2400.00</em>
                </div>
                <div class="weui-form-preview__bd">
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">商品</label>
                        <span class="weui-form-preview__value">电动打蛋机</span>
                    </div>
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">标题标题</label>
                        <span class="weui-form-preview__value">名字名字名字</span>
                    </div>
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">标题标题</label>
                        <span class="weui-form-preview__value">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</span>
                    </div>
                </div>
                <div class="weui-form-preview__ft">
                    <a class="weui-form-preview__btn weui-form-preview__btn_default" href="javascript:">辅助操作</a>
                    <button type="submit" class="weui-form-preview__btn weui-form-preview__btn_primary" href="javascript:">操作</button>
                </div>
            </div>
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
