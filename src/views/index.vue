<template>
    <div>
        <!-- 顶部tab -->
        <header_></header_>
        <!-- 搜索栏 -->
        <search></search>
        <!-- 首页导航栏 -->
        <div class="top-nav bg3">
            <div class="nav-box inner">
                <div class="all-cat">
                    <div class="title"><i class="iconfont icon-menu"></i> All Category</div>

                    <div class="cat-list__box">
                        <div class="cat-box" v-for="(v,k) in categoryInfo">
                            <div class="title">
                                <i class="iconfont icon-skirt ce"></i>
                                <span v-text="v.name" @click="category(v.category_id)"></span>
                            </div>
                            <ul class="cat-list clearfix">
                                <li @click="category(v1.category_id)" v-for="(v1,k1) in v.list" v-text="v1.name"></li>
                            </ul>
                            <div class="cat-list__deploy">
                                <div class="deploy-box">
                                    <div class="genre-box clearfix" v-for="(v1,k1) in v.list">
                                        <span class="title"><span v-text="v1.name"></span>：</span>
                                        <div class="genre-list">
                                            <a @click="category(v2.category_id)" v-for="(v2,k2) in v1.list"
                                               v-text="v2.name"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="nva-list">
                    <a href="/">
                        <li class="active">INDEX</li>
                    </a>
                </ul>
            </div>
        </div>
        <!-- 顶部轮播 -->
        <div class="swiper-container banner-box">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(v,k) in  bannerInfo">
                    <router-link :to="'/detail?id='+v.id">
                        <img :src="v.image"
                             class="cover">
                    </router-link>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import header_ from '../components/header_'
    import search from '../components/search'
    import {category, banner} from "../lib/interface";

    export default {
        components: {header_, search},
        name: "index",
        data() {
            return {
                categoryInfo: [],
                bannerInfo: [],
                isShow: 0,
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.isShow = 1;
                setTimeout(function () {
                    var banner_swiper = new Swiper('.banner-box', {
                        autoplayDisableOnInteraction: false,
                        pagination: '.banner-box .swiper-pagination',
                        paginationClickable: true,
                        autoplay: 5000,
                    });
                    // 新闻列表滚动
                    var notice_swiper = new Swiper('.notice-box .swiper-container', {
                        paginationClickable: true,
                        mousewheelControl: true,
                        direction: 'vertical',
                        slidesPerView: 10,
                        autoplay: 2e3,
                    });
                }, 2000);
            });
            this.getCategoryInfo();
            this.getBannerInfo();
        },
        methods: {
            category(id) {
                this.$router.replace("/category?cid=" + id);
            },
            async getCategoryInfo() {
                let result = await category();
                this.categoryInfo = result.result;
                console.log(this.categoryInfo);
            },
            async getBannerInfo() {
                let result = await banner();
                this.bannerInfo = result.result;
            },
            }
    }
</script>

<style scoped>

</style>
