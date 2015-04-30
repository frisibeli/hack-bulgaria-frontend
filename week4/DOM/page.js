var handlerA = function(){
    var label = document.getElementById("labelA");
    label.textContent = parseInt(label.textContent) + 1; 
}
var handlerB = function(){
    var label = document.getElementById("labelB");
    label.textContent = parseInt(label.textContent) + 1;
}
document.addEventListener("DOMContentLoaded", function(){
    var container = document.getElementById("container");

    var teamA = document.createElement("div"),
        teamAHeading = document.createElement("h2");
        teamA.id = "team-a-container"
        teamAHeading.appendChild(document.createTextNode("Team A Score:"));
    var scoreLabelA = document.createElement("span");
        scoreLabelA.id= "labelA";
        scoreLabelA.appendChild(document.createTextNode("0"))
        teamAHeading.appendChild(scoreLabelA);
    var teamAButton = document.createElement("button");
        teamAButton.appendChild(document.createTextNode("Team A"));
        teamAButton.onclick = handlerA,
        teamA.appendChild(teamAHeading);
        teamA.appendChild(teamAButton);

    var teamB = document.createElement("div"),
        teamBHeading = document.createElement("h2");
        teamB.id = "team-b-container"
        teamBHeading.appendChild(document.createTextNode("Team B Score:"));
    var scoreLabelB = document.createElement("span");
        scoreLabelB.id= "labelB";
        scoreLabelB.appendChild(document.createTextNode("0"))
        teamBHeading.appendChild(scoreLabelB);
    var teamBButton = document.createElement("button");
        teamBButton.appendChild(document.createTextNode("Team B"));
        teamBButton.onclick = handlerB,
        teamB.appendChild(teamBHeading);
        teamB.appendChild(teamBButton);

    container.appendChild(teamA);
    container.appendChild(teamB);
});