## 组件名称

 `checklist` 表单选框

### 示例

- 基本用法
    ```html
    <nov-input title="禁用验证" placeholder="I'm placeholder" novalidate :icon-type="iconType" :show-clear="false"
    @on-blur="onBlur" placeholder-align="right">
    </nov-input>
    ```

- 自定义属性
   ```html
   <nov-input 
       title="禁用验证" 
       placeholder="I'm placeholder" 
       novalidate 
       :icon-type="iconType" 
       :show-clear="false"
       :is-type="be2333"
       @on-blur="onBlur"
       :max="5"
       v-model="maxValue"
       :debounce="500"
       :show-clear="false"
       placeholder-align="right"></nov-input>
   ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| value | 表单值 | String | - | '' |
| type | '即input的`type`属性，目前支持 `text`,`number`,`email`,`password`,`tel`' | String | - | text |
| is-type | '内置验证器，支持`china-mobile`, 同样也支持直接传函数, 需要同步返回一个对象`{valid:true}`或者`{valid:false, msg:错误信息}`' | String,Function | - |  |
| required | 是否必值，如果不禁用验证，当没有填写时会在右侧显示错误icon | Boolean | - | false |
| title | label文字 | String | - | '' |
| placeholder | placeholder 提示 | String | - | '' |
| show-clear | 是否显示清除icon | Boolean | - | true |
| min | 最小输入字符限制 | Number | - | - |
| max | 最大输入字符限制，等同于`maxlength`，达到限制到不能再输入 | Number | - | - |
| disabled | 是否禁用填写 | Boolean | - | false |
| readonly | 同input的标准属性readonly | Boolean | - | false |
| debounce | `debounce`用以限制`on-change`事件触发。如果你需要根据用户输入做`ajax`请求，建议开启以节省无效请求和服务器资源，单位为毫秒 | Number | - | - |
| placeholder-align | placeholder 文字对齐方式 | String | - | left |
| text-align | 文本对齐方式 | String | - | left |
| label-width | label 宽度，权重比 group 的 labelWidth 高。不设定时将进行自动宽度计算，但超过15个字符时不会进行宽度设定。 | String | - | - |
| mask | (beta) 值格式化，依赖于 vanilla-masker，其中 9 表示数字，A 表示大写字母，S 表示数字或者字母 | String | - | - |
| should-toast-error | 是否在点击错误图标时用 toast 的形式显示错误 | Boolean | - | true |

### 事件

| 参数 | 说明 | 参数1 | 参数2 |
| on-focus | 聚焦 | - | - |
| on-blur | 失焦 | - | - |
| on-change | watch value | newValue | - |
| reset | 重置输入框值，清除错误信息 | newValue | - |
