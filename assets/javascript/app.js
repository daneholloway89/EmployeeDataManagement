$(function() {
  $("#submit").on("click", function(e) {
    e.preventDefault()

    var inputName = $("#input-employee-name").val()
    var inputRole = $("#input-role").val()
    var inputStartDate = $("#input-start-date").val()
    var inputMonthlyRate = $("#input-monthly-rate").val()

    $("#emp-table").append(
      $("<tr>").append(
        $("<td>").text(inputName),
        $("<td>").text(inputRole),
        $("<td>").text(inputStartDate),
        $("<td>").text("something"),
        $("<td>").text("$" + inputMonthlyRate),
        $("<td>").text("something else")
      )
    )

    $("form").trigger("reset")
  })
})
