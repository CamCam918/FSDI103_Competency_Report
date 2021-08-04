var energy=100;
var affection=50;
var happiness=0;
function scold(){
    happiness=happiness-5;
    affection=affection-5;
    dislpay();
}
function feed(){
    energy=energy+10;
    happiness=happiness+5;
    console.log(`Energy = ${energy}`);
    dislpay();
}
function play(){
    energy=energy-10;
    affection=affection+5;
    happiness=happiness+5;
    console.log(`Energy = ${energy}`);
    dislpay();
}
function love(){
    affection=affection+5;
    happiness=happiness+5
    console.log(`Affection = ${affection}`);
    dislpay();
}
function dislpay(){
    document.getElementById("info").innerHTML=`
    <p><center><b> Trixie </b></center></p>
    <p>⚡Energy: ${energy}</p>
    <p>💕Affection: ${affection}<p/>
    <p>😊/😡Happiness: ${happiness}</p>
    `;
}
dislpay();