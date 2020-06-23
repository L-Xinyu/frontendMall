<template>
    <div>
        <!-- Top tab -->
        <header_></header_>
        <!-- Top Title -->
        <div class="content clearfix bgf5">
            <section class="user-center inner clearfix">
                <div class="user-content__box clearfix bgf">
                    <div class="shop-title">Choose Address</div>
                    <div class="shopcart-form__box">
                        <div class="addr-radio">
                            <div class="radio-line radio-box">
                                <label class="radio-label ep">
                                    <input name="addr">
                                    <i class="iconfont icon-radio"></i>
                                </label>
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
                                    <td>€</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="user-form-group shopcart-submit">
                            <button type="submit" class="btn">Submit Order</button>
                        </div>
                    </div>
                </div>
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
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
