## Group

 `Group`是一个特殊的表单组件，主要用于将表单分组，单个表单元素也算一组。常见的表单组件都`必须`作为`Group`的子组件。
 
 属于`Group`子组件的有：Cell, novInput, novTextarea, novSwitch

### 示例

- 基本用法
    ```html
    <group label-align="justify" label-width="5.5em" label-margin-right="2em">
        <cell></cell>
        <nov-input></nov-input>
    </group>
    ```

- 自定义属性
    ```html
    <group 
        label-align="justify" 
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
| title | 分组标题 | String | - | '' |
| titleColor | 分组标题文字颜色 | String | - | '' |
| labelWidth | 为子元素设定统一label宽度 | String | - | '' |
| labelAlign | 为子元素设定统一对齐方式 | String | - | '' |
| labelMarginRight | 为子元素设定统一的右边margin | String | - | '' |
| gutter | 设定group的上边距，只能用于没有标题时 | String | - | '' |
