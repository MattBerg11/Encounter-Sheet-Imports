var RoD = {
	// 35
	"Awakened Zurkhwood": {
		name: "Awakened Zurkhwood",
		source: ["Out of the Abyss", 230],
		size: "Huge",
		type: "plant",
		alignment: "unaligned",
		ac: [13, "Natural Armor", false],
		hp: 59,
		hd: [7, 12],
		speed: "20 ft",
		scores: [19, 6, 15, 10, 10, 7],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing",
		damage_vulnerabilities: "fire",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "one language known by its creator",
		challenge_rating: "2",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the tree remains motionless, it is indistinguishable from a normal zurkhwood mushroom."
		}, {
			name: "Mute",
			description: "If the awakened zurkhwood was created by a myconid sovereign, it can't speak."
		}
		],
	},
	"Baphomet": {
		name: "Baphomet",
		source: ["Out of the Abyss", 235],
		size: "Huge",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [22, "Natural Armor", false],
		hp: 333,
		hd: [23, 12],
		speed: "40 ft",
		scores: [30, 14, 26, 18, 24, 16],
		saves: ["", "9", "15", "", "14", ""],
		skills: "Intimidation +17, Perception +14",
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison; bludgeoning, piercing, and slashing that is nonmagical",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "24",
		languages: "all, telepathy 120 ft",
		challenge_rating: "23",
		attacks: [{
			name: "Heartcleaver",
			ability: 1,
			damage: [4, 6, "slashing"],
			range: "Melee (15 ft)",
			description: "",
		}, {
			name: "Bite",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Gore",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If Baphomet moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 22 (4d10) piercing damage. If the target is a creature, it must succeed on a DC 25 Strength saving throw or be pushed up to 10 feet away and knocked prone.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"Baphomet's spellcasting ability is Charisma (spell save DC 18). He can innately cast the following spells, requiring no material components:",
				"At will: detect magic",
				"3/day each: dispel magic, dominate beast, hunter's mark, maze, wall of stone",
				"1/day each: teleport"
			]
		}, {
			name: "Labyrinthine Recall",
			description: "Baphomet can perfectly recall any path he has traveled, and he is immune to the maze spell."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Baphomet fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Baphomet has advantage on saving throws against spell and other magic effects."
		}, {
			name: "Magic Weapon",
			description: "Baphomet's weapon attacks are magical"
		}, {
			name: "Reckless",
			description: "At the start of his turn, Baphomet can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against him have advantage until the start of his next turn."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Baphomet makes three attacks: one with Heartcleaver, one with his bite, and one with his gore attack."
		}, {
			name: "Frightful Presence",
			description: "Each creature of Baphomet's choice within 120 feet of him and aware of him must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. These later saves have disadvantage if Baphomet is within line of sight of the creature. If a creature succeeds on any of these saves or the effect ends on it, the creature is immune is Baphomet's Frightful Presence for the next 24 hours."
		}
		],
		legendary_actions: [{
			name: "",
			description: "Baphomet can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Baphomet regains spent legendary actions at the start of his turn."
		}, {
			name: "Heartcleaver attack",
			description: "Baphomet makes a melee attack with Heartcleaver.",
		}, {
			name: "Charge (Costs 2 actions)",
			description: "Baphomet moves up to his speed, then makes a gore attack.",
		}
		],
	},
	"Bridesmaid of Zuggtmoy": {
		name: "Bridesmaid of Zuggtmoy",
		source: ["Out of the Abyss", 230],
		size: "Medium",
		type: "plant",
		alignment: "chaotic evil",
		ac: [13, "Natural Armor", false],
		hp: 22,
		hd: [5, 8],
		speed: "20 ft",
		scores: [14, 11, 11, 14, 8, 18],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: "9",
		languages: "understands Abyssal but can't speak",
		challenge_rating: "1/8",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Fungus Stride",
			description: "Once on its turn, the bridesmaid can use 10 feet of its movement to step magically into one living mushroom or fungus patch within 5 feet and emerge from another within 60 feet of the first one, appearing in an unoccupied space within 5 feet of the second mushroom or fungus patch. The mushrooms and patches must be large or bigger."
		}
		],
		actions: [{
			name: "Hallucination Spores",
			description: "The bridesmaid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target is incapacitated. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "Infestation Spores (1/Day)",
			description: "The bridesmaid releases spores that burst out in a cloud that fills a 10-foot-radius sphere centered on it, and the cloud lingers for 1 minute. Any flesh-and-blood creature in the cloud when it appears, or that enters it later, must make a DC 10 Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the spores of Zuggtmoy and also gains a random form of indefinite madness (determined by rolling on the Madness of Zuggtmoy table in appendix D) that lasts until the creature is cured of the disease or dies. While infected in this way, the creature can't be reinfected, and it must be repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature's body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a spore servant if it's a type of creature that can be (see the \"Myconids\" entry in the Monster Manual)."
		}
		]
	},
	"Chamberlain of Zuggtmoy": {
		name: "Chamberlain of Zuggtmoy",
		source: ["Out of the Abyss", 230],
		size: "Large",
		type: "plant",
		alignment: "chaotic evil",
		ac: [13, "Natural Armor", false],
		hp: 45,
		hd: [6, 10],
		speed: "20 ft",
		scores: [17, 7, 14, 11, 8, 12],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing",
		senses: "darkvision 60 ft",
		passive_perception: "9",
		languages: "Abywssal, Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Mushroom Portal",
			description: "The chamberlain counts as a mushroom for the Fungus Stride feature of the bridesmaid of Zuggtmoy."
		}, {
			name: "Poison Spores",
			description: "Whenever the chamberlain takes damage, it releases a cloud of spores. Creatures within 5 feet of the chamberlain when this happens must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."
		}
		],
		actions: [{
			name: "Hallucination Spores",
			description: "The bridesmaid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target is incapacitated. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "Multiattack",
			description: "The chamberlain makes two slam attacks."
		}, {
			name: "Infestation Spores (1/Day)",
			description: "The chanberlain releases spores that burst out in a cloud that fills a 10-foot-radius sphere centered on it, and the cloud lingers for 1 minute. Any flesh-and-blood creature in the cloud when it appears, or that enters it later, must make a DC 12 Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the spores of Zuggtmoy and also gains a random form of indefinite madness (determined by rolling on the Madness of Zuggtmoy table in appendix D) that lasts until the creature is cured of the disease or dies. While infected in this way, the creature can't be reinfected, and it must be repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature's body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a spore servant if it's a type of creature that can be (see the \"Myconids\" entry in the Monster Manual)."
		}
		]
	},
	"Chuul Spore Servant": {
		name: "Chuul Spore Servant",
		source: ["Out of the Abyss", 228],
		size: "Large",
		type: "plant",
		alignment: "unaligned",
		ac: [16, "Natural Armor", false],
		hp: 93,
		hd: [11, 10],
		speed: "30 ft, swim 30 ft",
		scores: [19, 10, 16, 2, 6, 1],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "blinded, charmed, frightened, paralyzed, poisoned",
		senses: "blindsight 30 ft (blind beyond this radius)",
		passive_perception: "8",
		languages: "",
		challenge_rating: "4",
		attacks: [{
			name: "Pincer",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "The target is grappled (Escape DC 14) if it is a Large or smaller creature and the spore servant doesn't have two other creatures grappled.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The spore servant makes two pincer attacks."
		},
		]
	},
	"Demogorgon": {
		name: "Demogorgon",
		source: ["Out of the Abyss", 236],
		size: "Huge",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [22, "Natural Armor", false],
		hp: 496,
		hd: [34, 12],
		speed: "50 ft, swim 50 ft",
		scores: [29, 14, 26, 20, 17, 25],
		saves: ["", "10", "16", "", "11", "15"],
		skills: "Insight +11, Perception +19",
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison; bludgeoning, piercing, and slashing that is nonmagical",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "21",
		languages: "all, telepathy 120 ft",
		challenge_rating: "26",
		attacks: [{
			name: "Tentacle",
			ability: 1,
			damage: [4, 12, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "If the target is a creature, it must succeed on a DC 23 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.",
		}, {
			name: "Tail (Legendary Action)",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "Plus 22 (4d10) necrotic damage.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"Demogorgon's spellcasting ability is Charisma (spell save DC 23). Demogorgon can innately cast the following spells, requiring no material components:",
				"At will: detect magic, major image",
				"3/day each: dispel magic, fear, telekinesis",
				"1/day each: feeblemind, project image"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Demogorgon fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Demogorgon has advantage on saving throws against spell and other magic effects."
		}, {
			name: "Magic Weapon",
			description: "Demogorgon's weapon attacks are magical"
		}, {
			name: "Two Heads",
			description: "Demogorgon has advantage on saving throws against being blinded, defened, stunned, and knocked unconscious."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Demogorgon makes two tentacle attacks."
		}, {
			name: "Gaze",
			description: [
				"Demogorgon turns his magical gaze toward one creature that he can see within 120 feet of him. That target must make a DC 23 Wisdom saving throw. Unless the target is incapacitated, it can avert its eyes to avoid the gaze and to automatically succeed on the save. If the target does so, it can't see Demogorgon until the start of his next turn. If the target looks at him in the meantime, it must immediately make the save.",
				"If the target fails the save, the target suffers one of the following effects of Demogorgon's choice or at random:",
				"1. Beguiling Gaze. The target is stunned until the start of Demogorgon's next turn or until Demogorgon is no longer within line of sight.",
				"2. Hypnotic Gaze. The target is charmed by Demogorgon until the start of Demogorgon's next turn. Demogorgon chooses how the charmed target uses its actions, reactions, and movement. Because this gaze requires Demogorgon to focus both heads on the target, he can't use his Maddening Gaze legendary action until the start of his next turn.",
				"3. Insanity Gaze. The target suffers the effect of the confusion spell without making a saving throw. The effect lasts until the start of Demogorgon's next turn. Demogorgon doesn't need to concentrate on the spell."
			]
		}
		],
		legendary_actions: [{
			name: "",
			description: "Demogorgon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creautre's turn. Demogorgon regains spent legendary actions at the start of his turn."
		}, {
			name: "Maddening Gaze",
			description: "Demogorgon uses his Gaze action, and must choose either the Beguiling Gaze or the Insanity Gaze effect."
		}
		],
	},
	"Derro": {
		name: "Derro",
		source: ["Out of the Abyss", 224],
		size: "Small",
		type: "humanoid (derro)",
		alignment: "chaotic evil",
		ac: [13, "Leather Armor", false],
		hp: 13,
		hd: [3, 6],
		speed: "30 ft",
		scores: [9, 14, 12, 11, 5, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +4",
		senses: "darkvision 120 ft",
		passive_perception: "7",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "1/4",
		attacks: [{
			name: "Hooked Shortspear",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, the derro can choose to deal no damage and try to trip the target instead, in which case the target must succeed on a DC 9 Strength saving throw or fall prone.",
		}, {
			name: "Light Repeating Crossbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (40/160 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Insanity",
			description: "The derro has advantage on saving throws against being charmed or frightened."
		}, {
			name: "Magic Resistance",
			description: "The derro has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the derro has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
	},
	"Derro Savant": {
		name: "Derro Savant",
		source: ["Out of the Abyss", 225],
		size: "Small",
		type: "humanoid (derro)",
		alignment: "chaotic evil",
		ac: [13, "Leather Armor", false],
		hp: 49,
		hd: [11, 6],
		speed: "30 ft",
		scores: [9, 14, 12, 11, 5, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +4",
		senses: "darkvision 120 ft",
		passive_perception: "7",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "3",
		attacks: [{
			name: "Hooked Shortspear",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, the derro can choose to deal no damage and try to trip the target instead, in which case the target must succeed on a DC 9 Strength saving throw or fall prone.",
		}, {
			name: "Light Repeating Crossbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (40/160 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Insanity",
			description: "The derro has advantage on saving throws against being charmed or frightened."
		}, {
			name: "Magic Resistance",
			description: "The derro has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the derro has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		spells: [
			"The derro is a 5th-level spellcaster. It's spellcasting ability is Charisma (save DC 12, +4 to hit with spell attacks). The derro knows the following sorcerer spells:",
			"Cantrips (at will): acid splash, light, mage hand, message, ray of frost",
			"1st level (4 slots): burning hands, chromatic orb, sleep",
			"2nd level (3 slots): invisibility, spider climb",
			"3rd level (2 slots): blink, lightning bolt"
		]
	},
	"Droki": {
		name: "Droki",
		source: ["Out of the Abyss", 231],
		size: "Small",
		type: "humanoid (derro)",
		alignment: "chaotic evil",
		ac: [15, "Studded Leather", false],
		hp: 31,
		hd: [7, 6],
		speed: "30 ft (60 ft with boots of speed)",
		scores: [11, 16, 13, 10, 5, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +5",
		senses: "darkvision 120 ft",
		passive_perception: "7",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "The sword is coated with serpent venom that wears off after the first hit. A target subjected to the venom must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
		traits: [{
			name: "Special Equipment",
			description: "Droki wears boots of speed"
		}, {
			name: "Insanity",
			description: "Droki has advantage on saving throws against being charmed or frightened."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Droki's innate spellcasting ability is Charisma (spell save DC 13). He can innately cast the following spells, requiring no material components:",
				"", "At will: minor illusion",
				"1/day each: darkness, fear, shatter"
			]
		}, {
			name: "Sneak Attack (1/Turn)",
			description: "Droki deals an extra 7 (2d6) damage when he hits a target with a weapon attack and has advantage ont he attack roll, or when the target is within 5 feet of an ally of Droki that isn't incapacitated and Droki doesn't have disadvantage on the attack roll.",
		}, {
			name: "Magic Resistance",
			description: "The derro has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the derro has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Droki makes two attacks with his shortsword"
		}
		],
		reactions: [{
			name: "Parry",
			description: "Droki adds 3 to his AC against one melee attack that would hit him. To do so, Droki must see the attacker and be wielding a melee weapon."
		}
		],
	},
	"Drow Spore Servant": {
		name: "Drow Spore Servant",
		source: ["Out of the Abyss", 229],
		size: "Medium",
		type: "plant",
		alignment: "unaligned",
		ac: [15, "Chain Shirt", false],
		hp: 13,
		hd: [3, 8],
		speed: "20 ft",
		scores: [10, 14, 10, 2, 6, 1],
		saves: ["", "", "", "", "", ""],
		condition_immunities: "blinded, charmed, frightened, paralyzed",
		senses: "blindsight 30 ft (blind beyond this radius)",
		passive_perception: "8",
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Duergar Spore Servant": {
		name: "Duergar Spore Servant",
		source: ["Out of the Abyss", 229],
		size: "Medium",
		type: "plant",
		alignment: "unaligned",
		ac: [16, "Scale Armor", true],
		hp: 26,
		hd: [4, 8],
		speed: "15 ft",
		scores: [14, 11, 14, 2, 6, 1],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "poison",
		condition_immunities: "blinded, charmed, frightened, paralyzed",
		senses: "blindsight 30 ft (blind beyond this radius)",
		passive_perception: "8",
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "War Pick",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Duergar Darkhaft": {
		name: "Duergar Darkhaft",
		source: ["Out of the Abyss", 226],
		size: "Medium",
		type: "humanoid (dwarf)",
		alignment: "lawful evil",
		ac: [16, "Scale Mail", true],
		hp: 26,
		hd: [4, 8],
		speed: "25 ft",
		scores: [14, 11, 14, 11, 10, 9],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "poison",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "War Pick",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Or 11 (2d8+2) piercing damage while enlarged.",
		}, {
			name: "Javelin (Melee)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Or 9 (2d6+2) piercing damage while enlarged.",
		}, {
			name: "Javelin (Ranged)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "Or 9 (2d6+2) piercing damage while enlarged.",
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The darkhaft's innate spellcasting ability is Intelligence (spell save DC 10) it can innately cast the following spells, requiring no components:",
				"At will: friends, mage hand",
				"1/day each: disguise self, sleep"
			]
		}, {
			name: "Duergar Resilience",
			description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Enlarge (Recharges after a Short or Long Rest)",
			description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
		}, {
			name: "Invisibility (Recharges after a Short or Long Rest)",
			description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it ."
		}
		],
	},
	"Duergar Kavalrachni": {
		name: "Duergar Kavalrachni",
		source: ["Out of the Abyss", 226],
		size: "Medium",
		type: "humanoid (dwarf)",
		alignment: "lawful evil",
		ac: [16, "Scale Mail", true],
		hp: 26,
		hd: [4, 8],
		speed: "25 ft",
		scores: [14, 11, 14, 11, 10, 9],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "poison",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "War Pick",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Or 11 (2d8+2) piercing damage while enlarged.",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Or 9 (2d6+2) piercing damage while enlarged.",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "Or 9 (2d6+2) piercing damage while enlarged.",
		}, {
			name: "Heavy Crossbow",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Ranged (100/400 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Mounted",
			description: "The vicious kavalrachni are the duergar cavalry of Gracklstugh, riding giant tarantualas known as steeders (see the female steeder stat block)"
		}, {
			name: "Cavalry Training",
			description: "When the duergar hits a target with a melee attack while mounted on a female steeder, the steeder can make a melee attack agains the same target as a reaction."
		}, {
			name: "Duergar Resilience",
			description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Enlarge (Recharges after a Short or Long Rest)",
			description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
		}, {
			name: "Invisibility (Recharges after a Short or Long Rest)",
			description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it ."
		}
		]
	},
	"Duergar Keeper of the Flame": {
		name: "Duergar Keeper of the Flame",
		source: ["Out of the Abyss", 226],
		size: "Medium",
		type: "humanoid (dwarf)",
		alignment: "lawful evil",
		ac: [16, "Scale Mail", true],
		hp: 26,
		hd: [4, 8],
		speed: "25 ft",
		scores: [14, 11, 14, 11, 10, 9],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "poison",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "War Pick",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Or 11 (2d8+2) piercing damage while enlarged.",
		}, {
			name: "Javelin (Melee)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Or 9 (2d6+2) piercing damage while enlarged.",
		}, {
			name: "Javelin (Ranged)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "Or 9 (2d6+2) piercing damage while enlarged.",
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The Keeper of the Flame's innate spellcasting ability is Wisdom (spell save DC 12.) It can innately cast the following spells, requiring no components:",
				"At will: friends, message",
				"1/day: command"
			]
		}, {
			name: "Duergar Resilience",
			description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Enlarge (Recharges after a Short or Long Rest)",
			description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
		}, {
			name: "Invisibility (Recharges after a Short or Long Rest)",
			description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it ."
		}
		],
		spells: [
			"The Keeper of the Flame is a 3rd-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The Keeper of the Flame has the following cleric spells prepared:",
			"Cantrips (at will): guidance, mending, sacred flame",
			"1st level (4 slots): bane, inflict wounds, shield of faith",
			"2nd level (2 slots): enhance ability, spiritual weapon"
		]
	},
	"Duergar Soulblade": {
		name: "Duergar Soulblade",
		source: ["Out of the Abyss", 227],
		size: "Medium",
		type: "humanoid (dwarf)",
		alignment: "lawful evil",
		ac: [14, "", false],
		hp: 18,
		hd: [4, 8],
		speed: "25 ft",
		scores: [11, 16, 10, 11, 10, 12],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "poison",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "1",
		attacks: [{
			name: "Soulblade",
			ability: 2,
			damage: [1, 6, "force"],
			range: "Melee (5 ft)",
			description: "Or 10 (2d6+3) force damage while enlarged. If the soulblade has advantage on the attack roll, the attack deals an extra 3 (1d6) force damage.",
		}
		],
		traits: [{
			name: "Duergar Resilience",
			description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The duergar's innate spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It can innately cast the following spells, requiring no components:",
				"At will: blade ward, true strike",
				"1/day each: jump, hunter's mark"
			]
		}
		],
		actions: [{
			name: "Enlarge (Recharges after a Short or Long Rest)",
			description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
		}, {
			name: "Create Soulblade",
			description: "The duergar creates a visible, shortword-sized blade of psionic energy. The weapon appears int he duergar's hand and vanishes if it leaves the duergar's grip, or if the duergar dies or is incapacitated."
		}, {
			name: "Invisibility (Recharges after a Short or Long Rest)",
			description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it ."
		}
		],
	},
	"Duergar Stone Guard": {
		name: "Duergar Stone Guard",
		source: ["Out of the Abyss", 227],
		size: "Medium",
		type: "humanoid (dwarf)",
		alignment: "lawful evil",
		ac: [18, "Chain Mail", true],
		hp: 39,
		hd: [6, 8],
		speed: "25 ft",
		scores: [18, 11, 14, 11, 10, 9],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "poison",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "War Pick",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Or 11 (2d8+2) piercing damage while enlarged.",
		}, {
			name: "Javelin (Melee)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Or 9 (2d6+2) piercing damage while enlarged.",
		}, {
			name: "Javelin (Ranged)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "Or 9 (2d6+2) piercing damage while enlarged.",
		}
		],
		traits: [{
			name: "Duergar Resilience",
			description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Enlarge (Recharges after a Short or Long Rest)",
			description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
		}, {
			name: "Invisibility (Recharges after a Short or Long Rest)",
			description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it ."
		}
		]
	},
	"Duergar Xarron": {
		name: "Duergar Xarron",
		source: ["Out of the Abyss", 227],
		size: "Medium",
		type: "humanoid (dwarf)",
		alignment: "lawful evil",
		ac: [18, "Platemail", false],
		hp: 26,
		hd: [4, 8],
		speed: "25 ft",
		scores: [16, 11, 14, 11, 10, 9],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "poison",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "Fire Lance",
			ability: 1,
			damage: [1, 12, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 3 (1d6) fire damage. If enlarged, 16 (2d12+3). Hit has disadvantage if the target is within 5 feet of the duergar",
		}
		],
		traits: [{
			name: "Duergar Resilience",
			description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Enlarge (Recharges after a Short or Long Rest)",
			description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
		}, {
			name: "Fire Spray (Recharge 5-6)",
			description: "From its fire lance, the duergar shoots a 15-foot cone of fire or a line of fire 30 feet long and 5 feet wide. Each creature in that area must make a DC 12 Dexterity saving throw, taking 10 (3d6) fire damage on a failed save, or half as much damage on a successful one."
		}, {
			name: "Invisibility (Recharges after a Short or Long Rest)",
			description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it ."
		}
		]
	},
	"Fraz-Urb'luu": {
		name: "Fraz-Urb'luu",
		source: ["Out of the Abyss", 238],
		size: "Large",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [18, "Natural Armor", false],
		hp: 350,
		hd: [28, 10],
		speed: "40 ft, fly 40 ft",
		scores: [29, 12, 25, 26, 24, 26],
		saves: ["", "8", "15", "15", "14", ""],
		skills: "Deception +15, Perception +14, Stealth +8",
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison; bludgeoning, piercing, and slashing that is nonmagical",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "24",
		languages: "all, telepathy 120 ft",
		challenge_rating: "23",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Fist",
			ability: 1,
			damage: [4, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail (Legendary Action)",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "If the target is a Large or smaller creature, it is also grappled (escape DC 24). The grappled target is also restrained. Fraz-Urb'luu can grapple only one creature with his tail at a time.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"Fraz-Urb'luu's spellcasting ability is Charisma (spell save DC 23). Fraz-Urb'luu can innately cast the following spells, requiring no material components:",
				"At will: alter self (can become Medium-sized when changing his appearance), detect magic, dispel magic, phantasamal force",
				"3/day each: confusion, dream, mislead, programmed illusion, seeming",
				"1/day each: mirage arcane, modify memory, project image"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Fraz-Urb'luu fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Fraz-Urb'luu has advantage on saving throws against spell and other magic effects."
		}, {
			name: "Magic Weapon",
			description: "Fraz-Urb'luu's weapon attacks are magical."
		}, {
			name: "Undetectable",
			description: "Fraz-Urb'luu can't be targeted by divination magic, perceived through magical scrying sensors, or detected by abilities that sense demons or fiends."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Fraz-Urb'luu makes three attacks: one with his bite and two with his fists."
		}
		],
		legendary_actions: [{
			name: "",
			description: "Fraz-Urb'luu can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creautre's turn. Fraz-Urb'luu regains spent legendary actions at the start of his turn."
		}, {
			name: "Phantasmal Killer (Costs 2 Actions)",
			description: "Fraz-Urb'luu casts phantasmal killer, no concentration required."
		}
		],
	},
	"Graz'zt": {
		name: "Graz'zt",
		source: ["Out of the Abyss", 241],
		size: "Large",
		type: "fiend (demon, shapechanger)",
		alignment: "chaotic evil",
		ac: [20, "Natural Armor", false],
		hp: 378,
		hd: [36, 10],
		speed: "40 ft",
		scores: [22, 15, 21, 23, 21, 26],
		saves: ["", "9", "12", "", "12", ""],
		skills: "Deception +15, Insight +12, Perception +12, Persuasion +15",
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison; bludgeoning, piercing, and slashing that is nonmagical",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "22",
		languages: "all, telepathy 120 ft",
		challenge_rating: "24",
		attacks: [{
			name: "Wave of Sorrow (Greatsword)",
			ability: 1,
			damage: [4, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "Plus 14 (4d6) acid damage.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "Graz'zt can use his action to polymorph into a form that resembles a Medium humanoid, or back into his true form. Aside from his size, his statistics are the same in each form, Any equipment he is wearing or carrying isn't transformed."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Graz'zt's spellcasting ability is Charisma (spell save DC 23). Graz'zt can innately cast the following spells, requiring no material components:",
				"", "At will: charm person, crown of madness, detect magic, dispel magic, dissonant whispers",
				"3/day each: counterspell, darkness, dominate person, sanctuary, telekinesis, teleport",
				"1/day each: dominate monster, greater invisibility"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Graz'zt fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Graz'zt has advantage on saving throws against spell and other magic effects."
		}, {
			name: "Magic Weapon",
			description: "Graz'zt's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Graz'zt attacks twice with the Wave of Sorrow."
		}, {
			name: "Teleport",
			description: "Graz'zt magically teleports, along with any equipment he is wearing or carrying, up to 120 feet to an unoccupied space he can see."
		}
		],
		legendary_actions: [{
			name: "",
			description: "Graz'zt can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creautre's turn. Graz'zt regains spent legendary actions at the start of his turn."
		}, {
			name: "Attack",
			description: "Graz'zt attacks once with the Wave of Sorrow."
		}, {
			name: "Dance, My Puppet!",
			description: "One creature charmed by Graz'zt that Graz'zt can see must use its reaction to move up to its speed as Graz'zt directs."
		}, {
			name: "Sow Discord",
			description: "Graz'zt casts crown of madness or dissonant whispers."
		}, {
			name: "Teleport",
			description: "Graz'zt uses his Teleport action."
		}
		],
	},
	"Grisha": {
		name: "Grisha",
		source: ["Out of the Abyss", 232],
		size: "Medium",
		type: "humanoid (Damaran human)",
		alignment: "chaotic evil",
		ac: [18, "Chain Mail", true],
		hp: 33,
		hd: [6, 8],
		speed: "30 ft",
		scores: [14, 12, 12, 11, 14, 16],
		saves: ["", "", "", "", "4", "5"],
		skills: "Persuasion +5, Religion +2",
		passive_perception: "12",
		languages: "Common, Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "+1 Flail",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Grisha makes two attacks with his +1 flail."
		}
		],
		spells: [
			"Grisha is a 6th-level-spellcaster. His spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). He has the following cleric spells prepared:",
			"Cantrips (at will): guidance, light, sacred flame, thaumaturgy",
			"1st level (4 slots): cure wounds, divine favor, inflict wounds, protection from good, shield of faith",
			"2nd level (3 slots): continual flame, hold person, magic weapon, spiritual weapon",
			"3rd level (3 slots): bestow curse, dispel magic, spirit guardian"
		]
	},
	"Hook Horror Spore Servant": {
		name: "Hook Horror Spore Servant",
		source: ["Out of the Abyss", 229],
		size: "Medium",
		type: "plant",
		alignment: "unaligned",
		ac: [15, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "20 ft, climb 20 ft",
		scores: [18, 10, 15, 2, 6, 1],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "poison",
		condition_immunities: "blinded, charmed, frightened, paralyzed",
		senses: "blindsight 30 ft (blind beyond this radius)",
		passive_perception: "8",
		languages: "",
		challenge_rating: "3",
		attacks: [{
			name: "Hook",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The spore servant makes two hyook attacks."
		},
		]
	},
	"Ixitxachitl": {
		name: "Ixitxachitl",
		source: ["Out of the Abyss", 225],
		size: "Small",
		type: "aberration",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 18,
		hd: [4, 6],
		speed: "0 ft, swim 30 ft",
		scores: [12, 16, 13, 12, 13, 7],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Abyssal, Ixitxachitl",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		reactions: [{
			name: "Barbed Tail",
			description: "When a creature provokes an opportunity attack from the ixitxachitl, the ixitxachitl can make the following attack instead of using its bite: Melee Weapon Attack: +5 to hit, reach 5 ft, one target. Hit: 7 (1d8 +3) piercing damage.",
		}
		],
	},
	"Ixitxachitl Cleric": {
		name: "Ixitxachitl Cleric",
		source: ["Out of the Abyss", 226],
		size: "Small",
		type: "aberration",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 18,
		hd: [4, 6],
		speed: "0 ft, swim 30 ft",
		scores: [12, 16, 13, 12, 13, 7],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Abyssal, Ixitxachitl",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		reactions: [{
			name: "Barbed Tail",
			description: "When a creature provokes an opportunity attack from the ixitxachitl, the ixitxachitl can make the following attack instead of using its bite: Melee Weapon Attack: +5 to hit, reach 5 ft, one target. Hit: 7 (1d8 +3) piercing damage.",
		}
		],
		spells: [
			"The ixtachitl is a 5th-level spellcaster that uses Wisdom as its spellcasting ability (Spell save DC 11, +3 to hit with spell attacks). The ixitxachil has the following cleric spells prepared:",
			"Cantrips (at will): guidance, thaumaturgy",
			"1st level (4 slots): charm person, create or destroy water",
			"2nd level (3 slots): hold person, silence",
			"3rd level (2 slots): dispel magic, tongues"
		]
	},
	"Juiblex": {
		name: "Juiblex",
		source: ["Out of the Abyss", 243],
		size: "Huge",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [18, "Natural Armor", false],
		hp: 350,
		hd: [28, 12],
		speed: "30 ft",
		scores: [24, 10, 23, 20, 20, 16],
		saves: ["", "7", "13", "", "12", ""],
		skills: "Perception +12",
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison; bludgeoning, piercing, and slashing that is nonmagical",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained, stunned, unconscious",
		senses: "truesight 120 ft",
		passive_perception: "22",
		languages: "all, telepathy 120 ft",
		challenge_rating: "23",
		attacks: [{
			name: "Acid Lash",
			ability: 1,
			damage: [4, 6, "acid"],
			range: "Melee (10 ft)",
			description: "Any creature killed by this attack is drawn into Juiblex's body, and the corpse is obliterated after 1 minute.",
		}, {
			name: "Corrupting Touch (Costs 2 Actions)",
			ability: 2,
			damage: [4, 6, "poison"],
			range: "Melee (10 ft)",
			description: "Target is slimed on hit. The target is poisoned until scraped off with an action. Any creature within 10 feet of the affected target is also poisoned, except the ooze",
		}
		],
		traits: [{
			name: "Foul",
			description: "Any creature, other than an ooze, that starts its turn within 10 feet of Juiblex must succeed on a DC 21 Constitution saving throw or be poisoned until the start of the creature's next turn."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Juiblex's spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). Juiblex can innately cast the following spells, requiring no material components:",
				"At will: acid splash (17th level), detect magic",
				"3/day each: blight, contagion, gaseous form"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Juiblex fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Juiblex has advantage on saving throws against spell and other magic effects."
		}, {
			name: "Magic Weapon",
			description: "Juiblex's weapon attacks are magical."
		}, {
			name: "Regeneration",
			description: "Juiblex regains 20 hit points at the start of its turn. If it takes fire or radiant damage, this trait doesn't function at the start of its next turn. Juiblex dies only if it starts its turn with 0 hit points and doesn't regenerate."
		}, {
			name: "Spider Climb",
			description: "Juiblex can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Juiblex makes three acid lash attacks."
		}, {
			name: "Eject Slime (Recharge 5�6)",
			description: "Juiblex spews out a corrosive slime, targeting one creature that it can see within 60 feet of it. The target must make a DC 21 Dexterity saving throw. On a failure, the target takes 55 (10d10) acid damage. Unless the target avoids taking any of this damage, any metal armor worn by the target takes a permanent -1 penalty to the AC it offers, and any metal weapon it is carrying or wearing takes a permanent -1 penalty to damage rolls. The penalty worsens each time a target is subjected to this effect. If the penalty on an object drops to -5, the object is destroyed.",
		}
		],
		legendary_actions: [{
			name: "",
			description: "Juiblex can take 3 legendary actions, choosing from the options below, Only one legendary action option can be used at a time and only at the end of another creature's turn. Juiblex regains spent legendary actions at the start of its turn."
		}, {
			name: "Acid Splash",
			description: "Juiblex casts acid splash."
		}, {
			name: "Attack",
			description: "Juiblex makes one acid lash attack."
		}
		],
	},
	"Narrak": {
		name: "Narrak",
		source: ["Out of the Abyss", 232],
		size: "Small",
		type: "humanoid (derro)",
		alignment: "chaotic evil",
		ac: [12, "", false],
		hp: 40,
		hd: [9, 6],
		speed: "30 ft",
		scores: [9, 14, 13, 14, 5, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, Stealth +4",
		senses: "darkvision 120 ft",
		passive_perception: "7",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Insanity",
			description: "Droki has advantage on saving throws against being charmed or frightened."
		}, {
			name: "Magic Resistance",
			description: "The derro has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the derro has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Armor of Shadows (Recharges after a Short or Long Rest)",
			description: "Narrak casts mage armor on himself"
		}
		],
		reactions: [{
			name: "One with Shadows",
			description: "While he is in a dim light or darkness, Narrak can become invisible. He remains so until he moves or takes an action or reaction."
		}
		],
		description: [
			"Narrak is a 5th-level spellcaster. His spellcasting ability is Charisma (Save DC 13, +5 to hit with spell attacks) Narrak has two 2nd-level spell slots, which he regains after finishing a short or long rest, and knows the following Warlock spells:",
			"Cantrips (at will): eldritch blast, friends, poison spray",
			"1st level: armor of Agathys, charm person, hex",
			"2nd level: hold person, ray of enfeeblement, spider climb"
		]
	},
	"Orcus": {
		name: "Orcus",
		source: ["Out of the Abyss", 245],
		size: "Huge",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 405,
		hd: [30, 12],
		speed: "40 ft, fly 40 ft",
		scores: [27, 14, 25, 20, 20, 25],
		saves: ["", "10", "15", "", "13", ""],
		skills: "Arcana +12, Perception +12",
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "necrotic, poison; bludgeoning, piercing, and slashing that is nonmagical",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "22",
		languages: "all, telepathy 120 ft",
		challenge_rating: "26",
		attacks: [{
			name: "Tail",
			ability: 1,
			damage: [3, 8, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 18 (4d8) poison damage.",
		}, {
			name: "Wand of Orcus",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Plus 13 (2d12) necrotic damage.",
		}
		],
		traits: [{
			name: "Wand of Orcus",
			description: [
				"The wand has 7 charges, and any of its properties that require a saving throw have a save DC of 18. While holding it, Orcus can use an action to cast animate dead, blight, or speak with dead. Alternatively, he can expend or 1 or more of the wand's charges to cast one of the following spells from it: circle of death (1 charge), finger of death (1 charge), or power word kill (2 charges). The wand regains 1d4 +3 charges daily at dawn.",
				"While holding the wand, Orcus gains +3 AC and can use an action to conjure undead creatures whose combined average hit points don't exceed 500, These undead magically rise up from the ground or otherwise form in unoccupied spaces within 300 feet of Orcus and obey his commands until they are destroyed or until he dismisses them as an action. Once this property of the wand is used, the property can't be used again until the next dawn."
			]
		}, {
			name: "Innate Spellcasting",
			description: [
				"Orcus's spellcasting ability is Charisma (spell save DC 23, +15 to hit with spell attacks). He can innately cast the following spells, requiring no material components:",
				"At will: chill touch (17th level), detect magic",
				"3/day each: create undead, dispel magic",
				"1/day: time stop"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Orcus fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Orcus has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapon",
			description: "Orcus's weapon attacks are magical."
		}, {
			name: "Master of Undeath",
			description: "When Orcus casts animate dead or create undead, he chooses the level at which the spell is cast, and the creatures created by the spells remain under his control indefinitely. Additionally, he can cast create undead even when it isn't night."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Orcus makes two Wand of Orcus attacks."
		}
		],
		legendary_actions: [{
			name: "",
			description: "Orcus can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Orcus regains spent legendary actions at the start of his turn."
		}, {
			name: "Tail",
			description: "Orcus makes one tail attack."
		}, {
			name: "A Taste of Undeath",
			description: "Orcus casts chill touch (17th level)."
		}, {
			name: "Creeping Death (Costs 2 Actions)",
			description: "Orcus chooses a point on the ground that he can see within 100 feet of him. A cylinder of swirling necrotic energy 60 feet tall and with a 10-foot radius rises from that point and lasts until the end of Orcus's next turn. Creatures in that area are vulnerable to necrotic damage."
		}
		],
	},
	"Steeder (Female)": {
		name: "Steeder (Female)",
		source: ["Out of the Abyss", 231],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 30,
		hd: [4, 10],
		speed: "30 ft, climb 30 ft",
		scores: [15, 16, 14, 2, 10, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +7",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Sticky Leg",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Recharges when the Steeder Has No Creatures Grappled. Target mus be Medium or smaller. On hit: The target is stuck ot the steeder's leg and grappled until it escapes (escape DC 12)",
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must make a DC 12 Constitution saving throw, taking 9 (2d8) acid damage on a failed save, or half as much damage on a successful one.",
		}
		],
		traits: [{
			name: "Spider Climb",
			description: "The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Leap",
			description: "The steeder can expend all its movement on its turn to jump up to 90 feet vertically or horizontally, provided that is speed is at least 30 feet."
		}
		],
	},
	"Steeder (Male)": {
		name: "Steeder (Male)",
		source: ["Out of the Abyss", 231],
		size: "Medium",
		type: "beast",
		alignment: "unaligned",
		ac: [12, "Natural Armor", false],
		hp: 13,
		hd: [2, 8],
		speed: "30 ft, climb 30 ft",
		scores: [15, 12, 14, 2, 10, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +5",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Sticky Leg",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Recharges when the Steeder Has No Creatures Grappled. Target mus be Medium or smaller. On hit: The target is stuck ot the steeder's leg and grappled until it escapes (escape DC 12)",
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must make a DC 12 Constitution saving throw, taking 4 (1d8) acid damage on a failed save, or half as much damage on a successful one.",
		}
		],
		traits: [{
			name: "Spider Climb",
			description: "The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Leap",
			description: "The steeder can expend all its movement on its turn to jump up to 60 feet vertically or horizontally, provided that is speed is at least 30 feet."
		}
		],
	},
	"The Pudding King": {
		name: "The Pudding King",
		source: ["Out of the Abyss", 233],
		size: "Small",
		type: "humanoid (gnome, shapechanger)",
		alignment: "chaotic evil",
		ac: [13, "", false],
		hp: 49,
		hd: [9, 6],
		speed: "30 ft",
		scores: [10, 16, 14, 12, 8, 17],
		saves: ["", "", "5", "", "", "6"],
		skills: "Arcana +4, Perception +2, Stealth +6, Survival +2",
		damage_resistances: "acid, poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "Abyssal, Gnomish, Terran, Undercommon",
		challenge_rating: "4",
		attacks: [{
			name: "War Pick",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Stone Camouflage",
			description: "The Pudding King has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
		}, {
			name: "Gnome Cunning",
			description: "The Pudding King has advantage on Intelligence, Wisdom, and Charisma saving throws against magic."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The Pudding King's innate spellcasting ability is Intelligence (spell save DC 12). He can innately cast the following spells, requiring no material components:",
				"At will: nondetection (self only)",
				"1/day each: blindness/deafness, blur, disguise self"
			]
		}, {
			name: "Insanity",
			description: "The Pudding King has advantage on saving throws against being charmed or frightened."
		}
		],
		actions: [{
			name: "Change Shape",
			description: "The Pudding King magically transforms into an ooze, or back into his true form. He reverts to his true form if he dies. Any equipment he is wearing or carrying is absorbed by the new form. In ooze form, the Pudding King retains his alignment, hit points, Hit Dice, and Intelligence, Wisdom, and Charisma scores, as well as this action. His statistics and capabilities are otherwise replaced by those of the new form."
		}, {
			name: "Create Green Slime (Recharges after a Long Rest)",
			description: "The Pudding King creates a patch of green slime (see \"Dungeon Hazards\" in chapter 5 of the Dungeon Master's Guide). The slime appears on a section of wall, ceiling, or floor within 30 feet of the Pudding King."
		}
		],
		spells: [
			"The Pudding King is a 9th-level spellcaster. His spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). The Pudding King knows the following sorcerer spells:",
			"Cantrips (at will): acid splash, light, mage hand, poison spray, prestidigitation",
			"1st level (4 slots): false life, mage armor, ray of sickness, shield",
			"2nd level (3 slots): crown of madness, misty step",
			"3rd level (3 slots): gaseous form, stinking cloud",
			"4th level (3 slots): blight, confusion",
			"5th level (1 slot): cloudkill"
		]
	},
	"Troglodyte Champion of Laogzed": {
		name: "Troglodyte Champion of Laogzed",
		source: ["Out of the Abyss", 229],
		size: "Medium",
		type: "humanoid (troglodyte)",
		alignment: "chaotic evil",
		ac: [14, "Natural Armor", false],
		hp: 59,
		hd: [7, 8],
		speed: "30 ft",
		scores: [18, 12, 18, 8, 23, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +6, Intimidation +3, Stealth +3",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Troglodyte",
		challenge_rating: "3",
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
			name: "Greatclub",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Chameleon Skin",
			description: "The troglodyte has aadvantage on Dexterity (Stealth) checks made to hide."
		}, {
			name: "Stench",
			description: "Any creature other than a ttroglodyte that starts its turn within 5 feet of the troglodyte must succeed on a DC 14 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all ttroglodytes for 1 hour."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the troglodyte has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The troglodyte makes three attacks: one with its bite and two with either its claws or its greatclub."
		}, {
			name: "Acid Spray (Recharge 6)",
			description: "The troglodyte spits acid in a line 15 feet long and 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one.",
		}
		]
	},
	"Vampiric Ixitxachitl": {
		name: "Vampiric Ixitxachitl",
		source: ["Out of the Abyss", 226],
		size: "Medium",
		type: "aberration",
		alignment: "chaotic evil",
		ac: [16, "Natural Armor", false],
		hp: 44,
		hd: [8, 8],
		speed: "0 ft, swim 30 ft",
		scores: [14, 18, 13, 12, 13, 7],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Abyssal, Ixitxachitl",
		challenge_rating: "2",
		attacks: [{
			name: "Vampiric Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "The target must succeed on a DC 11 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken, and the ixitxachitl regains hit points equal to that amount. The reduction lasts until th target finishes a long rest. The target dies if its hit point maximum is reduced to 0.",
		}
		],
		reactions: [{
			name: "Barbed Tail",
			description: "When a creature provokes an opportunity attack from the ixitxachitl, the ixitxachitl can make the following attack instead of using its bite: Melee Weapon Attack: +6 to hit, reach 5 ft, one target. Hit: 9 (1d10+4) piercing damage.",
		}
		],
	},
	"Vampiric Ixitxachitl Cleric": {
		name: "Vampiric Ixitxachitl Cleric",
		source: ["Out of the Abyss", 226],
		size: "Medium",
		type: "aberration",
		alignment: "chaotic evil",
		ac: [16, "Natural Armor", false],
		hp: 44,
		hd: [8, 8],
		speed: "0 ft, swim 30 ft",
		scores: [14, 18, 13, 12, 13, 7],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Abyssal, Ixitxachitl",
		challenge_rating: "2",
		attacks: [{
			name: "Vampiric Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "The target must succeed on a DC 11 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken, and the ixitxachitl regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.",
		}
		],
		reactions: [{
			name: "Barbed Tail",
			description: "When a creature provokes an opportunity attack from the ixitxachitl, the ixitxachitl can make the following attack instead of using its bite: Melee Weapon Attack: +6 to hit, reach 5 ft, one target. Hit: 9 (1d10+4) piercing damage.",
		}
		],
		spells: [
			"The ixtachitl is a 5th-level spellcaster that uses Wisdom as its spellcasting ability (Spell save DC 11, +3 to hit with spell attacks). The ixitxachil has the following cleric spells prepared:",
			"Cantrips (at will): guidance, thaumaturgy",
			"1st level (4 slots): charm person, create or destroy water",
			"2nd level (3 slots): hold person, silence",
			"3rd level (2 slots): dispel magic, tongues"
		]
	},
	"Yestabrod": {
		name: "Yestabrod",
		source: ["Out of the Abyss", 233],
		size: "Large",
		type: "monstrosity",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "30 ft",
		scores: [12, 10, 14, 13, 15, 10],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "12",
		languages: "Abyssal, telepathy 60 ft",
		challenge_rating: "4",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 7 (3d4) poison damage.",
		}
		],
		traits: [{
			name: "Legendary Resistance (1/Day)",
			description: "If Yestabrod fails a saving throw, it can choose to succeed instead."
		}
		],
		actions: [{
			name: "Caustic Spores (1/Day)",
			description: "Yestabrod releases spores in a 30-foot cone. Each creature in that area must succeed on a DC 12 Dexterity saving throw ortake 1d6 acid damage at the start of each of Yestbrod's turns. A creature can repeat the saving throw at the end of each of its turn, ending the effect on itself on a success."
		}, {
			name: "Infestation Spores (1/Day)",
			description: "Yestabrod releases spores that burst out in a cloud that fills a 10-foot-radius sphere centered on it, and the cloud lingers for 1 minute. Any flesh-and-blood creature in the cloud when it appears, or that enters it later, must make a DC 12 Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the spores of Zuggtmoy and also gains a random form of indefinite madness (determined by rolling on the Madness of Zuggtmoy table in appendix D) that lasts until the creature is cured of the disease or dies. While infected in this way, the creature can't be reinfecte, and it must be repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature's body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a spore servant if it's a type of creature that can be (see the \"Myconids\" entry in the Monster Manual)."
		}
		],
		legendary_actions: [{
			name: "",
			description: "Yestabrod can take 2 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Yestabrod regains spent legendary actions at the start of its turn."
		}, {
			name: "Corpse Burst",
			description: "Gore, offal, and acid erupt from a corpse within 20 feet of Yestabrod. Creatures within 10 feet of the corpse must succeed on a DC 12 Dexterity saving throw or take 7 (2d6) acid damage.",
		}, {
			name: "Foul Absorption",
			description: "Yestabrod absorbs putrescence from a corpse within 5 feet of it, regaining 1d8+2 hit points",
		}
		]
	},
	"Yeenoghu": {
		name: "Yeenoghu",
		source: ["Out of the Abyss", 247],
		size: "Huge",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [22, "Natural Armor", false],
		hp: 348,
		hd: [24, 12],
		speed: "50 ft",
		scores: [29, 16, 23, 15, 24, 15],
		saves: ["", "10", "15", "", "14", ""],
		skills: "Intimidation +9, Perception +14",
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison; bludgeoning, piercing, and slashing that is nonmagical",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "24",
		languages: "all, telepathy 120 ft",
		challenge_rating: "24",
		attacks: [{
			name: "Flail",
			ability: 1,
			damage: [2, 12, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}, {
			name: "Bite",
			ability: 1,
			damage: [4, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"Yeenoghu's spellcasting ability is Charisma (spell save DC 17, +9 to hit with spell attacks). He can innately cast the following spells, requiring no material components:",
				"At will: detect magic, spiritual weapon (8th-level spell, 4d8 +2 force damage on a hit, appears as a flail)",
				"3/day each: dispel magic, fear, invisibility", "1/day: teleport"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Yeenoghu fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Yeenoghu has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapon",
			description: "Yeenoghu's weapon attacks are magical."
		}, {
			name: "Rampage",
			description: "When Yeenoghu reduces a creature to 0 hit points with a melee attack on his turn, Yeenoghu can take a bonus action to move up to half his speed and make a bite attack."
		}
		],
		actions: [{
			name: "Multiattack",
			description: [
				"Yeenoghu makes three flail attacks. If an attack hits, he can cause it to create an additional effect of his choice or at random (each effect can be used only once per Multi attack):",
				"1. The attack deals an extra 13 (2d12) bludgeoning damage.",
				"2. The target must succeed on a DC 17 Constitution saving throw or be paralyzed until the start of Yeenoghu's next turn.",
				"3. The target must succeed on a DC 17 Wisdom saving throw or be affected by the confusion spell until the start of Yeenoghu's next turn."
			]
		}
		],
		legendary_actions: [{
			name: "",
			description: "Yeenoghu can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Yeenoghu regains spent legendary actions at the start of his turn."
		}, {
			name: "Charge",
			description: "Yeenoghu moves up to his speed."
		}, {
			name: "Swat Away",
			description: "Yeenoghu makes a flail attack. If the attack hits, the target must succeed on a DC 24 Strength saving throw or be pushed 15 feet in a straight line away from Yeenoghu. If the saving throw fails by 5 or more, the target falls prone."
		}, {
			name: "Savage (Costs 2 Actions)",
			description: "Yeenoghu makes a bite attack against each creature within 10 feet of him."
		}
		],
	},
	"Zuggtmoy": {
		name: "Zuggtmoy",
		source: ["Out of the Abyss", 249],
		size: "Large",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [18, "Natural Armor", false],
		hp: 304,
		hd: [32, 10],
		speed: "30 ft",
		scores: [22, 15, 18, 20, 19, 24],
		saves: ["", "9", "11", "", "11", ""],
		skills: "Perception +11",
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison; bludgeoning, piercing, and slashing that is nonmagical",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "21",
		languages: "all, telepathy 120 ft",
		challenge_rating: "23",
		attacks: [{
			name: "Pseudopod",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Plus 9 (2d8) poison damage.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"Zuggtmoy's spellcasting ability is Charisma (spell save DC 22). She can innately cast the following spells, requiring no material components:",
				"At will: detect magic, locate animals or plants, ray of sickness",
				"3/day each: dispel magic, ensnaring strike, entangle, plant growth",
				"1/day: etherealness, teleport"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Zuggtmoy fails a saving throw, she can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Zuggtmoy has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapon",
			description: "Zuggtmoy's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Zuggtmoy makes four pseudopod attacks."
		}, {
			name: "Infestation Spores (3/Day)",
			description: "Zuggtmoy releases spores that burst out in cloud fills a 20-foof-radius sphere centered on her, and it lingers for 1 minute. Any flesh-and-blood creature in the cloud when it appears, or that enters it later, must make a DC 19 Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the spores of Zuggtmoy and also gains a random form of madness (determined by rolling on the Madness of Zuggtmoy table) that lasts until the creature is cured of the disease or dies. While infected in this way, the creature can't be reinfected, and it must repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature's body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a spore servant if it's a type of creature that can be (see the \"Myconids\" entry in the Monster Manual)."
		}, {
			name: "Mind Control Spores (Recharge 5�6)",
			description: "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Humanoids and beasts in the cloud when it appears, or that enter it later, must make a DC 19 Wisdom saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the influence of Zuggtmoy for 24 hours. While infected, the creature is charmed by her and can't be reinfected by these spores."
		}
		],
		legendary_actions: [{
			name: "",
			description: "Zuggtmoy can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Zuggtmoy regains spent legendary actions at the start of her turn."
		}, {
			name: "Attack",
			description: "Zuggtmoy makes one pseudopod attack."
		}, {
			name: "Exert Will",
			description: "One creature charmed by Zuggtmoy that she can see must use its reaction to move up to its speed as she directs or to make a weapon attack against a target that she designates."
		}
		],
	}
};
