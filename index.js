
var dataController = (function(){

})();

var eventController = (function(){
    var setEventlisteners = function(){
        document.querySelector('.bill-input').addEventListener('input',calculateBill);
        document.querySelector('.tip-input').addEventListener('click',changeTipPercent);
    };

     var calculateBill = function (){
        var input = UIcontroller.getInput();
        console.log(input);
        var percentinDollor = (input.tipPercentage/100 )* input.bill;
        var totalBill=  Number( input.bill )+ Number(percentinDollor) ;
       
        document.querySelector('.tip-output').innerHTML= percentinDollor +" $";
        document.querySelector('.total-output').innerHTML= totalBill + " $";
    };
    var changeTipPercent = function(){
        var input = UIcontroller.getInput();
        document.querySelector('.tipPercentage').innerHTML=input.tipPercentage + " %";
        var percentinDollor = (input.tipPercentage/100 )* input.bill;
        var totalBill=  Number( input.bill )+ Number(percentinDollor) ;
        document.querySelector('.tip-output').innerHTML= percentinDollor +" $";
        document.querySelector('.total-output').innerHTML= totalBill + " $";
    }
    return {
        init: function(){
            setEventlisteners();
        }
    };
})();

var UIcontroller =( function(){
    return{
         getInput: function(){
             return{
                bill : document.querySelector('.bill-input').value,
                tipPercentage : document.querySelector('.tip-input').value,
               
                
             }         
    }
}
    
})();
eventController.init();


