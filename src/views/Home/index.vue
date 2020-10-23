<template>
  <div id="home">
    <Header></Header>
    <!-- header -->
    <section id="main">
      <Banner></Banner>
      <div class="about">
        <div class="about_text_en">about leaderment</div>
        <div class="about_text_zn">关于理德铭</div>
        <div class="about_desc">
          深圳市理德铭科技股份有限公司(股票代码：872560)于2013年创立，坐落于‘中国硅谷’
          <span>————</span>深圳，借助其发达的交通网络，便利优越的国际贸易地理位置，完备的工业服务业金融业体系；逐渐成长为国内新三板挂牌上市的国家级高薪技术企业和创新消费电子领导企业。
        </div>
        <div class="about_image">
          <div class="image_box" v-for="item in imgList" :key="item.imgid">
            <img :src="item.url" alt />
            <div class="image_text">{{ item.desc }}</div>
          </div>
        </div>
      </div>
      <div class="advantage">
        <div class="advantage_text">
          <div>Our</div>
          <div>Advantage</div>
        </div>
        <div class="advantage_center">
          <div class="advantage_center_left">
            <ul>
              <li v-for="item in advantageList" :key="item.adlistid">
                <span></span>
                {{ item.name }}
              </li>
            </ul>
          </div>
          <div class="advantage_center_right">
            <div class="center_right_img" v-for=" item in advantageImage" :key="item.advantageid">
              <img :src="item.url" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="brand">
        <div class="brand_title">
          <div class="brand_title_en">OUR BRAND</div>
          <div class="brand_title_zn">我们的品牌</div>
        </div>
        <div class="brand_exhibition" v-for="item in brandList" :key="item.brandid">
          <div class="brand_image">
            <img :src="item.url" alt />
          </div>
          <div class="brand_desc">
            <div class="brand_desc_title">{{ item.title }}</div>
            <div class="brand_desc_text">{{ item.desc }}</div>
            <button>
              了解更多
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
      <div class="join">
        <div class="join_img">
          <img src="@/assets/images/join.jpg" alt />
        </div>
        <div class="join_text">JOIN US</div>
      </div>
      <!-- man1
			<div class="swiper" v-for="item in list" :style="{background:'url(' + item.src + ')'}">
				
      </div>-->
    </section>
    <section id="footer">
      <Footer></Footer>
    </section>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
export default {
  name: "Home",
  data() {
    return {
      imgList: [
        {
          imgid: 1,
          url: require("@/assets/images/about01.jpg"),
          desc: "公司简介",
        },
        {
          imgid: 2,
          url: require("@/assets/images/about02.jpg"),
          desc: "企业文化",
        },
        {
          imgid: 4,
          url: require("@/assets/images/about03.jpg"),
          desc: "发展历程",
        },
      ],
      advantageList: [
        { adlistid: 1, name: "组织优势" },
        { adlistid: 2, name: "全球视野" },
        { adlistid: 3, name: "行业优势" },
        { adlistid: 4, name: "业务优势" },
      ],
      advantageImage: [
        {
          advantageid: 1,
          url: require("@/assets/images/advantage01.jpg"),
          desc: "组织优势",
        },
        {
          advantageid: 2,
          url: require("@/assets/images/advantage02.jpg"),
          desc: "全球视野",
        },
        {
          advantageid: 3,
          url: require("@/assets/images/advantage03.jpg"),
          desc: "行业优势",
        },
        {
          advantageid: 4,
          url: require("@/assets/images/advantage04.jpg"),
          desc: "行业优势",
        },
      ],
      brandList: [
        {
          brandid: 1,
          title: "UNBREAKcable",
          icon: require("@/assets/images/brand01.jpg"),
          url: require("@/assets/images/brand01.jpg"),
          desc:
            "UNBREAKcable的产生源自于我们的热情和对细节的关注，为您的移动设备提供最大保护。我们的产品在您忙碌的一天中伴您左右，让您安心。",
        },
        {
          brandid: 2,
          title: "SYNCWIRE",
          icon: require("@/assets/images/brand01.jpg"),
          url: require("@/assets/images/brand02.jpg"),
          desc:
            "SYNCWIRE成立于2015年，以人为本，致力于开发从手机配件到可穿戴设备等优质产品。我们设计的产品在市场上十分引人注目，具有独特的美感，且非常耐用。",
        },
        {
          brandid: 3,
          title: "ATUMTEK",
          icon: require("@/assets/images/brand01.jpg"),
          url: require("@/assets/images/brand03.jpg"),
          desc:
            "ATUMTEK的使命是让你感受到前所未有的是适度。我们的产品工程师基于自身的肩颈劳损和病痛经理，决心开发出不一样的办公产品，在不牺牲工作效率的前提下，最大理想地提升人体舒适度，是我们能远离久坐带来的背部，肩颈部疼痛。",
        },
        {
          brandid: 4,
          icon: require("@/assets/images/brand01.jpg"),
          title: "addsfit",
          url: require("@/assets/images/brand04.jpg"),
          desc:
            "addsfit的问世源于21世纪全球健身风潮。addsfit开发的首个筋膜枪产品系列，转为加速血液循环，放松肌肉组织而生。未来addsfit将会专耕于运动健康类产品的研发创新中，成长为您的运动专家和健康管理教练。",
        },
      ],
    };
  },
  components: {
    Header,
    Footer,
    Banner,
  },
};
</script>

