## NovTextarea

`novTextarea` textarea加强版，提供计数，自适应高度及自定义大小等功能

### 示例

- 基本用法
    ```html
   <group :title="'自动高度'">
          <novTextarea :placeholder="'Type something'" :show-counter="false" :rows="1" autosize></novTextarea>
          <novTextarea :title="'标题'" :placeholder="'Type something'" :show-counter="false" :rows="1" autosize>
          </novTextarea>
    </group>
    ```

- 自定义属性
    ```html
    <novTextarea 
        :placeholder="'Type something'" 
        :show-counter="false"
        :title="'标题'"
        :rows="1"
        :show-counter="false"
        autosize>
    </novTextarea>
    ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| title | label文字 | String | - | '' |
| inline-desc | 位于标题下的描述文字 | String | - | '' |
| show-counter | 是否显示计数 | Boolean | - | true |
| max | 最大长度限制 | Number | - | '' |
| value | 表单值, 使用`v-model`绑定 | String | - | '' |
| name | 表单名字 | String | - | '' |
| placeholder | 表单名字 | String | - | '' |
| name | 没有值时的提示文字 | String | - | '' |
| rows | textarea 标签属性 rows | Number | - | 3 |
| cols | textarea 标签属性 cols | Number | - | 30 |
| height | 高度 | Number | - | 0 |
| readonly | textarea 标签属性 readonly | Boolean | - | false |
| autosize | 是否根据内容自动设置高度 | Boolean | - | false |

### 事件

| 参数 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| on-focus | 聚焦 | - | - |
| on-blur | 失焦 | - | - |
| on-change | watch value | newValue | - |
