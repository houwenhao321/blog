<template>
  <div class="home">
      <NewHeader />
      <img class="img" src="@/assets/img/logo.png" alt="" srcset="">
  </div>
</template>

<script>
import NewHeader from '../components/newHeader.vue'

export default {
  name: 'Home',
  components: {
      NewHeader
  },
  data() {
    return {

    }
  },
  methods:{
      login(){
        this.$router.push('/login');
      }
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 100vh;
  background: white;
}
.img{
  width: 100%;
}
</style>
