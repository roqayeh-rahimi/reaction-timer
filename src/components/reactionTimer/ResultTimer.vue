<template>
   <p v-if="!showing" class="p-result" >Reaction is : {{ score }} ms</p>
   <p v-if="!showing">{{ rank }}</p>
</template>

<script>
// import { onMounted, ref } from 'vue'
export default {
    props : ['showing','score'],
    // data(){
    //     return{
    //         rank : null,
    //     }
    // },
    // mounted(){
    //     if(this.score < 400){
    //             this.rank = 'great'
    //         }
    //         else if(this.score < 800 && this.score > 400){
    //             this.rank = 'good'
    //         }
    //         else{
    //             this.rank = 'not bad'
    //         }
    //         console.log("mounted mounted mounted");
    // }
    setup(props){
        // let rank = ref(null)
        // onMounted(()=>{
        //     if(props.score.value < 400){
        //         rank.value = 'great'
        //     }
        //     else if(props.score.value < 800 ){
        //         rank.value = 'good'
        //     }
        //     else{
        //         rank.value = 'not bad'
        //     }
        // })
        // console.log('mounted');

        return{props }
    }
}
</script>

<style>
.p-result{
    margin-top: 1rem;
    font-size: 20px;
    color: forestgreen;
    font-weight: bold;

}
</style>