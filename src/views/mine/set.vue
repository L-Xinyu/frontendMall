<template>
    <div>
        <!-- Top tab -->
        <header_></header_>
        <!-- Title -->
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
                    <div class="user-content__box clearfix bgf" style="min-height:700px;">
                        <div class="title">User&Account Information</div>
                        <form action="" class="user-setting__form" role="form">
                            <div class="user-form-group">
                                <label for="user-id">Username：</label>
                                <Input v-model="username" id="user-id" placeholder="Please enter the username!"
                                       style="width: 300px"/>
                            </div>
                            <div class="user-form-group">
                                <label>Sex：</label>
                                <RadioGroup v-model="sex">
                                    <Radio label="1">
                                        <span>Man</span>
                                    </Radio>
                                    <Radio label="2">
                                        <span>Woman</span>
                                    </Radio>
                                    <Radio label="0">
                                        <span>Secret</span>
                                    </Radio>
                                </RadioGroup>
                            </div>
                            <div class="user-form-group">
                                <button type="button" class="btn" @click="ok()">Confirm Changes</button>
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
    import "@/assets/js/cropper/cropper.min.js"
    import "@/assets/js/cropper/sitelogo.js"
    import {user, updateUser} from "../../lib/interface";

    export default {
        components: {header_, footer_, mineLeft},
        name: "set",
        data() {
            return {
                username: "",
                sex: "1",
            }
        },
        mounted() {
            $("#set").addClass("active");
            $('.to-top').toTop({position: false});
            this.getUser();
        },
        methods: {
            async getUser() {
                let result = await user();
                this.username = result.result.username;
                this.sex = result.result.sex.toString();
                console.log(result);
            },
            async ok() {
                if (this.username === "") {
                    this.$Message.error('Please enter the username！');
                    return;
                }
                let result = await updateUser({"username": this.username, "sex": this.sex});
                this.$Message.success(result.message);
                if (result.status === 1) {
                    localStorage.setItem("username", this.username);
                    location.reload();
                }
            }
        }
    }
</script>

<style scoped>

</style>
