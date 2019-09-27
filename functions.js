function setDefaults()
{
    document.getElementById("musicprice").value = 0;
    document.getElementById("lessonprice").value = 0;
    document.getElementById("subtotal").value = 0;
    document.getElementById("shippingcost").value = 0;
    document.getElementById("taxes").value = 0;
    document.getElementById("total").value = 0;

}

function addSheetMusic()
{
    var musicTotal = 0;

    var music = document.querySelectorAll('#sheetmusic input');
    for (var i = 0; i < music.length; i++)
    {
        if (music[i].checked == true)
        {
            musicTotal = musicTotal + Number(music[i].value);
        }
    }

    document.getElementById("musicprice").innerHTML = "$" + musicTotal.toFixed(2);
    document.getElementById("musicprice").value = musicTotal;

    
    

    calcTotal();
}

function addLessons()
{
    var basecost = 105;
    var lessoncost = 0;
    var months = 0;
    var months = document.getElementById("lessonduration").value;

    if (months > 0 && document.getElementById("instrament").value == "default")
    {
        document.getElementById("instramenterror").style.visibility = 'visible';
        
    }
    else
    {
        document.getElementById("instramenterror").style.visibility = 'hidden';
    }

    if (document.getElementById("instrament").value != "default" && months <= 0)
    {
        document.getElementById("durationerror").style.visibility = 'visible';
    }
    else
    {
        document.getElementById("durationerror").style.visibility = 'hidden';
    }
    
    lessoncost = months * basecost;
    document.getElementById("lessonprice").innerHTML = "$" + lessoncost.toFixed(2);
    document.getElementById("lessonprice").value = lessoncost;

    calcTotal();

}

function calcSubtotal()
{


    var subtotal = 0;
    var musicTotal = 0;
    var lessonTotal = 0;

    //alert(document.getElementById("lessonprice").value);
    musicTotal = document.getElementById("musicprice").value;
    lessonTotal = document.getElementById("lessonprice").value;

    subtotal = musicTotal + lessonTotal;
    document.getElementById("subtotal").value = subtotal;
    document.getElementById("subtotal").innerHTML = "$" + subtotal.toFixed(2);

    calcTaxes(subtotal);


    
}

function calcTaxes(subTotal)
{
    var taxPercentage = .07;
    var tax = 0;

    tax = taxPercentage * subTotal;

    document.getElementById("taxes").innerHTML = "$" + tax.toFixed(2);
    document.getElementById("taxes").value = tax;
    
}

function calcShipping()
{
    var shippingRate = 1.05;
    var musicPrice = 0;
    musicPrice = document.getElementById("musicprice").value;
    if (musicPrice > 0)
    {
        document.getElementById("shippingcost").value = shippingRate;
        document.getElementById("shippingcost").innerHTML = "$" + shippingRate;
    }
    else {
        document.getElementById("shippingcost").value = 0;
    }
}

function calcTotal()
{
    calcSubtotal();
    calcShipping();
    
    var total = 0;
    var subtotal = 0;
    var taxes = 0;
    var shippingCost = 0;

    subtotal = document.getElementById("subtotal").value;
    shippingCost = document.getElementById("shippingcost").value;
    taxes = document.getElementById("taxes").value;

    total = subtotal + shippingCost + taxes;

    

    document.getElementById("total").value = total;
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);

}

function checkFirstName()
{
    var input = document.getElementById("fname").value;
    if (input.search(/^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/) >= 0)
    {
        document.getElementById("fnerror").style.visibility = 'hidden';
    }
    else {
        document.getElementById("fnerror").style.visibility = 'visible';
    }
}

function checkLastName()
{
    var input = document.getElementById("lname").value;
    if (input.search(/^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/) >= 0)
    {
        document.getElementById("lnerror").style.visibility = 'hidden';
    }
    else {
        document.getElementById("lnerror").style.visibility = 'visible';
    }
}

function checkEmail()
{
    var input = document.getElementById("email").value;
    if (input.search(/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/) >= 0)
    {
        document.getElementById("emailerror").style.visibility = 'hidden';
    }
    else {
        document.getElementById("emailerror").style.visibility = 'visible';
    }
}

