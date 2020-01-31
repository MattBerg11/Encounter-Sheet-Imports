var CoS = {
	// 19
	"Baba Lysaga": {
		name: "Baba Lysaga",
		source: ["Curse of Strahd", 228],
		size: "Medium",
		type: "humanoid (human, shapechanger)",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 120,
		hd: [16, 8],
		speed: "30 ft",
		scores: [18, 10, 16, 20, 17, 13],
		saves: ["", "", "", "", "7", ""],
		skills: "Arcana +13, Religion +13",
		damage_resistances: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "13",
		languages: "Abyssal, Common, Draconic, Dwarvish, Giant",
		challenge_rating: "11",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludegoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d8+4) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "Baba Lysaga can use an action to polymorph into a swarm of insects (flies) or back into her true form. While in swarm form, she has a walking speed of 5 feet and a flying speed of 30 feet. Anything she is wearing transforms with her, but nothing she is carrying does."
		}, {
			name: "Blessing of Mother Night",
			description: "Baba Lysaga is shielded against divination magic, as though protected by a nondetection spell."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Baba Lysaga makes three attacks with her quarterstaff"
		}, {
			name: "Summon Swarms of Insects (Recharges after a Short or Long Rest)",
			description: "Baba Lysaga summons 1d4 swarms of insects. A summoned swarm appears in an unoccupied space within 60 feet of Baba Lysaga and acts as her ally. It remains until it dies or until Baba Lysaga dismisses it as an action."
		}
		],
		spells: [
			"Baba Lysaga is a 16th-level spellcaster. Her spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). Baba Lysaga has the following wizard spells prepared:",
			"Cantrips (at will): acid splash, fire bolt, light, mage hand, prestidigitation",
			"1st level (4 slots): detect magic, magic missile, sleep, witch bolt",
			"2nd level (3 slots): crown of madness, enlarge/reduce, misty step",
			"3rd level (3 slots): dispel magic, fireball, lightning bolt",
			"4th level (3 slots): blight, Everard's black tentacles, polymorph",
			"5th level (2 slots): cloudkill, geas, scrying",
			"6th level (1 slot): programmed illusion, true seeing",
			"7th level (1 slot): finger of death, mirage arcane",
			"8th level (1 slot): power word stun"
		]
	},
	"Baba Lysaga's Creeping Hut": {
		name: "Baba Lysaga's Creeping Hut",
		source: ["Curse of Strahd", 226],
		size: "Gargantuan",
		type: "construct",
		alignment: "unaligned",
		ac: [16, "Natural Armor", false],
		hp: 263,
		hd: [17, 10],
		speed: "30 ft",
		scores: [26, 7, 20, 1, 3, 3],
		saves: ["", "", "9", "", "0", "0"],
		skills: "",
		damage_resistances: "",
		damage_immunities: "poison, psychic",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, prone",
		senses: "blindsight 120 ft (blind beyond this radius)",
		passive_perception: "6",
		languages: "",
		challenge_rating: "11",
		attacks: [{
			name: "Root",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (60 ft)",
			description: "",
		}, {
			name: "Rock",
			ability: 1,
			damage: [3, 8, "bludegoning"],
			range: "Ranged (120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Constructed Nature",
			description: "An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone."
		}, {
			name: "Antimagic Susceptibility",
			description: "The hut is incapacitated while the magic gem that animates it is in the area of an antimagic field. If targeted by dispel magic, the hut must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
		}, {
			name: "Siege Monster",
			description: "The hut deals double damage to objects and structures."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hut makes three attacks with its roots. It can replace one of these attacks with a rock attack."
		}
		],
	},
	"Barovian Witch": {
		name: "Barovian Witch",
		source: ["Curse of Strahd", 229],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "chaotic evil",
		ac: [10, "", false],
		hp: 16,
		hd: [3, 8],
		speed: "30 ft",
		scores: [7, 11, 13, 14, 11, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, Perception +2",
		damage_resistances: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "Common",
		challenge_rating: "1/2",
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
		}, {
			name: "Claws (Requires Alter Self)",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "This attack is magical.",
		}
		],
		spells: [
			"The witch is a 3rd-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 12, +4 to hit with spell attacks). The witch has the following wizard spells prepared:",
			"Cantrips (at will): mage hand, prestidigitation, ray of frost",
			"1st level (4 slots): ray of sickness, sleep, Tasha's hideous laughter",
			"2nd level (2 slots): alter self, invisibility"
		]
	},
	"Broom of Animated Attack": {
		name: "Broom of Animated Attack",
		source: ["Curse of Strahd", 226],
		size: "Small",
		type: "construct",
		alignment: "unaligned",
		ac: [15, "Natural Armor", false],
		hp: 17,
		hd: [5, 6],
		speed: "0 ft, fly 50 ft (hover)",
		scores: [10, 17, 10, 1, 5, 1],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_immunities: "poison, psychic",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned, prone",
		senses: "blindsight 30 ft (blind beyond this radius)",
		passive_perception: "7",
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Broomstick",
			ability: 2,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Constructed Nature",
			description: "An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone."
		}, {
			name: "Antimagic Susceptibility",
			description: "The broom is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the broom must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
		}, {
			name: "False Appearance",
			description: "While the broom remains motionless and isn't flying, it is indistinguishable from a normal broom."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The broom makes two melee attacks."
		}
		],
		reactions: [{
			name: "Animated Attack",
			description: "If the broom is motionless and a creature grabs hold of it, the broom makes a Dexterity check contested by the creature's Strength check. If the broom wins the contest, it flies out of the creature's grasp and makes a melee attack against it with advantage on the attack roll."
		}
		],
	},
	"Ezmerelda d'Avenir": {
		name: "Ezmerelda d'Avenir",
		source: ["Curse of Strahd", 231],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "chaotic good",
		ac: [17, "Studded Leather", false],
		hp: 82,
		hd: [11, 8],
		speed: "30 ft",
		scores: [14, 19, 16, 16, 11, 17],
		saves: ["", "", "", "", "3", ""],
		skills: "Acrobatics +7, Arcana +6, Deception +9, Insight +3, Medicine +3, Perception +6, Performance +6, Sleight of Hand +7, Stealth +7, Survival +6",
		damage_resistances: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "16",
		languages: "Common, Elvish",
		challenge_rating: "8",
		attacks: [{
			name: "Rapier +1",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			modifiers: [1, 1, true],
			description: "",
		}, {
			name: "Handaxe +1 (Melee)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			modifiers: [1, 1, true],
			description: "",
		}, {
			name: "Handaxe +1 (Ranged)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Ranged (20/60 ft)",
			modifiers: [1, 1, true],
			description: "",
		}, {
			name: "Silvered Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Special Equipment",
			description: "In addition to her magic armor and weapons, Ezmerelda has two potions of greater healing, six vials of holy water, and three wooden stakes."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Ezmerelda makes three attacks: two with her +1 rapier and one with her +1 handaxe or her silvered shortsword."
		}, {
			name: "Curse (Recharges after a Long Rest)",
			description: "Ezmerelda targets one creature that she can see within 30 feet of her. The target must succeed on a DC 14 Wisdom saving throw or be cursed. While cursed, the target has vulnerability to one type of damage of Ezmerelda's choice. The curse lasts until ended with a greater restoration spell, a remove curse spell, or similar magic. When the curse ends, Ezmerelda takes 3d6 psychic damage."
		}, {
			name: "Evil Eye (Recharges after a Short or Long Rest)",
			description: "Ezmerelda targets one creature that she can see within 10 feet of her and casts one of the following spells on the target (save DC 14), requiring neither somatic nor material components to do so: animal friendship, charm person, or hold person. If the target succeeds on the initial saving throw, Ezmerelda is blinded until the end of her next turn. Once a target succeeds on a saving throw against this effect, it is immune to the Evil Eye power of all Vistani for 24 hours."
		}
		],
		spells: [
			"Ezmerelda is a 7th-level spellcaster. Her spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). Ezmerelda has the following wizard spells prepared:",
			"Cantrips (at will): fire bolt, light, mage hand, prestidigitation",
			"1st level (4 slots): protection from good and evil, magic missile, shield",
			"2nd level (3 slots): darkvision, knock, mirror image",
			"3rd level (3 slots): clairvoyance, lightning bolt, magic circle",
			"4th level (1 slot): greater invisibility"
		]
	},
	"Guardian Portrait": {
		name: "Guardian Portrait",
		source: ["Curse of Strahd", 227],
		size: "Medium",
		type: "construct",
		alignment: "unaligned",
		ac: [5, "Natural Armor", false],
		hp: 22,
		hd: [5, 8],
		speed: "0 ft",
		scores: [1, 1, 10, 14, 10, 10],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Common, plus up to two other languages",
		challenge_rating: "1",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Constructed Nature",
			description: "An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone."
		}, {
			name: "Antimagic Susceptibility",
			description: "The portrait is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the portrait must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The portrait's innate spellcasting ability os Intelligence (spell save DC 12). The portrait can innately cast the following spells, requiring no material components:",
				"3/day each: counterspell, crown of madness, hypnotic pattern, telekinesis"
			]
		}, {
			name: "False Appearance",
			description: "While the figure in the portrait remains motionless, it is indistinguishable from a normal painting."
		}
		],
	},
	"Izek Strazni": {
		name: "Izek Strazni",
		source: ["Curse of Strahd", 232],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [14, "Studded Leather Armor", false],
		hp: 112,
		hd: [15, 8],
		speed: "30 ft",
		scores: [18, 15, 16, 10, 9, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +8, Perception +2",
		damage_resistances: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "12",
		languages: "Common",
		challenge_rating: "5",
		attacks: [{
			name: "Battleaxe",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 15 (2d10+4) slashing damage.",
		}, {
			name: "Hurl Flame",
			ability: 6,
			damage: [3, 6, "fire"],
			range: "Ranged (60 ft)",
			description: "If the target is a flammable object that isn't being worn or carried, it catches fire.",
		}
		],
		traits: [{
			name: "Brute",
			description: "A melee weapon deals one extra die of its damage when Izek hits with it (included in the attack)."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Izek makes two attacks with his battleaxe."
		}
		],
	},
	"Madam Eva": {
		name: "Madam Eva",
		source: ["Curse of Strahd", 233],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "chaotic neutral",
		ac: [10, "", false],
		hp: 88,
		hd: [16, 8],
		speed: "20 ft",
		scores: [8, 11, 12, 17, 20, 18],
		saves: ["", "", "5", "", "", ""],
		skills: "Arcana +7, Deception +8, Insight +13, Intimidation +8, Perception +9, Religion +7",
		damage_resistances: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "19",
		languages: "Abyssal, Common, Elvish, Infernal",
		challenge_rating: "10",
		attacks: [{
			name: "Dagger (Melee)",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Curse (Recharges after a Long Rest)",
			description: "Madam Eva targets one creature that she can see within 30 feet of her. The target must succeed on a DC 17 Wisdom saving throw or be cursed. While cursed, the target is blinded and deafened. The curse lasts until ended with a greater restoration spell, a remove curse spell, or similar magic. When the curse ends, Madam Eva takes 5d6 psychic damage."
		}, {
			name: "Evil Eye (Recharges after a Short or Long Rest)",
			description: "Madam Eva targets one creature that she can see within 10 feet of her and casts one of the following spells on the target (save DC 17), requiring neither somatic nor material components to do so: animal friendship, charm person, or hold person. If the target succeeds on the initial saving throw, Madam Eva is blinded until the end of her next turn. Once a target succeeds on a saving throw against this effect, it is immune to the Evil Eye power of all Vistani for 24 hours."
		}
		],
		spells: [
			"Madam Eva is a 16th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). Madam Eva has the following cleric spells prepared:",
			"Cantrips (at will): light, mending, sacred flame, thaumaturgy",
			"1st level (4 slots): bane, command, detect evil and good, protection from evil and good",
			"2nd level (3 slots): lesser restoration, protection from poison, spiritual weapon",
			"3rd level (3 slots): create food and water, speak with dead, spirit guardians",
			"4th level (3 slots): divination, freedom of movement, guardians of faith",
			"5th level (2 slots): greater restoration, raise dead",
			"6th level (1 slot): find the path, harm, true seeing",
			"7th level (1 slot): fire storm, regenerate",
			"8th level (1 slot): earthquake"
		]
	},
	"Mongrelfolk": {
		name: "Mongrelfolk",
		source: ["Curse of Strahd", 234],
		size: "Medium",
		type: "humanoid (mongrelfolk)",
		alignment: "any alignment",
		ac: [11, "Natural Armor", false],
		hp: 26,
		hd: [4, 8],
		speed: "20 ft",
		scores: [12, 9, 15, 9, 10, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +2, Perception +2, Stealth +3",
		damage_resistances: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "12",
		languages: "Common",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
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
		}
		],
		traits: [{
			name: "Extraordinary Feature",
			description: [
				"The mongrelfolk has one of the following extraordinary features, determined randomly by rolling a d20 or chosen by the DM:",
				"1-3: Amphibious: The mongrelfolk can breathe air and water.",
				"4-9: Darkvision: The mongrelfolk has darkvision out to a range of 60 feet.",
				"10: Flight: The mongrelfolk has leathery wings and a flying speed of 40 feet.",
				"11-15: Keen Hearing and Smell: The mongrelfolk has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
				"16-17: Spider Climb: The mongrelfolk can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
				"18-19: Standing Leap: The mongrelfolk's long jump is up to 20 feet and its high jump up to 10 feet, with or without a running start.",
				"20: Two-Headed: The mongrelfolk has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious."
			]
		}, {
			name: "Mimicry",
			description: "The mongrelfolk can mimic any sounds it has beard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 12 Wisdom (Insight) check."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The mongrelfolk makes two attacks: one with its bite and one with its claw or dagger."
		}
		],
	},
	"Phantom Warrior": {
		name: "Phantom Warrior",
		source: ["Curse of Strahd", 235],
		size: "Medium",
		type: "undead",
		alignment: "any alignment",
		ac: [16, "", false],
		hp: 45,
		hd: [6, 8],
		speed: "30 ft",
		scores: [16, 11, 16, 8, 10, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Stealth +4",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities: "cold, necrotic, poison",
		condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "any languages it knew in life",
		challenge_rating: "1",
		attacks: [{
			name: "Spectral Longsword",
			ability: 1,
			damage: [1, 8, "force"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Ethereal Sight",
			description: "The phantom warrior can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa."
		}, {
			name: "Incorporeal Movement",
			description: "The phantom warrior can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
		}, {
			name: "Spectral Armor and Shield",
			description: "The phantom warrior's AC accounts for its spectral armor and shield."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The phantom warrior makes two attacks with its spectral longsword."
		}, {
			name: "Etherealness",
			description: "The phantom warrior enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane."
		}
		],
	},
	"Pidlwick II": {
		name: "Pidlwick II",
		source: ["Curse of Strahd", 236],
		size: "Small",
		type: "construct",
		alignment: "neutral evil",
		ac: [14, "Natural Armor", false],
		hp: 10,
		hd: [3, 6],
		speed: "30 ft",
		scores: [10, 14, 11, 8, 13, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Performance +3",
		damage_resistances: "",
		damage_immunities: "poison",
		condition_immunities: "paralyzed, petrified, poisoned",
		senses: "",
		passive_perception: "11",
		languages: "understands Common but doesn't speak and can't read or write",
		challenge_rating: "1/4",
		attacks: [{
			name: "Club",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Dart",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Ambusher",
			description: "During the first round of combat, Pidlwick II has advantage on attack rolls against any creature that hasn't had a turn yet."
		},
		]
	},
	"Rahadin": {
		name: "Rahadin",
		source: ["Curse of Strahd", 237],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "lawful evil",
		ac: [18, "Studded Leather", false],
		hp: 135,
		hd: [18, 8],
		speed: "35 ft",
		scores: [14, 22, 17, 15, 16, 18],
		saves: ["", "", "7", "", "7", ""],
		skills: "Deception +8, Insight +7, Intimidation +12, Perception +11, Stealth +14",
		damage_resistances: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "21",
		languages: "Common, Elvish",
		challenge_rating: "10",
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Poisoned Dart",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "Plus 5 (2d4) poison damage.",
		}
		],
		traits: [{
			name: "Deathly Choir",
			description: "Any creature within 10 feet of Rahadin that isn't protected by a mind blank spell hears in its mind the screams of the thousands of people Rahadin has killed. As a bonus action, Rahadin can force all creatures that can hear the screams to make a DC 16 Wisdom saving throw. Each creature takes 16 (3d10) psychic damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Fey Ancestry",
			description: "Rahadin has advantage on saving throws against being charmed, and magic can't put him to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Rahadin's innate spellcasting ability is Intelligence. He can innately cast the following spells, requiring no components:",
				"3/day: misty step, phantom steed",
				"1/day: magic weapon, nondetection"
			]
		}, {
			name: "Mask of the Wild",
			description: "Rahadin can attempt to hide even when he is only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Rahadin attacks three times with his scimitar, or twice with his poisoned darts."
		}
		],
	},
	"Rictavio": {
		name: "Rictavio",
		source: ["Curse of Strahd", 238],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "lawful good",
		ac: [12, "Leather Armopr", false],
		hp: 77,
		hd: [14, 8],
		speed: "30 ft",
		scores: [9, 12, 13, 16, 18, 16],
		saves: ["", "", "4", "", "7", ""],
		skills: "Arcana +9, Insight +7, Medicine +7, Perception +7, Religion +6, Sleight of Hand +4",
		damage_resistances: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "17",
		languages: "Abyssal, Common, Elvish, Infernal",
		challenge_rating: "5",
		attacks: [{
			name: "Sword Cane",
			ability: 2,
			damage: [1, 6, ""],
			range: "Melee (5 ft)",
			description: "Wooden Cane: bludgeoning damage; Silvered Sword: piercing damage",
		}
		],
		traits: [{
			name: "Special Equipment",
			description: "In addition to his sword cane, Rictavio wears a hat of disguise and a ring of mind shielding, and he carries a spell scroll of raise dead."
		}, {
			name: "Undead Slayer",
			description: "When Rictavio hits an undead with a weapon attack, the undead takes an extra 10 (3d6) damage of the weapon's type."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Rictavio makes two attacks with his sword cane."
		}
		],
		spells: [
			"Rictavio is a 9th-level spellcaster. His spellcasting ability is Wisdom (spell save DC 15, +7 to hit with spell attacks). Rictavio has the following cleric spells prepared:",
			"Cantrips (at will): guidance, light, mending, thaumaturgy",
			"1st level (4 slots): cure wounds, detect evil and good, protection from evil and good, sanctuary",
			"2nd level (3 slots): augury, lesser restoration, protection from poison",
			"3rd level (3 slots): magic circle, remove curse, speak with dead",
			"4th level (3 slots): death ward, freedom of movement",
			"5th level (1 slot): dispel evil and good"
		]
	},
	"Strahd's Animated Armor": {
		name: "Strahd's Animated Armor",
		source: ["Curse of Strahd", 227],
		size: "Medium",
		type: "construct",
		alignment: "lawful evil",
		ac: [21, "Natural Armor", false],
		hp: 112,
		hd: [15, 8],
		speed: "30 ft",
		scores: [17, 13, 16, 9, 10, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		damage_resistances: "cold, fire",
		damage_immunities: "lightning, poison",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "blindsight 60 ft (blind beyond this radius)",
		passive_perception: "13",
		languages: "understands Common but can't speak",
		challenge_rating: "6",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) lightning damage.",
		}, {
			name: "Shocking Bolt",
			ability: 2,
			damage: [3, 6, "lightning"],
			range: "Ranged (60 ft)",
			modifiers: ["", "", false],
			description: "Advantage on the attack roll if the target is wearing armor made of metal",
		}
		],
		traits: [{
			name: "Constructed Nature",
			description: "An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone."
		}, {
			name: "Antimagic Susceptibility",
			description: "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
		}, {
			name: "False Appearance",
			description: "While the armor remains motionless, it is indistinguishable from a normal suit of armor."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The armor makes two melee attacks or uses Shocking Bolt twice."
		}
		],
	},
	"Strahd von Zarovich": {
		name: "Strahd von Zarovich",
		source: ["Curse of Strahd", 240],
		size: "Medium",
		type: "undead (shapechanger)",
		alignment: "lawful evil",
		ac: [16, "Natural Armor", false],
		hp: 144,
		hd: [17, 8],
		speed: "30 ft",
		scores: [18, 18, 18, 20, 15, 18],
		saves: ["", "9", "", "", "7", "9"],
		skills: "Arcana +15, Perception +12, Religion +10, Stealth +14",
		damage_resistances: "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "22",
		languages: "Abyssal, Common, Draconic, Elvish, Giant, Infernal",
		challenge_rating: "15",
		attacks: [{
			name: "Unarmed Strike (Vampire Form Only)",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 14 (4d6) necrotic damage. If the target is a creature, Strahd can grapple it (escape DC 18) instead of dealing the bludgeoning damage.",
		}, {
			name: "Bite (Bat or Vampire Form Only)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) necrotic damage. One willing creature, or a creature that is grappled by Strahd, incapacitated, or restrained. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and Strahd regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under Strahd's control.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: [
				"If Strahd isn't in running water or sunlight, he can use his action to polymorph into a Tiny bat, a Medium wolf, or a Medium cloud of mist, or back into his true form.",
				"While in bat or wolf form, Strahd can't speak. In bat form, his walking speed is 5 feet, and he has a flying speed of 30 feet. In wolf form, his walking speed is 40 feet. His statistics, other than his size and speed, are unchanged. Anything he is wearing transforms with him, but nothing he is carrying does. He reverts to his true form if he dies.",
				"While in mist form, Strahd can't take any actions, speak, or manipulate objects. He is weightless, has a flying speed of 30 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and he can't pass through water. He has advantage on STR, DEX, and CON saving throws, and it is immune to all nonmagical damage, except the damage he takes from sunlight."
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Strahd fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Misty Escape",
			description: [
				"When he drops to 0 hit points outside his coffin, Strahd transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that he isn't in running water or sunlight. If he can't transform, he is destroyed.",
				"While he has 0 hit points in mist form, he can't revert to his vampire form, and he must reach his coffin within 2 hours or be destroyed. Once in his coffin, he reverts to his vampire form. He is then paralyzed until he regains at least 1 hit point. After spending 1 hour in his coffin with 0 hit points, he regains 1 hit point."
			]
		}, {
			name: "Regeneration",
			description: "Strahd regains 20 hit points at the start of his turn if he has at least 1 hit point and isn't in running water or sunlight. If he takes radiant damage or damage from holy water, this trait doesn't function at the start of his next turn."
		}, {
			name: "Spider Climb",
			description: "Strahd can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Vampire Weaknesses",
			description: [
				"Strahd has the following flaws.",
				"Forbiddance: He can't enter a residence without an invitation from one of the occupants.",
				"Harmed by Running Water: He takes 20 acid damage if he ends his turn in running water.",
				"Stake to the Heart: If a piercing weapon made of wood is driven into his heart while he is incapacitated in his coffin, he is paralyzed until the stake is removed.",
				"Sunlight Hypersensitivity: While in sunlight, Strahd takes 20 radiant damage at the start of his turn, and he has disadvantage on attack rolls and ability checks."
			]
		}
		],
		actions: [{
			name: "Multiattack (Vampire Form Only)",
			description: "Strahd makes two attacks, only one of which can be a bite attack."
		}, {
			name: "Charm",
			description: [
				"Strahd targets one humanoid he can see within 30 ft of him. If the target can see Strahd, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed. The charmed target regards Strahd as a trusted friend to be heeded and protected. The target isn't under Strahd's control, but it takes Strahd's requests and actions in the most favorable way and lets Strahd bite it.",
				"Each time Strahd or his companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until Strahd is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
			]
		}, {
			name: "Children of the Night (1/day)",
			description: "Strahd magically calls 2d4 swarms of bats or swarms rats, provided that the sun isn't up. While outdoors, Strahd can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of Strahd and obeying his spoken commands. The beasts remain for 1 hour, until Strahd dies, or until he dismisses them as a bonus action."
		}
		],
		legendary_actions: [{
			name: "",
			description: "Strahd can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time, and only at the end of another creature's turn. Strahd regains spent legendary actions at the start of his turn."
		}, {
			name: "Move",
			description: "Strahd moves up to his speed without provoking opportunity attacks."
		}, {
			name: "Unarmed Strike",
			description: "Strahd makes one unarmed strike."
		}, {
			name: "Bite (Costs 2 Actions)",
			description: "Strahd makes one bite attack."
		}
		],
		spells: [
			"Strahd is a 9th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 18, +10 to hit with spell attacks). Strahd has the following wizard spells prepared:",
			"Cantrips (at will): mage hand, prestidigitation, ray of frost",
			"1st level (4 slots): comprehend languages, fog cloud, sleep",
			"2nd level (3 slots): detect thoughts, gust of wind, mirror image",
			"3rd level (3 slots): animate dead, fireball, nondetection",
			"4th level (3 slots): blight, greater invisibility, polymorph",
			"5th level (1 slot): animate objects, scrying"
		]
	},
	"Strahd Zombie": {
		name: "Strahd Zombie",
		source: ["Curse of Strahd", 241],
		size: "Medium",
		type: "undead",
		alignment: "unaligned",
		ac: [8, "", false],
		hp: 30,
		hd: [4, 8],
		speed: "20 ft",
		scores: [13, 6, 16, 3, 6, 5],
		saves: ["", "", "", "", "0", ""],
		skills: "",
		damage_resistances: "",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "8",
		languages: "understands the languages it knew in life but can't speak",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Loathsome Limbs",
			description: [
				"Whenever the zombie takes at least 5 bludgeoning or slashing damage at one time, roll a d20 to determine what else happens to it: ",
				"1-8: One leg is severed from the zombie if it has any legs left",
				"9-16: One arm is severed from the zombie if it has any arms left",
				"17-20: The zombie is decapitated.",
				"If the zombie is reduced to 0 hit points, all parts of it die. Until then, a severed part acts on the zombie's initiative and has its own action and movement. A severed part has AC 8. Any damage it takes is subtracted from the zombie's hit points.",
				"A severed leg is unable to attack and has a speed of 5 feet.",
				"A severed arm has a speed of 5 feet and can make one claw attack on its turn, with disadvantage on the attack roll. Each time the zombie loses an arm, it loses a claw attack.",
				"If its head is severed, the zombie loses its bite attack and its body is blinded unless the head can see it. The severed head has a speed of 0 feet. It can make a bite attack but only against a target in its space.",
				"The zombie's speed is halved if it's missing a leg. If it loses both legs, it falls prone. If it has both arms, it can crawl. With only one arm, it can still crawl, but its speed is halved. With no arms or legs, its speed is 0, and it can't benefit from bonuses to speed."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The zombie makes three attacks: one with its bite and two with its claws."
		}
		],
	},
	"Tree Blight": {
		name: "Tree Blight",
		source: ["Curse of Strahd", 230],
		size: "Huge",
		type: "plant",
		alignment: "neutral evil",
		ac: [15, "Natural Armor", false],
		hp: 149,
		hd: [13, 12],
		speed: "30 ft",
		scores: [23, 10, 20, 6, 10, 3],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_immunities: "",
		condition_immunities: "blinded, deafened",
		senses: "blindsight 60 ft (blind beyond this radius)",
		passive_perception: "10",
		languages: "understands Common and Druidic but doesn't speak",
		challenge_rating: "7",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Branch",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}, {
			name: "Grasping Root",
			ability: 1,
			damage: [1, 6, ""],
			range: "Melee (15 ft)",
			description: "One creature not grappled by the blight (escape DC 15). Until grapple ends, target takes 9 (1d6+6) bludgeoning damage at the start of each turn. The root has AC 15 and can be severed by dealing 6 slashing damage or more to it at once. Cutting the root doesn't hurt the blight but ends the grapple.",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the blight remains motionless, it is indistinguishable from a dead tree."
		}, {
			name: "Siege Monster",
			description: "The blight deals double damage to objects and structures."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The blight makes four attacks: two with its branches and two with its grasping roots, If it has a target grappled, the blight can also make a bite attack against the target as a bonus action."
		}
		],
	},
	"Vladimir Horngaard": {
		name: "Vladimir Horngaard",
		source: ["Curse of Strahd", 241],
		size: "Medium",
		type: "undead",
		alignment: "lawful evil",
		ac: [17, "Half Plate", false],
		hp: 192,
		hd: [16, 8],
		speed: "30 ft",
		scores: [18, 14, 18, 13, 16, 18],
		saves: ["7", "", "7", "", "6", "7"],
		skills: "",
		damage_resistances: "necrotic, psychic",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned, stunned",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Common, Draconic",
		challenge_rating: "7",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the target is a creature against which Vladimir has sworn vengeance, the target takes an extra 14 (4d6) bludgeoning damage. Instead of dealing damage, Vladimir can grapple the target (escape DC 14) provided the target is Large or smaller.",
		}, {
			name: "Greatsword +2",
			ability: 1,
			damage: [4, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Against Strahd, Vladimir deals an extra 14 (4d6) slashing damage with this weapon.",
		}
		],
		traits: [{
			name: "Regeneration",
			description: "Vladimir regains 10 hit points at the start of his turn. If he takes fire or radiant damage, this trait doesn't function at the start of his next turn. Vladimir's body is destroyed only if he starts his turn with 0 hit points and doesn't regenerate."
		}, {
			name: "Rejuvenation",
			description: "When Vladimir's body is destroyed, his soul lingers. After 24 hours, the soul inhabits and animates another corpse on the same plane of existence and regains all its hit points. While the soul is bodiless, a wish spell can be used to force the soul to go to the afterlife and not return."
		}, {
			name: "Turn Immunity",
			description: "Vladimir is immune to effects that turn undead."
		}, {
			name: "Vengeful Tracker",
			description: "Vladimir knows the distance to and direction of any creature against which it seeks revenge, even if the creature and Vladimir are on different planes of existence. If the creature being tracked by Vladimir dies, Vladimir knows."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Vladimir makes two fist attacks or two attacks with his +2 Greatsword."
		}, {
			name: "Vengeful Glare",
			description: "Vladimir targets one creature he can see within 30 feet of him and against which he has sworn vengeance. The target must make a DC 15 Wisdom saving throw. On a failure, the target is paralyzed until Vladimir deals damage to it, or until the end of Vladimir's next turn. When the paralysis ends, the target is frightened of Vladimir for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if it can see Vladimir, ending the frightened condition on itself on a success."
		}
		],
	},
	"Wereraven": {
		name: "Wereraven",
		source: ["Curse of Strahd", 242],
		size: "Medium",
		type: "humanoid (human, shapechanger)",
		alignment: "lawful good",
		ac: [12, "", false],
		hp: 31,
		hd: [7, 8],
		speed: "30 ft, fly 50 ft in raven and hybrid forms",
		scores: [10, 15, 11, 13, 15, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Insight +4, Perception +6",
		damage_resistances: "",
		damage_immunities: "bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons",
		condition_immunities: "",
		senses: "",
		passive_perception: "16",
		languages: "Common (can't speak in raven form)",
		challenge_rating: "2",
		attacks: [{
			name: "Beak (Raven or Hybrid Form Only)",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Or 4 (1d4+2) piercing damage in hybrid form. If the target is humanoid, it must succeed on a DC 10 Constitution saving throw or be cursed with wereraven lycanthropy.",
		}, {
			name: "Shortsword (Humanoid or Hybrid Form Only)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Hand Crossbow (Humanoid or Hybrid Form Only)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The wereraven can use its action to polymorph into a raven-humanoid hybrid or into a raven, or back into its human form. Any equipment it is wearing or carrying isn't transformed. It reverts to its human form if it dies."
		}, {
			name: "Mimicry",
			description: "The wereraven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
		}
		],
		actions: [{
			name: "Multiattack (Human or Hybrid Form Only)",
			description: "The wereraven makes two weapon attacks, one of which can be with its hand crossbow."
		}
		],
	}
};