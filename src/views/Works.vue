<template>
  <div class="works">
      <Empty />
      <NewHeader select='2' />
      <div class="content">
            <div class="block">
                <el-timeline>
                    <el-timeline-item timestamp="2022/3/25" placement="top">
                    <el-card>
                        <h4>创建个人项目 blog</h4>
                    </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="20??/?/?" placement="top">
                    <el-card>
                        <h4>待填写</h4>
                    </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="20??/?/?" placement="top">
                    <el-card>
                        <h4>待填写</h4>
                    </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
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
  }
}
</script>

<style lang='less' scoped>
.works{
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
