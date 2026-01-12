<template>
    <div class="layout-container">
        <slot />
    </div>
</template>

<script setup lang="ts">
useServerSeoMeta({
    ogTitle: "Osmerion",
    ogDescription: "A web presence in the making. Will it take months? Years? Who knows...",
    ogType: "website",
    ogImage: "https://www.osmerion.com/logo.png",
    ogUrl: "https://osmerion.com"
});
</script>

<style scoped>
.layout-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-left: 8px;
    padding-right: 8px;

    background-color: var(--background-color);
    color: var(--on-background-color);
}
</style>