<template>
  <div class="works">
      <Empty />
      <NewHeader select='2' />
      <div class="content">
        
      </div>
  </div>
</template>

<script>
import NewHeader from '../components/newHeader.vue'
import Empty from '../components/empty.vue'

export default {
  name: 'Works',
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

<style lang='less' scoped>
.works{
  width: 100%;
  background: white;
  position: relative;
  .content{
      width: 100%;
      height: calc(100vh - 60px);
      overflow: hidden;
  }
}
</style>
