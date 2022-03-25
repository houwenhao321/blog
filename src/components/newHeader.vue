<template>
    <div id="header">
        <div class="headerBox">
            <div class="logo">
                <img src="@/assets/img/logo.png" alt="" srcset="">
            </div>
            <div class="title">
                <div class="user" @click="goto('/')">
                    首页
                </div>
                <div class="about" @click="goto('/about')">
                    关于
                </div>
                <div class="works" @click="goto('/works')">
                    作品
                </div>
                <div class="someWords" @click="goto('/someWords')">
                    哔哔一些话
                </div>
            </div>
            <div class="user">
                <img src="@/assets/img/程序员.png" alt="" srcset="">
                <span class="userName">
                    {{name}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'newHeader',
    data() {
        return {
            name:'',
        }
    },
    methods:{
        goto(page) {
            this.$router.push(`${page}`)
        }
    },
    created(){
        this.name = window.localStorage.getItem('Cookie').split('&')[0];
    }
}
</script>

<style scope>
    #header{
        display: flex;
        flex-wrap: nowrap;
    }
    .headerBox{
        width: 100%;
        height: 60px;
        box-shadow: 0px 0px 10px #888888;
        display: flex;
        flex-wrap: nowrap;  
        justify-content: space-between;
    }
    .logo{
        height: 100%;
        width: 70px;
    }
    .logo img{
        width: 100%;
    }
    .title{
        display: flex;
        flex-wrap: nowrap;
        height: 60px;
        line-height: 60px;
    }
    .title div{
        width: 100px;
        height: 60px;
    }
    .user{
        width: 200px;
        height: 60px;
        line-height: 60px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
    }
    .user img{
        height: 60px;
    }
    .userName{
        display: block;
        height: 60px;
    }
</style>