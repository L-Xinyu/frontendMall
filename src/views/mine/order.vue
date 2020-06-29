<template>
    <div>
        <!-- Top title -->
        <header_></header_>
        <div class="bgf5 clearfix">
            <div class="top-user">
                <div class="inner">
                    <router-link class="logo" to="/"><img src="@/assets/images/icons/logo.png" alt="TP6" class="cover">
                    </router-link>
                    <div class="title">Personal Center</div>
                </div>
            </div>
        </div>
        <div class="content clearfix bgf5">
            <section class="user-center inner clearfix">
                <mine-left></mine-left>
                <div class="pull-right">
                    <div class="user-content__box clearfix bgf">
                        <div class="title">Order Information->My Order</div>
                        <div class="order-list__box bgf">
                            <div class="order-panel">
                                <ul class="nav user-nav__title" role="tablist">
                                    <li role="presentation" class="nav-item active" id="nav-item_-1">
                                        <a>All Orders</a></li>
                                </ul>

                                <div class="tab-content" style="margin-top: 20px;">
                                    <div role="tabpanel" class="tab-pane fade in active" id="all">
                                        <table class="table text-center">
                                            <tr>
                                                <th width="280">Order ID</th>
                                                <th width="120">Total Price</th>
                                                <th width="120">Create Time</th>
                                                <th width="120">Pay Status</th>
                                            </tr>
                                            <tr class="order-item" v-for="v in orderInfo">
                                                <td style="height: 100%;">
                                                    ID: <span v-text="v.order_id"></span>
                                                </td>
                                                <td>
                                                    €<span v-text="v.total_price"></span>
                                                </td>
                                                <td v-text="v.create_time"></td>
                                                <td class="state">
                                                    <a class="but c6" v-text="v.pay_type"></a>
                                                </td>
                                            </tr>
                                        </table>
                                        <Page :total="total" :current="pageNum" show-sizer show-total
                                              @on-page-size-change="pageSizeChange"
                                              :page-size="pageSize"
                                              @on-change="changePage" style="text-align: center;"></Page>
                                    </div>
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
    import header_ from '../../components/header_'
    import footer_ from '../../components/footer_'
    import mineLeft from '../../components/mine_left'
    import {orderList} from '../../lib/interface'

    export default {
        components: {header_, footer_, mineLeft},
        name: "order",
        data() {
            return {
                "pageSize": 10,
                "pageNum": 1,
                "total": 0,
                "status": -1,
                orderInfo: [],
            }
        },
        mounted() {
            $('.to-top').toTop({position: false});
            $("#order").addClass("active");
            this.getOrderInfo();
        },
        methods: {
            async pageSizeChange(pageSize) {
                this.pageSize = pageSize;
                this.getOrderInfo()
            },
            changePage(page) {
                this.pageNum = page;
                this.getOrderInfo()
            },
            async getOrderInfo() {
                var data = {
                    "page": this.pageNum,
                    "page_size": this.pageSize,
                };
                if (this.status !== -1) {
                    data.type = this.status;
                } else {
                    delete (data["type"])
                }
                let result = await orderList(data);
                //this.total = result.result.count;
                this.orderInfo = result.result.list;
            },
        }
    }
</script>

<style scoped>

</style>
