<template>
    <div class="top-search">
        <div class="inner">
            <router-link class="logo" to="/">
                <img src="@/assets/images/icons/logo.png" alt="TP6" class="cover">
            </router-link>
            <div class="search-box">
                <form class="input-group">
                    <input placeholder="Search For..." v-model="CurText" type="text">
                    <span class="input-group-btn">
						<button type="button">
							<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
						</button>
					</span>
                </form>
                <p class="help-block text-nowrap">
                    <router-link style="margin-left: 5px;"
                                 :to="'/search?text='"></router-link>
                </p>
            </div>
            <div class="cart-box">
                <router-link to="/cart" class="cart-but"><i class="iconfont icon-shopcart cr fz16"></i> Shopping Cart <span
                        v-text="cartCount"></span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {cartCount} from '../lib/interface'

    export default {
        name: "search",
        data() {
            return {
                CurText: '',
                cartCount: 0,
            }
        },
        props: {
            text: {
                type: String,
                default: ''
            }
        },
        watch: {
            text(newValue) {
                this.CurText = newValue
            }
        },
        created() {
            this.CurText = this.text;
            let token = localStorage.getItem("token");
            if (token) {
                this.getCartCount();
            }
        },
        methods: {
            async getCartCount() {
                let result = await cartCount();
                this.cartCount = result.result.cart_num;
            }
        }
    }
</script>

<style scoped>

</style>
