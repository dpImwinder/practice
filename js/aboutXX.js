$(function(){
    var H=0;
    var W=0;
    init();
    function init(){
        var H = $(window).innerHeight()-$('.nav').innerHeight();
    // 获取浏览器可视区域宽度
    var W = $(window).innerWidth();
    // 设置屏幕总高度
    $('.screen').height(H);
    // 设置每一屏幕高度
    $('.screen>ul>section').height(H);
    //设置第二模块\第四模块每一个LI宽度
    $('.block-four .slide , .block-two .slide').width(W);


    // 给每一块屏幕上色
    var colors =['#211338','white','#211338','white','gray'];
    $.each($('.screen>ul>section'),function(k,v){
        $(v).css('background-color',colors[k]);
    })

    var hash = window.location.hash.slice(1);
      // 点击导航，滑动到指定位置
      $('.nav>li').on('click',function(){
        var i = $(this).index();
        if(i<4) i++;
        screenIndex = i;
        slideGo(i);
    })
    
    // 页面跳转到指定屏幕
    var hash = window.location.hash.slice(1);
    if(hash) slideGo(hash);

    // 声明计数器，记录当前页面索引
    var screenIndex = hash || 0;
    // 记录时间触发次数
    var mouseNumber = 0;
    // 监听鼠标滚轮滑动
    mouseWheel(window,function(down,e){
        // 事件多次触发才执行
        if(mouseNumber>5){
            mouseNumber = 0;
            // 滚轮方向
        if(down){
            // "滚轮向下，页面向上"
            // 最后一屏幕为止
            if(screenIndex<4){
                screenIndex++;
            slideGo(screenIndex);
            } 
        }else{
            if(screenIndex>0){
                screenIndex--;
            slideGo(screenIndex);
            }
        }
        }else{
            mouseNumber++;
        }
    })
    
    // 封装
    function slideGo(index){
        $('.screen>ul').stop().animate({'top':-index*H});
        if(index != 0){
            $('.nav>li').removeClass('now').eq(index-1).addClass('now');
            if(index == 4){
                $('.nav>li').eq(index).addClass('now');
            }
        }
        }

    // 第一模块按钮下滑
    $('.block-one .mid-four').on('click',function(){
        $('.nav>li').eq(0).click();
    }
    )
    // 第二模块轮播
    var twoIndex = 0;
    $('.block-two .right').on('click',function(){
        if(twoIndex<2){
            twoIndex++;
            $('.block-two>ul').animate({'left':-twoIndex*W});
        }
    })
    $('.block-two .left').on('click',function(){
        if(twoIndex>0){
            twoIndex--;
            $('.block-two>ul').animate({'left':-twoIndex*W});
        }
    })
    // 第四模块轮播
    var flag = true;
    $('.block-four .right').on('click',function(){
        if(flag){
            flag = false;
            changeSlide(-1*W,this,{'sLeft':78,'tLeft':0},function(){
                flag = true;
            });
        }
    })
    $('.block-four .left').on('click',function(){
        if(flag){
            flag = false;
            changeSlide(0,this,{'sLeft':-78,'tLeft':0},function(){
                flag = true;
            });
        }
    })

    // 第四模块轮播封装
    function changeSlide(target,obj,json,fn){
        // 切换内容
        $('.block-four>ul').animate({'left':target});
        // 切换滑块
        $(obj).siblings().find('span').animate({'left':json['sLeft']},function(){
            $(obj).find('span').animate({'left':json['tLeft']},function(){
                fn && fn();
            });
        })
    }
    }
    window.onresize=function(){
        init();
    }
    

    // 开场动画
    setTimeout(function(){
        $('.welcome .box').animate({'top':0}).find('.text').slideDown(function(){
            $('.welcome').delay(2000).slideUp();
        })
    }, 5000);
    $('.welcome').on('dblclick',function(){
        $('.welcome').slideUp();
    })

    setInterval(function(){
        $('.bling').fadeToggle('slow');
    },100)
})