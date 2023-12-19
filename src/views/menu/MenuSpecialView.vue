<template>
	<div>
       <AppMenu v-model:id="items.id" v-model:list="items.list"></AppMenu>
    </div>
</template>


<script setup>
import AppMenu from '@/components/app/AppMenu.vue';
import {ref} from 'vue';
import {getMenu} from '@/api/menu.js';
import {useRoute} from'vue-router';

const items = ref({});
const route = useRoute();
// const props = defineProps ({
//     category: String,
// }); 

const fetchMenu = async() => {
   
    const { data } = await getMenu();
    items.value = data;
    console.log('확인용',items.value);
}

fetchMenu();

</script>

<style scoped>
</style>