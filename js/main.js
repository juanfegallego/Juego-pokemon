
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
                }, 2000);
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
    <div class="fightPanel"><img class="fotoVersus" src="img/fight.png" alt="lucha"></div>
    <div class="teamCharacters">
        <div><img class="picFighter" src="img/${team2[0].nombre}.png" alt="luchador2"></div>
        
    </div>
    `;
}

const fight = () => {
    let fight = document.getElementById("fight");
    fight.innerHTML =
    `   
    <div><img class="fighter1" src="img/${team1[0].nombre}.png" alt="luchador1"></div>
    <div><img class="pokeball" onclick="fighting()" src="img/start.png" alt="start"></div>
    <div><img class="fighter2" src="img/${team2[0].nombre}.png" alt="luchador2"></div>
    </div>`
    console.log("este team 1 fight", team1);
    console.log("este team 2 fight", team2);
}



const fighting = () => {

    p1 = team1[0];
    p2 = team2[0];

    p1.attack(p2);
    p2.attack(p1);
    updateLife();
    console.log(p1.vida,p2.vida);


    // if(p1<=0 || p2 <=0){cambiaFase("fase5")}
    if( p1.vida <= 0 ) { //Print the winner

        let winner = document.getElementById("winner");
        winner.innerHTML = `
        <div class="teamCharacters">
            <div class="containerWinner" id="winnerName"></div>
            <div><img class="winner" src="img/${team2[0].nombre}.png" alt="luchador2"></div>
        </div>
        `
        changeFase("fase5");

    } else if( p2.vida <= 0 ) {

        let winner = document.getElementById("winner");
        winner.innerHTML = `
        <div class="teamCharacters">
            <div class="containerWinner" id="winnerName"></div>
            <div><img class="winner" src="img/${team1[0].nombre}.png" alt="luchador2"></div>
        </div>
        `
        changeFase("fase5");

    } else if(p1.vida <= 0 && p2.vida <= 0){
            alert("empata");
    }
}

const updateLife = () => {
    let vidaBarra1 = p1.vida;
    let vidaBarra2 = p2.vida;
        vidaBarra1 = (vidaBarra1 * 100)/400;
        document.getElementById("healthP1").style.width = vidaBarra1+"%";
        vidaBarra2 = (vidaBarra2 * 100)/400;
        document.getElementById("healthP2").style.width = vidaBarra2+"%";
}