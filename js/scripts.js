$(document).ready(function() {
  $("form#form-group").submit(function(event) {
    event.preventDefault();

    const answer1 = $("input:radio[name=question1]:checked").val();
    const answer2 = $("input:radio[name=question2]:checked").val();
    const answer3 = $("input:radio[name=question3]:checked").val();
    const answer4 = $("input:radio[name=question4]:checked").val();
 

   if (answer1 === "1" && (answer2 ==="1" || answer3 === "1" || answer4 ==="1")) {
     $("#Janice").show();
   } else if (answer2 === "1" && (answer3 ==="1" || answer4 ==="1")){
     $("#Janice").show();
   } else if (answer3 === "1" && (answer4 ==="1")){
     $("#Janice").show();
   } else if (answer1 === "2" && (answer2 === "2" || answer3 ==="2" || answer4 === "2")) {
     $("#Regina").show();
   } else if (answer2 === "2" && (answer3 ==="2" || answer4 ==="2")){
     $("#Regina").show();
   } else if (answer3 === "2" && (answer4 ==="2")){
     $("#Regina").show();
   } else {
     $("#Kevin").show();
   }

  });
});



