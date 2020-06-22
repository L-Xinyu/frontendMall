<template>
    <div>
        <!-- Top tab -->
        <header_></header_>
        <!-- Search -->
        <search></search>
        <!-- Nav -->
        <div class="top-nav bg3">
            <div class="nav-box inner">
                <div class="all-cat">
                    <div class="title"><i class="iconfont icon-menu"></i> All Category</div>
                </div>
                <ul class="nva-list">
                    <a href="/">
                        <li>INDEX</li>
                    </a>
                </ul>
            </div>
        </div>
        <div class="content inner">
            <section class="item-show__div item-show__head clearfix">
                <div class="pull-left">
                    <ol class="breadcrumb">
                        <li><a href="/">INDEX</a></li>
                        <li>
                            Product Detail
                        </li>
                        <li class="active" v-text="result.title"></li>
                    </ol>
                    <div class="item-pic__box" id="magnifier">
                        <div class="small-box">
                            <img class="cover" :src="firstImg">
                            <span class="hover"></span>
                        </div>
                        <div class="thumbnail-box">
                            <div class="thumb-list">
                                <ul class="wrapper clearfix">
                                    <li v-for="(v,index) in result.image" @click="changeImg(v)" :key="index"
                                        class="item" :data-src="v"><img class="cover" :src="v"></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="item-info__box">
                        <div class="item-title">
                            <div class="name ep2" v-text="result.title"></div>
                        </div>
                        <div class="item-price bgf5">
                            <div class="price-box clearfix">
                                <div class="price-panel pull-left">
                                    Price：<span class="price">€<span v-text="result.price"></span> <s
                                        class="fz16 c9">€<span v-text="result.cost_price"></span></s></span>
                                </div>
                            </div>
                        </div>
                        <ul class="item-ind-panel clearfix">
                            <li class="item-ind-item">
                                <span class="ind-label c9">Cumulative sales </span>
                                <span class="ind-count cr" v-text="result.sales_count"></span>
                            </li>
                        </ul>
                        <div class="item-key">
                            <div class="item-amount clearfix bgf5">
                                <div class="item-metatit">Quantity：</div>
                                <div class="amount-box">
                                    <div class="amount-widget">
                                        <input class="amount-input" value="1" maxlength="8" title="Please enter the purchase amount" type="text">
                                        <div class="amount-btn">
                                            <a class="amount-but add"></a>
                                            <a class="amount-but sub"></a>
                                        </div>
                                    </div>
                                    <div class="item-stock"><span style="margin-left: 10px;">Stock
                                        <b id="Stock" v-text="result.stock"></b> Now</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item-action clearfix bgf5">
                                <a v-if="result.stock <= 0" disabled="disabled"
                                   style="float: left;background: gray;border: gray" rel="nofollow"
                                   data-addfastbuy="true" role="button"
                                   class="item-action__basket">
                                    <i class="iconfont icon-shopcart"></i> Add Cart
                                </a>
                                <a v-else @click="addCart"
                                   style="float: left;" rel="nofollow"
                                   data-addfastbuy="true" role="button"
                                   class="item-action__basket">
                                    <i class="iconfont icon-shopcart"></i> Add Cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pull-right picked-div">
                    <div class="lace-title">
                        <span class="c6">Recommend</span>
                    </div>
                    <div class="swiper-container picked-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <router-link class="picked-item" :to="'/detail?id='+v.id" v-for="(v,k) in recommend">
                                    <img :src="v.image" alt="" class="cover">
                                    <div class="look_price">€<span v-text="v.price"></span></div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="item-show__div item-show__body posr clearfix">
                <div class="item-nav-tabs">
                    <ul class="nav-tabs nav-pills clearfix" role="tablist" id="item-tabs">
                        <li role="presentation" class="active"><a href="#detail" role="tab" data-toggle="tab"
                                                                  aria-controls="detail" aria-expanded="true">Product Detail</a>
                        </li>
                    </ul>
                </div>
                <div class="pull-left">
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane fade in active" id="detail" aria-labelledby="detail-tab">
                            <div class="item-detail__info clearfix">
                                <div class="record">Product Name：<span v-text="result.title"></span>
                                </div>
                                <div class="record">Product Code：</div>
                                <div class="record">Added time：</div>
                                <div class="record">Product stock：<span v-text="result.stock"></span>
                                </div>
                            </div>
                            <div class="rich-text">
                                <p style="text-align: center;" v-if="result && result.detail"
                                   v-html="result.detail.d2"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <footer_></footer_>
    </div>
</template>
<script>
    import "@/assets/js/jquery.zoom.js"
    import "@/assets/js/jquery.magnifier.js"
    import "@/assets/js/jquery.magnifier.js"
    import "@/assets/js/jquery.zoom.js"
    import header_ from '../components/header_'
    import search from '../components/search'
    import footer_ from '../components/footer_'
    import {detail} from "../lib/interface";

    export default {
        components: {header_, search, footer_},
        name: "detail",
        data() {
            return {
                id: 0,
                result: {},
                recommend: [],
                firstImg: "",
            }
        },
        watch: {
            $route() {
                this.id = this.$route.query.id;
                this.getResult();
            },
        },
        mounted() {
            this.id = this.$route.query.id;
            this.getResult();

            $('#descCate').smartFloat(0);
            $('.dc-idsItem').click(function () {
                $(this).addClass('selected').siblings().removeClass('selected');
            });
            $('#item-tabs a[data-toggle="tab"]').on('show.bs.tab', function (e) {
                $('#descCate #' + $(e.target).attr('aria-controls') + '-tab')
                    .addClass('in').addClass('active').siblings()
                    .removeClass('in').removeClass('active');
            });
            $('#magnifier').magnifier();
            $('.vip-price-panel').click(function () {
                if ($(this).hasClass('active')) {
                    $('.all-price__box').stop().slideUp('normal', function () {
                        $('.vip-price-panel').removeClass('active').find('.iconfont').removeClass('icon-up').addClass('icon-down');
                    });
                } else {
                    $(this).addClass('active').find('.iconfont').removeClass('icon-down').addClass('icon-up');
                    $('.all-price__box').stop().slideDown('normal');
                }
            });
            $('.amount-input').onlyReg({reg: /[^0-9]/g});
            var that = this;
            $('.amount-widget').on('click', '.amount-but', function () {
                var num = parseInt($('.amount-input').val());
                if (!num) num = 0;
                if ($(this).hasClass('add')) {
                    if (num > that.result.stock - 1) {
                        return DJMask.open({
                            width: "300px",
                            height: "100px",
                            content: "The quantity you entered exceeds the inventory limit!"
                        });
                    }
                    $('.amount-input').val(num + 1);
                } else if ($(this).hasClass('sub')) {
                    if (num == 1) {
                        return DJMask.open({
                            width: "300px",
                            height: "100px",
                            content: "The quantity you entered is incorrect!"
                        });
                    }
                    $('.amount-input').val(num - 1);
                }
            });
        },
        methods: {
            async getResult() {
                let result = await detail({"id": this.id});
                this.result = result.result;
                if (result.status === 0) {
                    this.$router.replace("/");
                    return;
                }
                this.firstImg = this.result.image[0];
            },
            changeImg(img) {
                this.firstImg = img;
            }
        }
    }
</script>

<style scoped>

</style>
