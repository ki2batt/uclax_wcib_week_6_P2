window.onload = function () {
  console.log('Hello from js/scripts.js!');



  var storyTitle = 'Congrats :NAME:!!!';
  var storyText = 'Congratulations you\'re the 50th customer to subscribe to Java Up\'s newsletter! Please enjoy a complimentary $50.00 gift card on us!!! <img src="images/pour.gif">';


  /*
  var story = document.querySelector('.story');
  var signUp = document.getElementById('signUp');
  var firstName = document.getElementById('firstName');

  story.textContent = storyText;
  story.style.visibility = 'visible';
 */

 $("#signupButton").click(function() {
   $('#exampleModalLong').modal('show');
 });

  $("#signUp").click(function() {
    $('#exampleModalLong').modal('hide');
    $("#fiftyCustomerModal").modal('show');

    storyTitle = storyTitle.replace(":NAME:", firstName.value);
    $("#fiftyCustomerModalTitle").html(storyTitle);
    $("#fiftyCustomerModalBody").html(storyText);
  });
}
