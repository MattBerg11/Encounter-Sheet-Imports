var Tortle = {
	// 6
	"Decapus": {
		name: "Decapus",
		source: ["Tortle Package", 21],
		size: "Large",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "15 ft, climb 30 ft",
		scores: [15, 14, 14, 4, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +4, Perception +2, Stealth +4",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passivePerception: "12",
		languages: "",
		challengeRating: "4",
		attacks: [{
				name: "Bite",
				ability: 1,
				damage: [2, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Tentacles",
				ability: 1,
				damage: [9, 4, "bludgeoning"],
				range: "Melee (10 ft)",
				description: "Or 14 (5d4+2) bludgeoning damage if the decapus is grappling a creature other than the target or if the decapus is on the ground or floor. The target is also grappled (escape DC 14) unless the decapus is already grappling a creature. Until this grapple ends, the target is restrained.",
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The decapus makes two attacks: one with its bite and one with its tentacles."
			}
		],
	},
	"Geonid": {
		name: "Geonid",
		source: ["Tortle Package", 22],
		size: "Small",
		type: "elemental",
		alignment: "neutral",
		ac: [17, "Natural Armor", false],
		hp: 26,
		hd: [4, 6],
		speed: "30 ft",
		scores: [12, 10, 16, 9, 14, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +2",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft, tremorsense 30 ft",
		passivePerception: "14",
		languages: "Terran",
		challengeRating: "1/4",
		attacks: [{
				name: "Club",
				ability: 1,
				damage: [1, 4, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Boulder Guise",
				description: "While fully withdrawn into its shell, the geonid can't see and is indistinguishable from a small boulder."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "The decapus makes two attacks: one with its bite and one with its tentacles."
			}, {
				name: "Stone Tell",
				description: "The geonid touches a stone object or surface and knows what types of creatures have been within 10 feet of that stone in the past 24 hours. The geonid can also determine the number of creatures of each type, but not their identities"
			}
		],
	},
	"Marine Decapus": {
		name: "Marine Decapus",
		source: ["Tortle Package", 21],
		size: "Large",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "15 ft, climb 30 ft, swim 30 ft",
		scores: [15, 14, 14, 4, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +4, Perception +2, Stealth +4",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passivePerception: "12",
		languages: "",
		challengeRating: "4",
		attacks: [{
				name: "Bite",
				ability: 1,
				damage: [2, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "Creature must be grappled.",
			}, {
				name: "Tentacles",
				ability: 1,
				damage: [9, 4, "bludgeoning"],
				range: "Melee (10 ft)",
				description: "Or 14 (5d4+2) bludgeoning damage if the decapus is grappling a creature other than the target or if the decapus is on the ground or floor. The target is also grappled (escape DC 14) unless the decapus is already grappling a creature. Until this grapple ends, the target is restrained.",
			},
		],
		traits: [{
				name: "Water Breathing",
				description: "The decapus can breathe only underwater."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "The decapus makes two attacks: one with its bite and one with its tentacles."
			}
		],
	},
	"Topi": {
		name: "Topi",
		source: ["Tortle Package", 22],
		size: "Small",
		type: "undead",
		alignment: "chaotic evil",
		ac: [13, "Natural Armor", false],
		hp: 13,
		hd: [3, 6],
		speed: "30 ft",
		scores: [7, 15, 12, 6, 10, 5],
		saves: ["", "", "", "", "", ""],
		skills: "",
		damage_resistances: "bludgeoning",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passivePerception: "10",
		languages: "understands the languages it knew in life but can't speak",
		challengeRating: "1/2",
		attacks: [{
				name: "Venomous Claws",
				ability: 1,
				damage: [1, 4, "slashing"],
				range: "Melee (5 ft)",
				description: "Plus 2 (1d4) poison damage, and the target must succeed on a DC 11 Constitution saving throw or be poisoned until the end of the target's next turn.",
			},
		],
		traits: [{
				name: "Turn Resistance",
				description: "The topi has advantage on saving throws against any effect that turns undead."
			}, {
				name: "Undead Fortitude",
				description: "If damage reduces the topi to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the topi drops to 1 hit point instead."
			}
		],
	},
	"Tortle": {
		name: "Tortle",
		source: ["The Tortle Package", 23],
		size: "Medium",
		type: "humanoid (tortle)",
		alignment: "lawful good",
		ac: [17, "Natural Armor", false],
		hp: 22,
		hd: [4, 8],
		speed: "30 ft",
		scores: [15, 10, 12, 11, 13, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +4, Survival +3",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passivePerception: "11",
		languages: "Aquan, Common",
		challengeRating: "1/4",
		attacks: [{
				name: "Claws",
				ability: 1,
				damage: [1, 4, "slashing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Quarterstaff",
				ability: 1,
				damage: [1, 6, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "Two-Handed: 6 (1d8+2) bludgeoning damage.",
			}, {
				name: "Light Crossbow",
				ability: 2,
				damage: [1, 8, "piercing"],
				range: "Ranged (80/320 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Hold Breath",
				description: "The tortle can hold its breath for 1 hour."
			}
		],
		actions: [{
				name: "Shell Defense",
				description: "The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus to AC and has advantage on Strength and Constitution saving throws. While in its shell, the tortle is prone, its speed is 0 and can't increase, it has disadvantage on Dexterity saving throws, it can't take reactions, and the only action it can take is a bonus action to emerge.",
			}
		],
	},
	"Tortle Druid": {
		name: "Tortle Druid",
		source: ["The Tortle Package", 23],
		size: "Medium",
		type: "humanoid (tortle)",
		alignment: "lawful neutral",
		ac: [17, "Natural Armor", false],
		hp: 33,
		hd: [6, 8],
		speed: "30 ft",
		scores: [14, 10, 12, 11, 15, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Animal Handling +4, Nature +2, Survival +4",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passivePerception: "12",
		languages: "Aquan, Common",
		challengeRating: "2",
		attacks: [{
				name: "Claws",
				ability: 1,
				damage: [1, 4, "slashing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Quarterstaff",
				ability: 1,
				damage: [1, 8, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "Two-Handed: 6 (1d8+2) bludgeoning damage.",
			},
		],
		traits: [{
				name: "Hold Breath",
				description: "The tortle can hold its breath for 1 hour."
			}
		],
		actions: [{
				name: "Shell Defense",
				description: "The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus to AC and has advantage on Strength and Constitution saving throws. While in its shell, the tortle is prone, its speed is 0 and can't increase, it has disadvantage on Dexterity saving throws, it can't take reactions, and the only action it can take is a bonus action to emerge.",
			}
		],
		spells: [
			"The tortle is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following druid spells prepared:",
			"Cantrips (at will): druidcraft, guidance, produce flame",
			"1st level (4 slots): animal friendship, cure wounds, speak with animals, thunderwave",
			"2nd level (3 slots): darkvision, hold person"
		]
	}
}
