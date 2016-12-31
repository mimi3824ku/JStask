/**
 * Created by Administrator on 2016/11/19.
 */
define(["jquery","com/goTop","com/carousel","com/stickUp","com/waterFall","com/lazyLoad","com/loadMore"],function($,goTop,carousel,stickUp,waterFall,lazyLoad,loadMore){
    goTop.init();
    carousel.init($('.header-img'));
    stickUp.init($('.nav'));
    waterFall.init($('.profolio .pic'));
    lazyLoad.init($('.avater'));
    loadMore.init();
});