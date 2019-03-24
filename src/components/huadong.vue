<template>
    <div id="example-1">
        <button @click="show = !show">
            Toggle render
        </button>
        <transition name="slide-fade">
            <div v-if="show" class="box">

            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name:'huadong',
    data(){
        return {
            show: true
        }
    },

}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
.box{
    width: 100%;
    height: .5rem;
    background-color:blue
}
</style>


