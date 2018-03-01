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
| title | 组件的标题 | String | - | '' |

### 事件

| 参数 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| cancel | 点击取消 | - | - |
