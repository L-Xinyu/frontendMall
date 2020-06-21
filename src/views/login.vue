<template>
    <div>
        <div class="public-head-layout container">
            <router-link class="logo" to="/"><img src="@/assets/images/icons/logo.png" alt="TP6" class="cover">
            </router-link>
        </div>
        <div class="con">
            <div class="login-layout container">
                <div class="form-box login">
                    <div class="tabs-nav">
                        <h2>Welcome Login To XMall</h2>
                    </div>
                    <div class="tabs_container">
                        <form class="tabs_form" action="" method="post" id="login_form">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
                                    </div>
                                    <input class="form-control phone" name="phone" v-model="phone"
                                           placeholder="Phone number" maxlength="11" autocomplete="off" type="text">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
                                    </div>
                                    <input class="form-control password" v-model="code" name="password"
                                           placeholder="Enter smsCode" autocomplete="off" type="text">
                                    <div v-if="!sendDisabled" v-text="sendText" class="input-group-addon pwd-toggle"
                                         title="Send SmsCode"
                                         @click="sendCode">
                                    </div>
                                    <div v-if="sendDisabled" v-text="sendText" class="input-group-addon pwd-toggle"
                                         title="Send SmsCode">
                                    </div>
                                </div>
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input checked="" id="login_checkbox" type="checkbox"><i></i> No login within 30 days
                                </label>
                            </div>
                            <!-- 错误信息 -->
                            <div class="form-group">
                                <div class="error_msg" id="login_error">
                                </div>
                            </div>
                            <button class="btn btn-large btn-primary btn-lg btn-block submit" id="login_submit"
                                    type="button" @click="login">Login
                            </button>
                            <br>
                        </form>
                        <div class="tabs_div">
                            <div class="success-box">
                                <div class="success-msg">
                                    <i class="success-icon"></i>
                                    <p class="success-text">Success Login</p>
                                </div>
                            </div>
                            <div class="option-box">
                                <div class="buts-title">
                                    Now you can...
                                </div>
                                <div class="buts-box">
                                    <a role="button" href="/"
                                       class="btn btn-block btn-lg btn-default">Continue to visit</a>
                                    <a role="button" href="udai_welcome.html" class="btn btn-block btn-lg btn-info">Login VIP Center</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .con {
        background: url(https://img10.360buyimg.com/cms/jfs/t1/93644/17/2153/575179/5dcb5129E5b2f2bed/ae22122812cedc5c.jpg) no-repeat center center;
        /*background: #b31e22;*/
    }

    * {
        /*font-family: 'Microsoft Yahei';*/
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

    .success-box {
        width: 100%;
        height: 160px;
        position: relative;
    }

    .success-msg {
        height: 96px;
        text-align: center;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    .success-icon {
        width: 64px;
        height: 64px;
        display: inline-block;
        background-image: url(../assets/images/icons/success.png);
    }

    .success-text {
        text-align: center;
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        margin-bottom: 0;
    }

    .buts-title {
        color: #999;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .links li {
        color: #333;
        min-width: 80px;
        text-align: center;
        margin: 10px 20px 0;
    }

</style>
