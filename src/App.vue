<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { useToast } from "primevue/usetoast";

const toast = useToast();

function showSuccess() {
    toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        life: 3000,
    });
}
</script>

<template>
    <Toast />
    <Button label="Success" class="p-button-success" @click="showSuccess" />

    <h5>Ripple</h5>
    <div class="card-container flex">
        <div class="card primary-box p-ripple" v-ripple>Default</div>
    </div>

    <h5>StyleClass</h5>
    <Button label="Show" class="mr-2" v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" />
    <Button label="Hide" v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" />
    <div class="box hidden">Content</div>
</template>

<style lang="scss" scoped>
.card-container {
    background-color: var(--surface-300);
    padding: 1rem;

    .card {
        width: 75px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        user-select: none;
        padding: 0;
        border-radius: 10px;
        background-color: var(--surface-0);

        &.primary-box {
            background-color: var(--primary-color);
            padding: 0;
            color: var(--primary-color-text);
        }
    }
}

.box {
    background-color: var(--green-500);
    color: #ffffff;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    font-weight: bold;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}

@keyframes my-fadein {
    0%   { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes my-fadeout {
    0%   { opacity: 1; }
    100% { opacity: 0; }
}

.my-fadein {
    animation: my-fadein 150ms linear;
}
        
.my-fadeout {
    animation: my-fadeout 150ms linear;
}
</style>
