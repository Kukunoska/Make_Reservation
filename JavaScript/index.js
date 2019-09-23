function makeReservation() {
    var umbrellasCounter = 0;
    var bedsCounter = 0;
    var flagDate = false;
    var selectedChoice = document.getElementById("choice").value;
    var selectedDate = document.getElementById("datePicker").value;
    var userchoices = {};
    
    if(isSelected(selectedChoice, selectedDate)){}
    else
    {
        var localChoises = JSON.parse(localStorage.getItem('choices'));
        if(selectedChoice !='' && selectedDate !=''){
            document.getElementById('msgChoice').style.display = 'none';
            document.getElementById('msgDate').style.display = 'none';
            if(JSON.stringify(localChoises) == '' || JSON.stringify(localChoises) == 'null') { 
                localChoises = localChoises || [];
                addNewDate(umbrellasCounter,bedsCounter,selectedDate,userchoices,selectedChoice,localChoises);
            }
            else 
            {
                for(var i = 0; i < localChoises.length; i++){
                    if(selectedDate == localChoises[i].date){
                        flagDate = true;
                    }
                }
                if(flagDate == true){
                    for(var i = 0; i < localChoises.length; i++){
                        if(selectedDate == localChoises[i].date){
                            if(selectedChoice == '0'){
        
                                if(localChoises[i].umbrellas < 20){
                                    localChoises[i].umbrellas ++;
                                }else
                                {
                                    document.getElementById('msgUmbrellas').style.display = 'block';
                                }
                            }
                            else if(selectedChoice == '1'){
                
                                if(localChoises[i].umbrellas < 20 ){
                                    localChoises[i].umbrellas ++;
                                    if(localChoises[i].beds < 40){
                                        localChoises[i].beds ++;
                                    }else
                                    {
                                        document.getElementById('msgBeds').style.display = 'block';
                                        document.getElementById('msgUmbrellas').style.display = 'none';
                                    }
                                }else 
                                {
                                    document.getElementById('msgUmbrellas').style.display = 'block';
                                }
                            }
                            else if(selectedChoice == '2'){
                
                                if(localChoises[i].umbrellas < 20){
                                    localChoises[i].umbrellas ++;
                                    if(localChoises[i].beds < 40){
                                        localChoises[i].beds += 2;
                                    }else
                                    {
                                        document.getElementById('msgBeds').style.display = 'block';
                                        document.getElementById('msgUmbrellas').style.display = 'none';
                                    }
                                }else
                                {
                                    document.getElementById('msgUmbrellas').style.display = 'block';
                                }
                            }
                            if(localChoises[i].umbrellas == 20 && localChoises[i].beds == 40){
                                document.getElementById('msgUmbrellasAndBeds').style.display = 'block';
                                document.getElementById('msgUmbrellas').style.display = 'none';
                                document.getElementById('msgBeds').style.display = 'none';
                            }
                            localStorage.setItem('choices', JSON.stringify(localChoises));
                            console.log(localChoises);
                            return;
                        }
                    }
                }else
                {
                    addNewDate(umbrellasCounter,bedsCounter,selectedDate,userchoices,selectedChoice,localChoises);   
                }
            }   
        }
    }
}
function addNewDate(umbrellasCounter,bedsCounter,selectedDate,userchoices,selectedChoice,localChoises){
    userchoices = userchoices || [];
    userchoices.choice = selectedChoice;
    userchoices.date = selectedDate
    userchoices.umbrellas = umbrellasCounter;
    userchoices.beds = bedsCounter;
    if(selectedChoice == '0'){         //Umbrella
        umbrellasCounter ++;
        userchoices.umbrellas = umbrellasCounter;
        userchoices.beds = parseInt(bedsCounter);
    }
    else if(selectedChoice == '1'){        //Umbrella and one bed
        umbrellasCounter ++;
        userchoices.umbrellas = umbrellasCounter;
        bedsCounter ++;
        userchoices.beds = bedsCounter;
    }
    else if(selectedChoice == '2'){        //Umbrella and two beds
        umbrellasCounter ++;
        userchoices.umbrellas = umbrellasCounter;
        bedsCounter += 2;
        userchoices.beds = bedsCounter;
    }
    
    var localChoises = JSON.parse(localStorage.getItem('choices'));
    localChoises = localChoises || [];
    localChoises.push(userchoices);
    localStorage.setItem('choices', JSON.stringify(localChoises));
    console.log(localChoises);
}
function isSelected(selectedChoice, selectedDate){
    if(selectedChoice == ''){
        document.getElementById('msgChoice').style.display = 'block';
        document.getElementById('msgDate').style.display = 'none';
    }else if(selectedDate == ''){
        document.getElementById('msgDate').style.display = 'block';
        document.getElementById('msgChoice').style.display = 'none';
    }
}
function getChoicePrice(){
    var choicePrice = 0;
    var selectedDate = document.getElementById("datePicker").value;
    var selectedChoice = document.getElementById("choice").value;
    //var text - gets the actual option text, not the option value
    var text = document.getElementById("choice").options[document.getElementById("choice").selectedIndex].text
    console.log(text);
    console.log('date: ' + selectedDate);
    if(isSelected(selectedChoice, selectedDate)){
        document.getElementById('msgChoice').style.display = 'none';
        document.getElementById('msgDate').style.display = 'none';
    }
    else
    {
        if(selectedChoice !='' && selectedDate !=''){
            if(selectedChoice == '0'){
            }else if(selectedChoice == '1'){         
            }else if(selectedChoice == '2'){
            }
            choicePrice = prices[selectedChoice];
        }    
    }
    console.log('price: ' + choicePrice);
    return choicePrice;
}
function showPrice() {
    document.getElementById('msgChoice').style.display = 'none';
    document.getElementById('msgDate').style.display = 'none';
    var showPrice = getChoicePrice();
    
    if (showPrice === undefined || showPrice === ''|| showPrice === 0 )
    {

    } else
    {
        document.getElementById('price').innerHTML = showPrice + " euros";
    }
}
