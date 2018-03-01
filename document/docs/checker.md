## 组件名称

 `Checker` 表单部分选择的组件，可自定义样式，与checkerItem和divider配合使用

### 示例

- 基本用法
    ```html
    <checker v-model="demo1Checkbox" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="1">白</checker-item>
        <checker-item :value="2">富</checker-item>
        <checker-item :value="3">美</checker-item>
    </checker>
    ```

- 自定义属性
    ```html
    <checker 
          v-model="demo1Checkbox" 
          type="checkbox" 
          default-item-class="demo1-item" 
          selected-item-class="demo1-item-selected"
          :max="2">
        <checker-item :value="1">白</checker-item>
        <checker-item :value="2">富</checker-item>
        <checker-item @on-item-click="itemClick" :value="3">美</checker-item>
    </checker>
    ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| default-item-class | 默认状态class | String | - | checker-item |
| selected-item-class | 选中样式class | String | - | selected check-item |
| disabled-item-class | disabled check-item | String | - | disabled check-item |
| type | 类型，单选为`radio`, 多选为`checkbox` | String | radio，checkbox | radio |
| value | 表单值，使用`v-model`绑定 | String,Array | - | '' |
| max | 最多可选个数，多选时可用 | Number | - | '' |
| radio-required | 在单选模式下是否必选一个值。设为 true 后点击当前选中项不会取消选中。 | Boolean | - | false |

### 事件

| 参数 | 说明 | 参数1 | 参数2 |
| on-change | value值变化时触发 | - | - |

### 子组件checker-item 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| value | 当前项的值 | String | - | - |
| disabled | 是否为不可选 | Boolean | - | false |
| value | 当前项的值 | - | - | - |

### 子组件checker-item 事件

| 参数 | 说明 | 参数1 | 参数2 |
| on-item-click | 当前项被点击时触发 | - | - |
 