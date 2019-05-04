// DOM Ready Function
$(function() {
  // firebase config
  var firebaseConfig = {
    apiKey: "AIzaSyCwMKdKheiwZYTsVhFO2qJsIxJF77Z6buo",
    authDomain: "employeedatamanagement-6d663.firebaseapp.com",
    databaseURL: "https://employeedatamanagement-6d663.firebaseio.com",
    projectId: "employeedatamanagement-6d663",
    storageBucket: "employeedatamanagement-6d663.appspot.com",
    messagingSenderId: "960834757189",
    appId: "1:960834757189:web:f8aa0cbf1039675f",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  // init vars
  var inputName = "";
  var inputRole = "";
  var inputStartDate = "";
  var inputMonthlyRate = "";

  // add submitt onClick handler
  $("#submit").on("click", function(e) {
    e.preventDefault();

    inputName = $("#input-employee-name")
      .val()
      .trim();
    inputRole = $("#input-role")
      .val()
      .trim();
    inputStartDate = $("#input-start-date")
      .val()
      .trim();
    inputMonthlyRate = $("#input-monthly-rate")
      .val()
      .trim();

    $("#emp-table").append(
      $("<tr>").append(
        $("<td>").text(inputName),
        $("<td>").text(inputRole),
        $("<td>").text(inputStartDate),
        $("<td>").text("something"),
        $("<td>").text("$" + inputMonthlyRate),
        $("<td>").text("something else")
      )
    );

    database.ref().push(
      {
        name: inputName,
        role: inputRole,
        startDate: inputStartDate,
        monthlyRate: inputMonthlyRate,
      },
      function(err) {
        console.log({ err });
      }
    );

    $("form").trigger("reset");
  });
});
