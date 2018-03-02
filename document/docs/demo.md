> Ops，这个组件的文档尚未编写，你可以通过下列方式加入到项目组，一起完善。

- 项目地址：http://10.120.24.200/FE/nov-mobile-ui

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
