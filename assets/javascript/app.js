$(function () {

  $("#submit").on("click", function (e) {
    e.preventDefault();
    var inputName = $("#input-employee-name").val();
    var inputRole = $("#input-role").val();
    var inputStartDate = $("#input-start-date").val();
    var inputMonthlyRate = $("#input-monthly-rate").val();

    $("#employee-name").html(inputName);
    $("#role").html(inputRole); 
    $("#start-date").html(inputStartDate);
    $("#months-worked").html("something");
    $("#monthly-rate").html("$" + inputMonthlyRate);
    $("#total-billed").html("something else");

  });
})
