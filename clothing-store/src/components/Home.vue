<script setup>
import { useCart } from '../stores/useCart';

import Kids from './Kids.vue';

const data = useCart();
</script>

<template>
    <div class="row m-4">

        <kids v-for="kidsTop in data.kidsTop" key="kidsTop.id" :kidsTop="kidsTop"/>
    </div>
   
</template>

<style scoped>

</style>