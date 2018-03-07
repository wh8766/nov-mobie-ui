## Button
按钮用于开始一个即时操作。

## 何时使用
标记一个操作命令，响应用户点击行为，触发相应的业务逻辑处理。

### 示例

- 基本用法
```html
    <nov-button>页面次要操作 Normal</nov-button>
    <nov-button type="primary">页面主操作 Normal</nov-button>
    <nov-button type="primary" :loading="true">页面主操作 Loading</nov-button>
    <nov-button type="primary" :disabled="true">页面主操作 Disabled</nov-button>
    <nov-button :loading="true">页面次操作 Loading</nov-button>
    <nov-button :disabled="true">页面次要操作 Disabled</nov-button>
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | -| - |
| type | 设置按钮类型 | String | primary, warn, default | default|
| loading | 设置按钮载入状态 | Boolean | true, false | false |
| disabled| 设置按钮是否可点击 | Boolean | true, false | false |
| mini | 设置按钮为小按钮 | Boolean | true, false | false|
| plain | 和type，disabled属性相关  | Boolean | treu, false | false |

### 事件
| 参数 | 说明 | 参数 |
| - | - | - |
| click | click事件的handler | - |
