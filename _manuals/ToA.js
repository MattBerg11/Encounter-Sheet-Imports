var ToA = {
	// 35
	"Acererak": {
		name: "Acererak",
		source: ["Tomb of Annihilation", 209],
		size: "Medium",
		type: "undead",
		alignment: "neutral evil",
		ac: [21, "Natural Armor", false],
		hp: 285,
		hd: [30, 8],
		speed: "30 ft",
		scores: [13, 16, 20, 27, 21, 20],
		saves: ["", "", "12", "15", "12", ""],
		skill: "Arcana +22, History +22, Insight +12, Perception +12, Religion +15",
		damage_resistances: "cold, lightning",
		damage_immunities: "necrotic, poison; bludgeoning, piercing, and slashing from nonmagical weapons",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned, stunned",
		senses: "truesight 120 ft",
		passive_perception: "22",
		languages: "Abyssal, Common, Draconic, Dwarvish, Elvish, Giant, Infernal, Primordial, Undercommon",
		challenge_rating: "23",
		attacks: [{
			name: "Staff (+3 Quarterstaff)",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			modifiers: [3, 3, true],
			description: "Plus 10 (3d6) necrotic damage; Two-Handed: 8 (1d8+4) bludgeoning damage.",
		}, {
			name: "Paralyzing Touch",
			ability: 1,
			damage: [3, 6, "cold"],
			range: "Melee (5 ft)",
			modifiers: ["", "", false],
			description: "Target must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		traits: [{
			name: "Special Equipment",
			description: "Acererak carries the Staff of the Forgotten One (see Appendix C). He wears a talisman of the sphere and has a sphere of annihilation under his control."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Acererak fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Rejuvenation",
			description: "Acererak's body turns to dust when he drops to 0 hit points, and his equipment is left behind. Acererak gains a new body after 1d10 days, regaining all his hit points and becoming active again. The new body appears within 5 feet of Acererak's phylactery, the location of which is hidden."
		}, {
			name: "Turn Resistance",
			description: "Acererak has advantage on saving throws against any effect that turns undead."
		}
		],
		actions: [{
			name: "Invoke Curse",
			description: "While holding the Staff of the Forgotten One, Acererak expends 1 charge from it and targets one creature he can see within 60 feet of him. The target must succeed on a DC 23 Constitution saving throw or be cursed. Until the curse is ended, the target can't regain hit points and has vulnerability to necrotic damage. Greater restoration, remove curse, or similar magic ends the curse on the target."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "Acererak can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Acererak regains spent legendary actions at the start of his turn."
		}, {
			name: "At-Will Spell",
			description: "Acererak can cast one of his at-will spells."
		}, {
			name: "Melee Attack",
			description: "Acererak uses Paralyzing Touch or makes one melee attack with his staff."
		}, {
			name: "Frightening Gaze (Costs 2 Actions)",
			description: "Acererak fixes his gaze on one creature it can see within 10 feet of him. The target must succeed on a DC 20 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to Acererak's gaze for the next 24 hours.",
		}, {
			name: "Talisman of the Sphere (Costs 2 Actions)",
			description: "Acererak uses his talisman of the sphere to move the sphere of annihilation under his control up to 90 feet."
		}, {
			name: "Disrupt Life (Costs 3 Actions)",
			description: "Each creature within 20 feet of Acererak must make a DC 20 Constitution saving throw against this magic, taking 42 (12d6) necrotic damage on a failed save, or half as much damage on a successful one."
		}
		],
		spells: [
			"Acererak is a 20th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 23, +15 to hit with spell attacks). Acererak has the following wizard spells prepared:",
			"Cantrips (at will): mage hand, ray of frost, shocking grasp",
			"1st level (at will): ray of sickness, shield",
			"2nd level (at will): arcane lock, knock",
			"3rd level (at will): animate dead, counterspell",
			"4th level (3 slots): blight, ice storm, phantasmal killer",
			"5th level (3 slots): cloudkill, hold monster, wall of force",
			"6th level (3 slots): chain lightning, circle of death, disintegrate",
			"7th level (3 slots): finger of death, plane shift, teleport",
			"8th level (2 slots): maze, mind blank",
			"9th level (2 slots): power word kill, time stop."
		]
	},
	"Albino Dwarf Spirit Warrior": {
		name: "Albino Dwarf Spirit Warrior",
		source: ["Tomb of Annihilation", 210],
		size: "Medium",
		type: "humanoid (dwarf)",
		alignment: "any alignment",
		ac: [13, "Hide Armor", false],
		hp: 30,
		hd: [4, 8],
		speed: "25 ft",
		scores: [13, 13, 17, 12, 14, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +3, Survival +4",
		damage_resistances: "poison",
		senses: "darkvision 60 ft",
		passive_perception: "14",
		languages: "Common, Dwarvish",
		challenge_rating: "1",
		attacks: [{
			name: "Handaxe (Melee)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Handaxe (Ranged)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Dwarven Resilience",
			description: "The dwarf has advantage on saving throws against poison."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The dwarf's innate spellcasting ability is Wisdom. It can innately cast the following spells, requiring no material components:",
				"1/day each: hunter's mark, jump, pass without trace, speak with animals, speak with plant"
			]
		}
		],
	},
	"Albino Dwarf Warrior": {
		name: "Albino Dwarf Warrior",
		source: ["Tomb of Annihilation", 210],
		size: "Medium",
		type: "humanoid (dwarf)",
		alignment: "any alignment",
		ac: [13, "Hide Armor", false],
		hp: 30,
		hd: [4, 8],
		speed: "25 ft",
		scores: [13, 13, 17, 12, 14, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +3, Survival +4",
		damage_resistances: "poison",
		senses: "darkvision 60 ft",
		passive_perception: "14",
		languages: "Common, Dwarvish",
		challenge_rating: "1/4",
		attacks: [{
			name: "Handaxe (Melee)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Handaxe (Ranged)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Dwarven Resilience",
			description: "The dwarf has advantage on saving throws against poison."
		}
		],
	},
	"Aldani (Lobsterfolk)": {
		name: "Aldani (Lobsterfolk)",
		source: ["Tomb of Annihilation", 210],
		size: "Medium",
		type: "monstrosity",
		alignment: "lawful neutral",
		ac: [14, "Natural Armor", false],
		hp: 49,
		hd: [9, 8],
		speed: "20 ft, swim 30 ft",
		scores: [13, 8, 12, 10, 14, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Survival +4",
		senses: "darkvision 60 ft",
		passive_perception: "14",
		languages: "Common",
		challenge_rating: "1",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Target is grappled (escape DC 11). The aldani has two claws, each of which can grapple only one target.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The aldani can breathe air and water."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The aldani makes two attacks with its claws."
		}
		]
	},
	"Almiraj": {
		name: "Almiraj",
		source: ["Tomb of Annihilation", 211],
		size: "Small",
		type: "beast",
		alignment: "unaligned",
		ac: [13, "", false],
		hp: 3,
		hd: [1, 6],
		speed: "50 ft",
		scores: [2, 16, 10, 2, 14, 10],
		saves: ["", "", "", "", "", ""],
		passive_perception: "12",
		challenge_rating: "0",
		attacks: [{
			name: "Horn",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Senses",
			description: "The almiraj has advantage on Wisdom (Perception) checks that rely on hearing or sight."
		}
		],
	},
	"Ankylosaurus Zombie": {
		name: "Ankylosaurus Zombie",
		source: ["Tomb of Annihilation", 240],
		size: "Huge",
		type: "undead",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 68,
		hd: [8, 12],
		speed: "20 ft",
		scores: [19, 9, 15, 2, 6, 3],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "8",
		challenge_rating: "3",
		attacks: [{
			name: "Tail",
			ability: 1,
			damage: [4, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
		}
		],
		traits: [{
			name: "Undead Fortitude",
			description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 @ the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
		}
		],
	},
	"Artus Cimber": {
		name: "Artus Cimber",
		source: ["Tomb of Annihilation", 212],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral good",
		ac: [14, "Studded Leather", false],
		hp: 82,
		hd: [15, 8],
		speed: "30 ft",
		scores: [10, 15, 13, 17, 16, 18],
		saves: ["", "5", "", "", "", "7"],
		skills: "Deception +7, History +9, Insight +6, Survival +9",
		damage_immunities: "cold (while wearing the Ring of Winter)",
		passive_perception: "13",
		languages: "Common, Draconic, Dwarvish, Goblin",
		challenge_rating: "7",
		attacks: [{
			name: "Bookmark (+3 Dagger)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			modifiers: [3, 3, true],
			description: "",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Special Equipment",
			description: [
				"Artus wears the Ring of Winter. He and the ring can't be targeted by divination magic or perceived through magical scrying sensors. While attuned to and wearing the ring, Artus ceases to age and is immune to cold damage and the effects of extreme cold.",
				"Artus wields Bookmark, a +3 dagger with additional magical properties. As a bonus action, Artus can activate any one of the following properties while attuned to the dagger, provided he has the weapon drawn:",
				"Cause a blue gem set into the dagger's pommel to shed bright light in a 20-foot radius and dim light for an additional 20 feet, or make the gem go dark.",
				"Turn the dagger into a compass that, while resting on Artus's palm, points north.",
				"Cast dimension door from the dagger. Once this property is used, it can't be used again until the next dawn.",
				"Cast compulsion (save DC 15) from the dagger. The range of the spell increases to 90 feet, but the spell targets only spiders that are beasts. Once this property is used, it can't be used again until the next dawn."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Artus makes three attacks with Bookmark or his longbow."
		}, {
			name: "Ring of Winter",
			description: [
				"The Ring of Winter has 12 charges and regains all its expended charges daily at dawn. While attuned to and wearing the ring, Artus can expend the necessary number of charges to activate one of the following properties:",
				"Artus can expend 1 charge and use the ring to lower the temperature in a 120-foot-radius sphere centered on a point he can see within 300 feet of him. The temperature in that area drops 20 degrees per minute, to a minimum of _30 degrees Fahrenheit. Frost and ice begin to form on surfaces once the temperature drops below 32 degrees. This effect is permanent unless Artus uses the ring to end the effect as an action, at which point the temperature in the area returns to normal at a rate of 10 degrees per minute.",
				"Artus can cast one of the following spells from the ring (spell save DC 17) by expending the necessary number of charges: Bigby's hand (2 charges; the hand is made of ice, is immune to cold damage, and deals bludgeoning damage instead of force damage as a clenched fist), cone of cold (2 charges), flesh to ice (3 charges; as flesh to stone except that the target turns to solid ice with the density and durability of stone), ice storm (2 charges), Otiluke's otiluke's freezing sphere (3 charges), sleet storm (1 charge), spike growth (1 charge; the spikes are made of ice), or wall of ice (2 charges).",
				"Artus can expend the necessary number of charges and use the ring to create either an inanimate ice object (2 charges) or an animated ice creature (4 charges). The ice object can't have any moving parts, must be able to fit inside a 10-foot cube, and has the density and durability of metal or stone (Artus's choice). The ice creature must be modeled after a beast with a challenge rating of 2 or less. The ice creature has the same statistics as the beast it models, with the following changes: the creature is a construct with vulnerability to fire damage, immunity to cold and poison damage, and immunity to the following conditions: charmed, exhaustion, frightened, paralyzed, petrified, and poisoned. The ice creature obeys only its creator's commands. The ice object or creature appears in an unoccupied space within 60 feet of Artus. It melts into a pool of normal water after 24 hours or when it drops to 0 hit points. In extreme heat, it loses 5 (1d10) hit points per minute as it melts. Use the guidelines in chapter 8 of the Dungeon Master's Guide to determine the hit points of an inanimate object if they become necessary."
			]
		}
		]
	},
	"Assassin Vine": {
		name: "Assassin Vine",
		source: ["Tomb of Annihilation", 213],
		size: "Large",
		type: "plant",
		alignment: "unaligned",
		ac: [13, "Natural Armor", false],
		hp: 85,
		hd: [10, 10],
		speed: "5 ft, climb 5 ft",
		scores: [18, 10, 16, 1, 10, 1],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold, fire",
		condition_immunities: "blinded, deafened, exhaustion, prone",
		senses: "blindsight 30 ft",
		passive_perception: "10",
		challenge_rating: "3",
		attacks: [{
			name: "Constrict",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "Target is grappled (escape DC 14). Until this grapple ends, the target is restrained, and it takes 21 (6d6) poison damage at the start of each of its turns. The vine can constrict only one target at a time.",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the assassin vine remains motionless, it is indistinguishable from a normal plant."
		}
		],
		actions: [{
			name: "Entangling Vines",
			description: "The assassin vine can animate normal vines and roots on the ground in a 15-foot square within 30 feet of it. These plants turn the ground in that area into difficult terrain. A creature in that area when the effect begins must succeed on a DC 13 Strength saving throw or be restrained by entangling vines and roots. A creature restrained by the plants can use its action to make a DC 13 Strength (Athletics) check, freeing itself on a successful check. The effect ends after 1 minute or when the assassin vine dies or uses Entangling Vines again.",
		}
		]
	},
	"Atropal": {
		name: "Atropal",
		source: ["Tomb of Annihilation", 214],
		size: "Huge",
		type: "undead (titan)",
		alignment: "neutral evil",
		ac: [7, "", false],
		hp: 225,
		hd: [18, 12],
		speed: "0 ft, fly 50 ft (hover)",
		scores: [19, 5, 22, 25, 19, 24],
		saves: ["", "", "11", "", "9", ""],
		"vulnerable": "radiant",
		damage_immunities: "cold, necrotic, poison; bludgeoning, piercing, and slashing from nonmagical attacks",
		condition_immunities: "exhaustion, frightened, paralyzed, poisoned, prone",
		senses: "darkvision 120 ft, truesight 120 ft",
		passive_perception: "14",
		languages: "understands Celestial but utters only obscene nonsense",
		challenge_rating: "13",
		attacks: [{
			name: "Touch",
			ability: 1,
			damage: [3, 6, "necrotic"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Ray of Cold",
			ability: 4,
			damage: [6, 6, "cold"],
			range: "Ranged (120 ft)",
			description: "One target.",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The atropal has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Negative Energy Aura",
			description: [
				"Creatures within 30 feet of the atropal can't regain hit points, and any creature that starts its turn within 30 feet of the atropal takes 10 (3d6) necrotic damage.",
				"If the atropal is struck by a vorpal sword, the wielder can cut the atropal's umbilical cord instead of dealing damage. If its umbilical cord is cut, the atropal loses this feature."
			]
		}, {
			name: "Turn Resistance Aura",
			description: "The atropal and any other undead creature within 30 feet of it has advantage on saving throws against any effect that turns undead."
		}
		],
		actions: [{
			name: "Life Drain",
			description: "The atropal targets one creature it can see within 120 feet of it. The target must succeed on a DC 19 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one. The atropal regains a number of hit points equal to half the amount of damage dealt."
		}, {
			name: "Summon Wraith (Recharge 6)",
			description: "The atropal summons a wraith, which materializes within 30 feet of it in an unoccupied space it can see. The wraith obeys its summoner's commands and can't be controlled by any other creature. The wraith vanishes when it drops to 0 hit points or when its summoner dies."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The atropal can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The atropal regains spent legendary actions at the start of its turn."
		}, {
			name: "Touch",
			description: "The atropal makes a touch attack."
		}, {
			name: "Ray of Cold (Costs 2 Actions)",
			description: "The atropal uses its Ray of Cold."
		}, {
			name: "Disrupt Life (Costs 3 Actions)",
			description: "The atropal lets out a withering wail. Any creature within 120 feet of the atropal that can hear the wail must succeed on a DC 19 Constitution saving throw or gain 1 level of exhaustion."
		}
		]
	},
	"Chwinga": {
		name: "Chwinga",
		source: ["Tomb of Annihilation", 216],
		size: "Tiny",
		type: "elemental",
		alignment: "neutral",
		ac: [15, "", false],
		hp: 5,
		hd: [2, 4],
		speed: "20 ft, climb 20 ft , swim 20 ft",
		scores: [1, 20, 10, 14, 16, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +7, Perception +7, Stealth +7",
		senses: "blindsight 60 ft",
		passive_perception: "17",
		challenge_rating: "0",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Evasion",
			description: "When the chwinga is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The chwinga's innate spellcasting ability is Wisdom. It can innately cast the following spells, requiring no material or verbal components:",
				"At will: druidcraft, guidance, pass without trace, resistance"
			]
		}
		],
		actions: [{
			name: "Magical Gift (1/Day)",
			description: "The chwinga targets a humanoid it can see within 5 feet of it. The target gains a supernatural charm of the DM's choice. See chapter 7 of the Dungeon Master's Guide for more information on supernatural charms."
		}, {
			name: "Natural Shelter",
			description: "The chwinga magically takes shelter inside a rock, a living plant, or a natural source of fresh water in its space. The chwinga can't be targeted by any attack, spell, or other effect while inside this shelter, and the shelter doesn't impair the chwinga's blindsight. The chwinga can use its action to emerge from a shelter. If its shelter is destroyed, the chwinga is forced out and appears in the shelter's space, but is otherwise unharmed."
		}
		],
	},
	"Dragonbait": {
		name: "Dragonbait",
		source: ["Tomb of Annihilation", 218],
		size: "Medium",
		type: "humanoid (saurial)",
		alignment: "lawful good",
		ac: [17, "Breastplate", true],
		hp: 120,
		hd: [16, 8],
		speed: "30 ft",
		scores: [15, 13, 17, 14, 16, 18],
		saves: ["", "", "", "", "6", "7"],
		skills: "Athletics +5, Medicine +6",
		passive_perception: "13",
		languages: "understands Common but can't speak",
		challenge_rating: "5",
		attacks: [{
			name: "Holy Avenger (+3 Longsword)",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			modifiers: [3, 3, true],
			description: "Two-Handed: 10 (1d10+5) slashing damage. If the target is a fiend or an undead, it takes an extra 11 (2d10) radiant damage.",
		}
		],
		traits: [{
			name: "Divine Health",
			description: "Dragonbait is immune to disease."
		}, {
			name: "Magic Resistance Aura",
			description: "While holding his holy avenger, Dragonbait creates an aura in a 10-foot radius around him. While this aura is active, Dragonbait and all creatures friendly to him in the aura have advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Dragonbait makes two melee weapon attacks."
		}, {
			name: "Sense Alignment",
			description: "Dragonbait chooses one creature he can see within 60 feet of him and determines its alignment, as long as the creature isn't hidden from divination magic by a spell or other magical effect."
		}
		]
	},
	"Eblis": {
		name: "Eblis",
		source: ["Tomb of Annihilation", 219],
		size: "Large",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [13, "", false],
		hp: 26,
		hd: [4, 10],
		speed: "30 ft, fly 40 ft",
		scores: [11, 16, 12, 12, 14, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		passive_perception: "14",
		languages: "Auran, Common",
		challenge_rating: "1",
		attacks: [{
			name: "Beak",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The eblis's innate spellcasting ability is Intelligence (spell save DC 11). It can innately cast the following spells, requiring no material components:",
				"1/day each: blur, hypnotic pattern, minor illusion"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The eblis attacks twice with its beak."
		}
		],
	},
	"Flying Monkey": {
		name: "Flying Monkey",
		source: ["Tomb of Annihilation", 220],
		size: "Small",
		type: "beast",
		alignment: "unaligned",
		ac: [12, "", false],
		hp: 3,
		hd: [1, 6],
		speed: "20 ft ., climb 20 ft , fly 30 ft",
		scores: [8, 14, 11, 5, 12, 6],
		saves: ["", "", "", "", "", ""],
		passive_perception: "11",
		challenge_rating: "0",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Pack Tactics",
			description: "The flying monkey has advantage on an attack roll against a creature if at least one of the monkey's allies is within 5 feet of the creature and the ally isn't incapacitated."
		}
		],
	},
	"Giant Four-Armed Gargoyle": {
		name: "Giant Four-Armed Gargoyle",
		source: ["Tomb of Annihilation", 221],
		size: "Large",
		type: "elemental",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 147,
		hd: [14, 10],
		speed: "30 ft, fly 60 ft",
		scores: [19, 11, 20, 6, 11, 9],
		saves: ["", "", "", "", "4", ""],
		skills: "Perception +4",
		damage_resistances: "bludgeoning, piercing, and slashing damage from nonmagical attacks not made with adamantine weapons",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, petrified, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "14",
		languages: "Terran",
		challenge_rating: "10",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the gargoyle remains motionless, it is indistinguishable from an inanimate statue."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The gargoyle makes five attacks: one with its bite and four with its claws."
		},
		]
	},
	"Giant Snapping Turtle": {
		name: "Giant Snapping Turtle",
		source: ["Tomb of Annihilation", 222],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [17, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "30 ft , swim 40 ft",
		scores: [19, 10, 14, 2, 12, 5],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: "11",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Prone AC",
			description: "While prone, Armor Class is 12"
		}, {
			name: "Amphibious",
			description: "The turtle can breathe air and water."
		}, {
			name: "Stable",
			description: "Whenever an effect knocks the turtle prone, it can make a DC 10 Constitution saving throw to avoid being knocked prone. A prone turtle is upside down. To stand up, it must succeed on a DC 10 Dexterity check on its turn and then use all its movement for that turn."
		}
		],
	},
	"Girallon Zombie": {
		name: "Girallon Zombie",
		source: ["Tomb of Annihilation", 240],
		size: "Large",
		type: "undead",
		alignment: "chaotic evil",
		ac: [11, "Natural Armor", false],
		hp: 59,
		hd: [7, 10],
		speed: "30 ft, climb 30 ft",
		scores: [18, 12, 16, 3, 7, 5],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "8",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Source",
			description: "Tomb of Annihilation, p. 222"
		}, {
			name: "Aggressive",
			description: "As a bonus action, the zombie can move up to its speed toward a hostile creature that it can see."
		}, {
			name: "Undead Fortitude",
			description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 @ the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The zombie makes five attacks: one with its bite and four with its claws."
		}
		]
	},
	"Jaculi": {
		name: "Jaculi",
		source: ["Tomb of Annihilation", 225],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 16,
		hd: [3, 10],
		speed: "30 ft, climb 20 ft",
		scores: [15, 14, 11, 2, 8, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +4, Perception +1, Stealth +4",
		senses: "blindsight 30 ft",
		passive_perception: "11",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Camouflage",
			description: "The jaculi has advantage on Dexterity (Stealth) checks made to hide."
		}, {
			name: "Keen Smell",
			description: "The jaculi has advantage on Wisdom (Perception) checks that rely on smell."
		}
		],
		actions: [{
			name: "Spring",
			description: "The jaculi springs up to 30 feet in a straight line and makes a bite attack against a target within its reach. This attack has advantage if the jaculi springs at least 10 feet. If the attack hits, the bite deals an extra 7 (2d6) piercing damage."
		}
		]
	},
	"Kamadan": {
		name: "Kamadan",
		source: ["Tomb of Annihilation", 225],
		size: "Large",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [13, "", false],
		hp: 67,
		hd: [9, 10],
		speed: "30 ft",
		scores: [16, 16, 14, 3, 14, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +7",
		passive_perception: "14",
		challenge_rating: "4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Snakes",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must make a DC 12 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The kamadan has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Pounce",
			description: "If the kamadan moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is knocked prone, the kamadan can make two attacks — one with its bite and one with its snakes — against it as a bonus action.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The kamadan makes two attacks: one with its bite or claw and one with its snakes."
		}, {
			name: "Sleep Breath (Recharges after a Short or Long Rest)",
			description: "The kamadan exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a DC 12 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if it takes damage or someone uses an action to wake it.",
		}
		]
	},
	"Liara Portyr": {
		name: "Liara Portyr",
		source: ["Tomb of Annihilation", 227],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "lawful evil",
		ac: [15, "Studded Leather", true],
		hp: 84,
		hd: [13, 8],
		speed: "30 ft",
		scores: [16, 12, 15, 14, 14, 16],
		saves: ["", "", "4", "", "4", ""],
		skills: "Athletics +5, Deception +5, Insight +4, Intimidation +5",
		passive_perception: "12",
		languages: "Common, Draconic, Dwarvish",
		challenge_rating: "4",
		attacks: [{
			name: "Battleaxe",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d10+3) slashing damage.",
		}, {
			name: "Heavy Crossbow",
			ability: 2,
			damage: [1, 10, "piercing"],
			range: "Ranged (100/400 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Brave",
			description: "Liara has advantage on saving throws against being frightened."
		}, {
			name: "Flaming Fury",
			description: "Once per turn, when Liara hits a creature with a melee weapon, she can cause fire to magically erupt from her weapon and deal an extra 10 (3d6) fire damage to the target."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Liara makes three melee attacks."
		}
		]
	},
	"Mantrap": {
		name: "Mantrap",
		source: ["Tomb of Annihilation", 227],
		size: "Large",
		type: "plant",
		alignment: "unaligned",
		ac: [12, "", false],
		hp: 45,
		hd: [7, 10],
		speed: "5 ft",
		scores: [15, 14, 12, 1, 10, 2],
		saves: ["", "", "", "", "", ""],
		condition_immunities: "blinded, deafened, exhaustion, prone",
		senses: "tremorsense 30 ft",
		passive_perception: "10",
		challenge_rating: "1",
		attacks: [{
			name: "Engulf",
			ability: 2,
			damage: [4, 6, "acid"],
			range: "Melee (5 ft)",
			modifiers: ["", "", false],
			description: "Target must be Medium or smaller creature. Hit: The target is trapped inside the mantrap's leafy jaws. While trapped in this way, the target is blinded and restrained, has total cover from attacks and other effects outside the mantrap, and takes 14 (4d6) acid damage at the start of each of the target's turns. If the mantrap dies, the creature inside it is no longer restrained by it. A mantrap can engulf only one creature at a time.",
		}
		],
		traits: [{
			name: "Attractive Pollen (1/Day)",
			description: "When the mantrap detects any creatures nearby, it can use its reaction to release pollen out to a radius of 30 feet. Any beast or humanoid within the area must succeed on a DC 11 Wisdom saving throw or be forced to use all its movement on its turns to get as close to the mantrap as possible. An affected target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "False Appearance",
			description: "While the mantrap remains motionless, it is indistinguishable from an ordinary tropical plant."
		}
		],
	},
	"Mwaxanaré": {
		name: "Mwaxanaré",
		source: ["Tomb of Annihilation", 228],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "lawful neutral",
		ac: [10, "", false],
		hp: 13,
		hd: [3, 8],
		speed: "30 ft",
		scores: [6, 10, 11, 13, 12, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Nature +3, Persuasion +5, Religion +3",
		passive_perception: "11",
		languages: "Auran, Common, telepathy 30 ft",
		challenge_rating: "1/8",
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
		spells: [
			"Mwaxanaré is a 2nd-level spellcaster. Her spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). She regains her expended spell slots when she finishes a short or long rest. She knows the following warlock spells:",
			"Cantrips (at will): eldritch blast, mage hand",
			"1st level (2 slots): charm person, protection from evil and good, unseen servant"
		]
	},
	"Pterafolk": {
		name: "Pterafolk",
		source: ["Tomb of Annihilation", 229],
		size: "Large",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [12, "Natural Armor", false],
		hp: 26,
		hd: [4, 10],
		speed: "30 ft, fly 50 ft",
		scores: [15, 13, 12, 9, 10, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Survival +2",
		passive_perception: "12",
		languages: "Common",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [2, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Melee)",
			ability: 2,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin",
			ability: 2,
			damage: [2, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Terror Dive",
			description: "If the pterafolk is flying and dives at least 30 feet straight toward a target, and then hits that target with a melee weapon attack, the target is frightened until the end of its next turn.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The pterafolk makes three attacks: one with its bite and two with its claws. Alternatively, it makes two melee attacks with its javelin."
		}
		]
	},
	"Ras Nsi": {
		name: "Ras Nsi",
		source: ["Tomb of Annihilation", 230],
		size: "Medium",
		type: "monstrosity (shapechanger)",
		alignment: "yuan-ti), neutral evil",
		ac: [15, "Bracers of Defence", false],
		hp: 127,
		hd: [17, 8],
		speed: "30 ft",
		scores: [17, 16, 17, 18, 18, 21],
		saves: ["", "", "6", "", "7", ""],
		skills: "Deception +8, Persuasion +8, Religion +7, Stealth +6",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "14",
		languages: "Abyssal, Common, Draconic",
		challenge_rating: "7",
		attacks: [{
			name: "Bite (Snake Form Only)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) poison damage.",
		}, {
			name: "Constrict",
			ability: 2,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target is grappled (escape DC 14). Until this grapple ends, the target is restrained, and Ras Nsi can't constrict another target.",
		}, {
			name: "Flame Tongue Longsword ",
			ability: 2,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) fire damage; Yuan-ti Form Only; Two-Handed: 8 (1d10+3) slashing damage.",
		}
		],
		traits: [{
			name: "Death Curse",
			description: "Having died and been brought back to life, Ras Nsi is suffering from the death curse. His hit point maximum is reduced to 107, and decreases by 1 for each day that passes during the adventure."
		}, {
			name: "Special Equipment",
			description: "Ras Nsi wears bracers of defense, wields a flame tongue longsword, and carries a sending stone matched to one carried by the guide Salida (see chapter 1)."
		}, {
			name: "Shapechanger",
			description: "Ras Nsi can use his action to polymorph into a Medium snake or back into his yuan-ti form. His statistics are the same in each form. Any equipment he is wearing or carrying isn't transformed. He doesn't change form if he dies."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Ras Nsi's innate spellcasting ability is Charisma (spell save DC 16). He can innately cast the following spells, requiring no material components:",
				"At will: animal friendship (snakes only)",
				"3/day each: suggestion."
			]
		}, {
			name: "Magic Resistance",
			description: "Ras Nsi has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Ras Nsi makes three melee attacks, but can use Constrict only once."
		}
		],
		spells: [
			"Ras Nsi is an 11th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). Ras Nsi has the following wizard spells prepared:",
			"Cantrips (at will): chill touch, fire bolt, mage hand, mending, poison spray",
			"1st level (4 slots): expeditious retreat, false life, magic missile, shield",
			"2nd level (3 slots): blindness/deafness, hold person, misty step",
			"3rd level (3 slots): animate dead, counterspell, fireball",
			"4th level (3 slots): blight, polymorph",
			"5th level (2 slots): contact other plane, geas",
			"6th level (1 slot): create undead."
		]
	},
	"Stone Juggernaut": {
		name: "Stone Juggernaut",
		source: ["Tomb of Annihilation", 231],
		size: "Large",
		type: "construct",
		alignment: "unaligned",
		ac: [15, "Natural Armor", false],
		hp: 157,
		hd: [15, 10],
		speed: "50 ft in chosen direction",
		scores: [22, 1, 21, 2, 11, 3],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison; bludgeoning, piercing, and slashing damage from nonmagical attacks not made with adamantine weapons",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned, prone",
		senses: "blindsight 120 ft",
		passive_perception: "10",
		challenge_rating: "12",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 12, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the target is a Large or smaller creature, it must succeed on a DC 17 Strength saving throw or be knocked prone.",
		}
		],
		traits: [{
			name: "Devastating Roll",
			description: "The juggernaut can move through the space of a prone creature. A creature whose space the juggernaut enters for the first time on a turn must make a DC 17 Dexterity saving throw, taking 55 (10d10) bludgeoning damage on a failed save, or half as much damage on a successful one."
		}, {
			name: "Immutable Form",
			description: "The juggernaut is immune to any spell or effect that would alter its form."
		}, {
			name: "Regeneration",
			description: "As long as it has 1 hit point left, the juggernaut magically regains all its hit points daily at dawn. The juggernaut is destroyed and doesn't regenerate if it drops to 0 hit points."
		}, {
			name: "Siege Monster",
			description: "The juggernaut deals double damage to objects and structures."
		}
		],
	},
	"Su-Monster": {
		name: "Su-Monster",
		source: ["Tomb of Annihilation", 232],
		size: "Medium",
		type: "monstrosity",
		alignment: "chaotic evil",
		ac: [12, "", false],
		hp: 27,
		hd: [5, 8],
		speed: "30 ft, climb 30 ft",
		scores: [14, 15, 12, 9, 13, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +6, Perception +3",
		passive_perception: "13",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "Or 12 (4d4+2) slashing damage if the su-monster is hanging by its tail and all four of its limbs are free.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The su-monster makes two attacks: one with its bite and one with its claws."
		}, {
			name: "Psychic Crush (Recharge 5-6)",
			description: "The su-monster targets one creature it can see within 30 feet of it. The target must succeed on a DC 11 Wisdom saving throw or take 17 (5d6) psychic damage and be stunned for 1 minute. The stunned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		]
	},
	"Tabaxi Hunter": {
		name: "Tabaxi Hunter",
		source: ["Tomb of Annihilation", 232],
		size: "Medium",
		type: "humanoid (tabaxi)",
		alignment: "chaotic good",
		ac: [14, "Leather Armor", false],
		hp: 40,
		hd: [9, 8],
		speed: "30 ft, cl imb 20 ft",
		scores: [10, 17, 11, 13, 14, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +2, Perception +4, Stealth +5, Survival +6",
		senses: "darkvision 60 ft",
		passive_perception: "14",
		languages: "Common plus any one language",
		challenge_rating: "1",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Shortbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Feline Agility",
			description: "When the tabaxi moves on its turn in combat, it can double its speed until the end of the turn. Once it uses this ability, the tabaxi can't use it again until it moves 0 feet on one of its turns."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The tabaxi makes two attacks with its claws, its shortsword, or its shortbow."
		}
		]
	},
	"Tabaxi Minstrel": {
		name: "Tabaxi Minstrel",
		source: ["Tomb of Annihilation", 233],
		size: "Medium",
		type: "humanoid (tabaxi)",
		alignment: "chaotic good",
		ac: [12, "", false],
		hp: 22,
		hd: [5, 8],
		speed: "30 ft, climb 20 ft",
		scores: [10, 15, 11, 14, 12, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Performance +7, Persuasion +5, Stealth +4",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Common plus any two languages",
		challenge_rating: "1/4",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [1, 4, "slashing"],
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
			name: "Feline Agility",
			description: "When the tabaxi moves on its turn in combat, it can double its speed until the end of the turn. Once it uses this ability, the tabaxi can't use it again until it moves 0 feet on one of its turns."
		}, {
			name: "Inspire (1/Day)",
			description: "While taking a short rest, the tabaxi can spend 1 minute singing, playing an instrument, telling a story, or reciting a poem to soothe and inspire creatures other than itself. Up to five creatures of the tabaxi's choice that can see and hear its performance gain 8 temporary hit points at the end of the tabaxi's short rest."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The tabaxi makes two claws attacks or two dart attacks."
		}
		]
	},
	"Tri-Flower Frond": {
		name: "Tri-Flower Frond",
		source: ["Tomb of Annihilation", 234],
		size: "Medium",
		type: "plant",
		alignment: "unaligned",
		ac: [10, "", false],
		hp: 11,
		hd: [2, 8],
		speed: "5 ft",
		scores: [1, 10, 12, 1, 10, 1],
		saves: ["", "", "", "", "", ""],
		condition_immunities: "blinded, deafened, exhaustion, prone",
		senses: "blindsight 30 ft",
		passive_perception: "10",
		challenge_rating: "1/2",
		attacks: [{
			name: "Red Blossom",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Target is grappled (escape DC 11). Until this grapple ends, the target takes 5 (2d4) poison damage at the start of each of its turns. The red blossom can grapple only one target at a time. Another creature within reach of the tri-flower frond can use its action to end the grapple on the target.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The tri-flower frond uses its orange blossom, then its yellow blossom, and then its red blossom."
		}, {
			name: "Orange Blossom",
			description: "The tri-flower frond chooses one creature it can see within 5 feet of it. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 hour. While poisoned in this way, the target is unconscious. At the end of each minute, the poisoned target can repeat the saving throw, ending the effect on itself on a success.",
		}, {
			name: "Yellow Blossom",
			description: "The tri-flower frond chooses one creature it can see within 5 feet of it. The target must succeed on a DC 11 Dexterity saving throw, or it is covered with corrosive sap and takes 5 acid damage at the start of each of its turns. Dousing the target with water reduces the acid damage by 1 point per pint or flask of water used."
		}
		]
	},
	"Tyrannosaurus Zombie": {
		name: "Tyrannosaurus Zombie",
		source: ["Tomb of Annihilation", 241],
		size: "Huge",
		type: "undead",
		alignment: "unaligned",
		ac: [11, "Natural Armor", false],
		hp: 136,
		hd: [13, 12],
		speed: "40 ft",
		scores: [25, 6, 19, 1, 3, 5],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "6",
		challenge_rating: "8",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 12, "piercing"],
			range: "Melee (10 ft)",
			description: "If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained and the tyrannosaurus zombie can't bite another target or disgorge zombies.",
		}, {
			name: "Tail",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Disgorge Zombie",
			description: "As a bonus action, the tyrannosaurus zombie can disgorge a normal zombie, which appears in an unoccupied space within 10 feet of it. The disgorged zombie acts on its own initiative count. After a zombie is disgorged, roll a d6. On a roll of 1, the tyrannosaurus zombie runs out of zombies to disgorge and loses this trait. If the tyrannosaurus zombie still has this trait when it dies, 1d4 normal zombies erupt from its corpse at the start of its next turn. These zombies act on their own initiative count."
		}, {
			name: "Undead Fortitude",
			description: "If damage reduces the tyrannosaurus zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 @ the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The tyrannosaurus zombie makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target."
		}
		]
	},
	"Volothamp “Volo” Geddarm": {
		name: "Volothamp “Volo” Geddarm",
		source: ["Tomb of Annihilation", 235],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "chaotic good",
		ac: [11, "", false],
		hp: 31,
		hd: [7, 8],
		speed: "30 ft",
		scores: [9, 12, 10, 15, 11, 16],
		saves: ["", "", "2", "", "2", ""],
		skills: "Animal Handling +4, Arcana +4, Deception +5, History +4, Insight +2, Investigation +4, Perception +2, Performance +7, Persuasion +7, Sleight of Hand +3, Survival +2",
		passive_perception: "12",
		languages: "Common, Dwarvish, Elvish",
		challenge_rating: "1/4",
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
		spells: [
			"Volo is a 1st-level spellcaster. His spellcasting ability is Intelligence (spell save DC 12, +4 to hit with spell attacks). He has the following wizard spells prepared:",
			"Cantrips (at will): friends, mending, prestidigitation",
			"1st level (2 slots): comprehend languages, detect magic, disguise self"
		]
	},
	"Xandala": {
		name: "Xandala",
		source: ["Tomb of Annihilation", 236],
		size: "Medium",
		type: "humanoid (half-elf)",
		alignment: "neutral evil",
		ac: [13, "Natural Armor", false],
		hp: 71,
		hd: [11, 8],
		speed: "30 ft",
		scores: [10, 11, 14, 18, 16, 18],
		saves: ["", "", "", "7", "6", ""],
		skills: "Arcana +7, Deception +10, History +7, Insight +6, Survival +6",
		passive_perception: "13",
		languages: "Common, Draconic, Dwarvish, Elvish, Halfling",
		challenge_rating: "7",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 4 (1d8) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Quickened Spell (3/Day)",
			description: "When she casts a spell that has a casting time of 1 action, Xandala changes the casting time to 1 bonus action for that casting."
		}
		],
		spells: [
			"Xandala is a 9th-level spellcaster. Her spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). Xandala has the following sorcerer spells prepared:",
			"Cantrips (at will): acid splash, fire bolt, light, mage hand, ray of frost",
			"1st level (4 slots): chromatic orb, feather fall, shield",
			"2nd level (4 slots): invisibility, misty step",
			"3rd level (3 slots): fireball, fly",
			"4th level (3 slots): ice storm, polymorph",
			"5th level (1 slot): dominate person"
		]
	},
	"Yellow Musk Creeper": {
		name: "Yellow Musk Creeper",
		source: ["Tomb of Annihilation", 237],
		size: "Medium",
		type: "plant",
		alignment: "unaligned",
		ac: [6, "", false],
		hp: 60,
		hd: [11, 8],
		speed: "5 ft, climb 5 ft",
		scores: [12, 3, 12, 1, 10, 3],
		saves: ["", "", "", "", "", ""],
		condition_immunities: "blinded, deafened, exhaustion, prone",
		senses: "blindsight 30 ft",
		passive_perception: "10",
		challenge_rating: "2",
		attacks: [{
			name: "Touch",
			ability: 1,
			damage: [3, 8, "psychic"],
			range: "Melee (5 ft)",
			modifiers: ["", "", false],
			description: "If the target is a humanoid that drops to 0 hit points as a result of this damage, it dies and is implanted with a yellow musk creeper bulb. Unless the bulb is destroyed, the corpse animates as a yellow musk zombie after being dead for 24 hours. The bulb is destroyed if the creature is raised from the dead before it can transform into a yellow musk zombie, or if the corpse is targeted by a remove curse spell or similar magic before it animates.",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the creeper remains motionless, it is indistinguishable from an ordinary flowering vine."
		}, {
			name: "Regeneration",
			description: "The creeper regains 10 hit points at the start of its turn. If the creeper takes fire, necrotic, or radiant damage, this trait doesn't function at the start of its next turn. The creeper dies only if it starts its turn with 0 hit points and doesn't regenerate."
		}
		],
		actions: [{
			name: "Yellow Musk (3/Day)",
			description: "The creeper's flowers release a strong musk that targets all humanoids within 30 feet of it. Each target must succeed on a DC 11 Wisdom saving throw or be charmed by the creeper for 1 minute. A creature charmed in this way does nothing on its turn except move as close as it can to the creeper. A creature charmed by the creeper can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		]
	},
	"Yellow Musk Zombie": {
		name: "Yellow Musk Zombie",
		source: ["Tomb of Annihilation", 237],
		size: "Medium",
		type: "undead",
		alignment: "unaligned",
		ac: [9, "", false],
		hp: 33,
		hd: [6, 8],
		speed: "20 ft",
		scores: [13, 9, 12, 1, 6, 3],
		saves: ["", "", "", "", "", ""],
		condition_immunities: "charmed, exhaustion",
		senses: "blindsight 30 ft",
		passive_perception: "8",
		challenge_rating: "1/4",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Undead Fortitude",
			description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 @ the damage taken, unless the damage is fire or from a critical hit. On a success, the zombie drops to 1 hit point instead."
		}
		],
	},
	"Zindar": {
		name: "Zindar",
		source: ["Tomb of Annihilation", 239],
		size: "Medium",
		type: "humanoid (half-dragon)",
		alignment: "lawful good",
		ac: [13, "Natural Armor", false],
		hp: 110,
		hd: [17, 8],
		speed: "30 ft",
		scores: [14, 10, 14, 16, 15, 18],
		saves: ["", "", "5", "", "5", ""],
		skills: "Arcana +6, History +9, Insight +5, Investigation +9",
		damage_resistances: "fire",
		senses: "blindsight 10 ft",
		passive_perception: "12",
		languages: "Common, Draconic, Dwarvish, Primordial",
		challenge_rating: "8",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 6 (1d8+2) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Dragon Wings",
			description: "As a bonus action on his turn, Zindar can sprout a pair of dragon wings from his back, gaining a flying speed of 30 feet until he dismisses them as a bonus action."
		}
		],
		actions: [{
			name: "Breath Weapon (Recharge 5-6)",
			description: [
				"Zindar uses one of the following options:",
				"Fire Breath: Zindar exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one.",
				"Weakening Breath: Zindar exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 15 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
			]
		}
		],
		spells: [
			"Zindar is a 14th-level spellcaster. His spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). Zindar knows the following sorcerer spells:",
			"Cantrips (at will): fire bolt, friends, light, mage hand, mending, message",
			"1st level (6 slots): magic missile, shield, sleep",
			"2nd level (4 slots): detect thoughts, knock",
			"3rd level (3 slots): clairvoyance, tongues",
			"4th level (3 slots): dominate beast, stoneskin",
			"5th level (3 slots): hold monster, telekinesis",
			"6th level (1 slot): true seeing",
			"7th level (1 slot): fire storm"
		]
	},
	"Zorbo": {
		name: "Zorbo",
		source: ["Tomb of Annihilation", 241],
		size: "Small",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [10, "Natural Armor", false],
		hp: 27,
		hd: [6, 6],
		speed: "30 ft, climb 30 ft",
		scores: [13, 11, 13, 3, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +3",
		passive_perception: "11",
		challenge_rating: "1/2",
		attacks: [{
			name: "Destructive Claws",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature wearing armor, carrying a shield, or in possession of a magic item that improves its AC, it must make a DC 11 Dexterity saving throw. On a failed save, one such item worn or carried by the creature (the target's choice) magically deteriorates, taking a permanent and cumulative _1 penalty to the AC it offers, and the zorbo gains a +1 bonus to AC until the start of its next turn. Armor reduced to an AC of 10 or a shield or magic item that drops to a 0 AC increase is destroyed.",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The zorbo has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Natural Armor",
			description: "The zorbo magically absorbs the natural strength of its surroundings, adjusting its Armor Class based on the material it is standing or climbing on: AC 15 for wood or bone, AC 17 for earth or stone, or AC 19 for metal. If the zorbo isn't in contact with any of these substances, itsAC is 10."
		}
		],
	}
};