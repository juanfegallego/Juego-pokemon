
class Fighter{

    constructor(nombre,ataque,defensa,tecnica,velocidad){
        this.vida = 400;
        this.suerte = Math.floor(Math.random() *15);
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.tecnica = tecnica;
        this.velocidad = velocidad;
    }


    attack(enemy){
        enemy.vida -= this.ataque - (enemy.defensa * (enemy.suerte / this.velocidad));
    }

    
    // specialHit(enemy){
    //     enemy.vida -= this.ataque + this.tecnica - (enemy.defensa * (enemy.suerte / this.velocidad));
    // }
}


//Instancio luchadores
let player1 = new Fighter("Zekrom",30,10,5,20);
let player2 = new Fighter("Eternatus",35,12,8,12);
let player3 = new Fighter("Solgaleo",25,20,7,15);
let player4 = new Fighter("Rayquaza",40,8,8,18);


let allPlayers = {
    "1" : player1,
    "2" : player2,
    "3" : player3,
    "4" : player4
}

//Acciones

player1.attack(player2);
// player3.hit(player3);

console.log(player1,player2,player3,player4);