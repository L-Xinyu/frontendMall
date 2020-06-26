<template>
    <div class="pull-left bgf">
        <router-link class="title">Welcome to XMall</router-link>
        <dl class="user-center__nav">
            <dt>Account Information</dt>
            <router-link to="/mine/set">
                <dd id="set">User Information</dd>
            </router-link>
            <router-link to="/mine/address">
                <dd id="address">User Address</dd>
            </router-link>
        </dl>
        <dl class="user-center__nav">
            <dt>Order Information</dt>
            <router-link to="/mine/order">
                <dd id="order">My Order</dd>
            </router-link>
        </dl>
    </div>
</template>

<script>
    export default {
        name: "mine_left"
    }
</script>

<style scoped>

</style>
