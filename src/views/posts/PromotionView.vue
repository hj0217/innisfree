<template>
	<div class="mb-3">
        <h2>씨드세럼, 레티놀 ,블랙티, 콜라겐도 빅세일혜택으로 GET</h2>
        <p>23. 12. 19 (화) ~ 23. 12. 25 (월)</p>
    </div>
 
    <div v-for="post in posts" :key="post.id">
        <AppCardVue>
            <h5 class="card-title">{{post.name}}</h5>
			<p class="card-text">{{post.content}}</p>
            <p class="card-text">{{post.price}}원</p>
        </AppCardVue>
    </div>
</template>


<script setup>
import AppCardVue from '@/components/app/AppCard.vue';
import {ref} from 'vue';
import {getPosts} from '@/api/posts.js'; 

const posts = ref({ name:null, content:null, price:null});


    const fetchPosts = async() => {
        const {data} = await getPosts(); 
        posts.value = data; 
    };
    fetchPosts();


</script>

<style scoped>

</style>
