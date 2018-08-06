<template>
    <div class="login">
        <div class="top">
            <div></div>
            <div class="title">登入</div>
            <div class="forgetPwd"> 忘记密码</div>
        </div>
        <div class="loginform">
            <p>美丽说账号</p>
            <input type="text" placeholder="输入用户名/邮箱/手机" v-model="phone">
            <button type="button" @click="sendCode" v-if="isPhone" class="send-code">发送验证码</button>
        </div>
        <div class="loginform">
            <p>验证码</p>
            <input type="text" placeholder="输入验证码" v-model="code">
        </div>
        <button @click="submit">登入</button>
        <div class="register">
            <div>免密登入</div>
            <router-link exact :to = "{name:'register'}" class="reg">注册</router-link>
        </div>
        <app-nav></app-nav>
    </div>
    
</template>

<script>
    export default {
        name:"AppLogin",
        data(){
            return {
                phone:'15994751920',
                code:'',
            }
        },
        computed:{
            isPhone(){
                var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
                if (!myreg.test(this.phone)) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        methods:{
            sendCode(){
                this.$http.post('/mz/v4/api/code?__t=' + Date.now(),{
                    mobile:this.phone,
                    type:'2'
                }).then(res=>{
                    if(res.data.status ===0){
                        console.log('验证码发送成功')
                    }
                })       
            },
            submit(){
                if(!this.code)return false;
                this.$store.dispatch('action_login',{
                    code:this.code,phone:this.phone,
                    success:(user_state) => {
                        console.log('登入成功')
                         console.log(user_state)
                        this.$router.push('/classify')
                    },
                    fail:()=>{
                        console.log('短信验证码错误')
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .login{
        .top{
            display:flex;
            justify-content: space-between;
            align-items:center;
            text-align:center;
            height:0.60rem;
            border-bottom:1px solid #ccc;
            div{
                font-size:0.2rem;
                flex:1;
            }
            .out{
                text-align:left;
            }
            .forgetPwd{
                text-align:right;
                color:#ff1877;
            }
        }
        .loginform{
            padding-top:20px;
            position:relative;
            p{
                font-size: 0.18rem;
                text-align: center;
                line-height: 0.18rem;
                color: #666;
                margin-bottom: 0.4rem;
            }
            input{
                margin-bottom: 0.49rem;
                height: 0.63rem;
                line-height: 0.63rem;
                width: 100%;
                display: block;
                text-align: center;
                padding-bottom: 0.05rem;
                font-size: 0.20rem;
                border: none;
                border-bottom: 1px solid #ededed;
                color: #333;
                background: #fff;
            }
            .send-code {
                width: 0.95rem;
                position: absolute;
                right: 5px;
                top: 15px;
                background-color: #29a097;
                color: #fff;
                height: 0.3rem;
                line-height: 0.3rem;
                text-align: center;
                border-radius: 3px;
                cursor: pointer;
                top:1.7rem;
                left:1.5rem;
            }    
        }
        button{
            width: 100%;
            font-size: 0.18rem;
            height: 0.5rem;
            line-height: 0.5rem;
            display: inline-block;
            background: #ff1877;
            color: #fff;
            border: none;
            border-radius: 3px;
            text-align: center;
            text-decoration: none;
            vertical-align: middle;
            white-space: nowrap
        }
        .register{
            display:flex;
            justify-content: space-around;
            padding-top:0.2rem;
            font-size:16px;
            .reg{
                color:#ff1877;
            }
            a{
                font-size:16px;
            }
        }
    }
</style>
