<template>
  <div class="SomeWords">
      <Empty />
      <NewHeader select='3' />
      <div class="content">
          哔哔
      </div>
  </div>
</template>

<script>
import NewHeader from '../components/newHeader.vue'
import Empty from '../components/empty.vue'

export default {
  name: 'SomeWords',
  components: {
      NewHeader,
      Empty
  },
  data() {
    return {

    }
  },
  methods:{
  }
}
</script>

<style lang='less' scoped>
.SomeWords{
  width: 100%;
  background: white;
  position: relative;
  .content{
      width: 300px;
      margin: 100px auto;
      height: calc(100vh - 60px);
      overflow: hidden;
  }
}
</style>
