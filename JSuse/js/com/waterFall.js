/**
 * Created by Administrator on 2016/11/19.
 */
define(["jquery"],function($){
    function WaterFall($ct){
        this.$ct = $ct;
        this.$item = this.$ct.find('li');
        this.itemW = this.$item.outerWidth(true);
        this.ctW = this.$ct.outerWidth(true);
        this.itemNum = parseInt(this.ctW/this.itemW);
        this.sumHeight =[];

        this.bind();
    }
    WaterFall.prototype = {
        bind: function(){
            var _this = this;
            $(window).on('resize',function(){
                _this.render();
            });
            _this.render();
        },
        render: function(){
            var _this = this;
            for(var i=0;i<_this.itemNum;i++){
                _this.sumHeight.push(0);
            }
            _this.$item.each(function(){
                var $cur = $(this);
                _this.idx = 0;
                _this.minHeight = _this.sumHeight[0];
                for(var i=0;i<_this.sumHeight.length;i++){
                    if(_this.minHeight>_this.sumHeight[i]){
                        _this.minHeight = _this.sumHeight[i];
                        _this.idx = i;
                    }
                }
                $cur.css({
                    'left': _this.idx*_this.itemW,
                    'top': _this.minHeight
                });
                _this.sumHeight[_this.idx] += $cur.outerHeight(true);
                _this.$ct.css({
                    'height': _this.sumHeight[_this.idx]
                })
            })
        }
    };
    var waterfall = (function(){
        return {
            init: function($ct){
                new WaterFall($ct)
            }
        }
    })();
    return waterfall;
});