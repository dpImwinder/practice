$(function(){
    // 引入头部和底部
    $('#header').load('./header.html');
    $('#footer').load('./footer.html');

    // 轮播图部分
    var n = 0;
    // 节流阀
    var flag = true;

    $('.screen .border-M>li').on('click',function(){
        var index = $(this).index();
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.screen>ul>li').fadeOut().eq(index).fadeIn();
        // 点击序号赋值计数器
        n = index
    })

    // 点击部分
    $('.screen .right').on('click',function(){
        if(flag){
            flag = false;
            if(n>=2){
                n=0
            }else{
                n++;
            }
        $('.screen .border-M>li').removeClass('active').eq(n).addClass('active');
        $('.screen>ul>li').fadeOut().eq(n).fadeIn(function(){
            flag = true;
        });
        }
    })


    $('.screen .left').on('click',function(){
        if(flag){
            flag=false;
            if(n<=0){
                n=2
            }else{
                n--;
            }
        $('.screen .border-M>li').removeClass('active').eq(n).addClass('active');
        $('.screen>ul>li').fadeOut().eq(n).fadeIn(function(){
            flag = true;
        });
        }
    })

    // 业务范围 手风琴
    $('.business>li').on('click',function(e){
        if(e.toElement == $(this).find('img')[0] || e.toElement == $(this).find('.closed')[0]){
             $(this).siblings().removeClass('active').end().toggleClass('active');
         } 
     })
 
     $(function(){
        
         var div = $('.teamcontent');
         var Prev = div.find(".left");
         var Next = div.find(".right");
         var moveDiv = div.find(".team_move");
         var timer = null;
         var nextTimer = null;
         var prevTimer = null;
         var nowIndex = 0;
         
         Prev.click(function(){
             clearTimeout( prevTimer );
             prevTimer = setTimeout(function(){
                 dPrev();
             },200)
             
         });
         Next.click(function(){
             clearTimeout( nextTimer );
             nextTimer = setTimeout(function(){
                 dNext();
             },200)
             
         });
        })

    // 玩家画廊部分
    $('.gallery').mouseenter(function(){
        $('.galleryhide').show();
    })
    $('.gallery').mouseleave(function(){
        $('.galleryhide').hide();
    })

})