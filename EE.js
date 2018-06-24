var EE = {
	// 42
	"Aerisi Kalinoth": {
		name: "Aerisi Kalinoth",
		source: ["Princes of the Apocalypse", 193],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "neutral evil",
		ac: [13, "", false],
		hp: 66,
		hd: [12, 8],
		speed: "30 ft",
		scores: [8, 16, 12, 17, 10, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +6, History +6, Perception +3",
		damage_resistances: "lightning",
		senses: "darkvision 60 ft",
		passivePerception: "13",
		languages: "Auran, Common, Elvish",
		challengeRating: "7",
		proficiencyBonus: 3,
		attacks: [{
				name: "Windvane (Melee)",
				ability: 2,
				damage: [1, 8, "piercing"],
				range: "Melee (5 ft)",
				description: "Plus 3 (1d6) lightning damage. 10 (1d8 +6) piercing damage if used with two hands.",
			}, {
				name: "Windvane (Ranged)",
				ability: 2,
				damage: [1, 8, "piercing"],
				range: "Ranged (20/60 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Fey Ancestry",
				description: "Aerisi has advantage on saving throws against being charmed, and magic can't put her to sleep."
			}, {
				name: "Howling Defeat",
				description: "When Aerisi drops to 0 hit points, her body disappears in a howling whirlwind that disperses quickly and harmlessly. Anything she is wearing or carrying is left behind."
			}, {
				name: "Legendary Resistance (2/Day)",
				description: "If Aerisi fails a saving throw, she can choose to succeed instead."
			}
		],
		spells: [
			"Aerisi is a 12th-level spellcaster. Her spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). Aerisi has the following wizard spells prepared: ",
			"Cantrips (at will): gust, mage hand, message, prestidigitation, ray of frost, shocking grasp", "1st level (4 slots): charm person, feather fall, mage armor, thunderwave",
			"2nd level (3 slots): dust devil, gust of wind, invisibility",
			"3rd level (3 slots): fly, gaseous form, lightning bolt",
			"4th level (3 slots): ice storm, storm sphere",
			"5th level (2 slots): cloudkill, seeming (cast each day) ", "6th level (1 slot): chain lightning"
		]
	},
	"Air Elemental Myrmidon": {
		name: "Air Elemental Myrmidon",
		source: ["Princes of the Apocalypse", 212],
		size: "Medium",
		type: "elemental",
		alignment: "neutral",
		ac: [18, "Plate", false],
		hp: 117,
		hd: [18, 8],
		speed: "30 ft, fly 30 ft",
		scores: [18, 14, 14, 9, 10, 10],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "paralyzed, petrified, poisoned, prone",
		senses: "darkvision 60 ft",
		passivePerception: "10",
		languages: "Auran, one language of its creator's choice",
		challengeRating: "7",
		proficiencyBonus: 3,
		attacks: [{
				name: "Flail",
				ability: 1,
				damage: [1, 8, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Magic Weapons",
				description: "The myrmidon's weapon attacks are magical."
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The myrmidon makes three flail attacks."
			}, {
				name: "Lightning Strike (Recharge 6)",
				description: "The myrmidon makes one flail attack. If the attack hits, it deals an extra 18 (4d8) lightning damage, and the target must succeed on a DC 14 Constitution saving throw or be stunned until the end of the myrmidon's next turn.",
			},
		]

	},
	"Bastian Thermandar": {
		name: "Bastian Thermandar",
		source: ["Princes of the Apocalypse", 201],
		size: "Medium",
		type: "humanoid (fire genasi)",
		alignment: "neutral evil",
		ac: [12, "", false],
		hp: 78,
		hd: [12, 8],
		speed: "30 ft",
		scores: [12, 14, 15, 11, 9, 18],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +3, Deception +7",
		damage_resistances: "fire",
		senses: "darkvision 60 ft",
		passivePerception: "9",
		languages: "Common, Ignan",
		challengeRating: "8",
		proficiencyBonus: 3,
		attacks: [{
				name: "Dagger (Melee)",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Dagger (Ranged)",
				ability: 2,
				damage: [1, 4, ""],
				range: "Ranged (20/60 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Innate Spellcasting",
				description: [
					"Bastian's innate spellcasting ability is Constitution (spell save DC 13, +5 to hit with spell attacks). He can innately cast the following spells: ",
					"At will: produce flame",
					"1/day: burning hands"
				]
			},
		],
		spells: [
			"Bastian is a 9th-level spellcaster. His spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). Bastian knows the following sorcerer spells: ",
			"Cantrips (at will): fire bolt, mage hand, message, prestidigitation, shocking grasp",
			"1st level (4 slots): mage armor, magic missile, shield",
			"2nd level (3 slots): misty step, scorching ray",
			"3rd level (3 slots): counterspell, fireball",
			"4th level (3 slots): dimension door, wall of fire",
			"5th level (1 slot): hold monster"
		]
	},
	"Black Earth Guard": {
		name: "Black Earth Guard",
		source: ["Princes of the Apocalypse", 195],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [18, "Plate", false],
		hp: 39,
		hd: [6, 8],
		speed: "30 ft",
		scores: [17, 11, 14, 10, 10, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +1, Perception +2",
		passivePerception: "12",
		languages: "Common",
		challengeRating: "2",
		proficiencyBonus: 2,
		attacks: [{
				name: "Morningstar",
				ability: 1,
				damage: [1, 8, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The guard makes two melee attacks."
			},
		],
		reactions: [{
			name: "Unyielding",
			description: "When the guard is subjected to an effect that would move it, knock it prone, or both, it can use its reaction to be neither moved nor knocked prone."
		},
		],
	},
	"Black Earth Priest": {
		name: "Black Earth Priest",
		source: ["Princes of the Apocalypse", 195],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [17, "Splint", false],
		hp: 45,
		hd: [7, 8],
		speed: "30 ft",
		scores: [15, 11, 14, 12, 10, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +5, Religion +3, Persuasion +5",
		passivePerception: "10",
		languages: "Common, Terran",
		challengeRating: "3",
		proficiencyBonus: 2,
		attacks: [{
				name: "Glaive",
				ability: 1,
				damage: [1, 10, "slashing"],
				range: "Melee (10 ft)",
				description: "",
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The priest makes two melee attacks."
			},
		],
		reactions: [{
			name: "Unyielding",
			description: "When the priest is subjected to an effect that would move it, knock it prone, or both, it can use its reaction to be neither moved nor knocked prone."
		},
		],
		spells: [
			"The priest is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It knows the following sorcerer spells: ",
			"Cantrips (at will): acid splash, blade ward, light, mending, mold earth",
			"1st level (4 slots): earth tremor, expeditious retreat, shield",
			"2nd level (3 slots): shatter, spider climb",
			"3rd level (2 slots): slow"
		]
	},
	"Burrowshark": {
		name: "Burrowshark",
		source: ["Princes of the Apocalypse", 196],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [18, "Plate", false],
		hp: 82,
		hd: [11, 8],
		speed: "30 ft",
		scores: [18, 12, 16, 10, 11, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Animal Handling +2, Athletics +6, Intimidation +3, Perception +2",
		passivePerception: "12",
		languages: "Common",
		challengeRating: "4",
		proficiencyBonus: 2,
		attacks: [{
				name: "Spear (Melee)",
				ability: 1,
				damage: [1, 6, "piercing"],
				range: "Melee (5 ft)",
				description: "Or 8 (1d8 +4) piercing damage",
			}, {
				name: "Spear (Ranged)",
				ability: 1,
				damage: [1, 6, ""],
				range: "Ranged (20/60 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Bond of the Black Earth",
				description: "The burrowshark is magically bound to a bulette trained to serve as its mount. While mounted on its bulette, the burrowshark shares the bulette's senses and can ride the bulette while it burrows. The bonded bulette obeys the burrowshark's commands. If its mount dies, the burrowshark can train a new bulette to serve as its bonded mount, a process requiring a month."
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The burrowshark makes three melee attacks."
			}
		],
		reactions: [{
			name: "Unyielding",
			description: "When the burrowshark is subjected to an effect that would move it, knock it prone, or both, it can use its reaction to be neither moved nor knocked prone."
		},
		],
	},
	"Crushing Wave Priest": {
		name: "Crushing Wave Priest",
		source: ["Princes of the Apocalypse", 205],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [13, "Chain Shirt", false],
		hp: 52,
		hd: [8, 8],
		speed: "30 ft",
		scores: [15, 11, 14, 10, 11, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Religion +2, Stealth +2",
		passivePerception: "10",
		languages: "Aquan, Common",
		challengeRating: "2",
		proficiencyBonus: 2,
		attacks: [{
				name: "Quarterstaff",
				ability: 1,
				damage: [1, 8, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		spells: [
			"The priest is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It knows the following sorcerer spells: ",
			"Cantrips (at will): chill touch, mage hand, minor illusion, prestidigitation, ray of frost",
			"1st level (4 slots): expeditious retreat, ice knife, magic missile, shield",
			"2nd level (3 slots): blur, hold person",
			"3rd level (2 slots): sleet storm"
		]
	},
	"Crushing Wave Reaver": {
		name: "Crushing Wave Reaver",
		source: ["Princes of the Apocalypse", 205],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [14, "", true],
		hp: 22,
		hd: [4, 8],
		speed: "30 ft",
		scores: [15, 14, 13, 10, 11, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +4, Stealth +4",
		passivePerception: "10",
		languages: "Common",
		challengeRating: "1/2",
		proficiencyBonus: 2,
		attacks: [{
				name: "Sharktoothed Longsword",
				ability: 1,
				damage: [1, 8, "slashing"],
				range: "Melee (5 ft)",
				description: "Or 7 (1d10 +2) slashing damage if used with two hands. Against a target wearing no armor, the reaver deals an extra die of damage with this sword.",
			}, {
				name: "Javelin (Melee)",
				ability: 1,
				damage: [1, 6, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Javelin (Ranged)",
				ability: 1,
				damage: [1, 6, ""],
				range: "Ranged (20/60 ft)",
				description: "",
			},
		],
	},
	"Dark Tide Knight": {
		name: "Dark Tide Knight",
		source: ["Princes of the Apocalypse", 205],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "lawful evil",
		ac: [13, "", false],
		hp: 58,
		hd: [9, 8],
		speed: "30 ft",
		scores: [17, 16, 14, 10, 11, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +7, Stealth +7",
		passivePerception: "10",
		languages: "Common",
		challengeRating: "3",
		proficiencyBonus: 2,
		attacks: [{
				name: "Shortsword",
				ability: 1,
				damage: [1, 6, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Lance",
				ability: 1,
				damage: [1, 12, "piercing"],
				range: "Melee (10 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Bonded Mount",
				description: "The knight is magically bound to a beast with an innate swimming speed trained to serve as its mount. While mounted on this beast, the knight gains the beast's senses and ability to breathe underwater. The bonded mount obeys the knight's commands. If its mount dies, the knight can train a new beast to serve as its bonded mount, a process requiring a month."
			}, {
				name: "Sneak Attack",
				description: "The knight deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the knight that isn't incapacitated and the knight doesn't have disadvantage on the attack roll.",
			}
		],
		actions: [{
				name: "Multiattack",
				description: "The knight makes two shortsword attacks."
			}
		],
		reactions: [{
				name: "Uncanny Dodge",
				description: "When an attacker the knight can see hits it with an attack, the knight can halve the damage against it."
			}
		]
	},
	"Drannin Splithelm": {
		name: "Drannin Splithelm",
		source: ["Princes of the Apocalypse", 209],
		size: "Medium",
		type: "humanoid (shield dwarf)",
		alignment: "neutral evil",
		ac: [18, "Plate", false],
		hp: 93,
		hd: [11, 8],
		speed: "25 ft",
		scores: [19, 10, 18, 11, 8, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +7, Intimidation +4",
		damage_resistances: "cold, poison",
		senses: "darkvision 60 ft",
		passivePerception: "9",
		languages: "Common, Dwarvish",
		challengeRating: "7",
		proficiencyBonus: 3,
		attacks: [{
				name: "Greataxe",
				ability: 1,
				damage: [2, 12, "slashing"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Action Surge (Recharges after a Short or Long Rest)",
				description: "Drannin takes an additional action on his turn."
			}, {
				name: "Brute",
				description: "A melee weapon deals one extra die of its damage when Drannin hits with it (included in the attack)."
			}, {
				name: "Dwarven Resilience",
				description: "Drannin has advantage on saving throws against poison."
			}, {
				name: "Indomitable (Recharges after a Short or Long Rest)",
				description: "Drannin can reroll a saving throw that he fails. He must use the new roll."
			}, {
				name: "Second Wind (Recharges after a Short or Long Rest)",
				description: "Drannin can use a bonus action to regain 16 (1d10 +11) hit points.",
			}, {
				name: "Special Equipment",
				description: "Drannin wears a control amulet for his shield guardian (see the Monster Manual) and a ring of cold resistance. He also carries a potion of frost giant strength."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Drannin makes three attacks with his greataxe."
			}
		]
	},
	"Earth Elemental Myrmidon": {
		name: "Earth Elemental Myrmidon",
		source: ["Princes of the Apocalypse", 212],
		size: "Medium",
		type: "elemental",
		alignment: "neutral",
		ac: [18, "Plate", false],
		hp: 127,
		hd: [17, 8],
		speed: "30 ft",
		scores: [18, 10, 17, 8, 10, 10],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "paralyzed, petrified, poisoned, prone",
		senses: "darkvision 60 ft",
		passivePerception: "10",
		languages: "Terran, one language of its creator's choice",
		challengeRating: "7",
		proficiencyBonus: 3,
		attacks: [{
				name: "Maul",
				ability: 1,
				damage: [2, 6, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Magic Weapons",
				description: "The myrmidon's weapon attacks are magical."
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The myrmidon makes two maul attacks."
			}, {
				name: "Thunderous Strike (Recharge 6)",
				description: "The myrmidon makes one maul attack. If the attack hits, it deals an extra 16 (3d10) thunder damage, and the target must succeed on a DC 14 Strength saving throw or be knocked prone.",
			}
		]
	},
	"Elizar Dryflagon": {
		name: "Elizar Dryflagon",
		source: ["Princes of the Apocalypse", 202],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [14, "Hide", false],
		hp: 71,
		hd: [11, 8],
		speed: "30 ft",
		scores: [13, 15, 14, 11, 18, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +3, Deception +3",
		passivePerception: "14",
		languages: "Common, Druidic",
		challengeRating: "5",
		proficiencyBonus: 3,
		attacks: [{
				name: "Dagger +1 (Melee)",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Dagger +1 (Ranged)",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "Ranged (20/60 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Summon Mephits (Recharges after a Long Rest)",
				description: "By puffing on his pipe, Elizar can use an action to cast conjure minor elementals. If he does so, he summons four smoke mephits."
			}
		],
		spells: [
			"Elizar is a 7th-level spellcaster. His spellcasting ability is Wisdom (spell save DC 15, +7 to hit with spell attacks). Elizar has the following druid spells prepared: ",
			"Cantrips (at will): druidcraft, guidance, poison spray, produce flame",
			"1st level (4 slots): animal friendship, faerie fire, healing word, jump, thunderwave",
			"2nd level (3 slots): flame blade, spike growth",
			"3rd level (3 slots): dispel magic, stinking cloud",
			"4th level (2 slots): blight, wall of fire"
		]
	},
	"Eternal Flame Guardian": {
		name: "Eternal Flame Guardian",
		source: ["Princes of the Apocalypse", 200],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "chaotic evil",
		ac: [17, "Breastplate", false],
		hp: 45,
		hd: [7, 8],
		speed: "30 ft",
		scores: [15, 13, 14, 8, 11, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +3, Perception +2",
		damage_resistances: "fire",
		passivePerception: "12",
		languages: "Common",
		challengeRating: "2",
		proficiencyBonus: 2,
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
				description: "-2 AC when using crossbow",
			},
		],
		traits: [{
				name: "Flaming Weapon (Recharges after a Short or Long Rest)",
				description: "As a bonus action, the guard can wreath one melee weapon it is wielding in flame. The guard is unharmed by this fire, which lasts until the end of the guard's next turn. While wreathed in flame, the weapon deals an extra 3 (1d6) fire damage on a hit.",
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The guard makes two melee attacks."
			}
		]
	},
	"Eternal Flame Priest": {
		name: "Eternal Flame Priest",
		source: ["Princes of the Apocalypse", 200],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [12, "", false],
		hp: 52,
		hd: [8, 8],
		speed: "30 ft",
		scores: [12, 15, 14, 10, 11, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Intimidation +5, Religion +2",
		damage_resistances: "fire",
		passivePerception: "10",
		languages: "Common, Ignan",
		challengeRating: "3",
		proficiencyBonus: 2,
		attacks: [{
				name: "Dagger (Melee)",
				ability: 1,
				damage: [1, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Dagger (Ranged)",
				ability: 1,
				damage: [1, 4, "piercing"],
				range: "Ranged (20/60 ft)",
				description: "",
			},
		],
		spells: [
			"The priest is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It knows the following sorcerer spells:",
			"Cantrips (at will): control flames, create bonfire, fire bolt, light, minor illusion",
			"1st level (4 slots): burning hands, expeditious retreat, mage armor",
			"2nd level (3 slots): blur, scorching ray",
			"3rd level (2 slots): fireball"
		]
	},
	"Fathomer": {
		name: "Fathomer",
		source: ["Princes of the Apocalypse", 207],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [10, "", false],
		hp: 52,
		hd: [8, 8],
		speed: "30 ft",
		scores: [14, 11, 14, 11, 11, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +2, Perception +4, Stealth +4",
		passivePerception: "14",
		languages: "Aquan, Common",
		challengeRating: "2",
		proficiencyBonus: 2,
		attacks: [{
				name: "Constrict (Serpent Form Only)",
				ability: 1,
				damage: [2, 6, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "If the target is Medium or smaller, it is grappled (escape DC 12). Until the grapple ends, the target is restrained, and the fathomer can't constrict another target.",
			}, {
				name: "Dagger (Human Form Only)",
				ability: 1,
				damage: [1, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "Melee Weapon Attack",
			}, {
				name: "Dagger (Human Form Only)",
				ability: 1,
				damage: [1, 4, "piercing"],
				range: "Ranged (20/60 ft)",
				description: "Ranged Weapon Attack",
			},
		],
		traits: [{
				name: "Shapechanger (2/day)",
				description: ["The fathomer can use its action to polymorph into a Medium serpent composed of water, or back into its true form. Anything the fathomer is wearing or carrying is subsumed into the serpent form during the change, inaccessible until the fathomer returns to its true form. The fathomer reverts to its true form after 4 hours, unless it can expend another use of this trait. If the fathomer is knocked unconscious or dies, it also reverts to its true form.", "While in serpent form, the fathomer gains a swimming speed of 40 feet, the ability to breathe underwater, immunity to poison damage, as well as resistance to fire damage and bludgeoning, piercing, and slashing damage from nonmagical weapons. It also has immunity to the following conditions: exhaustion, grappled, paralyzed, poisoned, restrained, prone, unconscious. The serpent form can enter a hostile creature's space and stop there. In addition, if water can pass through a space, the serpent can do so without squeezing."]
			}, {
				name: "Olhydra's Armor (Human Form Only)",
				description: "The fathomer can cast mage armor at will, without expending material components."
			}
		],
		spells: [
			"(Human Form Only) The fathomer is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It has two 3rd-level spell slots, which it regains after finishing a short or long rest, and knows the following warlock spells: ",
			"Cantrips (at will): chill touch, eldritch blast, mage hand",
			"1st level: armor of Agathys, expeditious retreat, hex",
			"2nd level: invisibility",
			"3rd level: Vampiric touch"
		]
	},
	"Feathergale Knight": {
		name: "Feathergale Knight",
		source: ["Princes of the Apocalypse", 189],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "lawful evil",
		ac: [16, "Scale", false],
		hp: 33,
		hd: [6, 8],
		speed: "30 ft",
		scores: [14, 14, 12, 11, 10, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Animal Handling +2, History +2",
		passivePerception: "10",
		languages: "Auran, Common",
		challengeRating: "1",
		proficiencyBonus: 1,
		attacks: [{
				name: "Longsword",
				ability: 1,
				damage: [1, 8, "slashing"],
				range: "Melee (5 ft)",
				description: "Or 7 (1d10 +2) slashing damage if used with two hands.",
			}, {
				name: "Spear (Melee)",
				ability: 1,
				damage: [1, 6, "piercing"],
				range: "Melee (5 ft)",
				description: "Or 6 (1d8 +2) piercing damage if used with two hands",
			}, {
				name: "Spear (Ranged)",
				ability: 1,
				damage: [1, 6, "piercing"],
				range: "Ranged (20/60 ft)",
				description: "",
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The knight makes two melee attacks."
			}
		],
		spells: [
			"The knight is a 1st-level spellcaster. Its spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It knows the following sorcerer spell:",
			"Cantrips (at will): gust, light, message, ray of frost",
			"1st level (2 slots): expeditious retreat, feather fall"
		]
	},
	"Fire Elemental Myrmidon": {
		name: "Fire Elemental Myrmidon",
		source: ["Princes of the Apocalypse", 213],
		size: "Medium",
		type: "elemental",
		alignment: "neutral",
		ac: [18, "", false],
		hp: 117,
		hd: [18, 8],
		speed: "40 ft",
		scores: [13, 18, 15, 9, 10, 10],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "fire, poison",
		condition_immunities: "paralyzed, petrified, poisoned, prone",
		senses: "darkvision 60 ft",
		passivePerception: "10",
		languages: "Ignan, one language of its creator's choice",
		challengeRating: "7",
		proficiencyBonus: 3,
		attacks: [{
				name: "Scimitar",
				ability: 2,
				damage: [1, 6, "slashing"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Illumination",
				description: "The myrmidon sheds bright light in a 20-foot radius and dim light in a 40-foot radius."
			}, {
				name: "Magic Weapons",
				description: "The myrmidon's weapon attacks are magical."
			}, {
				name: "Water Susceptibility",
				description: "For every 5 feet the myrmidon moves in water, it takes 2 (1d4) cold damage."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "The myrmidon makes three scimitar attacks."
			}, {
				name: "Fiery Strikes (Recharge 6)",
				description: "The myrmidon uses Multiattack. Each attack that hits deals an extra 5 (1d10) fire damage.",
			}
		]
	},
	"Flamewrath": {
		name: "Flamewrath",
		source: ["Princes of the Apocalypse", 201],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "chaotic evil",
		ac: [12, "", false],
		hp: 105,
		hd: [14, 8],
		speed: "30 ft",
		scores: [10, 14, 16, 11, 10, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +3, Religion +3",
		damage_immunities: "fire",
		passivePerception: "10",
		languages: "Common, Ignan",
		challengeRating: "6",
		proficiencyBonus: 3,
		attacks: [{
				name: "Dagger (Melee)",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Dagger (Ranged)",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "Ranged (20/60 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Wreathed in Flame",
				description: "For the flamewrath, the warm version of the fire shield spell has a duration of \"until dispelled.\" The fire shield burns for 10 minutes after the flamewrath dies, consuming its body."
			}
		],
		spells: [
			"The flamewrath is a 7th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). It knows the following sorcerer spells: ",
			"Cantrips (at will): control flames, fire bolt, friends, light, minor illusion",
			"1st level (4 slots): burning hands, color spray, mage armor",
			"2nd level (3 slots): scorching ray, suggestion",
			"3rd level (3 slots): fireball, hypnotic pattern",
			"4th level (1 slot): fire shield (see Wreathed in Flame)"
		]
	},
	"Gar Shatterkeel": {
		name: "Gar Shatterkeel",
		source: ["Princes of the Apocalypse", 208],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [16, "Natural Armor", false],
		hp: 30,
		hd: [15, 8],
		speed: "30 ft, swim 30 ft",
		scores: [15, 15, 16, 12, 18, 13],
		skills: "Nature +8, Survival +8",
		damage_resistances: "cold",
		passivePerception: "14",
		languages: "Aquan, Common",
		challengeRating: "9",
		proficiencyBonus: 4,
		attacks: [{
				name: "Claw",
				ability: 1,
				damage: [2, 6, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "Target is grappled (escape DC 13). Until the grapple ends, Gar can't attack other creatures with his claw.",
			}, {
				name: "Drown (Melee)",
				ability: 1,
				damage: [1, 6, "piercing"],
				range: "Melee (5 ft)",
				description: "Plus 4 (1d8) cold damage.",
			}, {
				name: "Drown (Ranged)",
				ability: 1,
				damage: [1, 6, "piercing"],
				range: "Ranged (20/60 ft)",
				description: "Plus 4 (1d8) cold damage.",
			},
		],
		traits: [{
				name: "Amphibious",
				description: "Gar can breathe air and water."
			}, {
				name: "Legendary Resistance (2/Day)",
				description: "If Gar fails a saving throw, he can choose to succeed instead."
			}, {
				name: "Water Walk",
				description: "Gar can stand and move on liquid surfaces as if they were solid ground."
			}, {
				name: "Watery Fall",
				description: "When Gar drops to 0 hit points, his body collapses into a pool of inky water that rapidly disperses. Anything he was wearing or carrying is left behind."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Gar makes two melee attacks, one with his claw and one with Drown."
			}
		],
		spells: [
			"Gar is a 9th-level spellcaster. His spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks). He has the following druid spells prepared:",
			"Cantrips (at will): mending, resistance, shape water",
			"1st level (4 slots): create or destroy water, cure wounds, fog cloud, thunderwave",
			"2nd level (3 slots): darkvision, hold person, protection from poison",
			"3rd level (3 slots): call lightning, sleet storm, tidal wave",
			"4th level (3 slots): control water, ice storm",
			"5th level (1 slot): scrying"
		]
	},
	"Ghald": {
		name: "Ghald",
		source: ["Princes of the Apocalypse", 209],
		size: "Large",
		type: "humanoid (sahuagin)",
		alignment: "lawful evil",
		ac: [15, "Natural Armor", false],
		hp: 102,
		hd: [12, 10],
		speed: "30 ft, swim 50 ft",
		scores: [19, 17, 16, 14, 13, 17],
		saves: ["", "6", "6", "5", "4", ""],
		skills: "Insight +4, Perception +7",
		senses: "darkvision 120 ft",
		passivePerception: "17",
		languages: "Common, Sahuagin",
		challengeRating: "7",
		proficiencyBonus: 3,
		attacks: [{
				name: "Bite",
				ability: 1,
				damage: [2, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Shortsword",
				ability: 1,
				damage: [2, 6, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Garrote",
				ability: 1,
				damage: [2, 4, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "One Medium or Small creature against which Ghald has advantage on the attack roll. Target is grappled (escape DC 15). Until the grapple ends, the target can't breathe, and Ghald has advantage on attack rolls against it.",
			},
		],
		traits: [{
				name: "Assassinate",
				description: "During its first turn, Ghald has advantage on attack rolls against any creature that hasn't taken a turn. Any hit Ghald scores against a surprised creature is a critical hit."
			}, {
				name: "Limited Amphibiousness",
				description: "Ghald can breathe air and water, but he needs to be submerged at least once every 4 hours to avoid suffocating."
			}, {
				name: "Shark Telepathy",
				description: "Ghald can magically command any shark within 120 feet of him, using a limited telepathy."
			}, {
				name: "Sneak Attack",
				description: "Ghald deals an extra 14 (4d6) damage when he hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of Ghald's that isn't incapacitated and Ghald doesn't have disadvantage on the attack roll.",
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Ghald makes three attacks, one with his bite and two with his shortswords."
			}
		]
	},
	"Hellenrae": {
		name: "Hellenrae",
		source: ["Princes of the Apocalypse", 198],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "lawful evil",
		ac: [16, "", false],
		hp: 78,
		hd: [12, 8],
		speed: "30 ft",
		scores: [13, 18, 14, 10, 15, 13],
		skills: "Acrobatics +7, Athletics +4, Insight +5, Perception +5",
		damage_immunities: "poison",
		condition_immunities: "blinded, poisoned",
		senses: "blindsight 60 ft (blind beyond this radius)",
		passivePerception: "15",
		languages: "Common, Terran",
		challengeRating: "5",
		proficiencyBonus: 3,
		attacks: [{
				name: "Unarmed Strike",
				ability: 2,
				damage: [1, 10, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Evasion",
				description: "If Hellenrae is subjected to an effect that allows her to make a Dexterity saving throw to take only half damage, she instead takes no damage if she succeeds on the saving throw, and only half damage if she fails."
			}, {
				name: "Stunning Strike (Recharge 5-6)",
				description: "When Hellenrae hits a target with a melee weapon attack, the target must succeed on a DC 13 Constitution saving throw or be stunned until the end of Hellenrae's next turn."
			}, {
				name: "Unarmored Defense",
				description: "While Hellenrae is wearing no armor and wielding no shield, her AC includes her Wisdom modifier."
			}, {
				name: "Unarmored Movement",
				description: "While Hellenrae is wearing no armor and wielding no shield, her speed increases by 20 feet (included in her speed)."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Hellenrae makes three melee attacks."
			}
		],
		reactions: [{
				name: "Parry and Counter",
				description: "Hellenrae adds 3 to her AC against one melee or ranged weapon attack that would hit her. To do so, she must be able to sense the attacker with her blindsight. If the attack misses, Hellenrae can make one melee attack against the attacker if it is within her reach."
			}
		]
	},
	"Howling Hatred Initiate": {
		name: "Howling Hatred Initiate",
		source: ["Princes of the Apocalypse", 190],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [13, "Leather", false],
		hp: 9,
		hd: [2, 8],
		speed: "30 ft",
		scores: [10, 15, 10, 10, 9, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +2, Religion +2, Stealth +4",
		passivePerception: "9",
		languages: "Common",
		challengeRating: "1/8",
		proficiencyBonus: 2,
		attacks: [{
				name: "Dagger (Melee)",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Dagger (Ranged)",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "Ranged (20/60 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Guiding Wind (Recharges after a Short or Long Rest)",
				description: "As a bonus action, the initiate gains advantage on the next ranged attack roll it makes before the end of its next turn."
			}, {
				name: "Hold Breath",
				description: "The initiate can hold its breath for 30 minutes."
			}
		],
	},
	"Howling Hatred Priest": {
		name: "Howling Hatred Priest",
		source: ["Princes of the Apocalypse", 190],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [15, "Studded Leather", false],
		hp: 45,
		hd: [10, 8],
		speed: "30 ft",
		scores: [12, 16, 10, 14, 10, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +5, Intimidation +4, Religion +4",
		passivePerception: "10",
		languages: "Auran, Common",
		challengeRating: "2",
		proficiencyBonus: 2,
		attacks: [{
				name: "Scimitar",
				ability: 2,
				damage: [1, 6, "slashing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Dagger (Melee)",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Dagger (Ranged)",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "Ranged (20/60 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Hold Breath",
				description: "The priest can hold its breath for 30 minutes."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "The priest makes two melee attacks or two ranged attacks."
			}
		],
		spells: [
			"The priest is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It knows the following sorcerer spells: ",
			"Cantrips (at will): blade ward, gust, light, prestidigitation, shocking grasp",
			"1st level (4 slots): featherfall, shield, witch bolt",
			"2nd level (3 slots): dust devil, gust of wind",
			"3rd level (2 slots): gaseous form"
		]
	},
	"Hurricane": {
		name: "Hurricane",
		source: ["Princes of the Apocalypse", 191],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "lawful evil",
		ac: [14, "", false],
		hp: 33,
		hd: [6, 8],
		speed: "45 ft",
		scores: [12, 16, 13, 10, 12, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +5",
		passivePerception: "11",
		languages: "Auran, Common",
		challengeRating: "2",
		proficiencyBonus: 2,
		attacks: [{
				name: "Unarmed Strike",
				ability: 1,
				damage: [1, 6, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Unarmored Defense",
				description: "While the hurricane is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
			}, {
				name: "Unarmored Movement",
				description: "While the hurricane is wearing no armor and wielding no shield, its walking speed increases by 15 feet (included in its speed)."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "The hurricane makes two melee attacks."
			}
		],
		reactions: [{
				name: "Deflect Missiles",
				description: "When the hurricane is hit by a ranged weapon attack, it reduces the damage from the attack by 1d10 +9. If the damage is reduced to 0, the hurricane can catch the missile if it is small enough to hold in one hand and the hurricane has at least one hand free."
			},
		],
		spells: [
			"The hurricane is a 3rd-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). It knows the following sorcerer spells: ",
			"Cantrips (at will): blade ward, gust, light, prestidigitation",
			"1st level (4 slots): feather fall, jump, thunderwave",
			"2nd level (2 slots): gust of wind"
		]
	},
	"Imix": {
		name: "Imix",
		source: ["Princes of the Apocalypse", 214],
		size: "Huge",
		type: "elemental",
		alignment: "neutral evil",
		ac: [17, "", false],
		hp: 325,
		hd: [26, 12],
		speed: "50 ft, fly 50 ft",
		scores: [19, 24, 22, 15, 16, 23],
		saves: ["", "14", "13", "", "", "13"],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "fire, poison",
		condition_immunities: "charmed, frightened, paralyzed, petrified, poisoned, prone, restrained",
		senses: "blindsight 120 ft",
		passivePerception: "13",
		languages: "Common, Ignan",
		challengeRating: "19",
		proficiencyBonus: 6,
		attacks: [{
				name: "Slam",
				ability: 1,
				damage: [2, 10, "bludgeoning"],
				range: "Melee (10 ft)",
				description: "Plus 18 (5d6) fire damage.",
			}, {
				name: "Flame Blast",
				ability: 6,
				damage: [10, 6, "fire"],
				range: "Ranged (250 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Empowered Attacks",
				description: "Imix's slam attacks are treated as magical for the purpose of bypassing resistance and immunity to nonmagical weapons."
			}, {
				name: "Fire Aura",
				description: "At the start of each of Imix's turns, each creature within 10 feet of him takes 17 (5d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature also takes 17 (5d6) fire damage if it touches Imix or hits him with a melee attack while within 10 feet of him, and a creature takes that damage the first time on a turn that Imix moves into its space. Nonmagical weapons that hit Imix are destroyed by fire immediately after dealing damage to him",
			}, {
				name: "Fire Form",
				description: "Imix can enter a hostile creature's space and stop there. He can move through a space as narrow as 1 inch without squeezing if fire could pass through that space."
			}, {
				name: "Illumination",
				description: "Imix sheds bright light in a 60-foot radius and dim light for an additional 60 feet."
			}, {
				name: "Legendary Resistance (3/Day)",
				description: "If Imix fails a saving throw, he can choose to succeed instead."
			}, {
				name: "Innate Spellcasting",
				description: [
					"Imix's innate spellcasting ability is Charisma (spell save DC 20, +12 to hit with spell attacks). He can innately cast the following spells, requiring no material components: ",
					"At will: fireball, wall of fire",
					"3/day each: fire storm, haste, teleport"
				]
			}, {
				name: "Magic Resistance",
				description: "Imix has advantage on saving throws against spells and other magical effects."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Imix makes two slam attacks or two flame blast attacks."
			}, {
				name: "Summon Elementals (1/Day)",
				description: "Imix summons up to three fire elementals and loses 30 hit points for each elemental he summons. Summoned elementals have maximum hit points, appear within 100 feet of Imix, and disappear if Imix is reduced to 0 hit points."
			}
		],
		legendary_actions: [{
				name: "Heat Wave",
				description: "Imix creates a blast of heat within 300 feet of himself. Each creature in the area in physical contact with metal objects (for example, carrying metal weapons or wearing metal armor) takes 9 (2d8) fire damage. Each creature in the area that isn't resistant or immune to fire damage must make a DC 21 Constitution saving throw or gain one level of exhaustion.",
			}, {
				name: "Teleport (Costs 2 Actions)",
				description: "Imix magically teleports up to 120 feet to an unoccupied space he can see. Anything Imix is wearing or carrying isn't teleported with him."
			}, {
				name: "Combustion (Costs 3 Actions)",
				description: "Imix causes one creature he can see within 30 feet of him to burst into flames. The target must make a DC 21 Constitution saving throw. On a failed save, the target takes 70 (20d6) fire damage and catches fire. A target on fire takes 10 (3d6) fire damage when it starts its turn, and remains on fire until it or another creature takes an action to douse the flames. On a successful save, the target takes half as much damage and doesn't catch fire.",
			}
		],
	},
	"Marlos Urnrayle": {
		name: "Marlos Urnrayle",
		source: ["Princes of the Apocalypse", 199],
		size: "Medium",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [15, "Natural Armor", false],
		hp: 136,
		hd: [16, 8],
		speed: "30 ft",
		scores: [17, 11, 18, 12, 13, 17],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, Deception +6, Perception +4",
		damage_resistances: "acid",
		senses: "darkvision 60 ft, tremorsense 60 ft",
		passivePerception: "14",
		languages: "Common, Terran",
		challengeRating: "8",
		proficiencyBonus: 3,
		attacks: [{
				name: "Snake Hair",
				ability: 2,
				damage: [1, 8, "piercing"],
				range: "Melee (5 ft)",
				description: "Plus 14 (4d6) poison damage.",
			}, {
				name: "Ironfang",
				ability: 1,
				damage: [1, 8, "piercing"],
				range: "Melee (5 ft)",
				description: "Plus 4 (1d8) thunder damage.",
			},
		],
		traits: [{
				name: "Earthen Defeat",
				description: "When Marlos drops to 0 hit points, his body transforms into mud and collapses into a pool. Anything he is wearing or carrying is left behind."
			}, {
				name: "Earth Passage",
				description: "Marlos can move in difficult terrain composed of anything made from earth or stone as if it were normal terrain. He can move through solid earth and rock as if it were difficult terrain. If he ends his turn there, he is shunted into the nearest space he last occupied."
			}, {
				name: "Legendary Resistance (2/Day)",
				description: "If Marlos fails a saving throw, he can choose to succeed instead."
			}, {
				name: "Petrifying Gaze",
				description: [
					"When a creature that can see Marlos's eyes starts its turn within 30 feet of him, Marlos can force it to make a DC 14 Constitution saving throw if Marlos isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic.",
					"Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see Marlos until the start of its next turn, when it can decide to avert its eyes again. If the creature looks at Marlos in the meantime, it must immediately make the save.", "If Marlos sees himself reflected on a polished surface within 30 feet of him and in an area of bright light, Marlos is, due to his curse, affected by his own gaze."
				]
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Marlos makes three melee attacks, one with his snake hair and two with Ironfang."
			}
		]
	},
	"Miraj Vizann": {
		name: "Miraj Vizann",
		source: ["Princes of the Apocalypse", 198],
		size: "Medium",
		type: "humanoid (earth genasi)",
		alignment: "neutral evil",
		ac: [10, "", false],
		hp: 82,
		hd: [11, 8],
		speed: "30 ft",
		scores: [12, 10, 17, 13, 11, 18],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, Deception +7",
		passivePerception: "10",
		languages: "Common, Primordial",
		challengeRating: "6",
		proficiencyBonus: 3,
		attacks: [{
				name: "Staff",
				ability: 1,
				damage: [1, 6, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "Or 5 (1d8 +1) bludgeoning damage when used with two hands.",
			},
		],
		traits: [{
				name: "Earth Walk",
				description: "Moving through difficult terrain made of earth or stone costs Miraj no extra movement."
			}, {
				name: "Innate Spellcasting",
				description: [
					"Miraj's innate spellcasting ability is Constitution (spell save DC 14). He can innately cast the following spell, requiring no material components: ",
					"1/day: pass without trace"
				]
			}, {
				name: "Spellcasting",
			}
		],
		spells: [
			"Miraj is an 11th-level spellcaster. His spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). He knows the following sorcerer spells: ",
			"Cantrips (at will): acid splash, blade ward, friends, light, message, mold earth",
			"1st level (4 slots): chromatic orb, mage armor, magic missile",
			"2nd level (3 slots): Maximilian's earthen grasp, shatter, suggestion",
			"3rd level (3 slots): counterspell, erupting earth",
			"4th level (3 slots): polymorph, stoneskin",
			"5th level (2 slots): wall of stone",
			"6th level (1 slot): move earth"
		]
	},
	"Ogremoch": {
		name: "Ogremoch",
		source: ["Princes of the Apocalypse", 216],
		size: "Gargantuan",
		type: "elemental",
		alignment: "neutral evil",
		ac: [20, "Natural Armor", false],
		hp: 526,
		hd: [27, 20],
		speed: "50 ft, burrow 50 ft",
		scores: [26, 11, 28, 11, 15, 22],
		saves: ["14", "", "15", "", "8", ""],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "charmed, frightened, paralyzed, petrified, poisoned, prone",
		senses: "blindsight 120 ft, tremorsense 120 ft",
		passivePerception: "12",
		languages: "Common, Terran",
		challengeRating: "20",
		proficiencyBonus: 6,
		attacks: [{
				name: "Slam",
				ability: 1,
				damage: [4, 10, "bludgeoning"],
				range: "Melee (15 ft)",
				description: "",
			}, {
				name: "Boulder",
				ability: 2,
				damage: [7, 10, "bludgeoning"],
				range: "Ranged (500 ft)",
				description: "If the target is a creature, it must succeed on a DC 23 Strength saving throw or be knocked prone.",
			},
		],
		traits: [{
				name: "Empowered Attacks",
				description: "Ogremoch's slam attacks are treated as magical and adamantine for the purpose of bypassing resistance and immunity to nonmagical weapons."
			}, {
				name: "Innate Spellcasting",
				description: [
					"Ogremoch's innate spellcasting ability is Charisma (spell save DC 20, +12 to hit with spell attacks). He can innately cast the following spells, requiring no material components: ",
					"At will: meld into stone, move earth, wall of stone"
				]
			}, {
				name: "Legendary Resistance (3/Day)",
				description: "If Ogremoch fails a saving throw, he can choose to succeed instead."
			}, {
				name: "Magic Resistance",
				description: "Ogremoch has advantage on saving throws against spells and other magical effects."
			}, {
				name: "Siege Monster",
				description: "Ogremoch deals double damage to objects and structures with his melee and ranged weapon attacks."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Ogremoch makes two slam attacks."
			}, {
				name: "Summon Elementals (1/Day)",
				description: "Ogremoch summons up to three earth elementals and loses 30 hit points for each elemental he summons. Summoned elementals have maximum hit points, appear within 100 feet of Ogremoch, and disappear if Ogremoch is reduced to 0 hit points."
			}
		],
		legendary_actions: [{
				name: "Illuminating Crystals",
				description: "Ogremoch's crystalline protrusions flare. Each creature within 30 feet of Ogremoch becomes outlined in orange light, shedding dim light in a 10-foot radius. Any attack roll against an affected creature has advantage if the attacker can see it, and the affected creature can't benefit from being invisible."
			}, {
				name: "Stomp (Costs 2 Actions)",
				description: "Ogremoch stomps the ground, creating an earth tremor that extends in a 30-foot radius. Other creatures standing on the ground in that radius must succeed on a DC 23 Dexterity saving throw or fall prone."
			}, {
				name: "Create Gargoyle (Costs 3 Actions)",
				description: "Ogremoch's hit points are reduced by 50 as he breaks off a chunk of his body and places it on the ground in an unoccupied space within 15 feet of him. The chunk of rock instantly transforms into a gargoyle and acts on the same initiative count as Ogremoch. Ogremoch can't use this action if he has 50 hit points or fewer. The gargoyle obeys Ogremoch's commands and fights until destroyed."
			}
		],
	},
	"Olhydra": {
		name: "Olhydra",
		source: ["Princes of the Apocalypse", 218],
		size: "Huge",
		type: "elemental",
		alignment: "neutral evil",
		ac: [18, "Natural Armor", false],
		hp: 324,
		hd: [24, 12],
		speed: "50 ft, swim 100 ft",
		scores: [21, 22, 24, 17, 18, 23],
		saves: ["11", "", "13", "", "10", ""],
		damage_resistances: "lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "acid, cold, poison",
		condition_immunities: "charmed, frightened, paralyzed, petrified, poisoned, prone, restrained",
		senses: "blindsight 120 ft",
		passivePerception: "14",
		languages: "Aquan",
		challengeRating: "18",
		proficiencyBonus: 6,
		attacks: [{
				name: "Slam",
				ability: 1,
				damage: [3, 10, "bludgeoning"],
				range: "Melee (10 ft)",
				description: "Target is grappled (escape DC 19). Olhydra can grapple up to four targets. When Olhydra moves, all creatures she is grappling move with her.",
			}, {
				name: "Water Jet",
				ability: 2,
				damage: [6, 6, "bludgeoning"],
				range: "Ranged (120 ft)",
				description: "Target is knocked prone if it fails a DC 19 Strength saving throw.",
			},
		],
		traits: [{
				name: "Empowered Attacks",
				description: "Olhydra's slam attacks are treated as magical for the purpose of bypassing resistance and immunity to nonmagical weapons."
			}, {
				name: "Innate Spellcasting",
				description: [
					"Olhydra's innate spellcasting ability is Charisma (spell save DC 20, +12 to hit with spell attacks). She can innately cast the following spells, requiring no material components: ",
					"At will: wall of ice",
					"3/day: ice storm",
					"1/day: storm of vengeance"
				]
			}, {
				name: "Legendary Resistance (3/Day)",
				description: "If Olhydra fails a saving throw, she can choose to succeed instead."
			}, {
				name: "Magic Resistance",
				description: "Olhydra has advantage on saving throws against spells and other magical effects."
			}, {
				name: "Water Form",
				description: "Olhydra can enter a hostile creature's space and stop there. She can move through a space as narrow as 1 inch wide without squeezing."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Olhydra makes two slam attacks or two water jet attacks."
			}, {
				name: "Summon Elementals (1/Day)",
				description: "Olhydra summons up to three water elementals and loses 30 hit points for each elemental she summons. Summoned elementals have maximum hit points, appear within 100 feet of Olhydra, and disappear if Olhydra is reduced to 0 hit points."
			}
		],
		legendary_actions: [{
				name: "Crush",
				description: "One creature that Olhydra is grappling is crushed for 21 (3d10 +5) bludgeoning damage.",
			}, {
				name: "Fling (Costs 2 Actions)",
				description: "Olhydra releases one creature she is grappling by flinging the creature up to 60 feet away from her, in a direction of her choice. If the flung creature comes into contact with a solid surface, such as a wall or floor, the creature takes 1d6 bludgeoning damage for every 10 feet it was flung."
			}, {
				name: "Water to Acid (Costs 3 Actions)",
				description: "Olhydra transforms her watery body into acid. This effect lasts until Olhydra's next turn. Any creature that comes into contact with Olhydra or hits her with a melee attack while standing within 5 feet of her takes 11 (2d10) acid damage. Any creature grappled by Olhydra takes 22 (4d10) acid damage at the start of its turn.",
			}
		],
	},
	"One-Eyed Shiver": {
		name: "One-Eyed Shiver",
		source: ["Princes of the Apocalypse", 207],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "chaotic evil",
		ac: [12, "", false],
		hp: 49,
		hd: [9, 8],
		speed: "30 ft",
		scores: [10, 14, 12, 13, 13, 17],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +3, Perception +3, Intimidation +5",
		damage_immunities: "cold",
		passivePerception: "13",
		languages: "Common",
		challengeRating: "3",
		proficiencyBonus: 2,
		attacks: [{
				name: "Dagger (Melee)",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Dagger (Ranged)",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "Ranged (20/60 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Chilling Mist",
				description: "While it is alive, the one-eyed shiver projects an aura of cold mist within 10 feet of itself. If the one-eyed shiver deals damage to a creature in this area, the creature also takes 5 (1d10) cold damage.",
			}
		],
		actions: [{
				name: "Eye of Frost",
				description: "The one-eyed shiver casts ray of frost from its missing eye. If it hits, the target is also restrained. A target restrained in this way can end the condition by using an action, succeeding on a DC 13 Strength check."
			}
		],
		spells: [
			"The one-eyed shiver is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It knows the following sorcerer spells: ",
			"Cantrips (at will): chill touch, mage hand",
			"1st level (4 slots): fog cloud, mage armor, thunderwave",
			"2nd level (3 slots): mirror image, misty step",
			"3rd level (2 slots): fear"
		]
	},
	"Oreioth": {
		name: "Oreioth",
		source: ["Princes of the Apocalypse", 211],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "chaotic evil",
		ac: [11, "", false],
		hp: 39,
		hd: [6, 8],
		speed: "30 ft",
		scores: [8, 13, 14, 16, 9, 11],
		saves: ["", "", "", "", "1", ""],
		skills: "Arcana +5, Investigation +5, Medicine +1",
		passivePerception: "9",
		languages: "Abyssal, Common",
		challengeRating: "2",
		proficiencyBonus: 2,
		attacks: [{
				name: "Dagger",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Grim Harvest",
				description: "Once per turn when Oreioth kills one or more creatures with a spell of 1st level or higher, he regains hit points equal to twice the spell's level."
			}, {
				name: "Spellcasting",
			}, {
				name: "Swift Animation (Recharges after a Long Rest)",
				description: "When a living Medium or Small humanoid within 30 feet of Oreioth dies, he can use an action on his next turn to cast animate dead on that humanoid's corpse, instead of using the spell's normal casting time."
			}
		],
		spells: [
			"Oreioth is a 6th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). He has the following wizard spells prepared: ",
			"Cantrips (at will): chill touch, minor illusion, prestidigitation, shocking grasp",
			"1st level (4 slots): false life, mage armor, magic missile, ray of sickness",
			"2nd level (3 slots): crown of madness, misty step",
			"3rd level (3 slots): animate dead, vampiric touch"
		]
	},
	"Razerblast": {
		name: "Razerblast",
		source: ["Princes of the Apocalypse", 201],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "chaotic evil",
		ac: [17, "Splint", false],
		hp: 112,
		hd: [15, 8],
		speed: "30 ft",
		scores: [16, 11, 16, 9, 10, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +4, Perception +3",
		damage_immunities: "fire",
		passivePerception: "13",
		languages: "Common, Ignan",
		challengeRating: "5",
		proficiencyBonus: 3,
		attacks: [{
				name: "Spear (Melee)",
				ability: 1,
				damage: [1, 6, "piercing"],
				range: "Melee (5 ft)",
				description: "Plus 3 (1d6) fire damage. Or 7 (1d8 +3) piercing damage if used with two hands to make a melee attack",
			}, {
				name: "Spear (Ranged)",
				ability: 1,
				damage: [1, 6, ""],
				range: "Ranged (20/60 ft)",
				description: "Plus 3 (1d6) fire damage.",
			},
		],
		traits: [{
				name: "Searing Armor",
				description: "The razerblast's armor is hot. Any creature grappling the razerblast or grappled by it takes 5 (1d10) fire damage at the end of that creature's turn.",
			}, {
				name: "Shrapnel Explosion",
				description: "When the razerblast drops to 0 hit points, a flaming orb in its chest explodes, destroying the razerblast's body and scattering its armor as shrapnel. Creatures within 10 feet of the razerblast when it explodes must succeed on a DC 12 Dexterity saving throw, taking 21 (6d6) piercing damage on a failed save, or half as much damage on a successful one."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "The razerblast makes three melee attacks."
			}
		]
	},
	"Sacred Stone Monk": {
		name: "Sacred Stone Monk",
		source: ["Princes of the Apocalypse", 196],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "lawful evil",
		ac: [14, "", false],
		hp: 22,
		hd: [4, 8],
		speed: "40 ft",
		scores: [13, 15, 12, 10, 14, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +4, Athletics +3, Perception +4",
		senses: "tremorsense 10 ft",
		passivePerception: "14",
		languages: "Common",
		challengeRating: "1/2",
		proficiencyBonus: 2,
		attacks: [{
				name: "Unarmed Strike",
				ability: 1,
				damage: [1, 6, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Unarmored Defense",
				description: "While the monk is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
			}, {
				name: "Unarmored Movement",
				description: "While the monk is wearing no armor and wielding no shield, its walking speed increases by 10 feet (included in its speed)."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "The monk makes two melee attacks."
			}
		],
		reactions: [{
				name: "Parry",
				description: "The monk adds 2 to its AC against one melee or ranged weapon attack that would hit it. To do so, the monk must see the attacker."
			},
		],
	},
	"Shoalar Quanderil": {
		name: "Shoalar Quanderil",
		source: ["Princes of the Apocalypse", 208],
		size: "Medium",
		type: "humanoid (water genasi)",
		alignment: "lawful evil",
		ac: [10, "", false],
		hp: 60,
		hd: [8, 8],
		speed: "30 ft, swim 30 ft",
		scores: [11, 12, 16, 14, 10, 17],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, Deception +5, Insight +2, Persuasion +5",
		damage_resistances: "acid",
		passivePerception: "10",
		languages: "Aquan, Common",
		challengeRating: "4",
		proficiencyBonus: 2,
		attacks: [{
				name: "Dagger (Melee)",
				ability: 1,
				damage: [1, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Dagger",
				ability: 1,
				damage: [1, 4, "piercing"],
				range: "Ranged (20/60 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Amphibious",
				description: "Shoalar can breathe air and water."
			}, {
				name: "Innate Spellcasting",
				description: [
					"Shoalar's innate spellcasting ability is Constitution (spell save DC 13, +5 to hit with spell attacks). He can innately cast the following spells: ",
					"At will: shape water",
					"1/day: create or destroy water"
				]
			}
		],
		spells: [
			"Shoalar is a 5th-level spellcaster. His spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). He knows the following sorcerer spells: ",
			"Cantrips (at will): acid splash, chill touch, friends, prestidigitation, ray of frost",
			"1st level (4 slots): disguise self, mage armor, magic missile",
			"2nd level (3 slots): hold person, misty step",
			"3rd level (2 slots): tidal wave"
		]
	},
	"Skyweaver": {
		name: "Skyweaver",
		source: ["Princes of the Apocalypse", 191],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "chaotic evil",
		ac: [12, "", false],
		hp: 44,
		hd: [8, 8],
		speed: "30 ft",
		scores: [8, 14, 12, 11, 10, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Persuasion +5",
		passivePerception: "10",
		languages: "Auran, Common",
		challengeRating: "3",
		proficiencyBonus: 2,
		attacks: [{
				name: "Dagger (Melee)",
				ability: 1,
				damage: [1, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Dagger (Ranged)",
				ability: 1,
				damage: [1, 4, "piercing"],
				range: "Ranged (20/60 ft)",
				description: "",
			},
		],
		spells: [
			"The Skyweaver is a 6th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It knows the following sorcerer spells: ",
			"Cantrips (at will): blade ward, light, message, ray of frost, shocking grasp",
			"1st level (4 slots): feather fall, mage armor, witch bolt",
			"2nd level (3 slots): gust of wind, invisibility",
			"3rd level (3 slots): fly, lightning bolt"
		]
	},
	"Stonemelder": {
		name: "Stonemelder",
		source: ["Princes of the Apocalypse", 197],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [17, "Splint", false],
		hp: 75,
		hd: [10, 8],
		speed: "30 ft",
		scores: [15, 10, 16, 12, 11, 17],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +5, Perception +2",
		senses: "tremorsense 30 ft",
		passivePerception: "12",
		languages: "Common, Terran",
		challengeRating: "4",
		proficiencyBonus: 2,
		attacks: [{
				name: "Black Earth Rod",
				ability: 1,
				damage: [1, 6, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "The Stonemelder can also expend a spell slot to deal extra damage, dealing 2d8 bludgeoning damage for a 1st level slot, plus an additional 1d8 for each level of the slot above 1st.",
			},
		],
		traits: [{
				name: "Death Burst",
				description: "When the Stonemelder dies, it turns to stone and explodes in a burst of rock shards, becoming a smoking pile of rubble. Each creature within 10 feet of the exploding Stonemelder must make a DC 14 Dexterity saving throw, taking 11 (2d10) bludgeoning damage on a failed save, or half as much damage on a successful one.",
			}
		],
		spells: [
			"The Stonemelder is a 7th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It knows the following sorcerer spells: ",
			"Cantrips (at will): acid splash, blade ward, light, mending, mold earth",
			"1st level (4 slots): expeditious retreat, false life, shield",
			"2nd level (3 slots): Maximilian's earthen grasp, shatter",
			"3rd level (3 slots): erupting earth, meld into stone",
			"4th level (1 slot): stoneskin"
		]
	},
	"Thurl Merosska": {
		name: "Thurl Merosska",
		source: ["Princes of the Apocalypse", 192],
		size: "Medium",
		type: "humanoid (human), tyranny of dragons",
		alignment: "lawful evil",
		ac: [16, "Breastplate", false],
		hp: 71,
		hd: [11, 8],
		speed: "30 ft",
		scores: [16, 14, 14, 11, 10, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Animal Handling +2, Athletics +5, Deception +4, Persuasion +4",
		passivePerception: "10",
		languages: "Auran, Common",
		challengeRating: "3",
		proficiencyBonus: 2,
		attacks: [{
				name: "Greatsword",
				ability: 1,
				damage: [2, 6, "slashing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Lance",
				ability: 1,
				damage: [1, 12, "piercing"],
				range: "Melee (10 ft)",
				description: "",
			},
		],
		actions: [{
				name: "Multiattack",
				description: "Thurl makes two melee attacks."
			}
		],
		reactions: [{
				name: "Parry",
				description: "Thurl adds 2 to his AC against one melee attack that would hit him. To do so, Thurl must see the attacker and be wielding a melee weapon."
			},
		],
		spells: [
			"Thurl is a 5th-level spellcaster. His spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). Thurl knows the following sorcerer spells: ",
			"Cantrips (at will): friends, gust, light, message, ray of frost",
			"1st level (4 slots): expeditious retreat, feather fall, jump",
			"2nd level (3 slots): levitate, misty step",
			"3rd level (2 slots): haste"
		]
	},
	"Vanifer": {
		name: "Vanifer",
		source: ["Princes of the Apocalypse", 203],
		size: "Medium",
		type: "humanoid (tiefling)",
		alignment: "neutral evil",
		ac: [15, "Studded Leather", false],
		hp: 112,
		hd: [15, 8],
		speed: "30 ft",
		scores: [11, 16, 17, 12, 13, 19],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +5, Deception +8, Performance +8",
		damage_immunities: "fire",
		senses: "darkvision 60 ft",
		passivePerception: "11",
		languages: "Common, Ignan, Infernal",
		challengeRating: "9",
		proficiencyBonus: 4,
		attacks: [{
				name: "Tinderstrike (Melee)",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "",
				description: "+9 to hit. Plus 7 (2d6) fire damage.",
			}, {
				name: "Tinderstrike (Ranged)",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "Ranged (20/60 ft)",
				description: "+9 to hit. Plus 7 (2d6) fire damage.",
			},
		],
		traits: [{
				name: "Funeral Pyre",
				description: "When Vanifer drops to 0 hit points, her body is consumed in a flash of fire and smoke. Anything she was wearing or carrying is left behind among ashes."
			}, {
				name: "Legendary Resistance (2/Day)",
				description: "If Vanifer fails a saving throw, she can choose to succeed instead."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Vanifer makes two attacks."
			}
		],
		spells: [
			"Vanifer is a 10th-level spellcaster. Her spellcasting ability is Charisma (spell save DC 16, +8 to hit with spell attacks). Vanifer knows the following sorcerer spells: ",
			"Cantrips (at will): chill touch, fire bolt, friends, mage hand, message, produce flame, thaumaturgy",
			"1st level (4 slots): burning hands, chromatic orb, hellish rebuke, shield",
			"2nd level (3 slots): darkness, detect thoughts, misty step, scorching ray",
			"3rd level (3 slots): counterspell, fireball, hypnotic pattern",
			"4th level (3 slots): wall of fire",
			"5th level (2 slots): dominate person"
		]
	},
	"Water Elemental Myrmidon": {
		name: "Water Elemental Myrmidon",
		source: ["Princes of the Apocalypse", 213],
		size: "Medium",
		type: "elemental",
		alignment: "neutral",
		ac: [18, "Plate", false],
		hp: 127,
		hd: [17, 8],
		speed: "40 ft, swim 40 ft",
		scores: [18, 14, 15, 8, 10, 10],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "acid; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "paralyzed, petrified, poisoned, prone",
		senses: "darkvision 60 ft",
		passivePerception: "10",
		languages: "Aquan, one language of its creator's choice",
		challengeRating: "7",
		proficiencyBonus: 3,
		attacks: [{
				name: "Trident",
				ability: 1,
				damage: [1, 6, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Magic Weapons",
				description: "The myrmidon's weapon attacks are magical."
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The myrmidon makes three trident attacks."
			}, {
				name: "Freezing Strikes (Recharge 6)",
				description: "The myrmidon uses Multiattack. Each attack that hits deals an extra 5 (1d10) cold damage, and the target's speed is reduced by 10 feet until the end of the myrmidon's next turn.",
			}
		]
	},
	"Wiggan Nettlebee": {
		name: "Wiggan Nettlebee",
		source: ["Princes of the Apocalypse", 211],
		size: "Small",
		type: "humanoid (halfling)",
		alignment: "neutral evil",
		ac: [11, "", false],
		hp: 36,
		hd: [8, 6],
		speed: "30 ft",
		scores: [8, 12, 12, 14, 15, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +3, Insight +4",
		passivePerception: "12",
		languages: "Common, Halfling",
		challengeRating: "2",
		proficiencyBonus: 2,
		attacks: [{
				name: "Wooden Cane",
				ability: 1,
				damage: [1, 4, "bludgeoning"],
				range: "Melee (5 ft)",
				modifiers: [-1,-1,true],
				description: "",
			}, {
				name: "Wooden Cane (Shillelagh)",
				ability: 1,
				damage: [1, 8, "bludgeoning"],
				range: "Melee (5 ft)",
				modifiers: [3, 2, true],
				description: "",
			},
		],
		traits: [{
				name: "Brave Devotion",
				description: "Wiggan has advantage on saving throws against being charmed or frightened."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Wiggan makes two attacks with his wooden cane."
			}
		],
		spells: [
			"Wiggan is a 4th-level spellcaster. His spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). He has the following cleric spells prepared: ",
			"Cantrips (at will): guidance, light, mending, shillelagh, thaumaturgy",
			"1st Level (4 slots): animal friendship, cure wounds, healing word, inflict wounds, speak with animals",
			"2nd Level (3 slots): barkskin, spike growth, spiritual weapon"
		]
	},
	"Windharrow": {
		name: "Windharrow",
		source: ["Princes of the Apocalypse", 192],
		size: "Medium",
		type: "humanoid (half-elf)",
		alignment: "neutral evil",
		ac: [15, "Studded Leather", false],
		hp: 55,
		hd: [10, 8],
		speed: "30 ft",
		scores: [10, 16, 12, 14, 10, 17],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +5, Deception +7, Persuasion +5, Performance +7, Stealth +5",
		senses: "darkvision 60 ft",
		passivePerception: "10",
		languages: "Auran, Common, Elvish",
		challengeRating: "3",
		proficiencyBonus: 2,
		attacks: [{
				name: "Rapier",
				ability: 2,
				damage: [1, 8, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Fey Ancestry",
				description: "Windharrow has advantage on saving throws against being charmed, and magic can't put him to sleep."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Windharrow makes two melee attacks."
			}
		],
		spells: [
			"Windharrow is an 8th-level spellcaster. His spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). Windharrow knows the following bard spells: ",
			"Cantrips (at will): friends, prestidigitation, vicious mockery",
			"1st level (4 slots): disguise self, dissonant whispers, thunderwave",
			"2nd level (3 slots): invisibility, shatter, silence",
			"3rd level (3 slots): nondetection, sending, tongues",
			"4th level (2 slots): confusion, dimension door"
		]
	},
	"Yan-C-Bin": {
		name: "Yan-C-Bin",
		source: ["Princes of the Apocalypse", 220],
		size: "Huge",
		type: "elemental",
		alignment: "neutral evil",
		ac: [22, "Natural Armor", false],
		hp: 283,
		hd: [21, 12],
		speed: "50 ft, fly 150 ft",
		scores: [18, 24, 24, 16, 21, 23],
		saves: ["", "13", "", "", "11", "12"],
		damage_resistances: "cold, fire; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "lightning, poison, thunder",
		condition_immunities: "charmed, frightened, paralyzed, petrified, poisoned, prone, restrained",
		senses: "blindsight 120 ft",
		passivePerception: "15",
		languages: "Auran",
		challengeRating: "18",
		proficiencyBonus: 6,
		attacks: [{
				name: "Slam",
				ability: 2,
				damage: [3, 8, "force"],
				range: "Melee (10 ft)",
				description: "Plus 10 (3d6) lightning damage.",
			},
		],
		traits: [{
				name: "Air Form",
				description: "Yan-C-Bin can enter a hostile creature's space and stop there. He can move through a space as narrow as 1 inch wide without squeezing if air could pass through that space."
			}, {
				name: "Empowered Attacks",
				description: "Yan-C-Bin's slam attacks are treated as magical for the purpose of bypassing resistance and immunity to nonmagical weapons."
			}, {
				name: "Innate Spellcasting",
				description: [
					"Yan-C-Bin's innate spellcasting ability is Charisma (spell save DC 20, +12 to hit with spell attacks). He can innately cast the following spells, requiring no material components: ",
					"At will: gust of wind, invisibility, lightning bolt",
					"2/day each: chain lightning, cloudkill, haste"
				]
			}, {
				name: "Legendary Resistance (3/Day)",
				description: "If Yan-C-Bin fails a saving throw, he can choose to succeed instead."
			}, {
				name: "Magic Resistance",
				description: "Yan-C-Bin has advantage on saving throws against spells and other magical effects."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Yan-C-Bin makes two slam attacks."
			}, {
				name: "Thundercrack (Recharges after a Short or Long Rest)",
				description: "Yan-C-Bin unleashes a terrible thundercrack in a 100-foot- radius sphere centered on himself. All other creatures in the area must succeed on a DC 24 Constitution saving throw or take 31 (9d6) thunder damage and be deafened for 1 minute. On a successful save, a creature takes half as much damage and is deafened until the start of Yan-C-Bin's next turn.",
			}, {
				name: "Change Shape",
				description: "Yan-C-Bin polymorphs into a Medium humanoid. While in polymorphed form, a swirling breeze surrounds him, his eyes are pale and cloudy, and he loses the Air Form trait. He can remain in polymorphed form for up to 1 hour. Reverting to his true form requires an action."
			}, {
				name: "Summon Elementals (1/Day)",
				description: "Yan-C-Bin summons up to three air elementals and loses 30 hit points for each elemental he summons. Summoned elementals have maximum hit points, appear within 100 feet of Yan-C-Bin, and disappear if Yan-C-Bin is reduced to 0 hit points."
			}
		],
		legendary_actions: [{
				name: "Peal of Thunder",
				description: "Yan-C-Bin unleashes a peal of thunder that can be heard out to a range of 300 feet. Each creature within 30 feet of Yan-C-Bin takes 5 (1d10) thunder damage.",
			}, {
				name: "Teleport (Costs 2 Actions)",
				description: "Yan-C-Bin magically teleports up to 120 feet to an unoccupied space he can see. Anything Yan-C-Bin is wearing or carrying is teleported with him."
			}, {
				name: "Suffocate (Costs 3 Actions)",
				description: "Yan-C-Bin steals the air of one breathing creature he can see within 60 feet of him. The target must make a DC 21 Constitution saving throw. On a failed save, the target drops to 0 hit points and is dying. On a successful save, the target can't breathe or speak until the start of its next turn."
			}
		],
	}
}
