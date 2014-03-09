// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		name: "Unreleased OU",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard Unreleased', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite']
	},
	{
		name: "(Almost) Any Ability XY",
		section: "Other Metagames",
		
		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Slaking', 'Regigigas', 'Archeops', 'Prankster + Smeargle', 'Sturdy + Shedinja', 'ignoreillegalabilities'],
		validateSet: function(set) {
			var bannedAbilities = {
				'Simple': 1,
				'Contrary': 1,
				'Fur Coat': 1,
				'Huge Power': 1,
				'Pure Power': 1,
				'Speed Boost': 1,
				'Shadow Tag': 1,
				'Arena Trap': 1,
				'Parental Bond': 1,
				'Wonder Guard': 1
			};
			if (set.ability in bannedAbilities) {
				var template = this.getTemplate(set.species || set.name);
				var legalAbility = false;
				for (var i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability "' + set.ability + '" is banned on Pokémon that do not naturally have it.'];
			}
		}
	},
	{
		name: "Sketchmons XY",
		section: "Other Metagames",

		mod: 'sketchmonsxy',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite']
	},
	{
		name: "OU Theorymon",
		section: "Other Metagames",

		mod: 'theorymon',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite']
	},
	{
		name: "CAP",
		section: "Other Metagames",
		column: 3,

		ruleset: ['CAP Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite']
	},
	{
		name: "Alphabet Cup",
		section: "Other Metagames",
		
		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Soul Dew', 'Gengarite', 'Kangaskhanite', 'Mewtwonite X', 'Mewtwonite Y', 'Swoobat',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying',
			'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Blaziken', 'Blaziken-Mega', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre',
			'Kyurem-White', 'Lugia', 'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom'
		],
		validateTeam: function(team, format) {
			var letters = {};
			var letter = '';
			for (var i = 0; i < team.length; i++) {
				letter = Tools.getTemplate(team[i]).species.slice(0,1).toUpperCase();
				if (letter in letters) return ['Your team cannot have more that one Pokémon starting with the letter "' + letter + '".'];
				letters[letter] = 1;
			}
		}
	},
	{
		name: "Swapmons",
		section: "Other Metagames",
		
		mod: 'swapmons',
		ruleset: ['Pokemon', 'Team Preview', 'Standard']
	},
	{
		name: "Offstat XY",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Stealth Rock', 'Spikes', 'Toxic Spikes'],
		validateSet: function(set) {
			var template = this.getTemplate(set.species || set.name);
			var statDiff = template.baseStats['atk'] - template.baseStats['spa'];
			if (Math.abs(statDiff) < 50) return [set.species + ' does not have a difference between attacking stats of 50 or greater.'];
			var attackerType = statDiff > 0 ? 'Special':'Physical';
			for (var i in set.moves) {
				var move = this.getMove(string(set.moves[i]));
				if (move.category !== attackerType && move.category !== 'Status') return [set.species + ' can only use ' + attackerType + ' attacks.'];
			}
		}
	},
	{
		name: "TechniciMons XY",
		section: "Other Metagames",

		mod: 'technicimonsxy',
		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Soul Dew', 'Heat Crash', 'Heavy Slam', 'Ignore Illegal Abilities',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Deoxys', 'Deoxys-Attack',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Darkrai',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White',
			'Xerneas',
			'Yveltal'],
		validateSet: function(set) {
			if (set.species === 'Regigigas') set.ability = 'Slow Start';
			else if (set.species === 'Slaking') set.ability = 'Truant';
			else if (set.species === 'Ditto') set.ability = 'Imposter';
			else set.ability = 'Technician';
			for (var i in set.moves) {
				var move = this.getMove(string(set.moves[i]));
				if (move.basePower && move.basePower >= 100) return ['The move ' + move.name + ' is banned because it has 100+ Base Power.'];
			}
		}
	},
	{
		name: "Sketchmons XY",
		section: "Other Metagames",

		mod: 'sketchmonsxy',
		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite']
	},
	{
		name: "MegaMons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Soul Dew', 'Gengar-Mega', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Mewtwonite-Y', 'Mewtwonite-X', 'Gengarite']
	},
	{
		name: "Balanced TypeChart",
		section: "Other Metagames",

		mod: 'balancedtypechart',
		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Soul Dew', 'Uber', 'Gengarite', 'Kangaskhanite', 'Kyurem-Black']
	},
	{
		name: "OU - No Team Preview",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Genesect', 'Lucarionite', 'Deoxys-Speed', 'Deoxys-Defense']
	},
	{
		name: "Protean Palace",
		section: "Other Metagames",
		
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite'],
		onBeforeMove: function(pokemon, target, move) {
			// Note: Protean mechanics are incomplete.
			// In particular, its interactions with Electrify and Ion Deluge are ignored.
			// It should be updated here when they are fixed.
			// Also, the effects of Aerilate, Pixilate and Refrigerate are subject to interpretation.

			if (!move) return;
			var moveType = '';
			if (move.id === 'hiddenpower') {
				moveType = pokemon.hpType;
			} else if (move.type === 'Normal' && !pokemon.ignore['Ability']) {
				switch(pokemon.ability) {
					case 'aerilate':
						moveType = 'Flying';
						break;
					case 'pixilate':
						moveType = 'Fairy';
						break;
					case 'refrigerate':
						moveType = 'Ice';
						break;
					default:
						moveType = 'Normal';
				}
			} else {
				moveType = move.type;
			}
			if (pokemon.getTypes().join() !== moveType) {
				this.add('-start', pokemon, 'typechange', moveType);
				pokemon.setType(moveType);
			}
		}
	},
	{
		name: "Classicmons",
		section: "Other Metagames",

		mod: 'categoryold',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite']
	},
	{
		name: "Physical Special Swap",
		section: "Other Metagames",

		mod: 'categoryswap',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Lucarionite'],
		onBoostPriority: 100,
		onBoost: function(boost, target, source, effect) {
			// abilities and status moves remain unchanged
			if (effect.effectType !== 'Move' || effect.category === 'Status') return;
			var newBoosts = {};
			if (source === target) {
				// offensive boosts for the source are switched
				newBoosts['atk'] = boost['spa'];
				newBoosts['spa'] = boost['atk'];
			} else {
				// defensive boosts for the target are switched
				newBoosts['def'] = boost['spd'];
				newBoosts['spd'] = boost['def'];
			}
			for (var stat in newBoosts) {
				if (newBoosts[stat]) {
					boost[stat] = newBoosts[stat];
				} else {
					delete boost[stat];
				}
			}
		}
	},
	{
		name: "PacifistMons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Heatran', 'Gengarite', 'Taunt', 'Magic Guard'],
		validateSet: function(set) {
			var problems = [];
			for (var i in set.moves) {
				var move = this.getMove(string(set.moves[i]));
				if (move.heal) problems.push(move.name + ' is banned as it is a healing move.');
				if (move.category !== 'Status') problems.push(move.name + ' is banned as it is an attacking move.');
			}
			return problems;
		}
	},
	{
		name: "Stat Mirror",
		section: "Other Metagames",

		mod: "statmirror",
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite']
	},
	{
		name: "Challenge Cup",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Challenge Cup 1-vs-1",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
		onBegin: function() {
			this.debug('Cutting down to 1');
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Balanced Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'OHKO Clause', 'HP Percentage Mod'],
		banlist: ['Wonder Guard', 'Shadow Tag', 'Arena Trap', 'Pure Power', 'Huge Power', 'Parental Bond']
	},
	{
		name: "Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'HP Percentage Mod'],
		banlist: []
	},
	{
		name: "Sky Battles",
		section: "Other Metagames",

		validateSet: function(set) {
			var template = this.getTemplate(set.species || set.name);
			if (template.types.indexOf('Flying') === -1 && set.ability !== 'Levitate') {
				return [set.species+" is not a Flying type and does not have the ability Levitate."];
			}
		},
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: [
			// Banned items
			'Soul Dew', 'Iron Ball', 'Pinsirite', 'Gengarite',
			// Banned moves
			'Body Slam', 'Bulldoze', 'Dig', 'Dive', 'Earth Power', 'Earthquake', 'Electric Terrain', 'Fire Pledge', 'Fissure',
			'Flying Press', 'Frenzy Plant', 'Geomancy', 'Grass Knot', 'Grass Pledge', 'Grassy Terrain', 'Gravity', 'Heavy Slam',
			'Ingrain', "Land's Wrath", 'Magnitude', 'Mat Block', 'Misty Terrain', 'Mud Sport', 'Muddy Water', 'Rototiller',
			'Seismic Toss', 'Slam', 'Smack Down', 'Spikes', 'Stomp', 'Substitute', 'Surf', 'Toxic Spikes', 'Water Pledge', 'Water Sport',
			// Banned Pokémon
			// Illegal Flying-types
			'Pidgey', 'Spearow', "Farfetch'd", 'Doduo', 'Dodrio', 'Hoothoot', 'Natu', 'Murkrow', 'Delibird', 'Taillow', 'Starly', 'Chatot',
			'Shaymin-Sky', 'Pidove', 'Archen', 'Ducklett', 'Rufflet', 'Vullaby', 'Fletchling', 'Hawlucha',
			// Illegal Levitators
			'Gastly', 'Gengar',
			// Illegal Megas
			'Pinsir-Mega', 'Gengar-Mega',
			// Illegal Ubers
			'Arceus-Flying', 'Giratina', 'Giratina-Origin', 'Ho-Oh', 'Lugia', 'Rayquaza', 'Yveltal'
		]
	},
	{
		name: "Inverse Battle",
		section: "Other Metagames",

		mod: 'inverse',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: [
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Darkrai',
			'Deoxys-Attack',
			'Deoxys',
			'Gengarite',
			'Giratina', 'Giratina-Origin',
			'Groudon',
			'Ho-Oh',
			'Kangaskhanite',
			'Kyogre',
			'Kyurem-Black',
			'Lugia',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Palkia',
			'Rayquaza',
			'Reshiram',
			'Shaymin-Sky',
			'Soul Dew',
			'Kyurem-White',
			'Xerneas',
			'Yveltal',
			'Zekrom'
		]
	},
	{
		name: "1v1",
		section: 'Other Metagames',

		onBegin: function() {
			this.p1.pokemon = this.p1.pokemon.slice(0,1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Unreleased', 'Illegal', 'Focus Sash', 'Kangaskhanite', 'Soul Dew',
			'Destiny Bond', 'Explosion', 'Final Gambit', 'Healing Wish', 'Lunar Dance', 'Memento', 'Perish Song', 'Selfdestruct',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom'
		]
	},
	{
		name: "OU Monotype",
		section: "Other Metagames",

		ruleset: ['OU', 'Same Type Clause']
	},
	{
		name: "Middle Cup",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Illegal', 'Eviolite'],
		maxLevel: 50,
		defaultLevel: 50,
		validateSet: function(set) {
			var template = this.getTemplate(set.species || set.name);
			if (!template.evos || template.evos.length === 0 || !template.prevo) {
				return [set.species + " is not the middle Pokémon in an evolution chain."];
			}
		}
	},
	{
		name: "STABmons",
		section: "Other Metagames",

		searchShow: false,
		ruleset: ['OU'],
		banlist: []
	},
	{
		name: "Ability Exchange",
		section: "Other Metagames",

		searchShow: false,
		ruleset: ['Pokemon', 'Ability Exchange Pokemon', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Ignore Illegal Abilities', 'Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Slaking', 'Regigigas']
	},
	{
		name: "Averagemons",
		section: "Other Metagames",

		searchShow: false,
		mod: 'averagemons',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Soul Dew', 'Thick Club', 'Deepseatooth', 'Deepseascale', 'Light Ball', 'Mawilite', 'Medichamite', 'Eviolite', 'Shedinja', 'Smeargle', 'Huge Power', 'Pure Power']
	},
	{
		name: "[Gen 5] Glitchmons",
		section: "Other Metagames",

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod'],
		banlist: ['Illegal', 'Unreleased'],
		mimicGlitch: true
	},

	// Pet Mods
	///////////////////////////////////////////////////////////////////

	{
		name: "Kalos 2.0 OU",
		section: "Kalos 2",

                mod: 'kalos2',
		ruleset: ['K2 Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Genesect']
	},
	{
		name: "Kalos 2.0 Ubers",
		section: "Kalos 2",

                mod: 'kalos2',
		ruleset: ['K2 Pokemon', 'OHKO Clause', 'HP Percentage Mod'],
		banlist: ['Wonder Guard', 'Shadow Tag', 'Arena Trap', 'Pure Power', 'Huge Power', 'Parental Bond']
	},
	{
		name: "Kalos 2.0 BH",
		section: "Kalos 2",

                mod: 'kalos2',
		ruleset: ['K2 Pokemon', 'Standard', 'Team Preview'],
		banlist: []
	},
	{
		name: "Kalos 2.0 LC",
		section: "Kalos 2",

                mod: 'kalos2',
		maxLevel: 5,
		ruleset: ['K2 Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Scyther', 'Sneasel', 'Yanma', 'Tangela']
	},
	{
		name: "[Gen 5] Gen-NEXT OU",
		section: "Other Metagames",

		mod: 'gennext',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber']
	},

	// Tournament Rules
	///////////////////////////////////////////////////////////////////

	{
		name: "Passive Aggressive",
		section: "Tournaments",

		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: [
			// Standard OU bans
			'Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite',
			// Banned Pokemon
			'Heatran',
			// Banned Abilities
			'Magic Guard', 'Magic Bounce', 'Poison Heal', 'Regenerator', 'Arena Trap', 'Shadow Tag',
			// Banned Moves
			'Taunt', 'Magic Coat', 'Perish Song', 'Substitute', 'Heal Bell', 'Aromatherapy', 'Ingrain', 'Aqua Ring',
			'Healing Wish', 'Refresh', 'Snatch', 'Safeguard', 'Grassy Terrain', 'Lunar Dance', 'Moonlight', 'Morning Sun',
			'Rest', 'Synthesis', 'Swallow', 'Wish', 'Pain Split', 'Nature Power', 'Mean Look', 'Block', 'Spider Web',
			// Banned Items
			'Leftovers', 'Sitrus Berry', 'Aguav Berry', 'Berry Juice', 'Black Sludge', 'Enigma Berry', 'Figy Berry',
			'Iapapa Berry', 'Mago Berry', 'Wiki Berry', 'Assault Vest', 'Oran Berry'
		],
		validateSet: function(set) {
			var problems = [];
			for (var i in set.moves) {
				var move = this.getMove(string(set.moves[i]));
				if (move.heal) problems.push(move.name + ' is banned as it is a healing move.');
				if (move.category !== 'Status') problems.push(move.name + ' is banned as it is an attacking move.');
			}
			return problems;
		}
	},

	// XY Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Battle",
		section: "XY Singles",

		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Unrated Random Battle",
		section: "XY Singles",

		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Random Battle']
	},
	{
		name: "OU",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Genesect']
	},
	{
		name: "Ubers",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard Ubers', 'Team Preview'],
		banlist: []
	},
	{
		name: "UU (beta)",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Heracronite', 'OU', 'BL', 'Drizzle', 'Drought']
	},
	{
		name: "LC",
		section: "XY Singles",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Scyther', 'Sneasel', 'Yanma', 'Tangela']
	},
	{
		name: "LC UU",
		section: "XY Singles",

		searchShow: false,
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Scyther', 'Sneasel',
			'Abra',
			'Aipom',
			'Bronzor',
			'Bunnelby',
			'Carvanha',
			'Chinchou',
			'Clamperl',
			'Croagunk',
			'Drilbur',
			'Dwebble',
			'Elekid',
			'Ferroseed',
			'Fletchling',
			'Froakie',
			'Gastly',
			'Gligar',
			'Growlithe',
			'Honedge',
			'Inkay',
			'Larvesta',
			'Magnemite',
			'Meditite',
			'Mienfoo',
			'Misdreavus',
			'Munchlax',
			'Murkrow',
			'Pawniard',
			'Ponyta',
			'Porygon',
			'Scraggy',
			'Shellder',
			'Slowpoke',
			'Sneasel',
			'Snover',
			'Spritzee',
			'Staryu',
			'Surskit',
			'Swirlix',
			'Tangela',
			'Timburr',
			'Tirtouga',
			'Torchic',
			'Tyrunt',
			'Vullaby',
			'Vulpix',
			'Yanma']
	},
	{
		name: "XY Battle Spot Singles",
		section: "XY Singles",

		onBegin: function() {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0,3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: [], // The neccessary bans are in Standard GBU
		validateTeam: function(team, format) {
			if (team.length < 3) return ['You must bring at least 3 Pokemon.'];
		}
	},
	{
		name: "Custom Game",
		section: "XY Singles",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// XY Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "Smogon Doubles",
		section: "XY Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Dark Void', 'Soul Dew',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White',
			'Xerneas',
			'Yveltal'
		]
	},
	{
		name: "Smogon Doubles Ubers",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard Ubers', 'Team Preview'],
		banlist: ['Dark Void']
	},
	{
		name: "Smogon Doubles UU",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Dark Void', 'Soul Dew',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White',
			'Xerneas',
			'Yveltal',
			'Aegislash',
			'Alakazam',
			'Amoonguss',
			'Azumarill',
			'Breloom',
			'Chandelure',
			'Charizard',
			'Clefable',
			'Cloyster',
			'Conkeldurr',
			'Cresselia',
			'Dragonite',
			'Excadrill',
			'Ferrothorn',
			'Garchomp',
			'Gardevoir',
			'Gastrodon',
			'Genesect',
			'Gengar',
			'Gliscor',
			'Goodra',
			'Greninja',
			'Gyarados',
			'Heatran',
			'Hitmontop',
			'Infernape',
			'Jolteon',
			'Kangaskhan',
			'Klefki',
			'Landorus-Therian',
			'Lucario',
			'Mamoswine',
			'Manectric',
			'Mawile',
			'Meowstic',
			'Metagross',
			'Ninetales',
			'Politoed',
			'Reuniclus',
			'Rotom-Wash',
			'Rhyperior',
			'Sableye',
			'Scizor',
			'Scrafty',
			'Sylveon',
			'Talonflame',
			'Terrakion',
			'Thundurus',
			'Togekiss',
			'Trevenant',
			'Tyranitar',
			'Venusaur',
			'Volcarona',
			'Whimsicott']
	},
	{
		name: "XY Battle Spot Doubles",
		section: "XY Doubles",

		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		validateTeam: function(team, format) {
			if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
		}
	},
	{
		name: "VGC 2014",
		section: "XY Doubles",

		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC', 'Kalos Pokedex'],
		requirePentagon: true,
		banlist: [], // The neccessary bans are in Standard GBU
		validateTeam: function(team, format) {
			if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
		}
	},
	{
		name: "Doubles Challenge Cup",
		section: 'XY Doubles',

		gameType: 'doubles',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Doubles Custom Game",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		ruleset: ['Team Preview']
	},

	// BW2 Singles
	///////////////////////////////////////////////////////////////////

	// {
	// 	name: "[Gen 5] CAP Cawmodore Playtest",
	// 	section: "BW2 Singles",

	// 	mod: 'gen5',
	// 	ruleset: ['CAP Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
	// 	banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', "Tomohawk", "Necturna", "Mollux", "Aurumoth", "Malaconda", "Syclant", "Revenankh", "Pyroak", "Fidgit", "Stratagem", "Arghonaut", "Kitsunoh", "Cyclohm", "Colossoil", "Krilowatt", "Voodoom"]
	// },
	{
		name: "[Gen 5] OU",
		section: "BW2 Singles",
		column: 2,

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	{
		name: "[Gen 5] Ubers",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: []
	},
	{
		name: "[Gen 5] UU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream']
	},
	{
		name: "[Gen 5] RU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning']
	},
	{
		name: "[Gen 5] NU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU','BL3', 'Prankster + Assist']
	},
	{
		name: "[Gen 5] LC",
		section: "BW2 Singles",

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Carvanha', 'Meditite', 'Gligar', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma', 'Soul Dew']
	},
	{
		name: "[Gen 5] GBU Singles",
		section: "BW2 Singles",

		mod: 'gen5',
		validateSet: function(set) {
			if (!set.level || set.level >= 50) set.forcedLevel = 50;
			return [];
		},
		onBegin: function() {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0,3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: ['Sky Drop', 'Dark Void']
	},
	{
		name: "[Gen 5] Custom Game",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// BW2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] Smogon Doubles",
		section: 'BW2 Doubles',
		column: 2,

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void', 'Soul Dew', 'Sky Drop',
			'Mewtwo',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White'
		]
	},
	{
		name: "[Gen 5] GBU Doubles",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		banlist: ['Sky Drop', 'Dark Void']
	},
	{
		name: "[Gen 5] Doubles Custom Game",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] OU (beta)",
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],

		column: 2
	},
	{
		name: "[Gen 4] UU (beta)",
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL']
	},
	{
		name: "[Gen 4] Hackmons",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod'],
		banlist: []
	},
	{
		name: "[Gen 4] Custom Game",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		debug: true,
		ruleset: []
	},
	{
		name: "[Gen 3] Hackmons",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod'],
		banlist: []
	},
	{
		name: "[Gen 3] Custom Game",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: []
	},
	{
		name: "[Gen 2] OU (beta)",
		section: "Past Generations",

		mod: 'gen2',
		debug: true,
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Mean Look + Hypnosis + Perish Song']
	},
	{
		name: "[Gen 2] Custom Game",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon']
	},
	{
		name: "[Gen 1] OU (beta)",
		section: "Past Generations",

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 1] Custom Game",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon']
	}

];
