<style lang='scss' scoped>
@import 'apply';
.wrap-item-right {
    .vux-datetime {
        display: inline-block;
    }
    .vux-cell-box {
        display: inline-block;
        &:before {
            display: none;
        }
    }
}
</style>
<template>
    <div class="page">
        <header>
            <a class="btn-back" href="javascript:window.history.back();">返回</a>
            <p class="title">{{pagetTitle}}</p>
        </header>
        <div class="content" v-show="isPageShow">
            <section class="banner"> <img class="banner-img" src="http://iicp.pingan.com.cn/icp/downloadFile.do?fileName=80236972978118507175.png&amp;channelType=0">
                <p class="banner-desc">平安熊孩子，更好地探索世界 </p>
            </section>
            <section class="nav">
                <ul class="nav-tab" @click="toggleNav">
                    <li class="nav-tab-item active" data-scroll-to="product"><a href="javascript:void(0);">产品介绍</a></li>
                    <li class="nav-tab-item" data-scroll-to="notice"><a href="javascript:void(0);">投保须知</a></li>
                    <li class="nav-tab-item" data-scroll-to="claim"><a href="javascript:void(0);">理赔指南</a></li>
                    <li class="nav-tab-item" data-scroll-to="quesion"><a href="javascript:void(0);">常见问题</a></li>
                </ul>
            </section>
            <section class="product" id="product">
                <div class="product-desc"> <img src="http://iicp.pingan.com.cn/icp/downloadFile.do?fileName=80237462758215193107.png&amp;channelType=0"></div>
                <div class="product-scheme">
                    <div class="form-group form-group-select">
                        <label> 产品方案：</label>
                        <form>
                            <select class="form-control form-control-select" id="productScheme" @change="productChange">
                                <option value="04000496">平安熊孩子保险（百度）方案一</option>
                                <option value="04000497">平安熊孩子保险（百度）方案二</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div class="product-detail">
                    <h2><span>保障内容</span><span>保障金额(元)</span></h2>
                    <ul class="product-detail-list">
                        <li class="item">
                            <p class="item-title"><span>第三者人身伤亡</span><span>50000</span></p>
                            <p class="item-desc">暂无描述</p>
                        </li>
                        <li class="item">
                            <p class="item-title"><span>第三者财产损失</span><span>5000</span></p>
                            <p class="item-desc">暂无描述</p>
                        </li>
                    </ul>
                    <p class="more-detail" @click="readMore"><span id="moreDetail" data-plancode="04000496">更多详情请查看《保险条款》</span></p>
                </div>
            </section>
            <section class="notice" id="notice">
                <h2 class="wrap-title">投保须知</h2>
                <div class="wrap-body notice-detail"> <img src="http://iicp.pingan.com.cn/icp/downloadFile.do?fileName=80242425187817653602.png&amp;channelType=0"> </div>
            </section>
            <section class="claim" id="claim">
                <h2 class="wrap-title">理赔指南</h2>
                <div class="wrap-body claim-detail"> <img src="http://iicp.pingan.com.cn/icp/downloadFile.do?fileName=80237462128354304207.png&amp;channelType=0"> </div>
            </section>
            <section class="quesion" id="quesion">
                <h2 class="wrap-title">常见问题</h2>
                <div class="wrap-body quesion-detail"> <img src="http://iicp.pingan.com.cn/icp/downloadFile.do?fileName=80237464529521934770.png&amp;channelType=0"> </div>
            </section>
            <div class="slide-up-wrap" v-bind:class="slideUpWrapActive">
                <ul class="wrap">
                    <li class="wrap-item icon-active begin-date-time">
                        <label>保险起期</label>
                        <div class="wrap-item-right">
                            <datetime v-model="Birthday" @on-change="birthdayChange" :start-date="'1900-01-01'" :end-date="'2200-12-31'"></datetime>
                            <span class="time">00时</span> </div>
                    </li>
                    <li class="wrap-item">
                        <label>保险止期</label>
                        <div class="wrap-item-right">
                            <!-- <picker :data="cityList" :columns=3 v-model="city" @on-change='cityChange'></picker> -->
                            <popup-picker :title="cityTitle" :data="cityList" :columns="3" v-model="city" show-name @on-change="cityChange"></popup-picker>
                            <span class="time">24时</span>
                        </div>
                    </li>
                    <li class="wrap-item">
                        <label>保险期限</label>
                        <div class="wrap-item-right" id="insuranceTime">12月</div>
                    </li>
                    <li class="wrap-item">
                        <label>投保份数</label>
                        <div class="wrap-item-right"><span id="applyNum">1</span>份</div>
                    </li>
                </ul>
                <div class="ui-mask" @click="hideSlideUpWrap">遮罩</div>
            </div>
            <footer>
                <a class="btn" href="javascript:void(0);"><span id="packageAmount">38</span>元</a>
                <a class="btn btn-red" id="buy" href="javascript:void(0);" @click="goToApply">立即投保</a>
            </footer>
        </div>
        <div class="iframe-container" v-show="isIframeShow">
            <iframe :src="iframeSrc"></iframe>
        </div>
        <!-- <alert v-model="show" :title="'提示'" @on-show="onShow" @on-hide="onHide"> {{ msg}}</alert> -->
        <!-- <loading v-model="isLoading" :text="loadingText"></loading> -->
    </div>
