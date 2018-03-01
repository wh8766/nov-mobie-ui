## Toast

 `toast`

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

  type:
    type: String
    default: success
    en: toast type, success, warn, cancel, text
    zh-CN: 类型，可选值 success, warn, cancel, text
  width:
    type: String
    default: 7.6em
    en: toast's width
    zh-CN: 宽度
  is-show-mask:
    type: Boolean
    default: false
    en: if showing mask, users cannot operate other elements on the page
    zh-CN: 是否显示遮罩，如果显示，用户将不能点击页面上其他元素
  text:
    type: String
    default: ''
    en: content of the toast, text or html, the same function as default slot
    zh-CN: 提示内容，支持 html，和默认slot同样功能
  position:
    version: v2.1.1-rc.4
    type: String
    default: 'default'
    en: 'toast position, available values: default, top, middle, bottom'
    zh-CN: 显示位置，可选值 default, top, middle, bottom
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
