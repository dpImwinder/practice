$(function(){
     // 引入头部和底部
     $('#header').load('./header.html');
     $('#footer').load('./footer.html');

     //请求后端数据
     function requestData(reqData){
          $.ajax({
          type:'get',
          url:'./js/list.php',
          data:{type:reqData},
          success:function(data){
              var res = data.data.list;
              $.each(res,function(k,v){
                  var template = $('#template').html();
                  template = template.replace(/#sysId#/,v.sysId);
                  template = template.replace(/#coverImg#/,v.coverImg);
                  template = template.replace(/#title#/,v.title);
                  template = template.replace(/#creatAt#/,v.creatAt);
                  template = template.replace(/#describe#/,v.describe);
                  $('.newslist>.container').append($(template))
              })
          }
      })
      }
  //声明计数器，记录请求次数
  var n = 0;
      //第一次请求
      requestData('listData0'+n);
      //点击加载更多
      $('.btn').on('click',function(){
          n++;
          if(n<3){
              requestData('listData0'+n);
          }else{
             $('.btn').html('想看也没有了...')
          }
      })
})

