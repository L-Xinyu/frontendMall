<template>
    <div>
        <!-- Top tab -->
        <header_></header_>
        <!-- Top Title -->
        <div class="bgf5 clearfix">
            <div class="top-user">
                <div class="inner">
                    <router-link class="logo" to="/"><img src="@/assets/images/icons/logo.png" alt="TP6" class="cover">
                    </router-link>
                    <div class="title">Shopping Cart</div>
                </div>
            </div>
        </div>
        <div class="content clearfix bgf5">
            <section class="user-center inner clearfix">
                <div class="user-content__box clearfix bgf">
                    <div class="title">Shopping Cart</div>
                    <div class="shopcart-form__box">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th width="150">
                                    <label class="checked-label">
                                        <Checkbox :value="checkAll">Check All
                                        </Checkbox>
                                    </label>
                                </th>
                                <th width="300">Information</th>
                                <th width="150">Price</th>
                                <th width="200">Quantity</th>
                                <th width="200">Total Cost</th>
                                <th width="80">Operation</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in list">
                                <th scope="row">
                                    <label class="checked-label">
                                        <Checkbox :value="v.isCheck"></Checkbox>
                                        <i></i>
                                        <div class="img"><img :src="v.image" style="width: 100px;height: 100px;" alt="" class="cover">
                                        </div>
                                    </label>
                                </th>
                                <td>
                                    <div class="name ep3" v-text="v.title"></div>
                                    <div class="type c9" v-text="v.sku"></div>
                                </td>
                                <td>€<span v-text="v.price"></span></td>
                                <td>
                                    <div class="cart-num__box">
                                        <input type="button" class="sub" value="-">
                                        <input type="text" class="val" :value="v.num" disabled="true" maxlength="2">
                                        <input type="button" class="add" value="+">
                                    </div>
                                </td>
                                <td>€<span v-text="(v.price*v.num).toFixed(2)"></span></td>
                                <td>Delete</td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="user-form-group tags-box shopcart-submit pull-right">
                            <button type="submit" class="btn">Pay Now</button>
                        </div>
                        <div class="checkbox shopcart-total">
                            <div class="pull-right">
                                Selected products <span v-text="totalCount"></span>
                                &nbsp;&nbsp;&nbsp;Total
                                <b class="cr">€<span class="fz24" v-text="totalPrice"></span></b>
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
    import {cartList} from "../lib/interface";

    export default {
        components: {header_, footer_},
        name: "cart",
        data() {
            return {
                list: [],
                checkAll: false,
                totalPrice: 0.00,
                totalCount: 0
            }
        },
        mounted() {
            $('.to-top').toTop({position: false});
            // 个数限制输入数字
            $('input.val').onlyReg({reg: /[^0-9.]/g});
            this.getResult();
        },
        methods: {
            async getResult() {
                let result = await cartList();
                this.list = result.result;
                for (var i = 0; i < this.list.length; i++) {
                    this.list[i].isCheck = false;
                }
            },
        }
    }
</script>

<style scoped>

</style>
