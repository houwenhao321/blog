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
					<el-tag class="tagItem" type="warning">有猫</el-tag>
					<el-tag class="tagItem" type="info">爱笑</el-tag>
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
				<div class="showCat">
					<el-carousel class="imgBox" :interval="4000" type="card" height="200px">
						<el-carousel-item>
							<img class="img" src="@/assets/car/猫.png" alt="" srcset="">
						</el-carousel-item>
						<el-carousel-item>
							<img class="img" src="@/assets/car/猫1.png" alt="" srcset="">
						</el-carousel-item>
						<el-carousel-item>
							<img class="img" src="@/assets/car/猫2.png" alt="" srcset="">
						</el-carousel-item>
					</el-carousel>
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
		showCat: false,
		catImgArr: ['@/assets/car/猫.png','@/assets/car/猫1.png','@/assets/car/猫2.png']
    }
  },
  methods:{
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
				position: relative;
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
				.showCat{
					position: relative;
					top: 3vh;
					left: -200px;
					width: 800px;
					.imgBox{
						height: 100%;
						background: white;
						box-shadow: 0 0 5px gray;
						.img{
							height: 100%;
						}
					}
					
				}
			}
        }
    }
	// .el-carousel__item{
	// 	font-size: 14px;
	// 	line-height: 200px;
	// 	margin: 0;
	// }
</style>
