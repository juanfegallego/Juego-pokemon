
let team1 = [];
let team2 = [];

let p1 = "";
let p2 = "";


const cambiaFase = (destino) => {
    
    let arrFase = ["fase1","fase2","fase3","fase4","fase5"];

    arrFase = arrFase.filter(val => !destino.includes(val));

    document.getElementById(destino).style.display = "block";

    for(let _fase of arrFase){
        document.getElementById(_fase).style.display = "none";
    }

};

const chooseFighter = (fighter) => {


    if(team2.length < 1){

        if(team1.length < 1){
            team1.push(allPlayers[fighter]);
            
        } else {
            
            team2.push(allPlayers[fighter]);

            if(team2.length == 1){
                console.log("ESTE ES EL TEAM1 ", team1);
                console.log("ESTE ES EL TEAM2 ", team2);
                llenaEquipos();
                cambiaFase("fase3");

                setTimeout(() => {
                    fight();
                    cambiaFase("fase4");
                }, 5000);
            }
            
        }
        
        document.getElementById(fighter).onclick = "";
        document.getElementById(fighter).className = "seleccionado";

        
    }
        
}

const llenaEquipos = () => {
    let equipos = document.getElementById("equipos");

    equipos.innerHTML = `
    <div class="teamCharacters">
        <div><img class="picFighter" src="img/${team1[0].nombre}.png" alt="luchador1"></div>

    </div>
    <div class="fightPanel"><img class="fotoVersus" src="img/fight.jpg" alt="lucha"></div>
    <div class="teamCharacters">
        <div><img class="picFighter" src="img/${team2[0].nombre}.png" alt="luchador2"></div>
        
    </div>
    `;
}

const fight = () => {
    let fight = document.getElementById("fight");
    fight.innerHTML =
    `<div class="teamCharacters">
        <div class="life"><progress id="healthP1" value="400" min="0" max="400"></progress></div>
        <div><img class="picFigther" src="img/${team1[0].nombre}.png" alt="luchador1"></div>
    </div>
    <div class="teamCharacters">
        <div class="life"><progress id="healthP1" value="400" min="0" max="400"></progress></div>
        <div><img class="picFighter" src="img/${team2[0].nombre}.png" alt="luchador2"></div>
    </div>`
    console.log("este team 1 fight", team1);
    console.log("este team 2 fight", team2);
}

const fighting = () => {

    p1 = team1[0];
    p2 = team2[0];


    p1.attack(p2);
    p2.attack(p1);

    console.log(p1.vida,p2.vida);
    // do{

    // }while();

    if(p1<=0 || p2 <=0){cambiaFase("fase5")}
}
