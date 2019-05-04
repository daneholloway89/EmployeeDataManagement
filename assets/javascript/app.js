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

  // Moment vars
  var dateFormat = "MM/DD/YYYY";
  var convertedDate = moment(inputStartDate, dateFormat);

  // add submitt onClick handler
  $("#submit").on("click", function(e) {
    e.preventDefault();

    inputName = $("#input-employee-name")
      .val()
      .trim();
    inputRole = $("#input-role")
      .val()
      .trim();
    inputStartDate = moment($("#input-start-date")
      .val()
      .trim());

      console.log(inputStartDate.format(dateFormat));
      var calcMonths = (inputStartDate.diff(moment(), "months") * -1);

    inputMonthlyRate = $("#input-monthly-rate")
      .val()
      .trim();

    $("#emp-table").append(
      $("<tr>").append(
        $("<td>").text(inputName),
        $("<td>").text(inputRole),
        $("<td>").text(inputStartDate.format(dateFormat)),
        $("<td>").text(calcMonths + " months"),
        $("<td>").text("$" + inputMonthlyRate),
        $("<td>").text("$" + (calcMonths * inputMonthlyRate))
      )
    );

    database.ref().push(
      {
        name: inputName,
        role: inputRole,
        startDate: inputStartDate.foramt("X"),
        monthlyRate: inputMonthlyRate,
      },
      function(err) {
        if( err ){
        console.log({ err });
        }
        else{
          console.log("saved to firebase");
        }
      }
    );

    $("form").trigger("reset");
  });

// add grab snapshot here 

// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("value", function (snapshot) {
  $("").text(snapshot.val().name);
  $("").text(snapshot.val().email);
  $("").text(snapshot.val().age);
  $("").text(snapshot.val().comment);
}
// Create Error Handling
, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});
