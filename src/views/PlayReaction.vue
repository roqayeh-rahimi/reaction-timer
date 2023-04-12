<template>
    <div class="content">
        <h3>this is a Timer</h3>
        <p>You have to click on the button and then you see a box and again you have to click on the box and then you can check your reaction time in this game </p>
    </div>
    <button class="btn-style" @click="showBlock" :disabled="showing">Play</button>
   <ResultTimer :showing="showing" :score="score"/>
  <BlockTimer v-if="showing" :delay="delay" @end="endTimer" />
</template>


<script>
import { ref } from 'vue'
import BlockTimer from '../components/reactionTimer/BlockTimer.vue'
import ResultTimer from '../components/reactionTimer/ResultTimer.vue'
export default {
    components : {
        BlockTimer,
        ResultTimer
    },
    setup(){
        let delay = ref(null)
        let showing = ref(false)
        let score = ref(null)

        function showBlock(){
            delay.value = (2000 + (Math.floor(Math.random()*5000)))
            showing.value = true
        }
        function endTimer(reactionTime){
            score.value = reactionTime
            // console.log(reactionTime);
            showing.value = false

        }
        return{showBlock ,delay,showing, endTimer, score}
    },
    // data(){
    //     return{
    //         delay : null,
    //         show : false,
    //     }
    // },
    // methods : {
    //     ShowBlock(){
    //         this.delay = (2000 + (Math.floor(Math.random()*5000)))
    //         this.show = true
    //     }
    // },

}
</script>

<style>
.btn-style:disabled{
    background-color: lightgray ;
    color: #8a8a8a;
    cursor: not-allowed; 
}

</style>