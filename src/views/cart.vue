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
                                        <Checkbox :value="checkAll" @click.prevent.native="handleCheckAll">
                                            Check All
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
                            <tr v-for="(v,k) in list">
                                <th scope="row">
                                    <label class="checked-label">
                                        <Checkbox :value="v.isCheck" @click.prevent.native="chooseCheck(k)"></Checkbox>
                                        <i></i>
                                        <div class="img">
                                            <img :src="v.image" style="width: 100px;height: 100px;" alt="" class="cover">
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
                                        <input type="button" class="sub" value="-" @click="changeNum(k,1)">
                                        <input type="text" class="val" :value="v.num" disabled="true" maxlength="2">
                                        <input type="button" class="add" value="+" @click="changeNum(k,2)">
                                    </div>
                                </td>
                                <td>€<span v-text="(v.price*v.num).toFixed(2)"></span></td>
                                <td><a @click="del(k)">Delete</a></td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="user-form-group tags-box shopcart-submit pull-right">
                            <button type="submit" class="btn">Pay Now</button>
                        </div>
                        <div class="checkbox shopcart-total">
                            <div class="pull-right">
                                Selected <span v-text="totalCount"></span> products
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
    import {cartList, deleteCart, updateCart} from "../lib/interface";

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
            chooseCheck(index) {
                if (this.list[index].isCheck === false) {
                    this.list[index].isCheck = true;
                } else {
                    this.list[index].isCheck = false;
                }
                this.checkIsAll();
                this.getTotalCount();
            },
            handleCheckAll() {
                if (this.checkAll) {
                    this.checkAll = false;
                    for (var i = 0; i < this.list.length; i++) {
                        this.list[i].isCheck = false
                    }
                } else {
                    this.checkAll = true;
                    for (var i = 0; i < this.list.length; i++) {
                        this.list[i].isCheck = true
                    }
                }
                this.getTotalCount();
            },
            checkIsAll() {
                var checkAll = true;
                for (var i = 0; i < this.list.length; i++) {
                    if (this.list[i].isCheck === false) {
                        checkAll = false;
                        break;
                    }
                }
                this.checkAll = checkAll;
            },
            async del(k) {
                let id = this.list[k].id;
                let result = await deleteCart({"id": id});
                this.$Message.success(result.message);
                if (result.code === 1) {
                    this.list.splice(k, 1);
                    this.getTotalCount();
                }
            },
            async changeNum(index, t) {
                var num = 0;
                if (t === 1) { //+
                    if (this.list[index].num === 1) {
                        return;
                    }
                    num = this.list[index].num - 1;
                } else { // -
                    num = this.list[index].num + 1;
                }
                let result = await updateCart({"id": this.list[index].id, "num": num});
                if (result.status === 1) {
                    this.getTotalCount();
                    if (t === 1) { //+
                        this.list[index].num = this.list[index].num - 1;
                    } else { // -
                        this.list[index].num = this.list[index].num + 1;
                    }
                } else {
                    this.$Message.error(result.message);
                }
            },
            getTotalCount() {
                this.totalCount = 0;
                for (var i = 0; i < this.list.length; i++) {
                    if (this.list[i].isCheck === true) {
                        this.totalCount += parseFloat(this.list[i].num);
                    }
                }
                console.log(this.totalCount);
            }
        }
    }
</script>

<style scoped>

</style>
