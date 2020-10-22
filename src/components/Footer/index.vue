<template>
	<footer>
		<div class="logo">
			<img class="logo_img" src="@/assets/images/leaderment-logo.png" />
			<ul>
				<li @mouseenter="handleClick(index)" v-for="(item,index) in nav" :key="index">{{ item.name }}</li>
			</ul>
			<div class="code">
				<img src="@/assets/images/qrcode.jpg" alt="">
			</div>
		</div>
		<div class="right">Copyright©2019 Shenzhen Leaderment Technology Co., Ltd. All rights reserved. 粤ICP备19058871号</div>
	</footer>
</template>

<script>
	import Header from "@/components/Header"
	export default {
		name: "Footer",
		data() {
			return {
				nav: [{
					name: "简介",
					path: "/introduce",
					_children: [{
							name: "公司简介",
							path: "/introduce/compintroduce"
						},
						{
							name: "企业文化",
							path: "/introduce/compcourse"
						},
						{
							name: "发展历程",
							path: "/introduce/devhistory"
						}
					]
				}, {
					name: "品牌",
					path: "/brand",
					_children: [{
							name: "UNBREKcable",
							path: "/brand/UNBREKcable"
						},
						{
							name: "SYNCWIRE",
							path: "/brand/SYNCWIRE"
						},
						{
							name: "ATUMTEK",
							path: "/brand/ATUMTEK"
						},
						{
							name: "addsfit",
							path: "/brand/addsfit"
						}
					]
				}, {
					name: "投资者",
					path: "/investor",
					_children: [{
						name: "股票信息",
						path: "/investor/sharesinfo"
					}, {
						name: "业绩报告",
						path: "/investor/perfreport"
					}]
				}, {
					name: "联系",
					path: "/contact ",
					_children: [{
						name: "商务合作",
						path: "/contact/businesscooperation"
					}, {
						name: "加入我们",
						path: "/contact/joinus"
					}]
				}]
			}
		},
		methods: {
			handleClick(index) {

			}
		},
		components: {
			Header
		}
	}
</script>

<style scoped lang="scss">
	footer {
		height: 400px;
		position: relative;
		background: #f9f9f9;

		.logo {
			width: 1200px;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			padding-top: 40px;

			.logo_img {

				flex: 1;
				display: block;
				height: 40px;
			}

			ul {
				flex: 3;
				padding: 10px;
				display: flex;
				justify-content: flex-end;
				color: #333;
				font-size: 16px;

				li {
					margin-left: 94px;
				}
			}

			.code {
				flex: 1;
				display: flex;
				justify-content: flex-end;

				img {
					width: 150px;
				}

			}
		}

		.right {
			font-size: 16px;
			color: #666;
			position: absolute;
			bottom: 15px;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>
