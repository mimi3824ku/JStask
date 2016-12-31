/**
 * Created by Administrator on 2016/11/19.
 */

define(['jquery'],function(){
    var goTop = (function(){
        function init(){
            var $backTop = $('<button id="back-top"></button>')
                .appendTo($('html body'))
                .css({
                    'position': 'fixed',
                    'right': '20px',
                    'bottom': '20px',
                    'width': '60px',
                    'height': '60px',
                    'border-radius': '50%',
                    'outline': 'none',
                    'border': '1px solid rgba(0,0,0,0)',
                    'background': 'url(images/bt1.png) no-repeat center center',
                    'background-size': 'cover',
                    'display': 'none',
                    'cursor': 'pointer'
                });
            $(window).on('scroll',function(){
                var winScrollT = $(this).scrollTop();
                if(winScrollT>=700){
                    $backTop.show()
                }else{
                    $backTop.hide()
                }
            });
            $backTop.on('click',function(){
                $('html body').animate({
                    scrollTop:0
                },300)
            })
        }
        var obj = {
            init: init
        };
        return obj;
    })();
return goTop;
});

