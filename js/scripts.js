//ui logic
$(document).ready(function(){
  //WHAT WE DO
  $("div#design-show").click(function(){
    $(this).slideUp(600);
    $("div#design-hide").slideDown(600);
  });

  $("div#design-hide").click(function(){
    $(this).slideUp(600);
    $("div#design-show").slideDown(600);
  });

  $("div#development-show").click(function(){
    $(this).slideUp(600);
    $("div#development-hide").slideDown(600);
  });

  $("div#development-hide").click(function(){
    $(this).slideUp(600);
    $("div#development-show").slideDown(600);
  });

  $("div#product-show").click(function(){
    $(this).slideUp(600);
    $("div#product-hide").slideDown(600);
  });

  $("div#product-hide").click(function(){
    $(this).slideUp(600);
    $("div#product-show").slideDown(600);
  });

  //PROJECTS
  $("#work1-show").mouseenter(function(){
    $("#work1-hide").parent().children("#work1-hide").fadeIn();
  }).mouseleave(function(){
    $("#work1-hide").parent().children("#work1-hide").fadeOut();
  });

  $("#work2-show").mouseenter(function(){
    $("#work2-hide").parent().children("#work2-hide").fadeIn();
  }).mouseleave(function(){
    $("#work2-hide").parent().children("#work2-hide").fadeOut();
  });

  $("#work3-show").mouseenter(function(){
    $("#work3-hide").parent().children("#work3-hide").fadeIn();
  }).mouseleave(function(){
    $("#work3-hide").parent().children("#work3-hide").fadeOut();
  });

  $("#work4-show").mouseenter(function(){
    $("#work4-hide").parent().children("#work4-hide").fadeIn();
  }).mouseleave(function(){
    $("#work4-hide").parent().children("#work4-hide").fadeOut();
  });

  $("#work5-show").mouseenter(function(){
    $("#work5-hide").parent().children("#work5-hide").fadeIn();
  }).mouseleave(function(){
    $("#work5-hide").parent().children("#work5-hide").fadeOut();
  });

  $("#work6-show").mouseenter(function(){
    $("#work6-hide").parent().children("#work6-hide").fadeIn();
  }).mouseleave(function(){
    $("#work6-hide").parent().children("#work6-hide").fadeOut();
  });

  $("#work7-show").mouseenter(function(){
    $("#work7-hide").parent().children("#work7-hide").fadeIn();
  }).mouseleave(function(){
    $("#work7-hide").parent().children("#work7-hide").fadeOut();
  });

  $("#work8-show").mouseenter(function(){
    $("#work8-hide").parent().children("#work8-hide").fadeIn();
  }).mouseleave(function(){
    $("#work8-hide").parent().children("#work8-hide").fadeOut();
  });

  $("#sth").click(function(){
    $("body").fadeOut(8000);
    alert("thanos effect");
  });

});


//business logic
$(document).ready(function(){
  //FORM EVENT//
  $("#message").keypress(function(){
    $("#hidden").fadeIn(2000);
  });

  $("#my-form").submit(function(event){
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    $("#user").text(name);
    $(".alert").slideDown();
    $("#close-alert").click(function(){
      $(".alert").slideUp();
      $("#my-form").trigger("reset");
    });
    event.preventDefault();
  });

})
