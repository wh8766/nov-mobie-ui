## Nov-mobile-ui 基础组件库

> `基础组件库` 业务和活动组件的积累，默认包含定制化的weui

[点击这里：查看示例](./#/example)

### 目标：
- 依赖内置，提供定制后的weui，weuijs，项目可根据选择来引入
- 支持component import style
- 提供基础配色方案修改，非覆盖式
- 兼容px、rem和vw 适配方案，由项目决定最终的输出格式
- 发布到git、npm 作为公共包
- 提供自身的开发编译环境，提供示例页面
- 完备的readme 文档，doc 信息
- 提供组件的测试用例，连接CI
- 至少包含的业务组件：
    - 刮刮卡
    - 分享弹层
    - 轮播

### 规划中的项目：

| 项目名称 | 功能 | 默认包含 |
| - | --- | - |
| nov-cli | 快速创建项目，添加页面、路由模板，减少手动配置项 |
| nov-mobile-template | webpack 配置文件，基础项目脚手架，约定开发目录结构，提供常用基础组件 | vue-cli-template、nov-mobile-ui、nov-wechat、weui.js |
| nov-mobile-ui | 业务和活动组件的积累，定制化后的weui |
| nov-wechat | 可自用，可提供给第三方的微信JSSDK 依赖我们自己的微信网关 | |

### 参考借鉴的开源项目

- [https://github.com/Tencent/weui](https://github.com/Tencent/weui)
- [https://github.com/Tencent/weui.js](https://github.com/Tencent/weui.js)
- [https://didi.github.io/cube-ui/](https://didi.github.io/cube-ui/)
- [https://vux.li/#/](https://vux.li/#/)

