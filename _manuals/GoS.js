var GoS = {
	// 22
	"Amphisbaena": {
		name: "Amphisbaena",
		source: ["Ghosts of Saltmarsh", 230],
		size: "Medium",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [14, "Armor", false],
		hp: 11,
		hd: [2, 8],
		speed: "30 ft, swim 30 ft",
		scores: [14, 18, 12, 3, 10, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "blindsight 10 ft",
		passive_perception: "13",
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "The target must make a DC 11 Constitution saving throw, taking 3 (1d6) poison damage on a failed save, or half as much damage on a successful one.",
		},
		],
		traits: [{
			name: "Two Heads",
			description: "The amphisbaena has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The amphisbaena makes two bite attacks"
		},
		],
		environment: "underwater"
	},
	"Bullywug Croaker": {
		name: "Bullywug Croaker",
		source: ["Ghosts of Saltmarsh", 232],
		size: "Medium",
		type: "humanoid (bullywug)",
		alignment: "neutral evil",
		ac: [15, "Hide Armor", true],
		hp: 33,
		hd: [6, 8],
		speed: "20 ft, swim 40 ft",
		scores: [14, 12, 12, 7, 15, 10],
		saves: ["", "", "3", "", "", ""],
		skills: "Perception +4, Stealth +3",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "14",
		languages: "Bullywug",
		challenge_rating: "2",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 6 (1d8+2) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: ""
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Amphibious",
			description: "The croaker can breathe air and water."
		}, {
			name: "Speak with Frogs and Toads",
			description: "The croaker can communicate simple concepts to frogs and toads when it speaks in Bullywug."
		}, {
			name: "Swamp Camouflage",
			description: "The croaker has advantage on Dexterity (Stealth) checks made to hide in swampy terrain."
		}, {
			name: "Standing Leap",
			description: "The croaker's long jump is up to 20 ft and its high jump is up to 10 ft, with or without a running start."
		}
		],
		actions: [{
			name: "Glaar-pat (3/Day)",
			description: "The croaker sings a song of marshy doom. Each chosen creature within 30 feet of the croaker that can hear the song must make a DC 12 Wisdom saving throw. taking 9 (2d8) psychic damage on a fai1ed save, or half as much damage on a successful one. A creature that fails this saving throw also has disadvantage on Constitution saving throws until the end of its next turn."
		}, {
			name: "Roooo-glog (1/Day)",
			description: "The croaker sings an ode to an elder froghemoth. Each bullywug within 30 feet of the croaker that can hear the song gains 10 temporary hit points."
		}
		],
		environment: "swamp"
	},
	"Bullywug Royal": {
		name: "Bullywug Royal",
		source: ["Ghosts of Saltmarsh", 232],
		size: "Medium",
		type: "humanoid (bullywug)",
		alignment: "neutral evil",
		ac: [15, "Hide Armor", true],
		hp: 52,
		hd: [8, 8],
		speed: "20 ft, swim 40 ft",
		scores: [16, 12, 14, 10, 11, 14],
		saves: ["5", "3", "", "", "", ""],
		skills: "Athletics +5, Intimidation +4, Stealth +3",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "10",
		languages: "Bullywug",
		challenge_rating: "3",
		attacks: [{
			name: "Royal Spear (Melee)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "Two-Handed: 12 (2d8+3) piercing damage. If the target is a Medium or smaller creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
		}, {
			name: "Royal Spear (Ranged)",
			ability: 1,
			damage: [2, 6, ""],
			range: "Ranged (20/60 ft)",
			description: "If the target is a Medium or smaller creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Amphibious",
			description: "The royal can breathe air and water."
		}, {
			name: "Brute",
			description: "A melee weapon deals one extra die of its damage when the royal hits with it (included in the attack)."
		}, {
			name: "Frog Rider",
			description: "The royal has advantage on melee attacks made while riding on a frog mount"
		}, {
			name: "Speak with Frogs and Toads",
			description: "The royal can communicate simple concepts to frogs and toads when it speaks in Bullywug."
		}, {
			name: "Swamp Camouflage",
			description: "The royal has advantage on Dexterity (Stealth) checks made to hide in swampy terrain."
		}, {
			name: "Standing Leap",
			description: "The royal's long jump is up to 20 ft and its high jump is up to 10 ft, with or without a running start."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The royal makes two attacks: one with its royal spear and one with its bite."
		}, {
			name: "Croaked Decree (1/Day)",
			description: "The royal makes a loud pronouncement . Each bullywug within 60 feet of the royal that can hear the pronouncement has advantage on its next attack roll."
		}
		],
		environment: "swamp"
	},
	"Drowned Ascetic": {
		name: "Drowned Ascetic",
		source: ["Ghosts of Saltmarsh", 233],
		size: "Medium",
		type: "undead",
		alignment: "chaotic evil",
		ac: [13, "", false],
		hp: 75,
		hd: [10, 8],
		speed: "30 ft",
		scores: [12, 16, 16, 3, 9, 5],
		saves: ["", "5", "", "", "", ""],
		skills: "",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60ft",
		passive_perception: "9",
		languages: "understands the languages it knew in life but can't speak",
		challenge_rating: "3",
		attacks: [{
			name: "Unarmed Strike",
			ability: 2,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 12 Constitution saving throw or contract bluerot."
		},
		],
		traits: [{
			name: "Bluerot",
			description: "This disease targets humanoids. While afflicted with bluerot, a victim grows grotesque blue boils on their face and back. The disease is carried by undead (including the drowned ones in Tammeraut's Fate), and victims most often acquire it through wounds caused by infected creatures. The disease's boils manifests in 1d4 hours, causing the victim's Constitution and Charisma scores to decrease by 1d4 each, to a minimum of 3. This is quickly followed by a fever and tingling in the extremities. An infected creature is vulnerable to radiant damage and gains the ability to breathe underwater. At the end of each long rest, an infected creature makes a DC12 Constitution saving throw. On a success, the victim regains 1 point of Constitution and 1 point of Charisma lost to the disease. If the infected creature regains all the points lost to the disease, it is cured. Other effects that raise the victim's ability scores do not cure the disease. On a failed saving throw the victim takes 18 (4d8) necrotic damage as the boils burst and spread. A creature reduced to 0 hit points by this damage cannot regain hit points until the disease is cured, though it can be stabilized as normal."
		}, {
			name: "Bottom Treader",
			description: "The drowned ascetic cannot swim, and it sinks to the bottom of any body of water. It takes no penalties to its movement or attacks underwater. It is immune to the effects of being underwater at a depth greater than 100 feet."
		}, {
			name: "Bound Together",
			description: "The drowned ascetic shares its mind with every other drowned one within 1 mile of it, and can communicate its thoughts and observations to them instantaneously and without limitation."
		}, {
			name: "Undead Fortitude",
			description: "If damage reduces the drowned ascetic to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success. the drowned ascetic drops to 1 hit point instead."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drowned ascetic makes three unarmed strikes."
		}
		],
		reactions: [{
			name: "Dexterous Target",
			description: "The drowned ascetic adds 3 to its AC against one ranged attack that would hit it. To do so, the drowned ascetic must see the attacker."
		}
		],
		environment: "underwater, swamp"
	},
	"Drowned Assassin": {
		name: "Drowned Assassin",
		source: ["Ghosts of Saltmarsh", 234],
		size: "Medium",
		type: "undead",
		alignment: "chaotic evil",
		ac: [14, "Leather Armor", false],
		hp: 67,
		hd: [9, 8],
		speed: "30 ft",
		scores: [15, 16, 16, 9, 9, 16],
		saves: ["", "5", "5", "", "", ""],
		skills: "Intimidation +5, Stealth +5",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60ft",
		passive_perception: "9",
		languages: "understands the languages it knew in life but can't speak",
		challenge_rating: "4",
		attacks: [{
			name: "Dagger (Melee)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 9 (2d8) poison damage, and the target must succeed on a DC 12 Constitution saving throw or contract bluerot."
		}, {
			name: "Hand Crossbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "Plus 3 (1d6) poison damage, and the target must succeed on a DC 12 Constitution saving throw or contract bluerot."
		},
		],
		traits: [{
			name: "Bluerot",
			description: "This disease targets humanoids. While afflicted with bluerot, a victim grows grotesque blue boils on their face and back. The disease is carried by undead (including the drowned ones in Tammeraut's Fate), and victims most often acquire it through wounds caused by infected creatures. The disease's boils manifests in 1d4 hours, causing the victim's Constitution and Charisma scores to decrease by 1d4 each, to a minimum of 3. This is quickly followed by a fever and tingling in the extremities. An infected creature is vulnerable to radiant damage and gains the ability to breathe underwater. At the end of each long rest, an infected creature makes a DC12 Constitution saving throw. On a success, the victim regains 1 point of Constitution and 1 point of Charisma lost to the disease. If the infected creature regains all the points lost to the disease, it is cured. Other effects that raise the victim's ability scores do not cure the disease. On a failed saving throw the victim takes 18 (4d8) necrotic damage as the boils burst and spread. A creature reduced to 0 hit points by this damage cannot regain hit points until the disease is cured, though it can be stabilized as normal."
		}, {
			name: "Bottom Treader",
			description: "The drowned assassin cannot swim, and it sinks to the bottom of any body of water. It takes no penalties to its movement or attacks underwater. It is immune to the effects of being underwater at a depth greater than 100 feet."
		}, {
			name: "Bound Together",
			description: "The drowned assassin shares its mind with every other drowned one within 1 mile of it, and can communicate its thoughts and observations to them instantaneously and without limitation."
		}, {
			name: "Undead Fortitude",
			description: "If damage reduces the drowned assassin to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the drowned assassin drops to 1 hit point instead."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drowned assassin makes two hand crossbow attacks or two dagger attacks. It can then take the Dash, Disengage, or Hide action"
		}, {
			name: "Reveal (1/Day)",
			description: "The drowned assassin removes its mask, revealing its rotting face. Each creature of the assassin's choice within 30 feet of it that can see the assassin must succeed on a DC 13 Wisdom saving throw or be frightened until the end of its next turn."
		}
		],
		reactions: [{
			name: "Dexterous Target",
			description: "The drowned ascetic adds 3 to its AC against one ranged attack that would hit it. To do so, the drowned ascetic must see the attacker."
		}
		],
		environment: "underwater, swamp"
	},
	"Drowned Blade": {
		name: "Drowned Blade",
		source: ["Ghosts of Saltmarsh", 235],
		size: "Medium",
		type: "undead",
		alignment: "chaotic evil",
		ac: [10, "Leather Armor", false],
		hp: 45,
		hd: [6, 8],
		speed: "30 ft",
		scores: [16, 8, 16, 3, 9, 5],
		saves: ["", "", "", "", "", ""],
		skills: "",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60ft",
		passive_perception: "9",
		languages: "understands the languages it knew in life but can't speak",
		challenge_rating: "2",
		attacks: [{
			name: "Rusted Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 12 Constitution saving throw or contract bluerot.",
		},
		],
		traits: [{
			name: "Bluerot",
			description: "This disease targets humanoids. While afflicted with bluerot, a victim grows grotesque blue boils on their face and back. The disease is carried by undead (including the drowned ones in Tammeraut's Fate), and victims most often acquire it through wounds caused by infected creatures. The disease's boils manifests in 1d4 hours, causing the victim's Constitution and Charisma scores to decrease by 1d4 each, to a minimum of 3. This is quickly followed by a fever and tingling in the extremities. An infected creature is vulnerable to radiant damage and gains the ability to breathe underwater. At the end of each long rest, an infected creature makes a DC12 Constitution saving throw. On a success, the victim regains 1 point of Constitution and 1 point of Charisma lost to the disease. If the infected creature regains all the points lost to the disease, it is cured. Other effects that raise the victim's ability scores do not cure the disease. On a failed saving throw the victim takes 18 (4d8) necrotic damage as the boils burst and spread. A creature reduced to 0 hit points by this damage cannot regain hit points until the disease is cured, though it can be stabilized as normal."
		}, {
			name: "Bottom Treader",
			description: "The drowned blade cannot swim, and it sinks to the bottom of any body of water. It takes no penalties to its movement or attacks underwater. It is immune to the effects of being underwater at a depth greater than 100 feet."
		}, {
			name: "Bound Together",
			description: "The drowned blade shares its mind with every other drowned one within 1 mile of it, and can communicate its thoughts and observations to them instantaneously and without limitation."
		}, {
			name: "Undead Fortitude",
			description: "If damage reduces the drowned blade to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success. the drowned blade drops to 1 hit point instead."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drowned blade makes two rusted longsword attacks."
		}
		],
		environment: "underwater, swamp"
	},
	"Drowned Master": {
		name: "Drowned Master",
		source: ["Ghosts of Saltmarsh", 235],
		size: "Medium",
		type: "undead",
		alignment: "chaotic evil",
		ac: [14, "Natural Armor", false],
		hp: 157,
		hd: [21, 8],
		speed: "30 ft",
		scores: [17, 12, 16, 9, 14, 12],
		saves: ["", "", "7", "", "6", ""],
		skills: "Perception +10",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60ft",
		passive_perception: "20",
		languages: "understands the languages it knew in life but can't speak",
		challenge_rating: "9",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 14 (4d6) cold damage, and the target must succeed on a DC 12 Constitution saving throw or contract bluerot.",
		}, {
			name: "Life-Draining Tentacle",
			ability: 1,
			damage: [2, 6, "necrotic"],
			range: "Melee (15 ft)",
			description: "Target must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this effect reduces its hit point maximum to a 0. This reduction lasts until the target finishes a long rest. On a failed saved, the target also contracts bluerot.",
		},
		],
		traits: [{
			name: "Bluerot",
			description: "This disease targets humanoids. While afflicted with bluerot, a victim grows grotesque blue boils on their face and back. The disease is carried by undead (including the drowned ones in Tammeraut's Fate), and victims most often acquire it through wounds caused by infected creatures. The disease's boils manifests in 1d4 hours, causing the victim's Constitution and Charisma scores to decrease by 1d4 each, to a minimum of 3. This is quickly followed by a fever and tingling in the extremities. An infected creature is vulnerable to radiant damage and gains the ability to breathe underwater. At the end of each long rest, an infected creature makes a DC12 Constitution saving throw. On a success, the victim regains 1 point of Constitution and 1 point of Charisma lost to the disease. If the infected creature regains all the points lost to the disease, it is cured. Other effects that raise the victim's ability scores do not cure the disease. On a failed saving throw the victim takes 18 (4d8) necrotic damage as the boils burst and spread. A creature reduced to 0 hit points by this damage cannot regain hit points until the disease is cured, though it can be stabilized as normal."
		}, {
			name: "Bound Together",
			description: "The drowned master shares its mind with every other drowned one within 1 mile of it, and can communicate its thoughts and observations to them instantaneously and without limitation."
		}, {
			name: "Cold Aura",
			description: "At the start of each of the drowned master's turns, each creature within 5 feet of it takes 5 (1d10) cold damage. A creature that touches the drowned master or hits it with a melee attack while within 5 feet of it takes 5 (1d10) cold damage"
		}, {
			name: "Undead Fortitude",
			description: "If damage reduces the drowned master to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success. the drowned master drops to 1 hit point instead."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drowned master makes two attacks: one with its greatsword and one with its Life-Draining tentacles"
		}, {
			name: "Necrotic Ink (Recharge 5-6)",
			description: [
				"The drowned master discharges foul ink in front of itself in a 3O-foot cone. Each creature caught in the ink must make a DC 15 Constitution saving throw, taking 27 (6d8) necrotic damage on a failed save or half as much damage on a successful one. A creature that fails this saving throw is blinded until the end of its next turn and contracts bluerot (see the \"Bluerot\" sidebar).",
				"Bluerot: This disease targets humanoids. While afflicted with bluerot, a victim grows grotesque blue boils on their face and back. The disease is carried by undead (including the drowned ones in Tammeraut's Fate), and victims most often acquire it through wounds caused by infected creatures. The disease's boils manifests in 1d4 hours, causing the victim's Constitution and Charisma scores to decrease by 1d4 each, to a minimum of 3. This is quickly followed by a fever and tingling in the extremities. An infected creature is vulnerable to radiant damage and gains the ability to breathe underwater. At the end of each long rest, an infected creature makes a DC12 Constitution saving throw. On a success, the victim regains 1 point of Constitution and 1 point of Charisma lost to the disease. If the infected creature regains all the points lost to the disease, it is cured. Other effects that raise the victim's ability scores do not cure the disease. On a failed saving throw the victim takes 18 (4d8) necrotic damage as the boils burst and spread. A creature reduced to 0 hit points by this damage cannot regain hit points until the disease is cured, though it can be stabilized as normal."
			]
		}
		],
		environment: "underwater, swamp"
	},
	"Giant Coral Snake": {
		name: "Giant Coral Snake",
		source: ["Ghosts of Saltmarsh", 236],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [13, "", false],
		hp: 90,
		hd: [12, 10],
		speed: "30 ft, swim 30ft",
		scores: [12, 16, 14, 2, 10, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "blindsight 10 ft",
		passive_perception: "12",
		languages: "",
		challenge_rating: "4",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [2, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 12 Constitution saving throw or be stunned until the end of its next turn. On a failed save, the target begins to hallucinate and is afflicted with a short-term madness effect (determined randomly or by the DM; see \"Madness\" in chapter 8 of the Dungeon Master's Guide). The effect lasts 10 minutes.",
		},
		],
		environment: "swamp, underwater"
	},
	"Giant Sea Eel": {
		name: "Giant Sea Eel",
		source: ["Ghosts of Saltmarsh", 237],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 19,
		hd: [3, 10],
		speed: "0 ft, swim 40ft",
		scores: [11, 14, 12, 7, 10, 7],
		saves: ["", "4", "", "", "", ""],
		skills: "Perception +2, Stealth +4",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [2, 10, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Water Breathing",
			description: "The eel can breathe only underwater"
		}
		],
		environment: "swamp, underwater"
	},
	"Harpy Matriarch": {
		name: "Harpy Matriarch",
		source: ["Ghosts of Saltmarsh", 237],
		size: "Medium",
		type: "monstrosity",
		alignment: "chaotic evil",
		ac: [14, "Natural Armor", false],
		hp: 88,
		hd: [16, 8],
		speed: "20 ft, fly 40 ft",
		scores: [13, 16, 12, 9, 10, 16],
		saves: ["", "6", "", "", "", "6"],
		skills: "Perception +3",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60ft",
		passive_perception: "13",
		languages: "Common",
		challenge_rating: "5",
		attacks: [{
			name: "Claws",
			ability: 2,
			damage: [3, 6, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Luring Maestro",
			description: "While within 60 feet of matriach, creatures have disadvantage on saving throws against the matriach's Luring Song"
		}, {
			name: "Magic Resistance",
			description: "The matriarch has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The harpy makes two claw attacks."
		}, {
			name: "Fleeting Form",
			description: "The matriarch can magically disguise itself to resemble a humanoid of roughly similar size and shape for up to 1 hour. It can revert to its true form as a bonus action. This illusion does not hold up to close scrutiny."
		}, {
			name: "Luring Song",
			description: [
				"The matriarch sings a magical melody. Every humanoid and giant within 300 ft of the matriarch that can hear the song must succeed on a DC 14 Wisdom saving throw or be charmed until the song ends. The matriarch must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the matriarch is incapacitated.",
				"While charmed by the matriarch, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 ft away from the matriarch, the target must move on its turn toward the matriarch by the most direct route. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the matriarchy, a target can repeat the saving throw. A charmed creature can also repeat the saving throw at the end of each of its turns. If the saving throw is successful, the effect ends on it.",
				"A target that successfully saves is immune to this matriarch's song for the next 24 hours.",
				"",
				"Charmed:",
				"A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects.",
				"",
				"The charmer has advantage on any ability check to interact socially with the creature."
			]
		}, {
			name: "Visage of Desire (1/Day)",
			description: "The matriarch projects a vision into the minds of creatures within 30 ft of it that aren't constructs or undead, showing each creature achieving whatever it most desires. An affected creature must succeed on a DC 14 Wisdom saving throw or drop whatever it is holding and become paralyzed until the end of its next turn."
		}
		],
		environment: "coastal, forest, hill, mountain"
	},
	"Juvenile Kraken": {
		name: "Juvenile Kraken",
		source: ["Ghosts of Saltmarsh", 238],
		size: "Huge",
		type: "monstrosity",
		alignment: "chaotic evil",
		ac: [16, "Natural Armor", false],
		hp: 207,
		hd: [18, 12],
		speed: "20ft, swim 50ft",
		scores: [24, 11, 20, 19, 15, 17],
		saves: ["12", "5", "10", "9", "7", ""],
		skills: "",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "lightning",
		condition_immunities: "frightened, paralyzed",
		senses: "truesight 120ft",
		passive_perception: "12",
		languages: "understands Abyssal, Celestial, Infernal and Primordial but can't speak; telepathy 60ft",
		challenge_rating: "14",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a Medium of smaller creature grappled by the kraken, that creature is swallowed and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 21 (6d6) acid damage at the start of each of the kraken's turns. One Medium or two smaller creatures can be swallowed at the same time. If the kraken takes 35 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 23 Constitution saving throw at the end of the turn or regurgitate all swallowed creatures, which fall prone in spaces within 10ft of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape the corpse using 10ft of movement, exiting prine."
		}, {
			name: "Tentacle",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "Target is grappled (escape DC 20). Until the grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target.",
		},
		],
		traits: [{
			name: "Amphibious",
			description: "The kraken can breathe air and water."
		}, {
			name: "Freedom of Movement",
			description: "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can sped 5ft of movement to escape from nonmagical restraints of being grappled."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The kraken makes two tentacle attacks, each of which it can replace with a use of Fling."
		}, {
			name: "Fling",
			description: "One Medium or smaller object held of creature grappled by the kraken is thrown up to 40 ft in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 ft it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone."
		}, {
			name: "Lightning",
			description: "The kraken magically creates a bolt of lightning, which can strike a target the kraken can see within 90 ft of it. The target must make a DC 18 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The kraken can take 3 legendary actions, choosing from the operations below. Only one legendary action option can be used at a time and only a the end of another creature's turn. The kraken regains spent legendary actions at the start of its turn."
		}, {
			name: "Tentacle Attacks (Costs 2 Actions)",
			description: "The kraken makes one tentacle attack"
		}, {
			name: "Fling",
			description: "The kraken uses Fling"
		}, {
			name: "Ink Cloud (Costs 3 Actions",
			description: "While underwater, the karekn expels an ink cloud in a 40-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 18 Constitution saving throw, taking 11 (2d10) poison damage on a failed save of half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn."
		}
		],
		environment: "underwater"
	},
	"Koalinth": {
		name: "Koalinth",
		source: ["Ghosts of Saltmarsh", 238],
		size: "Medium",
		type: "humanoid (goblinoid)",
		alignment: "lawful evil",
		ac: [14, "Scale Mail", false],
		hp: 16,
		hd: [3, 8],
		speed: "30 ft, swim 20 ft",
		scores: [13, 11, 12, 11, 10, 11],
		saves: ["", "2", "", "", "", ""],
		skills: "Athletics +3, Perception +2",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "Common, Goblin",
		challenge_rating: "1/2",
		attacks: [{
			name: "Trident (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 5 (1d8+1) piercing damage.",
		}, {
			name: "Trident (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Amphibious",
			description: "The koalinth can breathe air and water."
		}, {
			name: "Martial Advantage",
			description: "Once per turn, the koalinth can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5ft of an ally of the koalinth that isn't incapacitated."
		}
		],
		environment: "underwater"
	},
	"Koalinth Sergeant": {
		name: "Koalinth Sergeant",
		source: ["Ghosts of Saltmarsh", 239],
		size: "Medium",
		type: "humanoid (goblinoid)",
		alignment: "lawful evil",
		ac: [14, "Scale Mail", false],
		hp: 33,
		hd: [6, 8],
		speed: "30 ft, swim 30 ft",
		scores: [14, 11, 12, 11, 10, 12],
		saves: ["", "2", "", "", "2", ""],
		skills: "Athletics +4, Perception +2",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "Common, Goblin",
		challenge_rating: "2",
		attacks: [{
			name: "Trident (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 6 (1d8+2) piercing damage.",
		}, {
			name: "Trident (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: ""
		}, {
			name: "Hooked Net",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Ranged (10/30 ft)",
			description: "Target is restrained. A creature can use its action to make a DC 12 Strength check to free iteself or another creature in a hooked net, ending the effect on a success. Dealing 5 damage (AC 12) frees the target without harming it and destroys the net."
		},
		],
		traits: [{
			name: "Amphibious",
			description: "The koalinth can breathe air and water."
		}, {
			name: "Martial Advantage",
			description: "Once per turn, the sergeant can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5ft of an ally of the sergeant that isn't incapacitated."
		}
		],
		reactions: [{
			name: "Spear the Helpless (2/Day)",
			description: "Whenever a creature within 30 ft of the sergeant becomes restrained, the sergeant can move its speed toward the restrained creature. If the sergeant ends its move within reach of the restrained creature it can make a melee attack against it."
		}
		],
		environment: "underwater"
	},
	"Kysh": {
		name: "Kysh",
		source: ["Ghosts of Saltmarsh", 240],
		size: "Medium",
		type: "humanoid (triton)",
		alignment: "lawful good",
		ac: [13, "", false],
		hp: 27,
		hd: [5, 8],
		speed: "30 ft, swim 30 ft",
		scores: [14, 16, 12, 10, 13, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Persuasion +4, Survival +3",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60ft",
		passive_perception: "11",
		languages: "Common, Primordial",
		challenge_rating: "1",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 6 (1d8+2) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Amphibious",
			description: "Kysh can breathe air and water"
		}, {
			name: "Emmisary of the Sea",
			description: "Kysh can communicate simple ideas with ambphibious and water-breathing beasts. They understand the meaning of his words, but he cannot understand them in return."
		}, {
			name: "Innate Spellcasting",
			description: "Kysh's spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). He can cast the following spell, requiring only verbal components: \t1/Day: Fog Cloud"
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Kysh makes two melee attacks with his spear."
		},
		],
		environment: "underwater"
	},
	"Living Iron Statue": {
		name: "Living Iron Statue",
		source: ["Ghosts of Saltmarsh", 241],
		size: "Medium",
		type: "construct",
		alignment: "unaligned",
		ac: [16, "Natural Armor", false],
		hp: 102,
		hd: [12, 8],
		speed: "20 ft",
		scores: [16, 14, 18, 6, 10, 5],
		saves: ["", "", "", "", "", ""],
		skills: "",
		damage_resistances: "",
		damage_vulnerabilities: "acid",
		damage_immunities: "lightning, poison",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "understands the languages of its creator but can't speak",
		challenge_rating: "5",
		attacks: [{
			name: "Blade",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Hammer",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target is knocked prone.",
		},
		],
		traits: [{
			name: "Immutable Form",
			description: "The status is immune to any spell or effect that would alter its form"
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The statue makes two attacks: one with its blade and one with its hammer"
		}, {
			name: "Whirl (Recharge 5-6)",
			description: "The statue can use its action to spin at the waist, targeting creatures of its choice within 10 feet of it. Each target must make a DC 13 Dexterity saving throw, taking 19 (3d10+3) bludgeoning damage on a failed save, or half as much damage on a successful one."
		}
		]
	},
	"Lizardfolk Commoner": {
		name: "Lizardfolk Commoner",
		source: ["Ghosts of Saltmarsh", 241],
		size: "Medium",
		type: "humanoid (lizardfolk)",
		alignment: "neutral",
		ac: [13, "Natural Armor", false],
		hp: 16,
		hd: [3, 8],
		speed: "30 ft, swim 30 ft",
		scores: [15, 10, 12, 7, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +2, Survival +3",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "13",
		languages: "Draconic",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Melee Weapon Attack: +4 to hit, reach 5 ft, one target. Hit: 5 (1d6+2) damage.",
		},
		],
		traits: [{
			name: "Hold Breath",
			description: "The lizardfolk can hold its breath for 15 minutes."
		}
		],
		environment: "forest, swamp"
	},
	"Lizardfolk Render": {
		name: "Lizardfolk Render",
		source: ["Ghosts of Saltmarsh", 241],
		size: "Large",
		type: "humanoid (lizardfolk)",
		alignment: "neutral",
		ac: [15, "Natural Armor", false],
		hp: 52,
		hd: [7, 10],
		speed: "30 ft, swim 30 ft",
		scores: [16, 10, 14, 7, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +5, Perception +3, Survival +5",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "13",
		languages: "Draconic",
		challenge_rating: "3",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (10 ft)",
			description: ""
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Blood Frenzy",
			description: "The render has advantage on melee attack rolls against any creatire that doesn't have all its hit points."
		}, {
			name: "Hold Breath",
			description: "The render can hold its breath for 15 minutes."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The render makes two melee attacks, one with a claws and one with its bite."
		}, {
			name: "Rend the Field (Recharge 5-6)",
			description: "The render makes a claw attack against each creature of its choice within 10 feet of it. A creature hit by this attack must succeed on a DC 13 strength saving throw or be knocked prone."
		}
		],
		environment: "forest, swamp"
	},
	"Lizardfolk Scaleshield": {
		name: "Lizardfolk Scaleshield",
		source: ["Ghosts of Saltmarsh", 241],
		size: "Medium",
		type: "humanoid (lizardfolk)",
		alignment: "neutral",
		ac: [16, "Scale Mail", true],
		hp: 32,
		hd: [5, 8],
		speed: "30 ft, swim 30 ft",
		scores: [15, 10, 14, 7, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +4, Perception +4, Survival +5",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "13",
		languages: "Draconic",
		challenge_rating: "1",
		attacks: [{
			name: "Morningstar",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Spiked Shield",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Hold Breath",
			description: "The lizardfolk can hold its breath for 15 minutes."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The scaleshield makes two melee attacks: eacg one with a different weapon"
		}
		],
		environment: "forest, swamp"
	},
	"Lizardfolk Subchief": {
		name: "Lizardfolk Subchief",
		source: ["Ghosts of Saltmarsh", 242],
		size: "Medium",
		type: "humanoid (lizardfolk)",
		alignment: "neutral",
		ac: [14, "Natural Armor", false],
		hp: 52,
		hd: [8, 8],
		speed: "30 ft, swim 30 ft",
		scores: [14, 12, 14, 10, 16, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +4, Perception +5, Survival +5",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "15",
		languages: "Draconic",
		challenge_rating: "3",
		attacks: [{
			name: "Tooth Dagger",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Hold Breath",
			description: "The lizardfolk can hold its breath for 15 minutes."
		}
		],
		spells: [
			"The subchief is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). It has the following cleric spells prepared:",
			"Cantrips (at will): light, sacred flame, spare the dying, thaumaturgy",
			"1st Level (4 slots): command, guiding bolt, purify food and drink",
			"2nd Level (3 slots): hold person, lesser restoration, silence",
			"3rd Level (2 slots): bestow curse, dispel magic"
		],
		actions: [{
			name: "Jaws of Semuanya (Recharge 5-6)",
			description: "The subchiefinvokes the primal magic of Semuanya, summoning a spectral maw around a target it can see within 60 feet of it. The target must make a DC 13 Dexterity saving throw, taking 22 (5d8) piercing damage on a failed save, or half as much damage on a successful one. A creature that fails this saving throw is also frightened until the end of its next turn."
		}
		],
		slots: "4, 3, 2",
		environment: "forest, swamp"
	},
	"Locathah": {
		name: "Locathah",
		source: ["Ghosts of Saltmarsh", 243],
		size: "Medium",
		type: "humanoid (locathah)",
		alignment: "neutral",
		ac: [13, "Natural Armor", false],
		hp: 22,
		hd: [4, 8],
		speed: "30 ft, swim 30 ft",
		scores: [13, 12, 12, 11, 10, 11],
		saves: ["", "5", "", "", "", ""],
		skills: "Athletics +3, Perception +2",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "12",
		languages: "Aquan, Common",
		challenge_rating: "1/2",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 5 (1d8+1) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Leviathan Will",
			description: "The locathah has advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep"
		}, {
			name: "Limited Amphibiousness",
			description: "The locathah can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating"
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The locathah makes two melee attacks with its spear."
		},
		],
		environment: "swamp, underwater"
	},
	"Locathah Hunter": {
		name: "Locathah Hunter",
		source: ["Ghosts of Saltmarsh", 243],
		size: "Medium",
		type: "humanoid (locathah)",
		alignment: "neutral",
		ac: [14, "Natural Armor", false],
		hp: 88,
		hd: [16, 8],
		speed: "30 ft, 30 ft swim",
		scores: [13, 14, 12, 11, 14, 11],
		saves: ["", "4", "", "", "4", ""],
		skills: "Athletics +3, Perception +4",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "14",
		languages: "Aquan, Common",
		challenge_rating: "2",
		attacks: [{
			name: "Envenomed Crossbow",
			ability: 2,
			damage: [2, 8, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "Target must succeed on a DC 12 Constitution saving throw or be poisoned until the end of its next turn.",
		}, {
			name: "Club",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Leviathan Will",
			description: "The hunter has advantage on saving throws against spells and effects that control its actions"
		}, {
			name: "Limited Amphibiousness",
			description: "The hunter can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating"
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hutner makes two attacks with its envenonmed crossbow."
		}
		],
		environment: "swamp, underwater"
	},
	"Maw of Sekolah": {
		name: "Maw of Sekolah",
		source: ["Ghosts of Saltmarsh", 244],
		size: "Huge",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [12, "Natural Armor", false],
		hp: 114,
		hd: [12, 12],
		speed: "0 ft, 50 ft swim",
		scores: [21, 12, 17, 2, 14, 7],
		saves: ["8", "", "6", "", "", ""],
		skills: "Athletics +8, Perception +5",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "15",
		languages: "Sahuagin, telepathy 100 ft",
		challenge_rating: "7",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail Smash",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Legendary Resistance (2/Day)",
			description: "If the maw of Sekolah fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Water Breathing",
			description: "The maw of Sekolah can breathe only underwater"
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The maw of Sekolah makes one attack with its bite and one attack with its tail smash."
		},
		],
		legendary_actions: [{
			description: "The maw of Sekolah can take 3. legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The maw regains spent legendary actions at the start of its turn."
		}, {
			name: "Detect",
			description: "The maw of Sekolah makes a Wisdom (Perception) check."
		}, {
			name: "Speed of Sekolah",
			description: "The maw of Sekolah moves up to its speed."
		}, {
			name: "Feed (Costs 2 Actions)",
			description: "The ferocious spirit of Sekolah flashes through the water, tearing through the foes of the maw of Sekolah. Each creature of the maw's choosing within 60 feet of it must make a DC 16 Dexterity saving throw, taking 7 (2d6) slashing damage on a failed save, or half as much damage on a successful one."
		}
		],
		environment: "underdark"
	}
}