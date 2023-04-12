<template>
  <h1>{{ title }}</h1>
  <div class="alert alert-success" role="alert">
    A simple success alert—check it out!
  </div>
  <router-link  class="mr-1 link" to="/">Home</router-link>
  <router-link  class="mr-1 link" to="/play">Game</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  setup(){
    let title = 'App'
    return{title}
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mr-1{
  margin: 0px 10px;
}
.link{
  color: #333;
  text-decoration: none;

}
.link:hover{
  color: #333;
}

.router-link-active {
  border-bottom: 2px #333 solid;
  padding-bottom:0.5rem ;
}
</style>
