<template>
    <div>
        <v-icon name="eye"></v-icon>
        <v-icon name="x"></v-icon>
        <custom-icon name="activity" base-class="custom-icon"></custom-icon>
    </div>
</template>

<script>
    import customIcon from 'vue-icon/lib/vue-feather.esm'
    export default{
        components: {
            customIcon
        },
        data: function () {
            return {
                baseClass: 'v-icon'
            }
        }
    }
</script>
<style>
    .v-icon,
    .custom-icon {
        width: 24px;
    }
</style>
