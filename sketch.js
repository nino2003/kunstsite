var xpos = 40 // de standaardpositie x
var ypos = 40// de standaardpositie y
var xstep = 80// de x afstand tussen de ballen
var ystep = 80// de y afstand tussen de ballen


function setup() { // setup: maak een schilderdoek, zet de beelden per sec op 45 ipv 60
  createCanvas(800, 800);
  frameRate(45);
}
//Je kan in plaats van 16x draw ellipse te typen makkelijker dit doen.
//ik zeg dat kolom elke keer als het lager is dan 4, 1 groter wordt.
// dan zeg ik in de ellipse dat de xpositie= standaard x (100) + de stap
// maal de kolom
function draw() { // teken iets
  background(100 + 100 * sin(frameCount / 100), 100 + 100 * sin(frameCount / 90), 100 + 100 * sin(frameCount / 80)); // achtergrond: rood tussen 

  fill(sin(frameCount), sin(frameCount), sin(frameCount));




  fill(200 + 100 * sin(frameCount / 10), 200 + 100 * sin(frameCount / 20), 200 + 100 * sin(frameCount / 30))
  for (var kolom = 0; kolom < 10; kolom++) {
    for (var rij = 0; rij < 10; rij++)
// variabele kolom maak eerst 0, als kolom is kleiner dan 10>>> 1 erbij (+1)
      // voor variabele rij hetzelfde
      // kolom is voor verticale ballen rij is voor horizontale ballen
   
        ellipse(xpos + (xstep * kolom), ypos + (ystep * rij), 200 * sin(frameCount / 30), 200 * sin(frameCount / 50))
    // teken  een ellipse, voor xpositie is 40 + (80 x het aantal kolom)
    // ook voor y positie maar dan met 40 + (80 x aantal rij)
      }
  }
