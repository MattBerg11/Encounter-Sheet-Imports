
var LMoP = {
	"Evil Mage": {
		name: "Evil Mage",
		source: ["Lost Mines of Phandelver", 57],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "lawful evil",
		ac: [12, "", false],
		hp: 22,
		hd: [5, 8],
		speed: "30 ft",
		scores: [9, 14, 11, 17, 12, 11],
		saves: ["", "", "", "5", "3", ""],
		skills: "Arcana +5, History +5",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "11",
		languages: "Common, Draconic, Dwarvish, Elvish",
		challenge_rating: "1",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		spells: [
			"The mage is a 4th-level spellcaster that uses Intelligence as its spellcasting ability (spell save DC 13; +5 to hit with spell attacks). The mage knows the following spells from the wizard's spell list:",
			"Cantrips (at will): light, mage hand, shocking grasp",
			"1st Level (4 slots): charm person, magic missile",
			"2nd Level (3 slots): hold person, misty step"
		]
	},
	"Mormesk the Wraith": {
		name: "Mormesk the Wraith",
		source: ["Lost Mines of Phandelver", 59],
		size: "Medium",
		type: "undead",
		alignment: "neutral evil",
		ac: [13, "", false],
		hp: 45,
		hd: [6, 8],
		speed: "0 ft, fly 60 ft",
		scores: [6, 16, 16, 12, 14, 15],
		saves: ["", "", "", "", "", ""],
		skills: "",
		damage_resistances: "acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		damage_vulnerabilities: "",
		damage_immunities: "necrotic, poison",
		condition_immunities: "charmed, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "Common, Infernal",
		challenge_rating: "3",
		attacks: [{
			name: "Life Drain",
			ability: 2,
			damage: [3, 8, "necrotic"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. If this attack reduces the target's hit point maximum to 0, the target dies. This reduction to the target's hit point maximum lasts until the target finishes a long rest.",
		},
		],
		traits: [{
			name: "Incorporeal Movement",
			description: "The wraith can move through an object or another creature, but can't stop there."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the wraith has disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight."
		}
		],
	},
	"Nezznar the Black Spider": {
		name: "Nezznar the Black Spider",
		source: ["Lost Mines of Phandelver", 59],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "neutral evil",
		ac: [11, "", false],
		hp: 27,
		hd: [6, 8],
		speed: "30 ft",
		scores: [9, 13, 10, 16, 14, 13],
		saves: ["", "", "", "5", "4", ""],
		skills: "Arcana +5, Perception +4, Stealth +3",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "14",
		languages: "Elvish, Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "Spider Staff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) poison damage.",
		},
		],
		traits: [{
			name: "Special Equipment",
			description: "Nezznar has a spider staff."
		}, {
			name: "Fey Ancestry",
			description: "Nezznar has advantage on saving throws against being charmed, and magic can't put him to sleep."
		}, {
			name: "Sunlight Sensitivity",
			description: "Nezznar has disadvantage on attack rolls when he or his target is in sunlight."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Nezznar can innately cast the following spells, requiring no material components:",
				"At will: dancing lights",
				"1/day each: darkness, faerie fire (save DC 12)"
			]
		}
		],
		spells: [
			"Nezznar is a 4th-level spellcaster that uses Intelligence as his spellcasting ability (spell save DC 13; +5 to hit with spell attacks). Nezznar has the following spells prepared from the wizard's spell list:",
			"Cantrips (at will): mage hand, ray of frost, shocking grasp",
			"1st Level (4 slots): mage armor, magic missile, shield",
			"2nd Level (3 slots): invisibility, suggestion"
		]
	},
	"Redbrand Ruffian": {
		name: "Redbrand Ruffian",
		source: ["Lost Mines of Phandelver", 61],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [14, "Studded Leather Armor", false],
		hp: 16,
		hd: [3, 8],
		speed: "30 ft",
		scores: [11, 14, 12, 9, 9, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +2",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "9",
		languages: "Common",
		challenge_rating: "1/2",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The ruffian makes two melee attacks."
		}
		],
	},
	"Sildar Hallwinter": {
		name: "Sildar Hallwinter",
		source: ["Lost Mines of Phandelver", 61],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral good",
		ac: [16, "Chain Mail", false],
		hp: 27,
		hd: [5, 8],
		speed: "30 ft",
		scores: [13, 10, 12, 10, 11, 10],
		saves: ["3", "", "3", "", "", ""],
		skills: "Perception +2",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "12",
		languages: "Common",
		challenge_rating: "1",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Heavy Crossbow",
			ability: 2,
			damage: [1, 10, "piercing"],
			range: "Ranged (100/400 ft)",
			description: "",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "Sildar makes two melee attacks."
		}
		],
		reactions: [{
			name: "Parry",
			description: "When an attacker hits Sildar with a melee attack and Sildar can see the attacker, he can roll 1d6 and add the number rolled to his AC against the triggering attack, provided that he's wielding a melee weapon."
		}
		]
	}
}

