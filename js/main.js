
let engine = document.getElementById('button-2');
let tbody = document.getElementById('tbo');
console.log(tbody);
let result = document.getElementById('result')
console.log(engine)

let back = document.getElementById('back');

back.onclick = function() {
    location.href = 'index.html';
}

engine.onclick = function() {
    let infos = document.getElementById('info');
    let participantList = infos.value;
    var arr = [];
    participantList = JSON.parse(participantList);
    let keyTab = Object.keys(participantList)
    console.log(keyTab)
    for(let i=0; i< keyTab.length ; i++) {
        console.log(keyTab[i])
        let score = 0;
        let members = Object.keys(participantList[keyTab[i]]);
        for(let j=0 ; j< members.length; j++) {
            if(participantList[keyTab[i]][members[j]]["nbSession"] > "0") {
                score = score + 5 + +participantList[keyTab[i]][members[j]]["nbSession"];
                console.log(score)
             }
            else if (participantList[keyTab[i]][members[j]]["gdsc member"] &&  participantList[keyTab[i]][members[j]]["Isian"]) {
                score  = score + 4;
            } else if(participantList[keyTab[i]][members[j]]["gdsc member"] ) {
                score = score + 3;
            } else {
                score = score + 2;
            }
            
        }
        score = score / members.length ;
        let team = {
            "team": keyTab[i],
            "leader" : participantList[keyTab[i]][members[0]]["name"] ,
            "score": score.toString()
        }
        arr.push(team);

    }
    console.log(arr)
    arr.sort(ar => {
        return ar.score;
    })

    for(let i = 0; i< arr.length ; i++) {
        let myTr = document.createElement("tr");
        let rank = document.createElement("td");
        let team = document.createElement("td");
        let leader = document.createElement("td");
        let score = document.createElement("td");
        let rankText = document.createTextNode(i);
        let teamText = document.createTextNode(arr[i]["team"]);
        let leaderText = document.createTextNode(arr[i]["leader"]);
        let scoreText = document.createTextNode(arr[i]["score"]);
        rank.appendChild(rankText);
        team.appendChild(teamText);
        leader.appendChild(leaderText);
        score.appendChild(scoreText);
        myTr.appendChild(rank);
        myTr.appendChild(team);
        myTr.appendChild(leader);
        myTr.appendChild(score);
        tbody.appendChild(myTr);

    }
    result.style.display = "flex"
}