// 插件是一种能为 Vue 添加全局功能的工具代码
// 一个插件可以是一个拥有 install() 方法的对象，也可以直接是一个安装函数本身。
// 安装函数会接收到安装它的应用实例和传递给 app.use() 的额外选项作为参数：

// 插件一般有如下功能，（一般我们在使用第三方的一些库是会用到app.use去加载对应的插件）
// 通过 app.component() 和 app.directive() 注册一到多个全局组件或自定义指令。比如el-element加载各种组件
// 通过 app.provide() 使一个资源可被注入进整个应用。
// 向 app.config.globalProperties 中添加一些全局实例属性或方法。 比如el-element 挂在的全局对象$message
export const myPlugin = {
    install(app, options) {
        // 配置此应用
        // 注入一个全局可用的 $translate() 方法
        app.config.globalProperties.$translate = (key) => {
            // 获取 'options' 对象的深层属性
            // 使用 'key' 作为索引
            return key.split('.').reduce((o, i) => {
                if(o) return o[i]
            }, options)
        }

        app.provide('i18n', options)
    }
} 