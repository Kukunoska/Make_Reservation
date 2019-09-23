document.addEventListener('DOMContentLoaded', function(){
    var localChoises = JSON.parse(localStorage.getItem('choices'));
    var table = document.getElementById('reportTable');
    for(i = 0; i < localChoises.length; i++){
        if(table != null){
        var row = table.insertRow();
        var dateCell = row.insertCell(0);
        var umbrellasCell = row.insertCell(1);
        var bedsCell = row.insertCell(2);
        dateCell.innerHTML = localChoises[i].date;
        umbrellasCell.innerHTML = localChoises[i].umbrellas;
        bedsCell.innerHTML = localChoises[i].beds;
        }
    }
});