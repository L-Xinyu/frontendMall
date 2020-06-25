<template>
    <div>
        <!-- Top tab -->
        <header_></header_>
        <div class="content clearfix bgf5">
            <section class="user-center inner clearfix">
                <div class="user-content__box clearfix bgf">
                    <div class="shopcart-form__box">
                        <div class="shop-order__detail">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th width="120"></th>
                                    <th width="300">Goods Inform</th>
                                    <th width="150">Price</th>
                                    <th width="200">Quantity</th>
                                    <th width="80">Total price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row"><a>
                                        <div class="img">
                                            <img alt="" style="width: 100px;height: 100px;" class="cover">
                                        </div>
                                    </a></th>
                                    <td>
                                        <div class="name ep3"></div>
                                        <div class="type c9"></div>
                                    </td>
                                    <td>€<span v-text=""></span></td>
                                    <td v-text=""></td>
                                    <td>€<span v-text=""></span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="shop-cart__info clearfix">
                            <div class="pull-left text-left">
                                <div class="info-line text-nowrap">Pay Time：<span class="c6"></span>
                                </div>
                                <div class="info-line text-nowrap">OrderId：<span class="c6"></span>
                                </div>
                            </div>
                            <div class="pull-right text-right">
                                <div class="info-line">Total：<b class="fz18 cr">€</b>
                                </div>
                            </div>
                        </div>
                        <div class="pay-mode__box">
                            <div class="radio-line radio-box">
                                <label class="radio-label ep">
                                    <input name="pay-mode" value="1" autocomplete="off" type="radio">
                                    <i class="iconfont icon-radio"></i>
                                    <img src="@/assets/images/icons/alipay.png" alt="Alipay">
                                </label>
                            </div>
                            <div class="radio-line radio-box">
                                <label class="radio-label ep">
                                    <input name="pay-mode" value="2" autocomplete="off" type="radio">
                                    <i class="iconfont icon-radio"></i>
                                    <img src="@/assets/images/icons/paywechat.png" alt="Wechat">
                                </label>
                            </div>
                        </div>
                        <div class="user-form-group shopcart-submit">
                            <button type="submit" class="btn" @click="pay">Pay Order</button>
                        </div>
                    </div>
                </div>
                <Modal v-model="modalPay" title="Wechat">
                    <p slot="header" style="color:#f60;text-align:center">
                        <span>Please Use Wechat</span>
                    </p>
                    <p style="color: #f60;text-align: center;">Pay Price：€<span></span></p>
                    <div id="qrcode" style="margin-top: 10px;margin:0 auto;">
                        <img :src="wxCode" width="100%"/>
                    </div>
                    <div slot="footer">
                        <Button size="large" @click="modalPay = false">Close</Button>
                    </div>
                </Modal>
            </section>
        </div>
    </div>
</template>

<script>
    import header_ from '../components/header_'

    export default {
        components: {header_},
        name: "order",
        data() {
            return {
                "modalPay": false,
                "id": 0,
            }
        },
        mounted() {
            this.id = this.$route.query.id;
            if (!this.id) {
                this.$router.replace("/");
                return;
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
