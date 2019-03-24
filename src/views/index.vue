<template>
    <div>
        <div class="nav">
            <div class="logo"></div>
            
        </div>
        首页
        <dome />
        <huadong />
    </div>
</template>

<script>
import dome from '../components/HelloWorld'
import huadong from '../components/huadong'
export default {
    name:'index',
    data(){
        return {

        }
    },
    components:{
        dome,
        huadong
    }
}
</script>

<style  lang="scss" scoped>
.nav{
    width: 7.5rem;
    height: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
.nav .logo{
    width: .4rem;
    height: .4rem;
    background:url('../assets/index/music_close.png') no-repeat;
    background-size: 100% 100%;
}


</style>
