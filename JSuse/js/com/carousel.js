/**
 * Created by Administrator on 2016/11/19.
 */
//AMD
define(["jquery"],function($){
    function Carousel($ct){
        this.$ct = $ct;
        this.$imgCt = this.$ct.find($('.carousel-slide'));
        this.$img = this.$imgCt.find($('li'));
        this.$arrowL = this.$ct.find($('.arrow-left'));
        this.$arrowR = this.$ct.find($('.arrow-right'));
        this.$bullet = this.$ct.find($('.bullet'));
        this.$stopPlay = this.$ct.parent().find($('.btn1'));
        this.imgCount = this.$imgCt.children().size();
        this.imgW = this.$img.width();
        this.$img.first().clone(true).appendTo(this.$imgCt);
        this.$img.last().clone(true).prependTo(this.$imgCt);
        this.imgRealCount = this.$imgCt.children().size();
        this.$imgCt.width(this.imgRealCount*this.imgW);
        this.$imgCt.css({
            'left': -this.imgW
        });
        this.curIdx = 0;
        this.isAnimate = false;

        this.bind();
    }
    Carousel.prototype = {
        bind: function(){
            var _this = this;
            _this.$arrowL.on('click',function(e){
                e.preventDefault();
                _this.playPre();
            });
            _this.$arrowR.on('click',function(e){
                e.preventDefault();
                _this.playNext();
            });
            _this.$stopPlay.on('click',function(){
                _this.stopPlay(_this.clock);
            });
            _this.$bullet.find('li').on('click',function(){
                _this.idx = $(this).index();
                if(_this.idx>_this.curIdx){
                    _this.playNext(_this.idx-_this.curIdx);
                }
                if(_this.curIdx>_this.idx){
                    _this.playPre(_this.curIdx-_this.idx);
                }
            });
            _this.setBg(1);
            _this.autoPlay();
        },
        autoPlay: function(){
            var _this = this;
            _this.clock = setInterval(function(){
                _this.playNext();
            },2000)
        },
        stopPlay: function(clock){
            if(!!clock){
                clearInterval(clock);
            }
        },
        playPre: function(idx){
            var _this = this;
            var steps = idx||1;
            if(_this.isAnimate===true){
                return
            }
            _this.isAnimate = true;
            _this.$imgCt.animate({
                'left' : '+='+steps*_this.imgW
            },function(){
                _this.curIdx = (_this.curIdx-steps+_this.imgCount)%_this.imgCount;
                if(_this.curIdx===_this.imgCount-1){
                    _this.$imgCt.css({
                        'left': 0-_this.imgW*_this.imgCount
                    })
                }
                _this.setBullet(_this.curIdx);
                _this.setBg(_this.curIdx);
                _this.isAnimate = false;
            })
        },
        playNext: function(idx){
            var _this = this;
            var steps = idx||1;
            if(_this.isAnimate===true){
                return
            }
            _this.isAnimate = true;
            _this.setBg(_this.curIdx+2);//需要轮播自动滚动一次才能把背景设置上，避免同时加载四张大图，防止消耗性能
            _this.$imgCt.animate({
                'left': '-='+_this.imgW*steps
            },function(){
                _this.curIdx = (_this.curIdx+steps)%_this.imgCount;
                if(_this.curIdx===0){
                    _this.$imgCt.css({
                        'left': 0-_this.imgW
                    })
                }
                _this.setBullet(_this.curIdx);
                _this.isAnimate = false;
            })
        },
        setBullet: function(idx){
            this.$bullet.children().removeClass('active')
                .eq(idx).addClass('active');
        },
        setBg: function(idx){
            var curIdx = idx||0,
                $node = this.$imgCt.children().eq(curIdx),
                $cover = $node.find('.cover'),
                imgUrl = $cover.attr('data-bg');
            if($node.data('isBgSet')){
                return
            }
            $cover.css({
                'background-image': 'url('+imgUrl+')'
            });
            $node.data('isBgSet',true);
        }
    };

    var carousel_fullscreen = (function(){
        return{
            init: function($ct){
                return new Carousel($ct)
            }
        }
    })();
    return carousel_fullscreen;
});














