exports.BattleScripts = {
init: function() {
function getBST(poke) {
var baseStats = poke.baseStats;
if (!baseStats) return;
var BST = 0;
for (var i in baseStats) {
BST += baseStats[i];
var adjustment = 600/'+ BST +';
}
}
this.data.Pokedex[i].poke.baseStats.hp * adjustment;
this.data.Pokedex[i].poke.baseStats.atk * adjustment;
this.data.Pokedex[i].poke.baseStats.def * adjustment;
this.data.Pokedex[i].poke.baseStats.spa * adjustment;
this.data.Pokedex[i].poke.baseStats.spd * adjustment;
this.data.Pokedex[i].poke.baseStats.spe * adjustment;
};
/*exports.BattleScripts = {
init: function() {
for (var i in this.data.Pokedex) {
var tier = '';
var adjustment = 0;
if (this.data.FormatsData[i]) tier = this.data.FormatsData[i].tier;
switch (tier) {
case 'BL':
case 'UU':
adjustment = 5;
break;
case 'BL2':
case 'RU':
adjustment = 10;
break;
case 'BL3':
case 'NU':
case 'NFE':
case 'LC':
adjustment = 15;
}

this.data.Pokedex[i].baseStats.hp += adjustment;
this.data.Pokedex[i].baseStats.atk += adjustment;
this.data.Pokedex[i].baseStats.def += adjustment;
this.data.Pokedex[i].baseStats.spa += adjustment;
this.data.Pokedex[i].baseStats.spd += adjustment;
this.data.Pokedex[i].baseStats.spe += adjustment;
}
}
};*/
