$(document).ready(function() {
    var minDate = new Date();
    $("#datePicker").datepicker({
        minDate: minDate,
        firstDay: 1,
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true,
        showAnim: "fadeIn",
    });
});