function setDefaults() {

}

function calcVar() {

    var x = 0;
    var y = 0;
    var varTotal = 0;

    x = Number(document.getElementById("varInputX").value);
    y = Number(document.getElementById("varInputY").value);

    varTotal = x + y;

    document.getElementById("varOutput").innerHTML = varTotal;
}

function calcFuncPram(x, y) {
    var funcTotal = 0;
    funcTotal = Number(x * y);
    document.getElementById("funcOutput").innerHTML = funcTotal;
}

function forLoop(movies) {

    movies.push(document.getElementById("movie").value);

    document.getElementById("movie").value = "";

    var outputText = "";
    var i;
    for (i = 0; i < movies.length; i++) {
        outputText += movies[i] + "<br>";
    }
    console.log(movies);

    document.getElementById("forLoopOutput").innerHTML = outputText;
}

function calcWhileLoop() {

    var num = 0
    var max = 12;
    

    num = Number(document.getElementById("whileLoopInput").value);
    var output = 0;

    var text = "";
    var i = 1;
    while (i < max + 1) {
        output = num * i;
        text += "<br>" + output;
        i++;
       
    }
    document.getElementById("whileLoopOutput").innerHTML = text;
}

function calcDoWhileLoop() {

    var num = 0
    var max = 12;

    num = Number(document.getElementById("doWhileLoopInput").value);
    var output = 0;

    var text = "";
    var i = 1;
    do {
        output = num * i;
        text += "<br>" + output;
        i++;
    }
        
    while (i < max + 1) {
        

    }
    document.getElementById("doWhileLoopOutput").innerHTML = text;
}

function calcIfElse() {


    var age = 0;
    var baby = 2;
    var child = 12;
    var senior = 55;
    
    age = Number(document.getElementById("ifElseInput").value);

    if (age <= baby) {
        document.getElementById("ifElseOutput").innerHTML = "Babys get in for free.";
    }
    else if (age <= child) {
        document.getElementById("ifElseOutput").innerHTML = "Children get a 10% discount.";
    }
    else if (age < senior) {
        document.getElementById("ifElseOutput").innerHTML = "Teens and Adults get in at regular price.";
    }
    else if (age >= 55) {
        document.getElementById("ifElseOutput").innerHTML = "Seniors get a 15% discount.";
    }
    else {
        document.getElementById("ifElseOutput").innerHTML = "Error: try again.";
    }
}

function pickMovie() {
    var text = "";
    var movie = document.getElementById("switchInput").value;

    switch (movie) {
        case "1":
            text = "Now, this is podracing!";
            break;
        case "2":
            text = "I don't like sand... Ok that was the worst scene in Sta Wars...";
            break;
        case "3":
            text = "I was your brother, Anakin!!!";
            break;
        case "4":
            text = "Trust the force, Luke. Let go, Luke.";
            break
        case "5":
            text = "No, I am your father.";
            break
        case "6":
            text = "You all ready have Luke, you were right, you were right about me, tell your sister, you were right.";
            break
        case "7":
            text = "Chewie, We're Home.";
            break
        case "8":
            text = "I only know one truth: It's time for the Jedi to end.";
            break
        case "Solo":
            text = "I just did the Kessel Run in twelve parsecs.";
            break
        case "Rouge One":
            text = "Rebellions are built on hope.";
            break
        default:
            text = "I can't wait for Rise of Skywalker!";
    }

    document.getElementById("switchOutput").innerHTML = text;
}

//Define a person
function Person(first, last, age, gender) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
};

//Add a greeting to the person object
Person.prototype.greeting = function () {
    alert('Hi! I\'m ' + this.name.first + '.');
};

//Define a SGTeamMember inheriting person and adding new items
function SGTeamMember(first, last, age, gender, rank, role, id, greetingText) {
    Person.call(this, first, last, age, gender);

    this.rank = rank;
    this.role = role;
    this.id = id;
}

//This is the inheritance part
function createTeamMember() {
    SGTeamMember.prototype = Object.create(Person.prototype);
    Object.defineProperty(SGTeamMember.prototype, 'constructor', {
    value: SGTeamMember,
    enumerable: false,
    writable: true });

    //Adding a SGTeamMember greeting
    SGTeamMember.prototype.greeting = function () {
        return "Hi. My name is " + this.rank + " " + this.name.first + " "
        + this.name.last + ". I am the " + this.role + " of this team.";
    };

    //Instantiate the SGTeamMember object
    var teamMember = new SGTeamMember(document.getElementById("first").value,
        document.getElementById("last").value,
        document.getElementById("age").value,
        document.getElementById("gender").value,
        document.getElementById("rank").value,
        document.getElementById("role").value,
        document.getElementById("id").value);

    //Display
    document.getElementById("OutputObjCreation").innerHTML = teamMember.greeting();

}

function addTeamMember(teamMembers) {
    this.teamMembers = teamMembers;

    var teamMember = new SGTeamMember(document.getElementById("first").value,
        document.getElementById("last").value,
        document.getElementById("age").value,
        document.getElementById("gender").value,
        document.getElementById("rank").value,
        document.getElementById("role").value,
        document.getElementById("id").value);

    teamMembers.push(teamMember);

    //stringifys my array
    var myJSON = JSON.stringify(teamMembers);

    //display the JSON object
    document.getElementById("OutputJSONParse").innerHTML = myJSON;

    //Parse the JSON object into an array
    var team = JSON.parse(myJSON);

    //Display select elements from the array
    document.getElementById("OutputJSONParse2").innerHTML = team[0].rank + " " + team[0].name.first + " " + team[0].name.last;
}

function getKey() {
    var apiID = "3c1f0026935cf8c5b2695f49e552d817";
    return apiID;
}
function getWeather(key) {
    this.key = key;

    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&APPID=" +
        key;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var weather = JSON.parse(this.responseText);
            document.getElementById("OutputJSONWeb").innerHTML = "City: " + weather.name + "<br>" + "Tempurature: " + weather.main.temp + "f";
            console.log(weather);
           
        }
    };
    xmlhttp.open("GET", weatherURL, true);
    xmlhttp.send();


}