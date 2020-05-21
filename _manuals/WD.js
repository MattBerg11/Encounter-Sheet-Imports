var WD = {
	"Diatryma": {
		name: "Diatryma",
		size: "Large",
		type: "Beast",
		alignment: "unaligned",
		ac: [11, "", false],
		hp: 19,
		hd: [3, 10],
		speed: "50 ft",
		scores: [14, 12, 12, 2, 10, 5],
		saves: ["", "", "", "", "", ""],
		senses: "",
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Beak",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}
		]
	},
	"Dining Table Mimic": {
		name: "Dining Table Mimic",
		size: "Large",
		type: "Monstrosity (shapechanger)",
		alignment: "neutral",
		ac: [12, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "15 ft",
		scores: [17, 12, 15, 5, 13, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +5",
		damage_immunities: "acid",
		condition_immunities: "prone",
		senses: "darkvision 60 ft",
		languages: "",
		challenge_rating: "3",
		attacks: [{
			name: "Pseudopod",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the mimic is in object form, the target is subjected to its Adhesive trait."
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 4 (1d8) acid damage."
		},
		],
		traits: [{
			name: "Shapechanger",
			description: "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn’t transformed. It reverts to its true form if it dies."
		}, {
			name: "Adhesive (Object Form Only)",
			description: "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage."
		}, {
			name: "False Appearance (Object Form Only)",
			description: "While the mimic remains motionless, it is indistinguishable from an ordinary object."
		}, {
			name: "Grappler",
			description: "The mimic has advantage on attack rolls against any creature grappled by it."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The mimic can make three attacks; two with its pseudopods and one with its bite"
		}
		]
	},
	"Drow Gunslinger": {
		name: "Drow Gunslinger",
		size: "Medium",
		type: "Humanoid (elf)",
		alignment: "any alignment",
		ac: [18, "Studded Leather Armor", true],
		hp: 84,
		hd: [13, 8],
		speed: "30 ft",
		scores: [13, 18, 14, 11, 13, 14],
		saves: ["", "6", "4", "", "3", ""],
		skills: "Perception +3, Stealth +8",
		senses: "darkvision 120 ft",
		languages: "Elvish, Undercommon",
		challenge_rating: "4",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Mel"
		}, {
			name: "Poisonous Pistol",
			ability: 2,
			damage: [1, 10, "piercing"],
			range: "Ranged (30/90 ft)",
			description: "Plus 11 (2d10) poison damage."
		},
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The drow has advantage on saving throws against being charmed, and magic can’t put the drow to sleep."
		}, {
			name: "Gunslinger",
			description: "Being within 5 feet of a hostile creature or attacking at long range doesn’t impose disadvantage on the drow’s ranged attack rolls with a pistol. In addition, the drow ignores half cover and three-quarters cover when making ranged attacks with a pistol."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The drow’s spellcasting ability is Charisma (spell save DC 12) It can innately cast the following spells, requiring no material components:",
				"At will: dancing lights",
				"1/day each: darkness, faerie fire, levitate(self only)"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drow makes two shortsword attacks."
		}
		]
	},
	"Engineer": {
		name: "Engineer",
		size: "Small",
		type: "Humanoid (Rock gnome)",
		alignment: "neutral good",
		ac: [10, "", false],
		hp: 7,
		hd: [2, 6],
		speed: "25 ft",
		scores: [10, 10, 10, 14, 10, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, History +4",
		senses: "darkvision 60 ft",
		languages: "Common, Gnomish",
		challenge_rating: "1/4",
		attacks: [{
			name: "Dagger (Melee)",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Dagger (Ranged)",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Gnome Cunning",
			description: "The gnome has advantage on all Intelligence, Wisdom and Charisma saving throws against magic."
		}, {

		}
		],
		spells: [
			"The gnome is a 1st-level spellcaster. Its spellcasting ability is Intelligence. It has the following wizard spells prepared:",
			"Cantrips (at will): fire bolt, mending, prestidigitation",
			"1st level (2 slots): burning hands, disguise self, shield"
		]
	},
	"Falcon": {
		name: "Falcon",
		size: "Tiny",
		type: "Beast",
		alignment: "unaligned",
		ac: [13, "", false],
		hp: 1,
		hd: [1, 4],
		speed: "10 ft, fly 60 ft",
		scores: [5, 16, 8, 2, 14, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		senses: "",
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Talons",
			ability: 2,
			damage: [1, 0, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Keen Sight",
			description: "The falcon has advantage on Wisdom (Perception) checks that rely on sight."
		}
		]
	},
	"Flying Staff": {
		name: "Flying Staff",
		size: "Small",
		type: "Construct",
		alignment: "unaligned",
		ac: [17, "Natural Armor", false],
		hp: 17,
		hd: [5, 6],
		speed: "0 ft, fly 50 ft (hover)",
		scores: [12, 15, 11, 1, 5, 1],
		saves: ["", "4", "", "", "", ""],
		damage_immunities: "poison, psychic",
		condition_immunities: "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
		senses: "blindsight 60 ft (blind beyond this radius)",
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Knife",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Antimagic Susceptibility",
			description: "The staff is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the staff must succeed on a Constitution saving throw against the caster’s spell save DC or fall unconscious for 1 minute."
		}, {
			name: "False Appearance",
			description: "While the staff remains motionless and isn’t flying, it is indistinguishable from a normal staff."
		}
		]
	},
	"Griffon Cavalry Rider": {
		name: "Griffon Cavalry Rider",
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "any alignment",
		ac: [17, "Half Plate Armor", false],
		hp: 58,
		hd: [9, 8],
		speed: "30 ft",
		scores: [14, 15, 14, 10, 12, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Animal Handling +3, Athletics +4, Perception +3",
		senses: "",
		languages: "any one language (usually Common)",
		challenge_rating: "2",
		attacks: [{
			name: "Lance",
			ability: 1,
			damage: [1, 12, "piercing"],
			range: "Melee (10 ft)",
			description: "Disadvantage against a target within 5 ft. Or 11 (1d12+5) piercing damage while mounted."
		}, {
			name: "Dagger (Melee)",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Dagger (Ranged)",
			ability: 1,
			damage: [1, 4, ""],
			range: "Ranged (20/60 ft)",
			description: ""
		}
		],
		actions: [{
			name: "Feather Fall",
			description: "The rider wears a magic ring with which it can cast the feather fall spell on itself once as a reaction to falling. After the spell is cast, the ring becomes nonmagical."
		}
		]
	},
	"Nimblewright": {
		size: "Medium",
		name: "Nimblewright",
		size: "Medium",
		type: "Construct",
		alignment: "unaligned",
		ac: [18, "Natural Armor", false],
		hp: 45,
		hd: [6, 8],
		speed: "60 ft",
		scores: [12, 18, 17, 8, 10, 6],
		saves: ["", "6", "", "", "", ""],
		skills: "Acrobatics +8, Perception +2",
		damage_resistances: "bludgeoning, piercing, slashing from nonmagical attacks",
		condition_immunities: "exhaustion, frightened, petrified, poisoned",
		senses: "darkvision 60 ft",
		languages: "understands one language known to its creator but can’t speak",
		challenge_rating: "4",
		attacks: [{
			name: "Rapier",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Dagger (Melee)",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Dagger (Ranged)",
			ability: 1,
			damage: [1, 4, ""],
			range: "Ranged (20/60 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The nimblewright has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The nimblewright’s weapon attacks are magical."
		}, {
			name: "Repairable",
			description: "As long as it has at least 1 hit point remaining, the nimblewright regains 1 hit point when a mending spell is cast on it."
		}, {
			name: "Sure-Footed",
			description: "The nimblewright has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The nimblewright makes three attacks: two with its rapier and one with its dagger."
		}
		],
		reactions: [{
			name: "Parry",
			description: "The nimblewright adds 2 to its AC against one melee attack that would hit it. To do so, the nimblewright must see the attacker and be wielding a melee weapon."
		}
		]
	},
	"Panopticus Wizard": {
		name: "Panopticus Wizard",
		size: "Medium",
		type: "Humanoid (dwarf)",
		alignment: "neutral",
		ac: [10, "", false],
		hp: 9,
		hd: [2, 8],
		speed: "25 ft",
		scores: [10, 10, 10, 14, 10, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, History +4",
		damage_resistances: "poison",
		senses: "",
		languages: "Common, Dwarvish",
		challenge_rating: "1/4",
		attacks: [{
			name: "Dagger (Melee)",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Dagger (Ranged)",
			ability: 1,
			damage: [1, 4, ""],
			range: "Ranged (20/60 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Dwarven Resilience",
			description: "The dwarf has advantage on saving throws against poison and resistance to poison damage."
		}
		],
		spells: [
			"The Dwarf is a 1st-level spellcaster. Its spellcasting ability is Intelligence. It has the following wizard spells prepared:",
			"Cantrips (at will): fire bolt, mending, prestidigitation",
			"1st level (2 slots): burning hands, disguise self, shield"
		]
	},
	"Sergeant": {
		name: "Sergeant",
		source: ["Waterdeep: Dragon Heist", 197],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Any alignment",
		ac: [16, "Chain Shirt", false],
		hp: 11,
		hd: [2, 8],
		scores: [13, 12, 12, 10, 11, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		passive_perception: "12",
		languages: "any one language (usually Common)",
		challenge_rating: "1/8",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 5 (1d8+1) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, ""],
			range: "Ranged (20/60 ft)",
			description: "",
		},
		],
	},
	"Shard Shunner": {
		name: "Shard Shunner",
		size: "Small",
		type: "Humanoid (halfling, shapechanger)",
		alignment: "lawful evil",
		ac: [12, "", false],
		hp: 27,
		hd: [6, 6],
		speed: "30 ft",
		scores: [10, 15, 12, 11, 10, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Stealth +4",
		damage_immunities: "bludgeoning, piercing, slashing damage from nonmagical attacks that aren’t silvered",
		senses: "darkvision 60 ft (rat form only)",
		languages: "Common, Halfling, Thieves’ cant",
		challenge_rating: "2",
		attacks: [{
			name: "Bite (Rat or Hybrid Form Only)",
			ability: 2,
			damage: [1, 4, ""],
			range: "Melee (5 ft)",
			description: "If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy."
		}, {
			name: "Shortsword (Humanoid or Hybrid Form Only)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Hand Crossbow (Humanoid or Hybrid Form Only)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Shapechanger",
			description: "The Shard Shunner can use their action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into their true form, which is humanoid. Their statistics, other than their size, are the same in each form. Any equipment they are wearing or carrying isn’t transformed. They revert to their true form if they die."
		}, {
			name: "Keen Smell",
			description: "The Shard Shunner has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Halfling Nimbleness",
			description: "The Shard Shunner can move through the space of creatures that is of a size larger than them."
		}, {
			name: "Brave",
			description: "The Shard Shunner has advantage on saving throws against being frightened."
		}
		],
		actions: [{
			name: "Multiattack (Humanoid or Hybrid Form Only)",
			description: "The Shard Shunner makes two attacks, only one of which can be a bite."
		}
		]
	},
	"Swarm of Books": {
		name: "Swarm of Books",
		size: "Medium",
		type: "Swarm of tiny constructs",
		alignment: "unaligned",
		ac: [12, "", false],
		hp: 22,
		hd: [5, 8],
		speed: "0 ft, fly 30 ft",
		scores: [5, 15, 10, 2, 12, 4],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, slashing",
		condition_immunities: "charmed, frightened, paralyzed, petrified, prone, restrained, stunned, grappled",
		senses: "blindsight 60 ft",
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Slam",
			ability: 2,
			damage: [2, 4, "bludgeoning"],
			range: "Melee (0 ft)",
			description: "One creature in the swarm’s space. Or 2 (1d4) bludgeoning damage if the swarm has half of its hit points or fewer."
		}
		],
		traits: [{
			name: "Swarm",
			description: "The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny book. The swarm can’t regain hit points or gain temporary hit points."
		}
		],
	},
	"Swarm of Mechanical Spiders": {
		name: "Swarm of Mechanical Spiders",
		size: "Medium",
		type: "Swarm of tiny constructs",
		alignment: "unaligned",
		ac: [12, "Natural Armor", false],
		hp: 22,
		hd: [5, 8],
		speed: "20 ft, climb 20 ft",
		scores: [3, 13, 10, 1, 7, 1],
		saves: ["", "", "", "", "", ""],
		damageVulnerabilities: "lightning",
		damage_resistances: "bludgeoning, piercing, slashing",
		condition_immunities: "exhaustion, charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned, poisoned",
		senses: "blindsight 10 ft",
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bites",
			ability: 2,
			damage: [4, 4, "piercing"],
			range: "Melee (0 ft)",
			description: "One target in the swarm’s space. Hit: 10 (4d4)  damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer."
		}
		],
		traits: [{
			name: "Constructed Nature",
			description: "The swarm doesn’t require air, food, drink, or sleep."
		}, {
			name: "Swarm",
			description: "The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can’t regain hit points or gain temporary hit points."
		}, {
			name: "Spider Climb",
			description: "The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Web Sense",
			description: "While in contact with a web, the swarm knows the exact location of any other creature in contact with the same web."
		}, {
			name: "Web Walker",
			description: "The swarm ignores movement restrictions caused by webbing."
		}
		],
	},
	"Walking Statue of Waterdeep": {
		name: "Walking Statue of Waterdeep",
		size: "Gargantuan",
		type: "Construct",
		alignment: "unaligned",
		ac: [17, "Natural Armor", false],
		hp: 314,
		hd: [17, 20],
		speed: "60 ft",
		scores: [30, 8, 27, 1, 10, 1],
		saves: ["", "", "14", "", "", ""],
		damage_immunities: "cold, fire, poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks not made with adamantine weapons",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned, stunned",
		senses: "truesight 120 ft",
		languages: "",
		challenge_rating: "18",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 12, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Me"
		}, {
			name: "Hurled Stone",
			ability: 1,
			damage: [6, 10, "bludgeoning"],
			range: "Ranged (200/800 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Crumbling Colossus",
			description: "When the statue drops to 0 hit points, it crumbles and is destroyed. Any creature on the ground within 30 feet of the crumbling statue must make a DC 22 Dexterity saving throw, taking 22 (4d10) bludgeoning damage on a failed save, or half as much damage on a successful one."
		}, {
			name: "Immutable Form",
			description: "The statue is immune to any spell or effect that would alter its form."
		}, {
			name: "Magic Resistance",
			description: "The statue has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Siege Monster",
			description: "The statue deals double damage to objects and structures."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The statue makes two melee attacks."
		}
		]
	},
	"Zhent Martial Arts Adept": {
		name: "Zhent Martial Arts Adept",
		size: "Small",
		type: "Humanoid (Lightfoot halfling)",
		alignment: "lawful evil",
		ac: [16, "", false],
		hp: 49,
		hd: [11, 6],
		speed: "25 ft",
		scores: [11, 17, 13, 11, 16, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +5, Insight +5, Stealth +5",
		senses: "",
		languages: "Common, Halfling",
		challenge_rating: "3",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, the adept can choose one of the following additional effects: 1. The target must succeed on a DC 13 Strength saving throw or drop one item it is holding (adept’s choice). 2. The target must succeed on a DC 13 Dexterity saving throw or be knocked prone. 3. The target must succeed on a DC 13 Constitution saving throw or be stunned until the end of the adept’s next turn."
		}, {
			name: "Dart",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Halfling Nimbleness",
			description: "The adept can move through the space of a medium of larger creature."
		}, {
			name: "Brave",
			description: "The adept has advantage on any saving throws against being frightened."
		}, {
			name: "Unarmored Defense",
			description: "While the adept is wearing no armor and wielding no shield, their AC includes their Wisdom modifier."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The adept makes three unarmed strikes or three dart attacks."
		}
		],
		reactions: [{
			name: "Deflect Missile",
			description: "In response to being hit by a ranged weapon attack, the adept deflects the missile. The damage it takes from the attack is reduced by 1d10+3. If the damage is reduced to 0, the adept catches the missile if it’s small enough to hold in one hand and the adept has a hand free."
		}
		]
	},

	// WDoTMM
	"Animated Ballista": {
		name: "Animated Ballista",
		size: "Large",
		type: "Construct",
		alignment: "unaligned",
		ac: [15, "", false],
		hp: 50,
		hd: [50, 1],
		speed: "30 ft",
		scores: [14, 10, 10, 3, 3, 1],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
		senses: "blindsight 120 ft (blind beyond this radius)",
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Magic Bolt",
			ability: 1,
			damage: [3, 10, "fire"],
			range: "Ranged (120 ft)",
			modifiers: [2, "", false], // bonuses to: [to hit, to damage, add ability to damage];
			description: ""
		}
		]
	},
	"Animated Jade Serpent": {
		name: "Animated Jade Serpent",
		size: "Medium",
		type: "Construct",
		alignment: "unaligned",
		ac: [14, "", false],
		hp: 11,
		hd: [2, 8],
		speed: "30 ft, swim 30 ft",
		scores: [10, 18, 13, 2, 10, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "blindsight 10 ft",
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (10 ft)",
			description: "Target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
		}
		]
	},
	"Animated Staff": {
		name: "Animated Staff",
		size: "Medium",
		type: "Construct",
		alignment: "neutral evil",
		ac: [17, "Natural Armor", false],
		hp: "40",
		hd: [,],
		speed: "0 ft, fly 30 ft (hover)",
		scores: [12, 12, 10, 18, 14, 10],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold",
		damage_immunities: "poison",
		senses: "blindsight 60 ft (blind beyond this radius)",
		languages: "Common",
		challenge_rating: "0",
		attacks: [{
			name: "Staff",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			modifiers: [2, "", false], // bonuses to: [to hit, to damage, add ability to damage];
			description: "Plus 1 cold damage."
		}
		],
		traits: [{
			name: "Wielder Domination",
			description: "A creature can grab the staff out of the air with a successful grapple check against the staff, and grappling the staff does not reduce the creature’s speed. Any creature that successfully grapples the staff must succeed on a DC 12 Charisma saving throw or be charmed by the staff until the staff is no longer in its grasp. While the creature is charmed, the staff can issue commands to it, which the creature does its best to obey. The creature can repeat the saving throw each time it takes damage, ending the effect on itself on a success. A creature that successfully resists the staff’s control can’t be charmed by it for 24 hours. A creature holding the staff that isn’t charmed by it can use an action to attempt to break the staff over a knee or against a solid surface, doing so with a successful DC 17 Strength (Athletics) check. Breaking the staff in this manner destroys it."
		}
		],
		actions: [{
			name: "Staff of Frost",
			description: [
				"The staff has 10 charges. It can expend 1 or more of its charges to cast one of the following spells (save DC 12):",
				"cone of cold (5 charges), fog cloud (1 charge), ice storm (4 charges), or wall of ice (4 charges).",
				"It regains 1d6+4 expended charges daily at dawn.If the staff expends its last charge, roll a d20.On a 1, the staff turns to water and is destroyed."
			]
		}
		]
	},
	"Animated Statue of Lolth": {
		name: "Animated Statue of Lolth",
		size: "Huge",
		type: "Construct",
		alignment: "unaligned",
		ac: [17, "Natural Armor", false],
		hp: 230,
		hd: [20, 12],
		speed: "30 ft",
		scores: [22, 9, 20, 3, 11, 1],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t adamantine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 120 ft",
		languages: "understands Abyssal but can’t speak",
		challenge_rating: "11",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Immutable Form",
			description: "The statue is immune to any spell or effect that would alter its form."
		}, {
			name: "Magic Resistance",
			description: "The statue has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The statue’s weapon attacks are magical."
		}, {
			name: "Spider Climb",
			description: "The statue can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The statue makes two slam attacks."
		}, {
			name: "Slow",
			recharge: "Recharge 5–6",
			description: "The statue targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can’t use reactions, its speed is halved, and it can’t make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}
		]
	},
	"Animated Stove": {
		name: "Animated Stove",
		size: "Large",
		type: "Construct",
		alignment: "unaligned",
		ac: [17, "", false],
		hp: 50,
		hd: [50, 1],
		speed: "30 ft",
		scores: [14, 10, 10, 3, 3, 1],
		saves: ["", "", "", "", "", ""],
		senses: "blindsight 30 ft (blind beyond this radius)",
		languages: "",
		challenge_rating: "3",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 8, ""],
			range: "Melee (5 ft)",
			modifiers: [2, "", ""], // bonuses to: [to hit, to damage, add ability to damage];
			description: "Melee Weapon Attack: +6 to hit, reach 5 ft, one target. Hit: 11 (2d8+2) bludgeoning damage."
		}
		],
		actions: [{
			name: "Belch Fire",
			recharge: "Recharge 4–6",
			description: "The stove belches fire in a 15-foot cone. Each creature in the area must make a DC 10 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one."
		}
		]
	},
	"Animated Wand": {
		name: "Animated Wand",
		size: "Tiny",
		type: "Construct",
		alignment: "unaligned",
		ac: [18, "Natural Armor", false],
		hp: 20,
		hd: [20, 1],
		speed: "30 ft",
		scores: [4, 18, 10, 3, 3, 1],
		saves: ["", "", "", "", "", ""],
		senses: "blindsight 30 ft (blind beyond this radius)",
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Slam",
			ability: 2,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			modifiers: [2, "", ""], // bonuses to: [to hit, to damage, add ability to damage];
			description: "Melee Weapon Attack: +8 to hit, reach 5 ft, one target. Hit: 6 (1d4+4)  damage."
		}
		],
		traits: [{
			name: "Animated",
			description: "If the wand lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the wand is securely attached to a surface or larger wand, such as a chain bolted to a wall, its speed is 0. When the animated wand drops to 0 hit points, it reverts to its original wand form, and any remaining damage carries over to its original wand form. The DM might rule that a specific wands slam attack inflicts slashing or piercing damage based on its form."
		}
		],
		actions: [{
			name: "Wand of Wonder",
			description: "The animated wand can expend 1 of its charges and target a random creature with one of its Wand of Wonder. Any such effect that would target the wand’s user targets the wand instead. If reduced to 0 hit points, the wand crumbles into dust and is destroyed."
		}
		]
	},
	"Awakened Brown Bear": {
		name: "Awakened Brown Bear",
		size: "Large",
		type: "Beast",
		alignment: "unaligned",
		ac: [11, "Natural Armor", false],
		hp: 34,
		hd: [4, 10],
		speed: "40 ft, climb 30 ft",
		scores: [19, 10, 16, 10, 13, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "",
		languages: "one language known by its creator",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Keen Smell",
			description: "The bear has advantage on Wisdom (Perception) checks that rely on smell."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The bear makes two attacks: one with its bite and one with its claws."
		}
		]
	},
	"Awakened Elk": {
		name: "Awakened Elk",
		size: "Large",
		type: "Beast",
		alignment: "unaligned",
		ac: [10, "", false],
		hp: 13,
		hd: [2, 10],
		speed: "50 ft",
		scores: [16, 10, 12, 10, 10, 6],
		saves: ["", "", "", "", "", ""],
		senses: "",
		languages: "one language known by its creator",
		challenge_rating: "1/4",
		attacks: [{
			name: "Ram",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "."
		}, {
			name: "Hooves",
			ability: 1,
			damage: [2, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Charge",
			description: "If the elk moves at least 20 ft straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
		}
		],
	},
	"Awakened Giant Wasp": {
		name: "Awakened Giant Wasp",
		size: "Medium",
		type: "Beast",
		alignment: "unaligned",
		ac: [12, "", false],
		hp: 13,
		hd: [3, 8],
		speed: "10 ft, fly 50 ft",
		scores: [10, 14, 10, 10, 10, 3],
		saves: ["", "", "", "", "", ""],
		senses: "",
		languages: "one language known by its creator",
		challenge_rating: "1/2",
		attacks: [{
			name: "Sting",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
		}
		],
	},
	"Big Xorn": {
		name: "Big Xorn",
		size: "Large",
		type: "Elemental",
		alignment: "neutral",
		ac: [19, "Natural Armor", false],
		hp: 103,
		hd: [9, 10],
		speed: "20 ft, burrow 20 ft",
		scores: [20, 10, 22, 11, 10, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +6, Stealth +3",
		damage_resistances: "piercing and slashing from nonmagical attacks that aren’t adamantine",
		senses: "darkvision 60 ft, tremorsense 60 ft",
		languages: "Terran",
		challenge_rating: "8",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [5, 6, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Claw",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (10 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Earth Glide",
			description: "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn’t disturb the material it moves through."
		}, {
			name: "Stone Camouflage",
			description: "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
		}, {
			name: "Treasure Sense",
			description: "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 feet of it."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The xorn makes three claw attacks and one bite attack."
		}
		]
	},
	"Bore Worm": {
		name: "Bore Worm",
		size: "Gargantuan",
		type: "Construct",
		alignment: "unaligned",
		ac: [18, "Natural Armor", false],
		hp: 247,
		hd: [15, 20],
		speed: "50 ft, burrow 30 ft",
		scores: [28, 7, 22, 1, 8, 4],
		saves: ["", "", "11", "", "4", ""],
		damage_immunities: "fire, poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t adamantine",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned, prone",
		senses: "blindsight 30 ft, tremorsense 60 ft",
		languages: "",
		challenge_rating: "16",
		attacks: [{
			name: "Grinding Jaws",
			ability: 1,
			damage: [3, 8, "slashing"],
			range: "Melee (10 ft)",
			description: ""
		}, {
			name: "Tail Stinger",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "Target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
		},
		],
		traits: [{
			name: "Tunneler",
			description: "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake."
		}, {
			name: "Regeneration",
			description: "The worm regains 10 hit points at the start of each of its turns if it has at least 1 hit point."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The worm makes two attacks: one with its grinding jaws and one with its stinger."
		}
		]
	},
	"Carrion Ogre": {
		name: "Carrion Ogre",
		size: "Large",
		type: "Giant",
		alignment: "chaotic evil",
		ac: [11, "Hide Armor", false],
		hp: 59,
		hd: [7, 10],
		speed: "40 ft",
		scores: [19, 8, 16, 1, 7, 7],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		languages: "Common, Giant",
		challenge_rating: "2",
		attacks: [{
			name: "Tentacles",
			ability: 1,
			damage: [1, 4, "poison"],
			range: "Melee (10 ft)",
			description: "Target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success."
		}, {
			name: "Bite",
			ability: 1,
			damage: [2, 4, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Tied Down",
			description: "While lashed to the floor, the creature is prone and restrained. It also suffers from two levels of exhaustion."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The creature makes two attacks: one with its tentacles and one with its bite."
		}
		]
	},
	"Crow": {
		name: "Crow",
		size: "Tiny",
		type: "Beast",
		alignment: "unaligned",
		ac: [12, "", false],
		hp: 1,
		hd: [1, 4],
		speed: "10 ft, fly 50 ft",
		scores: [2, 14, 8, 2, 12, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "",
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Beak",
			ability: 2,
			damage: [1, 0, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Mimicry",
			description: "The crow can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
		}
		],
	},
	"Crystal Battleaxe": {
		name: "Crystal Battleaxe",
		size: "Small",
		type: "Construct",
		alignment: "unaligned",
		ac: [17, "Natural Armor", false],
		hp: 17,
		hd: [5, 6],
		speed: "0 ft, fly 50 ft (hover)",
		scores: [12, 15, 11, 1, 5, 1],
		saves: ["", "4", "", "", "", ""],
		damage_immunities: "poison, psychic",
		condition_immunities: "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
		senses: "blindsight 60 ft (blind beyond this radius)",
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Antimagic Susceptibility",
			description: "The battleaxe is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the battleaxe must succeed on a Constitution saving throw against the caster’s spell save DC or fall unconscious for 1 minute."
		}, {
			name: "False Appearance",
			description: "While the battleaxe remains motionless and isn’t flying, it is indistinguishable from a normal battleaxe."
		}
		],
	},
	"Crystal Golem": {
		name: "Crystal Golem",
		size: "Large",
		type: "Construct",
		alignment: "unaligned",
		ac: [17, "Natural Armor", false],
		hp: 178,
		hd: [17, 10],
		speed: "30 ft",
		scores: [22, 9, 20, 3, 11, 1],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t adamantine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 120 ft",
		languages: "understands the languages of its creator but can’t speak",
		challenge_rating: "10",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Immutable Form",
			description: "The golem is immune to any spell or effect that would alter its form."
		}, {
			name: "Magic Resistance",
			description: "The golem has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The golem’s weapon attacks are magical."
		}, {
			name: "Illumination",
			description: "The golem magically sheds bright light in a 30-foot radius and dim light for an additional 30 feet. This light goes out when the golem is destroyed."
		}, {
			name: "Light Intensity",
			description: "Any creature that starts its turn within 10 feet of the illuminated golem and can see the golem must succeed on a DC 17 Wisdom saving throw or be blinded until the start of the creature’s next turn. A creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can’t see the golem until the start of its next turn, when it can avert its eyes again. If the creature looks at the golem in the meantime, it must immediately make the save."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The golem makes two slam attacks."
		}, {
			name: "Slow (Recharge 5–6)",
			description: "The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can’t use reactions, its speed is halved, and it can’t make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}
		]
	},
	"Five-Armed Troll": {
		name: "Five-Armed Troll",
		size: "Large",
		type: "Giant",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 84,
		hd: [8, 10],
		speed: "30 ft",
		scores: [18, 13, 20, 7, 9, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		senses: "darkvision 60 ft",
		languages: "Giant",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Keen Smell",
			description: "The troll has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Regeneration",
			description: "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn’t function at the start of the troll’s next turn. The troll dies only if it starts its turn with 0 hit points and doesn’t regenerate."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The troll makes six attacks: one with its bite and five with its claws."
		}
		]
	},
	"Flying Trident": {
		name: "Flying Trident",
		size: "Small",
		type: "Construct",
		alignment: "unaligned",
		ac: [17, "Natural Armor", false],
		hp: 17,
		hd: [5, 6],
		speed: "0 ft, fly 50 ft (hover)",
		scores: [12, 15, 11, 1, 5, 1],
		saves: ["", "4", "", "", "", ""],
		damage_immunities: "poison, psychic",
		condition_immunities: "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
		senses: "blindsight 60 ft (blind beyond this radius)",
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Trident",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Antimagic Susceptibility",
			description: "The trident is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the trident must succeed on a Constitution saving throw against the caster’s spell save DC or fall unconscious for 1 minute."
		}, {
			name: "False Appearance",
			description: "While the trident remains motionless and isn’t flying, it is indistinguishable from a normal trident."
		}
		],
	},
	"Giant Flying Spider": {
		name: "Giant Flying Spider",
		size: "Large",
		type: "Beast",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 26,
		hd: [4, 10],
		speed: "30 ft, climb 30 ft, fly 40 ft",
		scores: [14, 16, 12, 2, 11, 4],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +7",
		senses: "blindsight 10 ft, darkvision 60 ft",
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
		}, {
			name: "Web (Recharge 5–6)",
			ability: 2,
			damage: [0, 0, ""],
			range: "Ranged (30/60 ft)",
			description: "On Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp: 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
		},
		],
		traits: [{
			name: "Spider Climb",
			description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Web Sense",
			description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
		}, {
			name: "Web Walker",
			description: "The spider ignores movement restrictions caused by webbing."
		}
		],
	},
	"Giant Mutated Drow": {
		name: "Giant Mutated Drow",
		size: "Huge",
		type: "Humanoid (elf)",
		alignment: "neutral evil",
		ac: [14, "Natural Armor", false],
		hp: 200,
		hd: [16, 12],
		speed: "40 ft",
		scores: [27, 10, 22, 12, 16, 16],
		saves: ["", "", "10", "", "7", "7"],
		skills: "Insight +7, Perception +7",
		senses: "darkvision 120 ft",
		languages: "Common, Giant, Elvish",
		challenge_rating: "9",
		attacks: [{
			name: "Morningstar",
			ability: 1,
			damage: [3, 8, "piercing"],
			range: "Melee (10 ft)",
			description: ""
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			description: ""
		},
		],
		traits: [{
			name: "Keen Smell",
			description: "The drow has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Fey Ancestry",
			description: "The giant mutated drow has advantage on saving throws against being charmed, and magic can’t put The giant mutated drow to sleep."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the giant mutated drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The drow’s innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components:",
				"At will: detect magic, fog cloud, light",
				"3/day each: feather fall, fly, misty step, telekinesis",
				"1/day each: control weather, gaseous form"
			]
		}, {
			name: "Innate Spellcasting",
			description: [
				"The giant mutated drow’s innate spellcasting ability is Charisma (spell save DC 15). The giant mutated drow can innately cast the following spells, requiring no material components:",
				"At will: dancing lights",
				"1/day each: darkness, faerie fire"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drow makes two morningstar attacks."
		}
		]
	},
	"Gorzil’s Gang Troglodyte": {
		name: "Gorzil’s Gang Troglodyte",
		size: "Medium",
		type: "Humanoid (troglodyte)",
		alignment: "chaotic evil",
		ac: [14, "Breastplate", false],
		hp: 13,
		hd: [2, 8],
		speed: "30 ft",
		scores: [14, 10, 14, 6, 10, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +2",
		senses: "darkvision 60 ft",
		languages: "understands Undercommon but can’t speak",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Longsword",
			ability: 1,
			damage: [1, 8, ""],
			range: "",
			description: "Melee Weapon Attack: +4 to hit, reach 5 ft, one target. Hit: 6 (1d8+2) slashing damage, or 7 (1d10+2) slashing damage if used with two hands."
		},
		],
		traits: [{
			name: "Chameleon Skin",
			description: "The troglodyte has advantage on Dexterity (Stealth) checks made to hide."
		}, {
			name: "Stench",
			description: "Any creature other than a troglodyte that starts its turn within 5 feet of the troglodyte must succeed on a DC 12 Constitution saving throw or be poisoned until the start of the creature’s next turn. On a successful saving throw, the creature is immune to the stench of all troglodytes for 1 hour."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the troglodyte has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The troglodyte makes three attacks: one with its bite and two with its longsword."
		}
		]
	},
	"Halaster Horror": {
		name: "Halaster Horror",
		size: "Medium",
		type: "Construct",
		alignment: "unaligned",
		ac: [20, "Plate Armor", true],
		hp: 60,
		hd: [8, 8],
		speed: "30 ft, fly 30 ft",
		scores: [18, 13, 16, 10, 10, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		damage_resistances: "bludgeoning, piercing, slashing from nonmagical attacks that aren’t adamantine",
		damage_immunities: "force, necrotic, poison",
		condition_immunities: "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned, stunned",
		senses: "blindsight 60 ft (blind beyond this radius)",
		languages: "understands the languages of its creator but can’t speak",
		challenge_rating: "4",
		attacks: [{
			name: "Staff",
			ability: 1,
			damage: [1, 8, ""],
			range: "Melee (5 ft)",
			description: "Melee Weapon Attack: +6 to hit, reach 5 ft, one target. Hit: 8 (1d8+4) bludgeoning damage."
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The Halaster horror has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Spell Immunity",
			description: "The Halaster horror is immune to the cone of cold, disintegrate, and fireball spells."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The Halaster horror makes two staff attacks."
		}
		]
	},
	"Huge Gray Ooze": {
		name: "Huge Gray Ooze",
		size: "Huge",
		type: "Ooze",
		alignment: "unaligned",
		ac: [8, "", false],
		hp: 152,
		hd: [16, 12],
		speed: "10 ft, climb 10 ft",
		scores: [18, 6, 16, 1, 6, 2],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +2",
		damage_resistances: "acid, cold, fire",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, prone",
		senses: "blindsight 60 ft (blind beyond this radius)",
		languages: "",
		challenge_rating: "8",
		attacks: [{
			name: "Pseudopod",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 21 (6d6) acid damage, or 42 (12d6) acid damage while the ooze is enlarged. If the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."
		}
		],
		traits: [{
			name: "Amorphous",
			description: "The ooze can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name: "Corrode Metal",
			description: "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage. The ooze can eat through 2-inch-thick, nonmagical metal in 1 round."
		}, {
			name: "False Appearance",
			description: "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "As an action, it can make two attacks with its pseudopods."
		}, {
			name: "Enlarge",
			recharge: "Recharges after a Short or Long Rest",
			description: "For 1 minute, the ooze magically increases in size. While enlarged, the ooze is Gargantuan, doubles its damage dice with its pseudopod attack, and makes Strength checks and Strength saving throws with advantage."
		}, {
			name: "Invisibility",
			recharge: "Recharges after a Short or Long Rest",
			description: "The ooze magically turns invisible for up to 1 hour until it attacks, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell)."
		}
		]
	},
	"Intelligent Black Pudding": {
		name: "Intelligent Black Pudding",
		size: "Large",
		type: "Ooze",
		alignment: "unaligned",
		ac: [7, "", false],
		hp: 85,
		hd: [10, 10],
		speed: "20 ft, climb 20 ft",
		scores: [16, 5, 16, 14, 6, 1],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "acid, cold, lightning, slashing",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, prone",
		senses: "blindsight 60 ft (blind beyond this radius)",
		languages: "Elvish and Undercommon but can’t speak",
		challenge_rating: "4",
		attacks: [{
			name: "Pseudopod",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."
		}
		],
		traits: [{
			name: "Amorphous",
			description: "The pudding can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name: "Corrosive Form",
			description: "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round."
		}, {
			name: "Spider Climb",
			description: "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The pudding’s spellcasting ability is Intelligence (spell save DC 12, +4 to hit with spell attacks). It can cast the following spells, requiring no components:",
				"At will: dancing lights, mage hand",
				"3/day each: darkness, faerie fire, shield",
				"1/day: Melf’s acid arrow"
			]
		}
		],
		reactions: [{
			name: "Split",
			description: "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding’s, rounded down. New puddings are one size smaller than the original pudding."
		}
		]
	},
	"Junior Drow Priestess of Lolth": {
		name: "Junior Drow Priestess of Lolth",
		size: "Medium",
		type: "Humanoid (elf)",
		alignment: "neutral evil",
		ac: [13, "Chain Shirt", false],
		hp: 27,
		hd: [5, 8],
		speed: "30 ft",
		scores: [10, 10, 12, 13, 16, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Medicine +7, Persuasion +3, Religion +5, Perception +5",
		senses: "darkvision 120 ft",
		languages: "any two languages, Elvish",
		challenge_rating: "2",
		attacks: [{
			name: "Mace",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "",
			description: ""
		}
		],
		traits: [{
			name: "Divine Eminence",
			description: "As a bonus action, the priestess can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priestess expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st."
		}, {
			name: "Fey Ancestry",
			description: "The junior drow priestess of lolth has advantage on saving throws against being charmed, and magic can’t put The junior drow priestess of lolth to sleep."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the junior drow priestess of lolth has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The junior drow priestess of lolth’s innate spellcasting ability is Charisma (spell save DC 11). The junior drow priestess of lolth can innately cast the following spells, requiring no material components:",
				"At will: dancing lights",
				"1/day each: darkness, faerie fire"
			]
		}
		],
		spells: [
			"The priestess is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priestess has the following cleric spells prepared:",
			"Cantrips (at will): light, sacred flame, thaumaturgy",
			"1st level (4 slots): cure wounds, guiding bolt, sanctuary",
			"2nd level (3 slots): lesser restoration, spiritual weapon",
			"3rd level (2 slots): dispel magic, spirit guardians"
		]
	},
	"Large Mimic": {
		name: "Large Mimic",
		size: "Large",
		type: "Monstrosity (shapechanger)",
		alignment: "neutral",
		ac: [12, "Natural Armor", false],
		hp: 67,
		hd: [9, 10],
		speed: "15 ft",
		scores: [17, 12, 15, 5, 13, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +5",
		damage_immunities: "acid",
		condition_immunities: "prone",
		senses: "darkvision 60 ft",
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Pseudopod",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the mimic is in object form, the target is subjected to its Adhesive trait."
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 4 (1d8) acid damage."
		},
		],
		traits: [{
			name: "Shapechanger",
			description: "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn’t transformed. It reverts to its true form if it dies."
		}, {
			name: "Adhesive (Object Form Only)",
			description: "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage."
		}, {
			name: "False Appearance (Object Form Only)",
			description: "While the mimic remains motionless, it is indistinguishable from an ordinary object."
		}, {
			name: "Grappler",
			description: "The mimic has advantage on attack rolls against any creature grappled by it."
		}
		],
	},
	"Lava Child": {
		name: "Lava Child",
		source: ["Waterdeep - Dungeon of the Mad Mage", 313],
		size: "Medium",
		type: "humanoid",
		alignment: "neutral",
		ac: [11, "", false],
		hp: 60,
		hd: [8, 8],
		scores: [18, 13, 16, 11, 10, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +6, Survival +2",
		damage_immunities: "fire, bludgeoning, piercing, and slashing from metal weapons",
		senses: "darkvision 60ft",
		passive_perception: "10",
		languages: "Common, Ignan",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Metal Immunity",
			description: "The lava child can move through metal without hindrance, and it has advantage on attack rolls against any creature wearing metal armor or using a metal shield."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The lava child makes two attacks- one with its bite and one with its claws."
		}
		],
		environment: "Underdark"
	},
	"Living Unseen Servant": {
		name: "Living Unseen Servant",
		size: "Medium",
		type: "Construct",
		alignment: "unaligned",
		ac: [10, "", false],
		hp: 4,
		hd: [1, 8],
		speed: "30 ft",
		scores: [2, 10, 11, 1, 10, 1],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Stealth +4",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, paralyzed, petrified, poisoned, unconscious",
		senses: "blindsight 60 ft (blind beyond this radius)",
		languages: "understands one language (usually Common) but can’t speak",
		challenge_rating: "0",
		attacks: [{
			name: "Slam",
			ability: 2,
			damage: [1, 0, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Invisibility",
			description: "The unseen servant is invisible."
		}
		],
	},
	"Mad Golem": {
		name: "Mad Golem",
		size: "Huge",
		type: "Construct",
		alignment: "unaligned",
		ac: [17, "Natural Armor", false],
		hp: 264,
		hd: [23, 12],
		speed: "30 ft",
		scores: [22, 9, 20, 9, 11, 9],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t adamantine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 120 ft",
		languages: "understands Abyssal, Celestial, Common, Draconic, Dwarvish, Elvish, Infernal, and Undercommon but can’t speak",
		challenge_rating: "12",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [4, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Immutable Form",
			description: "The golem is immune to any spell or effect that would alter its form."
		}, {
			name: "Magic Resistance",
			description: "The golem has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The golem’s weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The golem makes two slam attacks."
		}, {
		}, {
			name: "Slow (Recharge 5–6)",
			description: "The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can’t use reactions, its speed is halved, and it can’t make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}
		]
	},
	"Metal Wasp": {
		name: "Metal Wasp",
		size: "Medium",
		type: "Construct",
		alignment: "unaligned",
		ac: [16, "Natural Armor", false],
		hp: 13,
		hd: [3, 8],
		speed: "10 ft, fly 50 ft",
		saves: ["", "", "", "", "", ""],
		scores: [10, 14, 10, 1, 10, 3],
		damage_immunities: "poison, psychic",
		condition_immunities: "charmed, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 60 ft",
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Sting",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
		}
		]
	},
	"Old Troglodyte": {
		name: "Old Troglodyte",
		size: "Medium",
		type: "Humanoid (troglodyte)",
		alignment: "chaotic evil",
		ac: [11, "Natural Armor", false],
		hp: 13,
		hd: [2, 8],
		speed: "30 ft",
		scores: [14, 10, 14, 6, 10, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +2",
		senses: "darkvision 60 ft",
		languages: "Troglodyte",
		challenge_rating: "1/8",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Chameleon Skin",
			description: "The troglodyte has advantage on Dexterity (Stealth) checks made to hide."
		}, {
			name: "Stench",
			description: "Any creature other than a troglodyte that starts its turn within 5 feet of the troglodyte must succeed on a DC 12 Constitution saving throw or be poisoned until the start of the creature’s next turn. On a successful saving throw, the creature is immune to the stench of all troglodytes for 1 hour."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the troglodyte has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The troglodyte makes two claw attacks."
		}
		]
	},
	"Poison Weird": {
		name: "Poison Weird",
		size: "Large",
		type: "Elemental",
		alignment: "neutral",
		ac: [13, "", false],
		hp: 58,
		hd: [9, 10],
		speed: "0 ft, swim 60 ft",
		saves: ["", "", "", "", "", ""],
		scores: [17, 16, 13, 11, 10, 10],
		damage_resistances: "fire; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, grappled, paralyzed, poisoned, restrained, prone, unconscious",
		senses: "blindsight 30 ft",
		languages: "understands Aquan but doesn’t speak",
		challenge_rating: "4",
		attacks: [{
			name: "Constrict",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "If the target is Medium or smaller, it is grappled (escape DC 13) and pulled 5 ft toward the poison weird. Until this grapple ends, the target is restrained, the poison weird tries to drown it, and the poison weird can’t constrict another target."
		}
		],
		traits: [{
			name: "Invisible in Water",
			description: "The weird is invisible while fully immersed in toxic brew."
		}, {
			name: "Brew Bound",
			description: "The weird dies if forced to leave the basin of toxic brew it inhabits, or if a purify food and drink spell is cast on the brew."
		}, {
			name: "Poisonous Body",
			description: "A creature takes 10 (3d6) poison damage at the start of each of its turns while grappled by a poison weird."
		}
		],
	},
	"Runed Behir": {
		name: "Runed Behir",
		size: "Huge",
		type: "Monstrosity",
		alignment: "neutral evil",
		ac: [17, "Natural Armor", false],
		hp: 168,
		hd: [16, 12],
		speed: "50 ft, climb 40 ft",
		saves: ["", "", "", "", "", ""],
		scores: [23, 16, 18, 7, 14, 12],
		skills: "Perception +6, Stealth +7",
		damage_immunities: "lightning",
		senses: "darkvision 90 ft",
		languages: "Draconic",
		challenge_rating: "11",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 10, "piercing"],
			range: "Melee (10 ft)",
			description: ""
		}, {
			name: "Constrict",
			ability: 1,
			damage: [2, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 17 (2d10+6) slashing damage. The target is grappled (escape DC 16) if the behir isn’t already constricting a creature, and the target is restrained until this grapple ends."
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The behir makes two attacks: one with its bite and one to constrict."
		}, {
			name: "Lightning Breath (Recharge 5–6)",
			recharge: "Recharge 5–6",
			description: "The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
		}, {
			name: "Swallow",
			description: "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir’s turns. A behir can have only one creature swallowed at a time. If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 ft of movement, exiting prone."
		}
		],
		legendary_actions: [{
			name: "Lesser Magic",
			description: "The behir casts color spray or sleep, requiring no components."
		}, {
			name: "Greater Magic",
			cost: 2,
			description: "The behir casts invisibility or misty step, requiring no components."
		}
		]
	},
	"Scaladar": {
		name: "Scaladar",
		source: ["Waterdeep - Dungeon of the Mad Mage", 315],
		size: "Huge",
		type: "construct",
		alignment: "unaligned",
		ac: [19, "Natural Armor", false],
		hp: 94,
		hd: [7, 12],
		scores: [19, 10, 25, 1, 12, 1],
		saves: ["", "", "", "", "", ""],
		skills: "",
		damage_resistances: "fire, bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities: "force, lightning, poison",
		condition_immunities: "charmed, paralyzed, poisoned",
		senses: "darkvision 60ft",
		passive_perception: "11",
		languages: "",
		challenge_rating: "8",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 12, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Target is grappled (escape DC 15). The scaladar has two claws, each of which can grapple one target.",
		}, {
			name: "Sting",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 11 (2d10) lightning damage.",
		},
		],
		traits: [{
			name: "Lightning Absorption",
			description: "Whenever the scaladar is subjected to lightning damage, it takes no damage, and its sting deals an extra 11 (2d10) lightning damage until the end of its next turn"
		}, {
			name: "Sadar Link",
			description: "The scaladar knows the location of other scaladar within 100 feet of it, and it can sense when any of them take damage"
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The scaladar makes three attacks- two with its claws and one with its sting"
		}
		],
		environment: "Underdark"
	},
	"Shadow Assassin": {
		name: "Shadow Assassin",
		size: "Medium",
		type: "Undead",
		alignment: "chaotic evil",
		ac: [14, "", false],
		hp: 78,
		hd: [12, 8],
		speed: "40 ft",
		scores: [6, 19, 14, 13, 12, 14],
		saves: ["", "8", "", "5", "", ""],
		skills: "Perception +9, Stealth +12",
		damageVulnerabilities: "radiant",
		damage_resistances: "acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities: "necrotic, poison",
		condition_immunities: "exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "darkvision 60 ft",
		languages: "understands the languages it knew in life but can’t speak",
		challenge_rating: "9",
		attacks: [{
			name: "Shadow Blade",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) necrotic damage. Unless the target is immune to necrotic damage, the target’s Strength score is reduced by 1d4 each time it is hit by this attack. The target dies if its Strength is reduced to 0. The reduction lasts until the target finishes a short or long rest. If a non-evil humanoid dies from this attack, a shadow (see the Monster Manual) rises from the corpse 1d4 hours later."
		}
		],
		traits: [{
			name: "Amorphous",
			description: "The assassin can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name: "Shadow Stealth",
			description: "While in dim light or darkness, the assassin can take the Hide action as a bonus action."
		}, {
			name: "Sunlight Weakness",
			description: "While in sunlight, the assassin has disadvantage on attack rolls, ability checks, and saving throws."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The assassin makes two Shadow Blade attacks."
		}
		]
	},
	"Shapechanged Roper": {
		name: "Shapechanged Roper",
		size: "Large",
		type: "Monstrosity",
		alignment: "neutral evil",
		ac: [20, "Natural Armor", false],
		hp: 93,
		hd: [11, 10],
		speed: "10 ft, climb 10 ft",
		scores: [18, 8, 17, 7, 16, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +6, Stealth +5",
		senses: "darkvision 60 ft",
		languages: "",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 8, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Tendril",
			ability: 1,
			damage: [0, 0, ""],
			range: "Melee (50 ft)",
			description: "One creature. On hit: The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can’t use the same tendril on another target."
		},
		],
		traits: [{
			name: "False Appearance",
			description: "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite."
		}, {
			name: "Grasping Tendrils",
			description: "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC 15 Strength check against it."
		}, {
			name: "Spider Climb",
			description: "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Shapechanger",
			description: "The roper can use its action to polymorph into a stone object or back to its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn’t transformed. It reverts to its true form if it dies."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite."
		}, {
			name: "Reel",
			description: "The roper pulls each creature grappled by it up to 25 ft straight toward it."
		}
		]
	},
	"Space Hamster": {
		name: "Space Hamster",
		size: "Tiny",
		type: "Beast",
		alignment: "unaligned",
		ac: [10, "", false],
		hp: 1,
		hd: [1, 4],
		speed: "20 ft",
		scores: [2, 11, 9, 2, 10, 4],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 30 ft",
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "",
			ability: 1,
			damage: [0, 0, ""],
			range: "",
			description: "",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "the hamster has advantage on Wisdom (Perception) checks that rely on smell."
		}
		]
	},
	"Statue of Vergadain": {
		name: "Statue of Vergadain",
		size: "Large",
		type: "Construct",
		alignment: "unaligned",
		ac: [17, "Natural Armor", false],
		hp: 178,
		hd: [17, 10],
		speed: "30 ft",
		scores: [22, 9, 20, 3, 11, 1],
		damage_immunities: "poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t adamantine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 120 ft",
		languages: "understands the languages of its creator but can’t speak",
		challenge_rating: "10",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Immutable Form",
			description: "The statue is immune to any spell or effect that would alter its form."
		}, {
			name: "Magic Resistance",
			description: "The statue has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The statue’s weapon attacks are magical."
		}, {
			name: "Magic Theft",
			description: "As a bonus action, the golem targets one creature it can see within 30 feet of it. The target must succeed on a DC 17 Charisma saving throw, or all magic items in its possession are teleported to the bottom of the pit in Hall of Embers."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The statue makes two slam attacks."
		}, {
			name: "Slow",
			recharge: "Recharge 5–6",
			description: "The statue targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can’t use reactions, its speed is halved, and it can’t make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}
		]
	},
	"Stonecloak": {
		name: "Stonecloak",
		size: "Large",
		type: "Construct",
		alignment: "unaligned",
		ac: [17, "Natural Armor", false],
		hp: 178,
		hd: [17, 10],
		speed: "30 ft",
		scores: [22, 9, 20, 9, 11, 9],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren’t adamantine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 120 ft",
		languages: "understands Abyssal, Celestial, Common, Draconic, Dwarvish, Elvish, Infernal, and Undercommon but can’t speak",
		challenge_rating: "10",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Immutable Form",
			description: "The stonecloak is immune to any spell or effect that would alter its form."
		}, {
			name: "Magic Resistance",
			description: "The stonecloak has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The stonecloak’s weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The stonecloak makes two slam attacks."
		}, {
			name: "Slow",
			recharge: "Recharge 5–6",
			description: "The stonecloak targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can’t use reactions, its speed is halved, and it can’t make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}
		]
	},
	"Undead Bulette": {
		name: "Undead Bulette",
		size: "Large",
		type: "Undead",
		alignment: "unaligned",
		ac: [17, "Natural Armor", false],
		hp: 125,
		hd: [9, 10],
		speed: "40 ft, burrow 40 ft",
		scores: [19, 11, 21, 2, 10, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +6",
		damageVulnerabilities: "radiant",
		damage_resistances: "necrotic",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft, tremorsense 60 ft",
		languages: "",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 12, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Standing Leap",
			description: "The bulette’s long jump is up to 30 ft and its high jump is up to 15 ft, with or without a running start."
		}
		],
		actions: [{
			name: "Deadly Leap",
			description: "If the bulette jumps at least 15 ft as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target’s choice) or be knocked prone and take 14 (3d6+4) bludgeoning damage plus 14 (3d6+4) slashing damage. On a successful save, the creature takes only half the damage, isn’t knocked prone, and is pushed 5 ft out of the bulette’s space into an unoccupied space of the creature’s choice. If no unoccupied space is within range, the creature instead falls prone in the bulette’s space."
		}
		]
	},
	"Undead Shambling Mound": {
		name: "Undead Shambling Mound",
		size: "Large",
		type: "Undead",
		alignment: "unaligned",
		ac: [15, "Natural Armor", false],
		hp: 136,
		hd: [16, 10],
		speed: "20 ft, swim 20 ft",
		scores: [18, 8, 16, 5, 10, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +2",
		damage_resistances: "cold, fire",
		damage_immunities: "necrotic, poison",
		condition_immunities: "blinded, deafened, exhaustion, poisoned",
		senses: "blindsight 60 ft (blind beyond this radius)",
		languages: "",
		challenge_rating: "5",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Necrotic Absorption",
			description: "Whenever the shambling mound is subjected to necrotic damage, it takes no damage and regains a number of hit points equal to the necrotic damage dealt."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it."
		}, {
			name: "Engulf",
			description: "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound’s turns or take 13 (2d8+4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time."
		}
		]
	},
	"Werebat": {
		name: "Werebat",
		source: ["Waterdeep - Dungeon of the Mad Mage", 317],
		size: "Small",
		type: "humanoid (goblin, shapechanger)",
		alignment: "neutral evil",
		ac: [13, "", false],
		hp: 24,
		hd: [7, 6],
		scores: [8, 17, 10, 10, 12, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +5",
		damage_resistances: "",
		damage_vulnerabilities: "",
		damage_immunities: "bludgeoning, piercing, and slashing damage from nonmagical attacks that aren't silvered weapons",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Goblin (can't speak in bat form)",
		challenge_rating: "2",
		attacks: [{
			name: "Bite (Bat or Hybrid Form Only)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Werebat gains temporary hit points equal to the damage dealt. If the target is humanoid, it must succeed on a DC 10 Constitution saving throw or be cursed with werebat lycanthropy",
		}, {
			name: "Scimitar (Humanoid or Hybrid Form Only)",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Shortbow (Humanoid or Hybrid Form Only)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Shapechanger",
			description: "The werebat can use its action to polymorph into a Medium bat-humanoid hybrid or into a Large giant bat, or back into its true form, which is humanoid. Its statistics, other than size, are the same in each form. Any equipment it. is wearing or carrying isn't transformed. It reverts to its true form if it dies."
		}, {
			name: "Echolocation (Bat or Hybrid Form Only)",
			description: "The werebat has blindsight out to a range of 60 feet as long as it's not deafened."
		}, {
			name: "Keen Hearing",
			description: "The werebat has advantage on Wisdom (Perception) checks that rely on hearing."
		}, {
			name: "Nimble Escape (Humanoid Form Only)",
			description: "The werebat can take the Disengage or Hide action as a bonus action on each of its turns."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the werebat has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack (Humanoid or Hybrid Form Only)",
			description: "In humanoid form, the werebat makes two scimitar attacks or two shortbow attacks. In hybrid form, it can make one bite attack and one scimitar attack"
		}
		],
		environment: "Underdark"
	},
	"Wooden Donkey": {
		name: "Wooden Donkey",
		size: "Medium",
		type: "Construct",
		alignment: "unaligned",
		ac: [10, "", false],
		hp: 11,
		hd: [2, 8],
		speed: "40 ft",
		scores: [14, 10, 13, 2, 10, 5],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "blinded, charmed, frightened, paralyzed, petrified, poisoned",
		senses: "blindsight 30 ft (blind beyond this radius)",
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Hooves",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Beast of Burden",
			description: "The donkey is considered to be a Large animal for the purpose of determining its carrying capacity."
		}, {
			name: "Sure-Footed",
			description: "The donkey has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
		}
		]
	}

}