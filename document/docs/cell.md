## 组件名称

 `Group`是一个特殊的表单组件，主要用于将表单分组，单个表单元素也算一组。常见的表单组件都`必须`作为`Group`的子组件。
    属于`Group`子组件的有：Cell, novInput, novTextarea, novSwitch
## 组件名称

 `Group`是一个特殊的表单组件，主要用于将表单分组，单个表单元素也算一组。常见的表单组件都`必须`作为`Group`的子组件。
        属于`Group`子组件的有：Cell, novInput, novTextarea, novSwitch

### 示例

- 基本用法
    ```html
    <group>
        <cell title="title" value="value"></cell>
    </group>
    ```

- 自定义属性
    ```html
    <group 
        label-align="justify" 
        label-width="5.5em"
        title="这是分组标题"
        titleColor="red"
        label-width="5.5em"
        labelAlign="left"
        gutter="10em"
        label-margin-right="2em">
        <nov-input></nov-input>
    </group>
    ```
    
### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| title | 左边标题文字 | String | - | '' |
| value | 右侧文字，复杂的样式布局请使用slot | String | - | '' |
| inline-desc | 标题下面文字，一般为说明文字 | String | - | '' |
| link | 点击链接，可以为http(s)协议，也可以是 vue-router 支持的地址形式 | String, Object | - | '' |
| is-link | 是否为链接，如果是，右侧将会出现指引点击的右箭头 | Boolean | - | false |
| primary | 可选值为 ['title', 'content']，对应的div会加上weui_cell_primary类名实现内容宽度自适应 | String | - | title |
| value-align | 文字值对齐方式，可选值为 left right。当设为 right 时，primary 值将会设为 content | String | - | left |
| border-intent | 是否显示边框与左边的间隙 | Boolean | - | true |
| arrow-direction | 右侧箭头方向，可选有 up down | String | - | down |
| disabled | 对 label 和箭头(如果使用 is-link)显示不可操作样式 | Boolean | - | false |
| align-items | align-items 样式值 | String | - | '' |

### 事件

| 参数 | 说明 | 参数1 | 参数2 |
| - | - | - | - |



