$(document).ready(function(){
// Do not mess with anything above this
  $("#nameForm").submit(function(event){
    var name = $("input#name").val();
    $("#welcomePage").hide();
    $(".userName").text(name);
    $("#introPage").show('slow');
    event.preventDefault();
  });
  $("#epicodusForm").submit(function(){
    var experience = $("#experience").val();
    var passion = $("input:radio[name=enjoy]:checked").val();
    var frontBack = $("input:radio[name=devType]:checked").val();
    var size = $("input:radio[name=companySize]:checked").val();
    var project = $("input:radio[name=projectType]:checked").val();

    if (passion == "No"){
      window.open("dont.html");
    } else if (passion == "Yes" && frontBack == "Front"){
      window.open("css.html");
    } else if (passion == "Yes" && frontBack == "Back" && size == "Startups"){
      window.open("ruby.html");
    } else {
      window.open("java.html");
    }
  });
  $(".companyTitle .smallText").click(function(){
    $(".companyOptions").toggle();
  });
  $(".careerTitle .smallText").click(function(){
    $(".careerOptions").toggle();
  });
// This is the end tag for ready function
});
