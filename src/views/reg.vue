<template>
    <div>
        <div class="public-head-layout container">
            <router-link class="logo" to="/"><img src="@/assets/images/icons/logo.png" alt="TP6" class="cover"></router-link>
        </div>
        <div class="con">
            <div class="login-layout container">
                <div class="form-box register">
                    <div class="tabs-nav">
                        <h2>Register XMall
                            <router-link to="/login" class="pull-right fz16">Back To Login</router-link>
                        </h2>
                    </div>
                    <div class="tabs_container">
                        <form class="tabs_form" action="/" method="post" id="register_form">

                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                                    </div>
                                    <input class="form-control username" name="username" id="register_username" placeholder="Enter Username" maxlength="11" autocomplete="off" type="text">
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
                                    </div>
                                    <input class="form-control password" name="password" id="register_pwd" placeholder="Enter Password" autocomplete="off" type="password">
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
                                    </div>
                                    <input class="form-control phone" name="phone" id="register_phone" required placeholder="Enter Mobile" maxlength="11" autocomplete="off" type="text">
                                </div>
                            </div>
                            <!-- Msg Error -->
                            <div class="form-group">
                                <div class="error_msg" id="register_error"></div>
                            </div>
                            <button class="btn btn-large btn-primary btn-lg btn-block submit" id="register_submit" type="button">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "res",
        mounted() {
            $(document).ready(function () {
                switch ($.getUrlParam('p')) {
                    case 'register':
                        $('.register').show();
                        break;
                    default:
                        $('.login').show();
                }
            });
        },
        methods: {}
    }
</script>

<style scoped>
    .con {
        background: url(https://static.zara.net/photos//mkt/spots/ss20-north-in-front-of-man/subhome-xmedia-join-life-23//portrait_0.jpg?ts=1591357277115&imwidth=1920) no-repeat center center;
    }

    .public-head-layout {
        height: 120px;
        position: relative;
    }

    .logo {
        width: 200px;
        height: 100px;
        display: block;
        position: absolute;
        bottom: 0;
        left: 50px;
    }

    .login-layout {
        height: 450px;
        position: relative;
    }

    .form-box {
        width: 340px;
        min-height: 340px;
        padding: 25px 20px;
        position: absolute;
        right: 100px;
        top: 20px;
        background-color: #fff;
        border-radius: 5px;
        -webkit-box-shadow: 0 15px 35px -25px #b31e22;
        -moz-box-shadow: 0 15px 35px -25px #b31e22;
        box-shadow: 0 15px 35px -25px #b31e22;
    }

    .tabs_div {
        display: none;
    }

    .tabs-nav h2 {
        font-size: 18px;
        margin-top: 0;
        padding: 10px 0;
        margin-bottom: 15px;
        border-bottom: 1px solid #e0e0e0;
    }

    .links li {
        color: #333;
        min-width: 80px;
        text-align: center;
        margin: 10px 20px 0;
    }

</style>
