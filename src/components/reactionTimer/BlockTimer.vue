<template>
  <div  class="box" v-if="showBox" @click="stopTimer">
    <p>ُStop Timer</p> 
  </div>
  <!-- <p>{{ reactionTimer }}</p> -->
</template>

<script>

import { onMounted, ref } from 'vue';
export default {
    props : ['delay'],
    setup(props , {emit}){
        let showBox = ref(false)
        let timer = ref(null)
        let reactionTimer = ref(0)
        onMounted(()=>{
            setTimeout(() => {
                showBox.value = true
                console.log(props.delay);
                startTimer()
            },props.delay);
        })
        
        function startTimer(){
            timer = setInterval(()=>{
                reactionTimer.value += 10
            },10)
        }
        function stopTimer(){
            clearInterval(timer)
            // console.log(reactionTimer.value);
            emit('end' , reactionTimer)
        }
        return{showBox ,reactionTimer,  stopTimer}
    },

    // deta(){
    //     return{
    //         box : true
    //     }
    // },
    // mounted(){
    //     setTimeout(() => {
    //         this.box = true
    //         console.log(this.delay);
    //     },2000);
    // },

        
}
</script>

<style>

.box {
    width: 200px;
    height: 200px;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    margin: 10px auto;
    cursor: pointer;
}

.box p{
    color: white;
    font-weight: bold;
}
</style>