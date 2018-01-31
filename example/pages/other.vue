<template>
    <nov-page title="Other" desc="搜索框、滑块等">
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
    </nov-page>
</template>

<script type="text/ecmascript-6">
    import weui from 'weui.js';

    import NovPage from '../components/nov-page'

    /* slider 因为需要获取长度，所以必须要在slider显示的时候才调用weui.slider*/
    let isSetSlider = false;
    function setSlider(){
        if(isSetSlider) return;
        isSetSlider = true;

        // 普通slider
        var sliderValue = document.getElementById("sliderValue");
        weui.slider('#slider', {
            defaultValue: 50,
            onChange: function(percent){
                sliderValue.innerHTML = Math.round(percent);
                console.log(percent);
            }
        });

        // 带step的slider
        var sliderStepValue = document.getElementById("sliderStepValue");
        weui.slider('#sliderStep', {
            step: 10,
            defaultValue: 40,
            onChange: function(percent){
                sliderStepValue.innerHTML = Math.round(percent);
                console.log(percent);
            }
        });

        // 分块的slider
        var sliderBlockValue = document.getElementById("sliderBlockValue");
        weui.slider('#sliderBlock', {
            step: 100 / 3,
            defaultValue: 33.333,
            onChange: function(percent){
                sliderBlockValue.innerHTML = Math.round(percent);
                console.log(percent);
            }
        });
    }

    export default {
        name: "page-other",
        components: {
            NovPage
        },
        mounted() {
            /* searchbar */
            weui.searchBar('#searchBar');
            setSlider()
        }
    }
</script>

<style scoped>

</style>
