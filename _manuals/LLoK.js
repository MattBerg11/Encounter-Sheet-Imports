var LLoK = {
	"Brain in a Jar": {
		name: "Brain in a Jar",
		source: ["Lost Laboratory of Kwalish", 38],
		size: "Medium",
		type: "undead",
		alignment: "Any alignment",
		ac: [11, "Natural Armor", false],
		hp: 58,
		hd: [9, 8],
		scores: [1, 1, 15, 19, 10, 15],
		saves: ["", "", "", "7", "", "5"],
		skills: "",
		passive_perception: "10",
		languages: "",
		challenge_rating: "6",
		damage_resistances: "",
		damage_immunities: "necrotic, poison, psychic",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "",
			ability: 1,
			damage: [0, 0, ""],
			range: "",
			description: "",
		},
		],
		traits: [{
			name: "Detect Sentience",
			description: "The brain in a jar can sense the presence and location of any creature within 300 feet of it that has an Intelligence of 3 or higher, regardless of interposing barriers, unless the creature is protected by a mind blank spell."
		}, {
			name: "Magic Resistance",
			description: "The brain in a jar has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The brain in a jar's innate spellcasting ability is Intelligence (spell save DC 15). It can innately cast the following spells, requiring no components:",
				"At will: detect thoughts, mage hand, zone of truth",
				"3/day each: charm person, command, hold person",
				"1/day each: compulsion, hold monster, sleep (cast at 3rd level), Tasha's hideous laughter"
			]
		}
		],
		action: {
			name: "Mind Blast (Recharge 5-6)",
			description: "The brain in a jar magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take 13 (2d8+4) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		},
	},
	"Clockwork Kraken": {
		name: "Clockwork Kraken",
		source: ["Lost Laboratory of Kwalish", 38],
		size: "Large",
		type: "construct",
		alignment: "Unaligned",
		ac: [17, "Natural Armor", false],
		hp: 142,
		hd: [15, 10],
		scores: [20, 12, 18, 3, 11, 1],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "10",
		languages: "understands the languages of its creator but can't speak",
		challenge_rating: "10",
		damage_resistances: "fire, poison; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "poison, psychic",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Tentacle Slam",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Magic Resistance",
			description: "The clockwork kraken has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Independent Tentacles",
			description: [
				"The clockwork kraken has eight tentacles, each of which is treated as a Medium creature, moves independently on the construct's turn, and has a flying speed of 40 feet. The clockwork kraken's senses operate through its tentacles as well as its main body. Each tentacle can be attacked independently, with damage dealt to tentacles applied to the clockwork kraken's hit point total. A tentacle is destroyed if it takes more than 20 damage.",
				"Reducing the construct to three or fewer tentacles reduces its attacks accordingly. A clockwork kraken can regrow any destroyed tentacles at the end of a long rest."
			]
		}
		],
		action: [{
			name: "Multiattack",
			description: "The clockwork kraken makes four tentacle slam attacks."
		}
		],
	},
	"Garret Levistusson": {
		name: "Garret Levistusson",
		source: ["Lost Laboratory of Kwalish", 41],
		size: "Medium",
		type: "humanoid",
		alignment: "Chaotic Neutral",
		ac: [14, "Natural Armor", false],
		hp: 44,
		hd: [8, 8],
		scores: [11, 14, 12, 11, 12, 17],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +7, Investigation +4, Performance +5, Persuasion +5",
		passive_perception: "11",
		languages: "Abyssal, Common, Infernal, Thieves' cant",
		challenge_rating: "2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Special Equipment",
			description: "Garret wears a Ring of Warmth (included in his statistics) and wields a Gambler's Blade longsword."
		}, {
			name: "Bardic Inspiration (3/Day)",
			description: "As a bonus action, Garret can give one chosen creature (other than him) a d6 inspiration die. The chosen creature must be within 60 feet of Garret and able to hear him. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can use the inspiration die after the roll is made but before the DM says whether it succeeds or fails. Once the inspiration die is rolled, it is lost. A creature can have only one inspiration die at a time."
		}, {
			name: "Cunning Action",
			description: "On each of his turns, Garret can use a bonus action to take the Dash, Disengage, or Hide action."
		}, {
			name: "Sneak Attack (1/Turn)",
			description: "Garret deals an extra 7 (2d6) damage when he hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of Garret that isn't incapacitated and Garret doesn't have disadvantage on the attack roll."
		}
		],
		spells: [
			"Garret is a 2nd-level spellcaster. His spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). He has the following bard spells prepared:",
			"Cantrips (at will): blade ward, vicious mockery",
			"1st level (3 slots): charm person, detect magic, disguise self, identify, Tasha's hideous laughter"
		],
		slots: "3",
	},
	"Mary Greymalkin": {
		name: "Mary Greymalkin",
		source: ["Lost Laboratory of Kwalish", 41],
		size: "Medium",
		type: "humanoid",
		alignment: "Neutral",
		ac: [12, "Bracers of Defense", false],
		hp: 45,
		hd: [7, 8],
		scores: [10, 12, 10, 14, 14, 15],
		saves: ["", "", "", "", "4", "4"],
		skills: "Arcana +4, Medicine +4, Nature +4, Religion +4",
		passive_perception: "12",
		languages: "Abyssal, Celestial, Common, Elvish, Infernal, Sylvan",
		challenge_rating: "2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Special Equipment",
			description: "Mary wears Bracers of Defense and a Ring of Protection, and carries a Deck of Several Things"
		}, {
			name: "Fey Presence (Recharges after a Short Rest)",
			description: "Mary can cause each creature within 10 feet of her to succeed on a DC 12 Wisdom saving throw or become charmed or frightened by her (Mary's choice) until the end of her next turn."
		}, {
			name: "Fey Ancestry",
			description: "Mary has advantage on saving throws against being charmed, and magic can't put her to sleep."
		}
		],
		spells: [
			"Mary is a 5th-level spellcaster. Her spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). She regains her expended spell slots when she finishes a short or long rest. She knows the following warlock spells:",
			"Cantrips (at will): chill touch, eldritch blast, mage hand",
			"3rd level (3 slots): darkness, hex, hypnotic pattern, misty step, phantasmal force, unseen servant"
		],
		slots: "3",
	},
	"Ooze-Folk": {
		name: "Ooze-Folk",
		source: ["Lost Laboratory of Kwalish", 46],
		size: "Medium",
		type: "ooze",
		alignment: "Unaligned",
		ac: [10, "Natural Armor", false],
		hp: 19,
		hd: [2, 8],
		scores: [14, 3, 20, 1, 6, 1],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "8",
		languages: "",
		challenge_rating: "1/2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, prone",
		senses: "blindsight 60 ft",
		attacks: [{
			name: "Glass Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "If a 1 is rolled on an attack roll with a glass longsword, it shatters and can no longer be used.",
		}, {
			name: "Pseudopod",
			ability: 1,
			damage: [1, 6, "acid"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Transparent",
			description: "Even when an ooze-folk is in plain sight, it takes a DC 12 Wisdom (Perception) check to spot an ooze-folk that has neither moved nor attacked. A creature that tries to enter the ooze-folk's space while unaware of the ooze-folk is surprised by the ooze-folk."
		}, {
			name: "Fragile Bones",
			description: "For each 5 damage it takes, the ooze-folk's walking speed is reduced by 5 feet."
		}
		],
		action: [{
			name: "Multiattack",
			description: "The ooze folk makes one glass longsword attack and one pseudopod attack."
		}
		],
	},
	"Gloine Nathair-Nathair": {
		name: "Gloine Nathair-Nathair",
		source: ["Infernal Machine Rebuild", 23],
		size: "Medium",
		type: "monstrosity",
		alignment: "Lawful Evil",
		ac: [15, "Natural Armor", false],
		hp: 127,
		hd: [17, 8],
		scores: [10, 15, 16, 12, 13, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Insight +4, Perception +4, Stealth +5",
		passive_perception: "14",
		languages: "Common",
		challenge_rating: "6",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Snake Hair",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 14 (4d6) poison damage.",
		}, {
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "Plus 7 (2d6) poison damage.",
		},
		],
		traits: [{
			name: "Petrifying Gaze",
			description: [
				"When a creature that can see Gloine's eyes starts its turn within 30 feet of Gloine, Gloine can force it to make a DC 14 Constitution saving throw if Gloine isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the  greater restoration spell or other magic.",
				"Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see Gloine until the start of its next turn, when it can avert its eyes again. If the creature looks at Gloine in the meantime, it must immediately make the save.",
				"If Gloine sees itself reflected on a polished surface within 30 feet of it and in an area of bright light, Gloine is, due to its curse, affected by its own gaze."
			]
		}
		],
		action: [{
			name: "Multiattack",
			description: "Gloine makes either three melee attacks—one with its snake hair and two with its shortsword—or two ranged attacks with its longbow."
		}
		],
		environment: "desert"
	}
}

function doAThing() {
	for (key in LLoK) {
		console.log("\"" + LLoK[key].name + "\": -1,");
	}
}
doAThing();