<style scoped>
@media screen and (max-width: 1200px) {
    #home {
       border: 1px solid red;
    }
}
#home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
#home #header {
	
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  width: 1920px;
}
#home #main {
  z-index: 100;
  width: 1920px;
}
#main .about,
.brand {
  position: relative;
  margin: 0 auto;
  width: 1200px;
  font-family: "franklin gothic heavy";
}
.about .about_text_en,
.brand_title_en {
  font-style: oblique;
  color: transparent;
  font-size: 72px;
  -webkit-text-stroke: 1px #ccc;
  text-align: center;
}
.about .about_text_zn,
.brand_title_zn {
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  letter-spacing: 10px;
  font-weight: bold;
  color: #333;
  font-size: 40px;
}
.about .about_desc {
  margin-top: 70px;
}
.about .about_desc,
.brand_desc_text {
  font-size: 18px;
  line-height: 36px;
  letter-spacing: 5px;
  color: #666;
  font-family: "PingFang SC", "Arial", "思源黑体", "Helvetica Neue", Helvetica,
    "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.about .about_desc span {
  letter-spacing: 0;
  font-size: 1px;
}
.about .about_image {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
}
.about .image_box {
  position: relative;
  width: 370px;
  height: 250px;
}
.about .image_box img {
  width: 370px;
}
.image_box .image_text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-style: oblique;
  color: #fff;
  font-size: 30px;
  width: 100%;
  text-align: center;
  font-weight: bold;
}
#main .advantage {
  margin-top: 100px;
  width: 1920px;
  height: 550px;
  display: flex;
  align-items: center;
  border: 1px solid #474747;
  background: #474747;
  margin-bottom: 100px;
	/* border: 1px solid red; */
}
.advantage_text {
  position: absolute;
  z-index: 1;
  left: 30px;
  color: transparent;
  font-style: oblique;
  font-size: 90px;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
}
.advantage_center {
  display: flex;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.advantage_center_left {
  width: 278px;
  height: 100%;
}
.advantage_center_left ul {
  z-index: 11;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.advantage_center_left li {
  /* border: 1px solid red; */
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-style: oblique;
  font-weight: bold;
  color: #ffffff;
}
.advantage_center_left li span {
  margin-right: 10px;
  background: #a8322e;
  display: inline-block;
  width: 10px;
  height: 35px;
}
.advantage_center_right {
  position: relative;
  width: 922px;
  height: 100%;
  overflow: hidden;
}
.center_right_img {
  position: absolute;
  top: 0;
  left: 0;
}

.brand_exhibition {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}

.brand_desc button {
  position: absolute;
  bottom: 0;
  border: none;
  outline: none;
  background: transparent;
  font-size: 30px;
  font-style: oblique;
  font-family: "PingFang SC", "Arial", "思源黑体", "Helvetica Neue", Helvetica,
    "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: #333;
}
.brand_desc button span {
  display: inline-block;
  color: #a8322e;
  font-size: 30px;
  margin-left: 10px;
  /* font-style: oblique; */
  transform: rotateZ(5deg);
}
.brand_image,
.brand_desc {
  width: 550px;
  height: 350px;
}
.brand_image img{
	display: block;
	width: 550px;
}
.brand_desc {
  padding-top: 20px;
  position: relative;
}

.brand_desc_title {
  text-align: center;
}

.brand_desc_text {
  font-size: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  letter-spacing: 0;
  -webkit-line-clamp: 4;
}
.join {
  position: relative;
  margin-top: 150px;
  width: 1920px;
  height: 550px;
}
.join_img img{
	width: 1920px;
}
.join_img {
  overflow: hidden;
}
.join_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: transparent;
  font-style: oblique;
  -webkit-text-stroke: 1px #a8322e;
  font-size: 200px;
  font-style: oblique;
  font-family: "PingFang SC", "Arial", "思源黑体", "Helvetica Neue", Helvetica,
    "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
#home #footer {
}
</style>