setInterval(function() { Game.shimmers.forEach(function(shimmer) { shimmer.pop() }) }, 500);
Game.LoadMod('https://cookiemonsterteam.github.io/CookieMonster/dist/CookieMonster.js');
function tapNews() { if (Game.TickerEffect && Game.TickerEffect.type == 'fortune') { Game.tickerL.click(); } }

setInterval(function () { tapNews(); }, 3000);
clearInterval(checkReady);
