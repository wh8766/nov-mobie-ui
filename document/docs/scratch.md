## Scratch 刮刮卡

`Scratch` 刮刮卡是基于Cavans的业务组件

### 示例

- 基本用法

    ```html
    <nov-scratch>
        <img class="scratch" src="../static/scratch-bg.png">
    </nov-scratch>
    ```

- 刮刮自定义背景、事件、刮奖范围

    ```html
    <nov-scratch :touchRadius="25"
                 :activeBoundary="60"
                 @on-image-load="onImageLoad"
                 @on-show="onShow"
                 @on-first="onFirst">
        <div class="scratch-bg">
            <h4>恭喜哈！狗年要吉祥！</h4>
            <p>红包拿来</p>
        </div>
    </nov-scratch>
    ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| bg-image | 抽奖区域的前景图 | String | - | '' |
| bg-color | 抽奖区域的背景颜色 | String | - | '#d9e0e0' |
| touch-radius | 触摸区域的半径 | Number | - | 20 |
| active-boundary | 超过阈值时显示内容 | Number | - | 40 |

### 事件

| 参数 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| on-first | 首次触摸刮奖区 | - | - |
| on-image-load | 刮奖区前景图加载完成 | - | - |
| on-show | 完全展示奖区 | - | - |
