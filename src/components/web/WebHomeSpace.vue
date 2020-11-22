<template>
    <div>
        <WebDataTopSpace/>
        <WebShowSpace/>
        <WebVistTableSpace/>
    </div>
</template>
<script>
export default {
    components:{
        WebDataTopSpace:resolve=>{require(['@/components/web/homesub/WebDataTopSpace'],resolve)},
        WebShowSpace:resolve=>{require(['@/components/web/homesub/WebShowSpace'],resolve)},
        WebVistTableSpace:resolve=>{require(['@/components/web/homesub/WebVistTableSpace'],resolve)},
    }
}
</script>