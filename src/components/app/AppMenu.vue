<template>
    <h2>{{props.id}}</h2>
    <!-- <div class="d-flex flex-wrap" v-for="item in items.list" :key="item"> -->
      <div class="mb-auto p-2" style="border: solid 1px ">{{props.list}}</div>
    <!-- </div> -->
</template>


<script setup>
import {ref} from 'vue';

const items =ref('');
const props = defineProps ({
    id: String,
    list: String, 
});

console.log("언제까지 확인함", props.id);
</script>


<style scoped>
</style>
