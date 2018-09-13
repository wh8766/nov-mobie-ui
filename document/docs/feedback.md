# Feedback

feedback 直接使用了weui.js 来完成。

参见：[https://github.com/Tencent/weui.js](https://github.com/Tencent/weui.js)

## Demo(组件名称)

组件介绍

### 示例

- 例子1
    ```javascript
    let docRoutes = []
    menu.forEach(({children}) => {
        children.forEach(({name}) => {
            docRoutes.push({
                path: `${name}`,
                name: `doc-${name}`,
                component: resolve => require([`../docs/${name}.md`], resolve)
            })
        })
    })
    ```

- 例子2
    ```javascript
    const router = new VueRouter({
        linkActiveClass: 'active',
        routes,
        scrollBehavior (to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return { x: 0, y: 0 }
            }
        }
    })
    ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| title | 组件的标题 | String | - | '' |

### 事件

| 参数 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| cancel | 点击取消 | - | - |