function checkPhone()
{
    var input = document.getElementById("phone").value;
    if (input.search(/(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/) >= 0)
    {
        document.getElementById("phoneerror").style.visibility = 'hidden';
    }
    else {
        document.getElementById("phoneerror").style.visibility = 'visible';
    }
}

function checkAddress()
{
    var input = document.getElementById("address").value;
    if (input.search(/(\d{1,5}\s(N|S|E|W)(\.?\s\w+))|([1-9]{1,5}\s\w{3,})/) >= 0) {
        document.getElementById("addresserror").style.visibility = 'hidden';
    }
    else {
        document.getElementById("addresserror").style.visibility = 'visible';
    }
}

function checkApt()
{
    var input = document.getElementById("apt").value;
    if (input.search(/\d{1,5}/) >= 0) {
        document.getElementById("apterror").style.visibility = 'hidden';
    }
    else {
        document.getElementById("apterror").style.visibility = 'visible';
    }
}

function checkCity() {
    var input = document.getElementById("city").value;
    if (input.search(/[A-Z][a-z]{2,}/) >= 0) {
        document.getElementById("cityerror").style.visibility = 'hidden';
    }
    else {
        document.getElementById("cityerror").style.visibility = 'visible';
    }
}

function checkState() {
    var input = (document.getElementById("state").value).toUpperCase();
    document.getElementById("state").value = input;

    var states = new Array('AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC',
        + 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
        + 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY',
        + 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
        + 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'AS', 'GU', 'MH', 'FM', 'MP', 'PW', 'PR', 'VI');

    for (var s = 0; s < states.length; s++)
    {
        if (input == states[s])
        {
            document.getElementById("stateerror").style.visibility = 'hidden';
            { break; }
            alert("success")
        }
        else {
            document.getElementById("stateerror").style.visibility = 'visible';
        }
    }
}

function checkZip()
{
    var input = document.getElementById("zip").value;
    if (input.search(/[0-9]{5}/) >= 0) {
        document.getElementById("ziperror").style.visibility = 'hidden';
    }
    else {
        document.getElementById("ziperror").style.visibility = 'visible';
    }
}

function checkCardNetwork()
{
    var input = document.getElementById("cardnetwork").value;

    if (input != "default") {
        document.getElementById("cnerror").style.visibility = 'hidden';
    }
    else {
        document.getElementById("cnerror").style.visibility = 'visible';
    }
}

function checkCardNum()
{
    var input = document.getElementById("cardnum").value;
    if (input.search(/([0-9]{16})/) >= 0)
    {
        document.getElementById("cnumerror").style.visibility = 'hidden';
    }
    else {
        document.getElementById("cnumerror").style.visibility = 'visible';
    }
}

function checkExpDate()
{
    var input = document.getElementById("expdate").value;
    var div = input.split("/")

    var month = Number(div[0], 10);
    var year = Number(div[1], 10);

    if (input.search(/\d{2}\/\d{2}/) >= 0)
    {
        if (year < 18 || year > 30 || month <= 0 || month > 12)
        {
            document.getElementById("expdateerror").style.visibility = 'visible';
        }
        else
        {
            document.getElementById("expdateerror").style.visibility = 'hidden';
        }
        
    } 
    else
    {
        document.getElementById("expdateerror").style.visibility = 'visible';
    }
}

function checkSecCode()
{
    var input = document.getElementById("seccode").value;
    if (input.search(/\d{3}/) >= 0) {
        document.getElementById("scerror").style.visibility = 'hidden';
    }
    else {
        document.getElementById("scerror").style.visibility = 'visible';
    }
}

function submitForms()
{
    document.getElementById("sheetmusic").submit();
    document.getElementById("lessons").submit();
    document.getElementById("custinfo").submit();
    document.getElementById("shippinginfo").submit();
    document.getElementById("payment").submit();
    document.getElementById("totals").submit();
    document.getElementById("subnotice").style.visibility = 'visible'; 
}

function resetForms()
{
    document.getElementById("sheetmusic").reset();
    document.getElementById("lessons").reset();
    document.getElementById("custinfo").reset();
    document.getElementById("shippinginfo").reset();
    document.getElementById("payment").reset();
    document.getElementById("totals").reset();
    document.getElementById("resnotice").style.visibility = 'visible';
    setDefaults();
}

