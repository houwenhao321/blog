<template>
  <div id="app">
    <div id="appcontent">
        <router-view/>
    </div>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100vw;
    background: rgb(104, 102, 102);
}
#appcontent{
    width: 900px;
    margin: 0 auto;
} 
</style>
