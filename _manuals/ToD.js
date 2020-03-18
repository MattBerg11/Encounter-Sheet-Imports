var ToD = {
	// 23
	"Ambush Drake": {
		name: "Ambush Drake",
		source: ["Hoard of the Dragon Queen", 88],
		size: "Medium",
		type: "dragon",
		alignment: "unaligned",
		ac: [13, "Natural Armor", false],
		hp: 22,
		hd: [4, 6],
		speed: "30 ft",
		scores: [13, 15, 14, 4, 11, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +4",
		damage_resistances: "poison",
		senses: "darkvision 60 ft",
		passive_perception: "14",
		languages: "understands Draconic but can't speak it",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Pack Tactics",
			description: "The drake has advantage on an attack roll against a creature if at least one of the drake's allies is within 5 feet of the creature and the ally isn't incapacitated."
		}, {
			name: "Surprise Attack",
			description: "If the drake surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack.",
		}
		],
	},
	"Azbara Jos": {
		name: "Azbara Jos",
		source: ["Hoard of the Dragon Queen", 88],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "lawful evil",
		ac: [13, "", false],
		hp: 39,
		hd: [6, 8],
		speed: "30 ft",
		scores: [9, 16, 14, 16, 13, 11],
		saves: ["", "", "", "5", "3", ""],
		skills: "Arcana +5, Deception +2, Insight +3, Stealth +5",
		passive_perception: "11",
		languages: "Common, Draconic, Infernal, Primordial, Thayan",
		challenge_rating: "4",
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
		}
		],
		traits: [{
			name: "Special Equipment",
			description: "Azbara has two scrolls of mage armor."
		}, {
			name: "Potent Cantrips",
			description: "When Azbara casts an evocation Cantrips and misses, or the target succeeds on its saving throw, the target still takes half the cantrip's damage but suffers no other effect."
		}, {
			name: "Sculpt Spells",
			description: "When Azbara casts an evocation spell that affects other creatures that he can see, he can choose a number of them equal to 1+the spell's level to succeed on their saving throws against the spell. Those creatures take no damage if they would normally take half damage from the spell."
		}
		],
		spells: [
			"Azbara is a 6th-level spellcaster that uses Intelligence as his spellcasting ability (spell save DC 13, +5 to hit with spell attacks). Azbara has the following spells prepared from the wizard spell list:",
			"Cantrips (at will): mage hand, prestidigitation, ray of frost, shocking grasp",
			"1st level (4 slots): fog cloud, magic missile, shield, thunderwave",
			"2nd level (3 slots): invisibility, misty step, scorching ray",
			"3rd level (3 slots): counterspell, dispel magic, fireball"
		]
	},
	"Blagothkus": {
		name: "Blagothkus",
		source: ["Hoard of the Dragon Queen", 89],
		size: "Huge",
		type: "giant (cloud giant)",
		alignment: "neutral evil",
		ac: [17, "Splint", false],
		hp: 138,
		hd: [12, 12],
		speed: "40 ft",
		scores: [26, 13, 20, 16, 15, 15],
		saves: ["", "", "9", "", "6", "6"],
		skills: "Arcana +7, Insight +6, Intimidation +6, Perception +6",
		passive_perception: "16",
		languages: "Common, Draconic, Giant",
		challenge_rating: "9",
		attacks: [{
			name: "Morningstar",
			ability: 1,
			damage: [3, 8, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "Blagothkus has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Blagothkus can innately cast the following spells (spell save DC 15), requiring no material components:",
				"3/day each: fog cloud, levitate"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Blagothkus attacks twice with his morningstar."
		}
		],
		spells: [
			"Blagothkus is a 5th-level spellcaster that uses Intelligence as his spellcasting ability (spell save DC 15, +7 to hit with spell attacks). Blagothkus has the following spells prepared from the wizard spell list:",
			"Cantrips (at will): light, mage hand, prestidigitation",
			"1st level (4 slots): detect magic, identify, magic missile, shield",
			"2nd level (3 slots): gust of wind, misty step, shatter",
			"3rd level (2 slots): fly, lightning bolt"
		]
	},
	"Captain Othelstan": {
		name: "Captain Othelstan",
		source: ["Hoard of the Dragon Queen", 89],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "lawful evil",
		ac: [19, "Splint", true],
		hp: 93,
		hd: [11, 10],
		speed: "30 ft",
		scores: [19, 10, 16, 13, 14, 12],
		saves: ["7", "", "6", "", "", ""],
		skills: "Athletics +7, Intimidation +7, Perception +5, Religion +4",
		passive_perception: "15",
		languages: "Common, Draconic, Giant",
		challenge_rating: "5",
		attacks: [{
			name: "Flail",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Action Surge (Recharges on a Short or Long Rest)",
			description: "On his turn, Othelstan can take one additional action."
		}, {
			name: "Tiamat's Blessing of Retribution",
			description: "When Othelstan takes damage that reduces him to 0 hit points, he immediately regains 20 hit points. If he has 20 hit points or fewer at the end of his next turn, he dies."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Othelstan attacks twice with his flail or spear, or makes two ranged attacks with his spears."
		}
		]
	},
	"Dragonclaw": {
		name: "Dragonclaw",
		source: ["Hoard of the Dragon Queen", 89],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [14, "Leather Armor", false],
		hp: 16,
		hd: [3, 8],
		speed: "30 ft",
		scores: [9, 16, 13, 11, 10, 12],
		saves: ["", "", "", "", "2", ""],
		skills: "Deception +3, Stealth +5",
		passive_perception: "10",
		languages: "Common, Draconic",
		challenge_rating: "1",
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Dragon Fanatic",
			description: "The dragonclaw has advantage on saving throws against being charmed or frightened. While the dragonclaw can see a dragon or higher-ranking Cult of the Dragon cultist friendly to it, the dragonclaw ignores the effects of being charmed or frightened."
		}, {
			name: "Fanatic Advantage",
			description: "Once per turn, if the dragonclaw makes a weapon attack with advantage on the attack roll and hits, it deals an extra 7 (2d6) damage.",
		}, {
			name: "Pack Tactics",
			description: "The dragonclaw has advantage on an attack roll against a creature if at least one of the dragonclaw's allies is within 5 feet of the creature and the ally isn't incapacitated."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragonclaw attacks twice with its scimitar."
		}
		]
	},
	"Dragonfang": {
		name: "Dragonfang",
		source: ["Rise of Tiamat", 89],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [15, "Studded Leather", false],
		hp: 78,
		hd: [12, 8],
		speed: "30 ft",
		scores: [11, 16, 14, 12, 12, 14],
		saves: ["", "", "", "", "3", ""],
		skills: "Deception +4, Stealth +5",
		damage_resistances: "one of the following: acid, cold, fire, lightning or poison",
		passive_perception: "11",
		languages: "Common, Draconic, Infernal",
		challenge_rating: "5",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) damage of the type to which the dragonfang has damage resistance.",
		}, {
			name: "Orb of Dragon's Breath (2/Day)",
			ability: 6,
			damage: [5, 8, ""],
			range: "Ranged (50 ft)",
			description: "One target; damage of the type to which the dragonfang has damage resistance.",
		}
		],
		traits: [{
			name: "Dragon Fanatic",
			description: "The dragonfang has advantage on saving throws against being charmed or frightened. While the dragonfang can see a dragon or higher-ranking Cult of the Dragon cultist friendly to it, the dragonfang ignores the effects of being charmed or frightened."
		}, {
			name: "Fanatic Advantage",
			description: "Once per turn, if the dragonfang makes a weapon attack with advantage on the attack roll and hits, the target takes an extra 10 (3d6) damage.",
		}, {
			name: "Limited Flight",
			description: "The dragonfang can use a bonus action to gain a flying speed of 30 feet until the end of its turn."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The Dragonfang attacks twice with its shortsword."
		}
		]
	},
	"Dragonsoul": {
		name: "Dragonsoul",
		source: ["Rise of Tiamat", 89],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [16, "Studded Leather", false],
		hp: 110,
		hd: [17, 8],
		speed: "30 ft",
		scores: [11, 18, 14, 13, 12, 16],
		saves: ["", "", "", "", "4", ""],
		skills: "Deception +6, Stealth +7",
		damage_resistances: "one of the following: acid, cold, fire, lightning or poison",
		passive_perception: "11",
		languages: "Common, Draconic, Infernal",
		challenge_rating: "7",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) damage of the type to which the dragonsoul has damage resistance.",
		}, {
			name: "Orb of Dragon's Breath (3/Day)",
			ability: 2,
			damage: [6, 8, ""],
			range: "Ranged (90 ft)",
			modifiers: ["", "", false],
			description: "One target; damage of the type to which the dragonsoul has damage resistance.",
		}
		],
		traits: [{
			name: "Dragon Fanatic",
			description: "The dragonsoul has advantage on saving throws against being charmed or frightened. While the dragonsoul can see a dragon or higher-ranking Cult of the Dragon cultist friendly to it, the dragonsoul ignores the effects of being charmed or frightened."
		}, {
			name: "Fanatic Advantage",
			description: "Once per turn, if the dragonsoul makes a weapon attack with advantage on the attack roll and hits, the target takes an extra 10 (3d6) damage.",
		}, {
			name: "Limited Flight",
			description: "The dragonsoul can use a bonus action to gain a flying speed of 30 feet until the end of its turn."
		}, {
			name: "Pack Tactics",
			description: "The dragonsoul has advantage on an attack roll against a creature if at least one of the dragonclaw's allies is within 5 feet of the creature and the ally isn't incapacitated."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The Dragonsoul attacks twice with its shortsword."
		}
		]
	},
	"Dragonwing": {
		name: "Dragonwing",
		source: ["Rise of Tiamat", 90],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [14, "Leather Armor", false],
		hp: 33,
		hd: [6, 8],
		speed: "30 ft",
		scores: [11, 16, 13, 11, 11, 13],
		saves: ["", "", "", "", "2", ""],
		skills: "Deception +3, Stealth +5",
		damage_resistances: "one of the following: acid, cold, fire, lightning, or poison",
		passive_perception: "10",
		languages: "Common, Draconic",
		challenge_rating: "2",
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) damage of the type to which the cultist has resistance.",
		}
		],
		traits: [{
			name: "Dragon Fanatic",
			description: "The dragonwing has advantage on saving throws against being charmed or frightened. While the dragonwing can see a dragon or higher-ranking Cult of the Dragon cultist friendly to it, the dragonwing ignores the effects of being charmed or frightened."
		}, {
			name: "Fanatic Advantage",
			description: "Once per turn, if the dragonwing makes a weapon attack with advantage on the attack roll and hits, the target takes an extra 7 (2d6) damage.",
		}, {
			name: "Limited Flight",
			description: "The dragonwing can use a bonus action to gain a flying speed of 30 feet until the end of its turn."
		}, {
			name: "Pack Tactics",
			description: "The dragonwing has advantage on an attack roll against a creature if at least one of the dragonwing's allies is within 5 feet of the creature and the ally isn't incapacitated."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragonwing attacks twice with its scimitar."
		}
		]
	},
	"Dralmorrer Borngray": {
		name: "Dralmorrer Borngray",
		source: ["Hoard of the Dragon Queen", 90],
		size: "Medium",
		type: "humanoid (high elf)",
		alignment: "neutral evil",
		ac: [16, "Studded Leather", true],
		hp: 52,
		hd: [7, 10],
		speed: "30 ft",
		scores: [18, 14, 14, 16, 10, 8],
		saves: ["6", "", "4", "", "", ""],
		skills: "Arcana +5, Deception +1, Insight +2, Perception +2, Religion +5",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "Common, Bullywug, Draconic, Elvish, Goblin, Sylvan",
		challenge_rating: "3",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
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
			name: "Fey Ancestry",
			description: "Dralmorrer has advantage on saving throws against being charmed, and magic can't put him to sleep."
		}, {
			name: "War Magic",
			description: "When Dralmorrer uses his action to cast a cantrip, he can also take a bonus action to make one weapon attack."
		}, {
			name: "Weapon Bond",
			description: "Provided his longsword is on the same plane Dralmorrer can take a bonus action to teleport it to his hand."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Dralmorrer attacks twice, either with his longsword or dagger."
		}
		],
		spells: [
			"Dralmorrer is a 7th-level spellcaster that uses Intelligence as his spellcasting ability (spell save DC 13, +5 to hit with spell attacks). Dralmorrer has the following spells prepared from the wizard spell list:",
			"Cantrips (at will): fire bolt, prestidigitation, shocking grasp",
			"1st level (4 slots): longstrider, magic missile, shield, thunderwave",
			"2nd level (2 slots): magic weapon, misty step"
		]
	},
	"Frulam Mondath": {
		name: "Frulam Mondath",
		source: ["Hoard of the Dragon Queen", 90],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "lawful evil",
		ac: [16, "Chain Mail", false],
		hp: 44,
		hd: [8, 8],
		speed: "30 ft",
		scores: [14, 10, 13, 11, 18, 15],
		saves: ["", "", "", "", "6", "4"],
		skills: "Deception +4, History +2, Religion +2",
		passive_perception: "14",
		languages: "Common, Draconic, Infernal",
		challenge_rating: "2",
		attacks: [{
			name: "Halberd",
			ability: 1,
			damage: [1, 10, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Frulam attacks twice with her halberd."
		}
		],
		spells: [
			"Frulam is a 5th-level spellcaster that uses Wisdom as her spellcasting ability (spell save DC 14, +6 to hit with spell attacks). Frulam has the following spells prepared from the cleric spell list:",
			"Cantrips (at will): light, sacred flame, thaumaturgy",
			"1st level (4 slots): command, cure wounds, healing word, sanctuary",
			"2nd level (3 slots): calm emotions, hold person, spiritual weapon",
			"3rd level (2 slots): mass healing word, spirit guardians"
		]
	},
	"Guard Drake": {
		name: "Guard Drake",
		source: ["Hoard of the Dragon Queen", 91],
		size: "Medium",
		type: "dragon",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 52,
		hd: [7, 8],
		speed: "30 ft",
		scores: [16, 11, 16, 4, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		damage_resistances: "lightning",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "understands Draconic but can't speak it",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drake attacks twice, once with its bite and once with its tail."
		}
		]
	},
	"Ice Toad": {
		name: "Ice Toad",
		source: ["Rise of Tiamat", 90],
		size: "Medium",
		type: "monstrosity",
		alignment: "neutral",
		ac: [12, "Natural Armor", false],
		hp: 32,
		hd: [5, 8],
		speed: "30 ft, swim 30 ft",
		scores: [13, 10, 14, 8, 10, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		damage_immunities: "cold",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "Ice Toad",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 8, "cold"],
			range: "",
			description: "If the target is a Medium or smaller creature it is grappled (escape DC 11). Until this grapple ends, the toad can't bite another target.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The toad can breathe air or water."
		}, {
			name: "Cold Aura",
			description: "Any creature that starts its turn within 5 feet of the toad takes 3 (1d6) cold damage.",
		}, {
			name: "Standing Leap",
			description: "The toad's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
		}
		],
	},
	"Jamna Gleamsilver": {
		name: "Jamna Gleamsilver",
		source: ["Hoard of the Dragon Queen", 91],
		size: "Small",
		type: "humanoid (gnome)",
		alignment: "neutral",
		ac: [15, "Leather Armor", false],
		hp: 22,
		hd: [4, 6],
		speed: "25 ft",
		scores: [8, 17, 14, 15, 10, 12],
		saves: ["", "5", "", "4", "", ""],
		skills: "Acrobatics +5, Deception +3, Insight +2, Perception +4, Persuasion +3, Stealth +7",
		senses: "darkvision 60 ft",
		passive_perception: "14",
		languages: "Common, Gnomish, Goblin, Sylvan",
		challenge_rating: "1",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Or 9 (1d6+3) plus (1d6) piercing damage if the target is Medium or larger.",
		}
		],
		traits: [{
			name: "Cunning Action",
			description: "Jamna can take a bonus action to take the Dash, Disengage, or Hide action."
		}, {
			name: "Gnome Cunning",
			description: "Jamna has advantage on Intelligence, Wisdom and Charisma saving throws against magic."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Jamna attacks twice with her shortswords."
		}
		],
		spells: [
			"Jamna is a 4th-level spellcaster that uses Intelligence as her spellcasting ability (spell save DC 12, +4 to hit with spell attacks). Jamna has the following spells prepared from the wizard spell list.",
			"Cantrips (at will): mage hand, minor illusion, prestidigitation, ray of frost",
			"1st level (3 slots): charm person, color spray, disguise self, longstrider"
		]
	},
	"Langdedrosa Cyanwrath": {
		name: "Langdedrosa Cyanwrath",
		source: ["Hoard of the Dragon Queen", 91],
		size: "Medium",
		type: "humanoid (half-dragon)",
		alignment: "lawful evil",
		ac: [17, "Splint", false],
		hp: 57,
		hd: [6, 12],
		speed: "30 ft",
		scores: [19, 13, 16, 10, 14, 12],
		saves: ["6", "", "5", "", "", ""],
		skills: "Athletics +6, Intimidation +3, Perception +4",
		damage_resistances: "lightning",
		senses: "blindsight 10 ft, darkvision 60 ft",
		passive_perception: "14",
		languages: "Common, Draconic",
		challenge_rating: "4",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Action Surge (Recharges on a Short or Long Rest)",
			description: "On his turn, Langdedrosa can take one additional action."
		}, {
			name: "Improved Critical",
			description: "Langdedrosa's weapon attacks score a critical hit on a roll of 19 or 20."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Langdedrosa attacks twice, either with his greatsword or spear."
		}, {
			name: "Lightning Breath (Recharge 5-6)",
			description: "Langdedrosa breathes lightning in a 30-foot line that is 5 feet wide. Each creature in the line must make a DC 13 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.",
		}
		]
	},
	"Naergoth Bladelord": {
		name: "Naergoth Bladelord",
		source: ["Rise of Tiamat", 90],
		size: "Medium",
		type: "undead",
		alignment: "neutral evil",
		ac: [18, "Plate", false],
		hp: 135,
		hd: [18, 8],
		speed: "30 ft",
		scores: [20, 12, 16, 12, 14, 16],
		saves: ["", "5", "", "", "4", ""],
		skills: "Perception +6, Stealth +5",
		damage_resistances: "necrotic; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "16",
		languages: "Common, Draconic",
		challenge_rating: "11",
		attacks: [{
			name: "Life Drain",
			ability: 1,
			damage: [5, 6, "necrotic"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 15 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
		}, {
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) necrotic damage; Two-Handed: 10 (1d10+5) slashing damage.",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "Plus 10 (3d6) necrotic damage.",
		}
		],
		traits: [{
			name: "Sunlight Sensitivity",
			description: "While in sunlight, Naergoth has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Naergoth makes three attacks, either with his longsword or longbow. He can use Life Drain in place of one longsword attack."
		}
		]
	},
	"Neronvain": {
		name: "Neronvain",
		source: ["Rise of Tiamat", 91],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "neutral evil",
		ac: [17, "", false],
		hp: 117,
		hd: [18, 8],
		speed: "30 ft",
		scores: [8, 17, 15, 16, 13, 18],
		saves: ["", "", "6", "", "5", ""],
		skills: "Arcana +7, Perception +5",
		damage_immunities: "poison",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "15",
		languages: "Common, Draconic, Elvish, Infernal",
		challenge_rating: "9",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 13 (3d8) poison damage.",
		}, {
			name: "Eldritch Arrow",
			ability: 2,
			damage: [2, 10, "force"],
			range: "Ranged (120 ft)",
			modifiers: ["", "", false],
			description: "",
		}
		],
		traits: [{
			name: "Draconic Majesty",
			description: "Neronvain adds his Charisma bonus to his AC (included)."
		}
		],
		actions: [{
			name: "Fey Ancestry",
			description: "Magic can't put Neronvain to sleep."
		}, {
			name: "Multiattack",
			description: "Neronvain makes two attacks, either with his shortsword or Eldritch Arrow."
		}, {
			name: "Poisonous Cloud (2/Day)",
			description: "Poison gas fills a 20-foot-radius sphere centered on a point Neronvain can see within 50 feet of him. The gas spreads around corners and remains until the start of Neronvain's next turn. Each creature that starts its turn in the gas must succeed on a DC 16 Constitution saving throw or be poisoned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}
		]
	},
	"Pharblex Spattergoo": {
		name: "Pharblex Spattergoo",
		source: ["Hoard of the Dragon Queen", 91],
		size: "Medium",
		type: "humanoid (bullywug)",
		alignment: "chaotic evil",
		ac: [15, "Studded Leather Armor", true],
		hp: 59,
		hd: [7, 8],
		speed: "20 ft, swim 40 ft",
		scores: [15, 12, 18, 11, 16, 7],
		saves: ["4", "", "6", "", "", ""],
		skills: "Perception +5, Religion +2, Stealth +3",
		passive_perception: "15",
		languages: "Common, Bullywug",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "Pharblex can breathe air and water."
		}, {
			name: "Poison Strike (3/Day)",
			description: "Once per turn, when Pharblex hits with a melee attack, he can expend a use of this trait to deal an extra 9 (2d8) poison damage.",
		}, {
			name: "Standing Leap",
			description: "As part of his movement and without a running start, Pharblex can long jump up to 20 feet and high jump up to 10 feet."
		}, {
			name: "Swamp Camouflage",
			description: "Pharblex has advantage on Dexterity (Stealth) checks made to hide in swampy terrain."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Pharblex attacks twice. Once with his bite and once with his spear."
		}
		],
		spells: [
			"Pharblex is a 6th-level spellcaster that uses Wisdom as his spellcasting ability (spell save DC 13, +5 to hit with spell attacks). Pharblex has the following spells prepared from the druid spell list:",
			"Cantrips (at will): druidcraft, guidance, poison spray",
			"1st level (4 slots): cure wounds, entangle, healing word, thunderwave",
			"2nd level (3 slots): barkskin, beast sense, spike growth",
			"3rd level (3 slots): plant growth, water walk"
		]
	},
	"Rath Modar": {
		name: "Rath Modar",
		source: ["Hoard of the Dragon Queen", 92],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "lawful evil",
		ac: [13, "", false],
		hp: 71,
		hd: [11, 8],
		speed: "30 ft",
		scores: [11, 16, 14, 18, 14, 10],
		saves: ["", "", "", "7", "5", ""],
		skills: "Arcana +7, Deception +3, Insight +5, Stealth +6",
		passive_perception: "12",
		languages: "Common, Draconic, Infernal, Primordial, Thayan",
		challenge_rating: "6",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Special Equipment",
			description: "Rath has a staff of fire, and scrolls of dimension door, feather fall, and fireball."
		}
		],
		reactions: [{
			name: "Illusory Self (Recharges on a Short or Long Rest)",
			description: "When a creature Rath can see makes an attack roll against him, he can interpose an illusory duplicate between the attacker and him. The attack automatically misses Rath, then the illusion dissipates."
		}
		],
		spells: [
			"Rath is an 11th-level spellcaster who uses Intelligence as his spellcasting ability (spell save DC 15, +7 to hit with spell attacks). Rath has the following spells prepared from the wizard spell list:",
			"Cantrips (at will): fire bolt, minor illusion, prestidigitation, shocking grasp",
			"1st level (4 slots): chromatic orb, color spray, mage armor, magic missile",
			"2nd level (3 slots): detect thoughts, mirror image, phantasmal force",
			"3rd level (3 slots): counterspell, fireball, major image",
			"4th level (3 slots): confusion, greater invisibility",
			"5th level (2 slots): mislead, seeming",
			"6th level (1 slot): globe of invulnerability"
		]
	},
	"Rezmir": {
		name: "Rezmir",
		source: ["Hoard of the Dragon Queen", 93],
		size: "Medium",
		type: "humanoid (half-black dragon)",
		alignment: "neutral evil",
		ac: [13, "", false],
		hp: 90,
		hd: [12, 8],
		speed: "30 ft",
		scores: [18, 16, 16, 15, 12, 14],
		saves: ["", "6", "", "", "4", ""],
		skills: "Arcana +5, Stealth +9",
		damage_immunities: "acid",
		condition_immunities: "charmed, frightened",
		senses: "blindsight 10 ft, darkvision 120 ft",
		passive_perception: "11",
		languages: "Common, Draconic, Infernal, Giant, Netherese",
		challenge_rating: "7",
		attacks: [{
			name: "Greatsword (Hazirawn)",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) necrotic damage. If the target is a creature, it can't regain hit points for 1 minute. The target can make a DC 15 Constitution saving throw at the end of each of its turns, ending this effect early on a success.",
		}, {
			name: "Caustic Bolt",
			ability: 1,
			damage: [4, 8, "acid"],
			range: "Ranged (90 ft)",
			modifiers: [1, "", true],
			description: "Ranged Spell Attack: +8 to hit",
		}
		],
		traits: [{
			name: "Special Equipment",
			description: "Rezmir has the Black Dragon Mask, Hazirawn, and an insignia of claws."
		}, {
			name: "Amphibious",
			description: "Rezmir can breathe air and water."
		}, {
			name: "Dark Advantage",
			description: "Once per turn, Rezmir can deal an extra 10 (3d6) damage when she hits with a weapon attack, provided Rezmir has advantage on the attack roll.",
		}, {
			name: "Draconic Majesty",
			description: "While wearing no armor and wearing the Black Dragon Mask, Rezmir adds her Charisma bonus to her AC (included)."
		}, {
			name: "Immolation",
			description: "When Rezmir is reduced to 0 hit points, her body disintegrates into a pile of ash."
		}, {
			name: "Legendary Resistance (1/Day)",
			description: "If Rezmir fails a saving throw while wearing the Black Dragon Mask, she can choose to succeed instead."
		}
		],
		actions: [{
			name: "Acid Breath (Recharge 5-6)",
			description: "Rezmir breathes acid in a 30-foot line that is 5 feet wide. Each creature in the line must make a DC 14 Dexterity saving throw, taking 22 (5d8) acid damage on a failed save, or half as much damage on a successful one.",
		}
		],
		legendary_actions: [{
			name: "",
			description: "If she is wearing the Black Dragon Mask, Rezmir can take up to two legendary actions between each of her turns, taking the actions all at once or spreading them over the round. A legendary action can be taken only at the start or end of a turn."
		}, {
			name: "Darkness (Costs 2 Actions)",
			description: "A 15-foot radius of magical darkness extends from a point Rezmir can see within 60 feet of her and spreads around corners. The darkness lasts as long as Rezmir maintains concentration, up to 1 minute. A creature with darkvision can't see through this darkness, and no natural light can illuminate it. If any of the area overlaps with a area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled."
			
		}, {
			name: "Attack",
			description: "Rezmir makes one melee attack."
		}, {
			name: "Hide",
			description: "Rezmir takes the Hide action."
		}
		]
	},
	"Severin": {
		name: "Severin",
		source: ["Rise of Tiamat", 92],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [16, "", false],
		hp: 150,
		hd: [20, 84],
		speed: "30 ft",
		scores: [10, 13, 16, 17, 12, 20],
		saves: ["", "5", "", "", "5", ""],
		skills: "Arcana +7, Religion +7",
		damage_resistances: "While wearing the mask of the Dragon Queen: acid, cold, lightning, poison; bludgeoning, piercing, and slashing damage from nonmagical weapons",
		damage_immunities: "While wearing the mask of the Dragon Queen: fire",
		condition_immunities: "While wearing the mask of the Dragon Queen: charmed, frightened, poisoned",
		senses: "While wearing the Mask of the Dragon Queen: darkvision 60 ft",
		passive_perception: "11",
		languages: "Common, Draconic, Infernal",
		challenge_rating: "11",
		attacks: [{
			name: "Burning Touch",
			ability: 5,
			damage: [4, 8, "fire"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Flaming Orb",
			ability: 5,
			damage: [9, 8, "fire"],
			range: "Melee (90 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Special Equipment",
			description: "Severin has the Mask of the Dragon Queen."
		}, {
			name: "Draconic Majesty",
			description: "Severin adds his Charisma bonus to his AC (included)."
		}, {
			name: "Ignite Enemy",
			description: "If Severin deals fire damage to a creature while wearing the Mask of the Dragon Queen, the target catches fire. At the start of each of its turns, the burning target takes 5 (1d10) fire damage. A creature within reach of the fire can use an action to extinguish it.",
		}, {
			name: "Legendary Resistance (5/Day)",
			description: "While wearing the Mask of the Dragon Queen, if Severin fails a saving throw, he can choose to succeed instead."
		}
		],
		actions: [{
			name: "Scorching Burst",
			description: "Severin chooses a point he can see within 60 feet of him. Each creature within 5 feet of that point must make a DC 17 Dexterity saving throw, taking 18 (4d8) fire damage on a failed save, or half as much damage on a successful one.",
		}
		],
		legendary_actions: [{
			name: "",
			description: "If Severin is wearing the Mask of the Dragon Queen, he can take 3 legendary actions, choosing from the options listed. Only one legendary action option can be used at a time and only at the end of another creature's turn. Severin regains spent legendary actions at the start of his turn.",
		}, {
			name: "Attack",
			description: "Severin makes one attack.",
		}, {
			name: "Fiery Teleport (Costs 2 Actions)",
			description: "Severin, along with any objects he is wearing or carrying, teleports up to 60 feet to an unoccupied space he can see. Each creature within 5 feet of Severin before he teleports takes 5 (1d10) fire damage.",
		}, {
			name: "Hellish Chains (Costs 3 Actions)",
			description: "Severin targets one creature he can see within 30 feet of him. The target is wrapped in magical chains of fire and restrained. The restrained target takes 21 (6d6) fire damage at the start of each of its turns. At the end of its turns, the target can make a DC 17 Strength saving throw, ending the effect on itself on a success.",
		}
		]
	},
	"Talis the White": {
		name: "Talis the White",
		source: ["Hoard of the Dragon Queen", 93],
		size: "Medium",
		type: "humanoid (half-elf)",
		alignment: "lawful evil",
		ac: [18, "Scale Mail +1", true],
		hp: 58,
		hd: [9, 8],
		speed: "30 ft",
		scores: [14, 12, 14, 10, 16, 16],
		saves: ["", "", "", "", "6", "6"],
		skills: "Deception +6, Insight +6, Perception +6, Persuasion +6",
		senses: "darkvision 60 ft",
		passive_perception: "16",
		languages: "Common, Draconic, Elvish, Infernal",
		challenge_rating: "5",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Special Equipment",
			description: "Talis has +1 scale mail and a wand of winter."
		}, {
			name: "Fey Ancestry",
			description: "Talis has advantage on saving throws against being charmed, and magic can't put her to sleep."
		}, {
			name: "Winter Strike (3/Day)",
			description: "Once per turn, when Talis hits with a melee attack, she can expend a use of this trait to deal an extra 9 (2d8) cold damage.",
		}
		],
		spells: [
			"Talis is a 9th-level spellcaster that uses Wisdom as her spellcasting ability (spell save DC 14, +6 to hit with spell attacks). Talis has the following spells prepared from the cleric spell list:",
			"Cantrips (at will): guidance, resistance, thaumaturgy",
			"1st level (4 slots): command, cure wounds, healing word, inflict wounds",
			"2nd level (3 slots): blindness/deafness, lesser restoration, spiritual weapon (spear) ",
			"3rd level (3 slots): dispel magic, mass healing word, sending",
			"4th level (3 slots): death ward, freedom of movement",
			"5th level (1 slot): insect plague"
		]
	},
	"Thurl Merosska": {
		name: "Thurl Merosska",
		source: ["Tyranny of Dragons", 0],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "lawful evil",
		ac: [16, "", false],
		hp: 71,
		hd: [11, 8],
		speed: "30 ft",
		scores: [16, 14, 14, 11, 10, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Animal Handling +2, Athletics +5, Deception +4, Persuasion +4",
		passive_perception: "10",
		languages: "Auran, Common",
		challenge_rating: "3",
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
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Thurl makes two melee attacks."
		}
		],
		reactions: [{
			name: "Parry",
			description: "Thurl adds 2 to his AC against one melee attack that would hit him. To do so, Thurl must see the attacker and be wielding a melee weapon."
		}
		],
		spells: [
			"Thurl is a 5th-level spellcaster. His spellcasting ability is Charisma (spell save DC 12,+4 to hit with spell attacks). Thurl knows the following sorcerer spells:",
			"Cantrips (at will): friends, gust, light, message, ray of frost",
			"1st level (4 slots): expeditious retreat, feather fall, jump",
			"2nd level (3 slots): levitate, misty step",
			"3rd level (2 slots): haste "
		]
	},
	"Tiamat": {
		name: "Tiamat",
		source: ["Rise of Tiamat", 92],
		size: "Giant",
		type: "fiend",
		alignment: "chaotic evil",
		ac: [25, "Natural Armor", false],
		hp: 615,
		hd: [30, 20],
		speed: "60 ft, fly 120 ft",
		scores: [30, 10, 30, 26, 26, 28],
		saves: ["19", "9", "", "", "17", ""],
		skills: "Arcana +17, Perception +26, Religion +17",
		damage_immunities: "acid, cold, fire, lightning, poison; bludgeoning, piercing, and slashing damage from nonmagical weapons",
		condition_immunities: "blinded, charmed, deafened, frightened, poisoned, stunned",
		senses: "darkvision 240 ft, truesight 120 ft",
		passive_perception: "36",
		languages: "Common, Draconic, Infernal",
		challenge_rating: "30",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [4, 6, "slashing"],
			range: "Melee (15 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [4, 8, "piercing"],
			range: "Melee (25 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Discorporation",
			description: "When Tiamat drops to 0 hit points or dies, her body is destroyed but her essence travels back to her domain in the Nine Hells, and she is unable to take physical form for a time."
		}, {
			name: "Innate Spellcasting (3/Day)",
			description: "Tiamat can innately cast divine word (spell save DC 26). Her spellcasting ability is Charisma."
		}, {
			name: "Legendary Resistance (5/Day)",
			description: "If Tiamat fails a saving throw, she can choose to succeed instead."
		}, {
			name: "Limited Magic Immunity",
			description: "Unless she wishes to be affected, Tiamat is immune to spells of 6th level or lower. She has advantage on saving throws against all other spells and magical effects."
		}, {
			name: "Magic Weapons",
			description: "Tiamat's weapon attacks are magical."
		}, {
			name: "Multiple Heads",
			description: "Tiamat can take one reaction per turn, rather than only one per round. She also has advantage on saving throws against being knocked unconscious. If she fails a saving throw against an effect that would stun a creature, one of her unspent legendary actions is spent."
		}, {
			name: "Regeneration",
			description: "Tiamat regains 30 hit points at the start of her turn."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Tiamat can use her Frightful Presence. She then makes three attacks: two with her claws and one with her tail."
		}, {
			name: "Frightful Presence",
			description: "Each creature of Tiamat's choice that is within 240 feet of Tiamat and aware of her must succeed on a DC 26 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to Tiamat's Frightful Presence for the next 24 hours."
		}
		],
		legendary_actions: [{
			name: "",
			description: [
				"Tiamat can take 5 legendary actions, choosing from the options listed. Only one legendary action option can be used at a time and only at the end of another creature's turn. Tiamat regains spent legendary actions at the start of her turn.",
				"Tiamat's legendary action options are associated with her five dragon heads (a bite and a breath weapon for each). Once Tiamat chooses a legendary action option for one of her heads, she can't choose another one associated with that head until the start of her next turn."
      ]
		}, {
			name: "Bite",
			description: "Melee Weapon Attack: +19 to hit, reach 20 ft, one target. Hit: 32 (4d10+10) slashing damage plus 14 (4d6) acid damage (black dragon head), lightning damage (blue dragon head), poison damage (green dragon head), fire damage (red dragon head), or cold damage (white dragon head).",
		}, {
			name: "Black Dragon Head: Acid Breath (Costs 2 Actions)",
			description: "Tiamat breathes acid in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 27 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Blue Dragon Head: Lightning Breath (Costs 2 Actions)",
			description: "Tiamat breathes lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 27 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Green Dragon Head: Poison Breath (Costs 2 Actions)",
			description: "Tiamat breathes poisonous gas in a 90-foot cone. Each creature in that area must make a DC 27 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Red Dragon Head: Fire Breath (Costs 2 Actions)",
			description: "Tiamat breathes fire in a 90-foot cone. Each creature in that area must make a DC 27 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "White Dragon Head: Cold Breath (Costs 2 Actions)",
			description: "Tiamat breathes an icy blast in a 90-foot cone. Each creature in that area must make a DC 27 Dexterity saving throw, taking 72 (16d8) cold damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
};
