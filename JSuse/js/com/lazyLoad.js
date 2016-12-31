/**
 * Created by Administrator on 2016/11/19.
 */
define(['jquery'],function($){
    function LazyLoad($ct){
        this.$item = $ct;
        this.winH = $(window).height();

        this.bind();
    }
    LazyLoad.prototype = {
        bind: function() {
            var _this = this;
            $(window).on('scroll', function () {
                _this.winScrollTop = $(this).scrollTop();
                if(_this.clock){
                    clearTimeout(_this.clock);
                }
                _this.clock = setTimeout(function(){
                   _this.checkShow()
                },300);

            });
        },
        checkShow: function(){
            var _this = this;
            _this.$item.filter(function(){
                return $(this).attr('data-isLoad')!=true
            }).each(function(){
                _this.$img = $(this);
                if(_this.isShow(_this.$img)){
                    _this.showImg(_this.$img)
                }
            })
        },
        showImg: function($img){
            $img.find('img').attr(
                'src', $img.attr('data-img')
            ).attr('data-isLoad',true)

        },
        isShow: function($img){
            var _this = this;
            _this.$imgH = $img.offset().top;
            if(_this.winH+_this.winScrollTop>=_this.$imgH){
                return true
            }else{
                return false
            }
        }
    };
    var lazyload = (function(){
        return {
            init:function($ct){
                new LazyLoad($ct);
            }
        }
    })();
    return lazyload;
});