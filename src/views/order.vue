<template>
    <div>
        <!-- Top tab -->
        <header_></header_>
        <div class="bgf5 clearfix">
            <div class="top-user">
                <div class="inner">
                    <router-link class="logo" to="/"><img src="@/assets/images/icons/logo.png" alt="TP6" class="cover">
                    </router-link>
                    <div class="title">Submit Order</div>
                </div>
            </div>
        </div>
        <!-- Top Title -->
        <div class="content clearfix bgf5">
            <section class="user-center inner clearfix">
                <div class="user-content__box clearfix bgf">
                    <div class="shop-title">Choose Address</div>
                    <div class="shopcart-form__box">
                        <div class="addr-radio">
                            <div class="radio-line radio-box" :id="'address'+k" :val="v.address_id"
                                 v-for="(v,k) in addressList">
                                <label class="radio-label ep">
                                    <input name="addr" :value="v.address_id" autocomplete="off" type="radio" :id="'radio_'+k">
                                    <i class="iconfont icon-radio"></i>
                                    <span v-text="v.consignee_info"></span>
                                </label>
                                <a v-if="v.is_default === 1" class="default">Default address</a>
                            </div>
                        </div>
                        <div class="shop-order__detail">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th width="120"></th>
                                    <th width="300">Goods Inform</th>
                                    <th width="150">Price</th>
                                    <th width="200">Quantity</th>
                                    <th width="80">Total Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="v in cartList">
                                    <th scope="row">
                                        <div class="img"><img :src="v.image" style="width: 100px;height: 100px;" alt="" class="cover">
                                        </div>
                                    </th>
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
                        <div class="user-form-group shopcart-submit">
                            <button type="submit" class="btn" @click="pay">Submit Order</button>
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
    import {cartList, address, order} from '../lib/interface'

    export default {
        components: {header_,footer_},
        name: "order",
        data() {
            return {
                ids: "",
                cartList: [],
                addressList: [],
                addressId: 0,
            }
        },
        mounted() {
            this.ids = this.$route.query.ids;
            if (!this.ids) {
                this.$router.replace("/");
                return;
            }
            this.getCartList();
            this.getAddress();
            var that = this;
            $(document).ready(function () {
                $(this).on('change', 'input', function () {
                    that.addressId = $(this).parents('.radio-box').attr("val");
                    $(this).parents('.radio-box').addClass('active').siblings().removeClass('active');
                })
            });
            $('#coupon').bind('change', function () {
                console.log($(this).val());
            })
        },
        methods: {
            async getCartList() {
                let result = await cartList({"id": this.ids});
                this.cartList = result.result;
            },
            async getAddress() {
                let result = await address();
                this.addressList = result.result;
                if (this.addressList.length > 0) {
                    this.$nextTick(function () {
                        $("#address0").addClass("active");
                        $("#radio_0").attr("checked", 'checked');
                        this.addressId = this.addressList[0].address_id;
                    })
                }
            },
            async pay() {
                if (this.addressId === 0) {
                    this.$Message.error("Please add your address!");
                    return;
                }
                let result = await order({"address_id": this.addressId, "ids": this.ids});
                if (result.status === 1) {
                    this.$Message.success(result.message);
                    this.$router.push("/pay?id="+result.result.id);
                } else {
                    this.$Message.error(result.message);
                }
            }
        }
    }
</script>

<style scoped>

</style>
