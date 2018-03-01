## NovSwitch

 `novSwitch`开关

### 示例

- 基本用法
    ```html
    <group :title="('disabled')">
        <nov-switch disabled>默认 false</nov-switch>
        <nov-switch :value="true" disabled>默认 true</nov-switch>
    </group>
    ```

- 自定义属性
    ```html
    <nov-switch 
        :value="true"
        disabled
        :prevent-default=true  
        v-model="value2" 
        @on-click="onClick"
        >
    </nov-switch>
    ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| title | label文字 | String | - | '' |
| disabled | 是否不可点击 | Boolean | - | false |
| value | 表单值, 使用`v-model`绑定 | Boolean | - | false |
| inline-desc | 标签下文字 | String | - | '' |
| prevent-default | 阻止点击时自动设定值 | Boolean | - | false |

### 事件

| 参数 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| on-change | 值变化时触发 | currentValue | - |
| on-click | 点击组件时触发 | - | - |
