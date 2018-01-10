// var btn = document.getElementById('btn')
//  btn.onclick = function() {
//    alert(1)
//    $.ajax({
//      url: '127.0.0.1:8080',
//      type: 'post',
//      data: {
//        1
//      },
//      success: function(response){
//        $('#data').text(response)
//      },
//    })
//  }
$("#btn").click(function() {
  // alert(1)
  var txt = $("#shuru").val();
  console.log(txt);
  $.post("http://127.0.0.1:3000/getData", {
    data: txt
  }, function(result) {
    $("span").html(result);
  })
});

// 什么是对象
// document = {
//   getElementById:function() {
//
//   },
//   post:function() {
//
//   },
//   [1,2,3],
//   1,
//   "helloworld",
// }
