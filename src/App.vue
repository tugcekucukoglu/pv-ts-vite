<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import vRipple from 'primevue/ripple';
import vStyleclass from 'primevue/styleclass';
import { usePrimeVue } from "primevue/config";

const $primevue = usePrimeVue();
defineExpose({
    $primevue
})
</script>

<template>
    <h5>Ripple</h5>
    <div class="card-container flex">
        <div class="card primary-box p-ripple" v-ripple>Default</div>
    </div>

    <h5>StyleClass Animations</h5>
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
