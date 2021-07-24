

var Addon = setInterval(function(){ 
    document.onkeypress = function (e) {
    if e.key == "/"{
      alert("/ pressed")
    }
};
  for (var h in Game.shimmers){
    if(Game.shimmers[h].type=="golden"){
      Game.shimmers[h].pop();}}for (var h in Game.shimmers){if(Game.shimmers[h].type=="wrath"){
        Game.shimmers[h].pop();}} 
  try{
    document.getElementById('bigCookie').click();
  } catch (err) { clearInterval(); } }, 100
);                      