</template>
<script>
// import 'promise-polyfill'
// import 'whatwg-fetch'
import {
    mapState,
    mapGetters
} from 'vuex'
import {
    // Alert,
    // Loading,
    Datetime,
    PopupPicker
} from 'vux'

export default {
    components: {
        // Alert,
        // Loading,
        Datetime,
        PopupPicker
    },
    data() {
        return {
            iframeSrc: '',
            isIframeShow: false,
            pagetTitle: '',
            isPageShow: true,
            slideUpWrapActive: {
                active: false
            },
            localCount: 'sussss',
            show: false,
            isLoading: false,
            loadingText: '正在加载...',
            msg: '被保险人年龄不能为空啊啊',
            Birthday: '',
            cityTitle: '选择城市',
            cityList: [{
                name: '中国',
                value: 'china',
                parent: 0
            }, {
                name: '美国',
                value: 'USA',
                parent: 0
            }, {
                name: '广东',
                value: 'china001',
                parent: 'china'
            }, {
                name: '广西',
                value: 'china002',
                parent: 'china'
            }, {
                name: '美国001',
                value: 'usa001',
                parent: 'USA'
            }, {
                name: '美国002',
                value: 'usa002',
                parent: 'USA'
            }, {
                name: '广州',
                value: 'gz',
                parent: 'china001'
            }, {
                name: '深圳',
                value: 'sz',
                parent: 'china001'
            }, {
                name: '广西001',
                value: 'gx001',
                parent: 'china002'
            }, {
                name: '广西002',
                value: 'gx002',
                parent: 'china002'
            }, {
                name: '美国001_001',
                value: '0003',
                parent: 'usa001'
            }, {
                name: '美国001_002',
                value: '0004',
                parent: 'usa001'
            }, {
                name: '美国002_001',
                value: '0005',
                parent: 'usa002'
            }, {
                name: '美国002_002',
                value: '0006',
                parent: 'usa002'
            }],
            city: []
        }
    },

    created() {
        // this.$vux.loading.hide({
        //     loading: false
        // });
        this.pagetTitle = '百度糯米';
        // console.log('实例创建完毕created.....');
        // console.log(this.store);
        this.$store.dispatch('saveCloudProductInfo', 'cloudProductInfo');

        let Birthday = new Date();
        let year = Birthday.getFullYear();
        let month = Birthday.getMonth() + 1;
        let day = Birthday.getDate();
        this.Birthday = year + '-' + (month > 10 ? month : '0' + month) + '-' + day;
    },

    mounted() {
        // console.log('挂载DOM完毕mounted.....');
        // console.log('查询参数对象：', this.$route.query);
        // console.log('this：', this);
        // this.getData();
        // this.showPlugin();

        // this.$store.dispatch('updateLoadingStatus', {
        //     isLoading: false
        // });
    },
    computed: {
        ...mapGetters({
            countPlusLocalState: 'doneTodos'
        }),
        fuck() {
            return this.$store.state.cloudProductInfo
        },
        sBirthday() {




        }
    },
    methods: {
        cityChange() {
            console.log(this.city);
            this.cityTitle = '';
        },
        clearValue() {
            this.Birthday = '';
        },
        birthdayChange(datetime) {
            console.log(datetime);
        },
        readMore() {
            this.setIframe('https://vux.li/demos/v2/?x-page=v2-doc-home#/demo');
        },
        onShow() {
            console.log('onShow.....');
        },
        onHide() {
            console.log('onHide.....');
            this.birthdayChange();
        },
        toggleNav() {
            this.$store.dispatch('saveCloudProductInfo', 'cloudProductInfo has change');
            this.show = true;
        },
        productChange() {
            var name = 'prodcutInfo';

        },
        getData() {
            fetch('static/test.json')
                .then(function(response) {
                    console.log(response);
                    return response.json();
                }).then(function(json) {
                    console.log('parsed json', json);
                }).catch(function(ex) {
                    console.log('parsing failed', ex);
                    alert('fetch进入catch函数');
                });
        },
        goToApply() {
            if (this.slideUpWrapActive.active) {
                this.$router.push('apply');
            }
            this.slideUpWrapActive.active = true;
        },
        hideSlideUpWrap() {
            this.slideUpWrapActive.active = false;
        },
        setIframe(src) {
            var headerTitle = this.pagetTitle;
            this.isPageShow = false;
            this.pagetTitle = '保险条款';
            this.isIframeShow = true;
            this.iframeSrc = src;

            var self = this;
            window.history.pushState({
                title: '#insuranceClause'
            }, '#insuranceClause', window.location.href + '#insuranceClause');
            window.onpopstate = function() {
                self.isPageShow = true;
                self.pagetTitle = headerTitle;
                self.isIframeShow = false;
            };
        },
    }
}
</script>
