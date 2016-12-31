/**
 * Created by Administrator on 2016/11/19.
 */
define(["jquery"],function($){
    function StickUp($nav){
        this.$nav = $nav;
        this.navH = this.$nav.height();
        this.navW = this.$nav.width();
        this.navT = this.$nav.offset().top;
        this.navL = this.$nav.offset().left;
        this.$navClone = this.$nav.clone(true).css({'opacity':0})
            .hide().insertBefore(this.$nav);
        this.bind();
    }
    StickUp.prototype = {
        bind: function(){
            var _this = this;
            $(window).on('scroll',function(){
                var winScrollT = $(this).scrollTop();
                if(winScrollT>100){
                    if(!_this.isFixed()){
                        _this.setFixed();
                    }
                }
                if(winScrollT<=50){
                    _this.unsetFixed();
                }
            })
        },
        isFixed: function(){
            return !!this.$nav.attr('data-fixed');
        },
        setFixed: function(){
            this.$nav.css({
                'position': 'fixed',
                'top': 0,
                'left': this.navL,
                'width': this.navW,
                'height': this.navH,
                'z-index': 999,
                'background': 'rgba(0,0,0,0.8)'
            }).attr('data-fixed',true);
            this.$navClone.show();
        },
        unsetFixed: function(){
            this.$nav.removeAttr('style')
                .removeAttr('data-fixed');
            this.$navClone.hide();
        }
    };

    var stickup = (function(){
        return {
            init: function($nav){
                new StickUp($nav)
            }
        }
    })();
    return stickup;
});
