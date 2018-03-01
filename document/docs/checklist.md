## 组件名称

 `checklist` 表单选框

### 示例

- 基本用法
    ```html
     <checklist :title="'最多可选中2个'" :options="commonList" v-model="checklist003" :max=2
      @on-change="change"></checklist>
    ```

- 自定义属性
   ```html
   <checklist 
      :title="'最多可选中2个'" 
      :options="commonList" 
      v-model="checklist003" 
      :max=2
      random-order
      @on-change="change">
    </checklist>
   ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| value | 表单值 | Array | - | [] |
| title | 标题 | String | - | '' |
| required | 是否为必填 | Boolean | - | false |
| options | 选项列表，可以为`[{key:'name',value:'value',inlineDesc:'inlineDesc'}]`的形式 | Array | - | [] |
| max | 最多可选个数 | Number | - | '' |
| min | 最少可选个数 | Number | - | '' |
| random-order | 是否随机打乱选项顺序 | Boolean | - | false |
| check-disabled | 是否进行可选检测，默认情况下当选择个数等于可选个数(max)时，其他项不可选择。该选项主要适用于从多个选项列表中收集值的场景。注意的该选项设为 false 时 max 设置将失效。 | Boolean | - | true |
| label-position | label 位置，可以设置为 left | String | - | right |
| disabled | 是否禁用 | Boolean | - | false |

### 事件

| 参数 | 说明 | 参数1 | 参数2 |
| on-change | 值变化时触发 | value | label |
| getFullValue | 获取值和对应的显示文字 | - | - |
