<template>
  <div id="app">
    <!-- 主页面 -->
    <router-view ></router-view>
    <!-- 按钮 -->
    <TabBtn />

  </div>
</template>

<script>
import TabBtn from './components/TabBtn'

export default {
  name: 'app',
  data(){
    return {}
  },
  components:{
    TabBtn,
  },
  created () {
      (function(doc, win) {
      var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc = function() {
            var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
          };
          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          recalc();
      })(document, window);
  },

}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
}
html,body{
  position: absolute;
  width: 7.5rem;
  height: 100%;
}

img {
  display: block;
  margin: 0 auto;
  border:none
}


ul {
  margin: 0;
  padding: 0;
  list-style: none;
}



</style>
