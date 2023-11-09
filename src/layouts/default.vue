<template>
    <div class="layout-container">
        <slot />
    </div>
</template>

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
}
</style>