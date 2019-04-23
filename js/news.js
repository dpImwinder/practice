$(function(){
    // 引入头部和底部
    $('#header').load('./header.html');
    $('#footer').load('./footer.html');

    // // 喜加一
    // var n = 20;
    // $('.like').on('click',function(){
    //     n++;
    //     $('.liketag').text("喜欢("+ n +")");
    //     $('button').slideDown('slow');
    //     $('.addone').fadeIn();
    //     $('.addone').fadeOut();
    // })
    // $('button').on('click',function(){
    //     $(this).slideUp('slow');
    // })

    // 页面加载 根据页面地址数据，加载指定内容
    
    var sendData = /type=([a-zA-Z0-9]*)/.exec(window.location.search.slice(1))[1];
    $.ajax({
        type:'get',
        url:'./js/article.php',
        data:{type:sendData},
        success:function(data){
            var data = data.data;
            console.log(data);
            $('.content-title').html(data.typeTitle);
            $('.banner').attr('src',data.coverImg);
            $('.content-date').html(data.creatAt);
            // $('.content-m').html(data.content);
        }
    })
})