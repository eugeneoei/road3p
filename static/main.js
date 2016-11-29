$("document").ready(function(){
  console.log("loaded");

  $('#create-form').hide();


  $('#create-button').on('click', function() {
    $('#create-form').show();
  })

});
