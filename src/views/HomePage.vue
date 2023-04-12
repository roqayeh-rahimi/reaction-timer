<template>
    <div class="content">
        <h1>Welcome to this Timer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quas nam sunt officia alias possimus quis, voluptates distinctio aspernatur officiis sapiente, iure beatae labore mollitia iusto excepturi suscipit tempore praesentium.</p>
       <button class="btn-style" @click="goToGame">Go To Timer</button>
    </div>
 <!-- <router-view :to="{name : 'PlayReaction'}"></router-view> -->

</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup(){
        let router = useRouter()
        function goToGame(){
            router.push({name : 'PlayReaction'})
        }
        return{goToGame}
    }
}
</script>

<style>

</style>