<template>
    <div>
        <v-icon name="eye"></v-icon>
        <v-icon name="x"></v-icon>
        <custom-icon name="activity"></custom-icon>
    </div>
</template>

<script>
    import customIcon from 'vue-icon/lib/vue-feather.es'
    export default{
        components: {
            customIcon
        }
    }
</script>
<style>
    .icon {
        width: 24px;
    }
</style>
