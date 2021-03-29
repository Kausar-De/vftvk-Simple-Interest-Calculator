function compute()
{
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseFloat(document.getElementById("years").value);
    var interest = (principal * years * rate) / 100

    if(document.getElementById("principal").value == "")
    {
        alert("Please enter the principal amount");
        document.getElementById("principal").focus();
        return false;
    }
    else if(document.getElementById("principal").value <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    var today = new Date();
    var currentYear = today.getFullYear() + years; 

    document.getElementById("result1").innerHTML = "If you deposit " + principal + ",";
    document.getElementById("result2").innerHTML = "at an interest rate of " + rate + "%.";
    document.getElementById("result3").innerHTML = "You will receive an amount of " + interest + ",";
    document.getElementById("result4").innerHTML = "in the year " + currentYear;

}

function rate()
{
    var ratevalue = document.getElementById("rate");
    document.getElementById("rateshow").innerHTML = ratevalue.value + "%";
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
  }
  