<template>
    <div>
        <div class="bg-panel"></div>

        <div class="container-fluid main">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1">
                        <h1>Nov UI Components</h1>
                        <p>The fastest way to build a performance application.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid feature">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="thumbnail">
                            <img src="../assets/image/web-tech.svg">
                            <div class="caption">
                                <h3 class="text-center">视觉统一</h3>
                                <p class="text text-center">UI/UE 联手打造，传承与革新共存</p>
                                <p>
                                    <router-link class="btn btn-primary btn-block" to="/doc">Lean more</router-link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="thumbnail">
                            <img src="../assets/image/open-source.svg">
                            <div class="caption">
                                <h3 class="text-center">快速开发</h3>
                                <p class="text text-center">完善的文档，海量模块，覆盖多种业务场景，提升效率</p>
                                <p>
                                    <router-link class="btn btn-primary btn-block" to="/doc">Lean more</router-link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="thumbnail">
                            <img src="../assets/image/cross-platform.svg">
                            <div class="caption">
                                <h3 class="text-center">质量保证</h3>
                                <p class="text text-center">完备的组件单元测试用例，汲取项目实践中的经验快速迭代</p>
                                <p>
                                    <router-link class="btn btn-primary btn-block" to="/doc">Lean more</router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <p>Nov UI, Copy right Lenovo NCS UED.</p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style type="text/less" lang="less" scoped>
    .bg-panel {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;

        background-image: url("https://picsum.photos/1920/1200/?random");
        background-repeat: no-repeat;
        background-position: center center;
    }

    footer {
        text-align: center;
        width: 100%;
        padding: 20px;
        z-index: 100;
        position: relative;
        text-shadow: 1px 1px 1px #333;
        color: white;
    }

    .main {
        height: 330px;
        padding-top: 100px;
        color: white;
        text-shadow: 1px 1px 1px #333;
    }
    .main h1 {
        font-size: 46px;
    }
    .main p {
        font-size: 24px;
    }

    .thumbnail {
        padding-top: 10px;
    }
    .thumbnail img {
        height: 150px;
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .thumbnail h3 {
        margin-top: 10px;
    }
    .thumbnail .text {
        min-height: 48px;
    }
</style>
