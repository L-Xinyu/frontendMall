<template>
    <div>
        <header_></header_>
        <div class="bgf5 clearfix">
            <div class="top-user">
                <div class="inner">
                    <a class="logo" href="/"><img src="@/assets/images//icons/logo.png" class="cover"></a>
                    <div class="title">
                        Personal center
                    </div>
                </div>
            </div>
        </div>
        <div class="content clearfix bgf5">
            <section class="user-center inner clearfix">
                <mine-left></mine-left>
                <div class="pull-right">
                    <div class="user-content__box clearfix bgf">
                        <div class="title">Account Information-Delivery Address</div>
                        <form action="" class="user-addr__form form-horizontal" role="form">
                            <p class="fz18 cr">Add New Address
                                <span class="c6" style="margin-left: 20px">
                                    Please fill in the following information
                                </span>
                            </p>
                            <div class="form-group">
                                <label for="name" class="col-sm-2 control-label">Name：</label>
                                <div class="col-sm-6">
                                    <Input id="name"
                                           placeholder="Please enter your name..." style="width: 300px"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="details" class="col-sm-2 control-label">Address：</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="details"
                                           placeholder="Please fill in the detailed delivery address,such as street name, house number, etc."
                                           maxlength="200" type="text">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="mobile" class="col-sm-2 control-label">Phone：</label>
                                <div class="col-sm-6">
                                    <input  class="form-control" id="mobile" placeholder="Please enter phone number" type="text">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="name" class="col-sm-2 control-label">As Default：</label>
                                <div class="user-form-group col-sm-6" >
                                    <RadioGroup>
                                        <Radio label="1">
                                            <span>Yes</span>
                                        </Radio>
                                        <Radio label="0">
                                            <span>No</span>
                                        </Radio>
                                    </RadioGroup>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-6">
                                    <button type="submit" class="but">Save</button>
                                </div>
                            </div>
                        </form>
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

    export default {
        components: {header_, footer_, mineLeft},
        name: "mine-address",
        data() {
            return {
                name: ""
            }
        },
        mounted() {
            $("#address").addClass("active");
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
