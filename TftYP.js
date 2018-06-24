var TftYP = {
	"Animated Table": {
		name: "Animated Table",
		source: ["Yawning Portal", 230],
		size: "Large",
		type: "construct",
		alignment: "unaligned",
		ac: [15, "Natural Armor", false],
		hp: 39,
		hd: [6, 10],
		speed: "40 ft",
		scores: [18, 8, 13, 1, 3, 1],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison, psychic",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "blindsight 60 ft (blind beyond this radius)",
		passivePerception: 6,
		challengeRating: "2",
		proficiencyBonus: 2,
		traits: [{
			name: "Constructed Nature",
			description: "An animated table doesn't require air, food, drink, or sleep."
		}, {
			name: "Antimagic Susceptibility",
			description: "The table is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the table must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
		}, {
			name: "False Appearance",
			description: "While the table remains motionless, it is indistinguishable from a normal table."
		}, {
			name: "Charge",
			description: "If the table moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
		}
		],
		attacks: [{
			name: "Ram",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
	},
	"Barghest": {
		name: "Barghest",
		source: ["Yawning Portal", 230],
		size: "Large",
		type: "fiend (shapechanger)",
		alignment: "neutral evil",
		ac: [17, "Natural Armor", false],
		hp: 90,
		hd: [12, 10],
		speed: "60 ft (30 ftin goblin form)",
		scores: [19, 15, 14, 13, 12, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +4, Intimidation +4, Perception +5, Stealth +4",
		damage_resistances: "Cold, Fire, Lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "Acid, Poison",
		condition_immunities: "Poisoned",
		senses: "blindsight 60 ft, darkvision 60 ft",
		passivePerception: 15,
		languages: "Abyssal, Common, Goblin, Infernal, telepathy 60 ft",
		challengeRating: "4",
		proficiencyBonus: 2,
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Shapechanger",
			description: "The barghest can use its action to polymorph into a Small goblin or back into its true form. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. The barghest reverts to its true form if it dies."
		}, {
			name: "Fire Banishment",
			description: "When the barghest starts its turn engulfed in flames that are at least 10 feet high or wide, it must succeed on a DC 15 Charisma saving throw or be instantly banished to Gehenna. Instantaneous bursts of flame (such as a red dragon's breath or a Fireball spell) don't have this effect on the barghest."
		}, {
			name: "Keen Smell",
			description: "The barghest has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Soul Feeding",
			description: [
				"A barghest can feed on the corpse of a humanoid that it killed that has been dead for less than 10 minutes, devouring both flesh and soul in doing so. This feeding takes at least 1 minute, and it destroys the victim's body. The victim's soul is trapped in the barghest for 24 hours, after which time it is digested. If the barghest dies before the soul is digested, the soul is released.",
				"While a humanoid's soul is trapped in a barghest, any form of revival that could work has only a 50 percent chance of doing so, freeing the soul from the barghest if it is successful. Once a creature's soul is digested, however, no mortal magic can return that humanoid to life."
			]
		},
		],
		spells: [
			"The barghest's innate spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components::",
			"At will: levitate, minor illusion, pass without trace",
			"1/day each: charm person, dimension door, suggestion"
		]
	},
	"Centaur Mummy": {
		name: "Centaur Mummy",
		source: ["Yawning Portal", 231],
		size: "Large",
		type: "undead",
		alignment: "lawful evil",
		ac: [13, "Natural Armor", false],
		hp: 85,
		hd: [10, 10],
		speed: "30 ft",
		scores: [20, 12, 16, 5, 14, 12],
		saves: ["", "", "", "", 5, ""],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "fire",
		damage_immunities: "necrotic, poison",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "darkvision 60 ft",
		passivePerception: "12",
		languages: "Common, Sylvan",
		challengeRating: "6",
		proficiencyBonus: 3,
		traits: [{
			name: "Undead Nature",
			description: "A mummy doesn't require air, food, drink, or sleep."
		}, {
			name: "Charge",
			description: "If the centaur mummy moves at least 20 feet straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage."
		}
		],
		attacks: [{
			name: "Pike",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Hooves",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or similar magic.",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The centaur mummy makes two melee attacks, one with its pike and one with its hooves, or it attacks with its pike and uses Dreadful Glare."
		}, {
			name: "Dreadful Glare",
			description: "The centaur mummy targets one creature it can see within 60 feet of it. If the target can see the mummy, the target must succeed on a DC 12 wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for tne next 24 hours."
		}
		]
	},
	"Champion": {
		name: "Champion",
		source: ["Yawning Portal", 231],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [18, "Plate", false],
		hp: 143,
		hd: [22, 8],
		speed: "30 ft",
		scores: [20, 15, 14, 10, 14, 12],
		saves: [9, "", 6, "", "", ""],
		skills: "Athletics +9, Intimidation +5, Perception +6",
		senses: "",
		passivePerception: 16,
		languages: "any one language (usually Common)",
		challengeRating: "9",
		proficiencyBonus: 4,
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) slashing damage if the champion has more than half of its total hit points remaining.",
		}, {
			name: "Light Crossbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "Plus 7 (2d6) piercing damage if the champion has more than half of its total hit points remaining.",
		},
		],
		traits: [{
			name: "Indomitable (2/Day)",
			description: "The champion rerolls a failed saving throw."
		}, {
			name: "Second Wind (Recharges after a Short or Long Rest)",
			description: "As a bonus action, the champion can regain 20 hit points."
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The champion makes three attacks with its greatsword or its light crossbow."
		},
		],
	},
	//CHOKER
	"Deathlock Wight": {
		name: "Deathlock Wight",
		source: ["Yawning Portal", 233],
		size: "Medium",
		type: "undead",
		alignment: "neutral evil",
		ac: [12, "", false],
		hp: 37,
		hd: [5, 8],
		speed: "30 ft",
		scores: [11, 14, 16, 12, 14, 16],
		saves: ["", "", "", "", 4, ""],
		skills: "Arcana +3, Perception +4",
		damage_resistances: "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, poisoned",
		senses: "darkvision 60 ft",
		passivePerception: "14",
		languages: "the languages it knew in life",
		challengeRating: "3",
		proficiencyBonus: 2,
		traits: [{
			name: "Undead Nature",
			description: "A wight doesn't require air, food, drink, or sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The wight's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no verbal or material components:",
				"At will: detect magic, disguise self, mage armor ",
				"1/day each:fear, hold person, misty step"
			]
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		attacks: [{
			name: "Grave Bolt",
			ability: 6,
			damage: [1, 8, "necrotic"],
			range: "Ranged (120 ft)",
			description: "",
		}, {
			name: "Life Drain",
			ability: 5,
			damage: [2, 6, "necrotic"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time.",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The wight attacks twice with Grave Bolt."
		}
		],
	},
	"Dread Warrior": {
		name: "Dread Warrior",
		source: ["Yawning Portal", 233],
		size: "Medium",
		type: "undead",
		alignment: "neutral evil",
		ac: [18, "Chain Mail", true],
		hp: 37,
		hd: [5, 8],
		speed: "30 ft",
		scores: [15, 11, 16, 10, 12, 10],
		saves: ["", "", "", "", 3, ""],
		skills: "Athletics +4, Perception +3",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, poisoned",
		senses: "darkvision 60 ft",
		passivePerception: "13",
		languages: "Common",
		challengeRating: "l",
		traits: [{
			name: "Undead Nature",
			description: "A dread warrior doesn't require air, food, drink, or sleep."
		}, {
			name: "Undead Fortitude",
			description: "If damage reduces the dread warrior to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken , unless the damage is radiant or from a critical hit. On a success, the dread warrior drops to l hit point instead."
		}
		],
		attacks: [{
			name: "Battleaxe",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Or 7 (1d10 + 2) slashing damage if wielded with two hands.",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The dread warrior makes two melee attacks."
		}
		]
	},
	"Duergar Spy": {
		name: "Duergar Spy",
		source: ["Yawning Portal", 234],
		size: "Medium",
		type: "humanoid (dwarf)",
		alignment: "lawful evil",
		ac: [15, "Studded Leather", false],
		hp: 33,
		hd: [6, 8],
		speed: "25 ft",
		scores: [10, 16, 12, 12, 10, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Insight +2, Investigation +5, Perception +4, Persuasion +3, Sleight of Hand +5, Stealth +7",
		damage_resistances: "poison",
		senses: "darkvision 120 ft",
		passivePerception: "14",
		languages: "Dwarvish, Undercommon",
		challengeRating: "2",
		proficiencyBonus: 2,
		traits: [{
			name: "Cunning Action",
			description: "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action."
		}, {
			name: "Duergar Resilience",
			description: "The spy has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
		}, {
			name: "Sneak Attack",
			description: "Once per turn, the spy can deal an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the spy has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Or 10 (2d6 + 3) piercing damage while enlarged.",
		}, {
			name: "Hand Crossbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The spy makes two shortsword attacks."
		}, {
			name: "Eniarge (Recharges after a Short or Long Rest)",
			description: "For 1 minute, the spy magically increases in size, along with anything it is wearing or carrying. While enlarged, the spy is Large, doubles her damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the spy lacks the room to become Large, it attains the maximum size possible in the space available."
		}, {
			name: "Invisibility (Recharges after a Short or Long Rest)",
			description: "The spy magically turns invisible until it attacks, deals damage, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the spy wears or carries is invisible with it."
		}
		]
	},
	"Giant Crayfish": {
		name: "Giant Crayfish",
		source: ["Yawning Portal", 235],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [15, "Natural Armor", false],
		hp: 45,
		hd: [7, 10],
		speed: "30 ft, swim 30 ft",
		scores: [15, 13, 13, 1, 9, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +3",
		senses: "blindsight 30 ft",
		passivePerception: "9",
		challengeRating: "2",
		proficiencyBonus: 2,
		traits: [{
			name: "Amphibious",
			description: "The giant crayfish can breathe air and water."
		}
		],
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target is grappled (escape DC 12). The crayfish has two claws, each of which can grapple only one target.",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The giant crayfish makes two claw attacks."
		}
		]
	},
	"Giant Lightning Eel": {
		name: "Giant Lightning Eel",
		source: ["Yawning Portal", 236],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [13, "", false],
		hp: 42,
		hd: [5, 10],
		speed: "5 ft, swim 30 ft",
		scores: [11, 17, 16, 2, 12, 3],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "lightning",
		senses: "blindsight 60 ft",
		passivePerception: "11",
		challengeRating: "3",
		proficiencyBonus: 2,
		traits: [{
			name: "Water Breathing",
			description: "The eel can breathe only underwater."
		}
		],
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 4 (1d8) lightning damage.",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The eel makes two bite attacks."
		}, {
			name: "Lightning jolt (Recharge 5-6)",
			description: "One creature the eel touches within 5 feet of it outside water, or each creature within l 5 feet ofit in a body of water, must make a DC 12 Constitution saving throw. On failed save, a target takes 13 (3d8) lightning damage. If the target takes any of this damage, the target is stunned until the end of the eel's next turn. On a successful save, a target takes half as much damage and isn't stunned."
		}
		]
	},
	"Giant Subterranean Lizard": {
		name: "Giant Subterranean Lizard",
		source: ["Yawning Portal", 236],
		size: "Huge",
		type: "beast",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 66,
		hd: [7, 12],
		speed: "30 ft, swim 50 ft",
		scores: [21, 9, 17, 2, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +3",
		passivePerception: "10",
		challengeRating: "4",
		proficiencyBonus: 2,
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the lizard can't bite another target.",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Target must not be grappled. If the target is a creature, it must succeed on a DC l 5 Strength saving throw or be knocked prone.",
		}, {
			name: "Swallow",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "One Medium or smaller creature the lizard is grappling. Target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the lizard, and it takes 10 (3d6) acid damage at the start of each of the lizard's turns. The lizard can have only one target swallowed at a time. If the lizard dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 10 feet of movement, exiting prone.",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The lizard makes two attacks: one with its bite and one with its tail. One attack can be replaced by Swallow.",
		}
		],
	},
	"Greater Zombie": {
		name: "Greater Zombie",
		source: ["Yawning Portal", 237],
		size: "Medium",
		type: "undead",
		alignment: "neutral evil",
		ac: [15, "Natural Armor", false],
		hp: 97,
		hd: [13, 8],
		speed: "30 ft",
		scores: [18, 10, 17, 4, 6, 6],
		saves: ["", "", "", "", 1, ""],
		damage_resistances: "cold, necrotic",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "darkvision 60 ft",
		passivePerception: "8",
		languages: "understands the languages it knew in life but can't speak",
		challengeRating: "5",
		proficiencyBonus: 3,
		traits: [{
			name: "Undead Nature",
			description: "A zombie doesn't require air, food, drink, or sleep."
		}, {
			name: "Turn Resistance",
			description: "The zombie has advantage on saving throws against any effect that turns undead."
		}, {
			name: "Undead Fortitude",
			description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
		}
		],
		attacks: [{
			name: "Empowered Slam",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) necrotic damage.",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The zombie makes two melee attacks."
		}
		]
	},
	"Kalka-Kylla": {
		name: "Kalka-Kylla",
		source: ["Yawning Portal", 238],
		size: "Large",
		type: "monstrosity",
		alignment: "neutral",
		ac: [15, "Natural Armor", false],
		hp: 85,
		hd: [10, 10],
		speed: "30 ft, swim 30 ft",
		scores: [17, 12, 16, 15, 16, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +3, Insight +5, Stealth +3",
		senses: "blindsight 30 ft",
		passivePerception: "13",
		languages: "Olman",
		challengeRating: "3",
		proficiencyBonus: 2,
		traits: [{
			name: "Amphibious",
			description: "Kalka-Kylla can breathe air and water."
		}, {
			name: "False Appearance",
			description: "While Kalka-Kylla remains motionless and hidden in its shell, it is indistinguishable from a polished boulder."
		}, {
			name: "Shell",
			description: "Kalka-Kylla can use a bonus action to retract into or emerge from its shell. While retracted, Kalka-Kylla gains a +4 bonus to AC, and it has a speed of 0 and can't benefit from bonuses to speed."
		}
		],
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the target is a Medium or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the target is restrained. Kalka-Kylla has two claws, each of which can grapple only one target.",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "Kalka-Kylla makes two claw attacks."
		}
		]
	},
	"Kelpie": {
		name: "Kelpie",
		source: ["Yawning Portal", 238],
		size: "Medium",
		type: "plant",
		alignment: "neutral evil",
		ac: [14, "Natural Armor", false],
		hp: 67,
		hd: [9, 8],
		speed: "10 ft, swim 30 ft",
		scores: [14, 14, 16, 7, 12, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +4",
		damage_resistances: "bludgeoning, fire, piercing",
		condition_immunities: "blinded, deafened, exhaustion",
		senses: "blindsight 60 ft",
		passivePerception: "13",
		languages: "Common, Sylvan",
		challengeRating: "4",
		proficiencyBonus: 2,
		traits: [{
			name: "Amphibious",
			description: "The kelpie can breathe air and water."
		}, {
			name: "Seaweed Shape",
			description: "The kelpie can use its action to reshape its body into the form of a humanoid or beast that is Small, Medium, or Large. Its statistics are otherwise unchanged. The disguise is convincing, unless the kelpie is in bright light or the viewer is within 30 feet of it, in which case the seams between the seaweed strands are visible. The kelpie returns to its true form if takes a bonus action to do so or if it dies."
		}, {
			name: "False Appearance",
			description: "While the kelpie remains motionless in its true form, it is indistinguishable from normal seaweed."
		}
		],
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (10 ft)",
			description: "If the target is a Medium or smaller creature, it is grappled (escape DC 12).",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The kelpie makes two slam attacks."
		}, {
			name: "Drowning Hypnosis",
			description: [
				"The kelpie chooses one humanoid it can see within 150 feet of it. If the target can see the kelpie, the target must succeed on a DC 11 Wisdom saving throw or be magically charmed while the kelpie maintains concentration, up to 10 minutes (as if concentrating on a spell).",
																																														
				"The charmed target is incapacitated, and instead of holding its breath underwater, it tries to breathe normally and immediately runs out of breath, unless it can breathe water.", "	If the charmed target is more than 5 feet away from the kelpie, the target must move on its turn toward the kelpie by the most direct route, trying to get within 5 feet. It doesn't avoid opportunity attacks.",
				"Before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the kelpie or drowning, the target can repeat the saving throw. A charmed target can also repeat the saving throw at the end of each of its turns. If the saving throw is successful, the effect ends on it.", "	A target that successfully saves is immune to this kelpie's hypnosis for the next 24 hours."
																											
			]
		}
		]
	},
	"Malformed Kraken": {
		name: "Malformed Kraken",
		source: ["Yawning Portal", 239],
		size: "Huge",
		type: "monstrosity",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 172,
		hd: [15, 12],
		speed: "20 ft, swim 40 ft",
		scores: [22, 11, 20, 11, 15, 15],
		saves: [11, "", 9, 4, 6, 6],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities: "lightning",
		condition_immunities: "frightened, paralyzed",
		senses: "truesight 60 ft",
		passivePerception: "12",
		languages: "understands Common but can't speak; telepathy 60 ft",
		challengeRating: "10",
		proficiencyBonus: 4,
		traits: [{
			name: "Amphibious",
			description: "The kraken can breathe air and water."
		}, {
			name: "Siege Monster",
			description: "The kraken deals double damage to objects and structures."
		}
		],
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tentacle",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "The target is grappled (escape DC 16). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target.",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The kraken makes three tentacle attacks. One of them can be replaced with a bite attack, and any of them can be replaced with Fling."
		}, {
			name: "Fling",
			description: "One Medium or smaller object held or creature grappled by the kraken's tentacles is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 16 Dexterity saving throw or take the same damage and be knocked prone."
		}, {
			name: "Lightning Storm",
			description: "The kraken creates three bolts of lightning, each of which can strike a target the kraken can see within 150 feet ofit. A target must make a DC 16 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one."
		}
		]
	},
	"Nereid": {
		name: "Nereid",
		source: ["Yawning Portal", 240],
		size: "Medium",
		type: "fey",
		alignment: "any chaotic alignment",
		ac: [13, "", false],
		hp: 44,
		hd: [8, 8],
		speed: "30 ft, swim 60 ft",
		scores: [10, 17, 12, 13, 14, 16],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passivePerception: "12",
		languages: "Aquan, Common, Elvish, Sylvan",
		challengeRating: "2",
		proficiencyBonus: 2,
		traits: [{
			name: "Amphibious",
			description: "The nereid can breathe air and water."
		}, {
			name: "Aquatic Invisibility",
			description: "If immersed in water, the nereid can make itself invisible as a bonus action. It remains invisible until it leaves the water, ends the invisibility as a bonus action, or dies."
		}, {
			name: "Mantle Dependent",
			description: "The nereid wears a mantle of silky cloth the color of sea foam, which holds the creature's spirit. The mantle has an AC and hit points equal to that of the nereid, but the garment can't be directly harmed while the nereid wears it. If the mantle is destroyed, the nereid becomes poisoned and dies within 1 hour. A nereid is willing to do anything in its power to recover the mantle if it is stolen, including serving the thief."
		}, {
			name: "Shape Water",
			description: "The nereid can cast control water at will, requiring no components. Its spellcasting ability for it is Charisma. This use of the spell has a range of 30 feet and can affect a cube of water no larger than 30 feet on a side."
		}, {
			name: "Speak with Animals",
			description: "The nereid can comprehend and verbally communicate with beasts."
		}
		],
		attacks: [{
			name: "Blinding Acid (Melee)",
			ability: 2,
			damage: [2, 12, "acid"],
			range: "Melee (5 ft)",
			description: "Target is blinded until the start of the nereid's next turn.",
		}, {
			name: "Blinding Acid (Ranged)",
			ability: 2,
			damage: [2, 12, "acid"],
			range: "Ranged (30 ft)",
			description: "Target is blinded until the start of the nereid's next turn.",
		},
		],
		actions: [{
			name: "Drowning Kiss (Recharge 5-6)",
			description: "The nereid touches one creature it can see within 5 feet of it. The target must succeed on a DC 13 Constitution saving throw or take 22 (3d12 + 3) acid damage. On a failure, it also runs out of breath and can't speak for 1 minute. At the end of each of its turns, it can repeat the save, ending the effect on itself on a success."
		}, {
			name: "Water Lash",
			description: "The nereid causes a 5-foot cube of water within 60 feet of it to take a shape of its choice and strike one target it can see within 5 feet of that water. The target must make a DC 13 Strength saving throw. On a failed save, it takes 17 (4d6 + 3) bludgeoning damage, and ifit is a Large or smaller creature, it is pushed up to 15 feet in a straight line or is knocked prone (nereid's choice). On a successful save, the target takes half as much damage and isn't pushed or knocked prone."
		}
		]
	},
	"Ooze Master": {
		name: "Ooze Master",
		source: ["Yawning Portal", 241],
		size: "Huge",
		type: "undead",
		alignment: "lawful evil",
		ac: [9, "Natural Armor", false],
		hp: 138,
		hd: [12, 12],
		speed: "30 ft, climb 30 ft",
		scores: [16, 1, 20, 17, 10, 16],
		saves: ["", "", "", 7, 4, ""],
		skills: "Arcana +7, Insight +4",
		damage_resistances: "lightning, necrotic; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities: "acid, cold, poison",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, paralyzed, poisoned, prone",
		senses: "blindsight 120 ft",
		passivePerception: "10",
		languages: "Common, Primordial, Thayan",
		challengeRating: "10",
		proficiencyBonus: 4,
		traits: [{
			name: "Undead Nature",
			description: "The ooze master doesn't require air, food, drink, or sleep."
		}, {
			name: "Corrosive Form",
			description: [
				"A creature that touches the Ooze Master or hits it with a melee attack while within 5 feet of it takes 9 (2d8) acid damage. Any nonmagical weapon that hits the Ooze Master corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition that hits the Ooze Master is destroyed after dealing damage.",
				"The Ooze Master can eat through 2-inch-thick, nonmagical wood or metal in 1 round."
			]
		}, {
			name: "Instinctive Attack",
			description: "When the Ooze Master casts a spell with a casting time of 1 action, it can make one pseudopod attack as a bonus action."
		}, {
			name: "Spider Climb",
			description: "The Ooze Master can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}
		],
		attacks: [{
			name: "Pseudopod",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Plus 10 (3d6) acid damage.",
		},
		],
		reactions: [{
			name: "Instinctive Charm",
			description: "If a creature the Ooze Master can see makes an attack roll against it while within 30 feet of it, the Ooze Master can use a reaction to divert the attack if another creature is within the attack's range. The attacker must make a DC 15 Wisdom saving throw. On a failed save, the attacker targets the creature that is closest to it, not including itself or the Ooze Master. If multiple creatures are closest, the attacker chooses which one to target. On a successful save, the attacker is immune to this Instinctive Charm for 24 hours. Creatures that can't be charmed are immune to this effect."
		},
		],
		spells: [
			"The Ooze Master is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). It has the following wizard spells prepared:",
			"Cantrips (at will): acid splash, friends, mage hand, poison spray ",
			"1st level (4 slots): charm person, detect magic, magic missile, ray of sickness ",
			"2nd level (3 slots): detect thoughts, Melf's acid arrow, suggestion ",
			"3rd level (3 slots):fear, slow, stinking cloud ",
			"4th level (3 slots): confusion, Evard's evard's black tentacles ",
			"5th level (1 slot): cloudkill."
		]
	},
	"Sea Lion": {
		name: "Sea Lion",
		source: ["Yawning Portal", 242],
		size: "Large",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [15, "Natural Armor", false],
		hp: 90,
		hd: [12, 10],
		speed: "10 ft, swim 40 ft",
		scores: [17, 15, 15, 3, 12, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +5",
		passivePerception: "14",
		challengeRating: "5",
		proficiencyBonus: 3,
		traits: [{
			name: "Amphibious",
			description: "The sea lion can breathe air and water."
		}, {
			name: "Keen Smell",
			description: "The sea lion has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Pack Tactics",
			description: "The sea lion has advantage on an attack roll against a creature if at least one of the sea lion's allies is within 5 feet of the creature and the ally isn't incapacitated."
		}, {
			name: "Swimming Leap",
			description: "With a 10-foot swimming start, the sea lion can long jump out of or across the water up to 25 feet."
		}
		],
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The sea lion makes three attacks: one bite attack and two claw attacks."
		}
		]
	},
	"Sharwyn Hucrele": {
		name: "Sharwyn Hucrele",
		source: ["Yawning Portal", 242],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [16, "", false],
		hp: 13,
		hd: [2, 8],
		speed: "30 ft",
		scores: [11, 13, 14, 16, 14, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +5, Insight +4, Persuasion + 1",
		passivePerception: "12",
		languages: "Common, Draconic, Goblin",
		challengeRating: "1/2",
		proficiencyBonus: 2,
		traits: [{
			name: "Barkskin",
			description: "Sharwyn's AC can't be lower than 16."
		}, {
			name: "Special Equipment",
			description: "Sharwyn has a spell book that contains the spells listed in her Spellcasting trait, plus detect magic and silent image."
		}, {
			name: "Tree Thrall",
			description: "If the Gulthias Tree dies, Sharwyn dies 24 hours later."
		}
		],
		attacks: [{
			name: "Dagger (Melee)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		spells: [
			"Sharwyn is a 1st-level spellcaster. Her spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). She has the following wizard spells prepared:",
			"Cantrips (at will): light, prestidigitation, ray of frost ",
			"1st level (2 slots): color spray, magic missile, shield, sleep."
		]

	},
	"Sir Braford": {
		name: "Sir Braford",
		source: ["Yawning Portal", 243],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [18, "Chain Mail", true],
		hp: 19,
		hd: [3, 8],
		speed: "30 ft",
		scores: [16, 9, 14, 10, 13, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +S, Perception +3",
		passivePerception: "13",
		languages: "Common",
		challengeRating: "1/2",
		proficiencyBonus: 2,
		traits: [{
			name: "Barkskin",
			description: "Sir Braford's AC can't be lower than 16."
		}, {
			name: "Special Equipment",
			description: "Sir Braford wields Shatterspike, a magic longsword that grants a + 1 bonus to attack and damage rolls made with it (included in his attack). See appendix B for the item's other properties."
		}, {
			name: "Tree Thrall",
			description: "If the Gulthias Tree dies, Sir Braford dies 24 hours later."
		}
		],
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Or 9 (1dl0 + 4) slashing damage if used with two hands.",
		},
		],

		reactions: [{
			name: "Protection",
			description: "When a creature Sir Braford can see attacks a target other than him that is within 5 feet of him, he can use a reaction to use his shield to impose disadvantage on the attack roll."
		},
		],
	},
	"Siren": {
		name: "Siren",
		source: ["Yawning Portal", 243],
		size: "Medium",
		type: "fey",
		alignment: "chaotic good",
		ac: [14, "", false],
		hp: 38,
		hd: [7, 8],
		speed: "30 ft, swim 30 ft",
		scores: [10, 18, 12, 13, 14, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Medicine +4, Nature +3, Stealth +6, Survival +4",
		senses: "darkvision 60 ft",
		passivePerception: "12",
		languages: "Common, Elvish, Sylvan",
		challengeRating: "3",
		proficiencyBonus: 2,
		traits: [{
			name: "Amphibious",
			description: "Siren can breathe air and water."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Siren's innate spellcasting ability is Charisma (spell save DC 13). She can innately cast the following spells, requiring no material components:",
				"1/day each: charm person, fog cloud, greater invisibility, polymorph (self only)."
			]
		}, {
			name: "Magic Resistance",
			description: "Siren has advantage on saving throws against spells and other magical effects."
		}
		],
		attacks: [{
			name: "Shortsword",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		actions: [{
			name: "Stupefying Touch",
			description: "Siren touches one creature she can see within 5 feet of her. The creature must succeed on a DC 13 Intelligence saving throw or take 13 (3d6 + 3) psychic damage and be stunned until the start of Siren's next turn."
		}
		],
	},
	"Tarul Var": {
		name: "Tarul Var",
		source: ["Yawning Portal", 244],
		size: "Medium",
		type: "undead",
		alignment: "neutral evil",
		ac: [16, "Natural Armor", false],
		hp: 105,
		hd: [14, 8],
		speed: "30 ft",
		scores: [11, 16, 16, 19, 14, 16],
		saves: ["", "", 8, 9, 7, ""],
		skills: "Arcana +9, History +9, Insight +7, Perception +7",
		damage_resistances: "cold, lightning, necrotic; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "darkvision 60 ft",
		passivePerception: "17",
		languages: "Abyssal, Common, Infernal, Primordial, Thayan",
		challengeRating: "13",
		proficiencyBonus: 5,
		traits: [{
			name: "Undead Nature",
			description: "A lich doesn't require air, food, drink, or sleep."
		}, {
			name: "Focused Conjuration",
			description: "While Var is concentrating on a conjuration spell, his concentration can't be broken as a result of taking damage."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Var fails a saving throw, he can choose to succeed instead ."
		}, {
			name: "Rejuvenation",
			description: "If Var is destroyed but his phylactery remains intact, Var gains a new body in ldlO days, regaining all his hit points and becoming active again. The new body appears within 5 feet of the phylactery."
		}, {

			name: "Turn Resistance",
			description: "Var has advantage on saving throws against any effect that turns undead ."
		}
		],
		attacks: [{
			name: "Paralyzing Touch",
			ability: 4,
			damage: [3, 6, "cold"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		},
		],
		actions: [{
			name: "Benign Transposition",
			description: "Var teleports up to 30 feet to an unoccupied space he can see. Alternatively, he can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, both creatures teleport, swapping places. Var can use this feature again only after he finishes a long rest or casts a conjuration spell of 1st level or higher."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Var can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Var regains spent legendary actions at the start of his turn."
		}, {
			name: "Cantrip",
			description: "Var casts a cantrip."
		}, {
			name: "Paralyzing Touch (Costs 2 Actions)",
			description: "Var uses Paralyzing Touch ."
		}, {
			name: "Frightening Gaze (Costs 2 Actions)",
			description: "Var fixes his gaze on one creature he can see within 10 feet of him . The target must succeed on a DC 17 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to Var's gaze for the next 24 hours."
		}
		],
		spells: [
			"Var is a 12th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). He has the following wizard spells prepared:",
			"Cantrips (at will):.fire bolt, mage hand, minor illusion, prestidigitation, ray of frost ",
			"1st level (4 slots): detect magic, magic missile, shield, unseen servant*",
			"2nd level (3 slots): detect thoughts, flaming sphere,* mirror image, scorching ray ",
			"3rd level (3 slots): counterspell, dispel magic, fireball",
			"4th level (3 slots): dimension door,* Evard's black tentacles*",
			"5th level (3 slots): cloudkill,* scrying ",
			"6th level (1 slot): circle of death ",
			"*Conjuration spell of 1st level or higher."
		]

	},
	"Thayan Warrior": {
		name: "Thayan Warrior",
		source: ["Yawning Portal", 246],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "any non-good alignment",
		ac: [16, "Chain Shirt", true],
		hp: 52,
		hd: [8, 8],
		speed: "30 ft",
		scores: [16, 13, 14, 10, 11, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		passivePerception: "12",
		languages: "Common, Thayan",
		challengeRating: "2",
		proficiencyBonus: 2,
		traits: [{
			name: "Doomvault Devotion",
			description: "Within the Doomvault, the warrior has advantage on saving throws against being charmed or frightened ."
		}, {
			name: "Pack Tactics",
			description: "The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 feet of the creature and the ally isn't incapacitated."
		}
		],
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Or 8 (1dl0 + 3) slashing damage if used with two hands.",
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
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The warrior makes two melee attacks."
		}
		]
	},
	//ThCUZIZTECATL
	//THAYAN APPRENTICE
	"Thorn Slinger": {
		name: "Thorn Slinger",
		source: ["Yawning Portal", 246],
		size: "Large",
		type: "plant",
		alignment: "unaligned",
		ac: [11, "", false],
		hp: 32,
		hd: [5, 10],
		speed: "10 ft",
		scores: [13, 12, 12, 1, 10, 1],
		saves: ["", "", "", "", "", ""],
		condition_immunities: "blinded, deafened, frightened",
		senses: "blindsight 60 ft (blind beyond this radius)",
		passivePerception: "10",
		challengeRating: "1/2",
		proficiencyBonus: 2,
		traits: [{
			name: "Adhesive Blossoms",
			description: "The thorn slinger adheres to anything that touches it. A Medium or smaller creature adhered to the thorn slinger is also grappled by it (escape DC 11). Ability checks made to escape this grapple have disadvantage. At the end of each of the thorn slinger's turns, anything grappled by it takes 3 (1d6) acid damage."
		}, {
			name: "False Appearance",
			description: "While the thorn slinger remains motionless, it is indistinguishable from an inanimate bush."
		}
		],
		attacks: [{
			name: "Thorns (Melee)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Thorns (Ranged)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Ranged (30 ft)",
			description: "",
		},
		],
  
	},
	//TRANSMUTER
	"Vampiric Mist": {
		name: "Vampiric Mist",
		source: ["Yawning Portal", 247],
		size: "Medium",
		type: "undead",
		alignment: "chaotic evil",
		ac: [13, "", false],
		hp: 45,
		hd: [6, 8],
		speed: "0 ft, fly 30 ft (hover)",
		scores: [6, 16, 16, 6, 12, 7],
		saves: ["", "", "", "", 3, ""],
		damage_resistances: "acid, cold, lightning, necrotic, thunder; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "darkvision 60 ft",
		passivePerception: "11",
		challengeRating: "3",
		proficiencyBonus: 2,
		traits: [{
			name: "Undead Nature",
			description: "A vampiric mist doesn't require air or sleep."
		}, {
			name: "Blood Sense",
			description: "The vampiric mist can sense living creatures that have blood or similar vital fluids in a radius of 60 feet ."
		}, {
			name: "Forbiddance",
			description: "The vampiric mist can 't enter a residence without an invitation from one of the occupants."
		}, {
			name: "Misty Form",
			description: "The vampiric mist can occupy another creature's space and vice versa. In addition, if air can pass through a space, the mist can pass through it without squeezing. Each foot of movement in water costs it 2 extra feet, rather than l extra foot. The mist can 't manipulate objects in any way that requires hands; it can apply simple force only."
		}, {
			name: "Sunlight Hypersensitivity",
			description: "The vampiric mist takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, the mist has disadvantage on attack rolls and ability checks."
		}
		],
		actions: [{
			name: "Blood Drain",
			description: "One creature in the vampiric mist's space must make a DC 13 Constitution saving throw (undead and constructs automatically succeed). On a failed save, the target takes 10 (2d6 + 3) necrotic damage, its hit point maximum is reduced by an amount equal to the necrotic damage taken, and the mist regains hit points equal to that amount. This reduction to the target's hit point maximum lasts until the target finishes a long rest. It dies if this effect reduces its hit point maximum to 0."
		},
		],
	},
	"White Maw": {
		name: "White Maw",
		source: ["Yawning Portal", 248],
		size: "Gargantuan",
		type: "ooze",
		alignment: "chaotic neutral",
		ac: [5, "", false],
		hp: 217,
		hd: [14, 12],
		speed: "10 ft",
		scores: [18, 1, 20, 12, 10, 3],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "acid, cold, fire",
		damage_immunities: "poison",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, poisoned, prone",
		senses: "blindsight 60 ft (blind beyond this radius)",
		passivePerception: "10",
		languages: "telepathy 50 ft",
		challengeRating: "10",
		proficiencyBonus: 4,
		traits: [{
			name: "Ooze Nature",
			description: "White Maw doesn't require sleep."
		}, {
			name: "Amorphous Form",
			description: "White Maw can occupy another creature's space and vice versa."
		}, {
			name: "Corrode Metal",
			description: "Any nonmagical weapon made of metal that hits White Maw corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits White Maw is destroyed after dealing damage. White Maw can eat through 2-inch-thick, nonmagical metal in 1 round."
		}, {
			name: "False Appearance",
			description: "While White Maw remains motionless, it is indistinguishable from white stone."
		}, {
			name: "Killer Response",
			description: "Any creature that starts its turn in White Maw's space is targeted by a pseudopod attack if White Maw isn't incapacitated."
		}
		],
		attacks: [{
			name: "Pseudopod",
			ability: 1,
			damage: [4, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Plus 9 (2d8) acid damage. If the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
		},
		],
	},
	"Yusdrayl": {
		name: "Yusdrayl",
		source: ["Yawning Portal", 248],
		size: "Small",
		type: "humanoid (kobold)",
		alignment: "lawful evil",
		ac: [12, "", false],
		hp: 16,
		hd: [3, 6],
		speed: "30 ft",
		scores: [8, 15, 14, 10, 10, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +2, Insight +2, Stealth +4",
		senses: "darkvision 60 ft",
		passivePerception: "10",
		languages: "Common, Draconic",
		challengeRating: "1",
		proficiencyBonus: 1,	 
		traits: [{
			name: "Sunlight Sensitivity",
			description: "While in sunlight, Yusdrayl has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Pack Tactics",
			description: "Yusdrayl has advantage on an attack roll against a creature if at least one of her allies is within 5 feet of the creature and the ally isn't incapacitated."
		}
		],
		attacks: [{
			name: "Dagger",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		spells: [
			"Yusdrayl is a 2nd-level spellcaster. Her spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). She knows the following sorcerer spells:",
			"Cantrips (at will): mage hand, prestidigitation, ray of frost, shocking grasp ",
			"1st level (4 slots): burning hands, chromatic orb, mage armor"
		]
	}
}

