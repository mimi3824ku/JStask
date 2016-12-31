/**
 * Created by Administrator on 2016/11/20.
 */
define(['jquery','com/waterFall'],function($,waterFall){
   function LoadMore(){
       this.$loadMore = $('#loadMore');
       this.$contain = $('.pic');
       this.$item = $('.pic>li');
       this.idx = this.$item.size();
       this.waterFall = waterFall;

       this.bind();
   }
    LoadMore.prototype = {
        bind: function(){
            var _this = this;
            _this.$loadMore.on('click',function(){
                _this.append();

            })
        },
        append: function(){
            var _this = this;
            _this.load();
            setTimeout(function(){
                addEle();
            },800);
            function addEle(){
                _this.$item.each(function(){
                    _this.$loadMore.removeAttr('data-loading');
                    _this.$loadMore.html('Load More');
                    $(this).clone(true).appendTo(_this.$contain);
                    _this.waterFall.init(_this.$contain);
                })
            }
        },
        load: function(){
            this.$loadMore.attr('data-loading',true);
            this.$loadMore.html('loading...');
        }
    };

    var loadmore = (function(){
        return{
            init:function(){
                new LoadMore();
            }
        }
    })();
    return loadmore;
});