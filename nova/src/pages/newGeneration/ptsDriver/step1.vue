<template>
  <div class="container" v-show="show">
    <HeaderNav :productTitle=pageTitle></HeaderNav>
    <section class="content">
      <div class="product-wrapper">
        <img src="http://test-iicp-dmzstg.pingan.com.cn/icp/downloadFile.do?fileName=80476820258462814314.png&channelType=0" alt="产品主页" class="product-img"></img>
        <p class="product-desc"> {{ productDesc }}</p>
      </div>
      <div class="main-content">
        <ul class="tab-nav" :class="{ fixed: isFixed }">
          <li class="tab-item" :class="{ active: item.isActive }" v-for="(item, $index) in navList" :key="item" @click="selectTab(item, $index)">
            <span>
              {{ item.name }}
            </span>
          </li>
        </ul>
  
        <div class="product-intro">
          <p class="img-title">产品特点</p>
          <img src="http://test-iicp-dmzstg.pingan.com.cn/icp/downloadFile.do?fileName=80805934704050650023.png&channelType=0" alt="产品特色">
        </div>
  
        <!-- 操作区域-->

        <div class="product-intro">
          <p class="img-title">投保须知</p>
          <img src="http://test-iicp-dmzstg.pingan.com.cn//icp/downloadFile.do?fileName=80805935251292015576.png&channelType=0" alt="产品特色">
        </div>
  
        <div class="product-intro">
          <p class="img-title">理赔指南</p>
          <img src="http://test-iicp-dmzstg.pingan.com.cn//icp/downloadFile.do?fileName=80805935505514287168.png&channelType=0" alt="产品特色">
        </div>
  
        <div class="product-intro">
          <p class="img-title">常见问题</p>
          <img src="http://test-iicp-dmzstg.pingan.com.cn//icp/downloadFile.do?fileName=80805936769916790296.png&channelType=0" alt="产品特色">
        </div>
      </div>
    </section>
    <footer>
      <div class="footer-wrapper">
        <a href="javascript:void(0);" class="left">
          <span>100</span>
          <span>元</span>
        </a>
        <a href="javascript:void(0);" class="right" @click="panelHandler">
          立即投保
        </a>
      </div>
    </footer>
    <popup v-model="showModal" position=bottom @on-hide="counterHandlerHide" @on-show="counterHandlerShow">
      <div class="group-wrapper">
        <group title="保险信息" titleColor="#000">
          <datetime title="保险起期" placeholder="请选择保险起期" start-date="1900-01-01" end-date="2100-01-10" @on-change="changeStartTime" required ref="startDatee"></datetime>
          <datetime title="保险止期" placeholder="请选择保险止期" start-date="1900-01-01" end-date="2100-01-10" @on-change="changeEndTime" required ref="endDatee"></datetime>
          <cell title="保险期限"> {{ days }} 天</cell>
          <cell title="保险份数"> {{ num }} 份</cell>
        </group>
      </div>
    </popup>
    <toast v-model="showToast" type=text position=middle :time="2000" width="80%" @on-hide="hideToast"  >
      保险起期不能超过 {{ this.maxInsuranceDate }}
    </toast>
  </div>
</template>
  
<script>

import HeaderNav from '@/components/Header/Header'
import Vue from 'vue'
import { Group, Datetime, Cell, Popup, Toast } from 'vux'

