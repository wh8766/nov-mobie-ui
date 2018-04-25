## Toast

 `toast` 提示信息组件

### 示例

- 基本用法
    ```html
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="基本使用" :position="position">
        基本使用
    </toast>
    ```

- 自定义属性
    ```html
    <toast 
        v-model="showPositionValue" 
        type="text" 
        :time="800" 
        is-show-mask 
        text="基本使用" 
        :position="position">
        基本使用
    </toast>
    ```
### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| value | 是否显示, 使用 v-model 绑定 | Boolean | - | false |
| time | 显示时间 | Number | - | 2000 |
| type | 类型，可选值  | String | success, warn, cancel, text | success |
| width | 宽度 | String | - | 7.6em |
| is-show-mask | 是否显示遮罩，如果显示，用户将不能点击页面上其他元素 | Boolean | - | false |
| text | 提示内容，支持 html，和默认slot同样功能 | String | - | '' |
| position | 显示位置，可选值  | String | default, top, middle, bottom | default |

### 事件

| 参数 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| on-show | 提示弹出时触发 | - | - |
| on-hide | 提示隐藏时触发 | - | - |
