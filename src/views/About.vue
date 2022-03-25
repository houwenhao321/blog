<template>
	<div class="about">
		<Empty />
		<NewHeader select = '1' />
		<div class="content">
			<div class="writing">
				<h1>
					关于我
				</h1>
				<hr/>
				<div class="tag">
					<el-tag class="tagItem" type="info">前端</el-tag>
					<el-tag class="tagItem" type="warning" @click="showCat">有猫</el-tag>
					<el-tag class="tagItem" type="info">有头发</el-tag>
				</div>
				<div class="chatter">
					我是侯文豪<br>
					前端开发<br>
					偶尔百家号发文章<br>
					偶尔B站剪个视频<br>
					偶尔做个白日梦<br>
					......<br>
					许个愿：成为全栈<br>
					再许个愿：世界和平<br>
					skr~
				</div>	
			</div>
		</div>
	</div>
</template>

<script>
import NewHeader from '../components/newHeader.vue'
import Empty from '../components/empty.vue'

export default {
  name: 'About',
  components: {
      NewHeader,
      Empty
  },
  data() {
    return {

    }
  },
  methods:{
		//  展示猫咪  
		showCat(){

		}
  }
}
</script>

<style lang="less" scoped>
    .about{
        width: 100%;
        background: white;
        position: relative;
        .content{
            width: 100%;
            height: calc(100vh - 60px);
			overflow: hidden;
			.writing{
				width: 400px;
				height: 60vh;
				margin: 15vh auto;
				.tag{
					margin: 20px;
					.tagItem{
						margin: 0 3px;
					}
				}
				.chatter{
					width: 100%;
					text-align: center;
					margin-top: 10px;
					line-height: 30px;
				}
			}
        }
    }
    
</style>
