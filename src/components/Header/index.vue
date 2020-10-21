<template>
	<transition name="height">
		<header>
			<router-link class="login" to="/" tag="div">
				<img src="@/assets/images/leaderment-logo.png" alt="hello" title="hello">
			</router-link>
			<ul>
				<li @click="handleClick(item,index)" v-for="(item,index) in nav" :key="index">
					{{item.name}}
				</li>
			</ul>
		</header>
	</transition>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				navid: 0,
				isshow: true,
				nav: [{
					name: "首页",
					path: "/",
					_children: []
				}, {
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
			handleClick(item, index) {
				this.isshow = !this.isshow
				// console.log(item, index)
				// if (item.id === index && item._children.length > 0) {
				// 	return this.isshow = true
				// } else {
				// 	return this.isshow = false
				// }
				// this.isshow = !this.isshow
			}
		}
	}
</script>

<style scoped>
	.height-enter-active, .height-leave-active {
	  transition: height 5s;
	}
	.height-enter, .height-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  height: 400px;
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 1200px;
		height: 90px;
		margin: 0 auto;
	}

	header div {
		flex: 2;
	}

	header img {
		height: 40px;
	}

	header ul {
		flex: 3;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		color: #333;
		font-size: 16px;
		/* font-family: 'PingFang SC', 'Arial', '思源黑体', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif; */
	}

	header ul li {
		padding-left: 60px;
		cursor: pointer;
		font-family: 'PingFang SC', 'Arial', '思源黑体', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
	}
</style>
