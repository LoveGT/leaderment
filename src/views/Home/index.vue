<template>
	<div id="home">
		<section id="header">
			<Header></Header>
			<!-- header -->
		</section>
		<section id="main">
			<Banner></Banner>
			<div class="about">
				about leaderment
			</div>
			<!-- man1
			<div class="swiper" v-for="item in list" :style="{background:'url(' + item.src + ')'}">
				
			</div> -->
		</section>
		<section id="footer">
			<Footer></Footer>
		</section>
	</div>

</template>
<script>
	import Header from "@/components/Header"
	import Footer from "@/components/Footer"
	import Banner from "@/components/Banner"
	export default{
		name:"Home",
		data() {
			return {
				// list: [{
				// 		id: 1,
				// 		src: require('@/assets/images/banner01.jpg')
				// 	},
				// 	{
				// 		id: 2,
				// 		src: require('@/assets/images/banner02.jpg')
				// 	},
				// 	{
				// 		id: 3,
				// 		src: require('@/assets/images/banner03.jpg')
				// 	},
				// 	{
				// 		id: 4,
				// 		src: require('@/assets/images/banner04.jpg')
				// 	},
				// 	{
				// 		id: 5,
				// 		src: require('@/assets/images/banner05.jpg')
				// 	}
				// ],
			}
		},
		components:{
			Header,
			Footer,
			Banner
		}
	}
</script>

<style scoped>
	#home{
		position: relative;
		width: 100%;
		height: 100%;
	}
	#home #header{
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		background-color: rgba(255,255,255,.5);
		width: 1920px;
	}
	#home #main{
		z-index: 100;
		width: 1920px;
		border: 1px solid darkblue;
	}
	#main .about{
		height: 600px;
		border: 1px solid black;
		color: transparent;  
		font-size: 72px;
		-webkit-text-stroke: 1px #ccc;  
		font-family: "franklin gothic heavy";
	}
	#home #footer{
		height: 400px;
		border: 1px solid deeppink;
	}
	
</style>