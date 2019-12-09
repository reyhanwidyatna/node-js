$(document).ready(function(){

    $('form').on('submit', function(){
  
        var item = $('form input');
        var main = {item: item.val()};
  
        $.ajax({
          type: 'POST',
          url: '/main',
          data: main,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });
  
    $('li').on('click', function(){
        
      var item = $(this).text().replace(/ /g, "-");
        
        $.ajax({
          type: 'DELETE',
          url: '/main/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });
  
  });