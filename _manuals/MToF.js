var MToF = {
	// 140
	"Abyssal Wretch": {
		name: "Abyssal Wretch",
		source: ["Mordenkainen's Tome of Foes", 136],
		size: "Medium",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [11, "", false],
		hp: 18,
		hd: [4, 8],
		speed: "20 ft",
		scores: [9, 12, 11, 5, 8, 5],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold, fire, lightning",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "9",
		languages: "understands Abyssal but can’t speak",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Adult Kruthik": {
		name: "Adult Kruthik",
		source: ["Mordenkainen's Tome of Foes", 212],
		size: "Medium",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [18, "Natural Armor", false],
		hp: 39,
		hd: [6, 8],
		speed: "40 ft, burrow 20 ft, climb 40 ft",
		scores: [15, 16, 15, 7, 12, 8],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft, tremorsense 60 ft",
		passive_perception: "11",
		languages: "Kruthik",
		challenge_rating: "2",
		attacks: [{
			name: "Stab",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spike",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The kruthik has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Pack Tactics",
			description: "The kruthik has advantage on an attack roll against a creature if at least one of the kruthik's allies is within 5 ft of the creature and the ally isn't incapacitated."
		}, {
			name: "Tunneler",
			description: "The kruthik can burrow through solid rock at half its burrowing speed and leaves a 5-foot-diameter tunnel in its wake."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The kruthik makes two stab attacks or two spike attacks."
		}
		],
	},
	"Adult Oblex": {
		name: "Adult Oblex",
		source: ["Mordenkainen's Tome of Foes", 218],
		size: "Medium",
		type: "ooze",
		alignment: "lawful evil",
		ac: [14, "", false],
		hp: 75,
		hd: [10, 8],
		speed: "20 ft",
		scores: [8, 19, 16, 19, 12, 15],
		saves: ["", "", "", "7", "", "5"],
		skills: "Deception +5, Perception +4, plus one of the following Arcana +7, History +7, Nature +7, or Religion +7",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "blinded, charmed, deafened, exhaustion, prone",
		senses: "blindsight 60 ft (blind beyond this distance)",
		passive_perception: "14",
		languages: "Common plus two more languages",
		challenge_rating: "5",
		attacks: [{
			name: "Pseudopod",
			ability: 2,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 5 (2d4) psychic damage.",
		}
		],
		traits: [{
			name: "Ooze Nature",
			description: "An oblex doesn't require sleep."
		}, {
			name: "Amorphous",
			description: "The oblex can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name: "Aversion to Fire",
			description: "If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The oblexs innate spellcasting ability is Intelligence (spell save DC 15). It can innately cast the following spells, requiring no components:",
				"3/day each: charm person (as 5th-level spell), color spray, detect thoughts, hold person (as 3rd-level spell)."
			]
		}, {
			name: "Sulfurous Impersonation",
			description: "As a bonus action, the oblex can extrude a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate 1d4+1 different creatures, each one tethered to its body by a strand of slime that can extend up to 120 ft away. For all practical purposes, the simulacrum is the oblex, meaning that the oblex occupies its space and the simulacrum's space simultaneously. The slimy tether is immune to damage, but it is severed if there is no opening at least 1 inch wide between the oblex's main body and the simulacrum. The simulacrum disappears if the tether is severed."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The oblex makes one pseudopod attack and uses Eat Memories."
		}, {
			name: "Eat Memories",
			description: [
				"The oblex targets one creature it can see within 5 ft of it. The target must succeed on a DC 15 Wisdom saving throw or take 18 (4d8) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the greater restoration or heal spell. Constructs, oozes, plants, and undead succeed on the save automatically.",
				"While memory drained, the target must roll a d4 and subtract the number rolled from any ability check or attack roll it makes. Each time the target is memory drained beyond the first, the die size increases by one: the d4 becomes a d6, the d6 becomes a d8, and so on until the die becomes a d20, at which point the target becomes unconscious for 1 hour. The effect then ends.",
				"When an oblex causes a target to become memory drained, the oblex learns all the languages the target knows and gains all its proficiencies, except for any saving throw proficiencies.",
			]
		}
		],
	},
	"Air Elemental Myrmidon": {
		name: "Air Elemental Myrmidon",
		source: ["Mordenkainen's Tome of Foes", 202],
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
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "paralyzed, petrified, poisoned, prone",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Auran, one language of its creator's choice",
		challenge_rating: "7",
		attacks: [{
			name: "Flail",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Magic Weapons",
			description: "The myrmidon's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The myrmidon makes three flail attacks."
		}, {
			name: "Lightning Strike (Recharge 6)",
			description: "The myrmidon makes one flail attack. If the attack hits, it deals an extra 18 (4d8) lightning damage, and the target must succeed on a DC 14 Constitution saving throw or be stunned until the end of the myrmidon's next turn.",
		}
		],
	},
	"Alkilith": {
		name: "Alkilith",
		source: ["Mordenkainen's Tome of Foes", 130],
		size: "Medium",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 157,
		hd: [15, 8],
		speed: "40 ft",
		scores: [12, 19, 22, 6, 11, 7],
		saves: ["", "8", "10", "", "", ""],
		skills: "Stealth +8",
		damage_resistances: "acid, cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "understands Abyssal but can’t speak",
		challenge_rating: "11",
		attacks: [{
			name: "Tentacle",
			ability: 2,
			damage: [4, 6, "acid"],
			range: "Melee (15 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amorphous",
			description: "The alkilith can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name: "False Appearance",
			description: "While the alkilith is motionless, it is indistinguishable from an ordinary slime or fungus."
		}, {
			name: "Foment Madness",
			description: [
				"Any creature that isn't a demon that starts its turn within 30 ft of the alkilith must succeed on a DC 18 Wisdom saving throw, or it hears a faint buzzing in its head for a moment and has disadvantage on its next attack roll, saving throw, or ability check.",
				"If the saving throw against Foment Madness fails by 5 or more, the creature is instead subjected to the confusion spell for 1 minute (no concentration required by the alkilith). While under the effect of that confusion, the creature is immune to Foment Madness."
			]
		}, {
			name: "Magic Resistance",
			description: "The alkilith has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The alkilith makes three tentacle attacks."
		}
		],
	},
	"Allip": {
		name: "Allip",
		source: ["Mordenkainen's Tome of Foes", 116],
		size: "Medium",
		type: "undead",
		alignment: "neutral evil",
		ac: [13, "", false],
		hp: 40,
		hd: [9, 8],
		speed: "0 ft, fly 40 ft (hover)",
		scores: [6, 17, 10, 17, 15, 16],
		saves: ["", "", "", "6", "5", ""],
		skills: "Perception +5, Stealth +6",
		damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "cold; necrotic, poison",
		condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "darkvision 60 ft",
		passive_perception: "15",
		languages: "the languages it knew in life",
		challenge_rating: "5",
		attacks: [{
			name: "Maddening Touch",
			ability: 6,
			damage: [4, 6, "psychic"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Undead Nature",
			description: "An allip doesn't require air, food, drink, or sleep."
		}, {
			name: "Incorporeal Movement",
			description: "The allip can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
		}
		],
		actions: [{
			name: "Whispers of Madness",
			description: "The allip chooses up to three creatures it can see within 60 ft of it. Each target must succeed on a DC 14 Wisdom saving throw, or it takes 7 (1d8+3) psychic damage and must use its reaction to make a melee weapon attack against one creature of the allip's choice that the allip can see. Constructs and undead are immune to this effect."
		}, {
			name: "Howling Babble (Recharge 6)",
			description: "Each creature within 30 ft of the allip that can hear it must make a DC 14 Wisdom saving throw. On a failed save, a target takes 12 (2d8+3) psychic damage, and it is stunned until the end of its next turn. On a successful save, it takes half as much damage and isn't stunned. Constructs and undead are immune to this effect.",
		}
		],
	},
	"Amnizu": {
		name: "Amnizu",
		source: ["Mordenkainen's Tome of Foes", 163],
		size: "Medium",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [21, "Natural Armor", false],
		hp: 202,
		hd: [27, 8],
		speed: "30 ft, fly 40 ft",
		scores: [11, 13, 16, 20, 12, 18],
		saves: ["", "7", "9", "", "7", "10"],
		skills: "Perception +7",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered",
		damage_vulnerabilities: "",
		damage_immunities: "fire, poison",
		condition_immunities: "charmed, poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "17",
		languages: "Common, Infernal, telepathy 1,000 ft",
		challenge_rating: "18",
		attacks: [{
			name: "Taskmaster Whip",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (10 ft)",
			modifiers: [5, 5, true],
			description: "Plus 33 (6d10) force damage.",
		}, {
			name: "Disruptive Touch",
			ability: 6,
			damage: [8, 10, "necrotic"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the amnizu's darkvision."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The amnizu's innate spellcasting ability is Intelligence (spell save 19, +11 to hit with spell attacks). The amnizu can innately cast the following spells, requiring no material components:",
				"At will: charm person, command",
				"3/day each: dominate person, fireball",
				"1/day each: dominate monster, feeblemind."
			]
		}, {
			name: "Magic Resistance",
			description: "The amnizu has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The amnizu uses Poison Mind. It also makes two attacks: one with its whip and one with its Disruptive Touch."
		}, {
			name: "Poison Mind",
			description: "The amnizu targets one or two creatures that it can see within 60 ft of it. Each target must succeed on a DC 19 Wisdom saving throw or take 26 (4d12) necrotic damage and be blinded until the start of the amnizu's next turn.",
		}, {
			name: "Forgetfulness (Recharge 6)",
			description: "The amnizu targets one creature it can see within 60 ft of it. That creature must succeed on a DC 18 Intelligence saving throw or become stunned for 1 minute. A stunned creature repeats the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target is stunned for the full minute, it forgets everything it sensed, experienced, and learned during the last 5 hours.",
		}, {
			name: "Variant: Summon Devil (1/Day)",
			description: "The amnizu summons 2d4 bearded devils or 1d4 barbed devils. A summoned devil appears in an unoccupied space within 60 ft of the amnizu, acts as an ally of the amnizu, and can't summon other devils. It remains for 1 minute, until the amnizu dies, or until its summoner dismisses it as an action."
		}
		],
		reactions: [{
			name: "Instinctive Charm",
			description: "When a creature within 60 ft of the amnizu makes an attack roll against it, and another creature is within the attack's range, the attacker must make a DC 19 Wisdom saving throw. On a failed save, the attacker must target the creature that is closest to it, not including the amnizu or itself. If multiple creatures are closest, the attacker chooses which one to target. If the saving throw is successful, the attacker is immune to the amnizu's Instinctive Charm for 24 hours.",
		}
		],
	},
	"Armanite": {
		name: "Armanite",
		source: ["Mordenkainen's Tome of Foes", 130],
		size: "Large",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [16, "Natural Armor", false],
		hp: 84,
		hd: [8, 10],
		speed: "60 ft",
		scores: [21, 18, 21, 8, 12, 13],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold, fire, lightning",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "11",
		languages: "Abyssal, telepathy 120 ft",
		challenge_rating: "7",
		attacks: [{
			name: "Hooves",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Serrated Tail",
			ability: 1,
			damage: [2, 10, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The armanite has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The armanite's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The armanite makes three attacks: one with its hooves, one with its claws, and one with its serrated tail."
		}, {
			name: "Lightning Lance (Recharge 5-6)",
			description: "The armanite looses a bolt of lightning in a line 60 ft long and 10 ft wide. Each creature in the line must make a DC 15 Dexterity saving throw, taking 27 (6d8) lightning damage on a failed save, or half as much damage on a successful one."
		}
		],
	},
	"Astral Dreadnought": {
		name: "Astral Dreadnought",
		source: ["Mordenkainen's Tome of Foes", 117],
		size: "Giant",
		type: "monstrosity (titan)",
		alignment: "unaligned",
		ac: [20, "Natural Armor", false],
		hp: 297,
		hd: [17, 20],
		speed: "15 ft, fly 80 ft (hover)",
		scores: [28, 7, 25, 5, 14, 18],
		saves: ["", "5", "", "", "9", ""],
		skills: "Perception +9",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned, prone, stunned",
		senses: "darkvision 120 ft",
		passive_perception: "19",
		languages: "",
		challenge_rating: "21",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [5, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "If the target is a creature of Huge size or smaller and this damage reduces it to 0 hit points or it is incapacitated, the astral dreadnought swallows it. The swallowed target, along with everything it is wearing and carrying, appears in an unoccupied space on the floor of the astral dreadnought's Demiplanar Donjon.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [3, 6, "slashing"],
			range: "Melee (20 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Titanic Nature",
			description: "Although it eats and sleeps if it so desires, an astral dreadnought doesn’t require air, food, drink, or sleep."
		}, {
			name: "Antimagic Cone",
			description: "The astral dreadnought's opened eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the dreadnought decides which way the cone faces. The cone doesn't function while the dreadnought's eye is closed or while the dreadnought is blinded."
		}, {
			name: "Astral Entity",
			description: "The astral dreadnought can't leave the Astral Plane, nor can it be banished or otherwise transported out of the Astral Plane."
		}, {
			name: "Demiplanar Donjon",
			description: "Any creature or object that the astral dreadnought swallows is transported to a demiplane that can be entered by no other means except a wish spell or this creature's Donjon Visit ability. A creature can leave the demiplane only by using magic that enables planar travel, such as the plane shift spell. The demiplane resembles a stone cave roughly 1,000 ft in diameter with a ceiling 100 ft high. Like a stomach, it contains the remains of the dreadnought's past meals. The dreadnought can't be harmed from within the demiplane. If the dreadnought dies, the demiplane disappears, and everything inside it appears around the corpse. The demiplane is otherwise indestructible."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the astral dreadnought fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Magic Weapons",
			description: "An astral dreadnought's weapon attacks are magical."
		}, {
			name: "Sever Silver Cord",
			description: "If the astral dreadnought scores a critical hit against a creature traveling through the Astral Plane by means of the astral projection spell, the dreadnought can cut the target's silver cord instead of dealing damage."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The astral dreadnought makes three attacks: one with its bite and two with its claws."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The astral dreadnought can take 3 legendary actions, choosing from the options below. Only one legendary option can be used at a time and only at the end of another creature's turn. The dreadnought regains spent legendary actions at the start of its turn."
		}, {
			name: "Claw",
			description: "The astral dreadnought makes one claw attack."
		}, {
			name: "Donjon Visit (Costs 2 Actions)",
			description: "One creature that is Huge or smaller that the astral dreadnought can see within 60 ft of it must succeed on a DC 19 Charisma saving throw or be magically teleported to an unoccupied space on the floor of the astral dreadnought's Demiplanar Donjon. At the end of the target's next turn, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied."
		}, {
			name: "Psychic Projection (Costs 3 Actions)",
			description: "Each creature within 60 ft of the astral dreadnought must make a DC 19 Wisdom saving throw, taking 15 (2d10+4) psychic damage on a failed save, or half as much damage on a successful one."
		}
		],
	},
	"Autumn Eladrin": {
		name: "Autumn Eladrin",
		source: ["Mordenkainen's Tome of Foes", 195],
		size: "Medium",
		type: "fey (elf)",
		alignment: "chaotic neutral",
		ac: [19, "Natural Armor", false],
		hp: 127,
		hd: [17, 8],
		speed: "30 ft",
		scores: [12, 16, 16, 14, 17, 18],
		saves: ["", "", "", "", "", ""],
		skills: "Insight +7, Medicine +7",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Common, Elvish, Sylvan",
		challenge_rating: "10",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 18 (4d8) psychic damage; Two-Handed: 6 (1d10+1) slashing damage. ",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "Plus 18 (4d8) psychic damage.",
		}
		],
		traits: [{
			name: "Enchanting Presence",
			description: [
				"Any non-eladrin creature that starts its turn within 60 ft of the eladrin must make a DC 16 Wisdom saving throw. On a failed save, the creature becomes charmed by the eladrin for 1 minute. On a successful save, the creature becomes immune to any eladrin's Enchanting Presence for 24 hours.",
				"Whenever the eladrin deals damage to the charmed creature, the creature can repeat the saving throw, ending the effect on itself on a success.",
			]
		}, {
			name: "Fey Step (Recharge 4-6)",
			description: "As a bonus action, the eladrin can teleport up to 30 ft to an unoccupied space it can see."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The eladrin's innate spellcasting ability is Charisma (spell save DC 16). It can innately cast the following spells, requiring no material components:",
				"At will: calm emotions, sleep",
				"3/day each: cure wounds (as a 5th-level spell), lesser restoration",
				"1/day each: greater restoration, heal, raise dead."
			]
		}, {
			name: "Magic Resistance",
			description: "The eladrin has advantage on saving throws against spells and other magical effects."
		}
		],
		reactions: [{
			name: "Foster Peace",
			description: "If a creature charmed by the eladrin hits with an attack roll while within 60 ft of the eladrin, the eladrin magically causes the attack to miss, provided the eladrin can see the attacker.",
		}
		],
	},
	"Bael": {
		name: "Bael",
		source: ["Mordenkainen's Tome of Foes", 170],
		size: "Large",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [18, "Plate", false],
		hp: 189,
		hd: [18, 10],
		speed: "30 ft",
		scores: [24, 17, 20, 21, 24, 24],
		saves: ["", "9", "11", "11", "", "13"],
		skills: "Intimidation +13, Perception +13, Persuasion +13",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t silvered",
		damage_vulnerabilities: "",
		damage_immunities: "fire, poison",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "23",
		languages: "all, telepathy 120 ft",
		challenge_rating: "19",
		attacks: [{
			name: "Hellish Morningstar",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (20 ft)",
			description: "Plus 13 (3d8) necrotic damage.",
		}
		],
		traits: [{
			name: "Dreadful",
			description: "Bael can use a bonus action to appear dreadful until the start of his next turn. Each creature, other than a devil, that starts its turn within 10 ft of Bael must succeed on a DC 22 Wisdom saving throw or be frightened until the start of the creature's next turn.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"Bael's innate spellcasting ability is Charisma (spell save DC 21, +13 to hit with spell attacks). He can innately cast the following spells, requiring no material components:",
				"At will: alter self (can become Medium when changing his appearance), animate dead, charm person, detect magic, inflict wounds (as an 8th-level spell), invisibility (self only), major image",
				"3/day each: counterspell, dispel magic, fly, suggestion, wall of fire",
				"1/day each: dominate monster, symbol (stunning only)."
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Bael fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Bael has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "Bael's weapon attacks are magical."
		}, {
			name: "Regeneration",
			description: "Bael regains 20 hit points at the start of his turn. If he takes cold or radiant damage, this trait doesn't function at the start of his next turn. Bael dies only if he starts his turn with 0 hit points and doesn't regenerate."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Bael makes two melee attacks."
		}, {
			name: "Infernal Command",
			description: "Each ally of Bael's within 60 ft of him can't be charmed or frightened until the end of his next turn."
		}, {
			name: "Teleport",
			description: "Bael magically teleports, along with any equipment he is wearing and carrying, up to 120 ft to an unoccupied space he can see."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Bael can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Bael regains spent legendary actions at the start of his turn."
		}, {
			name: "Attack (Costs 2 Actions)",
			description: "Bael attacks once with his hellish morningstar."
		}, {
			name: "Awaken Greed",
			description: "Bael casts charm person or major image."
		}, {
			name: "Infernal Command",
			description: "Bael uses his Infernal Command action."
		}, {
			name: "Teleport",
			description: "Bael uses his Teleport action."
		}
		],
	},
	"Balhannoth": {
		name: "Balhannoth",
		source: ["Mordenkainen's Tome of Foes", 118],
		size: "Large",
		type: "aberration",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 114,
		hd: [12, 10],
		speed: "25 ft, climb 25 ft",
		scores: [17, 8, 18, 6, 15, 8],
		saves: ["", "", "8", "", "", ""],
		skills: "Perception +6",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "blinded",
		senses: "blindsight 500 ft (blind beyond this radius)",
		passive_perception: "16",
		languages: "understands Deep Speech, telepathy 1 mile",
		challenge_rating: "11",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tentacle",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Target is grappled (escape DC 15) and is moved up to 5 ft toward the balhannoth. Until this grapple ends, the target is restrained, and the balhannoth can't use this tentacle against other targets. The balhannoth has four tentacles.",
		}
		],
		traits: [{
			name: "Legendary Resistance (2/Day)",
			description: "If the balhannoth fails a saving throw, it can choose to succeed instead."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The balhannoth makes a bite attack and up to two tentacle attacks, or it makes up to four tentacle attacks."
		}, {
			name: "Lair Actions",
			description: [
				"When fighting inside its lair, a balhannoth can use lair actions. On initiative count 20 (losing initiative ties), a balhannoth can take one lair action to cause one of the following effects; the balhannoth can't use the same lair action two rounds in a row:",
				"The balhannoth warps reality around it in an area up to 500 ft square. After 10 minutes, the terrain in the area reshapes to assume the appearance of a location sought by one intelligent creature whose mind the balhannoth has read (see Regional Effects below). The transformation affects nonliving material only and can't create anything with moving parts or magical properties. Any object created in this area is, upon close inspection, revealed as a fake. Books are filled with empty pages, golden items are obvious counterfeits, and so on. The transformation lasts until the balhannoth dies or uses this lair action again.",
				"The balhannoth targets one creature within 500 ft of it. The target must succeed on a DC 16 Wisdom saving throw or the target, along with whatever it is wearing and carrying, teleports to an unoccupied space of the balhannoth's choice within 60 ft of it.",
				"The balhannoth targets one creature within 500 ft of it. The target must succeed on a DC 16 Wisdom saving throw or the balhannoth becomes invisible to that creature for 1 minute. This effect ends if the balhannoth attacks the target.",
			]
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The balhannoth can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The balhannoth regains spent legendary actions at the start of its turn."
		}, {
			name: "Bite Attack",
			description: "The balhannoth makes one bite attack against one creature it has grappled."
		}, {
			name: "Teleport",
			description: "The balhannoth magically teleports, along with any equipment it is wearing or carrying and any creatures it has grappled, up to 60 ft to an unoccupied space it can see."
		}, {
			name: "Vanish",
			description: "The balhannoth magically becomes invisible for up to 10 minutes or until immediately after it makes an attack roll."
		}
		],
	},
	"Baphomet": {
		name: "Baphomet",
		source: ["Mordenkainen's Tome of Foes", 143],
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
		damage_vulnerabilities: "",
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
			description: "If Baphomet moves at least 10 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 22 (4d10) piercing damage. If the target is a creature, it must succeed on a DC 25 Strength saving throw or be pushed up to 10 ft away and knocked prone.",
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
			description: "Baphomet has advantage on saving throws against spells and other magic effects."
		}, {
			name: "Magic Weapon",
			description: "Baphomet's weapon attacks are magical."
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
			description: [
				"Each creature of Baphomet's choice within 120 ft of him and aware of him must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. These later saves have disadvantage if Baphomet is within line of sight of the creature.",
				"If a creature succeeds on any of these saves or the effect ends on it, the creature is immune is Baphomet's Frightful Presence for the next 24 hours.",
			]
		}, {
			name: "Lair Actions",
			description: [
				"On initiative count 20 (losing initiative ties), Baphomet can take a lair action to cause one of the following magical effects; he can't use the same effect two rounds in a row:",
				"Baphomet seals one doorway or other entryway within the lair. The opening must be unoccupied. It is filled with solid stone for 1 minute or until Baphomet creates this effect again.",
				"Baphomet chooses a room within the lair that is no larger in any dimension than 100 ft. Until the next initiative count 20, gravity is reversed within that room. Any creatures or objects in the room when this happens fall in the direction of the new pull of gravity, unless they have some means of remaining aloft Baphomet can ignore the gravity reversal if he's in the room, although he likes to use this action to land on a ceiling to attack targets flying near it.",
				"Baphomet casts mirage arcane, affecting a room within the lair that is no larger in any dimension than 100 ft. The effect ends on the next initiative count 20."
			]
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Baphomet can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Baphomet regains spent legendary actions at the start of his turn."
		}, {
			name: "Heartcleaver Attack",
			description: "Baphomet makes a melee attack with Heartcleaver.",
		}, {
			name: "Charge (Costs 2 Actions)",
			description: "Baphomet moves up to his speed, then makes a gore attack.",
		}
		],
	},
	"Berbalang": {
		name: "Berbalang",
		source: ["Mordenkainen's Tome of Foes", 120],
		size: "Medium",
		type: "aberration",
		alignment: "neutral evil",
		ac: [14, "Natural Armor", false],
		hp: 38,
		hd: [11, 8],
		speed: "30 ft, fly 40 ft",
		scores: [9, 16, 9, 17, 11, 10],
		saves: ["", "5", "", "5", "", ""],
		skills: "Arcana +5, History +5, Insight +2, Perception +2, Religion +5",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "truesight 120 ft",
		passive_perception: "12",
		languages: "all, but rarely speaks",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 2,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Spectral Duplicate (Recharges after a Short or Long Rest)",
			description: "As a bonus action, the berbalang creates one spectral duplicate of itself in an unoccupied space it can see within 60 ft of it. While the duplicate exists, the berbalang is unconscious. A berbalang can have only one duplicate at a time. The duplicate disappears when it or the berbalang drops to 0 hit points or when the berbalang dismisses it (no action required). The duplicate has the same statistics and knowledge as the berbalang, and everything experienced by the duplicate is known by the berbalang. All damage dealt by the duplicate's attacks is psychic damage.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The berbalang's innate spellcasting ability is Intelligence (spell save DC 13). The berbalang can innately cast the following spells, requiring no material components:",
				"At will: speak with dead",
				"1/day each: plane shift (self only)"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The berbalang makes two attacks: one with its bite and one with its claws."
		}
		],
	},
	"Black Abishai": {
		name: "Black Abishai",
		source: ["Mordenkainen's Tome of Foes", 160],
		size: "Medium",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [15, "Natural Armor", false],
		hp: 58,
		hd: [9, 8],
		speed: "30 ft, fly 40 ft",
		scores: [14, 17, 14, 13, 16, 11],
		saves: ["", "6", "", "", "6", ""],
		skills: "Perception +6, Stealth +6",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered",
		damage_vulnerabilities: "",
		damage_immunities: "acid, fire, poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "16",
		languages: "Draconic, Infernal, telepathy 120 ft",
		challenge_rating: "7",
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Bite",
			ability: 2,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 9 (2d8) acid damage.",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the abishai's darkvision."
		}, {
			name: "Magic Resistance",
			description: "The abishai has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The abishai's weapon attacks are magical."
		}, {
			name: "Shadow Stealth",
			description: "While in dim light or darkness, the abishai can take the Hide action as a bonus action."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The abishai makes three attacks: two with its scimitar and one with its bite."
		}, {
			name: "Creeping Darkness (Recharge 6)",
			description: "The abishai casts darkness at a point within 120 ft of it, requiring no components. Wisdom is its spellcasting ability for this spell. While the spell persists, the abishai can move the area of darkness up to 60 ft as a bonus action."
		}
		],
	},
	"Blue Abishai": {
		name: "Blue Abishai",
		source: ["Mordenkainen's Tome of Foes", 161],
		size: "Medium",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [19, "Natural Armor", false],
		hp: 195,
		hd: [26, 8],
		speed: "30 ft, fly 50 ft",
		scores: [15, 14, 17, 22, 23, 18],
		saves: ["", "", "", "12", "12", ""],
		skills: "Arcana +12",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered",
		damage_vulnerabilities: "",
		damage_immunities: "fire, lightning, poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "16",
		languages: "Draconic, Infernal, telepathy 120 ft",
		challenge_rating: "17",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed 6 (1d8+2) bludgeoning damage.",
		}, {
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 14 (4d6) lightning damage.",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the abishai's darkvision."
		}, {
			name: "Magic Resistance",
			description: "The abishai has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The abishai's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The abishai makes two attacks: one with its quarterstaff and one with its bite."
		}
		],
		spells: [
			"The abishai is a 13th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The abishai has the following wizard spells prepared:",
			"Cantrips (at will): friends, mage hand, message, minor illusion, shocking grasp",
			"1st level (4 slots): chromatic orb, disguise self, expeditious retreat, magic missile, charm person, thunderwave",
			"2nd level (3 slots): darkness, mirror image, misty step",
			"3rd level (3 slots): dispel magic, fear, lightning bolt",
			"4th level (3 slots): dimension door, greater invisibility, ice storm",
			"5th level (2 slots): cone of cold, wall of force",
			"6th level (1 slot): chain lightning",
			"7th level (1 slot): teleport"
		]
	},
	"Boneclaw": {
		name: "Boneclaw",
		source: ["Mordenkainen's Tome of Foes", 121],
		size: "Large",
		type: "undead",
		alignment: "chaotic evil",
		ac: [16, "Natural Armor", false],
		hp: 127,
		hd: [17, 10],
		speed: "40 ft",
		scores: [19, 16, 15, 13, 15, 9],
		saves: ["", "7", "6", "", "6", ""],
		skills: "Perception +6, Stealth +7",
		damage_resistances: "cold, necrotic; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "16",
		languages: "Common plus the main language of its master",
		challenge_rating: "12",
		attacks: [{
			name: "Piercing Claw",
			ability: 1,
			damage: [3, 10, "piercing"],
			range: "Melee (15 ft)",
			description: "If the target is a creature, the boneclaw can pull the target up to 10 ft toward itself, and the target is grappled (escape DC 14). The boneclaw has two claws. While a claw grapples a target, the claw can attack only that target.",
		}
		],
		traits: [{
			name: "Undead Nature",
			description: "A boneclaw doesn’t require air, food, drink, or sleep."
		}, {
			name: "Rejuvenation",
			description: "While its master lives, a destroyed boneclaw gains a new body in 1d10 hours, with all its hit points. The new body appears within 1 mile of the boneclaw's master."
		}, {
			name: "Shadow Stealth",
			description: "While in dim light or darkness, the boneclaw can take the Hide action as a bonus action."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The boneclaw makes two claw attacks."
		}, {
			name: "Shadow Jump",
			description: [
				"If the boneclaw is in dim light or darkness, each creature of the boneclaw's choice within 5 ft of it must succeed on a DC 14 Constitution saving throw or take 34 (5d12+2) necrotic damage.",
				"The boneclaw then magically teleports up to 60 ft to an unoccupied space it can see. It can bring one creature it's grappling, teleporting that creature to an unoccupied space it can see within 5 ft of its destination. The destination spaces of this teleportation must be in dim light or darkness."
			]
		}
		],
		reactions: [{
			name: "Deadly Reach",
			description: "In response to a visible enemy moving into its reach, the boneclaw makes one claw attack against that enemy. If the attack hits, the boneclaw can make a second claw attack against the target.",
		}
		],
	},
	"Bronze Scout": {
		name: "Bronze Scout",
		source: ["Mordenkainen's Tome of Foes", 125],
		size: "Medium",
		type: "construct",
		alignment: "unaligned",
		ac: [13, "", false],
		hp: 18,
		hd: [4, 8],
		speed: "30 ft, burrow 30 ft",
		scores: [10, 16, 11, 3, 14, 1],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +6, Stealth +7",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "poison; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t adamantine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "16",
		languages: "understands one language of its creator but can’t speak",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) lightning damage.",
		}
		],
		traits: [{
			name: "Constructed Nature",
			description: "A clockwork doesn't require air, food, drink, or sleep."
		}, {
			name: "Earth Armor",
			description: "The bronze scout doesn't provoke opportunity attacks when it burrows."
		}, {
			name: "Magic Resistance",
			description: "The bronze scout has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Individual Designs",
			description: [
				"A gnome artisan values an individualized clockwork more highly than a perfectly functioning one that copies too much from another creation. For that reason, even clockworks that fit established designs, such as those described here, are seldom identical.",
				"A clockwork can be customized by adding one of the following enhancements and one potential malfunction to its stat block. You can select randomly or choose a pair of modifications that fit the temperament of the clockwork's builder.",
				"d10: Enhancement:",
				"1: Camouflaged. The clockwork gains proficiency in Stealth if it doesn't already have it. While motionless, it is indistinguishable from a stopped machine.",
				"2: Sensors. The range of the clockwork's darkvision becomes 120 ft, unless it is higher, and it gains proficiency in Perception if it doesn't already have it.",
				"3: Improved Armor. The clockwork's AC increases by 2.",
				"4: Increased Speed. The clockwork's speed increases by 10 ft.",
				"5: Reinforced Construction. The clockwork has resistance to force, lightning, and thunder damage.",
				"6: Self-Repairing. If the clockwork starts its turn with at least 1 hit point, it regains 5 hit points. If it takes lightning damage, this ability doesn't function at the start of its next turn.",
				"7: Sturdy Frame. The clockwork's hit point maximum increases by an amount equal to its number of Hit Dice.",
				"8: Suction. The clockwork gains a climbing speed of 30 ft.",
				"9: Vocal Resonator. The clockwork gains the ability to speak rudimentary Common or Gnomish (creator's choice).",
				"10: Water Propulsion. The clockwork gains a swimming speed of 30 ft.",
				"Clockwork Malfunctions:",
				"d10: Malfunction",
				"1: Faulty Sensors. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork is blinded until the end of its turn.",
				"2: Flawed Targeting. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork makes attack rolls with disadvantage until the end of its turn.",
				"3: Ground Fault. The clockwork has vulnerability to lightning damage.",
				"4: Imprinting Loop. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork mistakes one creature it can see within 30 ft for its creator. The clockwork won't willingly harm that creature for 1 minute or until that creature attacks it or deals damage to it.",
				"5: Leaking Lubricant. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork gains 1 level of exhaustion that it isn't immune to.",
				"6: Limited Steering. The clockwork must move in a straight line. It can turn up to 90 degrees before moving and again at the midpoint of its movement. It can rotate freely if it doesn't use any of its speeds on its turn.",
				"7: Overactive Sense of Self-Preservation. If the clockwork has half its hit points or fewer at the start of its turn in combat, roll a d6. If you roll a 1, it retreats from combat. If retreat isn't possible, it continues fighting.",
				"8: Overheats. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork is incapacitated until the end of its turn.",
				"9: Rusty Gears. The clockwork has disadvantage on initiative rolls, and its speed decreases by 10 ft.",
				"10: Weak Armor. The clockwork isn't immune to bludgeoning, piercing, and slashing damage from nonmagical attacks that aren't adamantine."
			]
		}
		],
		actions: [{
			name: "Lightning Flare (Recharges after a Short or Long Rest)",
			description: "Each creature in contact with the ground within 15 ft of the bronze scout must make a DC 13 Dexterity saving throw, taking 14 (4d6) lightning damage on a failed save, or half as much damage on a successful one."
		}
		],
	},
	"Bulezau": {
		name: "Bulezau",
		source: ["Mordenkainen's Tome of Foes", 131],
		size: "Medium",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [14, "Natural Armor", false],
		hp: 52,
		hd: [7, 8],
		speed: "40 ft",
		scores: [15, 14, 17, 8, 9, 6],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold, fire, lightning",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "9",
		languages: "Abyssal, telepathy 60 ft",
		challenge_rating: "3",
		attacks: [{
			name: "Barbed Tail",
			ability: 1,
			damage: [1, 12, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, it must succeed on a DC 13 Constitution saving throw against disease or become poisoned until the disease ends. While poisoned in this way, the target sports festering boils, coughs up flies, and sheds rotting skin, and the target must repeat the saving throw after every 24 hours that elapse. On a successful save, the disease ends. On a failed save, the target's hit point maximum is reduced by 4 (1d8). The target dies if its hit point maximum is reduced to 0.",
		}
		],
		traits: [{
			name: "Rotting Presence",
			description: "When any creature that isn't a demon starts its turn within 30 ft one or more bulezaus, that creature must succeed on a DC 13 Constitution saving throw or take 1d6 necrotic damage plus 1 necrotic damage for each bulezau within 30 ft of it."
		}, {
			name: "Standing Leap",
			description: "The bulezau's long jump is up to 20 ft and its high jump is up to 10 ft, with or without a running start."
		}, {
			name: "Sure-Footed",
			description: "The bulezau has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
		}
		],
	},
	"Cadaver Collector": {
		name: "Cadaver Collector",
		source: ["Mordenkainen's Tome of Foes", 122],
		size: "Large",
		type: "construct",
		alignment: "lawful evil",
		ac: [17, "Natural Armor", false],
		hp: 189,
		hd: [18, 10],
		speed: "30 ft",
		scores: [21, 14, 20, 5, 11, 8],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "necrotic, poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamatine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "understands all languages but can't speak",
		challenge_rating: "14",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 16 (3d10) necrotic damage.",
		}
		],
		traits: [{
			name: "Constructed Nature",
			description: "A cadaver collector doesn't require air, food, drink, or sleep."
		}, {
			name: "Magic Resistance",
			description: "The cadaver collector has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Summon Specters (Recharges after a Short or Long Rest)",
			description: "As a bonus action, the cadaver collector calls up the enslaved spirits of those it has slain; 1d6 specters (without Sunlight Sensitivity) arise in unoccupied spaces within 15 ft of the cadaver collector. The specters act right after the cadaver collector on the same initiative count and fight until they're destroyed. They disappear when the cadaver collector is destroyed."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The cadaver collector makes two slam attacks."
		}, {
			name: "Paralyzing Breath (Recharge 5-6)",
			description: "The cadaver collector releases paralyzing gas in a 30-foot cone. Each creature in that area must make a successful DC 18 Constitution saving throw or be paralyzed for 1 minute. A paralyzed creature repeats the saving throw at the end of each of its turns, ending the effect on itself with a success.",
		}
		],
	},
	"Canoloth": {
		name: "Canoloth",
		source: ["Mordenkainen's Tome of Foes", 247],
		size: "Medium",
		type: "fiend (yugoloth)",
		alignment: "neutral evil",
		ac: [16, "Natural Armor", false],
		hp: 120,
		hd: [16, 8],
		speed: "50 ft",
		scores: [18, 10, 17, 5, 17, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Investigation +3, Perception +9",
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "acid, poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft, truesight 120 ft",
		passive_perception: "19",
		languages: "Abyssal, Infernal, telepathy 60 ft",
		challenge_rating: "8",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [6, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 10, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tongue",
			ability: 1,
			damage: [2, 12, "piercing"],
			range: "Ranged (30 ft)",
			description: "If the target is Medium or smaller, it is grappled (escape DC 15), pulled up to 30 ft toward the canoloth, and restrained until the grapple ends. The canoloth can grapple one target at a time with its tongue.",
		}
		],
		traits: [{
			name: "Dimensional Lock",
			description: "Other creatures can't teleport to or from a space within 60 ft of the canoloth. Any attempt to do so is wasted."
		}, {
			name: "Magic Resistance",
			description: "The canoloth has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The canoloth's weapon attacks are magical."
		}, {
			name: "Uncanny Senses",
			description: "The canoloth can't be surprised while it isn't incapacitated."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The canoloth makes two attacks: one with its tongue or its bite and one with its claws."
		}
		],
	},
	"Choker": {
		name: "Choker",
		source: ["Mordenkainen's Tome of Foes", 123],
		size: "Small",
		type: "aberration",
		alignment: "chaotic evil",
		ac: [16, "Natural Armor", false],
		hp: 13,
		hd: [3, 6],
		speed: "30 ft",
		scores: [16, 14, 13, 4, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +6",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Deep Speech",
		challenge_rating: "1",
		attacks: [{
			name: "Tentacle",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Plus 3 (1d6) piercing damage. If the target is a Large or smaller creature, it is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the choker can't use this tentacle on another target (the choker has two tentacles). If this attack is a critical hit, the target also can't breathe or speak until the grapple ends .",
		}
		],
		traits: [{
			name: "Aberrant Quickness (Recharge after a Short or Long Rest)",
			description: "The choker can take an extra action on its turn."
		}, {
			name: "Spider Climb",
			description: "The choker can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The choker makes two tentacle attacks."
		}
		],
	},
	"Corpse Flower": {
		name: "Corpse Flower",
		source: ["Mordenkainen's Tome of Foes", 127],
		size: "Large",
		type: "plant",
		alignment: "chaotic evil",
		ac: [12, "", false],
		hp: 127,
		hd: [15, 10],
		speed: "20 ft, climb 20 ft",
		scores: [14, 14, 16, 7, 15, 3],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "blinded, deafened",
		senses: "blindsight 120 ft (blind beyond this radius)",
		passive_perception: "12",
		languages: "",
		challenge_rating: "8",
		attacks: [{
			name: "Tentacle",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Target must succeed on a DC 14 Constitution saving throw or take 14 (4d6) poison damage.",
		}
		],
		traits: [{
			name: "Corpses",
			description: [
				"When first encountered, a corpse flower contains the corpses of 1d6+3 humanoids. A corpse flower can hold the remains of up to nine dead humanoids. These remains have total cover against attacks and other effects outside the corpse flower. If the corpse flower dies, the corpses within it can be pulled free.",
				"While it has at least one humanoid corpse in its body, the corpse flower can use a bonus action to do one of the following:",
				"The corpse flower digests one humanoid corpse in its body and instantly regains 11 (2d10) hit points. Nothing of the digested body remains. Any equipment on the corpse is expelled from the corpse flower in its space.",
				"The corpse flower animates one dead humanoid in its body, turning it into a zombie. The zombie appears in an unoccupied space within 5 ft of the corpse flower and acts immediately after it in the initiative order. The zombie acts as an ally of the corpse flower but isn't under its control, and the flower's stench clings to it (see the Stench of Death trait)."
			]
		}, {
			name: "Spider Climb",
			description: "The corpse flower can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Stench of Death",
			description: "Each creature that starts its turn within 10 ft of the corpse flower or one of its zombies must make a DC 14 Constitution saving throw, unless the creature is a construct or undead. On a failed save, the creature is incapacitated until the end of the turn. Creatures that are immune to poison damage or the poisoned condition automatically succeed on this saving throw. On a successful save, the creature is immune to the stench of all corpse flowers for 24 hours.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The corpse flower makes three tentacle attacks."
		}, {
			name: "Harvest the Dead",
			description: "The corpse flower grabs one unsecured dead humanoid within 10 ft of it and stuffs the corpse into itself, along with any equipment the corpse is wearing or carrying. The remains can be used with the Corpses trait."
		}
		],
	},
	"Deathlock": {
		name: "Deathlock",
		source: ["Mordenkainen's Tome of Foes", 128],
		size: "Medium",
		type: "undead",
		alignment: "neutral evil",
		ac: [12, "", false],
		hp: 36,
		hd: [8, 8],
		speed: "30 ft",
		scores: [11, 15, 10, 14, 12, 16],
		saves: ["", "", "", "4", "", "5"],
		skills: "Arcana +4, History +4",
		damage_resistances: "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t silvered",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "the languages it knew in life",
		challenge_rating: "4",
		attacks: [{
			name: "Deathly Claw",
			ability: 1,
			damage: [2, 6, "necrotic"],
			range: "Melee (5 ft)",
			modifiers: [2, 2, true],
			description: "",
		}
		],
		traits: [{
			name: "Undead Nature",
			description: "A deathlock doesn't require air, food, drink, or sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The deathlock's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no material components:",
				"At will: detect magic, disguise self, mage armor."
			]
		}, {
			name: "Turn Resistance",
			description: "The deathlock has advantage on saving throws against any effect that turns undead."
		}, {
			name: "Variant: Patron-Specific Spells",
			description: [
				"You can customize a deathlock by replacing some or all of the spells in its Spellcasting trait with spells specific to its patron. Here are examples.",
				"Archfey patron: blink, faerie fire, hunger of Hadar, hypnotic pattern, phantasmal force, sleep",
				"Fiend patron: blindness/deafness, burning hands, command, fireball, hellish rebuke, scorching ray",
				"Great Old One patron: armor of Agathys, detect thoughts, dissonant whispers, hunger of Hadar, Tasha's tasha's hideous laughter, phantasmal force"
			]
		}
		],
		spells: [
			"The deathlock is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:",
			"Cantrips (at will): chill touch, eldritch blast, mage hand",
			"3rd level (2 slots): arms of Hadar, dispel magic, hold person, hunger of Hadar, invisibility, spider climb."
		]
	},
	"Deathlock Mastermind": {
		name: "Deathlock Mastermind",
		source: ["Mordenkainen's Tome of Foes", 129],
		size: "Medium",
		type: "undead",
		alignment: "neutral evil",
		ac: [13, "", false],
		hp: 110,
		hd: [20, 8],
		speed: "30 ft",
		scores: [11, 16, 12, 15, 12, 17],
		saves: ["", "", "", "5", "", "6"],
		skills: "Arcana +5, History +5, Perception +4",
		damage_resistances: "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t silvered",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, poisoned",
		senses: "darkvision 120 ft (including magical darkness)",
		passive_perception: "14",
		languages: "the languages it knew in life",
		challenge_rating: "8",
		attacks: [{
			name: "Deathly Claw",
			ability: 2,
			damage: [3, 6, "necrotic"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Grave Bolts",
			ability: 4,
			damage: [4, 8, "necrotic"],
			range: "Ranged (120 ft)",
			modifiers: [1, "", false],
			description: "If the target is Large or smaller, it must succeed on a DC 16 Strength saving throw or become restrained as shadowy tendrils wrap around it for 1 minute. A restrained target can use its action to repeat the saving throw, ending the effect on itself on a success.",
		}
		],
		traits: [{
			name: "Undead Nature",
			description: "A deathlock doesn't require air, food, drink, or sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The deathlock's innate spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring no material components:",
				"At will: detect magic, disguise self, mage armor."
			]
		}, {
			name: "Turn Resistance",
			description: "The deathlock has advantage on saving throws against any effect that turns undead."
		}, {
			name: "Variant: Patron-Specific Spells",
			description: [
				"You can customize a deathlock mastermind by replacing some or all of the spells in its Spellcasting trait with spells specific to its patron. Here are examples.",
				"Archfey patron: blink, dominate beast, dominate person, faerie fire, greater invisibility, hunger of Hadar, hypnotic pattern, phantasmal force, seeming, sleep",
				"Fiend patron: blindness/deafness, burning hands, command, fire shield, fireball, flame strike, hellish rebuke, scorching ray, stinking cloud, wall of fire",
				"Great Old One patron: clairvoyance, detect thoughts, dissonant whispers, dominate person, Evard's evard's black tentacles, hunger of Hadar, phantasmal force, sending, Tasha's tasha's hideous laughter, telekinesis"
			]
		}
		],
		spells: [
			"The deathlock is a 10th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:",
			"Cantrips (at will): chill touch, mage hand, minor illusion, poison spray 1st–",
			"5th level (2 slots): arms of Hadar, blight, counterspell, crown of madness, darkness, dimension door, dispel magic, fly, hold monster, invisibility."
		]
	},
	"Deathlock Wight": {
		name: "Deathlock Wight",
		source: ["Mordenkainen's Tome of Foes", 129],
		size: "Medium",
		type: "undead",
		alignment: "neutral evil",
		ac: [12, "", false],
		hp: 37,
		hd: [5, 8],
		speed: "30 ft",
		scores: [11, 14, 16, 12, 14, 16],
		saves: ["", "", "", "", "4", ""],
		skills: "Arcana +3, Perception +4",
		damage_resistances: "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "14",
		languages: "the languages it knew in life",
		challenge_rating: "3",
		attacks: [{
			name: "Grave Bolt",
			ability: 6,
			damage: [1, 8, "necrotic"],
			range: "Ranged (120 ft)",
			description: "",
		}, {
			name: "Life Drain",
			ability: 1,
			damage: [2, 6, "necrotic"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time."
		}
		],
		traits: [{
			name: "Undead Nature",
			description: "A wight doesn't require air, food, drink, or sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The wight's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no verbal or material components:",
				"At will: detect magic, disguise self, mage armor",
				"1/day each:fear, hold person, misty step"
			]
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The wight attacks twice with Grave Bolt."
		}
		],
	},
	"Demogorgon": {
		name: "Demogorgon",
		source: ["Mordenkainen's Tome of Foes", 144],
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
		damage_vulnerabilities: "",
		damage_immunities: "poison; bludgeoning, piercing, and slashing that is nonmagical",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "29",
		languages: "all, telepathy 120 ft",
		challenge_rating: "26",
		attacks: [{
			name: "Tentacle",
			ability: 1,
			damage: [4, 12, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "If the target is a creature, it must succeed on a DC 23 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.",
		}, {
			name: "Tail (Legendary)",
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
			description: "Demogorgon has advantage on saving throws against spells and other magic effects."
		}, {
			name: "Magic Weapon",
			description: "Demogorgon's weapon attacks are magical."
		}, {
			name: "Two Heads",
			description: "Demogorgon has advantage on saving throws against being blinded, deafened, stunned, and knocked unconscious."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Demogorgon makes two tentacle attacks."
		}, {
			name: "Gaze",
			description: [
				"Demogorgon turns his magical gaze toward one creature that he can see within 120 ft of him. That target must make a DC 23 Wisdom saving throw. Unless the target is incapacitated, it can avert its eyes to avoid the gaze and to automatically succeed on the save. If the target does so, it can't see Demogorgon until the start of his next turn. If the target looks at him in the meantime, it must immediately make the save.",
				"If the target fails the save, the target suffers one of the following effects of Demogorgon's choice or at random:",
				"1. Beguiling Gaze: The target is stunned until the start of Demogorgon's next turn or until Demogorgon is no longer within line of sight.",
				"2. Hypnotic Gaze: The target is charmed by Demogorgon until the start of Demogorgon's next turn. Demogorgon chooses how the charmed target uses its actions, reactions, and movement. Because this gaze requires Demogorgon to focus both heads on the target, he can't use his Maddening Gaze legendary action until the start of his next turn.",
				"3. Insanity Gaze: The target suffers the effect of the confusion spell without making a saving throw. The effect lasts until the start of Demogorgon's next turn. Demogorgon doesn't need to concentrate on the spell.",
			]
		}, {
			name: "Lair Actions",
			description: [
				"On initiative count 20 (losing initiative ties), Demogorgon can take a lair action to cause one of the following effects; he can’t use the same effect two rounds in a row:",
				"Demogorgon creates an illusory duplicate of himself, which appears in his own space and lasts until initiative count 20 of the next round. On his turn, Demogorgon can move the illusory duplicate a distance equal to his walking speed (no action required). The first time a creature or object interacts physically with Demogorgon (for example, by hitting him with an attack), there is a 50 percent chance that the illusory duplicate is being affected, not Demogorgon himself, in which case the illusion disappears.",
				"Demogorgon casts the darkness spell four times at its lowest level, targeting different areas with the spell. Demogorgon doesn’t need to concentrate on the spells, which end on initiative count 20 of the next round."
			]
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (2/Turn)",
			description: "Demogorgon can take 2 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Demogorgon regains spent legendary actions at the start of his turn."
		}, {
			name: "Tail",
			description: "The Demogorgon makes a Tail attack.",
		}, {
			name: "Maddening Gaze",
			description: "Demogorgon uses his Gaze action, and must choose either the Beguiling Gaze or the Insanity Gaze effect."
		}
		],
	},
	"Derro": {
		name: "Derro",
		source: ["Mordenkainen's Tome of Foes", 158],
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
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "7",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "1/4",
		attacks: [{
			name: "Hooked Shortspear",
			ability: 2,
			damage: [1, 4, ""],
			range: "",
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
		source: ["Mordenkainen's Tome of Foes", 159],
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
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
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
	"Dhergoloth": {
		name: "Dhergoloth",
		source: ["Mordenkainen's Tome of Foes", 248],
		size: "Medium",
		type: "fiend (yugoloth)",
		alignment: "neutral evil",
		ac: [15, "Natural Armor", false],
		hp: 119,
		hd: [14, 8],
		speed: "30 ft",
		scores: [17, 10, 19, 7, 10, 9],
		saves: ["6", "", "", "", "", ""],
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "acid, poison",
		condition_immunities: "poisoned",
		senses: "blindsight 60 ft, darkvision 60 ft",
		passive_perception: "10",
		languages: "Abyssal, Infernal, telepathy 60 ft",
		challenge_rating: "7",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The dhergoloth's innate spellcasting ability is Charisma (spell save DC 10). It can innately cast the following spells, requiring no material components:",
				"At will: darkness, fear",
				"3/day each: sleep"
			]
		}, {
			name: "Magic Resistance",
			description: "The dhergoloth has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The dhergoloth's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dhergoloth makes two claw attacks."
		}, {
			name: "Flailing Claws (Recharge 5-6)",
			description: "The dhergoloth moves up to its walking speed in a straight line and targets each creature within 5 ft of it during its movement. Each target must succeed on a DC 14 Dexterity saving throw or take 22 (3d12+3) slashing damage."
		}, {
			name: "Teleport",
			description: "The dhergoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 ft to an unoccupied space it can see."
		}
		],
	},
	"Dire Troll": {
		name: "Dire Troll",
		source: ["Mordenkainen's Tome of Foes", 243],
		size: "Huge",
		type: "giant",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 172,
		hd: [15, 12],
		speed: "40 ft",
		scores: [22, 15, 21, 9, 11, 5],
		saves: ["", "", "", "", "5", "2"],
		skills: "Perception +5",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "frightened, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "15",
		languages: "Giant",
		challenge_rating: "13",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 5 (1d10) poison damage.",
		}, {
			name: "Claws",
			ability: 1,
			damage: [3, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Senses",
			description: "The troll has advantage on Wisdom (Perception) checks that rely on smell or sight."
		}, {
			name: "Regeneration",
			description: "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, it regains only 5 hit points at the start of its next turn. The troll dies only if it is hit by an attack that deals 10 or more acid or fire damage while the troll has 0 hit points."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The troll makes five attacks: one with its bite and four with its claws."
		}, {
			name: "Whirlwind of Claws (Recharge 5-6)",
			description: "Each creature within 10 ft of the troll must make a DC 19 Dexterity saving throw, taking 44 (8d10) slashing damage on a failed save, or half as much damage on a successful one."
		}
		],
	},
	"Drow Arachnomancer": {
		name: "Drow Arachnomancer",
		source: ["Mordenkainen's Tome of Foes", 182],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "chaotic evil",
		ac: [15, "Studded Leather", false],
		hp: 162,
		hd: [25, 8],
		speed: "30 ft, climb 30 ft",
		scores: [11, 17, 14, 19, 14, 16],
		saves: ["", "", "7", "9", "", "8"],
		skills: "Arcana +9, Nature +9, Perception +7, Stealth +8",
		damage_resistances: "poison",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "blindsight 10 ft, darkvision 120 ft",
		passive_perception: "17",
		languages: "Elvish, Undercommon, can speak with spiders",
		challenge_rating: "13",
		attacks: [{
			name: "Poisonous Touch",
			ability: 2,
			damage: [8, 6, "poison"],
			range: "Melee (5 ft)",
			modifiers: ["", "", false],
			description: "(Humanoid Form Only)",
		}, {
			name: "Bite",
			ability: 2,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "(Giant Spider Form Only) Target must make a DC 15 Constitution saving throw, taking 26 (4d12) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
		}, {
			name: "Web",
			ability: 2,
			damage: [0, 0, ""],
			range: "Ranged (30/60 ft)",
			description: "(Giant Spider Form Only; Recharge 5-6) On hit the target is restrained by webbing. As an action, the restrained target can make a DC 15 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).",
		}
		],
		traits: [{
			name: "Change Shape (Recharges after a Short or Long Rest)",
			description: "The drow can use a bonus action to magically polymorph into a giant spider, remaining in that form for up to 1 hour. It can revert to its true form as a bonus action. Its statistics, other than its size, are the same in each form. It can speak and cast spells while in giant spider form. Any equipment it is wearing or carrying in humanoid form melds into the giant spider form. It can't activate, use, wield, or otherwise benefit from any of its equipment. It reverts to its humanoid form if it dies."
		}, {
			name: "Fey Ancestry",
			description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The drow's innate spellcasting ability is Charisma (spell save DC 16). It can innately cast the following spells, requiring no material components:",
				"At will: dancing lights",
				"1/day each: darkness, faerie fire, levitate (self only)."
			]
		}, {
			name: "Spider Climb",
			description: "The drow can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Web Walker",
			description: "The drow ignores movement restrictions caused by webbing."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drow makes two poisonous touch attacks or two bite attacks. The first of these attacks that hits each round deals an extra 26 (4d12) poison damage to the target."
		}
		],
		spells: [
			"The drow is a 16th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 16, +8 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:",
			"1/day each: dominate monster, etherealness, eyebite.",
			"Cantrips (at will): chill touch, eldritch blast, mage hand, poison spray 1st",
			"5th level (3 slots): conjure animals (spiders only), crown of madness, dimension door, dispel magic, fear, fly, giant insect, hold monster, insect plague, invisibility, vampiric touch, web, witch bolt"
		]
	},
	"Drow Favored Consort": {
		name: "Drow Favored Consort",
		source: ["Mordenkainen's Tome of Foes", 183],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "neutral evil",
		ac: [15, "", false],
		hp: 225,
		hd: [30, 8],
		speed: "30 ft",
		scores: [15, 20, 16, 18, 15, 18],
		saves: ["", "11", "9", "", "", "10"],
		skills: "Acrobatics +11, Athletics +8, Perception +8, Stealth +11",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "18",
		languages: "Elvish, Undercommon",
		challenge_rating: "18",
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 18 (4d8) poison damage. In addition, the target has disadvantage on the next saving throw it makes against a spell the drow casts before the end of the drow's next turn.",
		}, {
			name: "Hand Crossbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "Target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target regains consciousness if it takes damage or if another creature takes an action to shake it.",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The drow's innate spellcasting ability is Charisma (spell save DC 18). He can innately cast the following spells, requiring no material components:",
				"At will: dancing lights",
				"1/day each: darkness, faerie fire, levitate (self only)."
			]
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "War Magic",
			description: "When the drow uses its action to cast a spell, it can make one weapon attack as a bonus action."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drow makes three scimitar attacks."
		}
		],
		spells: [
			"The drow is a 11th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 18, +10 to hit with spell attacks). It has the following wizard spells prepared:",
			"Cantrips (at will): mage hand, message, poison spray, shocking grasp, ray of frost",
			"1st level (4 slots): burning hands, mage armor, magic missile, shield",
			"2nd level (3 slots): gust of wind, invisibility, misty step, shatter",
			"3rd level (3 slots): counterspell, fireball, haste",
			"4th level (3 slots): dimension door, Otiluke's resilient sphere",
			"5th level (2 slots): cone of cold",
			"6th level (1 slot): chain lightning."
		]
	},
	"Drow House Captain": {
		name: "Drow House Captain",
		source: ["Mordenkainen's Tome of Foes", 184],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "neutral evil",
		ac: [16, "Chain Mail", false],
		hp: 162,
		hd: [25, 8],
		speed: "30 ft",
		scores: [14, 19, 15, 12, 14, 13],
		saves: ["", "8", "6", "", "6", ""],
		skills: "Perception +6, Stealth +8",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "16",
		languages: "Elvish, Undercommon",
		challenge_rating: "9",
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 14 (4d6) poison damage.",
		}, {
			name: "Whip",
			ability: 2,
			damage: [1, 4, "slashing"],
			range: "Melee (10 ft)",
			description: "If the target is an ally, it has advantage on attack rolls until the end of its next turn.",
		}, {
			name: "Hand Crossbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "Target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target regains consciousness if it takes damage or if another creature takes an action to shake it.",
		}
		],
		traits: [{
			name: "Battle Command",
			description: "As a bonus action, the drow targets one ally he can see within 30 ft of him. If the target can see or hear the drow, the target can use its reaction to make one melee attack or to take the Dodge or Hide action."
		}, {
			name: "Fey Ancestry",
			description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The drow's innate spellcasting ability is Charisma (spell save DC 13). He can innately cast the following spells, requiring no material components:",
				"At will: dancing lights",
				"1/day each: darkness, faerie fire, levitate (self only)."
			]
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drow makes three attacks: two with his scimitar and one with his whip or his hand crossbow."
		}
		],
		reactions: [{
			name: "Parry",
			description: "The drow adds 3 to his AC against one melee attack that would hit him. To do so, the drow must see the attacker and be wielding a melee weapon.",
		}
		],
	},
	"Drow Inquisitor": {
		name: "Drow Inquisitor",
		source: ["Mordenkainen's Tome of Foes", 184],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "neutral evil",
		ac: [16, "Beastplate", false],
		hp: 143,
		hd: [22, 8],
		speed: "30 ft",
		scores: [11, 15, 14, 16, 21, 20],
		saves: ["", "", "7", "", "10", "10"],
		skills: "Insight +10, Perception +10, Religion +8, Stealth +7",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "frightened",
		senses: "darkvision 120 ft",
		passive_perception: "20",
		languages: "Elvish, Undercommon",
		challenge_rating: "14",
		attacks: [{
			name: "Death Lance",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 18 (4d8) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage it takes. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.",
		}
		],
		traits: [{
			name: "Discern Lie",
			description: "The drow knows when she hears a creature speak a lie in a language she knows."
		}, {
			name: "Fey Ancestry",
			description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The drow's innate spellcasting ability is Charisma (spell save DC 18). She can innately cast the following spells, requiring no material components:",
				"At will: dancing lights, detect magic",
				"1/day each: clairvoyance, darkness, detect thoughts, dispel magic, faerie fire, levitate (self only), suggestion."
			]
		}, {
			name: "Magic Resistance",
			description: "The drow has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drow makes three death lance attacks."
		}, {
			name: "Variant: Summon Demon (1/Day)",
			description: "The drow attempts to magically summon a yochlol, with a 50 percent chance of success. If the attempt fails, the drow takes 5 (1d10) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60 ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
		}
		],
		spells: [
			"The drow is a 12th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). She has the following cleric spells prepared:",
			"Cantrips (at will): guidance, message, poison spray, resistance, thaumaturgy",
			"1st level (4 slots): bane, cure wounds, inflict wounds",
			"2nd level (3 slots): blindness/deafness, silence, spiritual weapon",
			"3rd level (3 slots): bestow curse, dispel magic, magic circle",
			"4th level (3 slots): banishment, divination, freedom of movement",
			"5th level (2 slots): contagion, dispel evil and good, insect plague",
			"6th level (1 slot): harm, true seeing."
		]
	},
	"Drow Matron Mother": {
		name: "Drow Matron Mother",
		source: ["Mordenkainen's Tome of Foes", 186],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "neutral evil",
		ac: [17, "Half Plate", false],
		hp: 262,
		hd: [35, 8],
		speed: "30 ft",
		scores: [12, 18, 16, 17, 21, 22],
		saves: ["", "", "9", "", "11", "12"],
		skills: "Insight +11, Perception +11, Religion +9, Stealth +10",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "21",
		languages: "Elvish, Undercommon",
		challenge_rating: "20",
		attacks: [{
			name: "Demon Staff",
			ability: 2,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 14 (4d6) psychic damage; Two-Handed: 8 (1d8+4) bludgeoning damage. In addition, the target must succeed on a DC 19 Wisdom saving throw or become frightened of the drow for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Tentacle Rod",
			ability: 2,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (15 ft)",
			modifiers: ["", "", false],
			description: "If the target is hit three times by the rod on one turn, the target must succeed on a DC 15 Constitution saving throw or suffer the following effects for 1 minute: the target's speed is halved, it has disadvantage on Dexterity saving throws, and it can't use reactions. Moreover, on each of its turns, it can take either an action or a bonus action, but not both. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success.",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The drow's innate spellcasting ability is Charisma (spell save DC 20). She can innately cast the following spells, requiring no material components:",
				"At will: dancing lights, detect magic",
				"1/day each: clairvoyance, darkness, detect thoughts, dispel magic, faerie fire, levitate (self only), suggestion."
			]
		}, {
			name: "Lolth's Fickle Favor",
			description: "As a bonus action, the matron can bestow the Spider Queen's blessing on one ally she can see within 30 ft of her. The ally takes 7 (2d6) psychic damage but has advantage on the next attack roll it makes until the end of its next turn."
		}, {
			name: "Magic Resistance",
			description: "The drow has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The matron mother makes two demon staff attacks or three tentacle rod attacks."
		}, {
			name: "Summon Servant (1/Day)",
			description: "The drow magically summons a retriever or a yochlol. The summoned creature appears in an unoccupied space within 60 ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The drow can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The drow regains spent legendary actions at the start of her turn."
		}, {
			name: "Demon Staff",
			description: "The drow makes one attack with her demon staff."
		}, {
			name: "Compel Demon (Costs 2 Actions)",
			description: "An allied demon within 30 ft of the drow uses its reaction to make one attack against a target of the drow's choice that she can see."
		}, {
			name: "Cast a Spell (Costs 1–3 Actions)",
			description: "The drow expends a spell slot to cast a 1st-, 2nd-, or 3rd-level spell that she has prepared. Doing so costs 1 legendary action per level of the spell."
		}
		],
		spells: [
			"The drow is a 20th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 19, +11 to hit with spell attacks). The drow has the following cleric spells prepared:",
			"Cantrips (at will): guidance, mending, resistance, sacred flame, thaumaturgy",
			"1st level (4 slots): bane, command, cure wounds, guiding bolt",
			"2nd level (3 slots): hold person, silence, spiritual weapon",
			"3rd level (3 slots): bestow curse, clairvoyance, dispel magic, spirit guardians",
			"4th level (3 slots): banishment, death ward, freedom of movement, guardian of faith",
			"5th level (3 slots): contagion, flame strike, geas, mass cure wounds",
			"6th level (2 slots): blade barrier, harm",
			"7th level (2 slots): divine word, plane shift",
			"8th level (1 slot): holy aura",
			"9th level (1 slot): gate."
		]
	},
	"Drow Shadowblade": {
		name: "Drow Shadowblade",
		source: ["Mordenkainen's Tome of Foes", 187],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "neutral evil",
		ac: [17, "Studded Leather", false],
		hp: 150,
		hd: [20, 8],
		speed: "30 ft",
		scores: [14, 21, 16, 12, 14, 13],
		saves: ["", "9", "7", "", "6", ""],
		skills: "Perception +6, Stealth +9",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "16",
		languages: "Elvish, Undercommon",
		challenge_rating: "11",
		attacks: [{
			name: "Shadow Sword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) necrotic damage and 10 (3d6) poison damage. The drow can then fill an unoccupied 5-foot cube within 5 ft of the target with magical darkness, which remains for 1 minute.",
		}, {
			name: "Hand Crossbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "Target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target regains consciousness if it takes damage or if another creature takes an action to shake it.",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The drow's innate spellcasting ability is Charisma (spell save DC 13). He can innately cast the following spells, requiring no material components:",
				"At will: dancing lights",
				"1/day each: darkness, faerie fire, levitate (self only)."
			]
		}, {
			name: "Shadow Step",
			description: "While in dim light or darkness, the drow can teleport as a bonus action up to 60 ft to an unoccupied space it can see that is also in dim light or darkness. It then has advantage on the first melee attack it makes before the end of the turn."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drow makes two attacks with its shadow sword. If either attack hits and the target is within 10 ft of a 5-foot cube of darkness created by the shadow sword on a previous turn, the drow can dismiss that darkness and cause the target to take 21 (6d6) necrotic damage. The drow can dismiss darkness in this way no more than once per turn."
		}, {
			name: "Variant: Summon Shadow Demon (1/Day)",
			description: "The drow attempts to magically summon a shadow demon with a 50 percent chance of success. If the attempt fails, the drow takes 5 (1d10) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60 ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
		}
		],
	},
	"Duergar Despot": {
		name: "Duergar Despot",
		source: ["Mordenkainen's Tome of Foes", 188],
		size: "Medium",
		type: "humanoid (dwarf)",
		alignment: "lawful evil",
		ac: [21, "Natural Armor", false],
		hp: 119,
		hd: [14, 8],
		speed: "25 ft",
		scores: [20, 5, 19, 15, 14, 13],
		saves: ["", "", "8", "", "6", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "12",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "12",
		attacks: [{
			name: "Iron Fist",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the target is a Large or smaller creature, it must make a successful DC 17 Strength saving throw or be thrown up to 30 ft away in a straight line. The target lands prone and then takes 10 (3d6) bludgeoning damage.",
		}, {
			name: "Stomping Foot",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Or 18 (3d8+5) to a prone target.",
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The duergar despot's innate spellcasting ability is Intelligence (spell save DC 12). It can cast the following spells, requiring no components:",
				"At will: mage hand, minor illusion",
				"1/day each: counterspell, misty step, stinking cloud."
			]
		}, {
			name: "Magic Resistance",
			description: "The duergar has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Psychic Engine",
			description: "When the duergar despot suffers a critical hit or is reduced to 0 hit points, psychic energy erupts from its frame to deal 14 (4d6) psychic damage to each creature within 5 ft of it."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the duergar despot has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The despot makes two iron fist attacks and two stomping foot attacks. It can replace up to four of these attacks with uses of its Flame Jet."
		}, {
			name: "Flame Jet",
			description: "The duergar spews flames in a line 100 ft long and 5 ft wide. Each creature in the line must make a DC 16 Dexterity saving throw, taking 18 (4d8) fire damage on a failed save, or half as much damage on a successful one."
		}
		],
	},
	"Duergar Hammerer": {
		name: "Duergar Hammerer",
		source: ["Mordenkainen's Tome of Foes", 188],
		size: "Medium",
		type: "construct",
		alignment: "lawful evil",
		ac: [17, "Natural Armor", false],
		hp: 33,
		hd: [6, 8],
		speed: "20 ft",
		scores: [17, 7, 12, 5, 5, 5],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "7",
		languages: "understands Dwarvish but can’t speak",
		challenge_rating: "2",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Hammer",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Engine of Pain",
			description: "Once per turn, a creature that attacks the hammerer can target the duergar trapped in it. The attacker has disadvantage on the attack roll. On a hit, the attack deals an extra 5 (1d10) damage to the hammerer, and the hammerer can respond by using its Multiattack with its reaction."
		}, {
			name: "Siege Monster",
			description: "The hammerer deals double damage to objects and structures."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hammerer makes two attacks: one with its claw and one with its hammer."
		}
		],
	},
	"Duergar Kavalrachni": {
		name: "Duergar Kavalrachni",
		source: ["Mordenkainen's Tome of Foes", 189],
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
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "War Pick",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "While enlarged: 11 (2d8+2) piercing damage.",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [1, 6, ""],
			range: "Melee (5 ft)",
			description: "While enlarged: 9 (2d6+2) piercing damage.",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "While enlarged: 9 (2d6+2) piercing damage.",
		}, {
			name: "Heavy Crossbow",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Ranged (100/400 ft)",
			modifiers: ["", "", false],
			description: "",
		}
		],
		traits: [{
			name: "Mounted",
			description: "The vicious kavalrachni are the duergar cavalry of Gracklstugh, riding giant tarantulas known as steeders (see the female steeder stat block)"
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
			name: "Enlarge (Recharges on a Short or Long Rest)",
			description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
		}, {
			name: "Invisibility (Recharges on a Short or Long Rest)",
			description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it.",
		}
		],
	},
	"Duergar Mind Master": {
		name: "Duergar Mind Master",
		source: ["Mordenkainen's Tome of Foes", 189],
		size: "Medium",
		type: "humanoid (dwarf)",
		alignment: "lawful evil",
		ac: [14, "Leather Armor", false],
		hp: 39,
		hd: [6, 8],
		speed: "25 ft",
		scores: [11, 17, 14, 15, 10, 12],
		saves: ["", "", "", "", "2", ""],
		skills: "Perception +2, Stealth +5",
		damage_resistances: "poison",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft, truesight 30 ft",
		passive_perception: "12",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "Mind-Poison Dagger",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) psychic damage; or 1 piercing damage and 14 (4d6) psychic damage while reduced.",
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
			name: "Multiattack",
			description: "The duergar makes two melee attacks. It can replace one of those attacks with a use of Mind Mastery."
		}, {
			name: "Invisibility (Recharge 4-6)",
			description: "The duergar magically turns invisible for up to 1 hour or until it attacks, it casts a spell, it uses its Reduce, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it.",
		}, {
			name: "Mind Mastery",
			description: "The duergar targets one creature it can see within 60 ft of it. The target must succeed on a DC 12 Intelligence saving throw, or the duergar causes it to use its reaction either to make one weapon attack against another creature the duergar can see or to move up to 10 ft in a direction of the duergar's choice. Creatures that can't be charmed are immune to this effect."
		}, {
			name: "Reduce (Recharges after a Short or Long Rest)",
			description: "For 1 minute, the duergar magically decreases in size, along with anything it is wearing or carrying. While reduced, the duergar is Tiny, reduces its weapon damage to 1, and makes attacks, checks, and saving throws with disadvantage if they use Strength. It gains a +5 bonus to all Dexterity (Stealth) checks and a +5 bonus to its AC. It can also take a bonus action on each of its turns to take the Hide action."
		}
		],
	},
	"Duergar Screamer": {
		name: "Duergar Screamer",
		source: ["Mordenkainen's Tome of Foes", 190],
		size: "Medium",
		type: "construct",
		alignment: "lawful evil",
		ac: [15, "Natural Armor", false],
		hp: 38,
		hd: [7, 8],
		speed: "20 ft",
		scores: [18, 7, 12, 5, 5, 5],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "7",
		languages: "understands Dwarvish but can’t speak",
		challenge_rating: "3",
		attacks: [{
			name: "Drill",
			ability: 1,
			damage: [1, 12, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Engine of Pain",
			description: "Once per turn, a creature that attacks the screamer can target the duergar trapped in it. The attacker has disadvantage on the attack roll. On a hit, the attack deals an extra 11 (2d10) damage to the screamer, and the screamer can respond by using its Multiattack with its reaction."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The screamer makes one drill attack and uses its Sonic Scream."
		}, {
			name: "Sonic Scream",
			description: "The screamer emits destructive energy in a 15-foot cube. Each creature in that area must succeed on a DC 11 Strength saving throw or take 7 (2d6) thunder damage and be knocked prone.",
		}
		],
	},
	"Duergar Soulblade": {
		name: "Duergar Soulblade",
		source: ["Mordenkainen's Tome of Foes", 190],
		size: "Medium",
		type: "humanoid (dwarf)",
		alignment: "lawful evil",
		ac: [14, "Leather Armor", false],
		hp: 18,
		hd: [4, 8],
		speed: "25 ft",
		scores: [11, 16, 10, 11, 10, 12],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "poison",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "1",
		attacks: [{
			name: "Soulblade",
			ability: 2,
			damage: [1, 6, "force"],
			range: "Melee (5 ft)",
			description: "While enlarged: 10 (2d6+3) force damage. If the soulblade has advantage on the attack roll, the attack deals an extra 3 (1d6) force damage.",
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
			name: "Enlarge (Recharges on a Short or Long Rest)",
			description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
		}, {
			name: "Create Soulblade",
			description: "The duergar creates a visible, shortword-sized blade of psionic energy. The weapon appears in the duergar's hand and vanishes if it leaves the duergar's grip, or if the duergar dies or is incapacitated."
		}, {
			name: "Invisibility (Recharges on a Short or Long Rest)",
			description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it.",
		}
		],
	},
	"Duergar Stone Guard": {
		name: "Duergar Stone Guard",
		source: ["Mordenkainen's Tome of Foes", 191],
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
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "King's Knife (Shortsword)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "While enlarged: 11 (2d6+4) piercing damage.",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "While enlarged: 11 (2d6+4) piercing damage.",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "While enlarged: 11 (2d6+4) piercing damage.",
		}
		],
		traits: [{
			name: "Duergar Resilience",
			description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
		}, {
			name: "Phalanx Formation",
			description: "The duergar has advantage on attack rolls and Dexterity saving throws while standing within 5 ft of a duergar ally wielding a shield."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Enlarge (Recharges on a Short or Long Rest)",
			description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
		}, {
			name: "Invisibility (Recharges on a Short or Long Rest)",
			description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it.",
		}
		],
	},
	"Duergar Warlord": {
		name: "Duergar Warlord",
		source: ["Mordenkainen's Tome of Foes", 192],
		size: "Medium",
		type: "humanoid (dwarf)",
		alignment: "lawful evil",
		ac: [20, "Plate Mail", true],
		hp: 75,
		hd: [10, 8],
		speed: "25 ft",
		scores: [18, 11, 17, 12, 12, 14],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "poison",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "11",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "6",
		attacks: [{
			name: "Psychic-Attuned Hammer",
			ability: 1,
			damage: [1, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 5 (1d10) psychic damage; While enlarged: 15 (2d10+4) bludgeoning damage.",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "While enlarged: 11 (2d6+4) piercing damage.",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "While enlarged: 11 (2d6+4) piercing damage.",
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
			name: "Multiattack",
			description: "The duergar makes three hammer or javelin attacks and uses Call to Attack, or Enlarge if it is available."
		}, {
			name: "Call to Attack",
			description: "Up to three allied duergar within 120 ft of this duergar that can hear it can each use their reaction to make one weapon attack."
		}, {
			name: "Enlarge (Recharges after a Short or Long Rest)",
			description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
		}, {
			name: "Invisibility (Recharge 4-6)",
			description: "The duergar magically turns invisible for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it.",
		}
		],
		reactions: [{
			name: "Scouring Instruction",
			description: "When an ally that the duergar can see makes a d20 roll, the duergar can roll a d6 and the ally can add the number rolled to the d20 roll by taking 3 (1d6) psychic damage. A creature immune to psychic damage can't be affected by Scouring Instruction.",
		}
		],
	},
	"Duergar Xarron": {
		name: "Duergar Xarron",
		source: ["Mordenkainen's Tome of Foes", 193],
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
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "Dwarvish, Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "Fire Lance",
			ability: 1,
			damage: [1, 12, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 3 (1d6) fire damage, or 16 (2d12+3) piercing damage plus 3 (1d6) fire damage while enlarged. Hit has disadvantage if the target is within 5 ft of the duergar.",
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
			name: "Enlarge (Recharges on a Short or Long Rest)",
			description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
		}, {
			name: "Fire Spray (Recharge 5-6)",
			description: "From its fire lance, the duergar shoots a 15-foot cone of fire or a line of fire 30 ft long and 5 ft wide. Each creature in that area must make a DC 12 Dexterity saving throw, taking 10 (3d6) fire damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Invisibility (Recharges on a Short or Long Rest)",
			description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it.",
		}
		],
	},
	"Dybbuk": {
		name: "Dybbuk",
		source: ["Mordenkainen's Tome of Foes", 132],
		size: "Medium",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [14, "", false],
		hp: 37,
		hd: [5, 8],
		speed: "0 ft, fly 40 ft (hover)",
		scores: [6, 19, 16, 16, 15, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +6, Intimidation +4, Perception +4",
		damage_resistances: "acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "darkvision 120 ft",
		passive_perception: "14",
		languages: "Abyssal, Common, telepathy 120 ft",
		challenge_rating: "4",
		attacks: [{
			name: "Tendril",
			ability: 2,
			damage: [2, 8, "necrotic"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, its hit point maximum is also reduced by 3 (1d6). This reduction lasts until the target finishes a short or long rest. The target dies if this effect reduces its hit point maximum to 0.",
		}
		],
		traits: [{
			name: "Incoporeal Movement",
			description: "The dybbuk can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The dybbuk's innate spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components:",
				"At will: dimension door",
				"3/day each: fear, phantasmal force."
			]
		}, {
			name: "Magic Resistance",
			description: "The dybbuk has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Violate Corpse",
			description: "The dybbuk can use a bonus action while it is possessing a corpse to make it do something unnatural, such as vomit blood, twist its head all the way around, or cause a quadruped to move as a biped. Any beast or humanoid that sees this behavior must succeed on a DC 12 Wisdom saving throw or become frightened of the dybbuk for 1 minute. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on a saving throw against this ability is immune to Violate Corpse for 24 hours.",
		}
		],
		actions: [{
			name: "Possess Corpse (Recharge 6)",
			description: [
				"The dybbuk disappears into an intact corpse it can see within 5 ft of it. The corpse must be Large or smaller and be that of a beast or a humanoid. The dybbuk is now effectively the possessed creature. Its type becomes undead, though it now looks alive, and it gains a number of temporary hit points equal to the corpse's hit point maximum in life.",
				"While possessing the corpse, the dybbuk retains its hit points, alignment, Intelligence, Wisdom, Charisma, telepathy, and immunity to poison damage, exhaustion, and being charmed and frightened. It otherwise uses the possessed target's game statistics, gaining access to its knowledge and proficiencies but not its class features, if any.",
				"The possession lasts until the temporary hit points are lost (at which point the body becomes a corpse once more) or the dybbuk ends its possession using a bonus action. When the possession ends, the dybbuk reappears in an unoccupied space within 5 ft of the corpse."
			]
		}
		],
	},
	"Earth Elemental Myrmidon": {
		name: "Earth Elemental Myrmidon",
		source: ["Mordenkainen's Tome of Foes", 202],
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
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "paralyzed, petrified, poisoned, prone",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Terran, one language of its creator's choice",
		challenge_rating: "7",
		attacks: [{
			name: "Maul",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Magic Weapons",
			description: "The myrmidon's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The myrmidon makes two maul attacks."
		}, {
			name: "Thunderous Strike (Recharge 6)",
			description: "The myrmidon makes one maul attack. If the attack hits, it deals an extra 16 (3d10) thunder damage, and the target must succeed on a DC 14 Strength saving throw or be knocked prone.",
		}
		],
	},
	"Eidolon": {
		name: "Eidolon",
		source: ["Mordenkainen's Tome of Foes", 193],
		size: "Medium",
		type: "undead",
		alignment: "any alignment",
		ac: [9, "", false],
		hp: 63,
		hd: [18, 8],
		speed: "0 ft, fly 40 ft (hover)",
		scores: [7, 8, 9, 14, 19, 16],
		saves: ["", "", "", "", "8", ""],
		skills: "Perception +8",
		damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "cold, necrotic, poison",
		condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "darkvision 60 ft",
		passive_perception: "18",
		languages: "the languages it knew in life",
		challenge_rating: "12",
		attacks: [{
			name: "",
			ability: 0,
			damage: [0, 0, ""],
			range: "",
			description: "",
		}
		],
		traits: [{
			name: "Undead Nature",
			description: "An eidolon doesn't require air, food, drink, or sleep."
		}, {
			name: "Incorporeal Movement",
			description: "The eidolon can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object other than a sacred statue."
		}, {
			name: "Sacred Animation (Recharge 5-6)",
			description: "When the eidolon moves into a space occupied by a sacred statue, the eidolon can disappear, causing the statue to become a creature under the eidolon's control. The eidolon uses the sacred statue's statistics in place of its own."
		}, {
			name: "Turn Resistance",
			description: "The eidolon has advantage on saving throws against any effect that turns undead."
		}
		],
		actions: [{
			name: "Divine Dread",
			description: "Each creature within 60 ft of the eidolon that can see it must succeed on a DC 15 Wisdom saving throw or be frightened of it for 1 minute. While frightened in this way, the creature must take the Dash action and move away from the eidolon by the safest available route at the start of each of its turns, unless there is nowhere for it to move, in which case the creature also becomes stunned until it can move again. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to any eidolon's Divine Dread for the next 24 hours.",
		}
		],
	},
	"Elder Oblex": {
		name: "Elder Oblex",
		source: ["Mordenkainen's Tome of Foes", 219],
		size: "Huge",
		type: "ooze",
		alignment: "lawful evil",
		ac: [16, "", false],
		hp: 115,
		hd: [10, 12],
		speed: "20 ft",
		scores: [15, 16, 21, 22, 13, 18],
		saves: ["", "", "", "10", "", "8"],
		skills: "Arcana +10, Deception +8, History +10, Nature +10, Perception +5, Religion +10",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "blinded, charmed, deafened, exhaustion, prone",
		senses: "blindsight 60 ft (blind beyond this distance)",
		passive_perception: "15",
		languages: "Common plus six more",
		challenge_rating: "10",
		attacks: [{
			name: "Pseudopod",
			ability: 2,
			damage: [4, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Plus 7 (2d6) psychic damage.",
		}
		],
		traits: [{
			name: "Ooze Nature",
			description: "An oblex doesn't require sleep."
		}, {
			name: "Amorphous",
			description: "The oblex can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name: "Aversion to Fire",
			description: "If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The oblex's innate spellcasting ability is Intelligence (spell save DC 18). It can innately cast the following spells, requiring no material components:",
				"At will: charm person (as 5th-level spell), detect thoughts, hold person",
				"3/day each: confusion, dimension door, dominate person, fear, hallucinatory terrain, hold monster, hypnotic pattern, telekinesis."
			]
		}, {
			name: "Sulfurous Impersonation",
			description: "As a bonus action, the oblex can extrude a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate 2d6+1 different creatures, each one tethered to its body by a strand of slime that can extend up to 120 ft away. For all practical purposes, the simulacrum is the oblex, meaning the oblex occupies its space and the simulacrum's space simultaneously. The slimy tether is immune to damage, but it is severed if there is no opening at least 1 inch wide between the oblex's main body and the simulacrum. The simulacrum disappears if the tether is severed."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The elder oblex makes two pseudopod attacks and uses Eat Memories."
		}, {
			name: "Eat Memories",
			description: [
				"The oblex targets one creature it can see within 5 ft of it. The target must succeed on a DC 18 Wisdom saving throw or take 44 (8d10) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the greater restoration or heal spell. Constructs, oozes, plants, and undead succeed on the save automatically.",
				"While memory drained, the target must roll a d4 and subtract the number rolled from any ability check or attack roll it makes. Each time the target is memory drained beyond the first, the die size increases by one: the d4 becomes a d6, the d6 becomes a d8, and so on until the die becomes a d20, at which point the target becomes unconscious for 1 hour. The effect then ends.",
				"When an oblex causes a target to become memory drained, the oblex learns all the languages the target knows and gains all its proficiencies, except any saving throw proficiencies.",
			]
		}
		],
	},
	"Elder Tempest": {
		name: "Elder Tempest",
		source: ["Mordenkainen's Tome of Foes", 200],
		size: "Giant",
		type: "elemental",
		alignment: "neutral",
		ac: [19, "", false],
		hp: 264,
		hd: [16, 20],
		speed: "0 ft, fly 120 ft (hover)",
		scores: [23, 28, 23, 2, 21, 18],
		saves: ["", "", "", "", "12", "11"],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "lightning, poison, thunder",
		condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, stunned",
		senses: "darkvision 60 ft",
		passive_perception: "15",
		languages: "",
		challenge_rating: "23",
		attacks: [{
			name: "Thunderous Slam",
			ability: 2,
			damage: [4, 6, "thunder"],
			range: "Melee (20 ft)",
			modifiers: [-1, "", true],
			description: "",
		}
		],
		traits: [{
			name: "Air Form",
			description: "The tempest can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name: "Flyby",
			description: "The tempest doesn't provoke opportunity attacks when it flies out of an enemy's reach."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the tempest fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Living Storm",
			description: [
				"The tempest is always at the center of a storm 1d6+4 miles in diameter. Heavy precipitation in the form of either rain or snow falls there, causing the area to be lightly obscured. Heavy rain also extinguishes open flames and imposes disadvantage on Wisdom (Perception) checks that rely on hearing.",
				"In addition, strong winds swirl in the area covered by the storm. The winds impose disadvantage on ranged attack rolls. The winds extinguish open flames and disperse fog."
			]
		}, {
			name: "Siege Monster",
			description: "The tempest deals double damage to objects and structures."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The tempest makes two attacks with its thunderous slam."
		}, {
			name: "Lightning Storm (Recharge 6)",
			description: "All other creatures within 120 ft of the tempest must each make a DC 20 Dexterity saving throw, taking 27 (6d8) lightning damage on a failed save, or half as much damage on a successful one. If a target's saving throw fails by 5 or more, the creature is also stunned until the end of its next turn.",
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The tempest can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The tempest regains spent legendary actions at the start of its turn."
		}, {
			name: "Move",
			description: "The tempest moves up to its speed."
		}, {
			name: "Lightning Strike (Costs 2 Actions)",
			description: "The tempest can cause a bolt of lightning to strike a point on the ground anywhere under its storm. Each creature within 5 ft of that point must make a DC 20 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one."
		}, {
			name: "Screaming Gale (Costs 3 Actions)",
			description: "The tempest releases a blast of thunder and wind in a line that is 1 mile long and 20 ft wide. Objects in that area take 22 (4d10) thunder damage. Each creature there must succeed on a DC 21 Dexterity saving throw or take 22 (4d10) thunder damage and be flung up to 60 ft in a direction away from the line. If a thrown target collides with an immovable object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 ft it was thrown before impact. If the target would collide with another creature instead, that other creature must succeed on a DC 19 Dexterity saving throw or take the same damage and be knocked prone."
		}
		],
	},
	"Fire Elemental Myrmidon": {
		name: "Fire Elemental Myrmidon",
		source: ["Mordenkainen's Tome of Foes", 203],
		size: "Medium",
		type: "elemental",
		alignment: "neutral",
		ac: [18, "Plate", false],
		hp: 117,
		hd: [18, 8],
		speed: "40 ft",
		scores: [13, 18, 15, 9, 10, 10],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_vulnerabilities: "",
		damage_immunities: "fire, poison",
		condition_immunities: "paralyzed, petrified, poisoned, prone",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Ignan, one language of its creator's choice",
		challenge_rating: "7",
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Illumination",
			description: "The myrmidon sheds bright light in a 20-foot radius and dim light in a 40-foot radius."
		}, {
			name: "Magic Weapons",
			description: "The myrmidon's weapon attacks are magical."
		}, {
			name: "Water Susceptibility",
			description: "For every 5 ft the myrmidon moves in water, it takes 2 (1d4) cold damage."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The myrmidon makes three scimitar attacks."
		}, {
			name: "Fiery Strikes (Recharge 6)",
			description: "The myrmidon uses Multiattack. Each attack that hits deals an extra 5 (1d10) fire damage.",
		}
		],
	},
	"Fraz-Urb'luu": {
		name: "Fraz-Urb'luu",
		source: ["Mordenkainen's Tome of Foes", 146],
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
		damage_vulnerabilities: "",
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
			name: "Tail (Legendary)",
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
				"At will: alter self (can become Medium-sized when changing his appearance), detect magic, dispel magic, phantasmal force",
				"3/day each: confusion, dream, mislead, programmed illusion, seeming",
				"1/day each: mirage arcane, modify memory, project image"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Fraz-Urb'luu fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Fraz-Urb'luu has advantage on saving throws against spells and other magic effects."
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
		}, {
			name: "Lair Actions",
			description: [
				"On initiative count 20 (losing initiative ties), Fraz-Urb’luu can take a lair action to cause one of the following effects; he can’t use the same effect two rounds in a row:",
				"Fraz-Urb’luu causes up to five doors within the lair to become walls, and an equal number of doors to appear on walls where there previously were none.",
				"Fraz-Urb’luu chooses one humanoid within the lair and instantly creates a simulacrum of that creature (as if created with the simulacrum spell). This simulacrum obeys Fraz-Urb’luu’s commands and is destroyed on the next initiative count 20.",
				"Fraz-Urb’luu creates a wave of anguish. Each creature he can see within the lair must succeed on a DC 23 Wisdom saving throw or take 33 (6d10) psychic damage."
			]
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Fraz-Urb'luu can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Fraz-Urb'luu regains spent legendary actions at the start of his turn."
		}, {
			name: "Tail",
			description: "Fraz-Urb'luu makes one Tail attack.",
		}, {
			name: "Phantasmal Killer",
			description: "Fraz-Urb'luu casts phantasmal killer, no concentration required."
		}
		],
	},
	"Frost Salamander": {
		name: "Frost Salamander",
		source: ["Mordenkainen's Tome of Foes", 233],
		size: "Huge",
		type: "elemental",
		alignment: "unaligned",
		ac: [17, "Natural Armor", false],
		hp: 168,
		hd: [16, 12],
		speed: "60 ft, burrow 40 ft, climb 40 ft",
		scores: [20, 12, 18, 7, 11, 7],
		saves: ["", "", "8", "", "4", ""],
		skills: "Perception +4",
		damage_resistances: "",
		damage_vulnerabilities: "fire",
		damage_immunities: "cold",
		condition_immunities: "",
		senses: "darkvision 60 ft, tremorsense 60 ft",
		passive_perception: "14",
		languages: "Primordial",
		challenge_rating: "9",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (15 ft)",
			description: "Plus 5 (1d10) cold damage.",
		}
		],
		traits: [{
			name: "Burning Fury",
			description: "When the salamander takes fire damage, its Freezing Breath automatically recharges."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The salamander makes five attacks: four with its claws and one with its bite."
		}, {
			name: "Freezing Breath (Recharge 6)",
			description: "The salamander exhales chill wind in a 60-foot cone. Each creature in that area must make a DC 17 Constitution saving throw, taking 44 (8d10) cold damage on a failed save, or half as much damage on a successful one."
		}
		],
	},
	"Geryon": {
		name: "Geryon",
		source: ["Mordenkainen's Tome of Foes", 172],
		size: "Huge",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [19, "Natural Armor", false],
		hp: 300,
		hd: [24, 12],
		speed: "30 ft, fly 50 ft",
		scores: [29, 17, 22, 19, 16, 23],
		saves: ["", "10", "13", "", "10", "13"],
		skills: "Deception +13, Intimidation +13, Perception +10",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks that aren’t silvered",
		damage_vulnerabilities: "",
		damage_immunities: "cold, fire, poison",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "20",
		languages: "all, telepathy 120 ft",
		challenge_rating: "22",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [4, 6, "slashing"],
			range: "Melee (15 ft)",
			description: "If the target is Large or smaller, it is grappled (DC 24) and restrained until the grapple ends. Geryon can grapple one creature at a time. If the target is already grappled by Geryon, the target takes an extra 27 (6d8) slashing damage.",
		}, {
			name: "Stinger",
			ability: 1,
			damage: [2, 4, "piercing"],
			range: "Melee (20 ft)",
			description: "Target must succeed on a DC 21 Constitution saving throw or take 13 (2d12) poison damage and become poisoned until it finishes a short or long rest. The target's hit point maximum is reduced by an amount equal to half the poison damage it takes. If its hit point maximum drops to 0, it dies. This reduction lasts until the poisoned condition is removed.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"Geryon's innate spellcasting ability is Charisma (spell save DC 21). He can innately cast the following spells, requiring no material components:",
				"At will: alter self (can become Medium when changing his appearance), detect magic, geas, ice storm, invisibility (self only), locate object, suggestion, wall of ice",
				"1/day each: divine word, symbol (pain only)"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Geryon fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Geryon has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "Geryon's weapon attacks are magical."
		}, {
			name: "Regeneration",
			description: "Geryon regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Geryon dies only if he starts his turn with 0 hit points and doesn't regenerate."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Geryon makes two attacks: one with his claws and one with his stinger."
		}, {
			name: "Teleport",
			description: "Geryon magically teleports, along with any equipment he is wearing and carrying, up to 120 ft to an unoccupied space he can see."
		}, {
			name: "Lair Actions",
			description: [
				"On initiative count 20 (losing initiative ties), Geryon can take a lair action to cause one of the following effects; he can't use the same effect two rounds in a row:",
				"Geryon causes a blast of cold to burst from the ground at a point he can see within 120 ft of him. The cold fills a cube, 10 ft on each side, centered on that point. Each creature in that area must succeed on a DC 21 Constitution saving throw or take 28 (8d6) cold damage.",
				"Geryon targets one creature he can see within 60 ft of him. The target must succeed on a DC 21 Wisdom saving throw or become restrained for 1 minute. The target can end the effect on itself if it deals any damage to one or more of its allies.",
				"Geryon casts the banishment spell.",
			]
		}, {
			name: "Variant: Sound the Horn (1/Day)",
			description: "Geryon blows his horn, which causes 5d4 minotaurs to appear in unoccupied spaces of his choice within 600 ft of him. The minotaurs roll initiative when they appear. They remain until they die or Geryon uses an action to dismiss any or all of them."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Geryon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Geryon regains spent legendary actions at the start of his turn."
		}, {
			name: "Infernal Glare",
			description: "Geryon targets one creature he can see within 60 ft of him. If the target can see Geryon, the target must succeed on a DC 23 Wisdom saving throw or become frightened of Geryon until the end of its next turn."
		}, {
			name: "Swift Sting (Costs 2 Actions)",
			description: "Geryon attacks with his stinger."
		}, {
			name: "Teleport",
			description: "Geryon uses his Teleport action."
		}
		],
	},
	"Giff": {
		name: "Giff",
		source: ["Mordenkainen's Tome of Foes", 204],
		size: "Medium",
		type: "humanoid",
		alignment: "lawful neutral",
		ac: [16, "Beastplate", false],
		hp: 60,
		hd: [8, 8],
		speed: "30 ft",
		scores: [18, 14, 17, 11, 12, 12],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "11",
		languages: "Common",
		challenge_rating: "3",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 9 (1d10+4) slashing damage.",
		}, {
			name: "Musket",
			ability: 2,
			damage: [1, 12, "piercing"],
			range: "Ranged (40/120 ft)",
			description: "",
		}, {
			name: "Pistol",
			ability: 2,
			damage: [1, 10, "piercing"],
			range: "Ranged (30/90 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Headfirst Charge",
			description: "The giff can try to knock a creature over; if the giff moves at least 20 ft in a straight line that ends within 5 ft of a Large or smaller creature, that creature must succeed on a DC 14 Strength saving throw or take 7 (2d6) bludgeoning damage and be knocked prone.",
		}, {
			name: "Firearms Knowledge",
			description: "The giff's mastery of its weapons enables it to ignore the loading property of muskets and pistols."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The giff makes two pistol attacks."
		}, {
			name: "Fragmentation Grenade (1/day)",
			description: "The giff throws a grenade up to 60 ft. Each creature within 20 ft of the grenade's detonation must make a DC 15 Dexterity saving throw, taking 17 (5d6) piercing damage on a failed save, or half as much damage on a successful one."
		}
		],
	},
	"Githyanki Gish": {
		name: "Githyanki Gish",
		source: ["Mordenkainen's Tome of Foes", 204],
		size: "Medium",
		type: "humanoid (gith)",
		alignment: "lawful evil",
		ac: [17, "Half Plate", false],
		hp: 123,
		hd: [19, 8],
		speed: "30 ft",
		scores: [17, 15, 14, 16, 15, 16],
		saves: ["", "", "6", "7", "6", ""],
		skills: "Insight +6, Perception +6, Stealth +6",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "16",
		languages: "Gith",
		challenge_rating: "10",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 18 (4d8) psychic damage; Two-Handed: 8 (1d10+3) slashing damage.",
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The githyanki's innate spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no components:",
				"At will: mage hand (the hand is invisible)",
				"3/day each: jump, misty step, nondetection (self only)",
				"1/day each: plane shift, telekinesis."
			]
		}, {
			name: "War Magic",
			description: "When the githyanki uses its action to cast a spell, it can make one weapon attack as a bonus action"
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The githyanki makes two longsword attacks."
		}
		],
		spells: [
			"The githyanki is an 8th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). The githyanki has the following wizard spells prepared:",
			"Cantrips (at will): blade ward, light, message, true strike",
			"1st level (4 slots): expeditious retreat, magic missile, sleep, thunderwave",
			"2nd level (3 slots): blur, invisibility, levitate",
			"3rd level (3 slots): counterspell, fireball, haste",
			"4th level (2 slots): dimension door."
		]
	},
	"Githyanki Kith'rak": {
		name: "Githyanki Kith'rak",
		source: ["Mordenkainen's Tome of Foes", 205],
		size: "Medium",
		type: "humanoid (gith)",
		alignment: "lawful evil",
		ac: [18, "Plate", false],
		hp: 180,
		hd: [24, 8],
		speed: "30 ft",
		scores: [18, 16, 17, 16, 15, 17],
		saves: ["", "", "7", "7", "6", ""],
		skills: "Intimidation +7, Perception +6",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "16",
		languages: "Gith",
		challenge_rating: "12",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 17 (5d6) psychic damage.",
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The githyanki's innate spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no components:",
				"At will: mage hand (the hand is invisible)",
				"3/day each: blur, jump, misty step, nondetection (self only)",
				"1/day each: plane shift, telekinesis."
			]
		}, {
			name: "Rally the Troops",
			description: "As a bonus action, the githyanki can magically end the charmed and frightened conditions on itself and each creature of its choice that it can see within 30 ft of it."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The githyanki makes three greatsword attacks."
		}
		],
		reactions: [{
			name: "Parry",
			description: "The githyanki adds 4 to its AC against one melee attack that would hit it. To do so, the githyanki must see the attacker and be wielding a melee weapon.",
		}
		],
	},
	"Githyanki Supreme Commander": {
		name: "Githyanki Supreme Commander",
		source: ["Mordenkainen's Tome of Foes", 206],
		size: "Medium",
		type: "humanoid (gith)",
		alignment: "lawful evil",
		ac: [18, "Plate", false],
		hp: 187,
		hd: [22, 8],
		speed: "30 ft",
		scores: [19, 17, 18, 16, 16, 18],
		saves: ["", "", "9", "8", "8", ""],
		skills: "Insight +8, Intimidation +9, Perception +8",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "18",
		languages: "Gith",
		challenge_rating: "14",
		attacks: [{
			name: "Silver Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			modifiers: [3, 3, true],
			description: "Plus 17 (5d6) psychic damage. On a critical hit against a target in an astral body (as with the astral projection spell), the githyanki can cut the silvery cord that tethers the target to its material body, instead of dealing damage.",
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The githyanki's innate spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). It can innately cast the following spells, requiring no components:",
				"At will: mage hand (the hand is invisible)",
				"3/day each: jump, levitate (self only), misty step, nondetection (self only)",
				"1/day each: Bigby's hand, mass suggestion, plane shift, telekinesis"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The githyanki makes two greatsword attacks."
		}
		],
		reactions: [{
			name: "Parry",
			description: "The githyanki adds 5 to its AC against one melee attack that would hit it. To do so, the githyanki must see the attacker and be wielding a melee weapon.",
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The githyanki can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The githyanki regains spent legendary actions at the start of its turn."
		}, {
			name: "Attack (2 Actions)",
			description: "The githyanki makes a greatsword attack."
		}, {
			name: "Command Ally",
			description: "The githyanki targets one ally it can see within 30 ft of it. If the target can see or hear the githyanki, the target can make one melee weapon attack using its reaction and has advantage on the attack roll."
		}, {
			name: "Teleport",
			description: "The githyanki magically teleports, along with any equipment it is wearing and carrying, to an unoccupied space it can see within 30 ft of it. It also becomes insubstantial until the start of its next turn. While insubstantial, it can move through other creatures and objects as if they were difficult terrain. If it ends its turn inside an object, it takes 16 (3d10) force damage and is moved to the nearest unoccupied space."
		}
		],
	},
	"Githzerai Anarch": {
		name: "Githzerai Anarch",
		source: ["Mordenkainen's Tome of Foes", 207],
		size: "Medium",
		type: "humanoid (gith)",
		alignment: "lawful neutral",
		ac: [20, "", false],
		hp: 144,
		hd: [17, 8],
		speed: "30 ft, fly 40 ft (hover)",
		scores: [16, 21, 18, 18, 20, 14],
		saves: ["8", "10", "", "9", "10", ""],
		skills: "Arcana +9, Insight +10, Perception +10",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "20",
		languages: "Gith",
		challenge_rating: "16",
		attacks: [{
			name: "Unarmed Strike",
			ability: 2,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 13 (3d8) psychic damage.",
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The anarch's innate spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It can innately cast the following spells, requiring no components:",
				"At will: mage hand (the hand is invisible)",
				"3/day each: feather fall, jump, see invisibility, shield, telekinesis",
				"1/day each: globe of invulnerability, plane shift, teleportation circle, wall of force."
			]
		}, {
			name: "Psychic Defense",
			description: "While the anarch is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The githzerai makes three unarmed strikes."
		}, {
			name: "Lair Actions",
			description: [
				"An anarch can use lair actions. On initiative count 20 (losing initiative ties), the anarch can take a lair action to cause one of the following effects; the anarch can't use the same effect two rounds in a row:",
				"The anarch casts the lightning bolt spell (at 5th level), but the anarch can change the damage type from lightning to cold, fire, psychic, radiant, or thunder. If the spell deals damage other than fire or lightning, it doesn't ignite flammable objects.",
				"The anarch casts the creation spell (as a 9th-level spell) using the unformed substance of Limbo instead of shadow material. If used in Limbo, the object remains until the anarch's concentration is broken, regardless of its composition. If the anarch moves more than 120 ft from the object, its concentration breaks.",
				"The anarch can magically move an object it can see within 150 ft of it by making a Wisdom check with advantage. The DC depends on the object's size: DC 5 for Tiny, DC 10 for Small, DC 15 for Medium, DC 20 for Large, and DC 25 for Huge or larger."
			]
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The anarch can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The anarch regains spent legendary actions at the start of its turn."
		}, {
			name: "Strike",
			description: "The anarch makes one unarmed strike."
		}, {
			name: "Teleport",
			description: "The anarch magically teleports, along with any equipment it is wearing and carrying, to an unoccupied space it can see within 30 ft of it."
		}, {
			name: "Change Gravity (Costs 3 Actions)",
			description: "The anarch casts the reverse gravity spell. The spell has the normal effect, except that the anarch can orient the area in any direction and creatures and objects fall toward the end of the area."
		}
		],
	},
	"Githzerai Enlightened": {
		name: "Githzerai Enlightened",
		source: ["Mordenkainen's Tome of Foes", 208],
		size: "Medium",
		type: "humanoid (gith)",
		alignment: "lawful neutral",
		ac: [18, "", false],
		hp: 112,
		hd: [15, 8],
		speed: "30 ft",
		scores: [14, 19, 16, 17, 19, 13],
		saves: ["6", "8", "", "7", "8", ""],
		skills: "Arcana +7, Insight +8, Perception +8",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "",
		passive_perception: "18",
		languages: "Gith",
		challenge_rating: "10",
		attacks: [{
			name: "Unarmed Strike",
			ability: 2,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 13 (3d8) psychic damage.",
		}, {
			name: "Temporal Strike (Recharge 6)",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 52 (8d12) psychic damage. The target must succeed on a DC 16 Wisdom saving throw or move 1 round forward in time. A target moved forward in time vanishes for the duration. When the effect ends, the target reappears in the space it left or in an unoccupied space nearest to that space if it's occupied.",
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The githzerai's innate spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks). It can innately cast the following spells, requiring no components:",
				"At will: mage hand (the hand is invisible)",
				"3/day each: blur, expeditious retreat, feather fall, jump, see invisibility, shield",
				"1/day each: haste, plane shift, teleport."
			]
		}, {
			name: "Psychic Defense",
			description: "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The githzerai makes three unarmed strikes."
		}
		],
	},
	"Gloom Weaver": {
		name: "Gloom Weaver",
		source: ["Mordenkainen's Tome of Foes", 224],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "neutral",
		ac: [14, "", false],
		hp: 104,
		hd: [16, 8],
		speed: "30 ft",
		scores: [11, 18, 14, 15, 12, 18],
		saves: ["", "8", "6", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "necrotic",
		condition_immunities: "charmed, exhaustion",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Common, Elvish",
		challenge_rating: "9",
		attacks: [{
			name: "Shadow Spear",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 26 (4d12) necrotic damage; Two-Handed: 8 (1d8+4) piercing damage.",
		}
		],
		traits: [{
			name: "Burden of Time",
			description: "Beasts and humanoids, other than shadar-kai, have disadvantage on saving throws while within 10 ft of the gloom weaver."
		}, {
			name: "Fey Ancestry",
			description: "The gloom weaver has advantage on saving throws against being charmed, and magic can't put it to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The gloom weaver's innate spellcasting ability is Charisma (spell save DC 16, +8 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
				"At will: arcane eye, mage armor, speak with dead",
				"1/day each: arcane gate, bane, compulsion, confusion, true seeing."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The gloom weaver makes two spear attacks and casts one spell that takes 1 action to cast."
		}
		],
		reactions: [{
			name: "Misty Escape (Recharges after a Short or Long Rest)",
			description: "When the gloom weaver takes damage, it turns invisible and teleports up to 60 ft to an unoccupied space it can see. It remains invisible until the start of its next turn or until it attacks or casts a spell.",
		}
		],
		spells: [
			"The gloom weaver is a 12th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 16, +8 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:",
			"Cantrips (at will): chill touch (3d8 damage), eldritch blast (3 beams, +4 bonus to each damage roll), minor illusion, prestidigitation",
			"1st-5th level (3 5th-level slots): armor of Agathys, blight, darkness, dream, invisibility, fear, hypnotic pattern, major image, contact other plane, vampiric touch, witch bolt"
		]
	},
	"Gray Render": {
		name: "Gray Render",
		source: ["Mordenkainen's Tome of Foes", 209],
		size: "Large",
		type: "monstrosity",
		alignment: "chaotic neutral",
		ac: [19, "Natural Armor", false],
		hp: 189,
		hd: [18, 10],
		speed: "30 ft",
		scores: [19, 13, 20, 3, 6, 8],
		saves: ["8", "", "9", "", "", ""],
		skills: "Perception +2",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "",
		challenge_rating: "12",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 12, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is Medium or smaller, the target must succeed on a DC 16 Strength saving throw or be knocked prone.",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (10 ft)",
			description: "Plus 7 (2d6) bludgeoning damage if the target is prone.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The gray render makes three attacks: one with its bite and two with its claws."
		}
		],
		reactions: [{
			name: "Bloody Rampage",
			description: "When the gray render takes damage, it makes one attack with its claws against a random creature within its reach, other than its master.",
		}
		],
	},
	"Graz'zt": {
		name: "Graz'zt",
		source: ["Mordenkainen's Tome of Foes", 149],
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
		damage_vulnerabilities: "",
		damage_immunities: "poison; bludgeoning, piercing, and slashing that is nonmagical",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "24",
		languages: "all, telepathy 120 ft",
		challenge_rating: "24",
		attacks: [{
			name: "Wave of Sorrow",
			ability: 1,
			damage: [4, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "(Greatsword) Plus 14 (4d6) acid damage.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "Graz'zt can use his action to polymorph into a form that resembles a Medium humanoid, or back into his true form. Aside from his size, his statistics are the same in each form, Any equipment he is wearing or carrying isn't transformed."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Graz'zt's spellcasting ability is Charisma (spell save DC 23). Graz'zt can innately cast the following spells, requiring no material components:",
				"At will: charm person, crown of madness, detect magic, dispel magic, dissonant whispers",
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
			description: "Graz'zt magically teleports, along with any equipment he is wearing or carrying, up to 120 ft to an unoccupied space he can see."
		}, {
			name: "Lair Actions",
			description: [
				"On initiative count 20 (losing initiative ties), Graz’zt can take a lair action to cause one of the following effects; he can’t use the same effect two rounds in a row:",
				"Graz’zt casts the command spell on every creature of his choice in the lair. He needn’t see each one, but he must be aware that an individual is in the lair to target that creature. He issues the same command to all the targets.",
				"Smooth surfaces within the lair become as reflective as a polished mirror. Until a different lair action is used, creatures within the lair have disadvantage on Dexterity (Stealth) checks made to hide."
			]
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Graz'zt can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Graz'zt regains spent legendary actions at the start of his turn."
		}, {
			name: "Attack",
			description: "Graz'zt attacks once with the Wave of Sorrow.",
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
	"Green Abishai": {
		name: "Green Abishai",
		source: ["Mordenkainen's Tome of Foes", 162],
		size: "Medium",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [18, "Natural Armor", false],
		hp: 187,
		hd: [25, 8],
		speed: "30 ft, fly 40 ft",
		scores: [12, 17, 16, 17, 12, 19],
		saves: ["", "", "", "8", "", "9"],
		skills: "Deception +9, Insight +6, Perception +6, Persuasion +9",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered",
		damage_vulnerabilities: "",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "16",
		languages: "Draconic, Infernal, telepathy 120 ft",
		challenge_rating: "15",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 6 (1d10+1) slashing damage.",
		}, {
			name: "Claws",
			ability: 2,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, it must succeed on a DC 16 Constitution saving throw or take 11 (2d10) poison damage and become poisoned for 1 minute. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the abishai's darkvision."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The abishai's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:",
				"At will: alter self, major image",
				"3/day each: charm person, detect thoughts, fear",
				"1/day each: confusion, dominate person, mass suggestion."
			]
		}, {
			name: "Magic Resistance",
			description: "The abishai has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The abishai's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The abishai makes two attacks, one with its claws and one with its longsword, or it casts one spell from its Innate Spellcasting trait and makes one claw attack."
		}
		],
	},
	"Hellfire Engine": {
		name: "Hellfire Engine",
		source: ["Mordenkainen's Tome of Foes", 165],
		size: "Huge",
		type: "construct",
		alignment: "lawful evil",
		ac: [18, "Natural Armor", false],
		hp: 216,
		hd: [16, 12],
		speed: "40 ft",
		scores: [20, 16, 24, 2, 10, 1],
		saves: ["", "8", "", "", "5", "0"],
		damage_resistances: "cold, psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered",
		damage_vulnerabilities: "",
		damage_immunities: "fire, poison",
		condition_immunities: "charmed, deafened, exhaustion, frightened, paralyzed, poisoned, unconscious",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "understands Infernal but can't speak",
		challenge_rating: "16",
		attacks: [{
			name: "Lightning Flail",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "Plus 22 (5d8) lightning damage. Up to three other creatures of the hellfire engine's choice that it can see within 30 ft of the target must each make a DC 20 Dexterity saving throw, taking 22 (5d8) lightning damage on a failed save, or half as much damage on a successful one.",
		}
		],
		traits: [{
			name: "Constructed Nature",
			description: "A hellfire engine doesn't require air, food, drink, or sleep."
		}, {
			name: "Immutable Form",
			description: "The hellfire engine is immune to any spell or effect that would alter its form."
		}, {
			name: "Magic Resistance",
			description: "The hellfire engine has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Flesh-Crushing Stride",
			description: [
				"The hellfire engine moves up to its speed in a straight line. During this move, it can enter Large or smaller creatures' spaces. A creature whose space the hellfire engine enters must make a DC 18 Dexterity saving throw. On a successful save, the creature is pushed 5 ft to the nearest space out of the hellfire engine's path. On a failed save, the creature falls prone and takes 28 (8d6) bludgeoning damage.",
				"If the hellfire engine remains in the prone creature's space, the creature is also restrained until it's no longer in the same space as the hellfire engine. While restrained in this way, the creature, or another creature within 5 ft of it, can make a DC 18 Strength check. On a success, the creature is shunted to an unoccupied space of its choice within 5 ft of the hellfire engine and is no longer restrained.",
			]
		}, {
			name: "Hellfire Weapons",
			description: "The hellfire engine uses one of the following options: Bonemelt Sprayer. The hellfire engine spews acidic flame in a 60-foot cone. Each creature in the cone must make a DC 20 Dexterity saving throw, taking 11 (2d10) fire damage plus 18 (4d8) acid damage on a failed save, or half as much damage on a successful one. Creatures that fail the saving throw are drenched in burning acid and take 5 (1d10) fire damage plus 9 (2d8) acid damage at the end of their turns. An affected creature or another creature within 5 ft of it can take an action to scrape off the burning fuel."
		}, {
			name: "Thunder Cannon",
			description: [
				"The hellfire engine targets a point within 120 ft of it that it can see. Each creature within 30 ft of that point must make a DC 20 Dexterity saving throw, taking 27 (5d10) bludgeoning damage plus 13 (2d12) thunder damage on a failed save, or half as much damage on a successful one.",
				"If the chosen option kills a creature, the creature's soul rises from the River Styx as a lemure in Avernus in 1d4 hours. If the creature isn't revived before then, only a wish spell or killing the lemure and casting true resurrection on the creature's original body can restore it to life. Constructs and devils are immune to this effect."
			]
		}
		],
	},
	"Howler": {
		name: "Howler",
		source: ["Mordenkainen's Tome of Foes", 210],
		size: "Large",
		type: "fiend",
		alignment: "chaotic evil",
		ac: [16, "Natural Armor", false],
		hp: 90,
		hd: [12, 10],
		speed: "40 ft",
		scores: [17, 16, 15, 5, 20, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +8",
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "frightened",
		senses: "darkvision 60 ft",
		passive_perception: "15",
		languages: "understands Abyssal but can’t speak",
		challenge_rating: "8",
		attacks: [{
			name: "Rending Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 22 (4d10) psychic damage if the target is frightened. This attack ignores damage resistance.",
		}
		],
		traits: [{
			name: "Pack Tactics",
			description: "A howler has advantage on attack rolls against a creature if at least one of the howler's allies is within 5 ft of the creature and the ally isn't incapacitated."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The howler makes two bite attacks."
		}, {
			name: "Mind-Breaking Howl (Recharge 6)",
			description: "The howler emits a keening howl in a 60-foot cone. Each creature in that area that isn't deafened must succeed on a DC 16 Wisdom saving throw or be frightened until the end of the howler's next turn. While a creature is frightened in this way, its speed is halved, and it is incapacitated. A target that successfully saves is immune to the Mind-Breaking Howl of all howlers for the next 24 hours."
		}
		],
	},
	"Hutijin": {
		name: "Hutijin",
		source: ["Mordenkainen's Tome of Foes", 174],
		size: "Large",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [19, "Natural Armor", false],
		hp: 200,
		hd: [16, 10],
		speed: "30 ft, fly 60 ft",
		scores: [27, 15, 25, 23, 19, 25],
		saves: ["", "9", "14", "", "11", ""],
		skills: "Intimidation +14, Perception +11",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t silvered",
		damage_vulnerabilities: "",
		damage_immunities: "fire, poison",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "21",
		languages: "all, telepathy 120 ft",
		challenge_rating: "21",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "The target must succeed on a DC 22 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 10 (3d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Mace",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 10, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Infernal Despair",
			description: "Each creature within 15 ft of Hutijin that isn't a devil makes saving throws with disadvantage."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Hutijin's innate spellcasting ability is Charisma (spell save DC 22). He can innately cast the following spells, requiring no material components:",
				"At will: alter self (can become Medium when changing his appearance), animate dead, detect magic, hold monster, invisibility (self only), lightning bolt, suggestion, wall of fire",
				"3/day each: dispel magic",
				"1/day each: heal, symbol (hopelessness only)."
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Hutijin fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Hutijin has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "Hutijin's weapon attacks are magical."
		}, {
			name: "Regeneration",
			description: "Hutijin regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Hutijin dies only if he starts his turn with 0 hit points and doesn't regenerate."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Hutijin makes four attacks: one with his bite, one with his claw, one with his mace, and one with his tail."
		}, {
			name: "Teleport",
			description: "Hutijin magically teleports, along with any equipment he is wearing and carrying, up to 120 ft to an unoccupied space he can see."
		}
		],
		reactions: [{
			name: "Fearful Voice (Recharge 5-6)",
			description: "In response to taking damage, Hutijin utters a dreadful word of power. Each creature within 30 ft of him that isn't a devil must succeed on a DC 22 Wisdom saving throw or become frightened of him for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that saves against this effect is immune to Hutijin's Fearful Voice for 24 hours.",
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Hutijin can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Hutijin regains spent legendary actions at the start of his turn."
		}, {
			name: "Attack",
			description: "Hutijin attacks once with his mace."
		}, {
			name: "Lightning Storm (Costs 2 Actions)",
			description: "Hutijin releases lightning in a 20-foot radius. All other creatures in that area must each make a DC 22 Dexterity saving throw, taking 18 (4d8) lightning damage on a failed save, or half as much damage on a successful one."
		}, {
			name: "Teleport",
			description: "Hutijin uses his Teleport action."
		}
		],
	},
	"Hydroloth": {
		name: "Hydroloth",
		source: ["Mordenkainen's Tome of Foes", 249],
		size: "Medium",
		type: "fiend (yugoloth)",
		alignment: "neutral evil",
		ac: [15, "", false],
		hp: 135,
		hd: [18, 8],
		speed: "20 ft, swim 40 ft",
		scores: [12, 21, 16, 19, 10, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Insight +4, Perception +4",
		damage_resistances: "cold, lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "fire",
		damage_immunities: "acid, poison",
		condition_immunities: "poisoned",
		senses: "blindsight 60 ft, darkvision 60 ft",
		passive_perception: "14",
		languages: "Abyssal, Infernal, telepathy 60 ft",
		challenge_rating: "9",
		attacks: [{
			name: "Claws",
			ability: 2,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Bite",
			ability: 2,
			damage: [2, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The hydroloth can breathe air and water."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The hydroloth's innate spellcasting ability is Intelligence (spell save DC 16). It can innately cast the following spells, requiring no material components:",
				"At will: darkness, detect magic, dispel magic, invisibility (self only), water walk",
				"3/day each: control water, crown of madness, fear, phantasmal killer, suggestion."
			]
		}, {
			name: "Magic Resistance",
			description: "The hydroloth has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The hydroloth's weapon attacks are magical."
		}, {
			name: "Secure Memory",
			description: "The hydroloth is immune to the waters of the River Styx as well as any effect that would steal or modify its memories or detect or read its thoughts."
		}, {
			name: "Watery Advantage",
			description: "While submerged in liquid, the hydroloth has advantage on attack rolls."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hydroloth makes two melee attacks. In place of one of these attacks, it can cast one spell that takes 1 action to cast."
		}, {
			name: "Steal Memory (1/Day)",
			description: "The hydroloth targets one creature it can see within 60 ft of it. The target takes 4d6 psychic damage, and it must make a DC 16 Intelligence saving throw. On a successful save, the target becomes immune to this hydroloth's Steal Memory for 24 hours. On a failed save, the target loses all proficiencies, it can't cast spells, it can't understand language, and if its Intelligence and Charisma scores are higher than 5, they become 5. Each time the target finishes a long rest, it can repeat the saving throw, ending the effect on itself on a success. A greater restoration or remove curse spell cast on the target ends this effect early."
		}, {
			name: "Teleport",
			description: "The hydroloth magically teleports, along with any equipment it is wearing or carrying, up to 60 ft to an unoccupied space it can see."
		}
		],
	},
	"Iron Cobra": {
		name: "Iron Cobra",
		source: ["Mordenkainen's Tome of Foes", 125],
		size: "Medium",
		type: "construct",
		alignment: "unaligned",
		ac: [13, "", false],
		hp: 45,
		hd: [7, 8],
		speed: "30 ft",
		scores: [12, 16, 14, 3, 10, 1],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +7",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "poison; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t adamantine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "understands one language of its creator but can’t speak",
		challenge_rating: "4",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, it must succeed on a DC 13 Constitution saving throw or suffer one random poison effect.",
		}
		],
		traits: [{
			name: "Constructed Nature",
			description: "A clockwork doesn't require air, food, drink, or sleep."
		}, {
			name: "Magic Resistance",
			description: "The iron cobra has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Individual Designs",
			description: [
				"A gnome artisan values an individualized clockwork more highly than a perfectly functioning one that copies too much from another creation. For that reason, even clockworks that fit established designs, such as those described here, are seldom identical.",
				"A clockwork can be customized by adding one of the following enhancements and one potential malfunction to its stat block. You can select randomly or choose a pair of modifications that fit the temperament of the clockwork's builder.",
				"d10: Enhancement:",
				"1: Camouflaged. The clockwork gains proficiency in Stealth if it doesn't already have it. While motionless, it is indistinguishable from a stopped machine.",
				"2: Sensors. The range of the clockwork's darkvision becomes 120 ft, unless it is higher, and it gains proficiency in Perception if it doesn't already have it.",
				"3: Improved Armor. The clockwork's AC increases by 2.",
				"4: Increased Speed. The clockwork's speed increases by 10 ft.",
				"5: Reinforced Construction. The clockwork has resistance to force, lightning, and thunder damage.",
				"6: Self-Repairing. If the clockwork starts its turn with at least 1 hit point, it regains 5 hit points. If it takes lightning damage, this ability doesn't function at the start of its next turn.",
				"7: Sturdy Frame. The clockwork's hit point maximum increases by an amount equal to its number of Hit Dice.",
				"8: Suction. The clockwork gains a climbing speed of 30 ft.",
				"9: Vocal Resonator. The clockwork gains the ability to speak rudimentary Common or Gnomish (creator's choice).",
				"10: Water Propulsion. The clockwork gains a swimming speed of 30 ft.",
				"Clockwork Malfunctions:",
				"d10: Malfunction",
				"1: Faulty Sensors. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork is blinded until the end of its turn.",
				"2: Flawed Targeting. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork makes attack rolls with disadvantage until the end of its turn.",
				"3: Ground Fault. The clockwork has vulnerability to lightning damage.",
				"4: Imprinting Loop. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork mistakes one creature it can see within 30 ft for its creator. The clockwork won't willingly harm that creature for 1 minute or until that creature attacks it or deals damage to it.",
				"5: Leaking Lubricant. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork gains 1 level of exhaustion that it isn't immune to.",
				"6: Limited Steering. The clockwork must move in a straight line. It can turn up to 90 degrees before moving and again at the midpoint of its movement. It can rotate freely if it doesn't use any of its speeds on its turn.",
				"7: Overactive Sense of Self-Preservation. If the clockwork has half its hit points or fewer at the start of its turn in combat, roll a d6. If you roll a 1, it retreats from combat. If retreat isn't possible, it continues fighting.",
				"8: Overheats. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork is incapacitated until the end of its turn.",
				"9: Rusty Gears. The clockwork has disadvantage on initiative rolls, and its speed decreases by 10 ft.",
				"10: Weak Armor. The clockwork isn't immune to bludgeoning, piercing, and slashing damage from nonmagical attacks that aren't adamantine."
			]
		}
		],
		actions: [{
			name: "Bite Poison Effect",
			description: [
				"1. Poison Damage: The target takes 13 (3d8) poison damage.",
				"2. Confusion: On its next turn, the target must use its action to make one weapon attack against a random creature it can see within 30 ft of it, using whatever weapon it has in hand and moving beforehand if necessary to get in range. If it's holding no weapon, it makes an unarmed strike. If no creature is visible within 30 ft, it takes the Dash action, moving toward the nearest creature.",
				"3. Paralysis: The target is paralyzed until the end of its next turn.",
			],
		}
		],
	},
	"Juiblex": {
		name: "Juiblex",
		source: ["Mordenkainen's Tome of Foes", 151],
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
		damage_vulnerabilities: "",
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
		}
		],
		traits: [{
			name: "Foul",
			description: "Any creature, other than an ooze, that starts its turn within 10 ft of Juiblex must succeed on a DC 21 Constitution saving throw or be poisoned until the start of the creature's next turn."
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
			description: "Juiblex has advantage on saving throws against spells and other magic effects."
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
			name: "Eject Slime (Recharge 5-6)",
			description: "Juiblex spews out a corrosive slime, targeting one creature that it can see within 60 ft of it. The target must make a DC 21 Dexterity saving throw. On a failure, the target takes 55 (10d10) acid damage. Unless the target avoids taking any of this damage, any metal armor worn by the target takes a permanent -1 penalty to the AC it offers, and any metal weapon it is carrying or wearing takes a permanent -1 penalty to damage rolls. The penalty worsens each time a target is subjected to this effect. If the penalty on an object drops to -5, the object is destroyed.",
		}, {
			name: "Lair Actions",
			description: [
				"On initiative count 20 (losing initiative ties), Juiblex can take a lair action to cause one of the following effects; it can’t use the same effect two rounds in a row:",
				"Juiblex slimes a square area of ground it can see within the lair. The area can be up to 10 ft on a side. The slime lasts for 1 hour or until it is burned away with fire. When the slime appears, each creature in that area must succeed on a DC 21 Strength saving throw or become restrained. When a creature enters the area for the first time on a turn or ends its turn there, that creature must make the same save.",
				"A restrained creature is stuck as long as it remains in the slimy area or until it breaks free. The restrained creature, or another creature that can reach it, can use its action to try to break free and must succeed on a DC 21 Strength check.",
				"If the slime is set on fire, it burns away after 1 round. Any creature that starts its turn in the burning slime takes 22 (4d10) fire damage.",
				"Juiblex slimes a square area of ground it can see within the lair. The area can be up to 10 ft on a side. The slime lasts for 1 hour or until it is burned away with fire. When the slime appears, each creature on it must succeed on a DC 21 Dexterity saving throw or fall prone and slide 10 ft in a random direction determined by a d8 roll. When a creature enters the area for the first time on a turn or ends its turn there, that creature must make the same save.",
				"If the slime is set on fire, it burns away after 1 round. Any creature that starts its turn in the burning slime takes 22 (4d10) fire damage.",
				"A green slime (see the Dungeon Master’s Guide) appears on a spot on the ceiling that Juiblex chooses within the lair. The slime disintegrates after 1 hour.",
			]
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Juiblex can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Juiblex regains spent legendary actions at the start of its turn."
		}, {
			name: "Acid Splash",
			description: "Juiblex casts acid splash."
		}, {
			name: "Attack",
			description: "Juiblex makes one acid lash attack.",
		}, {
			name: "Corrupting Touch (Costs 2 Actions)",
			description: "Melee Weapon Attack: +14 to hit, reach 10 ft, one creature. Hit: 21 (4d6+ 7) poison damage, and the target is slimed. Until the slime is scraped off with an action, the target is poisoned, and any creature, other than an ooze, is poisoned while Within 10 of the target.",
		}
		],
	},
	"Kruthik Hive Lord": {
		name: "Kruthik Hive Lord",
		source: ["Mordenkainen's Tome of Foes", 212],
		size: "Large",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [20, "Natural Armor", false],
		hp: 102,
		hd: [12, 10],
		speed: "40 ft, burrow 20 ft, climb 40 ft",
		scores: [19, 16, 17, 10, 14, 10],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft, tremorsense 60 ft",
		passive_perception: "12",
		languages: "Kruthik",
		challenge_rating: "5",
		attacks: [{
			name: "Stab",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Spike",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The kruthik has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Pack Tactics",
			description: "The kruthik has advantage on an attack roll against a creature if at least one of the kruthik's allies is within 5 ft of the creature and the ally isn't incapacitated."
		}, {
			name: "Tunneler",
			description: "The kruthik can burrow through solid rock at half its burrowing speed and leaves a 10-foot-diameter tunnel in its wake."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The kruthik makes two stab attacks or two spike attacks."
		}, {
			name: "Acid Spray (Recharge 5-6)",
			description: "The kruthik sprays acid in a 15-foot cone. Each creature in that area must make a DC 14 Dexterity saving throw, taking 22 (4d10) acid damage on a failed save, or half as much damage on a successful one."
		}
		],
	},
	"Leviathan": {
		name: "Leviathan",
		source: ["Mordenkainen's Tome of Foes", 198],
		size: "Giant",
		type: "elemental",
		alignment: "neutral",
		ac: [17, "", false],
		hp: 328,
		hd: [16, 20],
		speed: "40 ft, swim 120 ft",
		scores: [30, 24, 30, 2, 18, 17],
		saves: ["", "", "", "", "10", "9"],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "acid, poison",
		condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, stunned",
		senses: "darkvision 60 ft",
		passive_perception: "14",
		languages: "",
		challenge_rating: "20",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [1, 10, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "Plus 5 (1d10) acid damage.",
		}, {
			name: "Tail",
			ability: 1,
			damage: [1, 12, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "Plus 6 (1d12) acid damage.",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the leviathan fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Partial Freeze",
			description: "If the leviathan takes 50 cold damage or more during a single turn, the leviathan partially freezes; until the end of its next turn, its speeds are reduced to 20 ft, and it makes attack rolls with disadvantage."
		}, {
			name: "Siege Monster",
			description: "The leviathan deals double damage to objects and structures (included in Tidal Wave)."
		}, {
			name: "Water Form",
			description: "The leviathan can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The leviathan makes two attacks: one with its slam and one with its tail."
		}, {
			name: "Tidal Wave (Recharge 6)",
			description: [
				"While submerged, the leviathan magically creates a wall of water centered on itself. The wall is up 250 ft long, up to 250 ft high, and up to 50 ft thick.",
				"When the wall appears, all other creatures within its area must each make a DC 24 Strength saving throw. A creature takes 33 (6d10) bludgeoning damage on failed save, or half as much damage on a successful one.",
				"At the start of each of the leviathan's turns after the wall appears, the wall, along with any other creatures in it, moves 50 ft away from the leviathan. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a DC 24 Strength saving throw or take 27 (5d10) bludgeoning damage. A creature takes this damage no more than once on a turn. At the end of each turn the wall moves, the wall's height is reduced by 50 ft, and the damage creatures take from the wall on subsequent rounds is reduced by 1d10. When the wall reaches 0 ft in height, the effect ends.",
				"A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful DC 24 Strength (Athletics) check to swim at all during that turn."
			]
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The leviathan can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The leviathan regains spent legendary actions at the start of its turn."
		}, {
			name: "Slam (Costs 2 Actions)",
			description: "The leviathan makes one slam attack."
		}, {
			name: "Move",
			description: "The leviathan moves up to its speed."
		}
		],
	},
	"Marut": {
		name: "Marut",
		source: ["Mordenkainen's Tome of Foes", 213],
		size: "Large",
		type: "construct (inevitable)",
		alignment: "lawful neutral",
		ac: [22, "Natural Armor", false],
		hp: 432,
		hd: [32, 10],
		speed: "40 ft, fly 30 ft (hover)",
		scores: [28, 12, 26, 19, 15, 18],
		saves: ["", "", "", "12", "10", "12"],
		skills: "Insight +10, Intimidation +12, Perception +10",
		damage_resistances: "thunder; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "charmed, frightened, paralyzed, poisoned, unconscious",
		senses: "darkvision 60 ft",
		passive_perception: "20",
		languages: "all but rarely speaks",
		challenge_rating: "25",
		attacks: [{
			name: "Unerring Slam",
			ability: 0,
			damage: [0, 60, "force"],
			range: "Melee (5 ft)",
			description: "Automatic hit. Target is pushed up to 5 ft away from the marut if it is Huge or smaller."
		}
		],
		traits: [{
			name: "Constructed Nature",
			description: "A marut doesn't require air, food, drink, or sleep."
		}, {
			name: "Immutable Form",
			description: "The marut is immune to any spell or effect that would alter its form."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The marut's innate spellcasting ability is Intelligence (spell save DC 20). The marut can innately cast the following spell, requiring no material components.",
				"At will: plane shift (self only)."
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the marut fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "The marut has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The marut makes two slam attacks."
		}, {
			name: "Blazing Edict (Recharge 5-6)",
			description: "Arcane energy emanates from the marut's chest in a 60-foot cube. Every creature in that area takes 45 radiant damage. Each creature that takes any of this damage must succeed on a DC 20 Wisdom saving throw or be stunned until the end of the marut's next turn.",
		}, {
			name: "Justify",
			description: [
				"The marut targets up to two creatures it can see within 60 ft of it. Each target must succeed on a DC 20 Charisma saving throw or be teleported to a teleportation circle in the Hall of Concordance in Sigil. A target fails automatically if it is incapacitated. If either target is teleported in this way, the marut teleports with it to the circle.",
				"After teleporting in this way, the marut can't use this action again until it finishes a short or long rest."
			]
		}
		],
	},
	"Maurezhi": {
		name: "Maurezhi",
		source: ["Mordenkainen's Tome of Foes", 133],
		size: "Medium",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 88,
		hd: [16, 8],
		speed: "30 ft",
		scores: [14, 17, 12, 11, 12, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5",
		damage_resistances: "cold, fire, lightning, necrotic; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "11",
		languages: "Abyssal, Elvish, telepathy 120 ft",
		challenge_rating: "7",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [2, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a humanoid, its Charisma score is reduced by 1d4. This reduction lasts until the target finishes a short or long rest. The target dies if this reduces its Charisma to 0. It rises 24 hours later as a ghoul, unless it has been revived or its corpse has been destroyed.",
		}, {
			name: "Claws",
			ability: 2,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature other than an undead, it must succeed on a DC 12 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		traits: [{
			name: "Assume Form",
			description: "The maurezhi can assume the appearance of any Medium humanoid it has eaten. It remains in this form for 1d6 days, during which time the form gradually decays until, when the effect ends, the form sloughs from the demon's body."
		}, {
			name: "Magic Resistance",
			description: "The maurezhi has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The maurezhi makes two attacks: one with its bite and one with its claws."
		}, {
			name: "Raise Ghoul (Recharge 5-6)",
			description: "The maurezhi targets one dead ghoul or ghast it can see within 30 ft of it. The target is revived with all its hit points."
		}
		],
	},
	"Meazel": {
		name: "Meazel",
		source: ["Mordenkainen's Tome of Foes", 214],
		size: "Medium",
		type: "humanoid (meazel)",
		alignment: "neutral evil",
		ac: [13, "", false],
		hp: 35,
		hd: [10, 8],
		speed: "30 ft",
		scores: [8, 17, 9, 14, 13, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +5",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "13",
		languages: "Common",
		challenge_rating: "1",
		attacks: [{
			name: "Garrote",
			ability: 2,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target must be medium or smaller. Target is grappled (escape DC 13 with disadvantage). Until the grapple ends, the target takes 10 (2d6+3) bludgeoning damage at the start of each of the meazel's turns. The meazel can't make weapon attacks while grappling a creature in this way."
		}, {
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) necrotic damage.",
		}
		],
		traits: [{
			name: "Shadow Stealth",
			description: "While in dim light or darkness, the meazel can take the Hide action as a bonus action."
		}
		],
		actions: [{
			name: "Shadow Teleport (Recharge 5-6)",
			description: [
				"The meazel, any equipment it is wearing or carrying, and any creature it is grappling teleport to an unoccupied space within 500 ft of it, provided that the starting space and the destination are in dim light or darkness. The destination must be a place the meazel has seen before, but it need not be within line of sight. If the destination space is occupied, the teleportation leads to the nearest unoccupied space.",
				"Any other creature the meazel teleports becomes cursed by shadow for 1 hour. Until this curse ends, every undead and every creature native to the Shadowfell within 300 ft of the cursed creature can sense it, which prevents that creature from hiding from them."
			]
		}
		],
	},
	"Merregon": {
		name: "Merregon",
		source: ["Mordenkainen's Tome of Foes", 166],
		size: "Medium",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [16, "Natural Armor", false],
		hp: 45,
		hd: [6, 8],
		speed: "30 ft",
		scores: [18, 14, 17, 6, 12, 8],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t silvered",
		damage_vulnerabilities: "",
		damage_immunities: "fire, poison",
		condition_immunities: "frightened, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "understands Infernal but can’t speak, telepathy 120 ft",
		challenge_rating: "4",
		attacks: [{
			name: "Halberd",
			ability: 1,
			damage: [1, 10, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Heavy Crossbow",
			ability: 2,
			damage: [1, 10, "piercing"],
			range: "Ranged (100/400 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the merregon's darkvision."
		}, {
			name: "Magic Resistance",
			description: "The merregon has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The merregon makes two halberd attacks, or if an allied fiend of challenge rating 6 or higher is within 60 ft of it, the merregon makes three halberd attacks."
		}
		],
		reactions: [{
			name: "Loyal Bodyguard",
			description: "When another fiend within 5 ft of the merregon is hit by an attack, the merregon causes itself to be hit instead.",
		}
		],
	},
	"Merrenoloth": {
		name: "Merrenoloth",
		source: ["Mordenkainen's Tome of Foes", 249],
		size: "Medium",
		type: "fiend (yugoloth)",
		alignment: "neutral evil",
		ac: [13, "", false],
		hp: 40,
		hd: [9, 8],
		speed: "30 ft, swim 40 ft",
		scores: [8, 17, 10, 17, 14, 11],
		saves: ["", "5", "", "5", "", ""],
		skills: "History +5, Nature +5, Perception +4, Survival +4",
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "acid, poison",
		condition_immunities: "poisoned",
		senses: "blindsight 60 ft, darkvision 60 ft",
		passive_perception: "14",
		languages: "Abyssal, Infernal, telepathy 60 ft",
		challenge_rating: "3",
		attacks: [{
			name: "Oar",
			ability: 2,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The merrenoloth's innate spellcasting ability is Intelligence (spell save DC 13). It can innately cast the following spells, requiring no material components:",
				"At will: charm person, darkness, detect magic, dispel magic, gust of wind",
				"3/day each: control water",
				"1/day each: control weather"
			]
		}, {
			name: "Magic Resistance",
			description: "The merrenoloth has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The merrenoloth's weapon attacks are magical."
		}, {
			name: "Teleport",
			description: "As a bonus action, the merrenoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 ft to an unoccupied space it can see."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The merrenoloth uses Fear Gaze once and makes one oar attack."
		}, {
			name: "Fear Gaze",
			description: "The merrenoloth targets one creature it can see within 60 ft of it. The target must succeed on a DC 13 Wisdom saving throw or become frightened of the merrenoloth for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Lair Actions",
			description: [
				"Any ship a merrenoloth is contracted to captain becomes the creature's lair. When fighting on the ship, the merrenoloth can invoke its ability to take lair actions. On initiative count 20 (losing initiative ties), the merrenoloth can take one lair action to cause one of the following effects; it can't use the same effect two rounds in a row:",
				"The ship regains 22 (4d10) hit points.",
				"A strong wind propels the ship, increasing its speed by 30 ft until initiative count 20 on the next round.",
				"The air within 60 ft of the ship is filled with howling wind. Until initiative count 20 on the next round, that area is difficult terrain, and when a Medium or smaller creature flies into that area or starts its turn flying there, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
			]
		}
		],
	},
	"Moloch": {
		name: "Moloch",
		source: ["Mordenkainen's Tome of Foes", 176],
		size: "Large",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [19, "Natural Armor", false],
		hp: 253,
		hd: [22, 10],
		speed: "30 ft",
		scores: [26, 19, 22, 21, 18, 23],
		saves: ["", "11", "13", "", "11", "13"],
		skills: "Deception +13, Intimidation +13, Perception +11",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t silvered",
		damage_vulnerabilities: "",
		damage_immunities: "fire, poison",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "21",
		languages: "all, telepathy 120 ft",
		challenge_rating: "21",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Many-Tailed Whip",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (30 ft)",
			description: "Plus 11 (2d10) lightning damage. If the target is a creature, it must succeed on a DC 24 Strength saving throw or be pulled up to 30 ft in a straight line toward Moloch.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"Moloch's innate spellcasting ability is Charisma (spell save DC 21). He can innately cast the following spells, requiring no material components:",
				"At will: alter self (can become Medium when changing his appearance), animate dead, burning hands (as a 7th-level spell), confusion, detect magic, fly, geas, major image, stinking cloud, suggestion, wall of fire",
				"1/day each: flame strike, symbol (stunning only)"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Moloch fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Moloch has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "Moloch's weapon attacks are magical."
		}, {
			name: "Regeneration",
			description: "Moloch regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Moloch dies only if he starts his turn with 0 hit points and doesn't regenerate."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Moloch makes three attacks: one with his bite, one with his claw, and one with his whip."
		}, {
			name: "Breath of Despair (Recharge 5-6)",
			description: "Moloch exhales in a 30-foot cube. Each creature in that area must succeed on a DC 21 Wisdom saving throw or take 27 (5d10) psychic damage, drop whatever it is holding, and become frightened for 1 minute. While frightened in this way, a creature must take the Dash action and move away from Moloch by the safest available route on each of its turns, unless there is nowhere to move, in which case it needn't take the Dash action. If the creature ends its turn in a location where it doesn't have line of sight to Moloch, the creature can repeat the saving throw. On a success, the effect ends.",
		}, {
			name: "Teleport",
			description: "Moloch magically teleports, along with any equipment he is wearing and carrying, up to 120 ft to an unoccupied space he can see."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Moloch can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Moloch regains spent legendary actions at the start of his turn."
		}, {
			name: "Stinking Cloud",
			description: "Moloch casts stinking cloud."
		}, {
			name: "Teleport",
			description: "Moloch uses his Teleport action."
		}, {
			name: "Whip",
			description: "Moloch makes one attack with his whip."
		}
		],
	},
	"Molydeus": {
		name: "Molydeus",
		source: ["Mordenkainen's Tome of Foes", 134],
		size: "Huge",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [19, "Natural Armor", false],
		hp: 216,
		hd: [16, 12],
		speed: "40 ft",
		scores: [28, 22, 25, 21, 24, 24],
		saves: ["16", "", "14", "", "14", "14"],
		skills: "Perception +21",
		damage_resistances: "cold, fire, lightning, necrotic; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, frightened, poisoned, stunned",
		senses: "truesight 120 ft",
		passive_perception: "31",
		languages: "Abyssal, telepathy 120 ft",
		challenge_rating: "21",
		attacks: [{
			name: "Demonic Weapon",
			ability: 1,
			damage: [2, 10, "slashing"],
			range: "Melee (15 ft)",
			description: "If the target has at least one head and the molydeus rolled a 20 on the attack roll, the target is decapitated and dies if it can't survive without that head. A target is immune to this effect if it takes none of the damage, has legendary actions, or is Huge or larger. Such a creature takes an extra 6d8 slashing damage from the hit.",
		}, {
			name: "Wolf Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Snakebite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (15 ft)",
			description: "Target must succeed on a DC 22 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target transforms into a manes if this reduces its hit point maximum to 0. This transformation can be ended only by a wish spell.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The molydeus's innate spellcasting ability is Charisma (spell save DC 22). It can innately cast the following spells, requiring no material components:",
				"At will: dispel magic, polymorph, telekinesis, teleport",
				"3/day each: lightning bolt",
				"1/day each: imprisonment"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the molydeus fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "The molydeus has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The molydeus's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The molydeus makes three attacks: one with its weapon, one with its wolf bite, and one with its snakebite."
		}, {
			name: "Variant: Summon Demon (1/Day)",
			description: "As an action, the molydeus has a 50 percent chance of summoning its choice of 1d6 babaus, 1d4 chasmes, or one marilith. A summoned demon appears in an unoccupied space within 60 ft of the molydeus, acts as an ally of the molydeus, and can't summon other demons. It remains for 1 minute, until it or the molydeus dies, or until the molydeus dismisses it as an action."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The molydeus can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The molydeus regains spent legendary actions at the start of its turn."
		}, {
			name: "Attack",
			description: "The molydeus makes one attack, either with its demonic weapon or with its snakebite."
		}, {
			name: "Move",
			description: "The molydeus moves without provoking opportunity attacks."
		}, {
			name: "Cast a Spell",
			description: "The molydeus casts one spell from its Innate Spellcasting trait."
		}
		],
	},
	"Nabassu": {
		name: "Nabassu",
		source: ["Mordenkainen's Tome of Foes", 135],
		size: "Medium",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [18, "Natural Armor", false],
		hp: 190,
		hd: [20, 8],
		speed: "40 ft, fly 60 ft",
		scores: [22, 14, 21, 14, 15, 17],
		saves: ["11", "7", "", "", "", ""],
		skills: "Perception +7",
		damage_resistances: "cold, fire, lightning, necrotic; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "17",
		languages: "Abyssal, telepathy 120 ft",
		challenge_rating: "15",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [2, 10, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Bite",
			ability: 1,
			damage: [4, 12, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Demonic Shadows",
			description: "The nabassu darkens the area around its body in a 10-foot radius. Nonmagical light can't illuminate this area of dim light."
		}, {
			name: "Devour Soul",
			description: "A nabassu can eat the soul of a creature it has killed within the last hour, provided that creature is neither a construct nor an undead. The devouring requires the nabassu to be within 5 ft of the corpse for at least 10 minutes, after which it gains a number of Hit Dice (d8s) equal to half the creature's number of Hit Dice. Roll those dice, and increase the nabassu's hit points by the numbers rolled. For every 4 Hit Dice the nabassu gains in this way, its attacks deal an extra 3 (1d6) damage on a hit. The nabassu retains these benefits for 6 days. A creature devoured by a nabassu can be restored to life only by a wish spell."
		}, {
			name: "Magic Resistance",
			description: "The nabassu has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The nabassu's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The nabassu uses its Soul-Stealing Gaze and makes two attacks: one with its claws and one with its bite."
		}, {
			name: "Soul-Stealing Gaze",
			description: "The nabassu targets one creature it can see within 30 ft of it. If the target can see the nabassu and isn't a construct or an undead, it must succeed on a DC 16 Charisma saving throw or reduce its hit point maximum by 13 (2d12) and give the nabassu an equal number of temporary hit points. This reduction lasts until the target finishes a short or long rest. The target dies if its hit point maximum is reduced to 0, and if the target is a humanoid, it immediately rises as a ghoul under the nabassu's control."
		}
		],
	},
	"Nagpa": {
		name: "Nagpa",
		source: ["Mordenkainen's Tome of Foes", 215],
		size: "Medium",
		type: "humanoid (nagpa)",
		alignment: "neutral evil",
		ac: [19, "Natural Armor", false],
		hp: 187,
		hd: [34, 8],
		speed: "30 ft",
		scores: [9, 15, 12, 23, 18, 21],
		saves: ["", "", "", "12", "10", "11"],
		skills: "Arcana +12, Deception +11, History +12, Insight +10, Perception +10",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "truesight 120 ft",
		passive_perception: "20",
		languages: "Common plus up to five other languages",
		challenge_rating: "17",
		attacks: [{
			name: "Staff",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Corruption",
			description: "As a bonus action, the nagpa targets one creature it can see within 90 ft of it. The target must make a DC 20 Charisma saving throw. An evil creature makes the save with disadvantage. On a failed save, the target is charmed by the nagpa until the start of the nagpa's next turn. On a successful save, the target becomes immune to the nagpa's Corruption for the next 24 hours.",
		}, {
			name: "Paralysis (Recharge 6)",
			description: "As a bonus action, the nagpa forces each creature within 30 ft of it to succeed on a DC 20 Wisdom saving throw or be paralyzed for 1 minute. A paralyzed target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Undead and constructs are immune to this effect.",
		}
		],
		spells: [
			"The nagpa is a 15th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). A nagpa has the following wizard spells prepared:",
			"Cantrips (at will): chill touch, fire bolt, mage hand, message, minor illusion",
			"1st level (4 slots): charm person, detect magic, protection from evil and good, witch bolt",
			"2nd level (3 slots): hold person, ray of enfeeblement, suggestion",
			"3rd level (3 slots): counterspell, fireball, fly",
			"4th level (3 slots): confusion, hallucinatory terrain, wall of fire",
			"5th level (2 slots): dominate person, dream, geas",
			"6th level (1 slot): circle of death, disintegrate",
			"7th level (1 slot): etherealness, prismatic spray",
			"8th level (1 slot): feeblemind"
		]
	},
	"Narzugon": {
		name: "Narzugon",
		source: ["Mordenkainen's Tome of Foes", 167],
		size: "Medium",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [20, "Plate", true],
		hp: 112,
		hd: [15, 8],
		speed: "30 ft",
		scores: [20, 10, 17, 16, 14, 19],
		saves: ["", "5", "8", "", "", "9"],
		skills: "Perception +7",
		damage_resistances: "acid, cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t silvered",
		damage_vulnerabilities: "",
		damage_immunities: "fire, poison",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "17",
		languages: "Common, Infernal, telepathy 120 ft",
		challenge_rating: "13",
		attacks: [{
			name: "Hellfire Lance",
			ability: 1,
			damage: [1, 12, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 16 (3d10) fire damage. If this damage kills a creature, the creature's soul rises from the River Styx as a lemure in Avernus in 1d4 hours. If the creature isn't revived before then, only a wish spell or killing the lemure and casting true resurrection on the creature's original body can restore it to life. Constructs and devils are immune to this effect.",
		}
		],
		traits: [{
			name: "Diabolical Sense",
			description: "The narzugon has advantage on Wisdom (Perception) checks made to perceive good-aligned creatures."
		}, {
			name: "Infernal Tack",
			description: "The narzugon wears spurs that are part of infernal tack, which allow it to summon its nightmare companion."
		}, {
			name: "Magic Resistance",
			description: "The narzugon has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The narzugon uses its Infernal Command or Terrifying Command. It also makes three hellfire lance attacks."
		}, {
			name: "Infernal Command",
			description: "Each ally of the narzugon within 60 ft of it can't be charmed or frightened until the end of the narzugon's next turn."
		}, {
			name: "Terrifying Command",
			description: "Each creature that isn't a fiend within 60 ft of the narzugon that can hear it must succeed on a DC 17 Charisma saving throw or become frightened of it for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that makes a successful saving throw is immune to this narzugon's Terrifying Command for 24 hours.",
		}, {
			name: "Healing (1/Day)",
			description: "The narzugon, or one creature it touches, regains up to 100 hit points."
		}
		],
	},
	"Nightwalker": {
		name: "Nightwalker",
		source: ["Mordenkainen's Tome of Foes", 216],
		size: "Huge",
		type: "undead",
		alignment: "chaotic evil",
		ac: [14, "", false],
		hp: 297,
		hd: [22, 12],
		speed: "40 ft, fly 40 ft",
		scores: [22, 19, 24, 6, 9, 8],
		saves: ["", "", "13", "", "", ""],
		damage_resistances: "acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "necrotic, poison",
		condition_immunities: "exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "darkvision 120 ft",
		passive_perception: "9",
		languages: "",
		challenge_rating: "20",
		attacks: [{
			name: "Enervating Focus",
			ability: 1,
			damage: [5, 8, "necrotic"],
			range: "Melee (15 ft)",
			description: "Target must succeed on a DC 21 Constitution saving throw or its hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest.",
		}
		],
		traits: [{
			name: "Undead Nature",
			description: "A nightwalker doesn't require air, food, drink, or sleep."
		}, {
			name: "Annihilating Aura",
			description: "Any creature that starts its turn within 30 ft of the nightwalker must succeed on a DC 21 Constitution saving throw or take 14 (4d6) necrotic damage and grant the nightwalker advantage on attack rolls against it until the start of the creature's next turn. Undead are immune to this aura."
		}, {
			name: "Life Eater",
			description: "A creature reduced to 0 hit points from damage dealt by the nightwalker dies and can't be revived by any means short of a wish spell."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The nightwalker uses Enervating Focus twice, or it uses Enervating Focus and Finger of Doom, if available."
		}, {
			name: "Finger of Doom (Recharge 6)",
			description: "The nightwalker points at one creature it can see within 300 ft of it. The target must succeed on a DC 21 Wisdom saving throw or take 26 (4d12) necrotic damage and become frightened until the end of the nightwalker's next turn. While frightened in this way, the creature is also paralyzed. If a target's saving throw is successful, the target is immune to the nightwalker's Finger of Doom for the next 24 hours.",
		}
		],
	},
	"Nupperibo": {
		name: "Nupperibo",
		source: ["Mordenkainen's Tome of Foes", 168],
		size: "Medium",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [13, "Natural Armor", false],
		hp: 11,
		hd: [2, 8],
		speed: "20 ft",
		scores: [16, 11, 13, 3, 8, 1],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +1",
		damage_resistances: "acid, cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t silvered",
		damage_vulnerabilities: "",
		damage_immunities: "fire, poison",
		condition_immunities: "blinded, charmed, frightened, poisoned",
		senses: "blindsight 10 ft (blind beyond this radius)",
		passive_perception: "11",
		languages: "understands Infernal but can’t speak",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Cloud of Vermin",
			description: "Any creature, other than a devil, that starts its turn within 20 ft of the nupperibo must make a DC 11 Constitution saving throw. A creature within the areas of two or more nupperibos makes the saving throw with disadvantage. On a failure, the creature takes 2 (1d4) piercing damage."
		}, {
			name: "Hunger-Driven",
			description: "In the Nine Hells, the nupperibos can flawlessly track any creature that has taken damage from any nupperibo's Cloud of Vermin within the previous 24 hours."
		}
		],
	},
	"Oaken Bolter": {
		name: "Oaken Bolter",
		source: ["Mordenkainen's Tome of Foes", 126],
		size: "Medium",
		type: "construct",
		alignment: "unaligned",
		ac: [16, "Natural Armor", false],
		hp: 58,
		hd: [9, 8],
		speed: "30 ft",
		scores: [12, 18, 15, 3, 10, 1],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "poison; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t adamantine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "understands one language of its creator but can’t speak",
		challenge_rating: "5",
		attacks: [{
			name: "Lancing Bolt",
			ability: 2,
			damage: [2, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Lancing Bolt",
			ability: 2,
			damage: [2, 10, "piercing"],
			range: "Ranged (100/400 ft)",
			description: "",
		}, {
			name: "Harpoon",
			ability: 2,
			damage: [1, 10, "piercing"],
			range: "Ranged (50/200 ft)",
			description: "Target is grappled (escape DC 12). While grappled in this way, a creature's speed isn't reduced, but it can move only in directions that bring it closer to the oaken bolter. A creature takes 5 (1d10) slashing damage if it escapes from the grapple or if it tries and fails. As a bonus action, the oaken bolter can pull a creature grappled by it 20 ft closer. The oaken bolter can grapple only one creature at a time.",
		}
		],
		traits: [{
			name: "Constructed Nature",
			description: "A clockwork doesn't require air, food, drink, or sleep."
		}, {
			name: "Magic Resistance",
			description: "The oaken bolter has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Individual Designs",
			description: [
				"A gnome artisan values an individualized clockwork more highly than a perfectly functioning one that copies too much from another creation. For that reason, even clockworks that fit established designs, such as those described here, are seldom identical.",
				"A clockwork can be customized by adding one of the following enhancements and one potential malfunction to its stat block. You can select randomly or choose a pair of modifications that fit the temperament of the clockwork's builder.",
				"d10: Enhancement:",
				"1: Camouflaged. The clockwork gains proficiency in Stealth if it doesn't already have it. While motionless, it is indistinguishable from a stopped machine.",
				"2: Sensors. The range of the clockwork's darkvision becomes 120 ft, unless it is higher, and it gains proficiency in Perception if it doesn't already have it.",
				"3: Improved Armor. The clockwork's AC increases by 2.",
				"4: Increased Speed. The clockwork's speed increases by 10 ft.",
				"5: Reinforced Construction. The clockwork has resistance to force, lightning, and thunder damage.",
				"6: Self-Repairing. If the clockwork starts its turn with at least 1 hit point, it regains 5 hit points. If it takes lightning damage, this ability doesn't function at the start of its next turn.",
				"7: Sturdy Frame. The clockwork's hit point maximum increases by an amount equal to its number of Hit Dice.",
				"8: Suction. The clockwork gains a climbing speed of 30 ft.",
				"9: Vocal Resonator. The clockwork gains the ability to speak rudimentary Common or Gnomish (creator's choice).",
				"10: Water Propulsion. The clockwork gains a swimming speed of 30 ft.",
				"Clockwork Malfunctions:",
				"d10: Malfunction",
				"1: Faulty Sensors. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork is blinded until the end of its turn.",
				"2: Flawed Targeting. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork makes attack rolls with disadvantage until the end of its turn.",
				"3: Ground Fault. The clockwork has vulnerability to lightning damage.",
				"4: Imprinting Loop. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork mistakes one creature it can see within 30 ft for its creator. The clockwork won't willingly harm that creature for 1 minute or until that creature attacks it or deals damage to it.",
				"5: Leaking Lubricant. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork gains 1 level of exhaustion that it isn't immune to.",
				"6: Limited Steering. The clockwork must move in a straight line. It can turn up to 90 degrees before moving and again at the midpoint of its movement. It can rotate freely if it doesn't use any of its speeds on its turn.",
				"7: Overactive Sense of Self-Preservation. If the clockwork has half its hit points or fewer at the start of its turn in combat, roll a d6. If you roll a 1, it retreats from combat. If retreat isn't possible, it continues fighting.",
				"8: Overheats. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork is incapacitated until the end of its turn.",
				"9: Rusty Gears. The clockwork has disadvantage on initiative rolls, and its speed decreases by 10 ft.",
				"10: Weak Armor. The clockwork isn't immune to bludgeoning, piercing, and slashing damage from nonmagical attacks that aren't adamantine."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The oaken bolter makes two lancing bolt attacks or one lancing bolt attack and one harpoon attack."
		}, {
			name: "Explosive Bolt (Recharge 5-6)",
			description: "The oaken bolter launches an explosive charge at a point within 120 ft. Each creature within 20 ft of that point must make a DC 15 Dexterity saving throw, taking 17 (5d6) fire damage on a failed save, or half as much damage on a successful one."
		}
		],
	},
	"Oblex Spawn": {
		name: "Oblex Spawn",
		source: ["Mordenkainen's Tome of Foes", 217],
		size: "Tiny",
		type: "ooze",
		alignment: "lawful evil",
		ac: [13, "", false],
		hp: 18,
		hd: [4, 4],
		speed: "20 ft",
		scores: [8, 16, 15, 14, 11, 10],
		saves: ["", "", "", "4", "", "2"],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "blinded, charmed, deafened, exhaustion, prone",
		senses: "blindsight 60 ft (blind beyond this distance)",
		passive_perception: "12",
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Pseudopod",
			ability: 2,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 2 (1d4) psychic damage.",
		}
		],
		traits: [{
			name: "Ooze Nature",
			description: "An oblex doesn't require sleep."
		}, {
			name: "Amorphous",
			description: "The oblex can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name: "Aversion to Fire",
			description: "If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
		}
		],
	},
	"Ogre Battering Ram": {
		name: "Ogre Battering Ram",
		source: ["Mordenkainen's Tome of Foes", 220],
		size: "Large",
		type: "giant",
		alignment: "chaotic evil",
		ac: [14, "Ring Mail", false],
		hp: 59,
		hd: [7, 10],
		speed: "40 ft",
		scores: [19, 8, 16, 5, 7, 7],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "8",
		languages: "Common, Giant",
		challenge_rating: "4",
		attacks: [{
			name: "Bash",
			ability: 1,
			damage: [2, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "The ogre can push the target 5 ft away if the target is Huge or smaller.",
		}
		],
		traits: [{
			name: "Siege Monster",
			description: "The ogre deals double damage to objects and structures."
		}
		],
		actions: [{
			name: "Block the Path",
			description: "Until the start of the ogre's next turn, attack rolls against the ogre have disadvantage, it has advantage on the attack roll it makes for an opportunity attack, and that attack deals an extra 16 (3d10) bludgeoning damage on a hit. Also, each enemy that tries to move out of the ogre's reach without teleporting must succeed on a DC 14 Strength saving throw or have its speed reduced to 0 until the start of the ogre's next turn."
		}
		],
	},
	"Ogre Bolt Launcher": {
		name: "Ogre Bolt Launcher",
		source: ["Mordenkainen's Tome of Foes", 220],
		size: "Large",
		type: "giant",
		alignment: "chaotic evil",
		ac: [13, "Hide Armor", false],
		hp: 59,
		hd: [7, 10],
		speed: "40 ft",
		scores: [19, 12, 16, 5, 7, 7],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "8",
		languages: "Common, Giant",
		challenge_rating: "2",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [2, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Bolt Launcher",
			ability: 2,
			damage: [3, 10, "piercing"],
			range: "Ranged (120/480 ft)",
			description: "",
		}
		],
	},
	"Ogre Chain Brute": {
		name: "Ogre Chain Brute",
		source: ["Mordenkainen's Tome of Foes", 221],
		size: "Large",
		type: "giant",
		alignment: "chaotic evil",
		ac: [11, "Hide Armor", false],
		hp: 59,
		hd: [7, 10],
		speed: "40 ft",
		scores: [19, 8, 16, 5, 7, 7],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "8",
		languages: "Common, Giant",
		challenge_rating: "3",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [2, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Chain Sweep",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "The ogre swings its chain, and every creature within 10 ft of it must make a DC 14 Dexterity saving throw. On a failed saving throw, a creature takes attack damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone.",
		}, {
			name: "Chain Smash (Recharge 6)",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Target must succeed on a DC 14 Constitution saving throw or be knocked unconscious for 1 minute. The unconscious target repeats the saving throw if it takes damage and at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
	},
	"Ogre Howdah": {
		name: "Ogre Howdah",
		source: ["Mordenkainen's Tome of Foes", 221],
		size: "Large",
		type: "giant",
		alignment: "chaotic evil",
		ac: [13, "Beastplate", false],
		hp: 59,
		hd: [7, 10],
		speed: "40 ft",
		scores: [19, 8, 16, 5, 7, 7],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "8",
		languages: "Common, Giant",
		challenge_rating: "2",
		attacks: [{
			name: "Mace",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Howdah",
			description: "The ogre carries a compact fort on its back. Up to four Small creatures can ride in the fort without squeezing. To make a melee attack against a target within 5 ft of the ogre, they must use spears or weapons with reach. Creatures in the fort have three-quarters cover against attacks and effects from outside it. If the ogre dies, creatures in the fort are placed in unoccupied spaces within 5 ft of the ogre."
		}
		],
	},
	"Oinoloth": {
		name: "Oinoloth",
		source: ["Mordenkainen's Tome of Foes", 251],
		size: "Medium",
		type: "fiend (yugoloth)",
		alignment: "neutral evil",
		ac: [17, "Natural Armor", false],
		hp: 126,
		hd: [12, 10],
		speed: "40 ft",
		scores: [19, 17, 18, 17, 16, 19],
		saves: ["", "", "8", "", "7", ""],
		skills: "Deception +8, Intimidation +8, Perception +7",
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "acid, poison",
		condition_immunities: "poisoned",
		senses: "blindsight 60 ft, darkvision 60 ft",
		passive_perception: "17",
		languages: "Abyssal, Infernal, telepathy 60 ft",
		challenge_rating: "12",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [3, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 22 (4d10) necrotic damage.",
		}
		],
		traits: [{
			name: "Bringer of Plagues (Recharge 5-6)",
			description: [
				"As a bonus action, the oinoloth blights the area within 30 ft of it. The blight lasts for 24 hours. While blighted, all normal plants in the area wither and die, and the number of hit points restored by a spell to a creature in that area is halved.",
				"Furthermore, when a creature moves into the blighted area or starts its turn there, that creature must make a DC 16 Constitution saving throw. On a successful save, the creature is immune to the oinoloth's Bringer of Plagues for the next 24 hours. On a failed save, the creature takes 14 (4d6) necrotic damage and is poisoned.",
				"The poisoned creature can't regain hit points. After every 24 hours that elapse, the poisoned creature can repeat the saving throw. On a failed save, the creature's hit point maximum is reduced by 5 (1d10). This reduction lasts until the poison ends, and the target dies if its hit point maximum is reduced to 0. The poison ends after the creature successfully saves against it three times.",
			]
		}, {
			name: "Innate Spellcasting",
			description: [
				"The oinoloth's innate spellcasting ability is Charisma (spell save DC 16). It can innately cast the following spells, requiring no material components:",
				"At will: darkness, detect magic, dispel magic, invisibility (self only)",
				"1/day each: feeblemind, globe of invulnerability, wall of fire, wall of ice."
			]
		}, {
			name: "Magic Resistance",
			description: "The oinoloth has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The oinoloth's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The oinoloth uses its Transfixing Gaze and makes two claw attacks."
		}, {
			name: "Corrupted Healing (Recharge 6)",
			description: "The oinoloth touches one willing creature within 5 ft of it. The target regains all its hit points. In addition, the oinoloth can end one disease on the target or remove one of the following conditions from it: blinded, deafened, paralyzed, or poisoned. The target then gains 1 level of exhaustion, and its hit point maximum is reduced by 7 (2d6). This reduction can be removed only by a wish spell or by casting greater restoration on the target three times within the same hour. The target dies if its hit point maximum is reduced to 0.",
		}, {
			name: "Teleport",
			description: "The oinoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 ft to an unoccupied space it can see."
		}, {
			name: "Transfixing Gaze",
			description: "The oinoloth targets one creature it can see within 30 ft of it. The target must succeed on a DC 16 Wisdom saving throw against this magic or be charmed until the end of the oinoloth's next turn. While charmed in this way, the target is restrained. If the target's saving throw is successful, the target is immune to the oinoloth's gaze for the next 24 hours.",
		}
		],
	},
	"Orcus": {
		name: "Orcus",
		source: ["Mordenkainen's Tome of Foes", 153],
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
		damage_vulnerabilities: "",
		damage_immunities: "necrotic; poison; bludgeoning, piercing, and slashing that is nonmagical",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "22",
		languages: "all, telepathy 120 ft",
		challenge_rating: "26",
		attacks: [{
			name: "Wand of Orcus",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Plus 13 (2d12) necrotic damage.",
		}, {
			name: "Tail",
			ability: 1,
			damage: [3, 8, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 18 (4d8) poison damage.",
		}
		],
		traits: [{
			name: "Wand of Orcus",
			description: [
				"The wand has 7 charges, and any of its properties that require a saving throw have a save DC of 18. While holding it, Orcus can use an action to cast animate dead, blight, or speak with dead. Alternatively, he can expend or 1 or more of the wand's charges to cast one of the following spells from it: circle of death (1 charge), finger of death (1 charge), or power word kill (2 charges). The wand regains 1d4+3 charges daily at dawn.",
				"While holding the wand, Orcus has +3 AC",
				"While holding the wand, Orcus can use an action to conjure undead creatures whose combined average hit points don't exceed 500. These undead magically rise up from the ground or otherwise form in unoccupied spaces within 300 ft of Orcus and obey his commands until they are destroyed or until he dismisses them as an action. Once this property of the wand is used, the property can't be used again until the next dawn."
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
		}, {
			name: "Lair Actions",
			description: [
				"On initiative count 20 (losing initiative ties), Orcus can take a lair action to cause one of the following effects; he can’t use the same effect two rounds in a row:",
				"Orcus’s voice booms throughout the lair. His utterance causes one creature of his choice to be subjected to power word kill (save DC 23). Orcus needn’t see the creature, but he must be aware that the individual is in the lair.",
				"Orcus causes up to six corpses within the lair to rise as skeletons, zombies, or ghouls. These undead obey his telepathic commands, which can reach anywhere in the lair.",
				"Orcus causes skeletal arms to rise from an area on the ground in a 20-foot square that he can see. They last until the next initiative count 20. Each creature in that area when the arms appear must succeed on a DC 23 Strength saving throw or be restrained until the arms disappear or until Orcus releases them (no action required).",
			]
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Orcus can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Orcus regains spent legendary actions at the start of his turn."
		}, {
			name: "Tail",
			description: "Orcus makes one tail attack.",
		}, {
			name: "A Taste of Undeath",
			description: "Orcus casts chill touch (17th level)."
		}, {
			name: "Creeping Death (Costs 2 Actions)",
			description: "Orcus chooses a point on the ground that he can see within 100 ft of him. A cylinder of swirling necrotic energy 60 ft tall and with a 10-foot radius rises from that point and lasts until the end of Orcus's next turn. Creatures in that area are vulnerable to necrotic damage."
		}
		],
	},
	"Orthon": {
		name: "Orthon",
		source: ["Mordenkainen's Tome of Foes", 169],
		size: "Large",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [17, "Half Plate", false],
		hp: 105,
		hd: [10, 10],
		speed: "30 ft, climb 30 ft",
		scores: [22, 16, 21, 15, 15, 16],
		saves: ["", "7", "9", "", "6", ""],
		skills: "Perception +10, Stealth +11, Survival +10",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t silvered",
		damage_vulnerabilities: "",
		damage_immunities: "fire, poison",
		condition_immunities: "charmed, exhaustion, poisoned",
		senses: "darkvision 120 ft, truesight 30 ft",
		passive_perception: "20",
		languages: "Common, Infernal, telepathy 120 ft",
		challenge_rating: "10",
		attacks: [{
			name: "Infernal Dagger",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "Target must make a DC 17 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one. On a failure, the target is also poisoned for 1 minute. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Infernal Crossbow",
			ability: 2,
			damage: [2, 10, "piercing"],
			range: "Ranged (100/400 ft)",
			description: "Plus one of the 'Infernal Crossbow Effects'",
		}
		],
		traits: [{
			name: "Invisibility Field",
			description: "The orthon can use a bonus action to become invisible. Any equipment the orthon wears or carries is also invisible as long as the equipment is on its person. This invisibility ends immediately after the orthon makes an attack roll or is hit by an attack.",
		}, {
			name: "Magic Resistance",
			description: "The orthon has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Infernal Crossbow Effects",
			description: [
				"Acid: The target must make a DC 17 Constitution saving throw, taking an additional 17 (5d6) acid damage on a failed save, or half as much damage on a successful one.",
				"Blindness (1/Day): The target takes 5 (1d10) radiant damage. In addition, the target and all other creatures within 20 ft of it must each make a successful DC 17 Dexterity saving throw or be blinded until the end of the orthon's next turn.",
				"Concussion. The target and each creature within 20 ft of it must make a DC 17 Constitution saving throw, taking 13 (2d12) thunder damage on a failed save, or half as much damage on a successful one.",
				"Entanglement: The target must make a successful DC 17 Dexterity saving throw or be restrained for 1 hour by strands of sticky webbing. A restrained creature can escape by using an action to make a successful DC 17 Dexterity or Strength check. Any creature other than an orthon that touches the restrained creature must make a successful DC 17 Dexterity saving throw or become similarly restrained.",
				"Paralysis (1/Day): The target takes 22 (4d10) lightning damage and must make a successful DC 17 Constitution saving throw or be paralyzed for 1 minute. The paralyzed target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"Tracking: For the next 24 hours, the orthon knows the direction and distance to the target, as long as it's on the same plane of existence. If the target is on a different plane, the orthon knows which one, but not the exact location there.",
			],
		}
		],
		reactions: [{
			name: "Explosive Retribution",
			description: "When it is reduced to 15 hit points or fewer, the orthon causes itself to explode. All other creatures within 30 ft of it must each make a DC 17 Dexterity saving throw, taking 9 (2d8) fire damage plus 9 (2d8) thunder damage on a failed save, or half as much damage on a successful one. This explosion destroys the orthon, its infernal dagger, and its brass crossbow.",
		}
		],
	},
	"Phoenix": {
		name: "Phoenix",
		source: ["Mordenkainen's Tome of Foes", 199],
		size: "Giant",
		type: "elemental",
		alignment: "neutral",
		ac: [18, "", false],
		hp: 175,
		hd: [10, 20],
		speed: "20 ft, fly 120 ft",
		scores: [19, 26, 25, 2, 21, 18],
		saves: ["", "", "", "", "10", "9"],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "fire, poison",
		condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, stunned",
		senses: "darkvision 60 ft",
		passive_perception: "15",
		languages: "",
		challenge_rating: "16",
		attacks: [{
			name: "Beak",
			ability: 2,
			damage: [2, 6, "fire"],
			range: "Melee (15 ft)",
			description: "If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns.",
		}, {
			name: "Fiery Talons",
			ability: 2,
			damage: [2, 8, "fire"],
			range: "Melee (15 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Fiery Death and Rebirth",
			description: [
				"When the phoenix dies, it explodes. Each creature within 60-ft of it must make a DC 20 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren't worn or carried.",
				"The explosion destroys the phoenix's body and leaves behind an egg-shaped cinder that weighs 5 pounds. The cinder is blazing hot, dealing 21 (6d6) fire damage to any creature that touches it, though no more than once per round. The cinder is immune to all damage, and after 1d6 days, it hatches a new phoenix."
			]
		}, {
			name: "Fire Form",
			description: "The phoenix can move through a space as narrow as 1 inch wide without squeezing. Any creature that touches the phoenix or hits it with a melee attack while within 5 ft of it takes 5 (1d10) fire damage. In addition, the phoenix can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage. With a touch, the phoenix can also ignite flammable objects that aren't worn or carried (no action required)."
		}, {
			name: "Flyby",
			description: "The phoenix doesn't provoke opportunity attacks when it flies out of an enemy's reach."
		}, {
			name: "Illumination",
			description: "The phoenix sheds bright light in a 60-foot radius and dim light for an additional 30 ft."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the phoenix fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Siege Monster",
			description: "The phoenix deals double damage to objects and structures."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The phoenix makes two attacks: one with its beak and one with its fiery talons."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The phoenix can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The phoenix regains spent legendary actions at the start of its turn."
		}, {
			name: "Peck",
			description: "The phoenix makes one beak attack."
		}, {
			name: "Move",
			description: "The phoenix moves up to its speed."
		}, {
			name: "Swoop (Costs 2 Actions)",
			description: "The phoenix moves up to its speed and attacks with its fiery talons."
		}
		],
	},
	"Red Abishai": {
		name: "Red Abishai",
		source: ["Mordenkainen's Tome of Foes", 162],
		size: "Medium",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [22, "Natural Armor", false],
		hp: 255,
		hd: [30, 8],
		speed: "30 ft, fly 50 ft",
		scores: [23, 16, 19, 14, 15, 19],
		saves: ["12", "", "10", "", "8", ""],
		skills: "Intimidation +10, Perception +8",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered",
		damage_vulnerabilities: "",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "18",
		languages: "Draconic, Infernal, telepathy 120 ft",
		challenge_rating: "19",
		attacks: [{
			name: "Morningstar",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 10, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Bite",
			ability: 1,
			damage: [5, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 38 (7d10) fire damage.",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the abishai's darkvision."
		}, {
			name: "Magic Resistance",
			description: "The abishai has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The abishai's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The abishai can use its Frightful Presence. It also makes three attacks: one with its morningstar, one with its claw, and one with its bite."
		}, {
			name: "Frightful Presence",
			description: "Each creature of the abishai's choice that is within 120 ft and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened of it for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the abishai's Frightful Presence for the next 24 hours.",
		}, {
			name: "Incite Fanaticism",
			description: "The abishai chooses up to four of its allies within 60 ft of it that can see it. For 1 minute, each of those allies makes attack rolls with advantage and can't be frightened."
		}, {
			name: "Power of the Dragon Queen",
			description: "The abishai targets one dragon it can see within 120 ft of it. The dragon must make a DC 18 Charisma saving throw. A chromatic dragon makes this save with disadvantage. On a successful save, the target is immune to the abishai's Power of the Dragon Queen for 1 hour. On a failed save, the target is charmed by the abishai for 1 hour. While charmed in this way, the target regards the abishai as a trusted friend to be heeded and protected. This effect ends if the abishai or its companions deal damage to the target.",
		}
		],
	},
	"Retriever": {
		name: "Retriever",
		source: ["Mordenkainen's Tome of Foes", 222],
		size: "Large",
		type: "construct",
		alignment: "lawful evil",
		ac: [19, "Natural Armor", false],
		hp: 210,
		hd: [20, 10],
		speed: "40 ft, climb 40 ft",
		scores: [22, 16, 20, 3, 11, 4],
		saves: ["", "8", "10", "", "5", ""],
		skills: "Perception +5, Stealth +8",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "necrotic, poison, psychic; bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "blindsight 30 ft, darkvision 60 ft",
		passive_perception: "15",
		languages: "understands Abyssal, Elvish, and Undercommon but can't speak",
		challenge_rating: "14",
		attacks: [{
			name: "Foreleg",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Faultless Tracker",
			description: "The retriever is given a quarry by its master. The quarry can be a specific creature or object the master is personally acquainted with, or it can be a general type of creature or object the master has seen before. The retriever knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The retriever can have only one such quarry at a time. The retriever also always knows the location of its master."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The retriever's innate spellcasting ability is Wisdom (spell save DC 13). The retriever can innately cast the following spells, requiring no material components.",
				"3/day each: plane shift (only self and up to one incapacitated creature, which is considered willing for the spell), web"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The retriever makes two foreleg attacks and uses its force or paralyzing beam once, if available."
		}, {
			name: "Force Beam",
			description: "The retriever targets one creature it can see within 60 ft of it. The target must make a DC 16 Dexterity saving throw, taking 27 (5d10) force damage on a failed save, or half as much damage on a successful one."
		}, {
			name: "Paralyzing Beam (Recharge 5-6)",
			description: [
				"The retriever targets one creature it can see within 60 ft of it. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The paralyzed target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"If the paralyzed creature is Medium or smaller, the retriever can pick it up as part of the retriever's move and walk or climb with it at full speed.",
			]
		}
		],
	},
	"Rot Troll": {
		name: "Rot Troll",
		source: ["Mordenkainen's Tome of Foes", 244],
		size: "Large",
		type: "giant",
		alignment: "chaotic evil",
		ac: [16, "Natural Armor", false],
		hp: 138,
		hd: [12, 10],
		speed: "30 ft",
		scores: [18, 13, 22, 5, 8, 4],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "necrotic",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Giant",
		challenge_rating: "9",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 16 (3d10) necrotic damage.",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 5 (1d10) necrotic damage.",
		}
		],
		traits: [{
			name: "Rancid Degeneration",
			description: "At the end of each of the troll's turns, each creature within 5 ft of it takes 11 (2d10) necrotic damage, unless the troll has taken acid or fire damage since the end of its last turn."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The troll makes three attacks: one with its bite and two with its claws."
		}
		],
	},
	"Rutterkin": {
		name: "Rutterkin",
		source: ["Mordenkainen's Tome of Foes", 136],
		size: "Medium",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [12, "", false],
		hp: 37,
		hd: [5, 8],
		speed: "20 ft",
		scores: [14, 15, 17, 5, 12, 6],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold, fire, lightning",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "11",
		languages: "understands Abyssal but can’t speak",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, it must succeed on a DC 13 Constitution saving throw against disease or become poisoned. At the end of each long rest, the poisoned target can repeat the saving throw, ending the effect on itself on a success. If the target is reduced to 0 hit points while poisoned in this way, it dies and instantly transforms into a living abyssal wretch. The transformation of the body can be undone only by a wish spell.",
		}
		],
		traits: [{
			name: "Crippling Fear",
			description: "When a creature that isn't a demon starts its turn within 30 ft of three or more rutterkins, it must make a DC 11 Wisdom saving throw. The creature has disadvantage on the save if it's within 30 ft of six or more rutterkins. On a successful save, the creature is immune to the Crippling Fear of all rutterkins for 24 hours. On a failed save, the creature becomes frightened of the rutterkins for 1 minute. While frightened in this way, the creature is restrained. At the end of each of the frightened creature's turns, it can repeat the saving throw, ending the effect on itself on a success.",
		}
		],
	},
	"Sacred Statue": {
		name: "Sacred Statue",
		source: ["Mordenkainen's Tome of Foes", 194],
		size: "Large",
		type: "construct",
		alignment: "as the eidolon’s alignment",
		ac: [19, "Natural Armor", false],
		hp: 95,
		hd: [10, 10],
		speed: "25 ft",
		scores: [19, 8, 19, 14, 19, 16],
		saves: ["", "", "", "", "8", ""],
		damage_resistances: "acid, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "cold, necrotic, poison",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "14",
		languages: "the languages the eidolon knew in life",
		challenge_rating: "12",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [6, 12, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Rock",
			ability: 1,
			damage: [6, 10, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			description: "",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the statue remains motionless, it is indistinguishable from a normal statue."
		}, {
			name: "Ghostly Inhabitant",
			description: "The eidolon that enters the sacred statue remains inside it until the statue drops to 0 hit points, the eidolon uses a bonus action to move out of the statue, or the eidolon is turned or forced out by an effect such as the dispel evil and good spell. When the eidolon leaves the statue, it appears in an unoccupied space within 5 ft of the statue."
		}, {
			name: "Inert",
			description: "When not inhabited by an eidolon, the statue is an object."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The statue makes two slam attacks."
		}
		],
	},
	"Shadow Dancer": {
		name: "Shadow Dancer",
		source: ["Mordenkainen's Tome of Foes", 225],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "neutral",
		ac: [15, "Studded Leather", false],
		hp: 71,
		hd: [13, 8],
		speed: "30 ft",
		scores: [12, 16, 13, 11, 12, 12],
		saves: ["", "6", "4", "", "", ""],
		skills: "Stealth +6",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "necrotic",
		condition_immunities: "charmed, exhaustion",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Common, Elvish",
		challenge_rating: "7",
		attacks: [{
			name: "Spiked Chain",
			ability: 2,
			damage: [2, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "Target must succeed on a DC 14 Dexterity saving throw or suffer one additional effect of the shadow dancer's choice from the 'Spiked Chain Effects'.",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The gloom weaver has advantage on saving throws against being charmed, and magic can't put it to sleep."
		}, {
			name: "Shadow Jump",
			description: "As a bonus action, the shadow dancer can teleport up to 30 ft to an unoccupied space it can see. Both the space it teleports from and the space it teleports to must be in dim light or darkness. The shadow dancer can use this ability between the weapon attacks of another action it takes."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The shadow dancer makes three spiked chain attacks."
		}, {
			name: "Spiked Chain Effects",
			description: [
				"The target is grappled (escape DC 14) if it is a Medium or smaller creature. Until the grapple ends, the target is restrained, and the shadow dancer can't grapple another target.",
				"The target is knocked prone.",
				"The target takes 22 (4d10) necrotic damage.",
			],
		}
		],
	},
	"Sibriex": {
		name: "Sibriex",
		source: ["Mordenkainen's Tome of Foes", 137],
		size: "Huge",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [19, "Natural Armor", false],
		hp: 150,
		hd: [12, 12],
		speed: "0 ft, fly 20 ft (hover)",
		scores: [10, 3, 23, 25, 24, 25],
		saves: ["", "", "", "13", "", "13"],
		skills: "Arcana +13, History +13, Perception +13",
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "truesight 120 ft",
		passive_perception: "23",
		languages: "all, telepathy 120 ft",
		challenge_rating: "18",
		attacks: [{
			name: "Chain",
			ability: 1,
			damage: [2, 12, ""],
			range: "Melee (15 ft)",
			modifiers: ["", 7, false],
			description: "",
		}, {
			name: "Bite",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 9 (2d8) acid damage.",
		}
		],
		traits: [{
			name: "Contamination",
			description: "The sibriex emits an aura of corruption 30 ft in every direction. Plants that aren't creatures wither in the aura, and the ground in it is difficult terrain for other creatures. Any creature that starts its turn in the aura must succeed on a DC 20 Constitution saving throw or take 14 (4d6) poison damage. A creature that succeeds on the save is immune to this sibriex's Contamination for 24 hours."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The sibriex's innate spellcasting ability is Charisma (spell save DC 21). It can innately cast the following spells, requiring no material components:",
				"At will: charm person, command, dispel magic, hold monster",
				"3/day each: feeblemind."
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the sibriex fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "The sibriex has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The sibriex uses Squirt Bile once and makes three attacks using its chain, bite, or both."
		}, {
			name: "Squirt Bile",
			description: "The sibriex targets one creature it can see within 120 ft of it. The target must succeed on a DC 20 Dexterity saving throw or take 35 (10d6) acid damage."
		}, {
			name: "Warp Creature",
			description: "The sibriex targets up to three creatures it can see within 120 ft of it. Each target must make a DC 20 Constitution saving throw. On a successful save, a creature becomes immune to this sibriex's Warp Creature. On a failed save, the target is poisoned, which causes it to also gain 1 level of exhaustion. While poisoned in this way, the target must repeat the saving throw at the start of each of its turns. Three successful saves against the poison end it, and ending the poison removes any levels of exhaustion caused by it. Each failed save causes the target to suffer another level of exhaustion. Once the target reaches 6 levels of exhaustion, it dies and instantly transforms into a living abyssal wretch under the sibriex's control. The transformation of the body can be undone only by a wish spell.",
		}, {
			name: "Variant: Flesh Warping",
			description: [
				"Creatures that encounter a sibriex can be twisted beyond recognition. Whenever a creature fails a saving throw against the sibriex's Warp Creature effect, you can roll percentile dice and consult the Flesh Warping table to determine an additional effect, which vanishes when Warp Creature ends on the creature. If the creature transforms into an abyssal wretch, the effect becomes a permanent feature of that body.",
				"A creature can willingly submit to flesh warping, an agonizing process that takes at least 1 hour while the creature stays within 30 ft of the sibriex. At the end of the process, roll once on the table (or choose one effect) to determine how the creature is transformed permanently.",
				"d100: Effect:",
				"01–05: The color of the target's hair, eyes, and skin becomes blue, red, yellow, or patterned.",
				"06–10: The target's eyes push out of its head at the end of stalks.",
				"11–15: The target's hands grow claws, which can be used as daggers.",
				"16–20: One of the target's legs grows longer than the other, reducing its walking speed by 10 ft.",
				"21–25: The target's eyes become beacons, filling a 15-foot cone with dim light when they are open.",
				"26–30: A pair of wings, either feathered or leathery, sprout from the target's back, granting it a flying speed of 30 ft.",
				"31–35: The target's ears tear free from its head and scurry away; the target is deafened.",
				"36–40: Two of the target's teeth turn into tusks.",
				"41–45: The target's skin becomes scabby, granting it a +1 bonus to AC but reducing its Charisma by 2 (to a minimum of 1).",
				"46–50: The target's arms and legs switch places, preventing the target from moving unless it crawls.",
				"51–55: The target's arms become tentacles with fingers on the ends, increasing its reach by 5 ft.",
				"56–60: The target's legs grow incredibly long and springy, increasing its walking speed by 10 ft.",
				"61–65: The target grows a whiplike tail, which it can use as a whip.",
				"66–70: The target's eyes turn black, and it gains darkvision out to a range of 120 ft.",
				"71–75: The target swells, tripling its weight.",
				"76–80: The target becomes thin and skeletal, halving its weight.",
				"81–85: The target's head doubles in size.",
				"86–90: The target's ears become wings, giving it a flying speed of 5 ft.",
				"91–95: The target's body becomes unusually brittle, causing the target to have vulnerability to bludgeoning, piercing, and slashing damage.",
				"96–00: The target grows another head, causing it to have advantage on saving throws against being charmed, frightened, or stunned.",
			]
		}
		],
	},
	"Skulk": {
		name: "Skulk",
		source: ["Mordenkainen's Tome of Foes", 227],
		size: "Medium",
		type: "humanoid",
		alignment: "chaotic neutral",
		ac: [14, "", false],
		hp: 18,
		hd: [4, 8],
		speed: "30 ft",
		scores: [6, 19, 10, 10, 7, 1],
		saves: ["", "", "2", "", "", ""],
		skills: "Stealth +8",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "radiant",
		condition_immunities: "blinded",
		senses: "darkvision 120 ft",
		passive_perception: "8",
		languages: "understands Common but can’t speak",
		challenge_rating: "1/2",
		attacks: [{
			name: "Claws",
			ability: 2,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "If the skulk has advantage on the attack roll, the target also takes 7 (2d6) necrotic damage.",
		}
		],
		traits: [{
			name: "Fallible Invisibility",
			description: [
				"The skulk is invisible. This invisibility can be circumvented by three things:",
				"The skulk appears as a drab, smooth-skinned humanoid if its reflection can be seen in a mirror or on another surface.",
				"The skulk appears as a dim, translucent form in the light of a candle made of fat rendered from a corpse whose identity is unknown.",
				"Humanoid children, aged 10 and under, can see through this invisibility.",
			]
		}, {
			name: "Trackless",
			description: "The skulk leaves no tracks to indicate where it has been or where it's headed."
		}
		],
	},
	"Skull Lord": {
		name: "Skull Lord",
		source: ["Mordenkainen's Tome of Foes", 230],
		size: "Medium",
		type: "undead",
		alignment: "lawful evil",
		ac: [18, "Plate", false],
		hp: 105,
		hd: [14, 8],
		speed: "30 ft",
		scores: [14, 16, 17, 16, 15, 21],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +7, History +8, Perception +12, Stealth +8",
		damage_resistances: "cold, necrotic; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, poisoned, stunned, unconscious",
		senses: "darkvision 60 ft",
		passive_perception: "22",
		languages: "all the languages it knew in life",
		challenge_rating: "15",
		attacks: [{
			name: "Bone Staff",
			ability: 2,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 14 (4d6) necrotic damage.",
		}
		],
		traits: [{
			name: "Undead Nature",
			description: "A skull lord doesn't require air, food, drink, or sleep."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the skull lord fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Master of the Grave",
			description: "While within 30 ft of the skull lord, any undead ally of the skull lord makes saving throws with advantage, and that ally regains 1d6 hit points whenever it starts its turn there."
		}, {
			name: "Evasion",
			description: "If the skull lord is subjected to an effect that allows it to make a Dexterity saving throw to take only half the damage, the skull lord instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The skull lord makes three bone staff attacks."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The skull lord can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The skull lord regains spent legendary actions at the start of its turn."
		}, {
			name: "Bone Staff (Costs 2 Actions)",
			description: "The skull lord makes a bone staff attack."
		}, {
			name: "Cantrip",
			description: "The skull lord casts a cantrip."
		}, {
			name: "Move",
			description: "The skull lord moves up to its speed without provoking opportunity attacks."
		}, {
			name: "Summon Undead (Costs 3 Actions)",
			description: "Up to five skeletons or zombies appear in unoccupied spaces within 30 ft of the skull lord and remain until destroyed. Undead summoned in this way roll initiative and act in the next available turn. The skull lord can have up to five undead summoned by this ability at a time."
		}
		],
		spells: [
			"The skull lord is a 13th-level spellcaster. Its spellcasting ability is Charisma (spell save DC18, +10 to hit with spell attacks). The skull lord knows the following sorcerer spells:",
			"Cantrips (at will): chill touch, fire bolt, mage hand, poison spray, ray of frost, shocking grasp",
			"1st level (4 slots): magic missile, expeditious retreat, thunderwave",
			"2nd level (3 slots): mirror image, scorching ray",
			"3rd level (3 slots): fear, haste",
			"4th level (3 slots): dimension door, ice storm",
			"5th level (2 slots): cloudkill, cone of cold",
			"6th level (1 slot): eyebite",
			"7th level (1 slot): finger of death"
		]
	},
	"Soul Monger": {
		name: "Soul Monger",
		source: ["Mordenkainen's Tome of Foes", 226],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "neutral",
		ac: [15, "Studded Leather", false],
		hp: 123,
		hd: [19, 8],
		speed: "30 ft",
		scores: [8, 17, 14, 19, 15, 13],
		saves: ["", "7", "", "", "7", "5"],
		skills: "Perception +7",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "necrotic, poison",
		condition_immunities: "charmed, exhaustion, frightened",
		senses: "darkvision 60 ft",
		passive_perception: "17",
		languages: "Common, Elvish",
		challenge_rating: "11",
		attacks: [{
			name: "Phantasmal Dagger",
			ability: 2,
			damage: [4, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 19 (3d12) necrotic damage; target has disadvantage on saving throws until the start of the soul monger's next turn.",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The gloom weaver has advantage on saving throws against being charmed, and magic can't put it to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The soul monger's innate spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
				"At will: chill touch (3d8 damage), poison spray (3d12 damage)",
				"1/day each: bestow curse, chain lightning, finger of death, gaseous form, phantasmal killer, seeming."
			]
		}, {
			name: "Magic Resistance",
			description: "The soul monger has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Soul Thirst",
			description: "When the soul monger reduces a creature to 0 hit points, the soul monger can gain temporary hit points equal to half the creature's hit point maximum. While the soul monger has temporary hit points from this ability, it has advantage on attack rolls."
		}, {
			name: "Weight of Ages",
			description: "Any beast or humanoid, other than a shadar-kai, that starts its turn within 5 ft of the soul monger has its speed reduced by 20 ft until the start of that creature's next turn."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The soul monger makes two phantasmal dagger attacks."
		}, {
			name: "Wave of Weariness (Recharge 4-6)",
			description: "The soul monger emits weariness in a 60-foot cube. Each creature in that area must make a DC 16 Constitution saving throw. On a failed save, a creature takes 45 (10d8) psychic damage and suffers 1 level of exhaustion. On a successful save, it takes 22 (5d8) psychic damage.",
		}
		],
	},
	"Spirit Troll": {
		name: "Spirit Troll",
		source: ["Mordenkainen's Tome of Foes", 244],
		size: "Large",
		type: "giant",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 97,
		hd: [15, 10],
		speed: "30 ft",
		scores: [1, 17, 13, 8, 9, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		damage_resistances: "acid, cold, fire, lightning, thunder",
		damage_vulnerabilities: "",
		damage_immunities: "bludgeoning, piercing, and slashing from nonmagical attacks",
		condition_immunities: "exhaustion, grappled, paralyzed, petrified, prone, restrained, unconscious",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Giant",
		challenge_rating: "11",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [3, 10, "psychic"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 15 Wisdom saving throw or be stunned for 1 minute. The stunned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Claws",
			ability: 2,
			damage: [2, 10, "psychic"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Incorporeal Movement",
			description: "The troll can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
		}, {
			name: "Regeneration",
			description: "The troll regains 10 hit points at the start of each of its turns. If the troll takes psychic or force damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The troll makes three attacks: one with its bite and two with its claws."
		}
		],
	},
	"Spring Eladrin": {
		name: "Spring Eladrin",
		source: ["Mordenkainen's Tome of Foes", 196],
		size: "Medium",
		type: "fey (elf)",
		alignment: "chaotic neutral",
		ac: [19, "Natural Armor", false],
		hp: 127,
		hd: [17, 8],
		speed: "30 ft",
		scores: [14, 16, 16, 18, 11, 18],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +8, Persuasion +8",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Common, Elvish, Sylvan",
		challenge_rating: "10",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 4 (1d8) psychic damage; Two-Handed: 7 (1d10+2) slashing damage.",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "Plus 4 (1d8) psychic damage.",
		}
		],
		traits: [{
			name: "Fey Step (Recharge 4-6)",
			description: "As a bonus action, the eladrin can teleport up to 30 ft to an unoccupied space it can see."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The eladrin's innate spellcasting ability is Charisma (spell save DC 16). It can innately cast the following spells, requiring no material components:",
				"At will: charm person, Tasha's tasha's hideous laughter",
				"3/day each: confusion, enthrall, suggestion",
				"1/day each: hallucinatory terrain, Otto's irresistible dance."
			]
		}, {
			name: "Joyful Presence",
			description: [
				"Any non-eladrin creature that starts its turn within 60 ft of the eladrin must make a DC 16 Wisdom saving throw. On a failed save, the creature becomes charmed by the eladrin for 1 minute. On a successful save, the creature becomes immune to any eladrin's Joyful Presence for 24 hours.",
				"Whenever the eladrin deals damage to the charmed creature, it can repeat the saving throw, ending the effect on itself on a success.",
			]
		}, {
			name: "Magic Resistance",
			description: "The eladrin has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The eladrin makes two weapon attacks. The eladrin can cast one spell in place of one of these attacks."
		}
		],
	},
	"Star Spawn Grue": {
		name: "Star Spawn Grue",
		source: ["Mordenkainen's Tome of Foes", 234],
		size: "Small",
		type: "aberration",
		alignment: "neutral evil",
		ac: [11, "", false],
		hp: 17,
		hd: [5, 6],
		speed: "30 ft",
		scores: [6, 13, 10, 9, 11, 6],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "psychic",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Deep Speech",
		challenge_rating: "1/4",
		attacks: [{
			name: "Confounding Bite",
			ability: 2,
			damage: [2, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 10 Wisdom saving throw or attack rolls against it have advantage until the start of the grue's next turn.",
		}
		],
		traits: [{
			name: "Aura of Madness",
			description: "Creatures within 20 ft of the grue that aren't aberrations have disadvantage on saving throws, as well as on attack rolls against creatures other than a star spawn grue."
		}
		],
	},
	"Star Spawn Hulk": {
		name: "Star Spawn Hulk",
		source: ["Mordenkainen's Tome of Foes", 234],
		size: "Large",
		type: "aberration",
		alignment: "chaotic evil",
		ac: [16, "Natural Armor", false],
		hp: 136,
		hd: [13, 10],
		speed: "30 ft",
		scores: [20, 8, 21, 7, 12, 9],
		saves: ["", "3", "", "", "5", ""],
		skills: "Perception +5",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "charmed, frightened",
		senses: "darkvision 60 ft",
		passive_perception: "15",
		languages: "Deep Speech",
		challenge_rating: "10",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Psychic Mirror",
			description: "If the hulk takes psychic damage, each creature within 10 ft of the hulk takes that damage instead; the hulk takes none of the damage. In addition, the hulk's thoughts and location can't be discerned by magic."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hulk makes two slam attacks. If both attacks hit the same target, the target also takes 9 (2d8) psychic damage and must succeed on a DC 17 Constitution saving throw or be stunned until the end of the target's next turn.",
		}, {
			name: "Reaping Arms (Recharge 5-6)",
			description: "The hulk makes a separate slam attack against each creature within 10 ft of it. Each creature that is hit must also succeed on a DC 17 Dexterity saving throw or be knocked prone.",
		}
		],
	},
	"Star Spawn Larva Mage": {
		name: "Star Spawn Larva Mage",
		source: ["Mordenkainen's Tome of Foes", 235],
		size: "Medium",
		type: "aberration",
		alignment: "chaotic evil",
		ac: [16, "Natural Armor", false],
		hp: 168,
		hd: [16, 8],
		speed: "30 ft",
		scores: [17, 12, 23, 18, 12, 16],
		saves: ["", "6", "", "", "6", "8"],
		skills: "Perception +6",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "psychic",
		condition_immunities: "charmed, frightened, paralyzed, petrified, poisoned, restrained",
		senses: "darkvision 60 ft",
		passive_perception: "16",
		languages: "Deep Speech",
		challenge_rating: "16",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Target must succeed on a DC 19 Constitution saving throw or be poisoned until the end of its next turn.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The larva mage's innate spellcasting ability is Charisma (spell save DC 16, +8 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
				"At will: eldritch blast (3 beams, +3 bonus to each damage roll), minor illusion",
				"3/day each: dominate monster",
				"1/day each: circle of death"
			]
		}, {
			name: "Return to Worms",
			description: "When the larva mage is reduced to 0 hit points, it breaks apart into a swarm of insects in the same space. Unless the swarm is destroyed, the larva mage reforms from it 24 hours later."
		}
		],
		actions: [{
			name: "Plague of Worms (Recharge 6)",
			description: "Each creature other than a star spawn within 10 ft of the larva mage must succeed on a DC 19 Dexterity saving throw or take 22 (5d8) necrotic damage and be blinded and restrained by masses of swarming worms. The affected creature takes 22 (5d8) necrotic damage at the start of each of the larva mage's turns. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		reactions: [{
			name: "Feed on Weakness",
			description: "When a creature within 20 ft of the larva mage fails a saving throw, the larva mage gains 10 temporary hit points.",
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The larva mage can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The larva mage regains spent legendary actions at the start of its turn."
		}, {
			name: "Cantrip (Costs 2 Actions)",
			description: "The larva mage casts one cantrip."
		}, {
			name: "Slam (Costs 2 Actions)",
			description: "The larva mage makes one slam attack."
		}, {
			name: "Feed (Costs 3 Actions)",
			description: "Each creature restrained by the larva mage's Plague of Worms takes 13 (3d8) necrotic damage, and the larva mage gains 6 temporary hit points."
		}
		],
	},
	"Star Spawn Mangler": {
		name: "Star Spawn Mangler",
		source: ["Mordenkainen's Tome of Foes", 236],
		size: "Medium",
		type: "aberration",
		alignment: "chaotic evil",
		ac: [14, "", false],
		hp: 71,
		hd: [13, 8],
		speed: "40 ft, climb 40 ft",
		scores: [8, 18, 12, 11, 12, 7],
		saves: ["", "7", "4", "", "", ""],
		skills: "Stealth +7",
		damage_resistances: "cold",
		damage_vulnerabilities: "",
		damage_immunities: "psychic",
		condition_immunities: "charmed, frightened, prone",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Deep Speech",
		challenge_rating: "5",
		attacks: [{
			name: "Claw",
			ability: 2,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "If the attack roll has advantage, the target also takes 7 (2d6) psychic damage.",
		}
		],
		traits: [{
			name: "Ambush",
			description: "On the first round of each combat, the mangler has advantage on attack rolls against a creature that hasn't taken a turn yet."
		}, {
			name: "Shadow Stealth",
			description: "While in dim light or darkness, the mangler can take the Hide action as a bonus action."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The mangler makes two claw attacks."
		}, {
			name: "Flurry of Claws (Recharge 4-6)",
			description: "The mangler makes six claw attacks against one target. Either before or after these attacks, it can move up to its speed as a bonus action without provoking opportunity attacks."
		}
		],
	},
	"Star Spawn Seer": {
		name: "Star Spawn Seer",
		source: ["Mordenkainen's Tome of Foes", 236],
		size: "Medium",
		type: "aberration",
		alignment: "neutral evil",
		ac: [17, "Natural Armor", false],
		hp: 153,
		hd: [18, 8],
		speed: "30 ft",
		scores: [14, 12, 18, 22, 19, 16],
		saves: ["", "6", "", "11", "9", "8"],
		skills: "Perception +9",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "psychic",
		condition_immunities: "charmed, frightened",
		senses: "darkvision 60 ft",
		passive_perception: "19",
		languages: "Common, Deep Speech, Undercommon",
		challenge_rating: "13",
		attacks: [{
			name: "Comet Staff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			modifiers: [4, 4, true],
			description: "Plus 18 (4d8) psychic damage; Two-Handed: 10 (1d8+6) bludgeoning damage. Target must succeed on a DC 19 Constitution saving throw or be incapacitated until the end of its next turn.",
		}, {
			name: "Psychic Orb",
			ability: 4,
			damage: [5, 10, "psychic"],
			range: "Ranged (120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Out-of-Phase Movement",
			description: "The seer can move through other creatures and objects as if they were difficult terrain. Each creature it moves through takes 5 (1d10) psychic damage; no creature can take this damage more than once per turn. The seer takes 5 (1d10) force damage if it ends its turn inside an object."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The seer makes two comet staff attacks or uses Psychic Orb twice."
		}, {
			name: "Collapse Distance (Recharge 6)",
			description: "The seer warps space around a creature it can see within 30 ft of it. That creature must make a DC 19 Wisdom saving throw. On a failed save, the target, along with any equipment it is wearing or carrying, is magically teleported up to 60 ft to an unoccupied space the seer can see, and all other creatures within 10 ft of the target's original space each takes 39 (6d12) psychic damage. On a successful save, the target takes 19 (3d12) psychic damage."
		}
		],
		reactions: [{
			name: "Bend Space",
			description: "When the seer would be hit by an attack, it teleports, exchanging positions with another star spawn it can see within 60 ft of it. The other star spawn is hit by the attack instead.",
		}
		],
	},
	"Steeder Female": {
		name: "Steeder Female",
		source: ["Mordenkainen's Tome of Foes", 238],
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
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 9 {2d8) poison damage",
		}, {
			name: "Sticky Leg",
			ability: 2,
			damage: [0, 0, ""],
			range: "Melee (5 ft)",
			description: "Target must be medium or smaller. Recharges when the Steeder Has No Creatures Grappled. On hit: The target is stuck to the steeder's leg and grappled until it escapes (escape DC 12). The steeder can have only one creature grappled at a time.",
		}
		],
		traits: [{
			name: "Spider Climb",
			description: "The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Leap",
			description: "The steeder can expend all its movement on its turn to jump up to 90 ft vertically or horizontally, provided that is speed is at least 30 ft."
		}
		],
	},
	"Steeder Male": {
		name: "Steeder Male",
		source: ["Mordenkainen's Tome of Foes", 238],
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
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 4 (ld8) poison damage",
		}, {
			name: "Sticky Leg",
			ability: 2,
			damage: [0, 0, ""],
			range: "Melee (5 ft)",
			description: "Target must be small or tiny. On hit: The target is stuck to the steeder's leg and grappled until it escapes (escape DC 12). The steeder can have only one creature grappled at a time.",
		}
		],
		traits: [{
			name: "Spider Climb",
			description: "The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Leap",
			description: "The steeder can expend all its movement on its turn to jump up to 60 ft vertically or horizontally, provided that is speed is at least 30 ft."
		}
		],
	},
	"Steel Predator": {
		name: "Steel Predator",
		source: ["Mordenkainen's Tome of Foes", 239],
		size: "Large",
		type: "construct",
		alignment: "lawful evil",
		ac: [20, "Natural Armor", false],
		hp: 207,
		hd: [18, 10],
		speed: "40 ft",
		scores: [24, 17, 22, 4, 14, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +7, Stealth +8, Survival +7",
		damage_resistances: "cold, lightning, necrotic, thunder",
		damage_vulnerabilities: "",
		damage_immunities: "poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned, stunned",
		senses: "blindsight 30 ft, darkvision 60 ft",
		passive_perception: "17",
		languages: "understands Modron and the language of its owner but can’t speak",
		challenge_rating: "16",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Constructed Nature",
			description: "A steel predator doesn’t require air, food, drink, or sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The steel predator's innate spellcasting ability is Wisdom. The steel predator can innately cast the following spells, requiring no components:",
				"3/day each: dimension door (self only), plane shift (self only)"
			]
		}, {
			name: "Magic Resistance",
			description: "The steel predator has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The steel predator's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The steel predator makes three attacks: one with its bite and two with its claw."
		}, {
			name: "Stunning Roar (Recharge 5-6)",
			description: "The steel predator emits a roar in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw. On a failed save, a creature takes 27 (5d10) thunder damage, drops everything it's holding, and is stunned for 1 minute. On a successful save, a creature takes half as much damage. The stunned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
	},
	"Stone Cursed": {
		name: "Stone Cursed",
		source: ["Mordenkainen's Tome of Foes", 240],
		size: "Medium",
		type: "construct",
		alignment: "lawful evil",
		ac: [17, "Natural Armor", false],
		hp: 19,
		hd: [3, 8],
		speed: "10 ft",
		scores: [16, 5, 14, 5, 8, 7],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "bludgeoning",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, frightened, petrified, poisoned",
		senses: "",
		passive_perception: "9",
		languages: "the languages it knew in life",
		challenge_rating: "1",
		attacks: [{
			name: "Petrifying Claws",
			ability: 1,
			damage: [1, 10, "slashing"],
			range: "Melee (5 ft)",
			description: "If the attack roll has advantage: 14 (2d10+3) slashing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw, or it begins to turn to stone and is restrained until the end of its next turn, when it must repeat the saving throw. The effect ends if the second save is successful; otherwise the target is petrified for 24 hours.",
		}
		],
		traits: [{
			name: "Constructed Nature",
			description: "A stone cursed doesn't require air, food, drink, or sleep."
		}, {
			name: "Cunning Opportunist",
			description: "The stone cursed has advantage on the attack rolls of opportunity attacks."
		}, {
			name: "False Appearance",
			description: "While the stone cursed remains motionless, it is indistinguishable from a normal statue."
		}
		],
	},
	"Stone Defender": {
		name: "Stone Defender",
		source: ["Mordenkainen's Tome of Foes", 126],
		size: "Medium",
		type: "construct",
		alignment: "unaligned",
		ac: [16, "Natural Armor", false],
		hp: 52,
		hd: [7, 8],
		speed: "30 ft",
		scores: [19, 10, 17, 3, 10, 1],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "poison; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t adamantine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "understands one language of its creator but can’t speak",
		challenge_rating: "4",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the target is Large or smaller, it is knocked prone.",
		}
		],
		traits: [{
			name: "Constructed Nature",
			description: "A clockwork doesn't require air, food, drink, or sleep."
		}, {
			name: "False Appearance",
			description: "While the stone defender remains motionless against an uneven earthen or stone surface, it is indistinguishable from that surface."
		}, {
			name: "Magic Resistance",
			description: "The stone defender has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Individual Designs",
			description: [
				"A gnome artisan values an individualized clockwork more highly than a perfectly functioning one that copies too much from another creation. For that reason, even clockworks that fit established designs, such as those described here, are seldom identical.",
				"A clockwork can be customized by adding one of the following enhancements and one potential malfunction to its stat block. You can select randomly or choose a pair of modifications that fit the temperament of the clockwork's builder.",
				"d10: Enhancement:",
				"1: Camouflaged. The clockwork gains proficiency in Stealth if it doesn't already have it. While motionless, it is indistinguishable from a stopped machine.",
				"2: Sensors. The range of the clockwork's darkvision becomes 120 ft, unless it is higher, and it gains proficiency in Perception if it doesn't already have it.",
				"3: Improved Armor. The clockwork's AC increases by 2.",
				"4: Increased Speed. The clockwork's speed increases by 10 ft.",
				"5: Reinforced Construction. The clockwork has resistance to force, lightning, and thunder damage.",
				"6: Self-Repairing. If the clockwork starts its turn with at least 1 hit point, it regains 5 hit points. If it takes lightning damage, this ability doesn't function at the start of its next turn.",
				"7: Sturdy Frame. The clockwork's hit point maximum increases by an amount equal to its number of Hit Dice.",
				"8: Suction. The clockwork gains a climbing speed of 30 ft.",
				"9: Vocal Resonator. The clockwork gains the ability to speak rudimentary Common or Gnomish (creator's choice).",
				"10: Water Propulsion. The clockwork gains a swimming speed of 30 ft.",
				"Clockwork Malfunctions:",
				"d10: Malfunction",
				"1: Faulty Sensors. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork is blinded until the end of its turn.",
				"2: Flawed Targeting. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork makes attack rolls with disadvantage until the end of its turn.",
				"3: Ground Fault. The clockwork has vulnerability to lightning damage.",
				"4: Imprinting Loop. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork mistakes one creature it can see within 30 ft for its creator. The clockwork won't willingly harm that creature for 1 minute or until that creature attacks it or deals damage to it.",
				"5: Leaking Lubricant. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork gains 1 level of exhaustion that it isn't immune to.",
				"6: Limited Steering. The clockwork must move in a straight line. It can turn up to 90 degrees before moving and again at the midpoint of its movement. It can rotate freely if it doesn't use any of its speeds on its turn.",
				"7: Overactive Sense of Self-Preservation. If the clockwork has half its hit points or fewer at the start of its turn in combat, roll a d6. If you roll a 1, it retreats from combat. If retreat isn't possible, it continues fighting.",
				"8: Overheats. Roll a d6 at the start of the clockwork's turn. If you roll a 1, the clockwork is incapacitated until the end of its turn.",
				"9: Rusty Gears. The clockwork has disadvantage on initiative rolls, and its speed decreases by 10 ft.",
				"10: Weak Armor. The clockwork isn't immune to bludgeoning, piercing, and slashing damage from nonmagical attacks that aren't adamantine."
			]
		}
		],
		reactions: [{
			name: "Intercept Attack",
			description: "In response to another creature within 5 ft of it being hit by an attack roll, the stone defender gives that creature a +5 bonus to its AC against that attack, potentially causing a miss. To use this ability, the stone defender must be able to see the creature and the attacker."
		}
		],
	},
	"Summer Eladrin": {
		name: "Summer Eladrin",
		source: ["Mordenkainen's Tome of Foes", 196],
		size: "Medium",
		type: "fey (elf)",
		alignment: "chaotic neutral",
		ac: [19, "Natural Armor", false],
		hp: 127,
		hd: [17, 8],
		speed: "50 ft",
		scores: [19, 21, 16, 14, 12, 18],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +8, Intimidation +8",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "9",
		languages: "Common, Elvish, Sylvan",
		challenge_rating: "10",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 4 (1d8) fire damage; Two-Handed: 15 (2d10+4) slashing damage.",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [2, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "Plus 4 (1d8) fire damage.",
		}
		],
		traits: [{
			name: "Fearsome Presence",
			description: "Any non-eladrin creature that starts its turn within 60 ft of the eladrin must make a DC 16 Wisdom saving throw. On a failed save, the creature becomes frightened of the eladrin for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to any eladrin's Fearsome Presence for the next 24 hours.",
		}, {
			name: "Fey Step (Recharge 4-6)",
			description: "As a bonus action, the eladrin can teleport up to 30 ft to an unoccupied space it can see."
		}, {
			name: "Magic Resistance",
			description: "The eladrin has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The eladrin makes two weapon attacks."
		}
		],
		reactions: [{
			name: "Parry",
			description: "The eladrin adds 3 to its AC against one melee attack that would hit it. To do so, the eladrin must see the attacker and be wielding a melee weapon.",
		}
		],
	},
	"Sword Wraith Commander": {
		name: "Sword Wraith Commander",
		source: ["Mordenkainen's Tome of Foes", 241],
		size: "Medium",
		type: "undead",
		alignment: "lawful evil",
		ac: [18, "Breastplate", true],
		hp: 127,
		hd: [15, 8],
		speed: "30 ft",
		scores: [18, 14, 18, 11, 12, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		damage_resistances: "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, frightened, poisoned, unconscious",
		senses: "darkvision 60 ft",
		passive_perception: "14",
		languages: "the languages it knew in life",
		challenge_rating: "8",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 9 (1d10+4) slashing damage.",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Undead Nature",
			description: "A sword wraith doesn't require air, food, drink, or sleep."
		}, {
			name: "Martial Fury",
			description: "As a bonus action, the sword wraith can make one weapon attack, which deals an extra 9 (2d8) necrotic damage on a hit. If it does so, attack rolls against it have advantage until the start of its next turn."
		}, {
			name: "Turning Defiance",
			description: "The sword wraith and any other sword wraiths within 30 ft of it have advantage on saving throws against effects that turn undead."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The sword wraith makes two weapon attacks."
		}, {
			name: "Call to Honor (1/Day)",
			description: "To use this action, the sword wraith must have taken damage during the current combat. If the sword wraith can use this action, it gives itself advantage on attack rolls until the end of its next turn, and 1d4+1 sword wraith warriors appear in unoccupied spaces within 30 ft of it. The warriors last until they drop to 0 hit points, and they take their turns immediately after the commander's turn on the same initiative count."
		}
		],
	},
	"Sword Wraith Warrior": {
		name: "Sword Wraith Warrior",
		source: ["Mordenkainen's Tome of Foes", 241],
		size: "Medium",
		type: "undead",
		alignment: "lawful evil",
		ac: [16, "Chain Mail", true],
		hp: 45,
		hd: [6, 8],
		speed: "30 ft",
		scores: [18, 12, 17, 6, 9, 10],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, frightened, poisoned, unconscious",
		senses: "darkvision 60 ft",
		passive_perception: "9",
		languages: "the languages it knew in life",
		challenge_rating: "3",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 9 (1d10+4) slashing damage.",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Undead Nature",
			description: "A sword wraith doesn't require air, food, drink, or sleep."
		}, {
			name: "Martial Fury",
			description: "As a bonus action, the sword wraith can make one weapon attack. If it does so, attack rolls against it have advantage until the start of its next turn."
		}
		],
	},
	"The Angry": {
		name: "The Angry",
		source: ["Mordenkainen's Tome of Foes", 231],
		size: "Medium",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [18, "Natural Armor", false],
		hp: 255,
		hd: [30, 8],
		speed: "30 ft",
		scores: [17, 10, 19, 8, 13, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +6",
		damage_resistances: "bludgeoning, piercing, and slashing while in dim light or darkness",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "16",
		languages: "Common",
		challenge_rating: "13",
		attacks: [{
			name: "Hook",
			ability: 1,
			damage: [2, 12, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Two Heads",
			description: "The Angry has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious."
		}, {
			name: "Rising Anger",
			description: [
				"If another creature deals damage to the Angry, the Angry's attack rolls have advantage until the end of its next turn, and the first time it hits with a hook attack on its next turn, the attack's target takes an extra 19 (3d12) psychic damage.",
				"On its turn, the Angry has disadvantage on attack rolls if no other creature has dealt damage to it since the end of its last turn."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The Angry makes two hook attacks."
		}
		],
	},
	"The Hungry": {
		name: "The Hungry",
		source: ["Mordenkainen's Tome of Foes", 232],
		size: "Medium",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [17, "Natural Armor", false],
		hp: 225,
		hd: [30, 8],
		speed: "30 ft",
		scores: [19, 10, 17, 6, 11, 6],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing while in dim light or darkness",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Common",
		challenge_rating: "11",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 13 (3d8) necrotic damage.",
		}, {
			name: "Claws",
			ability: 1,
			damage: [4, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "If the target is Medium or smaller, it is grappled (escape DC 16) and restrained until the grapple ends. While grappling a creature, the Hungry can't attack with its claws.",
		}
		],
		traits: [{
			name: "Life Hunger",
			description: "If a creature the Hungry can see regains hit points, the Hungry gains two benefits until the end of its next turn: it has advantage on attack rolls, and its bite deals an extra 22 (4d10) necrotic damage on a hit."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The Hungry makes two attacks: one with its bite and one with its claws."
		}
		],
	},
	"The Lonely": {
		name: "The Lonely",
		source: ["Mordenkainen's Tome of Foes", 232],
		size: "Medium",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [16, "Natural Armor", false],
		hp: 112,
		hd: [15, 8],
		speed: "30 ft",
		scores: [16, 12, 17, 6, 11, 6],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing while in dim light or darkness",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Common",
		challenge_rating: "9",
		attacks: [{
			name: "Harpoon Arm",
			ability: 1,
			damage: [4, 8, "piercing"],
			range: "Melee (60 ft)",
			description: "Target is grappled (escape DC 15) if it is a Large or smaller creature. The Lonely has two harpoon arms and can grapple up to two creatures at once.",
		}
		],
		traits: [{
			name: "Psychic Leech",
			description: "At the start of each of the Lonely's turns, each creature within 5 ft of it must succeed on a DC 15 Wisdom saving throw or take 10 (3d6) psychic damage."
		}, {
			name: "Thrives on Company",
			description: "The Lonely has advantage on attack rolls while it is within 30 ft of at least two other creatures. It otherwise has disadvantage on attack rolls."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The Lonely makes one harpoon arm attack and uses Sorrowful Embrace."
		}, {
			name: "Sorrowful Embrace",
			description: "Each creature grappled by the Lonely must make a DC 15 Wisdom saving throw. A creature takes 18 (4d8) psychic damage on a failed save, or half as much damage on a successful one. In either case, the Lonely pulls each creature grappled by it up to 30 ft straight toward it."
		}
		],
	},
	"The Lost": {
		name: "The Lost",
		source: ["Mordenkainen's Tome of Foes", 233],
		size: "Medium",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [15, "Natural Armor", false],
		hp: 78,
		hd: [12, 8],
		speed: "30 ft",
		scores: [17, 12, 15, 6, 7, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +6",
		damage_resistances: "bludgeoning, piercing, and slashing while in dim light or darkness",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "8",
		languages: "Common",
		challenge_rating: "7",
		attacks: [{
			name: "Arm Spike",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Embrace",
			ability: 1,
			damage: [4, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Target is grappled (escape DC 14) if it is a Medium or smaller creature. Until the grapple ends, the target is frightened, and it takes 27 (6d8) psychic damage at the end of each of its turns. The Lost can embrace only one creature at a time.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The Lost makes two arm spike attacks."
		}
		],
		reactions: [{
			name: "Tightening Embrace",
			description: "If the Lost takes damage while it has a creature grappled, that creature takes 18 (4d8) psychic damage.",
		}
		],
	},
	"The Wretched": {
		name: "The Wretched",
		source: ["Mordenkainen's Tome of Foes", 233],
		size: "Small",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [15, "Natural Armor", false],
		hp: 10,
		hd: [4, 6],
		speed: "40 ft",
		scores: [7, 12, 9, 5, 6, 5],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing while in dim light or darkness",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "8",
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "The Wretched attaches to the target. While attached, the Wretched can't attack, and at the start of each of the Wretched's turns, the target takes 6 (1d10+1) necrotic damage. The attached Wretched moves with the target whenever the target moves, requiring none of the Wretched's movement. The Wretched can detach itself by spending 5 ft of its movement on its turn. A creature, including the target, can use its action to detach a Wretched.",
		}
		],
		traits: [{
			name: "Wretched Pack Tactics",
			description: "The Wretched has advantage on an attack roll against a creature if at least one of the Wretched's allies is within 5 ft of the creature and the ally isn't incapacitated. The Wretched otherwise has disadvantage on attack rolls."
		}
		],
	},
	"Titivilus": {
		name: "Titivilus",
		source: ["Mordenkainen's Tome of Foes", 178],
		size: "Medium",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [20, "Natural Armor", false],
		hp: 127,
		hd: [17, 8],
		speed: "40 ft, fly 60 ft",
		scores: [19, 22, 17, 24, 22, 26],
		saves: ["", "11", "8", "", "11", "13"],
		skills: "Deception +13, Insight +11, Intimidation +13, Persuasion +13",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t silvered",
		damage_vulnerabilities: "",
		damage_immunities: "fire, poison",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "16",
		languages: "all, telepathy 120 ft",
		challenge_rating: "16",
		attacks: [{
			name: "Silver Sword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 16 (3d10) necrotic damage; Two-Handed: 9 (1d10+4) slashing damage. If the target is a creature, its hit point maximum is reduced by an amount equal to half the necrotic damage it takes.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"Titivilus's innate spellcasting ability is Charisma (spell save DC 21). He can innately cast the following spells, requiring no material components:",
				"At will: alter self, animate dead, bestow curse, confusion, major image, modify memory, nondetection, sending, suggestion",
				"3/day each: greater invisibility (self only), mislead",
				"1/day each: feeblemind, symbol (discord or sleep only)"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Titivilus fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Titivilus has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "Titivilus's weapon attacks are magical."
		}, {
			name: "Regeneration",
			description: "Titivilus regains 10 hit points at the start of his turn. If he takes cold or radiant damage, this trait doesn't function at the start of his next turn. Titivilus dies only if he starts his turn with 0 hit points and doesn't regenerate."
		}, {
			name: "Ventiloquism",
			description: "Whenever Titivilus speaks, he can choose a point within 60 ft; his voice emanates from that point."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Titivilus makes one sword attack and uses his Frightful Word once."
		}, {
			name: "Frightful Word",
			description: "Titivilus targets one creature he can see within 10 ft of him. The target must succeed on a DC 21 Wisdom saving throw or become frightened of him for 1 minute. While frightened in this way, the target must take the Dash action and move away from Titivilus by the safest available route on each of its turns, unless there is nowhere to move, in which case it needn't take the Dash action. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Teleport",
			description: "Titivilus magically teleports, along with any equipment he is wearing and carrying, up to 120 ft to an unoccupied space he can see."
		}, {
			name: "Twisting Words",
			description: "Titivilus targets one creature he can see within 60 ft of him. The target must succeed on a DC 21 Charisma saving throw or become charmed by Titivilus for 1 minute. The charmed target can repeat the saving throw if Titivilus deals any damage to it. A creature that succeeds on the saving throw is immune to Titivilus's Twisting Words for 24 hours.",
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Titivilus can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Titivilus regains spent legendary actions at the start of his turn."
		}, {
			name: "Assault (Costs 2 Actions)",
			description: "Titivilus attacks with his silver sword or uses his Frightful Word."
		}, {
			name: "Corrupting Guidance",
			description: "Titivilus uses Twisting Words. Alternatively, he targets one creature charmed by him that is within 60 ft of him; that charmed target must make a DC 21 Charisma saving throw. On a failure, Titivilus decides how the target acts during its next turn."
		}, {
			name: "Teleport",
			description: "Titivilus uses his Teleport action."
		}
		],
	},
	"Tortle": {
		name: "Tortle",
		source: ["Mordenkainen's Tome of Foes", 242],
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
		passive_perception: "11",
		languages: "Aquan, Common",
		challenge_rating: "1/4",
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
			name: "Claws",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "",
		}
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
		source: ["Mordenkainen's Tome of Foes", 242],
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
		passive_perception: "12",
		languages: "Aquan, Common",
		challenge_rating: "2",
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
		}
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
	},
	"Vampiric Mist": {
		name: "Vampiric Mist",
		source: ["Mordenkainen's Tome of Foes", 246],
		size: "Medium",
		type: "undead",
		alignment: "chaotic evil",
		ac: [13, "", false],
		hp: 45,
		hd: [6, 8],
		speed: "0 ft, fly 30 ft (hover)",
		scores: [6, 16, 16, 6, 12, 7],
		saves: ["", "", "", "", "3", ""],
		damage_resistances: "acid, cold, lightning, necrotic, thunder; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "",
		challenge_rating: "3",
		attacks: [{
			name: "",
			ability: 0,
			damage: [0, 0, ""],
			range: "",
			description: "",
		}
		],
		traits: [{
			name: "Undead Nature",
			description: "A vampiric mist doesn't require air or sleep."
		}, {
			name: "Blood Sense",
			description: "The vampiric mist can sense living creatures that have blood or similar vital fluids in a radius of 60 ft."
		}, {
			name: "Forbiddance",
			description: "The vampiric mist can 't enter a residence without an invitation from one of the occupants."
		}, {
			name: "Misty Form",
			description: "The vampiric mist can occupy another creature's space and vice versa. In addition, if air can pass through a space, the mist can pass through it without squeezing. Each foot of movement in water costs it 2 extra ft, rather than l extra foot. The mist can 't manipulate objects in any way that requires hands; it can apply simple force only."
		}, {
			name: "Sunlight Hypersensitivity",
			description: "The vampiric mist takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, the mist has disadvantage on attack rolls and ability checks."
		}
		],
		actions: {
			name: "Blood Drain",
			description: [
				"One creature in the vampiric mist's space must make a DC 13 Constitution saving throw (undead and constructs automatically succeed). On a failed save, the target takes 10 (2d6+3) necrotic damage, its hit point maximum is reduced by an amount equal to the necrotic damage taken, and the mist regains hit points equal to that amount.",
				"This reduction to the target's hit point maximum lasts until the target finishes a long rest. It dies if this effect reduces its hit point maximum to 0."
			]
		},
	},
	"Venom Troll": {
		name: "Venom Troll",
		source: ["Mordenkainen's Tome of Foes", 245],
		size: "Large",
		type: "giant",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 94,
		hd: [9, 10],
		speed: "30 ft",
		scores: [18, 13, 20, 7, 9, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "Giant",
		challenge_rating: "7",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 4 (1d8) poison damage, and the creature is poisoned until the start of the troll's next turn.",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 4 (1d8) poison damage.",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The troll has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Poison Splash",
			description: "When the troll takes damage of any type but psychic, each creature within 5 ft of the troll takes 9 (2d8) poison damage."
		}, {
			name: "Regeneration",
			description: "The troll regains 10 hit points at the start of each of its turns. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The troll makes three attacks: one with its bite and two with its claws."
		}, {
			name: "Venom Spray (Recharge 6)",
			description: "The troll slices itself with a claw, releasing a spray of poison in a 15-foot cube. The troll takes 7 (2d6) slashing damage (this damage can't be reduced in any way). Each creature in the area must make a DC 16 Constitution saving throw. On a failed save, a creature takes 18 (4d8) poison damage and is poisoned for 1 minute. On a successful save, the creature takes half as much damage and isn't poisoned. A poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
	},
	"Wastrilith": {
		name: "Wastrilith",
		source: ["Mordenkainen's Tome of Foes", 139],
		size: "Large",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [18, "Natural Armor", false],
		hp: 157,
		hd: [15, 10],
		speed: "30 ft, swim 80 ft",
		scores: [19, 18, 21, 19, 12, 14],
		saves: ["9", "", "10", "", "", ""],
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "11",
		languages: "Abyssal, telepathy 120 ft",
		challenge_rating: "13",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 12, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [4, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The wastrilith can breathe air and water."
		}, {
			name: "Corrupt Water",
			description: [
				"At the start of each of the wastrilith's turns, exposed water within 30 ft of it is befouled. Underwater, this effect lightly obscures the area until a current clears it away. Water in containers remains corrupted until it evaporates.",
				"A creature that consumes this foul water or swims in it must make a DC 18 Constitution saving throw. On a successful save, the creature is immune to the foul water for 24 hours. On a failed save, the creature takes 14 (4d6) poison damage and is poisoned for 1 minute. At the end of this time, the poisoned creature must repeat the saving throw. On a failure, the creature takes 18 (4d8) poison damage and is poisoned until it finishes a long rest.",
				"If another demon drinks the foul water as an action, it gains 11 (2d10) temporary hit points.",
			]
		}, {
			name: "Magic Resistance",
			description: "The wastrilith has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Undertow",
			description: "As a bonus action when the wastrilith is underwater, it can cause all water within 60 ft of it to be difficult terrain for other creatures until the start of its next turn."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The wastrilith uses Grasping Spout and makes three attacks: one with its bite and two with its claws."
		}, {
			name: "Grasping Spout",
			description: "The wastrilith magically launches a spout of water at one creature it can see within 60 ft of it. The target must make a DC 17 Strength saving throw, and it has disadvantage if it's underwater. On a failed save, it takes 22 (4d8+4) acid damage and is pulled up to 60 ft toward the wastrilith. On a successful save, it takes half as much damage and isn't pulled."
		}
		],
	},
	"Water Elemental Myrmidon": {
		name: "Water Elemental Myrmidon",
		source: ["Mordenkainen's Tome of Foes", 203],
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
		damage_vulnerabilities: "",
		damage_immunities: "poison",
		condition_immunities: "paralyzed, petrified, poisoned, prone",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Aquan, one language of its creator's choice",
		challenge_rating: "7",
		attacks: [{
			name: "Trident",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Magic Weapons",
			description: "The myrmidon's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The myrmidon makes three trident attacks."
		}, {
			name: "Freezing Strikes (Recharge 6)",
			description: "The myrmidon uses Multiattack. Each attack that hits deals an extra 5 (1d10) cold damage, and the target's speed is reduced by 10 ft until the end of the myrmidon's next turn.",
		}
		],
	},
	"White Abishai": {
		name: "White Abishai",
		source: ["Mordenkainen's Tome of Foes", 163],
		size: "Medium",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [15, "Natural Armor", false],
		hp: 68,
		hd: [8, 8],
		speed: "30 ft, fly 40 ft",
		scores: [16, 11, 18, 11, 12, 13],
		saves: ["6", "", "7", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks that aren’t silvered",
		damage_vulnerabilities: "",
		damage_immunities: "cold, fire, poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "11",
		languages: "Draconic, Infernal, telepathy 120 ft",
		challenge_rating: "6",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d10+3) slashing damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [1, 10, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) cold damage.",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the abishai's darkvision."
		}, {
			name: "Magic Resistance",
			description: "The abishai has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The abishai's weapon attacks are magical."
		}, {
			name: "Reckless",
			description: "At the start of its turn, the abishai can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The abishai makes two attacks: one with its longsword and one with its claw."
		}
		],
		reactions: [{
			name: "Vicious Reprisal",
			description: "In response to taking damage, the abishai makes a bite attack against a random creature within 5 ft of it. If no creature is within reach, the abishai moves up to half its speed toward an enemy it can see, without provoking opportunity attacks.",
		}
		],
	},
	"Winter Eladrin": {
		name: "Winter Eladrin",
		source: ["Mordenkainen's Tome of Foes", 197],
		size: "Medium",
		type: "fey (elf)",
		alignment: "chaotic neutral",
		ac: [19, "Natural Armor", false],
		hp: 127,
		hd: [17, 8],
		speed: "30 ft",
		scores: [11, 10, 16, 18, 17, 13],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Common, Elvish, Sylvan",
		challenge_rating: "10",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 5 (1d10) slashing damage.",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Fey Step (Recharge 4-6)",
			description: "As a bonus action, the eladrin can teleport up to 30 ft to an unoccupied space it can see."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The eladrin's innate spellcasting ability is Intelligence (spell save DC 16). It can innately cast the following spells, requiring no material components:",
				"At will: fog cloud, gust of wind",
				"1/day each: cone of cold, ice storm."
			]
		}, {
			name: "Magic Resistance",
			description: "The eladrin has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Sorrowful Presence",
			description: [
				"Any non-eladrin creature that starts its turn within 60 ft of the eladrin must make a DC 13 Wisdom saving throw. On a failed save, the creature becomes charmed by the eladrin for 1 minute. While charmed in this way, the creature has disadvantage on ability checks and saving throws. The charmed creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to any eladrin's Sorrowful Presence for the next 24 hours.",
				"Whenever the eladrin deals damage to the charmed creature, it can repeat the saving throw, ending the effect on itself on a success.",
			]
		}
		],
		reactions: [{
			name: "Frigid Rebuke",
			description: "When the eladrin takes damage from a creature the eladrin can see within 60 ft of it, the eladrin can force that creature to succeed on a DC 16 Constitution saving throw or take 11 (2d10) cold damage.",
		}
		],
	},
	"Yagnoloth": {
		name: "Yagnoloth",
		source: ["Mordenkainen's Tome of Foes", 252],
		size: "Large",
		type: "fiend (yugoloth)",
		alignment: "neutral evil",
		ac: [17, "Natural Armor", false],
		hp: 147,
		hd: [14, 10],
		speed: "40 ft",
		scores: [19, 14, 21, 16, 15, 18],
		saves: ["", "6", "", "7", "6", "8"],
		skills: "Deception +8, Insight +6, Perception +6, Persuasion +8",
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		damage_immunities: "acid, poison",
		condition_immunities: "poisoned",
		senses: "blindsight 60 ft, darkvision 60 ft",
		passive_perception: "16",
		languages: "Abyssal, Infernal, telepathy 60 ft",
		challenge_rating: "11",
		attacks: [{
			name: "Electrified Touch",
			ability: 1,
			damage: [6, 8, "lightning"],
			range: "Melee (5 ft)",
			modifiers: ["", "", false],
			description: "",
		}, {
			name: "Massive Arm",
			ability: 1,
			damage: [3, 12, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "If the target is a creature, it must succeed on a DC 16 Constitution saving throw or become stunned until the end of the yagnoloth's next turn.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The yagnoloth's innate spellcasting ability is Charisma (spell save DC 16). It can innately cast the following spells, requiring no material components:",
				"At will: darkness, detect magic, dispel magic, invisibility (self only), suggestion",
				"3/day each: lightning bolt"
			]
		}, {
			name: "Magic Resistance",
			description: "The yagnoloth has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The yagnoloth's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The yagnoloth makes one massive arm attack and one electrified touch attack, or it makes one massive arm attack and teleports before or after the attack."
		}, {
			name: "Life Leech",
			description: "The yagnoloth touches one incapacitated creature within 15 ft of it. The target takes 36 (7d8+4) necrotic damage, and the yagnoloth gains temporary hit points equal to half the damage dealt. The target must succeed on a DC 16 Constitution saving throw, or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest, and the target dies if its hit point maximum is reduced to 0."
		}, {
			name: "Battlefield Cunning (Recharge 4-6)",
			description: "Up to two allied yugoloths within 60 ft of the yagnoloth that can hear it can use their reactions to make one melee attack each."
		}, {
			name: "Teleport",
			description: "The yagnoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 ft to an unoccupied space it can see."
		}
		],
	},
	"Yeenoghu": {
		name: "Yeenoghu",
		source: ["Mordenkainen's Tome of Foes", 155],
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
		damage_vulnerabilities: "",
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
				"At will: detect magic, spiritual weapon (8th-level spell, 4d8+2 force damage on a hit, appears as a flail)",
				"3/day each: dispel magic, fear, invisibility",
				"1/day: teleport"
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
				"3. The target must succeed on a DC 17 Wisdom saving throw or be affected by the confusion spell until the start of Yeenoghu's next turn.",
			],
		}, {
			name: "Lair Actions",
			description: [
				"On initiative count 20 (losing initiative ties), Yeenoghu can take a lair action to cause one of the following effects; he can’t use the same effect two rounds in a row:",
				"Yeenoghu causes an iron spike: 5 ft tall and 1 inch in diameter: to burst from the ground at a point he can see within 100 ft of him. Any creature in the space where the spike emerges must make a DC 24 Dexterity saving throw. On a failed save, the creature takes 27 (6d8) piercing damage and is restrained by being impaled on the spike. A creature can use an action to remove itself (or a creature it can reach) from the spike, ending the restrained condition.",
				"Each gnoll or hyena that Yeenoghu can see can use its reaction to move up to its speed.",
				"Until the next initiative count 20, all gnolls and hyenas within the lair are enraged, causing them to have advantage on melee weapon attack rolls and causing attack rolls to have advantage against them.",
			]
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Yeenoghu can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Yeenoghu regains spent legendary actions at the start of his turn."
		}, {
			name: "Charge",
			description: "Yeenoghu moves up to his speed."
		}, {
			name: "Swat Away",
			description: "Yeenoghu makes a flail attack. If the attack hits, the target must succeed on a DC 24 Strength saving throw or be pushed 15 ft in a straight line away from Yeenoghu. If the saving throw fails by 5 or more, the target falls prone.",
		}, {
			name: "Savage",
			description: "Yeenoghu makes a bite attack against each creature within 10 ft of him.",
		}
		],
	},
	"Young Kruthik": {
		name: "Young Kruthik",
		source: ["Mordenkainen's Tome of Foes", 211],
		size: "Small",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [16, "Natural Armor", false],
		hp: 9,
		hd: [2, 6],
		speed: "30 ft, burrow 10 ft, climb 30 ft",
		scores: [13, 16, 13, 4, 10, 6],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "",
		condition_immunities: "",
		senses: "darkvision 30 ft, tremorsense 60 ft",
		passive_perception: "10",
		languages: "Kruthik",
		challenge_rating: "1/8",
		attacks: [{
			name: "Stab",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Zaratan": {
		name: "Zaratan",
		source: ["Mordenkainen's Tome of Foes", 201],
		size: "Giant",
		type: "elemental",
		alignment: "neutral",
		ac: [21, "Natural Armor", false],
		hp: 307,
		hd: [15, 20],
		speed: "40 ft, swim 40 ft",
		scores: [30, 10, 30, 2, 21, 18],
		saves: ["", "", "", "", "12", "11"],
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "thunder",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, paralyzed, petrified, poisoned, stunned",
		senses: "darkvision 60 ft, tremorsense 60 ft",
		passive_perception: "15",
		languages: "",
		challenge_rating: "22",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 8, "piercing"],
			range: "Melee (20 ft)",
			description: "",
		}, {
			name: "Stomp",
			ability: 1,
			damage: [3, 10, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}, {
			name: "Spit Rock",
			ability: 1,
			damage: [6, 8, "bludgeoning"],
			range: "Ranged (120/240 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Earth-Shaking Movement",
			description: [
				"As a bonus action after moving at least 10 ft on the ground, the zaratan can send a shock wave through the ground in a 120-foot-radius circle centered on itself. That area becomes difficult terrain for 1 minute. Each creature on the ground that is concentrating must succeed on a DC 25 Constitution saving throw or the creature's concentration is broken.",
				"The shock wave deals 100 thunder damage to all structures in contact with the ground in the area. If a creature is near a structure that collapses, the creature might be buried; a creature within half the distance of the structure's height must make a DC 25 Dexterity saving throw. On a failed save, the creature takes 17 (5d6) bludgeoning damage, is knocked prone, and is trapped in the rubble. A trapped creature is restrained, requiring a successful DC 20 Strength (Athletics) check as an action to escape. Another creature within 5 ft of the buried creature can use its action to clear rubble and grant advantage on the check. If three creatures use their actions in this way, the check is an automatic success. On a successful save, the creature takes half as much damage and doesn't fall prone or become trapped.",
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the zaratan fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Magic Weapons",
			description: "The zaratan's weapon attacks are magical."
		}, {
			name: "Siege Monster",
			description: "The elemental deals double damage to objects and structures (included in Earth-Shaking Movement)."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The zaratan makes two attacks: one with its bite and one with its stomp."
		}, {
			name: "Spew Debris (Recharge 5-6)",
			description: "The zaratan exhales rocky debris in a 90-foot cube. Each creature in that area must make a DC 25 Dexterity saving throw. A creature takes 33 (6d10) bludgeoning damage on a failed save, or half as much damage on a successful one. A creature that fails the save by 5 or more is knocked prone.",
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The zaratan can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The zaratan regains spent legendary actions at the start of its turn."
		}, {
			name: "Stomp",
			description: "The zaratan makes one stomp attack."
		}, {
			name: "Move",
			description: "The zaratan moves up to its speed."
		}, {
			name: "Spit (Costs 2 Actions)",
			description: "The zaratan uses Spit Rock."
		}, {
			name: "Retract (Costs 2 Actions)",
			description: "The zaratan retracts into its shell. Until it takes its Emerge action, it has resistance to all damage, and it is restrained. The next time it takes a legendary action, it must take its Revitalize or Emerge action."
		}, {
			name: "Revitalize (Costs 2 Actions)",
			description: "The zaratan can use this option only if it is retracted in its shell. It regains 52 (5d20) hit points. The next time it takes a legendary action, it must take its Emerge action."
		}, {
			name: "Emerge (Costs 2 Actions)",
			description: "The zaratan emerges from its shell and uses Spit Rock. It can use this option only if it is retracted in its shell."
		}
		],
	},
	"Zariel": {
		name: "Zariel",
		source: ["Mordenkainen's Tome of Foes", 180],
		size: "Large",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [21, "Natural Armor", false],
		hp: 580,
		hd: [40, 10],
		speed: "50 ft, fly 150 ft",
		scores: [27, 24, 28, 26, 27, 30],
		saves: ["", "", "", "16", "16", "18"],
		skills: "Intimidation +18, Perception +16",
		damage_resistances: "cold, fire, radiant; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t silvered",
		damage_vulnerabilities: "",
		damage_immunities: "necrotic, poison",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "26",
		languages: "all, telepathy 120 ft",
		challenge_rating: "26",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (10 ft)",
			description: "Plus 36 (8d8) fire damage; Two-Handed: 19 (2d10+8) slashing damage.",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 36 (8d8) fire damage.",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [2, 6, ""],
			range: "Ranged (30/120 ft)",
			description: "Plus 36 (8d8) fire damage.",
		}, {
			name: "Horrid Touch",
			ability: 1,
			damage: [8, 10, "necrotic"],
			range: "Melee (10 ft)",
			modifiers: ["", "", false],
			description: "Target is poisoned for 1 minute. While poisoned in this way, the target is also blinded and deafened. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede Zariel's darkvision."
		}, {
			name: "Fiery Weapons",
			description: "Zariel's weapon attacks are magical. When she hits with any weapon, the weapon deals an extra 36 (8d8) fire damage (included in the weapon attacks below)."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Zariel's innate spellcasting ability is Charisma (spell save DC 26). She can innately cast the following spells, requiring no material components:",
				"At will: alter self (can become Medium when changing her appearance), detect evil and good, fireball, invisibility (self only), wall of fire",
				"3/day each: blade barrier, dispel evil and good, finger of death."
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Zariel fails a saving throw, she can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Zariel has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Regeneration",
			description: "Zariel regains 20 hit points at the start of her turn. If she takes radiant damage, this trait doesn't function at the start of her next turn. Zariel dies only if she starts her turn with 0 hit points and doesn't regenerate."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Zariel attacks twice with her longsword or with her javelins. She can substitute Horrid Touch for one of these attacks."
		}, {
			name: "Teleport",
			description: "Zariel magically teleports, along with any equipment she is wearing and carrying, up to 120 ft to an unoccupied space she can see."
		}, {
			name: "Lair Actions",
			description: [
				"On initiative count 20 (losing initiative ties), Zariel can take a lair action to cause one of the following effects; she can't use the same effect two rounds in a row:",
				"Zariel casts major image four times at its lowest level, targeting different areas with the spell. Zariel prefers to create images of intruders' loved ones being burned alive. Zariel doesn't need to concentrate on the spells, which end on initiative count 20 of the next round. Each creature that can see these illusions must succeed on a DC 26 Wisdom saving throw or become frightened of the illusion for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"Zariel casts her innate fireball spell.",
			]
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Zariel can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Zariel regains spent legendary actions at the start of her turn."
		}, {
			name: "Immolating Gaze (Costs 2 Actions)",
			description: "Zariel turns her magical gaze toward one creature she can see within 120 ft of her and commands it to combust. The target must succeed on a DC 26 Wisdom saving throw or take 22 (4d10) fire damage."
		}, {
			name: "Teleport",
			description: "Zariel uses her Teleport action."
		}
		],
	},
	"Zuggtmoy": {
		name: "Zuggtmoy",
		source: ["Mordenkainen's Tome of Foes", 157],
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
		damage_vulnerabilities: "",
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
			description: "Zuggtmoy releases spores that burst out in cloud fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Any flesh-and-blood creature in the cloud when it appears, or that enters it later, must make a DC 19 Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the spores of Zuggtmoy and also gains a random form of madness (determined by rolling on the Madness of Zuggtmoy table) that lasts until the creature is cured of the disease or dies. While infected in this way, the creature can't be reinfected, and it must repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature's body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a spore servant if it's a type of creature that can be (see the \"Myconids\" entry in the Monster Manual)."
		}, {
			name: "Mind Control Spores (Recharge 5-6)",
			description: "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Humanoids and beasts in the cloud when it appears, or that enter it later, must make a DC 19 Wisdom saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the influence of Zuggtmoy for 24 hours. While infected, the creature is charmed by her and can't be reinfected by these spores.",
		}, {
			name: "Lair Actions",
			description: [
				"On initiative count 20 (losing initiative ties), Zuggtmoy can take a lair action to cause one of the following effects; she can’t use the same effect two rounds in a row:",
				"Zuggtmoy causes four gas spores or violet fungi (see the Monster Manual) to appear in unoccupied spaces that she chooses within the lair. They vanish after 1 hour.",
				"Up to four plant creatures that are friendly to Zuggtmoy and that Zuggtmoy can see can use their reactions to move up to their speed and make one weapon attack.",
				"Zuggtmoy uses either her Infestation Spores or her Mind Control Spores, centered on a mushroom or other fungus within her lair, instead of on herself."
			]
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Zuggtmoy can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Zuggtmoy regains spent legendary actions at the start of her turn."
		}, {
			name: "Attack",
			description: "Zuggtmoy makes one pseudopod attack.",
		}, {
			name: "Exert Will",
			description: "One creature charmed by Zuggtmoy that she can see must use its reaction to move up to its speed as she directs or to make a weapon attack against a target that she designates."
		}
		]
	}
};