export default {

  data () {
    return {
      showToast: false,
      days: 1,
      num: 2,
      startDate: '',
      endDate: '',
      maxInsuranceDate: '2050-01-01',
      maxUnderWriteDay: 90,
      maxUnderWriteMonth: '',
      isFixed: false,
      showModal: false,
      pageTitle: '',
      productDesc: '',
      count: 0,
      show: false,
      loading: true,
      clickCounter: 0,
      navList: [
        {
          name: '产品介绍',
          isActive: true
        },
        {
          name: '投保须知',
          isActive: false
        },
        {
          name: '理赔指南',
          isActive: false
        },
        {
          name: '常见问题',
          isActive: false
        }
      ]
    }
  },

  components: {
    HeaderNav,
    Group,
    Datetime,
    Cell,
    Popup,
    Toast
  },

  created () {
    var productData = JSON.parse(sessionStorage.getItem('productData'))
    console.log(productData)
    this.pageTitle = productData.planInfoList[0].localProMap.planName || '产品详情'
    this.productDesc = '平安借款人意外伤害保险'
  },

  methods: {
    hideToast () {
      console.log('hide toast')
      this.showToast = false
    },
    panelHandler () {
      this.showModal = true
      this.clickCounter++
      if (this.clickCounter >= 2) {
        console.log('校验数据, 跳转路由')
        this.$router.push('step2')
      }
    },
    counterHandlerShow () {
      this.clickCounter++
      console.log(this.clickCounter)
    },
    counterHandlerHide () {
      this.clickCounter = 0
    },
    changeStartTime (val) {
      // 选择完成之后进行起始时间的范围判断
      this.startDate = val
      console.log(this.startDate)
      this.showToast = true
    },

    changeEndTime (val) {
      this.endDate = val
      console.log(this.endDate)
    },

    selectTab (item, index) {
      console.log(index)
      this.$nextTick(function () {
        this.navList.forEach(function (item) {
          Vue.set(item, 'isActive', false)
        })
        Vue.set(item, 'isActive', true)
      })

      let jump = document.querySelectorAll('.product-intro')
      let total = jump[index].offsetTop
      var navHeight = document.querySelector('.tab-nav').clientHeight
      document.body.scrollTop = total - navHeight
      document.documentElement.scrollTop = total - navHeight
    },
    handelScroll () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let guard = document.querySelector('.product-intro').offsetTop - document.querySelector('.tab-nav').clientHeight
      console.log('scrollTop:' + scrollTop)
      console.log('guard: ' + guard)
      if (scrollTop > guard) {
        this.isFixed = true
        console.log('fix!')
      } else {
        this.isFixed = false
      }
    },
    onOverlayClick () {
      console.log('遮罩消失')
      this.showModal = false
    }
  },

  mounted () {
    var _this = this
    let imgs = document.querySelectorAll('img')
    console.log(imgs)
    Array.from(imgs).forEach((item) => {
      let img = new Image()
      img.onload = () => {
        _this.count++
      }
      img.src = item.getAttribute('src')
    })
    _this.$nextTick(function () {
      window.addEventListener('scroll', _this.handelScroll)
    })
  },
  watch: {
    count (val, oldval) {
      var imgNum = document.querySelectorAll('img').length
      if (val === imgNum) {
        this.show = true
        this.loading = false
        console.log('图片加载完毕')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/helpers/_mixin';
@import '~@/assets/scss/base/_variable';

// todo 在 variable 中统一管理
$border-color: #dcdcdc;
$border-color-active: #000;
$nav-color: #686868;
$nav-color-active: #232323;
$img-title-color: #f7f7f7;
$button-blue-color: #3bf;

body {
  background: #fff;
}

.group-wrapper {
  padding-bottom: 50px;
}

.modal {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
  z-index: 2;
  opacity: 0;
  animation: fade .2s;
  display: none;

  .modal-body {
    position: fixed;
    width: 100%;
    z-index: 999;
    background: #fff;
    bottom: 50px;
  }

  &.showModal {
    opacity: 1;
    display: block;
  }

  .labels {
    padding: 0 10px;
    color: #555;

    .label-item {
      position: relative;
      line-height: 50px;
      border-bottom: 1px solid $border-color;
      @include font-dpr(14px);
      display: flex;

      .left {
        height: 50px;
        overflow: hidden;
      }

      .center {
        flex: 1;
        text-align: right;
        padding-right: 5px;
      }

      .right {
        width: 10px;
      }
    }
  }
}

.container {
  animation: fade .5s;
}

@keyframes fade {
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
}

@-webkit-keyframes fade {
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
}

.product-wrapper {
  position: relative;

  .product-desc {
    text-align: left;
    @include font-dpr(15px);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px;
    color: #fff;
    background: rgba(0, 0, 0, .3);
  }
}

.main-content {
  padding-bottom: 50px;
  .tab-nav {
    display: flex;
    line-height: 45px;
    text-align: center;
    border-bottom: 1px solid $border-color;

    &.fixed {
      position: fixed;
      top: 0;
      width: 100%;
      background: #fff;
    }

    .tab-item {
      background: #fff;
      flex: 1;
      color: $nav-color;
      @include font-dpr(15px);
      transition: .3s ease;

      &.active {
        @include font-dpr(16px);
        font-weight: bold;
        color: $nav-color-active;
        border-bottom: 1px solid $border-color-active;
      }
    }
  }

  .img-title {
    background: $img-title-color;
    @include font-dpr(15px);
    line-height: 35px;
    padding-left: 15px;
  }
}

.footer-wrapper {
  position: fixed;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  line-height: 50px;
  display: flex;
  text-align: center;
  border-top: 1px solid $border-color;

  a {
    flex: 1;
    @include font-dpr(16px);
  }

  .left {
    color: currentColor;
    background: #fff;
    color: $button-blue-color;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .right {
    color: #fff;
    background-color: $button-blue-color
  }
}
</style>
