$(document).ready(function(){
	$(".sidebar-form .call-action").click(function(){
			$(this).parents(".sidebar-form").toggleClass("show");
	});
});


$(document).ready(function(){
    $('.toggle').click(function(){
      $('.sidebar-contact').toggleClass('active')
      $('.toggle').toggleClass('active')
    })
  })
