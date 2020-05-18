$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideDown('2000').hide('2000');
    $("#development").show('2000');
  });
  $("#development").click(function(){
    $("#development").slideUp('2000');
    $("#development-image").slideDown('2000');
  });
});

$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").slideDown('2000').hide('1000');
    $("#design").show('2000');
  });
  $("#design").click(function(){
    $("#design").slideUp('2000');
    $("#design-image").slideDown('2000');
  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").slideDown('2000').hide('1000');
    $("#product").show('2000');
  });
  $("#product").click(function(){
    $("#product").slideUp('2000');
    $("#product-image").slideDown('2000');
  });
});

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



$(document).ready(function(){
  $("form#form34A").submit(function(event){
    // event.preventDefault();
    var name = $("#mc-field-group").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();
    if ($("input#MERGE1").val() && $("input#MERGE0").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});