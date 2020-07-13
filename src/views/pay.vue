<template>
    <div>
        <!-- Top tab -->
        <header_></header_>
        <div class="bgf5 clearfix">
            <div class="top-user">
                <div class="inner">
                    <router-link class="logo" to="/"><img src="@/assets/images/icons/logo.png" alt="TP6" class="cover">
                    </router-link>
                    <div class="title">Order Details</div>
                </div>
            </div>
        </div>
        <div class="content clearfix bgf5">
            <section class="user-center inner clearfix">
                <div class="user-content__box clearfix bgf">
                    <div class="shopcart-form__box">
                        <div class="shop-order__detail">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th width="120">Image</th>
                                    <th width="300">Goods Inform</th>
                                    <th width="150">Price</th>
                                    <th width="200">Quantity</th>
                                    <th width="80">Total price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(v,k) in orderInfo.malls">
                                    <th scope="row"><a>
                                        <div class="img">
                                            <img :src="v.image" alt="" style="width: 100px;height: 100px;" class="cover">
                                        </div>
                                    </a></th>
                                    <td>
                                        <div class="name ep3" v-text="v.title"></div>
                                        <div class="type c9" v-text="v.sku"></div>
                                    </td>
                                    <td>€<span v-text="v.price"></span></td>
                                    <td v-text="v.num"></td>
                                    <td>€<span v-text="(v.price*v.num).toFixed(2)"></span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="shop-cart__info clearfix">
                            <div class="pull-left text-left">
                                <div class="info-line text-nowrap">Pay Time：<span class="c6"
                                                                              v-text="orderInfo.create_time"></span>
                                </div>
                                <div class="info-line text-nowrap">OrderId：<span class="c6" v-text="orderInfo.id"></span>
                                </div>
                            </div>
                            <div class="pull-right text-right">
                                <div class="info-line">Total：<b class="fz18 cr">€<span v-text="orderInfo.total_price"></span></b>
                                </div>
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
    import header_ from '../components/header_'
    import footer_ from '../components/footer_'
    import {orderInfo} from "../lib/interface";

    export default {
        components: {header_,footer_},
        name: "order",
        data() {
            return {
                "modalPay": false,
                "id": 0,
                "orderInfo": {},
            }
        },
        mounted() {
            this.id = this.$route.query.id;
            if (!this.id) {
                this.$router.replace("/");
                return;
            }
            this.getOrderInfo();
        },
        methods: {
            async getOrderInfo() {
                let result = await orderInfo({"id": this.id});
                if (result.status !== 1) {
                    this.$router.replace("/");
                    return;
                }
                this.orderInfo = result.result;
            },
        }
    }
</script>

<style scoped>

</style>
