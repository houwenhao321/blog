<template>
  <div class="home">
      <Empty />
      <NewHeader select = '0' />
      <img class="img" src="@/assets/img/logo.png" alt="" srcset="">
  </div>
</template>

<script>
import NewHeader from '../components/newHeader.vue'
import Empty from '../components/empty.vue'

export default {
  name: 'Home',
  components: {
      NewHeader,
      Empty
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
  background: white;
  position: relative;
}
.img{
  width: 100%;
}
</style>
