## 参与开发

- 项目地址：[http://10.120.24.200/FE/nov-mobile-ui][1]
- [项目issues][2] 问题和建议在这里
- [项目看板][3] 查看各组件和问题解决进度

### Git 约定

- 我们保证`master` 是稳定的内容，所以有一条dev branch 作为开发分支
- 添加或修改内容，请从最新的`dev` 分支上创建，命名规则：`dev-dosomething`
- 内网Gitlab 已经配置了CI，用来构建文档和示例，请勿提交`docs` 文件夹

### 示例、文档 router

请参考 `nov-mobile-ui\config\menu.json`

页面和路由会解析该配置文件，并生成相应路由，新增组件或页面时，请保证名称与配置文件一致。

### 作为本地`package` 进行开发
   
在未发布为正式npm package 之前，可以按照如下方案使用本地内容：

- 在nov-mobile-ui 下 `npm link`
- 在target project 下 `npm link nov-mobile-ui`

参考文档： [http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears][4]

[1]: http://10.120.24.200/FE/nov-mobile-ui
[2]: http://10.120.24.200/FE/nov-mobile-ui/issues
[3]: http://10.120.24.200/FE/nov-mobile-ui/boards
[4]: http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears
