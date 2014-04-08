	"gengarite": {
		id: "gengarite",
		name: "Gengarite",
		spritenum: 588,
		megaStone: "Gengar-Mega",
		megaEvolves: "Gengar",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 656,
		gen: 3,
		desc: "Mega-evolves Gengar."
	}
};
