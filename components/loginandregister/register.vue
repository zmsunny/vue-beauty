<template>
     <div class="register">
         <router-view></router-view>
        <div class="top">
            <div @click="$router.go(-1)" class="out fa fa-chevron-left"></div>
            <div class="title">注册</div>
        </div>
        <div class="loginform">
            <p>输入账号</p>
            <input type="text" placeholder="输入用户名/邮箱/手机">
        </div>
        <div class="loginform">
            <p>输入密码</p>
            <input type="text" placeholder="输入密码">
        </div>
        <button>注册</button>
        <app-nav></app-nav>
    </div>

</template>
<script>
    export default {
        name:"AppReg",
    }
</script>
<style lang="scss" scoped>
    .register{
        .top{
            display:flex;
            justify-content: space-between;
            align-items:center;
            text-align:center;
            height:0.60rem;
            border-bottom:1px solid #ccc;
            .out{ 
                text-align:left;
                flex:1
            }
           .title{
               flex:1;
                text-align:left;
                color:#ff1877;
                margin-left:-0.3rem;
                font-size:20px;
            }
        }
        .loginform{
            padding-top:20px;
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
    }
</style>

