<template>
    <nov-page title="Button" desc="基础按钮样式">
        <nov-button>页面次要操作 Normal</nov-button>
        <nov-button type="primary">页面主操作 Normal</nov-button>
        <nov-button type="primary" :loading="true">页面主操作 Loading</nov-button>
        <nov-button type="primary" :disabled="true">页面主操作 Disabled</nov-button>
        <nov-button :loading="true">页面次操作 Loading</nov-button>
        <nov-button :disabled="true">页面次要操作 Disabled</nov-button>
        <nov-button type="warn">警告类操作 Normal</nov-button>
        <nov-button type="warn" :loading="true">警告类操作 Loading</nov-button>
        <nov-button type="warn" :disabled="true">警告类操作 Disabled</nov-button>

        <nov-button :plain="true">按钮</nov-button>
        <nov-button :plain="true" :disabled="true">按钮</nov-button>
        <nov-button type="primary" :plain="true">按钮</nov-button>
        <nov-button type="primary" :plain="true" :disabled="true">按钮</nov-button>
        <nov-button type="primary" :mini="true">按钮</nov-button>
        <nov-button :mini="true">按钮</nov-button>
        <nov-button type="warn" :mini="true">按钮</nov-button>
    </nov-page>
</template>

<script type="text/ecmascript-6">
    import NovPage from '../components/nov-page'
    import NovButton from '@/components/button/button'

    export default {
        name: "page-button",
        components: {
            NovPage,
            NovButton
        }
    }
</script>
