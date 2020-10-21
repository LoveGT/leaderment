<template>
	<div class="wrapper">
		<Swiper v-if="swiperList.length>1" ref="mySwiper" :options="swiperOption" class="swiper-container">
			<SwiperSlide class="swiper-item" v-for="item of swiperList" :key="item.id">
				<img :src="item.src" alt="">
			</SwiperSlide>
			<div class="swiper-pagination" slot="pagination"></div>
			<!-- <div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div> -->
		</Swiper>
	</div>
</template>
<script>
	import {
		Swiper,
		SwiperSlide
	} from "vue-awesome-swiper";
	import "swiper/css/swiper.css";
	export default {
		name: 'carrousel',
		data() {
			return {
				swiperList: [{
						id: 1,
						src: require('@/assets/images/banner01.jpg')
					},
					{
						id: 2,
						src: require('@/assets/images/banner02.jpg')
					},
					{
						id: 3,
						src: require('@/assets/images/banner03.jpg')
					},
					{
						id: 4,
						src: require('@/assets/images/banner04.jpg')
					},
					{
						id: 5,
						src: require('@/assets/images/banner05.jpg')
					}
				],
				swiperOption: {
					autoplay: { //可选选项，自动滑动
						disableOnInteraction: false, //用户操作后是否禁止自动循环
						delay: 3000 //自自动循环时间
					},
					speed: 1000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
					loop: true, //循环切换
					grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
					// setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
					autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
					scrollbar: '.swiper-scrollbar',
					mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
					observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper

					pagination: {
						el: '.swiper-pagination',
						// type : 'progressbar', //分页器形状
						clickable: true //点击分页器的指示点分页器会控制Swiper切换
					},

					navigation: {
						// nextEl: '.swiper-button-next',
						// prevEl: '.swiper-button-prev'
					}
				}
			}
		},
		components: {
			Swiper,
			SwiperSlide
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		}
	}
</script>
<style lang="scss">
	.swiper-container {
		.swiper-pagination {
				width: 1200px;
				left: 360px;
				bottom: 180px;
				text-align: left;
			.swiper-pagination-bullet {
				background: transparent;
				border: 1px solid #fff;
				width: 16px;
				height: 16px;
				margin-right: 20px;
			}
			.swiper-pagination-bullet-active{
				background: #fff;
			}
		}
	}
</style>
<style scoped="scoped" lang="scss">
	.wrapper {
		width: 100%;
		height: 990px;
		margin-bottom: 100px;
	}

	.swiper-container {

	}

	img {
		display: inline-block;
		height: 990px;
	}
</style>
