var VGtM = {
	// 141
	"Abjurer": {
		name: "Abjurer",
		source: ["Volo's Guide", 209],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [12, "", false],
		hp: 84,
		hd: [13, 8],
		speed: "30 ft",
		scores: [9, 14, 14, 18, 12, 11],
		saves: ["", "", "", 8, 5, ""],
		skills: "Arcana +8, History +8",
		passive_perception: 11,
		languages: "any four languages",
		challenge_rating: "9",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 3 (1d8-l) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Arcane Ward",
			description: "The abjurer has a magical ward that has 30 hit points. Whenever the abjurer takes damage, the ward takes the damage instead. If the ward is reduced to 0 hit points, the abjurer takes any remaining damage. When the abjurer casts an . abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell.",
		}
		],
		spells: [
			"The abjurer is a 13th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). The abjurer has the following wizard spells prepared:",
			"Cantrips (at will): blade ward, dancing lights, mending, message, ray of frost",
			"1st level (4 slots): alarm*, mage armor, magic missile, shield*",
			"2nd level (3 slots): arcane lock*, invisibility",
			"3rd level (3 slots): counterspell*, dispel magic*, fireball",
			"4th level (3 slots): banishment*, stoneskin*",
			"5th level (2 slots): cone of cold, wall of force",
			"6th level (1 slot): flesh to stone, globe of invulnerability*",
			"7th level (1 slot): symbol* teleport",
			"* Abjuration spell of 1st level or higher",
		],
	},
	"Alhoon": {
		name: "Alhoon",
		source: ["Volo's Guide", 172],
		size: "Medium",
		type: "undead",
		alignment: "any evil alignment",
		ac: [15, "Natural Armor", false],
		hp: 120,
		hd: [16, 8],
		speed: "30 ft",
		scores: [11, 12, 16, 19, 17, 17],
		saves: ["", "", 7, 8, 7, 7],
		skills: "Arcana +8, Deception +7, History +8, Insight +7, Perception +7, Stealth +5",
		damage_resistances: "cold, lightning, necrotic",
		damage_immunities: "poison; bludgeoning, piercing, and slashing from nonmagical attacks",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "truesight 120 ft",
		passive_perception: 17,
		languages: "Deep Speech, Undercommon, telepathy 120 ft",
		challenge_rating: "10",
		attacks: [{
			name: "Chilling Grasp",
			ability: 4,
			damage: [3, 6, "cold"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The alhoon has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The alhoon’s innate spellcasting ability is Intelligence (spell save DC 16). It can innately cast the following spells, requiring no components:",
				"At will: detect thoughts, levitate",
				"1/day each: dominate monster, plane shift (self only)"
			]
		}, {
			name: "Turn Resistance",
			description: "The alhoon has advantage on saving throws against any effect that turns undead."
		}
		],
		actions: [{
			name: "Mind Blast (Recharge 5-6)",
			description: "The alhoon magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 16 Intelligence saving throw or take 22 (4d8+4) psychic damage and be stunned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		spells: [
			"The alhoon is a 12th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). The alhoon has the following wizard spells prepared:",
			"Cantrips (at will): chill touch, dancing lights, mage hand, prestidigitation, shocking grasp",
			"1st level (4 slots): detect magic, disguise self. magic missile, shield",
			"2nd level (3 slots): invisibility, mirror image, scorching ray",
			"3rd level (3 slots): counterspe/1,fly, lightning bolt",
			"4th level (3 slots): confusion, Evard's black tentacles, phantasmal, killer",
			"5th level (2 slots): modify memory, wall of force",
			"6th level (1 slot): disintegrate, globe of invulnerability",
		]
	},
	"Annis Hag": {
		name: "Annis Hag",
		source: ["Volo's Guide", 159],
		size: "Large",
		type: "fey",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "40 ft",
		scores: [21, 12, 14, 13, 14, 15],
		saves: ["", "", "5", "", "", ""],
		skills: "Deception +5, Perception +5",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks",
		senses: "darkvision 60 ft",
		passive_perception: 15,
		languages: "Common, Giant, Sylvan",
		challenge_rating: "6",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [3, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Crushing Hug",
			ability: 1,
			damage: [9, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target is grappled (escape DC 15) if it is a Large or smaller creature. Until the grapple ends, the target takes 36 (9d6+5) bludgeoning damage at the start of each of the hag’s turns. The hag can’t make attacks while grappling a creature in this way.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The hag’s innate spellcasting ability is Charisma (spell save DC 13). She can innately cast the following spells:",
				"3/day each: disguise self (including the form of a Medium humanoid), fog cloud"
			]
		}, {
			name: "Hag Coven",
			description: [
				"When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.", "A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos."]
		}, {
			name: "Shared Spellcasting (Coven Only)",
			description: [
				"While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:",
				"1st level (4 slots): identify, ray of sickness",
				"2nd level (3 slots): hold person, locate object",
				"3rd level (3 slots): bestow curse, counterspell, lightning bolt",
				"4th level (3 slots): phantasmal killer, polymorph",
				"5th level (2 slots): contact other plane, scrying",
				"6th level (1 slot): eyebite",
				"For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier."
			]
		}, {
			name: "Hag Eye (Coven Only)",
			description: [
				"A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.",
				"A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The annis makes three attacks: one with her bite and two with her claws."
		}
		],
	},
	"Annis Hag (Death Coven)": {
		name: "Annis Hag (Death Coven)",
		source: ["Volo's Guide", 159],
		size: "Large",
		type: "fey",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "40 ft",
		scores: [21, 12, 14, 13, 14, 15],
		saves: ["", "", "5", "", "", ""],
		skills: "Deception +5, Perception +5",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks",
		senses: "darkvision 60 ft",
		passive_perception: 15,
		languages: "Common, Giant, Sylvan",
		challenge_rating: "6",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [3, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Crushing Hug",
			ability: 1,
			damage: [9, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target is grappled (escape DC 15) if it is a Large or smaller creature. Until the grapple ends, the target takes 36 (9d6+5) bludgeoning damage at the start of each of the hag’s turns. The hag can’t make attacks while grappling a creature in this way.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The hag’s innate spellcasting ability is Charisma (spell save DC 13). She can innately cast the following spells:",
				"3/day each: disguise self (including the form of a Medium humanoid), fog cloud"
			]
		}, {
			name: "Hag Coven",
			description: [
				"When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.",
				"A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos."]
		}, {
			name: "Hag Eye (Coven Only)",
			description: [
				"A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.", "A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."]
		}
		],
		spells: [
			"For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.",
			"1st level (4 slots): false life, inflict wounds",
			"2nd level (3 slots): gentle repose, ray of enfeeblement",
			"3rd level (3 slots): animate dead, revivify, speak with dead",
			"4th level (3 slots): blight, death ward",
			"5th level (2 slots): contagion, raise dead",
			"6th level (1 slot): circle of death"
		],
		actions: [{
			name: "Multiattack",
			description: "The annis makes three attacks: one with her bite and two with her claws."
		}
		],
	},
	"Annis Hag (Nature Coven)": {
		name: "Annis Hag (Nature Coven)",
		source: ["Volo's Guide", 159],
		size: "Large",
		type: "fey",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "40 ft",
		scores: [21, 12, 14, 13, 14, 15],
		saves: ["", "", "5", "", "", ""],
		skills: "Deception +5, Perception +5",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks",
		senses: "darkvision 60 ft",
		passive_perception: 15,
		languages: "Common, Giant, Sylvan",
		challenge_rating: "6",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [3, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Crushing Hug",
			ability: 1,
			damage: [9, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target is grappled (escape DC 15) if it is a Large or smaller creature. Until the grapple ends, the target takes 36 (9d6+5) bludgeoning damage at the start of each of the hag’s turns. The hag can’t make attacks while grappling a creature in this way.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The hag’s innate spellcasting ability is Charisma (spell save DC 13). She can innately cast the following spells:",
				"3/day each: disguise self (including the form of a Medium humanoid), fog cloud"
			]
		}, {
			name: "Hag Coven",
			description: [
				"When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.", "A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos."]
		}, {
			name: "Hag Eye (Coven Only)",
			description: [
				"A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.",
				"A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."
			]
		}
		],
		spells: [
			"For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.",
			"1st level (4 slots): entangle, speak with animals",
			"2nd level (3 slots): flaming sphere, moonbeam, spike growth",
			"3rd level (3 slots): call lightning, plant growth",
			"4th level (3 slots): dominate beast, grasping vine",
			"5th level (2 slots): insect plague, tree stride",
			"6th level (1 slot): wall of thorns"
		],
		actions: [{
			name: "Multiattack",
			description: "The annis makes three attacks: one with her bite and two with her claws."
		}
		],
	},
	"Annis Hag (Prophecy Coven)": {
		name: "Annis Hag (Prophecy Coven)",
		source: ["Volo's Guide", 159],
		size: "Large",
		type: "fey",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "40 ft",
		scores: [21, 12, 14, 13, 14, 15],
		saves: ["", "", "5", "", "", ""],
		skills: "Deception +5, Perception +5",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks",
		senses: "darkvision 60 ft",
		passive_perception: 15,
		languages: "Common, Giant, Sylvan",
		challenge_rating: "6",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [3, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Crushing Hug",
			ability: 1,
			damage: [9, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target is grappled (escape DC 15) if it is a Large or smaller creature. Until the grapple ends, the target takes 36 (9d6+5) bludgeoning damage at the start of each of the hag’s turns. The hag can’t make attacks while grappling a creature in this way.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The hag’s innate spellcasting ability is Charisma (spell save DC 13). She can innately cast the following spells:",
				"3/day each: disguise self (including the form of a Medium humanoid), fog cloud"
			]
		}, {
			name: "Hag Coven",
			description: [
				"When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.",
				"A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos."
			]
		}, {
			name: "Hag Eye (Coven Only)",
			description: [
				"A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.",
				"A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."
			]
		}
		],
		spells: [
			"For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.",
			"1st level (4 slots): bane, bless",
			"2nd level (3 slots): augury, detect thoughts",
			"3rd level (3 slots): calirvoyance, dispel magic, nondetection",
			"4th level (3 slots): arcane eye, locate creature",
			"5th level (2 slots): geas, legend lore",
			"6th level (1 slot): true seeing"
		],
		actions: [{
			name: "Multiattack",
			description: "The annis makes three attacks: one with her bite and two with her claws."
		}
		],
	},
	"Apprentice Wizard": {
		name: "Apprentice Wizard",
		source: ["Volo's Guide", 209],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [10, "", false],
		hp: 9,
		hd: [2, 8],
		speed: "30 ft",
		scores: [10, 10, 10, 14, 10, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, History +4",
		senses: "",
		passive_perception: 10,
		languages: "any one language (usually Common)",
		challenge_rating: "1/4",
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
		}
		],
		spells: [
			"The apprentice is a 1st-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 12, +4 to hit with spell attacks). It has the following wizard spells prepared:",
			"Cantrips (at will): fire bolt, mending, prestidigitation; 1st level (2 slots): burning hands, disguise self, shield"
		]
	},
	"Archdruid": {
		name: "Archdruid",
		source: ["Volo's Guide", 210],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [16, "Hide Armor", true],
		hp: 132,
		hd: [24, 8],
		speed: "30 ft",
		scores: [10, 14, 12, 12, 20, 11],
		saves: ["", "", "", 5, 9, ""],
		skills: "Medicine +9, Nature +5, Perception +9",
		senses: "",
		passive_perception: 19,
		languages: "Druidic plus any two languages",
		challenge_rating: "12",
		spells: [
			"The archdruid is an 18th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). It has the following druid spells prepared:",
			"Cantrips (at will): druidcraft, mending, poison spray, produce flame",
			"1st level (4 slots): cure wounds, entangle, faerie fire, speak with animals",
			"2nd level (3 slots): animal messenger, beast sense, hold person",
			"3rd level (3 slots): conjure animals, meld into stone, water breathing",
			"4th level (3 slots): dominate beast, locate creature, stoneskin, wall of fire",
			"5th level (3 slots): commune with nature, mass cure wounds, tree stride",
			"6th level (1 slot): heal, heroes’ feast, sunbeam",
			"7th level (1 slot): fire storm",
			"8th level (1 slot): animal shapes",
			"9th level (1 slot): foresight",
		],
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Change Shape (2/Day)",
			description: ["The archdruid magically polymorphs into a beast or elemental with a challenge rating of 6 or less, and can remain in this form for up to 9 hours. The archdruid can choose whether its equipment falls to the ground, melds with its new form, or is worn by the new form. The archdruid reverts to its true form if it dies or falls unconscious. The archdruid can revert to its true form using a bonus action on its turn.", "While in a new form, the archdruid retains its game statistics and ability to speak, but its AC, movement modes, Strength, and Dexterity are replaced by those of the new form, and it gains any special senses, proficiencies, traits, actions, and reactions (except class features, legendary actions, and lair actions) that the new form has but that it lacks. It can cast its spells with verbal or somatic components in its new form.", "The new form’s attacks count as magical for the purpose of overcoming resistances and immunity to nonmagical attacks."]
		}
		],
	},
	"Archer": {
		name: "Archer",
		source: ["Volo's Guide", 210],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [16, "Studded Leather", false],
		hp: 75,
		hd: [10, 8],
		speed: "30 ft",
		scores: [11, 18, 16, 11, 13, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +6, Perception +5",
		senses: "",
		passive_perception: 15,
		languages: "any one language (usually Common)",
		challenge_rating: "3",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
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
			name: "Archer's Eye",
			description: "As a bonus action, the archer can add 1d10 to its next attack or damage roll with a longbow or shortbow."
		}
		],
		actions: [{
			name: "Multiattack ",
			description: "The archer makes two attacks with its longbow."
		}
		],
	},
	"Aurochs": {
		name: "Aurochs",
		source: ["Volo's Guide", 207],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [11, "Natural Armor", false],
		hp: 38,
		hd: [4, 10],
		speed: "50 ft",
		scores: [20, 10, 19, 2, 12, 5],
		saves: ["", "", "", "", "", ""],
		senses: "",
		passive_perception: 11,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the aurochs moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
		}
		],
	},
	"Babau": {
		name: "Babau",
		source: ["Volo's Guide", 136],
		size: "Medium",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [16, "Natural Armor", false],
		hp: 82,
		hd: [11, 8],
		speed: "40 ft",
		scores: [19, 16, 16, 11, 12, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5, Stealth +5",
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: 15,
		languages: "Abyssal",
		challenge_rating: "4",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d8+4) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		spells: [
			"The babau's innate spellcasting ability is Wisdom (spell save DC 11). The babau can innately cast the following spells, requiring no material components:",
			"At will: darkness, dispel magic, fear, heat metal, levitate"
		],
		actions: [{
			name: "Multiattack",
			description: "The babau makes two melee attacks. It can also use Weakening Gaze before or after making these attacks."
		}, {
			name: "Weakening Gaze",
			description: "The babau targets one creature that it can see within 20 feet of it. The target must make a DC 13 Constitution saving throw. On a failed save, the target deals only half damage with weapon attacks that use Strength for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}
		],
	},
	"Banderhobb": {
		name: "Banderhobb",
		source: ["Volo's Guide", 122],
		size: "Large",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [15, "Natural Armor", false],
		hp: 84,
		hd: [8, 10],
		speed: "30 ft",
		scores: [20, 12, 20, 11, 14, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +8, Stealth +7",
		condition_immunities: "charmed, frightened",
		senses: "darkvision 120 ft",
		passive_perception: 12,
		languages: "understands Common and the languages of its creator, but can't speak",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [5, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Target is grappled (escape DC 15) if it is a Large or smaller creature. Until this grapple ends, the target is restrained, and the banderhobb can't use its bite attack or tongue attack on another target.",
		}, {
			name: "Tongue",
			ability: 1,
			damage: [3, 6, "necrotic"],
			range: "Melee (5 ft)",
			description: "Target must make a DC 15 Strength savng throw. On a failed save, the target is pulled to a space within 5 feet of the banderhobb, which can use a bonus action to make a bite attack against the target.",
		}
		],
		traits: [{
			name: "Resonant Connection",
			description: "If the banderhobb has even a tiny piece of a creature or an obect in its possession, such as a lock of hair or a splinter of wood, it knows the most direct route to that creature or object if it is within1 mile of the banderhobb."
		}, {
			name: "Shadow Stealth",
			description: "While in dim light or darkness, the banderhobb can take the Hide action as a bonus action."
		}
		],
		actions: [{
			name: "Swallow",
			description: [
				"The banderhobb makes a bite attack against a Medium or smaller creature it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the banderhobb and it takes 10 (3d6) necrotic damage at the start of each of the banderhobb's turns. A creature reduced to 0 hit points in this way stops taking necrotic damage and becomes stable.",
				"The banderhobb can have only one target swallowed at a time. While the banderhobb isn't incapacitated, it can regurgitate the creature at any time (no action required) in a space within 5 feet of it. The creature exits prone. If the banderhobb dies, it likewise regurgitates a swallowed creature."
			],
		}, {
			name: "Shadow Step",
			description: "The banderhobb magically teleports up to 30 feet to an unoccupied space of dim light or darkness that it can see. Before or after teleporting, it can make a bite or tongue attack."
		}
		],
	},
	"Bard": {
		name: "Bard",
		source: ["Volo's Guide", 211],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [15, "Chain Shirt", false],
		hp: 44,
		hd: [8, 8],
		speed: "30 ft",
		scores: [11, 14, 12, 10, 13, 14],
		saves: ["", 4, "", "", 3, ""],
		skills: "Acrobatics +4, Perception +5, Performance +6",
		senses: "",
		passive_perception: 15,
		languages: "any two languages",
		challenge_rating: "2",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
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
			name: "Song of Rest",
			description: "The bard can perform a song while taking a short rest. Any ally who hears the song regains an extra ld6 hit points if it spends any Hit Dice to regain hit points at the end of that rest. The bard can confer this benefit on itself as well."
		}, {
			name: "Taunt (2/day)",
			description: "The bard can use a bonus action on its turn to target one creature within 30 feet of it. If the target can hear the bard, the target must succeed on a DC 12 Charisma saving throw or have disadvantage on ability checks, attack rolls, and saving throws until the start of the bard's next turn."
		}
		],
		spells: [
			"The bard is a 4th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It has the following bard spells prepared:",
			"Cantrips (at will): friends, mage hand, vicious mockery",
			"1st level (4 slots): charm person, healing word, heroism, sleep, Thunderwave",
			"2nd level (3 slots): invisibility, shatter"
		],
	},
	"Barghest": {
		name: "Barghest",
		source: ["Volo's Guide", 123],
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
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "acid, poison",
		condition_immunities: "poisoned",
		senses: "blindsight 60 ft, darkvision 60 ft",
		passive_perception: 15,
		languages: "Abyssal, Common, Goblin, Infernal, telepathy 60 ft",
		challenge_rating: "4",
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
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The barghest can use its action to polymorph into a Small goblin or back into its true form. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. The barghest reverts to its true form if it dies."
		}, {
			name: "Fire Banishment",
			description: "When the barghest starts its turn engulfed in flames that are at least 10 feet high or wide, it must succeed on a DC 15 Charisma saving throw or be instantly banished to Gehenna. Instantaneous bursts of flame (such as a red dragon's breath or a fireball spell) don't have this effect on the barghest."
		}, {
			name: "Keen Smell",
			description: "The barghest has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Soul Feeding",
			description: ["A barghest can feed on the corpse of a humanoid that it killed that has been dead for less than 10 minutes, devouring both flesh and soul in doing so. This feeding takes at least 1 minute, and it destroys the victim's body. The victim's soul is trapped in the barghest for 24 hours, after which time it is digested. If the barghest dies before the soul is digested, the soul is released.", "While a humanoid's soul is trapped in a barghest, any form of revival that could work has only a 50 percent chance of doing so, freeing the soul from the barghest if it is successful. Once a creature's soul is digested, however, no mortal magic can return that humanoid to life."]
		}
		],
		spells: [
			"The barghest's innate spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components::",
			"At will: levitate, minor illusion, pass without trace",
			"1/day each: charm person, dimension door, suggestion"
		]
	},
	"Bheur Hag": {
		name: "Bheur Hag",
		source: ["Volo's Guide", 160],
		size: "Medium",
		type: "fey",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 91,
		hd: [14, 8],
		speed: "30 ft",
		scores: [13, 16, 14, 12, 13, 16],
		saves: ["", "", "", "", 4, ""],
		skills: "Nature +4, Perception +4, Stealth +6, Survival +4",
		damage_immunities: "cold",
		senses: "darkvision 60 ft",
		passive_perception: 14,
		languages: "Auran, Common, Giant",
		challenge_rating: "7",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) cold damage.",
		}
		],
		traits: [{
			name: "Graystaff Magic",
			description: "The hag carries a graystaff, a length of gray wood that is a focus for her inner power. She can ride the staff as if it were a broom of flying. While holding the staff, she can cast additional spells with her Innate Spellcasting trait (these spells are marked with an asterisk). If the staff is lost or destroyed, the hag must craft another, which takes a year and a day. Only a bheur hag can use a graystaff."
		}, {
			name: "Ice Walk",
			description: "The hag can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn’t cost her extra moment."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The hag’s innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). She can innately cast the following spells, requiring no material components:",
				"At will: hold person,* ray of frost",
				"3/day each: cone of cold,* ice storm*, wall of ice*",
				"1/day each: control weather"
			]
		}, {
			name: "Hag Coven",
			description: [
				"When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.", "A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos."]
		}, {
			name: "Shared Spellcasting (Coven Only)",
			description: [
				"For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.",
				"While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves: ",
				"1st level (4 slots): identify, ray of sickness ",
				"2nd level (3 slots): hold person, locate object ",
				"3rd level (3 slots): bestow curse, counterspell, lightning bolt ",
				"4th level (3 slots): phantasmal killer, polymorph ",
				"5th level (2 slots): contact other plane, scrying ",
				"6th level (1 slot): eyebite",
			]
		}, {
			name: "Hag Eye (Coven Only)",
			description: [
				"A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.",
				"A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."
			]
		}
		],
		actions: [{
			name: "Maddening Feast",
			description: "The hag feasts on the corpse of one enemy within 5 feet of her that died within the past minute. Each creature of the hag’s choice that is within 60 feet of her and able to see her must succeed on a DC 15 Wisdom saving throw or be frightened of her for 1 minute. While frightened in this way, a creature is incapacitated, can't understand what others say, can't read, and speaks only in gibberish; the DM controls the creature’s movement, which is erratic. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature’s saving throw is successful or the effect ends for it, the creature is immune to the hag’s Maddening Feast for the next 24 hours."
		}
		],
	},
	"Bheur Hag (Death)": {
		name: "Bheur Hag (Death)",
		source: ["Volo's Guide", 160],
		size: "Medium",
		type: "fey",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 91,
		hd: [14, 8],
		speed: "30 ft",
		scores: [13, 16, 14, 12, 13, 16],
		saves: ["", "", "", "", 4, ""],
		skills: "Nature +4, Perception +4, Stealth +6, Survival +4",
		damage_immunities: "cold",
		senses: "darkvision 60 ft",
		passive_perception: 14,
		languages: "Auran, Common, Giant",
		challenge_rating: "7",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) cold damage.",
		}
		],
		traits: [{
			name: "Graystaff Magic",
			description: "The hag carries a graystaff, a length of gray wood that is a focus for her inner power. She can ride the staff as if it were a broom of flying. While holding the staff, she can cast additional spells with her Innate Spellcasting trait (these spells are marked with an asterisk). If the staff is lost or destroyed, the hag must craft another, which takes a year and a day. Only a bheur hag can use a graystaff."
		}, {
			name: "Ice Walk",
			description: "The hag can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn’t cost her extra moment."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The hag’s innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). She can innately cast the following spells, requiring no material components:",
				"At will: hold person,* ray of frost",
				"3/day each: cone of cold,* ice storm*, wall of ice*",
				"1/day each: control weather"
			]
		}, {
			name: "Hag Coven",
			description: [
				"When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.",
				"A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos."
			]
		}, {
			name: "Hag Eye (Coven Only)",
			description: [
				"A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.",
				"A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."]
		}
		],
		spells: [
			"For casting these spells, the hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.",
			"1st level (4 slots): false life, inflict wounds",
			"2nd level (3 slots): gentle repose, ray of enfeeblement",
			"3rd level (3 slots): animate dead, revivify, speak with dead",
			"4th level (3 slots): blight, death ward",
			"5th level (2 slots): contagion, raise dead",
			"6th level (1 slot): circle of death"
		],
		actions: [{
			name: "Maddening Feast",
			description: "The hag feasts on the corpse of one enemy within 5 feet of her that died within the past minute. Each creature of the hag’s choice that is within 60 feet of her and able to see her must succeed on a DC 15 Wisdom saving throw or be frightened of her for 1 minute. While frightened in this way, a creature is incapacitated, can't understand what others say, can't read, and speaks only in gibberish; the DM controls the creature’s movement, which is erratic. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature’s saving throw is successful or the effect ends for it, the creature is immune to the hag’s Maddening Feast for the next 24 hours."
		}
		],
	},
	"Bheur Hag (Prophecy)": {
		name: "Bheur Hag (Prophecy)",
		source: ["Volo's Guide", 160],
		size: "Medium",
		type: "fey",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 91,
		hd: [14, 8],
		speed: "30 ft",
		scores: [13, 16, 14, 12, 13, 16],
		saves: ["", "", "", "", 4, ""],
		skills: "Nature +4, Perception +4, Stealth +6, Survival +4",
		damage_immunities: "cold",
		senses: "darkvision 60 ft",
		passive_perception: 14,
		languages: "Auran, Common, Giant",
		challenge_rating: "7",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) cold damage.",
		}
		],
		traits: [{
			name: "Graystaff Magic",
			description: "The hag carries a graystaff, a length of gray wood that is a focus for her inner power. She can ride the staff as if it were a broom of flying. While holding the staff, she can cast additional spells with her Innate Spellcasting trait (these spells are marked with an asterisk). If the staff is lost or destroyed, the hag must craft another, which takes a year and a day. Only a bheur hag can use a graystaff."
		}, {
			name: "Ice Walk",
			description: "The hag can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn’t cost her extra moment."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The hag’s innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). She can innately cast the following spells, requiring no material components:",
				"At will: hold person,* ray of frost", "", "3/day each: cone of cold,* ice storm*, wall of ice*",
				"1/day each: control weather"
			]
		}, {
			name: "Hag Coven",
			description: [
				"When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.",
				"A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos."
			]
		}, {
			name: "Hag Eye (Coven Only)",
			description: [
				"A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.",
				"A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."]
		}
		],
		spells: [
			"For casting these spells, the hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.",
			"1st level (4 slots): bane, bless",
			"2nd level (3 slots): augury, detect thoughts",
			"3rd level (3 slots): calirvoyance, dispel magic, nondetection",
			"4th level (3 slots): arcane eye, locate creature",
			"5th level (2 slots): geas, legend lore",
			"6th level (1 slot): true seeing"
		],
		actions: [{
			name: "Maddening Feast",
			description: "The hag feasts on the corpse of one enemy within 5 feet of her that died within the past minute. Each creature of the hag’s choice that is within 60 feet of her and able to see her must succeed on a DC 15 Wisdom saving throw or be frightened of her for 1 minute. While frightened in this way, a creature is incapacitated, can't understand what others say, can't read, and speaks only in gibberish; the DM controls the creature’s movement, which is erratic. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature’s saving throw is successful or the effect ends for it, the creature is immune to the hag’s Maddening Feast for the next 24 hours."
		}
		],
	},
	"Bheur Hag (Nature)": {
		name: "Bheur Hag (Nature)",
		source: ["Volo's Guide", 160],
		size: "Medium",
		type: "fey",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 91,
		hd: [14, 8],
		speed: "30 ft",
		scores: [13, 16, 14, 12, 13, 16],
		saves: ["", "", "", "", 4, ""],
		skills: "Nature +4, Perception +4, Stealth +6, Survival +4",
		damage_immunities: "cold",
		senses: "darkvision 60 ft",
		passive_perception: 14,
		languages: "Auran, Common, Giant",
		challenge_rating: "7",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) cold damage.",
		}
		],
		traits: [{
			name: "Graystaff Magic",
			description: "The hag carries a graystaff, a length of gray wood that is a focus for her inner power. She can ride the staff as if it were a broom of flying. While holding the staff, she can cast additional spells with her Innate Spellcasting trait (these spells are marked with an asterisk). If the staff is lost or destroyed, the hag must craft another, which takes a year and a day. Only a bheur hag can use a graystaff."
		}, {
			name: "Ice Walk",
			description: "The hag can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn’t cost her extra moment."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The hag’s innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). She can innately cast the following spells, requiring no material components:",
				"At will: hold person,* ray of frost",
				"3/day each: cone of cold,* ice storm*, wall of ice*",
				"1/day each: control weather"
			]
		}, {
			name: "Hag Coven",
			description: [
				"When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.",
				"A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos."
			]
		}, {
			name: "Hag Eye (Coven Only)",
			description: [
				"A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.",
				"A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."]
		}
		],
		spells: [
			"For casting these spells, the hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.",
			"1st level (4 slots): entangle, speak with animals",
			"2nd level (3 slots): flaming sphere, moonbeam, spike growth",
			"3rd level (3 slots): call lightning, plant growth",
			"4th level (3 slots): dominate beast, grasping vine",
			"5th level (2 slots): insect plague, tree stride",
			"6th level (1 slot): wall of thorns"
		],
		actions: [{
			name: "Maddening Feast",
			description: "The hag feasts on the corpse of one enemy within 5 feet of her that died within the past minute. Each creature of the hag’s choice that is within 60 feet of her and able to see her must succeed on a DC 15 Wisdom saving throw or be frightened of her for 1 minute. While frightened in this way, a creature is incapacitated, can't understand what others say, can't read, and speaks only in gibberish; the DM controls the creature’s movement, which is erratic. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature’s saving throw is successful or the effect ends for it, the creature is immune to the hag’s Maddening Feast for the next 24 hours."
		}
		],
	},
	"Black Guard Drake": {
		name: "Black Guard Drake",
		source: ["Volo's Guide", 158],
		size: "Medium",
		type: "dragon",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 52,
		hd: [7, 8],
		speed: "30 ft, swim 30 ft",
		scores: [16, 11, 16, 4, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		damage_resistances: "acid",
		senses: "darkvision 60 ft",
		passive_perception: 12,
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
		traits: [{
			name: "Amphibious",
			description: "The guard drake can breathe air and water.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drake attacks twice, once with its bite and once with its tail."
		}
		],
	},
	"Blackguard": {
		name: "Blackguard",
		source: ["Volo's Guide", 211],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any non-good alignment",
		ac: [18, "Plate", false],
		hp: 153,
		hd: [18, 8],
		speed: "30 ft",
		scores: [18, 11, 18, 11, 14, 15],
		saves: ["", "", "", "", 5, 5],
		skills: "Athletics +7, Deception +5, Intimidation +5",
		senses: "",
		passive_perception: 12,
		languages: "any one language (usually Common)",
		challenge_rating: "8",
		attacks: [{
			name: "Glaive",
			ability: 1,
			damage: [1, 10, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Shortbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "",
		}
		],
		spells: [
			"The blackguard is a 10th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 33, +5 to hit with spell attacks). It has the following paladin spells prepared:",
			"1st level (4 slots): command, protection from evil and good, Thunderous smite",
			"2nd level (3 slots): branding smite, find steed",
			"3rd level (2 slots): blinding smite, dispel magic"
		],
		actions: [{
			name: "Multiattack",
			description: "The blackguard makes three attacks with its glaive or its shortbow."
		}, {
			name: "Dreadful Aspect (Recharges after a Short or Long Rest)",
			description: "The blackguard exudes magical menace. Each enemy within 30 feet of the blackguard must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If a frightened target ends its turn more than 30 feet away from the blackguard, the tar get can repeat the saving throw, ending the effect on itself on a success."
		}
		],
	},
	"Blue Guard Drake": {
		name: "Blue Guard Drake",
		source: ["Volo's Guide", 158],
		size: "Medium",
		type: "dragon",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 52,
		hd: [7, 8],
		speed: "30 ft, burrow 20 ft",
		scores: [16, 11, 16, 4, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		damage_resistances: "lightning",
		senses: "darkvision 60 ft",
		passive_perception: 12,
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
		],
	},
	"Bodak": {
		name: "Bodak",
		source: ["Volo's Guide", 127],
		size: "Medium",
		type: "undead",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 58,
		hd: [9, 8],
		speed: "30 ft",
		scores: [15, 16, 15, 7, 12, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +6",
		damage_resistances: "cold, fire, necrotic; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities: "lightning, poison",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "darkvision 120 ft",
		passive_perception: 14,
		languages: "Abyssal, the languages it knew in life",
		challenge_rating: "6",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 9 (2d8) necrotic damage.",
		}
		],
		traits: [{
			name: "Aura of Annihilation",
			description: "The bodak can activate or deactivate this feature as a bonus action. While active, the aura deals 5 necrotic damage to any creature that ends its turn within 30 feet of the bodak. Undead and fiends ignore this effect."
		}, {
			name: "Death Gaze",
			description: [
				"When a creature that can see the bodak’s eyes starts its turn within 30 feet of the bodak, the bodak can force it to make a DC 13 Constitution saving throw if the bodak isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is reduced to 0 hit points, unless it is immune to the frightened condition. Otherwise, a creature takes 16 (3d10) psychic damage on a failed save.",
				"Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so. it has disadvantage on attack rolls against the bodak until the start of its next turn. If the creature looks at the bodak in the meantime, it must immediately make the saving throw."
			]
		}, {
			name: "Sunlight Hypersensitivity",
			description: "The bodak takes 5 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
		}
		],
		actions: [{
			name: "Withering Gaze",
			description: "One creature that the bodak can see within 60 feet of it must make a DC 13 Constitution saving throw, taking 22 (4d10) necrotic damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Boggle": {
		name: "Boggle",
		source: ["Volo's Guide", 128],
		size: "Small",
		type: "fey",
		alignment: "chaotic neutral",
		ac: [14, "", false],
		hp: 18,
		hd: [4, 6],
		speed: "30 ft, climb 30 ft",
		scores: [8, 18, 13, 6, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Sleight of Hand +6, Stealth +6",
		damage_resistances: "fire",
		senses: "darkvision 60 ft",
		passive_perception: 13,
		languages: "Sylvan",
		challenge_rating: "1/8",
		attacks: [{
			name: "Pummel",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Boggle Oil",
			description: [
				"The boggle excretes nonflammable oil from its pores. The boggle chooses whether the oil is slippery or sticky and can change the oil on its skin from one consistency to another as a bonus action.",
				"Slippery Oil: While coated in slippery oil, the boggle gains advantage on Dexterity (Acrobatics) checks made to escape bonds, squeeze through narrow spaces, and end grapples.",
				"Sticky Oil: While coated in sticky oil, the boggle gains advantage on Strength (Athletics) checks made to grapple and any ability check made to maintain a hold on another creature, a surface, or an object. The boggle can also climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
			]
		}, {
			name: "Dimensional Rift",
			description: "As a bonus action, the boggle can create an invisible and immobile rift within an opening or frame it can see within 5 feet of it, provided that the space is no bigger than 10 feet on any side. The dimensional rift bridges the distance between that space and any point within 30 feet of it that the boggle can see or specify by distance and direction (such as “30 feet straight up”). While next to the rift, the boggle can see through it and is considered to be next to the destination as well, and anything the boggle puts through the rift (including a portion of its body) emerges at the destination. Only the boggle can use the rift, and it lasts until the end of the boggle's next turn."
		}, {
			name: "Uncanny Smell",
			description: "The boggle has advantage on Wisdom (Perception) checks that rely on smell."
		}
		],
		actions: [{
			name: "Oil Puddle",
			description: [
				"The boggle creates a puddle of oil that is either slippery or sticky (boggle's choice). The puddle is 1 inch deep and covers the ground in the boggle's space. The puddle is difficult terrain For all creatures except boggles and lasts for 1 hour.",
				"If the oil is slippery, any creature that enters the puddle's area or starts its turn there must succeed on a DC 11 Dexterity saving throw or fall prone.",
				"If the oil is sticky, any creature that enters the puddle's area or starts its turn there must succeed on a DC 11 Strength saving throw or be restrained. On its turn. a creature can use an action to try to extricate itself from the sticky puddle, ending the effect and moving into the nearest safe unoccupied space with a successful DC 11 Strength check."
			]
		}
		],
	},
	"Brontosaurus": {
		name: "Brontosaurus",
		source: ["Volo's Guide", 139],
		size: "Gargantuan",
		type: "beast",
		alignment: "unaligned",
		ac: [15, "Natural Armor", false],
		hp: 121,
		hd: [9, 20],
		speed: "30 ft",
		scores: [21, 9, 17, 2, 10, 7],
		saves: ["", "", 6, "", "", ""],
		senses: "",
		passive_perception: 10,
		languages: "",
		challenge_rating: "5",
		attacks: [{
			name: "Stomp",
			ability: 1,
			damage: [5, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			dc: [14, "Str"],
			description: "Target must succed on a DC 14 Strength saving throw or be knocked prone.",
		}, {
			name: "Tail",
			ability: 1,
			damage: [6, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}
		],
	},
	"Catoblepas": {
		name: "Catoblepas",
		source: ["Volo's Guide", 129],
		size: "Large",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 84,
		hd: [8, 10],
		speed: "30 ft",
		scores: [19, 12, 21, 3, 14, 8],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: 12,
		languages: "",
		challenge_rating: "5",
		attacks: [{
			name: "Tail",
			ability: 1,
			damage: [5, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			dc: [16, "Con"],
			description: "Target must succeed on a DC 16 Constitution saving throw or be stunned until the start of the catoblepas's next turn.",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The catoblepas has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Stench",
			description: "Any creature other than a catoblepas that starts its turn within 10 feet of the catoblepas must succeed on a DC 16 Constitution saving throw or be poisoned until the start of the creature’s next turn. On a successful saving throw, the creature is immune to the stench of any catoblepas for 1 hour."
		}
		],
		actions: [{
			name: "Death Ray (Recharge 5-6)",
			description: "The catoblepas targets a creature that it can see within 30 feet of it. The target must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one. If the saving throw fails by 5 or more, the target instead takes 64 necrotic damage. The target dies if reduced to 0 hit points by this ray.",
		}
		],
	},
	"Cave Fisher": {
		name: "Cave Fisher",
		source: ["Volo's Guide", 130],
		size: "Medium",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [16, "Natural Armor", false],
		hp: 58,
		hd: [9, 8],
		speed: "20 ft, climb 20 ft",
		scores: [16, 13, 14, 3, 10, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Stealth +5",
		senses: "blindsight 60 ft",
		passive_perception: 12,
		languages: "",
		challenge_rating: "3",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Adhesive Filament",
			description: "The cave fisher can use its action to extend a sticky filament up to 60 feet, and the filament adheres to anything that touches it. A creature adhered to the filament is grappled by the cave fisher (escape DC 13), and ability checks made to escape this grapple have disadvantage. The filament can be attacked (AC 15; 5 hit points; immunity to poison and psychic damage), but a weapon that fails to sever it becomes stuck to it, requiring an action and a successful DC 13 Strength check to pull free. Destroying the filament causes no damage to the cave fisher, which can extrude a replacement filament on its next turn"
		}, {
			name: "Flammable Blood",
			description: "If the cave fisher drops to half its hit points or fewer, it gains vulnerability to fire damage."
		}, {
			name: "Spider Climb",
			description: "The cave fisher can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The cave fisher makes two attacks with its claws."
		}, {
			name: "Filament",
			description: "One creature grappled by the cave fisher’s adhesive filament must make a DC 13 Strength saving throw, provided that the target weighs 200 pounds or less. On a failure, the target is pulled into an unoccupied space within 5 feet of the cave fisher, and the cave fisher makes a claw attack against it as a bonus action. Reeling up the target releases anyone else who was attached to the filament. Until the grapple ends on the target, the cave fisher can’t extrude another filament."
		}
		],
	},
	"Champion": {
		name: "Champion",
		source: ["Volo's Guide", 212],
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
		passive_perception: 16,
		languages: "any one language (usually Common)",
		challenge_rating: "9",
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
		}
		],
		traits: [{
			name: "Indomitable (2/Day)",
			description: "The champion rerolls a failed saving throw."
		}, {
			name: "Second Wind (Recharges after a Short or Long Rest)",
			description: "As a bonus action, the champion can regain 20 hit points."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The champion makes three attacks with its greatsword or its light crossbow."
		}
		],
	},
	"Chitine": {
		name: "Chitine",
		source: ["Volo's Guide", 131],
		size: "Small",
		type: "monstrosity",
		alignment: "chaotic evil",
		ac: [14, "Hide Armor", false],
		hp: 18,
		hd: [4, 6],
		speed: "30 ft, climb 30 ft",
		scores: [10, 14, 12, 10, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +4, Stealth +4",
		senses: "darkvision 60 ft",
		passive_perception: 10,
		languages: "Undercommon",
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
			damage: [1, 4, ""],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The chitine has advantage on saving throws against being charmed, and magic can’t put the chitine to sleep."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the chitine has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Web Sense",
			description: "While in contact with a web, the chitine knows the exact location of any other creature in contact with the same web."
		}, {
			name: "Web Walker",
			description: "The chitine ignores movement restrictions caused by webbing."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The chitine makes three attacks with its daggers."
		}
		],
	},
	"Choldrith": {
		name: "Choldrith",
		source: ["Volo's Guide", 132],
		size: "Medium",
		type: "monstrosity",
		alignment: "chaotic evil",
		ac: [15, "Studded Leather Armor", false],
		hp: 15,
		hd: [12, 8],
		speed: "30 ft, climb 30 ft",
		scores: [12, 16, 12, 11, 14, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +5, Religion +2, Stealth +5",
		senses: "darkvision 60 ft",
		passive_perception: 12,
		languages: "Undercommon",
		challenge_rating: "3",
		attacks: [{
			name: "Dagger (Melee)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) poison damage.",
		}, {
			name: "Dagger (Ranged)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "Plus 10 (3d6) poison damage.",
		}, {
			name: "Web (Recharge 5-6)",
			ability: 2,
			damage: [0, 0, ""],
			range: "Ranged (30/60 ft)",
			description: "One Large or smaller creature. On hit he target is restrained by webbing. As an action, the restrained target can make a DC 11 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; 5 hit points; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The choldrith has advantage on saving throws against being charmed, and magic can’t put the choldrith to sleep."
		}, {
			name: "Spider Climb",
			description: "The choldrith can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the choldrith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Web Sense",
			description: "While in contact with a web, the choldrith knows the exact location of any other creature in contact with the same web."
		}, {
			name: "Web Walker",
			description: "The choldrith ignores movement restrictions caused by webbing."
		}
		],
		spells: [
			"The choldrith is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The choldrith has the following cleric spells prepared:",
			"Cantrips (at will): guidance, mending, resistance, thaumaturgy",
			"1st level (4 slots): bane, healing word, sanctuary, shield of faith",
			"2nd level (3 slots): hold person, spiritual weapon (dagger)"
		],
	},
	"Cloud Giant Smiling One": {
		name: "Cloud Giant Smiling One",
		source: ["Volo's Guide", 146],
		size: "Huge",
		type: "giant (cloud giant)",
		alignment: "chaotic neutral",
		ac: [15, "Natural Armor", false],
		hp: 262,
		hd: [21, 12],
		speed: "40 ft",
		scores: [26, 12, 22, 15, 16, 17],
		saves: ["", "", 10, 6, 7, ""],
		skills: "Deception +11, Insight +7, Perception +7, Sleight of Hand +9",
		senses: "",
		passive_perception: 17,
		languages: "Common, Giant",
		challenge_rating: "11",
		attacks: [{
			name: "Morningstar",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Attack deals an extra 14 (4d6) damage if the giant has advantage on the attack roll.",
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			description: "Attack deals an extra 14 (4d6) damage if the giant has advantage on the attack roll.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The giant's innate spellcasting ability is Charisma (spell save DC 15). It can innately cast the following spells, requiring no material components:",
				"At will: detect magic, fog cloud, light",
				"3/day each: featherfall, fly, misty step, telekinesis",
				"1/day each: control weather, gaseous form"
			]
		}, {
			name: "Keen Smell",
			description: "The giant has advantage on Wisdom (Perception) checks that rely on smell."
		}
		],
		spells: [
			"The giant is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). The giant has the following bard spells prepared:",
			"Cantrips (at will): minor illusion, prestidigitation, vicious mockery",
			"1st level (4 slots): cure wounds, disguise self, silent image, Tasha’s hideous laughter",
			"2nd level (3 slots): invisibility, suggestion",
			"3rd level (2 slots): major image, tongues"
		],
		actions: [{
			name: "Multiattack",
			description: "The giant makes two attacks with its morningstar."
		}, {
			name: "Change Shape",
			description: "The giant magically polymorphs into a beast or humanoid it has seen, or back into its true form. Any equipment the giant is wearing or carrying is absorbed by the new form. Its statistics, other than its size, are the same in each form. It reverts to its true form if it dies."
		}
		],
	},
	"Conjurer": {
		name: "Conjurer",
		source: ["Volo's Guide", 212],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [12, "", false],
		hp: 40,
		hd: [9, 8],
		speed: "30 ft",
		scores: [9, 14, 11, 17, 12, 11],
		saves: ["", "", "", 6, 4, ""],
		skills: "Arcana +6, History +6",
		senses: "",
		passive_perception: 11,
		languages: "any four languages",
		challenge_rating: "6",
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
			name: "Benign Transportation (Recharges after the Conjurer Casts a Conjuration Spell of 1st Level or Higher)",
			description: "As a bonus action, the conjurer teleports up to 30 feet to an unoccupied space that it can see. If it instead chooses a space within range that is occupied by a willing Small or Medium creature, they both teleport, swapping places."
		}
		],
		spells: [
			"The conjurer is a 9th-level spellcaster. Its spellcasting ability is intelligence (spell save DC 14, +6 to hit with spell attacks). The conjurer has the following wizard spells prepared:",
			"Cantrips (at will): acid splash, mage hand, poison spray, prestidigitation",
			"1st level (4 slots): mage armor, magic missile, unseen servant*",
			"2nd level (3 slots): cloud of daggers*, misty step*, web*",
			"3rd level (3 slots): fireball, stinking cloud*",
			"4th level (3 slots): Evard’s black tentacles*, stoneskin",
			"5th level (2 slots): cloudkill*, conjure elemental*",
			"*Conjuration spell of 1st level or higher"
		],
	},
	"Cow": {
		name: "Cow",
		source: ["Volo's Guide", 207],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [10, "", false],
		hp: 15,
		hd: [2, 10],
		speed: "30 ft",
		scores: [18, 10, 14, 2, 10, 4],
		saves: ["", "", "", "", "", ""],
		senses: "",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the cow moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage.",
		}
		],
	},
	"Cranium Rat": {
		name: "Cranium Rat",
		source: ["Volo's Guide", 133],
		size: "Tiny",
		type: "beast",
		alignment: "lawful evil",
		ac: [12, "", false],
		hp: 2,
		hd: [1, 4],
		speed: "30 ft",
		scores: [2, 14, 10, 4, 11, 8],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 30 ft",
		passive_perception: 10,
		languages: "telepathy 30 ft",
		challenge_rating: "0",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Illumination",
			description: "As a bonus action, the cranium rat can shed dim light from its brain in a 5-foot radius or extinguish the light."
		}, {
			name: "Telepathic Shroud",
			description: "The cranium rat is immune to any effect that would sense its emotions or read its thoughts, as well as i to all divination spells."
		}
		],
	},
	"Darkling": {
		name: "Darkling",
		source: ["Volo's Guide", 134],
		size: "Small",
		type: "fey",
		alignment: "chaotic neutral",
		ac: [14, "Leather Armor", false],
		hp: 13,
		hd: [3, 6],
		speed: "30 ft",
		scores: [9, 16, 12, 10, 12, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +5, Deception +2, Perception +5, Stealth +7",
		senses: "blindsight 30 ft, darkvision 120 ft",
		passive_perception: 15,
		languages: "Elvish, Sylvan",
		challenge_rating: "1/2",
		attacks: [{
			name: "Dagger (Melee)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "If the darkling has advantage on the attack roll, the attack deals an extra 7 (2d6) piercing damage.",
		}, {
			name: "Dagger (Ranged)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "If the darkling has advantage on the attack roll, the attack deals an extra 7 (2d6) piercing damage.",
		}
		],
		traits: [{
			name: "Death Flash",
			description: "When the darkling dies, nonmagical light flashes out from it in a 10-foot radius as its body and possessions, other than metal or magic objects, burn to ash. Any creature in that area and able to see the bright light must succeed on a DC 10 Constitution saving throw or be blinded until the end of the creature’s next turn."
		}, {
			name: "Light Sensitivity",
			description: "While in bright light, the darkling has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
	},
	"Darkling Elder": {
		name: "Darkling Elder",
		source: ["Volo's Guide", 134],
		size: "Medium",
		type: "fey",
		alignment: "chaotic neutral",
		ac: [15, "Studded Leather Armor", false],
		hp: 27,
		hd: [5, 8],
		speed: "30 ft",
		scores: [13, 17, 12, 10, 14, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +5, Deception +3, Perception +6, Stealth +7",
		senses: "blindsight 30 ft, darkvision 120 ft",
		passive_perception: 16,
		languages: "Elvish, Sylvan",
		challenge_rating: "2",
		attacks: [{
			name: "Shortsword",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "If the darkling elder had advantage on the attack roll, the attack deals as: extra 10 (3d6) piercing damage.",
		}
		],
		traits: [{
			name: "Death Burn",
			description: "When the darkling elder dies, magical light flashes out from it in a 10-foot radius as its body and possessions, other than metal or magic objects, burn to ash. Any creature in that area must make a DC 11 Constitution saving throw. On a failure, the creature takes 7 (2d6) radiant damage and, if the creature can see the light, is blinded until the end of its next turn. If the saving throw is successful, the creature takes half the damage and isn’t blinded.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The darkling elder makes two melee attacks."
		}, {
			name: "Darkness (Recharges after a Short or Long Rest)",
			description: "The darkling elder casts darkness without any components. Wisdom is its spellcasting ability."
		}
		],
	},
	"Death Kiss": {
		name: "Death Kiss",
		source: ["Volo's Guide", 124],
		size: "Large",
		type: "aberration",
		alignment: "neutral evil",
		ac: [16, "Natural Armor", false],
		hp: 161,
		hd: [17, 10],
		speed: "0 ft, fly 30 ft (hover)",
		scores: [18, 14, 18, 10, 12, 10],
		saves: ["", "", 8, "", 5, ""],
		skills: "Perception +5",
		damage_immunities: "lightning",
		condition_immunities: "prone",
		senses: "darkvision 120 ft",
		passive_perception: 15,
		languages: "Deep Speech, Undercommon",
		challenge_rating: "10",
		attacks: [{
			name: "Tentacle",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (20 ft)",
			dc: [14, "Escape"],
			description: "If target is grappled (escape DC 14) if it is a Huge or smaller creature. Until this grapple ends, the target is restrained, and the death kiss can't use the same tentacle on another target. The death kiss has ten tentacles.",
		}
		],
		traits: [{
			name: "Lightning Blood",
			description: "A creature within 5 feet of the death kiss takes 5 (1d10) lightning damage whenever it hits the death kiss with a melee attack that deals piercing or slashing damage."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The death kiss makes three tentacle attacks. Up to three of these attacks can be replaced by Blood Drain, one replacement per tentacle grappling a creature"
		}, {
			name: "Blood Drain",
			description: "One creature grappled by a tentacle of the death kiss must make a DC 16 Constitution saving throw. On a failed save, the target takes 22 (4d10) Lightning damage, and the death kiss regains half as many hit points.",
		}
		],
	},
	"Deep Rothé": {
		name: "Deep Rothé",
		source: ["Volo's Guide", 207],
		size: "Medium",
		type: "beast",
		alignment: "unaligned",
		ac: [10, "", false],
		hp: 13,
		hd: [2, 8],
		speed: "30 ft",
		scores: [18, 10, 14, 2, 10, 4],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the rothé moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage.",
		}, {
			name: "Innate Spellcasting",
			description: "The deep rothé's spellcasting ability is Charisma. It can innately cast dancing lights at will, requiring no components."
		}
		],
	},
	"Deep Scion": {
		name: "Deep Scion",
		source: ["Volo's Guide", 135],
		size: "Medium",
		type: "humanoid (shapechanger)",
		alignment: "neutral evil",
		ac: [11, "", false],
		hp: 67,
		hd: [9, 8],
		speed: "30 ft (20 ft and swim 40 ft in hybrid form)",
		scores: [18, 13, 16, 10, 12, 14],
		saves: ["", "", "", "", 3, 4],
		skills: "Deception +6, Insight +3, Sleight of Hand +3, Stealth +3",
		senses: "darkvision 120 ft",
		passive_perception: 11,
		languages: "Aquan, Common, thieves' cant",
		challenge_rating: "3",
		attacks: [{
			name: "Battleaxe (Humanoid Form Only)",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 9 (1d10+4) slashing damage.",
		}, {
			name: "Bite (Hybrid Form Only)",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw (Hybrid Form Only)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The deep scion can use its action to polymorph into a humanoid-piscine hybrid form, or back into its true form. Its statistics, other than its speed, are the same in each form. Any equipment it is wearing or carrying isn’t transformed. The deep scion reverts to its true form if it dies."
		}, {
			name: "Amphibious (Hybrid Form Only)",
			description: "The deep scion can breathe air and water."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "In humanoid form, the deep scion makes two melee attacks. In hybrid form, the deep scion makes three attacks: one with its bite and two with its claws."
		}, {
			name: "Psychic Screech (Hybrid Form Only; Recharges after a Short or Long Rest)",
			description: "The deep scion emits a terrible scream audible within 300 feet. Creatures within 30 feet of the deep scion must succeed on a DC 13 Wisdom saving throw or be stunned until the end of the deep scion’s next turn. In water, the psychic screech also telepathically transmits the deep scion’s memories of the last 24 hours to its master, regardless of distance, so long as it and its master are in the same body of water."
		}
		],
	},
	"Deinonychus": {
		name: "Deinonychus",
		source: ["Volo's Guide", 139],
		size: "Medium",
		type: "beast",
		alignment: "unaligned",
		ac: [13, "Natural Armor", false],
		hp: 26,
		hd: [4, 8],
		speed: "40 ft",
		scores: [15, 15, 14, 4, 12, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "",
		passive_perception: 13,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Pounce",
			description: "If the deinonychus moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the deinonychus can make one bite attack against it as a bonus action."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The deinonychus makes three attacks: one with its bite and two with its claws."
		}
		],
	},
	"Devourer": {
		name: "Devourer",
		source: ["Volo's Guide", 138],
		size: "Large",
		type: "fiend",
		alignment: "chaotic evil",
		ac: [16, "Natural Armor", false],
		hp: 178,
		hd: [17, 10],
		speed: "30 ft",
		scores: [20, 12, 20, 13, 10, 16],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: 10,
		languages: "Abyssal, telepathy 120 ft",
		challenge_rating: "13",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 21 (6d6) necrotic damage.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The devourer makes two claw attacks and can use either Imprison Soul or Soul Rend."
		}, {
			name: "Imprison Soul",
			description: "The devourer chooses a living humanoid with 0 hit points that it can see within 30 feet of it. That creature is teleported inside the devourer’s ribcage and imprisoned there. A creature imprisoned in this manner has disadvantage on death saving throws. If it dies while imprisoned, the devourer regains 25 hit points, immediately recharges Soul Rend, and gains an additional action on its next turn. Additionally, at the start of its next turn, the devourer regurgitates the slain creature as a bonus action, and the creature becomes an undead. If the victim had 2 or fewer Hit Dice, it becomes a zombie. if it had 3 to 5 Hit Dice, it becomes a ghoul. Otherwise, it becomes a wight. A devourer can imprison only one creature at a time."
		}, {
			name: "Soul Rend (Recharge 6)",
			description: "The devourer creates a vortex of life-draining energy in a 20-foot radius centered on itself. Each humanoid in that area must make a DC 18 Constitution saving throw, taking 44 (8d10) necrotic damage on a failed save, or half as much damage on a successful one. Increase the damage by 10 for each living humanoid with 0 hit points in that area.",
		}
		],
	},
	"Dimetrodon": {
		name: "Dimetrodon",
		source: ["Volo's Guide", 139],
		size: "Medium",
		type: "beast",
		alignment: "unaligned",
		ac: [12, "Natural Armor", false],
		hp: 19,
		hd: [3, 8],
		speed: "30 ft, swim 20 ft",
		scores: [14, 10, 15, 2, 10, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		senses: "",
		passive_perception: 12,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Diviner": {
		name: "Diviner",
		source: ["Volo's Guide", 213],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [12, "", false],
		hp: 67,
		hd: [15, 8],
		speed: "30 ft",
		scores: [9, 14, 1, 18, 12, 11],
		saves: ["", "", "", 7, 4, ""],
		skills: "Arcana +7, History +7",
		senses: "",
		passive_perception: 11,
		languages: "any four languages",
		challenge_rating: "8",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 3 (1d8-1) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Portent (Recharges after the Diviner Casts a Divination Spell of 1st Level or Higher)",
			description: "When the diviner or a creature it can see makes an attack roll, a saving throw, or an ability check, the diviner can roll a d20 and choose to use this roll in place of the attack roll, saving throw, or ability check."
		}
		],
		spells: [
			"The diviner is a 15th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). The diviner has the following wizard spells prepared:",
			"Cantrips (at will): fire bolt, light, mage hand, message, true strike",
			"1st level (4 slots): detect magic*, feather fall, mage armor",
			"2nd level (3 slots): detect thoughts*, locate object*, scorching ray",
			"3rd level (3 slots): clairvoyance*, fly, fireball",
			"4th level (3 slots): arcane eye*, ice storm, stoneskin",
			"5th level (2 slots): Rary’s telepathic bond*, seeming*",
			"6th level (1 slot): mass suggestion, true seeing*",
			"7th level (1 slot): delayed blast fireball, teleport",
			"8th level (1 slot): maze",
			"* Divination spell of 1st level or higher"
		],
	},
	"Dolphin": {
		name: "Dolphin",
		source: ["Volo's Guide", 208],
		size: "Medium",
		type: "beast",
		alignment: "unaligned",
		ac: [12, "Natural Armor", false],
		hp: 11,
		hd: [2, 8],
		speed: "0 ft, swim 60 ft",
		scores: [14, 13, 13, 6, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "blindsight 60 ft",
		passive_perception: 13,
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the dolphin moves at least 30 feet straight toward a target and then hits it with a slam attack on the same turn, the target takes an extra 3 (1d6) bludgeoning damage.",
		}, {
			name: "Hold Breath",
			description: "The dolphin can hold its breath for 20 minutes."
		}
		],
	},
	"Draegloth": {
		name: "Draegloth",
		source: ["Volo's Guide", 141],
		size: "Large",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 123,
		hd: [13, 10],
		speed: "30 ft",
		scores: [20, 15, 18, 13, 11, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +5",
		damage_resistances: "cold, fire, Lightning",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: 13,
		languages: "Abyssal, Elvish, Undercommon",
		challenge_rating: "7",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 10, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The draegloth has advantage on saving throws against being charmed, and magic can’t put it to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The draegloth’s innate spellcasting ability is Charisma (spell save DC 11). The draegloth can innately cast the following spells, requiring no material components:",
				"At will: darkness",
				"1/day each: confusion, dancing lights, faerie fire"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The draegloth makes three attacks: one with its bite and two with its claws."
		}
		],
		spells: [
			"darkness, confusion, dancing lights, faerie fire"
		]
	},
	"Elder Brain": {
		name: "Elder Brain",
		source: ["Volo's Guide", 174],
		size: "Large",
		type: "aberration",
		alignment: "lawful evil",
		ac: [10, "", false],
		hp: 210,
		hd: [20, 10],
		speed: "5ft, swim 10 ft",
		scores: [15, 10, 20, 21, 19, 24],
		saves: ["", "", "", 10, 9, 12],
		skills: "Arcana +10, Deception +12, Insight +14, Intimidation +12, Persuasion +12",
		senses: "blindsight 120 ft",
		passive_perception: 14,
		languages: "understands Common, Deep Speech, and Undercommon but can't speak, telepathy 5 miles",
		challenge_rating: "14",
		attacks: [{
			name: "Tentacle",
			ability: 1,
			damage: [4, 8, "bludgeoning"],
			range: "Melee (30 ft)",
			dc: [15, ""],
			description: "If the target is a Huge or smaller creature, it is grappled (escape DC 15) and takes 9 (1d8+5) psychic damage at the start of each of its turns until the grapple ends. The elder brain can have up to four targets grappled at a time.",
		}
		],
		traits: [{
			name: "Creature Sense",
			description: "The elder brain is aware of the presence of creatures within 5 miles of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature. as well as each one's intelligence score, but can’t sense anything else about it. A creature protected by a mind blank spell. a nondetection spell, or similar magic can’t be perceived in this manner. "
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The elder brain’s innate spellcasting ability is Intelligence (spell save DC 18). It can innately cast the following spells, requiring no components:",
				"At will: detect thoughts, levitate",
				"1/day each: dominate monster, plane shift (self only)"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the elder brain fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "The elder brain has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Telepathic Hub",
			description: "The elder brain can use its telepathy to initiate and maintain telepathic conversations with up to ten creatures at a time. The elder brain can let those creatures telepathically hear each other while connected in this way."
		}
		],
		actions: [{
			name: "Mind Blast (Recharge 5-6)",
			description: "The elder brain magically emits psychic energy. Creatures of the elder brain's choice within 60 feet of it must succeed on a DC 18 Intelligence saving throw or take 32 (5d10+5) psychic damage and be stunned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Psychic Link",
			description: "The elder brain targets one incapacitated creature it can perceive with its Creature Sense trait and establishes a psychic link with that creature. Until the psychic link ends, the elder brain can perceive everything the target senses. The target becomes aware that something is linked to its mind once it is no longer incapacitated, and the elder brain can terminate the link at any time (no action required). The target can use an action on its turn to attempt to break the psychic link, doing so with a successful DC 18 Charisma saving throw. On a successful save, the target takes 10 (3d6) psychic damage. The psychic link also ends if the target and the elder brain are more than 5 miles apart, with no consequences to the target. The elder brain can form psychic links with up to ten creatures at a time."
		}, {
			name: "Sense Thoughts",
			description: "The elder brain targets a creature with which it has a psychic link. The elder brain gains insight into the target’s reasoning, its emotional state, and thoughts that loom large in its mind (including things the target worries about, loves, or hates). The elder brain can also make a Charisma (Deception) check with advantage to deceive the target's mind into thinking it believes one idea or feels a particular emotion. The target contests this attempt with a Wisdom (Insight) check. If the elder brain succeeds, the mind believes the deception for 1 hour or until evidence of the lie is presented to the target."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The elder brain can take 3 legendary actions, choosing from the options below. It can take only one legendary action at a time and only at the end of another creature’s turn. The elder brain regains spent legendary actions at the start of its turn."
		}, {
			name: "Tentacle",
			description: "The elder brain makes a tentacle attack."
		}, {
			name: "Break Concentration",
			description: "The elder brain targets a creature within 120 feet of it with which it has a psychic link. The elder brain breaks the creature’s concentration on a spell it has cast. The creature also takes 1d4 psychic damage per level of the spell."
		}, {
			name: "Psychic Pulse",
			description: "The elder brain targets a creature within 120 feet of it with which it has a psychic link. Enemies of the elder brain within 10 feet of that creature take 10 (3d6) psychic damage."
		}, {
			name: "Sever Psychic Link",
			description: "The elder brain targets a creature within 120 feet of it with which it has a psychic link. The elder brain ends the link, causing the creature to have disadvantage on all ability checks, attack rolls, and saving throws until the end of the creature’s next turn."
		}
		],
		spells: "detect thoughts, levitate, dominate monster, plane shift"
	},
	"Enchanter": {
		name: "Enchanter",
		source: ["Volo's Guide", 213],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [12, "", false],
		hp: 40,
		hd: [9, 8],
		speed: "30 ft",
		scores: [9, 14, 11, 17, 12, 11],
		saves: ["", "", "", 6, 4, ""],
		skills: "Arcana +6, History +6",
		senses: "",
		passive_perception: 11,
		languages: "any four languages",
		challenge_rating: "5",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 3 (1d8-1) bludgeoning damage.",
		}
		],
		reactions: [{
			name: "Instinctive Charm (Recharges after the Enchanter Casts an Enchantment Spell of 1st level or Higher)",
			description: [
				"The enchanter tries to magically divert an attack made against it, provided that the attacker is within 30 feet of it and visible to it. The enchanter must decide to do so before the attack hits or misses.",
				"The attacker must make a DC 14 Wisdom saving throw. On a failed save, the attacker targets the creature closest to it, other than the enchanter or itself. If multiple creatures are closest, the attacker chooses which one to target."
			]
		}
		],
		spells: [
			"The enchanter is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The enchanter has the following wizard spells prepared:",
			"Cantrips (at will): friends, mage hand, mending, message",
			"1st level (4 slots): charm person*, mage armor, magic missile",
			"2nd level (3 slots): hold person*, invisibility, suggestion*",
			"3rd level (3 slots): fireball, haste, tongues",
			"4th level (3 slots): dominate beast*, stoneskin",
			"5th level (2 slots): hold monster*",
			"*Enchantment spell of 1st level or higher"
		],
	},
	"Evoker": {
		name: "Evoker",
		source: ["Volo's Guide", 214],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [12, "", false],
		hp: 66,
		hd: [12, 8],
		speed: "30 ft",
		scores: [9, 14, 12, 17, 12, 11],
		saves: ["", "", "", 7, 5, ""],
		skills: "Arcana +7, History +7",
		senses: "",
		passive_perception: 11,
		languages: "any four languages",
		challenge_rating: "9",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 3 (1d8-1) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Sculpt Spells",
			description: "When the evoker casts an evocation spell that forces other creatures it can see to make a saving throw, it can choose a number of them equal to 1+the spell’s level. These creatures automatically succeed on their saving throws against the spell. If a successful save means a chosen creature would take half damage from the spell, it instead takes no damage from it."
		}
		],
		spells: ["The evoker is a 12th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). The evoker has the following wizard spells prepared:",
			"Cantrips (at will): fire bolt*, light*, prestidigitation, ray of frost*",
			"1st level (4 slots): burning hands*, mage armor, magic missile*",
			"2nd level (3 slots): mirror image, misty step, shatter*",
			"3rd level (3 slots): counterspell, fireball*, lightning bolt*",
			"4th level (3 slots): ice storm*, stoneskin",
			"5th level (2 slots): Bigby’s hand*, cone of cold*",
			"6th level (1 slot): chain lightning*, wall of ice*",
			"*Evocation spell"
		],
	},
	"Fire Giant Dreadnought": {
		name: "Fire Giant Dreadnought",
		source: ["Volo's Guide", 147],
		size: "Huge",
		type: "giant (fire giant)",
		alignment: "lawful evil",
		ac: [21, "Plate", true],
		hp: 187,
		hd: [15, 12],
		speed: "30 ft",
		scores: [27, 9, 23, 8, 10, 11],
		saves: ["", 4, 11, "", "", 5],
		skills: "Athletics +13, Perception +5",
		damage_immunities: "fire",
		senses: "",
		passive_perception: 15,
		languages: "Giant",
		challenge_rating: "14",
		attacks: [{
			name: "Fireshield",
			ability: 1,
			damage: [4, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) fire damage; plus 7 (2d6) piercing damage.",
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Dual Shields",
			description: "The giant carries two shields, each of which is accounted for in the giant’s AC. The giant must stow or drop one of its shields to hurl rocks."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The giant makes two fireshield attacks."
		}, {
			name: "Shield Charge",
			description: "The giant moves up to 30 feet in a straight line and can move through the space of any creature smaller than Huge. The first time it enters a creature's space during this move, it makes a fireshield attack against that creature. If the attack hits, the target must also succeed on a DC 21 Strength saving throw or be pushed ahead of the giant for the rest of this move. If a creature fails the save by 5 or more, it is also knocked prone and takes 18 (3d6+8) bludgeoning damage, or 29 (6d6+8) bludgeoning damage if it was already prone.",
		}
		],
	},
	"Firenewt Warlock of Imix": {
		name: "Firenewt Warlock of Imix",
		source: ["Volo's Guide", 143],
		size: "Medium",
		type: "humanoid (firenewt)",
		alignment: "neutral evil",
		ac: [10, "", false],
		hp: 33,
		hd: [6, 8],
		speed: "30 ft",
		scores: [13, 11, 12, 9, 11, 14],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "fire",
		senses: "darkvision 120 ft (penetrates magical darkness)",
		passive_perception: 10,
		languages: "Draconic, Ignan",
		challenge_rating: "1",
		attacks: [{
			name: "Morningstar",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The firenewt can breathe air and water."
		}, {
			name: "Innate Spellcasting",
			description: "The firenewt’s innate spellcasting ability is Charisma. It can innately cast mage armor (self only) at will, requiring no material components."
		}, {
			name: "Imix's Blessing",
			description: "When the firenewt reduces an enemy to 0 hit points, the firenewt gains 5 temporary hit points."
		}
		],
		spells: [
			"The firenewt is a 3rd-level spellcaster. Its spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:",
			"Cantrips (at will): fire bolt, guidance, light, mage hand, prestidigitation",
			"1st-2nd level (2 2nd-level slots): burning hands, flaming sphere, hellish rebuke, scorching ray"
		],
	},
	"Firenewt Warrior": {
		name: "Firenewt Warrior",
		source: ["Volo's Guide", 142],
		size: "Medium",
		type: "humanoid (firenewt)",
		alignment: "neutral evil",
		ac: [16, "Chain Shirt", true],
		hp: 22,
		hd: [4, 8],
		speed: "30 ft",
		scores: [10, 13, 12, 7, 11, 8],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "fire",
		senses: "",
		passive_perception: 10,
		languages: "Draconic, Ignan",
		challenge_rating: "1/2",
		attacks: [{
			name: "Scimitar",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The firenewt can breathe air and water."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The firenewt makes two attacks with its scimitar."
		}, {
			name: "Spit fire (Recharges after a Short or Long Rest)",
			description: "The firenewt spits fire at a creature within 10 feet of it. The creature must make a DC 11 Dexterity saving throw, taking 9 (2d8) fire damage on a failed save, or half as much damage on a successful one",
		}
		],
	},
	"Flail Snail": {
		name: "Flail Snail",
		source: ["Volo's Guide", 144],
		size: "Large",
		type: "elemental",
		alignment: "unaligned",
		ac: [16, "Natural Armor", false],
		hp: 52,
		hd: [5, 10],
		speed: "10 ft",
		scores: [17, 5, 20, 3, 10, 5],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft, tremorsense 60 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "3",
		attacks: [{
			name: "Flail Tentacle",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Antimagic Shell",
			description: ["The snail has advantage on saving throws against spells, and any creature making a spell attack against the snail has disadvantage on the attack roll. If the snail succeeds on its saving throw against a spell or a spell attack misses it, an additional effect might occur, as determined by rolling a d6:", "", "1-2: If the spell affects an area or has multiple targets, it fails and has no effect. If the spell targets only the snail, it has no effect on the snail and is reflected back at the caster, using the spell slot level, spell save DC, attack bonus, and spellcasting ability of the caster.", "", "3-4: No additional effect.", "", "5-6: The snail’s shell converts some of the spell's energy into a burst of destructive force. Each creature within 30 feet of the snail must make a DC 15 Constitution saving throw, taking 1d6 force damage per level of the spell on a failed save, or half as much damage on a successful one."]
		}, {
			name: "Flail Tentacles",
			description: "The flail snail has five flail tentacles. Whenever the snail takes 10 damage or more on a single turn, one of its tentacles dies. If even one tentacle remains, the snail regrows all dead ones within 1d4 days. If all its tentacles die, the snail retracts into its shell, gaining total cover, and it begins wailing, a sound that can be heard for 600 feet, stopping only when it dies 5d6 minutes later. Healing magic that restores limbs, such as the regenerate spell, can halt this dying process."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The flail snail makes as many flail tentacle attacks as it has flail tentacles, all against the same target."
		}, {
			name: "Scintillating Shell (Recharges after a Short or Long Rest)",
			description: "The snail's shell emits dazzling, colored light until the end of the snail’s next turn. During this time, the shell sheds bright light in a 30-foot radius and dim light for an additional 30 feet, and creatures that can see the snail have disadvantage on attack rolls against it. In addition, any creature within the bright light and able to see the snail when this power is activated must succeed on a DC 15 Wisdom saving throw or be stunned until the light ends."
		}, {
			name: "Shell Defense",
			description: "The flail snail withdraws into its shell, gaining a +4 bonus to AC until it emerges. It can emerge from its shell as a bonus action on its turn."
		}
		],
	},
	"Flind": {
		name: "Flind",
		source: ["Volo's Guide", 153],
		size: "Medium",
		type: "humanoid (gnoll)",
		alignment: "chaotic evil",
		ac: [16, "Chain Mail", false],
		hp: 127,
		hd: [15, 8],
		speed: "30 ft",
		scores: [20, 10, 19, 11, 13, 12],
		saves: ["", "", 8, "", 5, ""],
		skills: "Intimidation +5, Perception +5",
		senses: "darkvision 60 ft",
		passive_perception: 15,
		languages: "Abyssal, Gnoll",
		challenge_rating: "9",
		attacks: [{
			name: "Flail of Madness",
			ability: 1,
			damage: [1, 10, "bludgeoning"],
			range: "Melee (10 ft)",
			dc: [16, "Wis"],
			description: "Target must make a DC 16 Wisdom saving throw. On a failed save, the target must make a melee attack against a random target within its reach on its next turn. If it has no targets within its reach even after moving, it loses its action on that turn.",
		}, {
			name: "Flail of Pain",
			ability: 1,
			damage: [1, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 22 (4d10) psychic damage.",
		}, {
			name: "Flail of Paralysis",
			ability: 1,
			damage: [1, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			dc: [16, "Con"],
			description: "Target must succeed on a DC 16 Constitution saving throw or be paralyzed until the end of its next turn.",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Aura of Blood Thirst",
			description: "If the flind isn’t incapacitated, any creature with the Rampage trait can make a bite attack as a bonus action while within 10 feet of the flind."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The flind makes three attacks: one with each of its different flail attacks or three with its longbow."
		}
		],
	},
	"Froghemoth": {
		name: "Froghemoth",
		source: ["Volo's Guide", 145],
		size: "Huge",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 184,
		hd: [16, 12],
		speed: "50 ft, swim 30 ft",
		scores: [23, 13, 20, 2, 12, 5],
		saves: ["", "", 9, "", 5, ""],
		skills: "Perception +9, Stealth +5",
		damage_resistances: "fire, lightning",
		senses: "darkvision 60 ft",
		passive_perception: 19,
		languages: "",
		challenge_rating: "10",
		attacks: [{
			name: "Tentacle",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			dc: [16, "Escape"],
			description: "Target is grappled (escape DC 16) if it is a Huge or smaller creature. Until the grapple ends, the froghemoth can’t use this tentacle on another target. The froghemoth has four tentacles.",
		}, {
			name: "Bite",
			ability: 1,
			damage: [3, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Target is swallowed if it is a Medium or smaller creature. A swallowed creature is blinded and restrained, has total cover against attacks and other effects outside the froghemoth, and takes 10 (3d6) acid damage at the start of each of the froghemoth’s turns. The froghemoth’s gullet can hold up to two creatures at a time. If the Froghemoth takes 20 damage or more on a single turn from a creature inside it, the Froghemoth must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls prone in a space within 10 feet of the froghemoth. If the froghemoth dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 10 feet of movement, exiting prone."
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The froghemoth can breathe air and water."
		}, {
			name: "Shock Suscptibility",
			description: "If the froghemoth takes lightning damage, it suffers several effects until the end of its next turn: its speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, it can’t use reactions or Multiattack, and on its turn, it can use either an action or a bonus action, not both."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The froghemoth makes two attacks with its tentacles. It can also use its tongue or bite."
		}, {
			name: "Tongue",
			description: "The Froghemoth targets one Medium or smaller creature that it can see within 20 feet of it. The target must make a DC 18 Strength saving throw. On a failed save, the target is pulled into an unoccupied space within 5 feet of the froghemoth, and the froghemoth can make a bite attack against it as a bonus action."
		}
		],
	},
	"Frost Giant Everlasting One": {
		name: "Frost Giant Everlasting One",
		source: ["Volo's Guide", 148],
		size: "Huge",
		type: "giant (frost giant)",
		alignment: "chaotic evil",
		ac: [15, "Patchwork Armor", false],
		hp: 189,
		hd: [14, 12],
		speed: "40 ft",
		scores: [25, 9, 24, 9, 10, 12],
		saves: [11, "", 11, "", 4, ""],
		skills: "Athletics +11, Perception +4",
		damage_immunities: "cold",
		senses: "darkvision 60 ft",
		passive_perception: 14,
		languages: "Giant",
		challenge_rating: "12",
		attacks: [{
			name: "Greataxe",
			ability: 1,
			damage: [3, 12, "slashing"],
			range: "Melee (10 ft)",
			description: "Or 30 (3d12+11) slashing damage while raging.",
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Extra Heads",
			description: "The giant has a 25 percent chance of having more than one head. If it has more than one, it has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, Frightened, stunned, or knocked unconscious."
		}, {
			name: "Regeneration",
			description: "The giant regains 10 hit points at the start of its turn. If the giant takes acid or fire damage, this trait doesn’t function at the start of its next turn. The giant dies only if it starts its turn with 0 hit points and doesn’t regenerate."
		}, {
			name: "Vaprak's Rage (Recharges on a Short or Long Rest)",
			description: [
				"As a bonus action, the giant can enter a rage at the start of its turn. The rage lasts for 1 minute or until the giant is incapacitated. While raging, the giant gains the following benefits:",
				"The giant has advantage on Strength checks and Strength saving throws",
				"When it makes a melee weapon attack, the giant gains a +4 bonus to the damage roll.",
				"The giant has resistance to bludgeoning, piercing, and slashing damage."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The giant makes two attacks with its greataxe."
		}
		],
	},
	"Gauth": {
		name: "Gauth",
		source: ["Volo's Guide", 125],
		size: "Medium",
		type: "aberration",
		alignment: "lawful evil",
		ac: [15, "Natural Armor", false],
		hp: 67,
		hd: [9, 8],
		speed: "0 ft, fly 20 ft (hover)",
		scores: [10, 14, 16, 15, 15, 13],
		saves: ["", "", "", 5, 5, 4],
		skills: "Perception +5",
		condition_immunities: "prone",
		senses: "darkvision 120 ft",
		passive_perception: 15,
		languages: "Deep Speech, Undercommon",
		challenge_rating: "6",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Stunning Gaze",
			description: "When a creature that can see the gauth's central eye starts its turn within 30 feet of the gauth, the gauth can force it to make a DC 14 Wisdom saving throw if the gauth isn't incapacitated and can see the creature. A creature that fails the save is stunned until the start of its next turn, when it can avert its eyes again. If the creature looks at the gauth in the meantime, it must immediately make the save."
		}, {
			name: "Death Throes",
			description: "When the gauth dies, the magical energy within it explodes, and each creature within 10 feet of it must make a DC 14 Dexterity saving throw, taking 13 (3d8) force damage on a failed save, or half as much damage on a successful one."
		}
		],
		actions: [{
			name: "Eye Rays",
			description: [
				"The gauth shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it: ",
				"Devour Magic Ray: The targeted creature must succeed on a DC 14 Dexterity saving throw or have one of its magic items lose all magical properties until the start of the gauth's next turn. If the object is a charged item, it also loses 1d4 charges. Determine the affected item randomly, ignoring single-use items such as potions and scrolls.",
				"Enervation Ray: The targeted creature must make a DC 14 Constitution saving throw, taking 18 (4d8) necrotic damage on a failed save, or half as much damage on a successful one.",
				"Pushing Ray: The targeted creature must succeed on a DC 14 Strength saving throw or be pushed up to 15 feet directly away from the gauth and have its speed halved until the start of the gauth's next turn.",
				"fire Ray: The targeted creature must succeed on a DC 14 Dexterity saving throw or take 22 (4d10) fire damage.",
				"Paralyzing Ray: The targeted creature must succeed on a DC 14 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"Sleep Ray: The targeted creature must succeed on a DC 14 Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead."
			]
		}
		],
	},
	"Gazer": {
		name: "Gazer",
		source: ["Volo's Guide", 126],
		size: "Tiny",
		type: "aberration",
		alignment: "neutral evil",
		ac: [13, "", false],
		hp: 13,
		hd: [3, 4],
		speed: "0 ft, fly 30 ft (hover)",
		scores: [3, 17, 14, 3, 10, 7],
		saves: ["", "", "", "", 2, ""],
		skills: "Perception +4, Stealth +2",
		condition_immunities: "prone",
		senses: "darkvision 60 ft",
		passive_perception: 14,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Aggressive",
			description: "As a bonus action, the gazer can move up to its speed toward a hostile creature that it can see."
		}, {
			name: "Mimicry",
			description: "The gazer can mimic simple sounds of speech it has heard, in any language. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
		}
		],
		actions: [{
			name: "Eye Rays",
			description: [
				"The gazer shoots two of the following magical eye rays at random (reroll duplicates), choosing one or two targets it can see within 60 feet of it: ",
				"Dazing Ray: The targeted creature must succeed on a DC 12 Wisdom saving throw or be charmed until the start of the gazer's next turn. While the target is charmed in this way, its speed is halved, and it has disadvantage on attack rolls.",
				"Fear Ray: The targeted creature must succeed on a DC 12 Wisdom saving throw or be frightened until the start of the gazer's next turn.",
				"Frost Ray: The targeted creature must succeed on a DC 12 Dexterity saving throw or take 10 (3d6) cold damage.",
				"Telekinetic Ray: If the target is a creature that is Medium or smaller, it must succeed on a DC 12 Strength saving throw or be moved up to 30 feet directly away from the gazer.",
				"If the target is an object weighing 10 pounds or less that isn't being worn or carried, the gazer moves it up to 30 feet in any direction. The gazer can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a container.",
			]
		}
		],
	},
	"Giant Strider": {
		name: "Giant Strider",
		source: ["Volo's Guide", 143],
		size: "Large",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [14, "Natural Armor", false],
		hp: 22,
		hd: [3, 10],
		speed: "50 ft",
		scores: [18, 13, 14, 4, 12, 6],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "fire",
		senses: "",
		passive_perception: 11,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "fire Absorption",
			description: "Whenever the giant strider is subjected to fire damage, it takes no damage and regains a number of hit points equal to half the fire damage dealt."
		}
		],
		actions: [{
			name: "fire Burst (Recharges 5-6)",
			description: "The giant strider hurls a gout of flame at a point it can see within 60 feet of it. Each creature in a 10-foot-radius sphere centered on that point must make a DC 12 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners, and it ignites flammable objects in that area that aren’t being worn or carried.",
		}
		],
	},
	"Girallon": {
		name: "Girallon",
		source: ["Volo's Guide", 152],
		size: "Large",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [13, "", false],
		hp: 59,
		hd: [7, 10],
		speed: "40 ft, climb 40 ft",
		scores: [18, 16, 16, 5, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +5",
		senses: "darkvision 60 ft",
		passive_perception: 13,
		languages: "",
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
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Aggressive",
			description: "As a bonus action, the girallon can move up to its speed toward a hostile creature that it can see."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The girallon makes five attacks: one with its bite and four with its claws."
		}
		],
	},
	"Gnoll Flesh Gnawer": {
		name: "Gnoll Flesh Gnawer",
		source: ["Volo's Guide", 154],
		size: "Medium",
		type: "humanoid (gnoll)",
		alignment: "chaotic evil",
		ac: [14, "Studded Leather", false],
		hp: 22,
		hd: [4, 8],
		speed: "30 ft",
		scores: [12, 14, 12, 8, 10, 8],
		saves: ["", 4, "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: 10,
		languages: "Gnoll",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Shortsword",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Rampage",
			description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The gnoll makes three attacks: one with its bite and two with its shortsword."
		}, {
			name: "Sudden Rush",
			description: "Until the end of the turn, the gnoll's speed increases by 60 feet and it doesn’t provoke opportunity attacks."
		}
		],
	},
	"Gnoll Hunter": {
		name: "Gnoll Hunter",
		source: ["Volo's Guide", 154],
		size: "Medium",
		type: "humanoid (gnoll)",
		alignment: "chaotic evil",
		ac: [13, "Leather Armor", false],
		hp: 22,
		hd: [4, 8],
		speed: "30 ft",
		scores: [14, 14, 12, 8, 12, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +3",
		senses: "darkvision 60 ft",
		passive_perception: 13,
		languages: "Gnoll",
		challenge_rating: "1/2",
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
			description: "Two-Handed: 6 (1d8+2) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "Target’s speed is reduced by 10 feet until the end of its next turn.",
		}
		],
		traits: [{
			name: "Rampage",
			description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The gnoll makes two melee attacks with its spear or two ranged attacks with its longbow."
		}
		],
	},
	"Gnoll Witherling": {
		name: "Gnoll Witherling",
		source: ["Volo's Guide", 155],
		size: "Medium",
		type: "undead",
		alignment: "chaotic evil",
		ac: [12, "Natural Armor", false],
		hp: 11,
		hd: [2, 8],
		speed: "30 ft",
		scores: [14, 8, 12, 5, 5, 5],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "exhaustion, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: 7,
		languages: "understands Gnoll but can't speak",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Club",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Rampage",
			description: "When the witherling reduces a creature to 0 hit points with a melee attack on its turn, it can take a bonus action to move up to half its speed and make a bite attack."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The witherling makes two attacks: one with its bite and one with its club, or two with its club."
		}
		],
		reactions: [{
			name: "Vengeful Strike",
			description: "In response to a gnoll being reduced to 0 hit points within 30 feet of the witherling, the witherling makes a melee attack."
		}
		],
	},
	"Green Guard Drake": {
		name: "Green Guard Drake",
		source: ["Volo's Guide", 158],
		size: "Medium",
		type: "dragon",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 52,
		hd: [7, 8],
		speed: "30 ft, swim 30 ft",
		scores: [16, 1, 16, 4, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		damage_resistances: "poison",
		senses: "darkvision 60 ft",
		passive_perception: 12,
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
		traits: [{
			name: "Amphibious",
			description: "The guard drake can breathe air and water."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drake attacks twice, once with its bite and once with its tail."
		}
		],
	},
	"Grung": {
		name: "Grung",
		source: ["Volo's Guide", 156],
		size: "Small",
		type: "humanoid (grung)",
		alignment: "lawful evil",
		ac: [12, "", false],
		hp: 11,
		hd: [2, 6],
		speed: "25 ft, climb 25 ft",
		scores: [7, 14, 15, 10, 11, 10],
		saves: ["", 4, "", "", "", ""],
		skills: "Athletics +2, Perception +2, Stealth +4, Survival +2",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "",
		passive_perception: 12,
		languages: "Grung",
		challenge_rating: "1/4",
		attacks: [{
			name: "Dagger (Melee)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			dc: [12, "Con"],
			description: "Target must succeed on a DC 12 Constitution saving throw or take 5 (2d4) poison damage.",
		}, {
			name: "Dagger (Ranged)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			dc: [12, "Con"],
			description: "Target must succeed on a DC 12 Constitution saving throw or take 5 (2d4) poison damage.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The grung can breathe air and water."
		}, {
			name: "Poisonous Skin",
			description: "Any creature that grapples the grung or otherwise comes into direct contact with the grung’s skin must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute. A poisoned creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "Standing Leap",
			description: "The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start."
		}, {
			name: "Variant: Grung Poison",
			description: [
				"Grung Poison loses its potency 1 minute after being removed from a grung. A similar breakdown occurs if the grung dies.",
				"A creature poisoned by a grung can suffer an additional effect that varies depending on the grung’s skin color. This effect lasts until the creature is no longer poisoned by the grung.",
				"Green: The poisoned creature can’t move except to climb or make standing jumps. If the creature is flying, it can’t take any actions or reactions unless it lands.",
				"Blue: The poisoned creature must shout loudly or otherwise make a loud noise at the start and end of its turn.",
				"Purple: The poisoned creature feels a desperate need to soak itself in liquid or mud. It can’t take actions or move except to do so or to reach a body of liquid or mud."
			]
		}
		],
	},
	"Grung Elite Warrior": {
		name: "Grung Elite Warrior",
		source: ["Volo's Guide", 157],
		size: "Small",
		type: "humanoid (grung)",
		alignment: "lawful evil",
		ac: [13, "", false],
		hp: 49,
		hd: [9, 6],
		speed: "25 ft, climb 25 ft",
		scores: [7, 16, 15, 10, 11, 12],
		saves: ["", 5, "", "", "", ""],
		skills: "Athletics +2, Perception +2, Stealth +5, Survival +2",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "",
		passive_perception: 12,
		languages: "Grung",
		challenge_rating: "2",
		attacks: [{
			name: "Dagger (Melee)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			dc: [12, "Con"],
			description: "Target must succeed on a DC 12 Constitution saving throw or take 5 (2d4) poison damage.",
		}, {
			name: "Dagger (Ranged)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			dc: [12, "Con"],
			description: "Target must succeed on a DC 12 Constitution saving throw or take 5 (2d4) poison damage.",
		}, {
			name: "Shortbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (80/320 ft)",
			dc: [12, "Con"],
			description: "Target must succeed on a DC 12 Constitution saving throw or take 5 (2d4) poison damage.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The grung can breathe air and water."
		}, {
			name: "Poisonous Skin",
			description: "Any creature that grapples the grung or otherwise comes into direct contact with the grung’s skin must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute. A poisoned creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "Standing Leap",
			description: "The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start."
		}, {
			name: "Variant: Grung Poison",
			description: [
				"Grung Poison loses its potency 1 minute after being removed from a grung. A similar breakdown occurs if the grung dies.",
				"A creature poisoned by a grung can suffer an additional effect that varies depending on the grung’s skin color. This effect lasts until the creature is no longer poisoned by the grung.",
				"Orange: The poisoned creature is frightened of its allies.",
				"Gold: The poisoned creature is charmed and can speak Grung."
			]
		}
		],
		actions: [{
			name: "Mesmerizing Chirr (Recharge 6)",
			description: "The grung makes a chirring noise to which grungs are immune. Each humanoid or beast that is within 15 feet of the grung and able to hear it must succeed on a DC 12 Wisdom saving throw or be stunned until the end of the grung’s next turn."
		}
		],
	},
	"Grung Wildling": {
		name: "Grung Wildling",
		source: ["Volo's Guide", 157],
		size: "Small",
		type: "humanoid (grung)",
		alignment: "lawful evil",
		ac: [13, "", false],
		hp: 27,
		hd: [5, 6],
		speed: "25 ft, climb 25 ft",
		scores: [7, 16, 15, 10, 15, 11],
		saves: ["", 5, "", "", "", ""],
		skills: "Athletics +2, Perception +4, Stealth +5, Survival +4",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "",
		passive_perception: 14,
		languages: "Grung",
		challenge_rating: "1",
		attacks: [{
			name: "Dagger (Melee)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			dc: [12, "Con"],
			description: "Target must succeed on a DC 12 Constitution saving throw or take 5 (2d4) poison damage.",
		}, {
			name: "Dagger (Ranged)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			dc: [12, "Con"],
			description: "Target must succeed on a DC 12 Constitution saving throw or take 5 (2d4) poison damage.",
		}, {
			name: "Shortbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (80/320 ft)",
			dc: [12, "Con"],
			description: "Target must succeed on a DC 12 Constitution saving throw or take 5 (2d4) poison damage.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The grung can breathe air and water."
		}, {
			name: "Poisonous Skin",
			description: "Any creature that grapples the grung or otherwise comes into direct contact with the grung’s skin must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute. A poisoned creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "Standing Leap",
			description: "The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start."
		}, {
			name: "Variant: Grung Poison",
			description: [
				"Grung Poison loses its potency 1 minute after being removed from a grung. A similar breakdown occurs if the grung dies.",
				"A creature poisoned by a grung can suffer an additional effect that varies depending on the grung’s skin color. This effect lasts until the creature is no longer poisoned by the grung.",
				"Red: The poisoned creature must use its action to eat if food is within reach. "
			]
		}
		],
		spells: [
			"The grung is a 9th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It knows the following ranger spells: ",
			"1st level (4 slots): cure wounds, jump",
			"2nd level (3 slots): barkskin, spike growth",
			"3rd level (2 slots): plant growth"
		],
	},
	"Guard Drake": {
		name: "Guard Drake",
		source: ["Volo's Guide", 158],
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
		senses: "darkvision 60 ft",
		passive_perception: 12,
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
		],
	},
	"Hadrosaurus": {
		name: "Hadrosaurus",
		source: ["Volo's Guide", 140],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [11, "Natural Armor", false],
		hp: 19,
		hd: [3, 10],
		speed: "40 ft",
		scores: [15, 10, 13, 2, 10, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		senses: "",
		passive_perception: 12,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Tail",
			ability: 1,
			damage: [1, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Hobgoblin Devastator": {
		name: "Hobgoblin Devastator",
		source: ["Volo's Guide", 161],
		size: "Medium",
		type: "humanoid (goblinoid)",
		alignment: "lawful evil",
		ac: [13, "Studded Leather", false],
		hp: 45,
		hd: [7, 8],
		speed: "30 ft",
		scores: [13, 12, 14, 16, 13, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +5",
		senses: "darkvision 60 ft",
		passive_perception: 11,
		languages: "Common, Goblin",
		challenge_rating: "4",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 5 (1d8+1) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Arcane Advantage",
			description: "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a damaging spell attack if that target is within 5 feet of an ally of the hobgoblin and that ally isn’t incapacitated."
		}, {
			name: "Army Arcane",
			description: "When the hobgoblin casts a spell that causes damage or that forces other creatures to make a saving throw, it can choose itself and any number of allies to be immune to the damage caused by the spell and to succeed on the required saving throw."
		}
		],
		spells: [
			"The hobgoblin is a 7th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). It has the following wizard spells prepared:",
			"Cantrips (at will): acid splash, fire bolt, ray of frost, shocking grasp",
			"1st level (4 slots): fog cloud, magic missile, Thunderwave",
			"2nd level (3 slots): gust of wind, Melf’s acid arrow, scorching ray",
			"3rd level (3 slots): fireball, fly, lightning bolt",
			"4th level (1 slot): ice storm"
		],
	},
	"Hobgoblin Iron Shadow": {
		name: "Hobgoblin Iron Shadow",
		source: ["Volo's Guide", 162],
		size: "Medium",
		type: "humanoid (goblinoid)",
		alignment: "lawful evil",
		ac: [15, "", false],
		hp: 32,
		hd: [5, 8],
		speed: "40 ft",
		scores: [14, 16, 15, 14, 15, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +5, Athletics +4, Stealth +5",
		senses: "darkvision 60 ft",
		passive_perception: 12,
		languages: "Common, Goblin",
		challenge_rating: "2",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Dart",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Unarmored Defense",
			description: "While the hobgoblin is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hobgoblin makes four attacks, each of which can be an unarmed strike or a dart attack. It can also use Shadow Jaunt once, either before or after one of the attacks."
		}, {
			name: "Shadow Jaunt",
			description: "The hobgoblin magically teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see. Both the space it is leaving and its destination must be in dim light or darkness."
		}
		],
		spells: [
			"The hobgoblin is a 2nd-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 12, +4 to hit with spell attacks). It has the following wizard spells prepared:",
			"Cantrips (at will): minor illusion, prestidigitation, true strike",
			"1st level (3 slots): charm person, disguise self, expeditious retreat, silent image"
		],
	},
	"Illithilich": {
		name: "Illithilich",
		source: ["Volo's Guide", 172],
		size: "Medium",
		type: "undead",
		alignment: "any evil alignment",
		ac: [17, "Natural Armor", false],
		hp: 135,
		hd: [18, 8],
		speed: "30 ft",
		scores: [11, 16, 16, 20, 14, 16],
		saves: ["", "", 10, 12, 9, ""],
		skills: "Arcana +18, History +12, Insight +9, Perception +9",
		damage_resistances: "cold, lightning, necrotic",
		damage_immunities: "poison; bludgeoning, piercing, and slashing from nonmagical weapons",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "truesight 120 ft",
		passive_perception: 19,
		languages: "Deep Speech, Undercommon, telepathy 120 ft",
		challenge_rating: "22",
		attacks: [{
			name: "Tentacles",
			ability: 1,
			damage: [3, 10, "psychic"],
			range: "Melee (5 ft)",
			description: "If the target is Large or smaller, it is grappled (escape DC 15) and must succeed on a DC 20 Intelligence saving throw or be stunned until this grapple ends.",
		}, {
			name: "Extract Brain",
			ability: 1,
			damage: [10, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "If this damage reduces the target to 0 hit points, the lich kills the target by extracting and devouring its brain.",
		}, {
			name: "Paralyzing Touch",
			ability: 1,
			damage: [3, 6, "cold"],
			range: "Melee (5 ft)",
			dc: [18, "Con"],
			description: ["Target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",],
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the illithilich fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Rejuvenation",
			description: "If it has a phylactery, a destroyed illithilich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery."
		}, {
			name: "Turn Resistance",
			description: "The illithilich has advantage on saving throws against any effect that turns undead."
		}, {
			name: "Magic Resistance",
			description: "The illithilich has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The illithilich’s innate spellcasting ability is Intelligence (spell save DC 20). It can innately cast the following spells, requiring no components.",
				"At will: detect thoughts, levitate",
				"1/day each: dominate monster, plane shift (self only)"
			]
		}
		],
		actions: [{
			name: "Mind Blast (Recharge 5-6)",
			description: "The illithilich magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 18 Intelligence saving throw or take 27 (5d8+5) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The illithilich can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time, and only at the end of another creature's turn. The illithilich regains spent legendary actions at the start of its turn."
		}, {
			name: "Tentacles",
			description: "The illithilich makes one attack with its tentacles. "
		}, {
			name: "Extract Brain (Costs 2 Actions)",
			description: "The illithilich uses Extract Brain."
		}, {
			name: "Mind Blast (Costs 3 Actions)",
			description: "The illithilich recharges its Mind Blast and uses it."
		}, {
			name: "Cast Spell (Costs 1-3 Actions)",
			description: "The illithilich uses a spell slot to cast a 1st-, 2nd-, or 3rd-level spell that it has prepared. Doing so costs 1 legendary action per level of the spell."
		}
		],
		spells: [
			"The illithilich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared: ",
			"Cantrips (at will): mage hand, prestidigitation, ray of frost",
			"1st level (4 slots): detect magic, magic missile, shield, Thunderwave",
			"2nd level (3 slots): detect thoughts, invisibility, Melf's acid arrow, mirror image",
			"3rd level (3 slots): animate dead, counterspell, dispel magic, fireball",
			"4th level (3 slots): blight, dimension door",
			"5th level (3 slots): cloudkill, scrying",
			"6th level (1 slot): disintegrate, globe of invulnerability",
			"7th level (1 slot): finger of death, plane shift",
			"8th level (1 slot): dominate monster, power word stun",
			"9th level (1 slot): power word kill"
		],
	},
	"Illusionist": {
		name: "Illusionist",
		source: ["Volo's Guide", 214],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [12, "", false],
		hp: 38,
		hd: [7, 8],
		speed: "30 ft",
		scores: [9, 14, 13, 16, 11, 12],
		saves: ["", "", "", 5, 2, ""],
		skills: "Arcana +5, History +5",
		senses: "",
		passive_perception: 10,
		languages: "any four languages",
		challenge_rating: "3",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 3 (1d8-1) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Displacement (Recharges after the Illusionist Casts an Illusion Spell of 1st Level or Higher)",
			description: "As a bonus action, the illusionist projects an illusion that makes the illusionist appear to be standing in a place a few inches from its actual location, causing any creature to have disadvantage on attack rolls against the illusionist. The effect ends if the illusionist takes damage, it is incapacitated, or its speed becomes 0."
		}
		],
		spells: [
			"The illusionist is a 7th-level spellcaster. its spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). The illusionist has the following wizard spells prepared:",
			"Cantrips (at will): dancing lights, mage hand, minor illusion, poison spray",
			"1st level (4 slots): color spray*, disguise self*, mage armor, magic missile",
			"2nd level (3 slots): invisibility*, mirror image*, phantasmal force",
			"3rd level (3 slots): major image*, phantom steed*",
			"4th level (1 slot): phantasmal killer*",
			"*Illusion spell of 1st level or higher"
		],
	},
	"Ki-rin": {
		name: "Ki-rin",
		source: ["Volo's Guide", 163],
		size: "Huge",
		type: "celestial",
		alignment: "lawful good",
		ac: [20, "Natural Armor", false],
		hp: 152,
		hd: [16, 12],
		speed: "60 ft, fly 120 ft (hover)",
		scores: [21, 16, 16, 19, 20, 20],
		saves: ["", "", "", "", "", ""],
		skills: "Insight +9, Perception +9, Religion +8",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "blindsight 30 ft, darkvision 120 ft",
		passive_perception: 19,
		languages: "all, telepathy 120 ft",
		challenge_rating: "12",
		attacks: [{
			name: "Hoof",
			ability: 1,
			damage: [2, 4, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}, {
			name: "Horn",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The ki-rin's innate spellcasting ability is Charisma (spell save DC 17). The ki-rin can innately cast the following spells, requiring no material components:",
				"At will: gaseous form, major image (6th-level version), wind walk",
				"1/day: create food and water"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the ki-rin fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "The ki-rin has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The ki-rin’s weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The ki-rin makes three attacks: two with its hooves and one with its horn."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The ki-rin can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The ki-rin regains spent legendary actions at the start of its turn."
		}, {
			name: "Detect",
			description: "The ki-rin makes a Wisdom (Perception) check or a Wisdom (Insight) check."
		}, {
			name: "Smite",
			description: "The ki-rin makes a hoof attack or casts sacred flame."
		}, {
			name: "Move",
			description: "The ki-rin moves up to its half its speed without provoking opportunity attacks."
		}
		],
		spells: [
			"The ki-rin is a 18th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). It has the following cleric spells prepared:",
			"Cantrips (at will): light, mending, sacred flame, spare the dying, thaumaturgy",
			"1st level (4 slots): command, cure wounds, detect evil and good, protection from evil and good, sanctuary",
			"2nd level (3 slots): calm emotions, lesser restoration, silence",
			"3rd level (3 slots): dispel magic, remove curse, sending",
			"4th level (3 slots): banishment, freedom of movement, guardian of faith",
			"5th level (3 slots): greater restoration, mass cure wounds, scrying",
			"6th level (1 slot): heroes’ feast, true seeing",
			"7th level (1 slot): etherealness, plane shift",
			"8th level (1 slot): control weather",
			"9th level (1 slot): true resurrection"
		],
	},
	"Kobold Dragonshield": {
		name: "Kobold Dragonshield",
		source: ["Volo's Guide", 165],
		size: "Small",
		type: "humanoid (kobold)",
		alignment: "lawful evil",
		ac: [15, "Leather Armor", true],
		hp: 44,
		hd: [8, 6],
		speed: "20 ft",
		scores: [12, 15, 14, 8, 9, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +1",
		senses: "darkvision 60 ft",
		passive_perception: 11,
		languages: "Common, Draconic",
		challenge_rating: "1",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 5 (ld8+l) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, ""],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Dragon's Resistance",
			description: "The kobold has resistance to a type of damage based on the color of dragon that invested it with power (choose or roll a d10): 1-2, acid (black); 3-4, cold (white); 5-6, fire (red); 7-8, lightning (blue); 9-10, poison (green)."
		}, {
			name: "Heart of the Dragon",
			description: "If the kobold is frightened or paralyzed by an effect that allows a saving throw, it can repeat the save at the start of its turn to end the effect on itself and all kobolds within 30 feet of it. Any kobold that benefits from this trait (including the dragonshield) has advantage on its next attack roll."
		}, {
			name: "Pack Tactics",
			description: "The kobold has advantage on an attack roll against a creature if at least one of the kobold’s allies is within 5 feet of the creature and the ally isn’t incapacitated."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The kobold makes two melee attacks."
		}
		],
	},
	"Kobold Inventor": {
		name: "Kobold Inventor",
		source: ["Volo's Guide", 166],
		size: "Small",
		type: "humanoid (kobold)",
		alignment: "lawful evil",
		ac: [12, "", false],
		hp: 13,
		hd: [3, 6],
		speed: "30 ft",
		scores: [7, 15, 12, 8, 7, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +0",
		senses: "darkvision 60 ft",
		passive_perception: 10,
		languages: "Common, Draconic",
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
		}, {
			name: "Sling",
			ability: 2,
			damage: [1, 4, "bludgeoning"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Weapon Invention",
			description: [// fix
				"The kobold uses one of the following options (roll a d8 or choose one); the kobold can use each one no more than once per day:",
				"1. Acid: The kobold hurls a flask of acid. Ranged Weapon Attack: +4 to hit, range 5/20 ft, one target. Hit: 7 (2d6) acid damage.",
				"2. Alchemist’s fire: The kobold throws a flask of alchemist's fire. Ranged Weapon Attack: +4 to hit, range 5/20 ft, one target. Hit: 2 (1d4) fire damage at the start of each of the target’s turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.",
				"3. Basket of Centipedes: The kobold throws a small basket into a S-foot-square space within 20 feet of it. A swarm of insects (centipedes) with 11 hit points emerges from the basket and rolls initiative. At the end of each of the swarm’s turns, there's a 50 percent chance that the swarm disperses.",
				"4. Green Slime Pot: The kobold throws a clay pot full of green slime at the target, and it breaks open on impact. Ranged Weapon Attack: +4 to hit, range 5/20 ft, one target. Hit: The target is covered in a patch of green slime (see chapter 5 of the Dungeon Master’s Guide). Miss: A patch of green slime covers a randomly determined S-foot-square section of wall or floor within 5 feet of the target.",
				"5. Rot Grub Pot: The kobold throws a clay pot into a 5-foot-square space within 20 feet of it, and it breaks open on impact. A swarm of rot grubs (see appendix A) emerges from the shattered pot and remains a hazard in that square.",
				"6. Scorpion on a Stick. The kobold makes a melee attack with a scorpion tied to the end of a 5-foot-long pole. Melee Weapon Attack: +4 to hit, reach 5 ft, one target. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one.",
				"7. Skunk in a Cage: The kobold releases a skunk into an unoccupied space within 5 feet of it. The skunk has a walking speed of 20 feet, AC 10, 1 hit point, and no effective attacks. It rolls initiative and, on its turn, uses its action to spray musk at a random creature within 5 feet of it. The target must make a DC 9 Constitution saving throw. On a failed save, the target retches and can’t take actions for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that doesn’t need to breathe or is immune to poison automatically succeeds on the saving throw. Once the skunk has sprayed its musk, it can’t do so again until it finishes a short or long rest.",
				"8. Wasp Nest in a Bag: The kobold throws a small bag into a 5-foot-square space within 20 feet of it. A swarm of insects (wasps) with 11 hit points emerges from the bag and rolls initiative. At the end of each of the swarm's turns, there’s a 50 percent chance that the swarm disperses."
			],
		}
		],
	},
	"Kobold Scale Sorcerer": {
		name: "Kobold Scale Sorcerer",
		source: ["Volo's Guide", 167],
		size: "Small",
		type: "humanoid (kobold)",
		alignment: "lawful evil",
		ac: [15, "Natural Armor", false],
		hp: 27,
		hd: [5, 6],
		speed: "30 ft",
		scores: [7, 15, 14, 10, 9, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +2, Medicine +1",
		senses: "darkvision 60 ft",
		passive_perception: 9,
		languages: "Common, Draconic",
		challenge_rating: "1",
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
			name: "Sorcery Points",
			description: [
				"Sorcery Points. The kobold has 3 sorcery points. It can spend 1 or more sorcery points as a bonus action to gain one of the following benefits:",
				"Heightened Spell: When it casts a spell that forces a creature to a saving throw to resist the spell’s effects, the kobold can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw against the spell.",
				"Subtle Spell: When the kobold casts a spell, it can spend 1 sorcery point to cast the spell without any somatic or verbal components."
			]
		}, {
			name: "Pack Tactics",
			description: "The kobold has advantage on an attack roll against a creature it at least one of the kobold's allies is within 5 feet of the creature and the ally isn’t incapacitated."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		spells: [
			"The kobold is a 3rd-level spellcaster. Its spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It has the following sorcerer spells prepared:",
			"Cantrips (at will): fire bolt, mage hand, mending, poison spray",
			"1st level (4 slots): charm person, chromatic orb, expeditious retreat",
			"2nd level (2 slots): scorching ray"
		],
	},
	"Korred": {
		name: "Korred",
		source: ["Volo's Guide", 168],
		size: "Small",
		type: "fey",
		alignment: "chaotic neutral",
		ac: [17, "Natural Armor", false],
		hp: 102,
		hd: [12, 6],
		speed: "30 ft, burrow 30 ft",
		scores: [23, 14, 20, 10, 15, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +9, Perception +5, Stealth +5",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		senses: "darkvision 120 ft, tremorsense 120 ft",
		passive_perception: 15,
		languages: "Dwarvish, Gnomish, Sylvan, Terran, Undercommon",
		challenge_rating: "7",
		attacks: [{
			name: "Greatclub",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Or 19 (3d8+6) bludgeoning damage if the korred is on the ground.",
		}, {
			name: "Rock",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Ranged (60/120 ft)",
			description: "Or 24 (4d8+6) bludgeoning damage if the korred is on the ground.",
		}
		],
		traits: [{
			name: "Command Hair",
			description: [
				"The korred has at least one 50-foot-long rope woven out of its hair. As a bonus action, the korred commands one such rope within 30 feet of it to move up to 20 feet and entangle a Large or smaller creature that the korred can see. The target must succeed on a DC 13 Dexterity saving throw or become grappled by the rope (escape DC 13). Until this grapple ends. the target is restrained. The korred can use a bonus action to release the target, which is also freed if the korred dies or becomes incapacitated.",
				"A rope of korred hair has AC 20 and 20 hit points. It regains 1 hit point at the start of each of the korred’s turns while it has at least 1 hit point and the korred is alive. If the rope drops to 0 hit points, it is destroyed."
			]
		}, {
			name: "Innate Spellcasting",
			description: [
				"The korred's innate spellcasting ability is Wisdom (save DC 13). It can innately cast the following spells, requiring no components:",
				"At will: commune with nature, meld into stone, stone shape",
				"1/day each: conjure elemental (as 6th-level spell; galeb duhr, gargoyle, earth elemental, or xorn only), Otto’s irresistible dance"
			]
		}, {
			name: "Stone Camouflage",
			description: "The korred has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
		}, {
			name: "Stone's Strength",
			description: "While on the ground, the korred deals 2 extra dice of damage with any weapon attack (included in its attacks)."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The korred makes two attacks with its greatclub or hurls two rocks."
		}
		],
	},
	"Kraken Priest": {
		name: "Kraken Priest",
		source: ["Volo's Guide", 215],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any evil alignment",
		ac: [10, "", false],
		hp: 75,
		hd: [10, 8],
		speed: "30 ft, swim 30 ft",
		scores: [12, 10, 16, 10, 15, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		senses: "",
		passive_perception: 15,
		languages: "any two languages",
		challenge_rating: "5",
		attacks: [{
			name: "Thunderous Touch",
			ability: 5,
			damage: [5, 10, "Thunder"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The priest can breathe air and water."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The priest’s spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
				"At will: command, create or destroy water",
				"3/day each: control water, darkness, water breathing, water walk",
				"1/day each: call lightning, Evard’s black tentacles"
			]
		}
		],
		actions: [{
			name: "Voice of the Kraken (Recharges after a Short or Long Rest)",
			description: "A kraken speaks through the priest with a Thunderous voice audible within 300 feet. Creatures of the priest’s choice that can hear the kraken's words (which are spoken in Abyssal, Infernal, or Primordial) must succeed on a DC 14 Charisma saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}
		],
	},
	"Leucrotta": {
		name: "Leucrotta",
		source: ["Volo's Guide", 169],
		size: "Large",
		type: "monstrosity",
		alignment: "chaotic evil",
		ac: [14, "Natural Armor", false],
		hp: 67,
		hd: [9, 10],
		speed: "50 ft",
		scores: [18, 14, 15, 9, 12, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +2, Perception +3",
		senses: "darkvision 60 ft",
		passive_perception: 13,
		languages: "Abyssal, Gnoll",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "On a critical hit, roll the damage dice three times, instead of twice.",
		}, {
			name: "Hooves",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The leucrotta has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Kicking Retreat",
			description: "If the leucrotta attacks with its hooves, it can take the Disengage action as a bonus action."
		}, {
			name: "Mimicry",
			description: "The leucrotta can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check."
		}, {
			name: "Rampage",
			description: "When the leucrotta reduces a creature to 0 hit points with a melee attack on its turn, it can take a bonus action to move up to half its speed and make an attack with its hooves."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The leucrotta makes two attacks: one with its bite and one with its hooves."
		}
		],
	},
	"Martial Arts Adept": {
		name: "Martial Arts Adept",
		source: ["Volo's Guide", 216],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [16, "", false],
		hp: 60,
		hd: [11, 8],
		speed: "40 ft",
		scores: [11, 17, 13, 11, 16, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +5, Insight +5, Stealth +5",
		senses: "",
		passive_perception: 13,
		languages: "any one language (usually Common)",
		challenge_rating: "3",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, the adept can choose one of the following additional effects: Target must succeed on a DC 13 Strength saving throw or drop one item it is holding (adept’s choice); Target must succeed on a DC 13 Dexterity saving throw or be knocked prone; Target must succeed on a DC 13 Constitution saving throw or be stunned until the end ot'the adept’s next turn.",
		}, {
			name: "Dart",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Unarmored Defense",
			description: "While the adept is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
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
		],
	},
	"Master Thief": {
		name: "Master Thief",
		source: ["Volo's Guide", 216],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [16, "Studded Leather", false],
		hp: 83,
		hd: [13, 8],
		speed: "30 ft",
		scores: [11, 18, 14, 11, 11, 12],
		saves: ["", 7, "", 3, "", ""],
		skills: "Acrobatics +7, Athletics +3, Perception +3, Sleight of Hand +7, Stealth +7",
		senses: "",
		passive_perception: 13,
		languages: "any one language (usually Common) plus thieves' cant",
		challenge_rating: "5",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Light Crossbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Cunning Action",
			description: "On each of its turns, the thief can use a bonus action to take the Dash, Disengage, or Hide action."
		}, {
			name: "Evasion",
			description: "If the thief is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the thief instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
		}, {
			name: "Sneak Attack (1/Turn)",
			description: "The thief deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the thief that isn’t incapacitated and the thief doesn’t have disadvantage on the attack roll.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The thief makes three attacks with its shortsword."
		}
		],
		reactions: [{
			name: "Uncanny Dodge",
			description: "The thief halves the damage that it takes from an attack that hits it. The thief must be able to see the attacker."
		}
		],
	},
	"Maw Demon": {
		name: "Maw Demon",
		source: ["Volo's Guide", 137],
		size: "Medium",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [13, "Natural Armor", false],
		hp: 33,
		hd: [6, 8],
		speed: "30 ft",
		scores: [14, 8, 13, 5, 8, 5],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: 9,
		languages: "understands Abyssal but can't speak",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Rampage",
			description: "When it reduces a creature to 0 hit points with a melee attack on its turn, the maw demon can take a bonus action to move up to half its speed and make a bite attack."
		}
		],
	},
	"Meenlock": {
		name: "Meenlock",
		source: ["Volo's Guide", 170],
		size: "Small",
		type: "fey",
		alignment: "neutral evil",
		ac: [15, "Natural Armor", false],
		hp: 31,
		hd: [7, 6],
		speed: "30 ft",
		scores: [7, 15, 12, 11, 10, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +6, Survival +2",
		condition_immunities: "frightened",
		senses: "darkvision 120 ft",
		passive_perception: 14,
		languages: "telepathy 120 ft",
		challenge_rating: "2",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			dc: [11, "Con"],
			description: "Target must succeed on a DC 11 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		traits: [{
			name: "Fear Aura",
			description: "Any beast or humanoid that starts its turn within 10 feet of the meenlock must succeed on a DC 11 Wisdom saving throw or be frightened until the start of the creature’s next turn."
		}, {
			name: "Light Sensitivity",
			description: "While in bright light, the meenlock has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Shadow Teleport (Recharge 5-6)",
			description: "As a bonus action, the meenlock can teleport to an unoccupied space within 30 feet of it, provided that both the space it’s teleporting from and its destination are in dim light or darkness. The destination need not be within line of sight."
		}
		],
	},
	"Mind Flayer Psion": {
		name: "Mind Flayer Psion",
		source: ["Volo's Guide", 71],
		size: "Medium",
		type: "aberration",
		alignment: "lawful evil",
		ac: [15, "Breastplate", false],
		hp: 71,
		hd: [13, 8],
		speed: "30 ft",
		scores: [11, 12, 12, 19, 17, 17],
		saves: ["", "", "", 7, 6, 6],
		skills: "Arcana +7, Deception +6, Insight +6, Perception +6, Persuasion +6, Stealth +4",
		senses: "darkvision 120 ft",
		passive_perception: 16,
		languages: "Deep Speech, Undercommon, telepathy 120 ft",
		challenge_rating: "8",
		attacks: [{
			name: "Tentacles",
			ability: 1,
			damage: [2, 10, "psychic"],
			range: "Melee (5 ft)",
			description: "If target is Medium or smaller, it is grappled (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be stunned until this grapple ends.",
		}, {
			name: "Extract Brain",
			ability: 1,
			damage: [10, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain.",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The mind flayer has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The mind flayer is a 10th-level spellcaster. Its innate spellcasting ability is Intelligence (spell save DC 15; +7 to hit with spell attacks). It can innately cast the following spells, requiring no components: ",
				"At will: guidance, mage hand, vicious mockery, true strike",
				"1st-level (4 slots): charm person, command, comprehend languages, sanctuary",
				"2nd level (3 slots): crown of madness, phantasmal force, see invisibility",
				"3rd level (3 slots): clairvoyance, fear, meld into stone",
				"4th level (3 slots): confusion, stone shape",
				"5th level (2 slots): scrying, telekinesis"
			]
		}
		],
		actions: [{
			name: "Mind Blast (Recharge 5-6)",
			description: "The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8+4) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
	},
	"Mindwitness": {
		name: "Mindwitness",
		source: ["Volo's Guide", 176],
		size: "Large",
		type: "aberration",
		alignment: "lawful evil",
		ac: [15, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "0 ft, fly 20 ft (hover)",
		scores: [10, 14, 14, 15, 15, 10],
		saves: ["", "", "", 5, 5, ""],
		skills: "Perception +8",
		condition_immunities: "prone",
		senses: "darkvision 120 ft",
		passive_perception: 18,
		languages: "Deep Speech, Undercommon, telepathy 600 ft",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tentacles",
			ability: 1,
			damage: [4, 8, "psychic"],
			range: "Melee (5 ft)",
			description: "If target is Large or smaller, it is grappled (escape DC 13) and must succeed on a DC 13 Intelligence saving throw or be stunned until this grapple ends.",
		}
		],
		traits: [{
			name: "Telepathic Hub",
			description: "When the mindwitness receives a telepathic message, it can telepathically share that message with up to seven other creatures within 600 feet of it that it can see."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The mindwitness makes two attacks: one with its tentacles and one with its bite."
		}, {
			name: "Eye Rays",
			description: [
				"The mindwitness shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:",
				"Aversion Ray: The targeted creature must make a DC 13 Charisma saving throw. On a failed save, the target has disadvantage on attack rolls for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"Fear Ray: The targeted creature must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"Psychic Ray: The target must succeed on a DC 13 Intelligence saving throw or take 27 (6d8) psychic damage.",
				"Slowing Ray: The targeted creature must make a DC 13 Dexterity saving throw. On a failed save, the target’s speed is halved for 1 minute. In addition, the creature can’t take reactions, and it can take either an action or a bonus action on its turn but not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"Stunning Ray: The targeted creature must succeed on a DC 13 Constitution saving throw or be stunned for 1 minute. The target can repeat the saving throw at the start of each of its turns, ending the effect on itself on a success.",
				"Telekinetic Ray: If the target is a creature, it must make a DC 13 Strength saving throw. On a failed save, the mindwitness moves it up to 30 feet in any direction, and it is restrained by the ray’s telekinetic grip until the start of the mindwitness’s next turn or until the mindwitness is incapacitated.",
				"If the target is an object weighing 300 pounds or less that isn't being worn or carried, it is telekinetically moved up to 30 feet in any direction. The mindwitness can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container."
			],
		}
		],
	},
	"Morkoth": {
		name: "Morkoth",
		source: ["Volo's Guide", 178],
		size: "Medium",
		type: "aberration",
		alignment: "chaotic evil",
		ac: [17, "Natural Armor", false],
		hp: 130,
		hd: [20, 8],
		speed: "25 ft, swim 50 ft",
		scores: [14, 14, 14, 20, 15, 13],
		saves: ["", 6, "", 9, 9, ""],
		skills: "Arcana +9, History +9, Perception +10, Stealth +6",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		senses: "blindsight 30 ft, darkvision 120 ft",
		passive_perception: 20,
		languages: "telepathy 120 ft",
		challenge_rating: "11",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tentacles",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "Target is grappled (escape DC 14) if it is a Large or smaller creature. Until this grapple ends. Target is restrained and takes 15 (3d8+2) bludgeoning damage at the start of each of the morkoth's turns. Morkoth can't use its tentacles on another target.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The morkoth can breathe air and water."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The morkoth makes three attacks: two with its bite and one with its tentacles or three with its bite."
		}, {
			name: "Hypnosis",
			description: "The morkoth projects a 30-foot cone of magical energy. Each creature in that area must make a DC 17 Wisdom saving throw. On a failed save, the creature is charmed by the morkoth for 1 minute. While charmed in this way, the target tries to get as close to the morkoth as possible, using its actions to Dash until it is within 5 feet of the morkoth. A charmed target can repeat the saving throw at the end of each of its turns and whenever it takes damage, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature has advantage on saving throws against the morkoth's Hypnosis for 24 hours."
		}
		],
		reactions: [{
			name: "Spell Reflection",
			description: "If the morkoth makes a successful saving throw against a spell, or a spell attack misses it, the morkoth can choose another creature (including the spellcaster) it can see within 120 feet of it. The spell targets the chosen creature instead of the morkoth. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature."
		}
		],
		spells: [
			"The morkoth is an 11th-level spellcaster. Its spellcasting ability is Intelligence (save DC 17, +9 to hit with spell attacks). The morkoth has the following wizard spells prepared:",
			"Cantrips (at will): acid splash, mage hand, mending, ray of frost, shocking grasp",
			"1st level (4 slots): detect magic, identify, shield, witch bolt",
			"2nd level (3 slots): darkness, detect thoughts, shatter",
			"3rd level (3 slots): dispel magic, lightning bolt, sending",
			"4th level (3 slots): dimension door, Evard’s black tentacles",
			"5th level (3 slots): geas, scrying",
			"6th level (1 slot): chain lightning"
		],
	},
	"Mouth of Grolantor": {
		name: "Mouth of Grolantor",
		source: ["Volo's Guide", 149],
		size: "Huge",
		type: "giant (hill giant)",
		alignment: "chaotic evil",
		ac: [14, "Natural Armor", false],
		hp: 105,
		hd: [10, 12],
		speed: "50 ft",
		scores: [21, 10, 18, 5, 7, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +1",
		condition_immunities: "frightened",
		senses: "",
		passive_perception: 11,
		languages: "Giant",
		challenge_rating: "6",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Regen hit points equal to the damage dealt.",
		}, {
			name: "Fist",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Mouth of Madness",
			description: [
				"The giant is immune to confusion spells and similar magic. On each of its turns, the giant uses all its movement to move toward the nearest creature or whatever else it might perceive as food. Roll a d10 at the start of each of the giant’s turns to determine its action for that turn:",
				"1-3. The giant makes three attacks with its fists against one random target within its reach. If no other creatures are within its reach, the giant flies into a rage and gains advantage on all attack rolls until the end of its next turn.",
				"4-5. The giant makes one attack with its fist against every creature within its reach. If no other creatures are within its reach, the giant makes one fist attack against itself.",
				"6-7. The giant makes one attack with its bite against one random target within its reach. If no other creatures are within its reach, its eyes glaze over and it becomes stunned until the start of its next turn.",
				"8-10. The giant makes three attacks against one random target within its reach: one attack with its bite and two with its fists. If no other creatures are within its reach, the giant flies into a rage and gains advantage on all attack rolls until the end of its next turn."]
		}
		],
	},
	"Necromancer": {
		name: "Necromancer",
		source: ["Volo's Guide", 217],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [12, "", false],
		hp: 66,
		hd: [12, 8],
		speed: "30 ft",
		scores: [9, 14, 12, 17, 12, 11],
		saves: ["", "", "", 7, 5, ""],
		skills: "Arcana +7, History +7",
		damage_resistances: "necrotic",
		senses: "",
		passive_perception: 11,
		languages: "any four languages",
		challenge_rating: "9",
		attacks: [{
			name: "Withering Touch",
			ability: 4,
			damage: [2, 4, "necrotic"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Grim Harvest (1/Turn)",
			description: "When necromancer kills a creature that is neither a construct nor undead with a spell of 1st level or higher, the necromancer regains hit points equal to twice the spell's level, or three times if it is a necromancy spell."
		}
		],
		spells: [
			"The necromancer is a 12th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). The necromancer has the following wizard spells prepared:",
			"Cantrips (at will): chill touch, dancing lights, mage hand, mending",
			"1st level (4 slots):false life*, mage armor, ray of sickness*",
			"2nd level (3 slots): blindness/deafness*, ray of enfeeblement*, web",
			"3rd level (3 slots): animate dead*, bestow curse*, vampiric touch*",
			"4th level (3 slots): blight*, dimension door, stoneskin",
			"5th level (2 slots): Bigby’s hand, cloudkill",
			"6th level (1 slot): circle of death*",
			"*Necromancy spell of 1st level or higher"
		],
	},
	"Neogi": {
		name: "Neogi",
		source: ["Volo's Guide", 180],
		size: "Small",
		type: "aberration",
		alignment: "lawful evil",
		ac: [15, "Natural Armor", false],
		hp: 33,
		hd: [6, 6],
		speed: "30 ft, climb 30 ft",
		scores: [6, 16, 14, 13, 12, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +4, Perception +3",
		senses: "darkvision 60 ft",
		passive_perception: 13,
		languages: "Common, Deep Speech, Undercommon",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			dc: [14, "Con"],
			description: "Plus 14 (4d6) poison damage, and the target must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Mental Fortitude",
			description: "The neogi has advantage on saving throws against being charmed or frightened. and magic can't put the neogi to sleep."
		}, {
			name: "Spider Climb",
			description: "The neogi can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The neogi makes two attacks: one with its bite and one with its claws."
		}, {
			name: "Enslave (Recharges after a Short or Long Rest)",
			description: "The neogi targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the neogi for 1 day, or until the neogi dies or is more than 1 mile from the target. The charmed target obeys the neogi's commands and can't take reactions, and the neogi and the target can communicate telepathically with each other at a distance of up to 1 mile. Whenever the charmed target takes damage, it can repeat the saving throw, ending the effect on itself on a success."
		}
		],
	},
	"Neogi Hatchling": {
		name: "Neogi Hatchling",
		source: ["Volo's Guide", 179],
		size: "Tiny",
		type: "aberration",
		alignment: "lawful evil",
		ac: [11, "", false],
		hp: 7,
		hd: [3, 4],
		speed: "20 ft, climb 20 ft",
		scores: [3, 13, 10, 6, 10, 9],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			dc: [10, "Con"],
			description: "Plus 7 (2d6) poison damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		traits: [{
			name: "Mental Fortitude",
			description: "The hatchling has advantage on saving throws against being charmed or frightened, and magic can’t put the hatchling to sleep."
		}, {
			name: "Spider Climb",
			description: "The hatchling can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}
		],
	},
	"Neogi Master": {
		name: "Neogi Master",
		source: ["Volo's Guide", 180],
		size: "Medium",
		type: "aberration",
		alignment: "lawful evil",
		ac: [15, "Natural Armor", false],
		hp: 71,
		hd: [13, 6],
		speed: "30 ft, climb 30 ft",
		scores: [6, 16, 14, 16, 12, 18],
		saves: ["", "", "", 3, "", ""],
		skills: "Arcana +5, Deception +6, Intimidation +6, Perception +3, Persuasion +6",
		senses: "darkvision 120 ft (penetrates magical darkness)",
		passive_perception: 13,
		languages: "Common, Deep Speech, Undercommon, telepathy 30 ft",
		challenge_rating: "4",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			dc: [12, "Con"],
			description: "Plus 14 (4d6) poison damage, and the target must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Claws",
			ability: 2,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Mental Fortitude",
			description: "The neogi has advantage on saving throws against being charmed or frightened, and magic can’t put the neogi to sleep."
		}, {
			name: "Spider Climb",
			description: "The neogi can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The neogi makes two attacks: one with its bite and one with its claws."
		}, {
			name: "Enslave (Recharges after a Short or Long Rest)",
			description: "The neogi targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the neogi for 1 day, or until the neogi dies or is more than 1 mile from the target. The charmed target obeys the neogi's commands and can't take reactions, and the neogi and the target can communicate telepathically with each other at a distance of up to 1 mile. Whenever the charmed target takes damage, it can repeat the saving throw, ending the effect on itself on a success."
		}
		],
		spells: [
			"The neogi is a 7th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:",
			"Cantrips (at will): eldritch blast (range 300 ft, +4 bonus to each damage roll), guidance, mage hand, minor illusion, prestidigitation, vicious mockery",
			"1st—4th level (2 4th-level slots): arms of Hadar, counterspell, dimension door, fear, hold person, hunger of Hadar, invisibility, unseen servant"
		],
	},
	"Neothelid": {
		name: "Neothelid",
		source: ["Volo's Guide", 181],
		size: "Gargantuan",
		type: "aberration",
		alignment: "chaotic evil",
		ac: [16, "Natural Armor", false],
		hp: 325,
		hd: [21, 10],
		speed: "30 ft",
		scores: [27, 7, 21, 3, 16, 12],
		saves: ["", "", "", 1, 8, 6],
		senses: "blindsight 120 ft",
		passive_perception: 13,
		languages: "",
		challenge_rating: "13",
		attacks: [{
			name: "Tentacles",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			dc: [18, "Str"],
			description: "Plus 13 (3d8) psychic damage. If the target is a Large or smaller creature, it must succeed on a DC 18 Strength saving throw or be swallowed by the neothelid. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the neothelid, and it takes 35 (10d6) acid damage at the start of each of the neothelid’s turns. If the neothelid takes 30 damage or more on a single turn from a creature inside it, the neothelid must succeed on a DC 18 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the neothelid. If the neothelid dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone.",
		}
		],
		traits: [{
			name: "Creature Sense",
			description: "The neothelid is aware of the presence of creatures within 1 mile of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each creature’s Intelligence score, but can’t sense anything else about it. A creature protected by a mind blank spell, a nondetection spell, or similar magic can't be perceived in this manner."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The neothelid’s innate spellcasting ability is Wisdom (spell save DC 16). It can innately cast the following spells, requiring no components:",
				"At will: levitate",
				"1/day each: confusion, feeblemind, telekinesis"
			]
		}, {
			name: "Magic Resistance",
			description: "The neothelid has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Acid Breath (Recharges 5-6)",
			description: "The neothelid exhales acid in a 60-foot cone. Each creature in that area must make a DC 18 Dexterity saving throw, taking 35 (10d6) acid damage on a failed save, or half as much damage on a successful one.",
		}
		],
		spells: "levitate, confusion, feeblemind, telekinesis"
	},
	"Nilbog": {
		name: "Nilbog",
		source: ["Volo's Guide", 182],
		size: "Small",
		type: "humanoid (goblinoid)",
		alignment: "chaotic evil",
		ac: [13, "Leather Armor", false],
		hp: 7,
		hd: [2, 6],
		speed: "30 ft",
		scores: [8, 14, 10, 10, 8, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +6",
		senses: "darkvision 60 ft",
		passive_perception: 9,
		languages: "Common, Goblin",
		challenge_rating: "1",
		attacks: [{
			name: "Fool's Scepter",
			ability: 2,
			damage: [1, 6, "bludgeoning"],
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
			name: "Innate Spellcasting",
			description: [
				"The nilbog’s innate spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components:",
				"At will: mage hand, Tasha’s hideous laughter, vicious mockery 1/day: confusion"
			]
		}, {
			name: "Nilbogism",
			description: "Any creature that attempts to damage the nilbog must first succeed on a DC 12 Charisma saving throw or be charmed until the end of the creature’s next turn. A creature charmed in this way must use its action praising the nilbog. The nilbog can’t regain hit points, including through magical healing, except through its Reversal of Fortune reaction."
		}, {
			name: "Nimble Escape",
			description: "The nilbog can take the Disengage or Hide action as a bonus action on each of its turns."
		}
		],
		reactions: [{
			name: "Reversal of Fortune",
			description: "In response to another creature dealing damage to the nilbog, the nilbog reduces the damage to 0 and regains 1d6 hit points.",
		}
		],
	},
	"Orc Blade of Ilneval": {
		name: "Orc Blade of Ilneval",
		source: ["Volo's Guide", 183],
		size: "Medium",
		type: "humanoid (orc)",
		alignment: "chaotic evil",
		ac: [18, "Chain Mail", true],
		hp: 60,
		hd: [8, 8],
		speed: "30 ft",
		scores: [17, 11, 17, 10, 12, 14],
		saves: ["", "", "", 3, "", ""],
		skills: "Insight +3, Intimidation +4, Perception +3",
		senses: "darkvision 60 ft",
		passive_perception: 13,
		languages: "Common, Orc",
		challenge_rating: "4",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 14 (2d10+3) slashing damage.",
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
		}
		],
		traits: [{
			name: "Aggressive",
			description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
		}, {
			name: "Foe Smiter of Ilneval",
			description: "The orc deals an extra die of damage when it hits with a longsword attack (included in the attack)."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The orc makes two melee attacks with its longsword or two ranged attacks with its javelins. If Ilneval’s Command is available to use, the orc can use it after these attacks."
		}, {
			name: "Ilneval's Command (Recharges 4-6)",
			description: "Up to three allied orcs within 120 feet of this orc that can hear it can use their reactions to each make one weapon attack."
		}
		],
	},
	"Orc Claw of Luthic": {
		name: "Orc Claw of Luthic",
		source: ["Volo's Guide", 183],
		size: "Medium",
		type: "humanoid (orc)",
		alignment: "chaotic evil",
		ac: [14, "Hide Armor", false],
		hp: 45,
		hd: [6, 8],
		speed: "30 ft",
		scores: [14, 15, 16, 10, 15, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +2, Medicine +4, Survival +4",
		senses: "darkvision 60 ft",
		passive_perception: 12,
		languages: "Common, Orc",
		challenge_rating: "2",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Aggressive",
			description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The orc makes two claw attacks, or four claw attacks if it has fewer than half of its hit points remaining."
		}
		],
		spells: [
			"The orc is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The orc has the following cleric spells prepared:",
			"Cantrips (at will): guidance, mending, resistance, thaumaturgy",
			"1st level (4 slots): bane, cure wounds, guiding bolt",
			"2nd level (3 slots): augury, warding bond",
			"3rd level (2 slots): bestow curse, create food and water"
		],
	},
	"Orc Hand of Yurtrus": {
		name: "Orc Hand of Yurtrus",
		source: ["Volo's Guide", 184],
		size: "Medium",
		type: "humanoid (orc)",
		alignment: "chaotic evil",
		ac: [12, "Hide Armor", false],
		hp: 30,
		hd: [4, 8],
		speed: "30 ft",
		scores: [12, 11, 16, 11, 14, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +2, Intimidation +1, Medicine +4, Religion +2",
		senses: "darkvision 60 ft",
		passive_perception: 12,
		languages: "understands Common and Orc but can't speak",
		challenge_rating: "2",
		attacks: [{
			name: "Touch of the White Hand",
			ability: 1,
			damage: [2, 8, "necrotic"],
			range: "Melee (5 ft)",
			modifiers: ["", "", false],
			description: "",
		}
		],
		traits: [{
			name: "Aggressive",
			description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
		}
		],
		spells: [
			"The orc is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It requires no verbal components to cast its spells. The orc has the following cleric spells prepared:",
			"Cantrips (at-will): guidance, mending, resistance, thaumaturgy",
			"1st level (4 slots): bane, detect magic, inflict wounds, protection from evil and good",
			"2nd level (3 slots): blindness/deafness, silence"
		],
	},
	"Orc Nurtured One of Yurtrus": {
		name: "Orc Nurtured One of Yurtrus",
		source: ["Volo's Guide", 184],
		size: "Medium",
		type: "humanoid (orc)",
		alignment: "chaotic evil",
		ac: [9, "", false],
		hp: 30,
		hd: [4, 8],
		speed: "30 ft",
		scores: [15, 8, 16, 7, 11, 7],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: 10,
		languages: "Common, Orc",
		challenge_rating: "1/2",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 2 (1d4) necrotic damage.",
		}
		],
		traits: [{
			name: "Aggressive",
			description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
		}, {
			name: "Corrupted Carrier",
			description: "When the orc is reduced to 0 hit points, it explodes, and any creature within 10 feet of it must make a DC 13 Constitution saving throw. On a failed save, the creature takes 14 (4d6) poison damage and becomes poisoned. On a success, the creature takes half as much damage and isn‘t poisoned. A creature poisoned by this effect can repeat the save at the end of each of its turn, ending the effect on itself on a success. While poisoned by this effect, a creature can’t regain hit points.",
		}, {
			name: "Nurtured One of Yurtrus",
			description: "The orc has advantage on saving throws against poison and disease."
		}
		],
		actions: [{
			name: "Corrupted Vengeance",
			description: "The orc reduces itself to 0 hit points, triggering its Corrupted Carrier trait."
		}
		],
	},
	"Orc Red Fang of Shargaas": {
		name: "Orc Red Fang of Shargaas",
		source: ["Volo's Guide", 185],
		size: "Medium",
		type: "humanoid (orc)",
		alignment: "chaotic evil",
		ac: [15, "Studded Leather", false],
		hp: 52,
		hd: [8, 8],
		speed: "30 ft",
		scores: [11, 16, 15, 9, 11, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +1, Perception +2, Stealth +5",
		senses: "darkvision 60 ft",
		passive_perception: 12,
		languages: "Common, Orc",
		challenge_rating: "3",
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [3, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Dart",
			ability: 2,
			damage: [3, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Cunning Action",
			description: "On each of its turns, the orc can use a bonus action to take the Dash, Disengage, or Hide action."
		}, {
			name: "Hand of Shargaas",
			description: "The orc deals an 2 extra dice of damage when it hits a target with a weapon attack (included in its attacks)."
		}, {
			name: "Shargaas's Sight",
			description: "Magical darkness doesn’t impede the orc’s darkvision."
		}, {
			name: "Slayer",
			description: "In the first round of a combat, the orc has advantage on attack rolls against any creature that hasn’t taken a turn yet. If the orc hits a creature that round who was surprised, the hit is automatically a critical hit."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The orc makes two scimitar or dart attacks."
		}, {
			name: "Veil of Shargaas (Recharges after a Short or Long Rest)",
			description: "The orc casts darkness without any components. Wisdom is its spellcasting ability."
		}
		],
	},
	"Ox": {
		name: "Ox",
		source: ["Volo's Guide", 207],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [10, "", false],
		hp: 15,
		hd: [2, 10],
		speed: "30 ft",
		scores: [18, 10, 14, 2, 10, 4],
		saves: ["", "", "", "", "", ""],
		senses: "",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the ox moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage.",
		}, {
			name: "Beast of Burden",
			description: "The oxen is considered to be a Huge animal for the purposes of determining its carrying capacity."
		}
		],
	},
	"Quetzalcoatlus": {
		name: "Quetzalcoatlus",
		source: ["Volo's Guide", 140],
		size: "Huge",
		type: "beast",
		alignment: "unaligned",
		ac: [13, "Natural Armor", false],
		hp: 30,
		hd: [4, 12],
		speed: "10 ft, fly 80 ft",
		scores: [15, 13, 13, 2, 10, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		senses: "",
		passive_perception: 12,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Dive Attack",
			description: "If the quetzalcoatlus is flying and dives at least 30 feet toward a target and then hits with a bite attack, the attack deals an extra 10 (3d6) damage to the target.",
		}, {
			name: "Flyby",
			description: "The quetzalcoatlus doesn’t provoke an opportunity attack when it flies out of an enemy’s reach."
		}
		],
	},
	"Quickling": {
		name: "Quickling",
		source: ["Volo's Guide", 187],
		size: "Tiny",
		type: "fey",
		alignment: "chaotic evil",
		ac: [16, "", false],
		hp: 10,
		hd: [3, 4],
		speed: "120 ft",
		scores: [4, 23, 13, 10, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +8, Perception +5, Sleight of Hand +8, Stealth +8",
		senses: "darkvision 60 ft",
		passive_perception: 15,
		languages: "Common, Sylvan",
		challenge_rating: "1",
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
			name: "Blurred Movement",
			description: "Attack rolls against the quickling have disadvantage unless the quickling is incapacitated or restrained."
		}, {
			name: "Evasion",
			description: "If the quickling is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The quickling makes three dagger attacks."
		}
		],
	},
	"Red Guard Drake": {
		name: "Red Guard Drake",
		source: ["Volo's Guide", 158],
		size: "Medium",
		type: "dragon",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 52,
		hd: [7, 8],
		speed: "30 ft, climb 30 ft",
		scores: [16, 11, 16, 4, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		damage_resistances: "fire",
		senses: "darkvision 60 ft",
		passive_perception: 12,
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
		],
	},
	"Redcap": {
		name: "Redcap",
		source: ["Volo's Guide", 188],
		size: "Small",
		type: "fey",
		alignment: "chaotic evil",
		ac: [13, "Natural Armor", false],
		hp: 45,
		hd: [6, 6],
		speed: "25 ft",
		scores: [18, 13, 18, 10, 12, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +6, Perception +3",
		senses: "darkvision 60 ft",
		passive_perception: 13,
		languages: "Common, Sylvan",
		challenge_rating: "3",
		attacks: [{
			name: "Wicked Sickle",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Iron Boots",
			description: "While moving, the redcap has disadvantage on Dexterity (Stealth) checks."
		}, {
			name: "Outsize Strength",
			description: "While grappling, the redcap is considered to be Medium. Also, wielding a heavy weapon doesn’t impose disadvantage on its attack rolls."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The redcap makes three attacks with its wicked sickle."
		}, {
			name: "Ironbound Pursuit",
			description: "The redcap moves up to its speed to a creature it can see and kicks with its iron boots. The target must succeed on a DC 14 Dexterity saving throw or take 20 (3d10+4) bludgeoning damage and be knocked prone.",
		}
		],
	},
	"Rothé": {
		name: "Rothé",
		source: ["Volo's Guide", 207],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [10, "", false],
		hp: 15,
		hd: [2, 10],
		speed: "30 ft",
		scores: [18, 10, 14, 2, 10, 4],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 30 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the rothé moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage.",
		}
		],
	},
	"Sea Spawn": {
		name: "Sea Spawn",
		source: ["Volo's Guide", 189],
		size: "Medium",
		type: "humanoid",
		alignment: "neutral evil",
		ac: [11, "Natural Armor", false],
		hp: 32,
		hd: [5, 8],
		speed: "20 ft, swim 30 ft",
		scores: [15, 8, 15, 6, 10, 8],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 120 ft",
		passive_perception: 10,
		languages: "understands Aquan and Common but can't speak",
		challenge_rating: "1",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Poison Quills",
			ability: 1,
			damage: [1, 6, "poison"],
			range: "Melee (5 ft)",
			dc: [12, "Con"],
			description: "Target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Tentacle",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			dc: [12, "Escape"],
			description: "Target is grappled (escape DC 12) if it is a Medium or smaller creature. Until this grapple ends, the sea spawn can't use this tentacle on another target.",
		}
		],
		traits: [{
			name: "Limited Amphibiousness",
			description: "The sea spawn can breathe air and water, but needs to be submerged in the sea at least once a day for 1 minute to avoid suffocating."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The sea spawn makes three attacks: two unarmed strikes and one with its Piscine Anatomy."
		}, {
			name: "Piscine Anatomy",
			description: "The sea spawn has one or more of the following attack options, provided it has the appropriate anatomy: Bite, Poison Quills, Tentacle"
		}
		],
	},
	"Shadow Mastiff": {
		name: "Shadow Mastiff",
		source: ["Volo's Guide", 190],
		size: "Medium",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [12, "", false],
		hp: 33,
		hd: [6, 8],
		speed: "40 ft",
		scores: [16, 14, 13, 5, 12, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +6",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks while in dim light or darkness",
		senses: "darkvision 60 ft",
		passive_perception: 13,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			dc: [13, "Str"],
			description: "If target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
		}
		],
		traits: [{
			name: "Ethereal Awareness",
			description: "The shadow mastiff can see ethereal creatures and objects."
		}, {
			name: "Keen Hearing and Smell",
			description: "The shadow mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}, {
			name: "Shadow Blend",
			description: "While in dim light or darkness, the shadow mastiff can use a bonus action to become invisible, along with anything it is wearing or carrying. The invisibility lasts until the shadow mastiff uses a bonus action to end it or until the shadow mastiff attacks, is in bright light, or is incapacitated."
		}, {
			name: "Sunlight Weakness",
			description: "While in bright light created by sunlight, the shadow mastiff has disadvantage on attack rolls, ability checks, and saving throws."
		}
		],
	},
	"Shoosuva": {
		name: "Shoosuva",
		source: ["Volo's Guide", 137],
		size: "Large",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [14, "Natural Armor", false],
		hp: 110,
		hd: [13, 10],
		speed: "40 ft",
		scores: [18, 13, 17, 7, 14, 9],
		saves: ["", 4, 6, "", 5, ""],
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities: "poison",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: 12,
		languages: "Abyssal, Gnoll, telepathy 120 ft",
		challenge_rating: "8",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail Stinger",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (15 ft)",
			dc: [14, "Con"],
			description: "Target must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned, the target is also paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		traits: [{
			name: "Rampage",
			description: "When it reduces a creature to 0 hit points with a melee attack on its turn, the shoosuva can take a bonus action to move up to half its speed and make a bite attack."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The shoosuva makes two attacks: one with its bite and one with its tail stinger."
		}
		],
	},
	"Slithering Tracker": {
		name: "Slithering Tracker",
		source: ["Volo's Guide", 191],
		size: "Medium",
		type: "ooze",
		alignment: "chaotic evil",
		ac: [14, "", false],
		hp: 32,
		hd: [5, 8],
		speed: "30 ft, climb 30 ft, swim 30 ft",
		scores: [16, 19, 15, 10, 14, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +8",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_vulnerabilities: "cold, fire",
		condition_immunities: "blinded, deafened, exhaustion, grappled, paralyzed, petrified, prone, restrained, unconscious",
		senses: "blindsight 120 ft",
		passive_perception: 12,
		languages: "understands languages it knew in its previous form but can't speak",
		challenge_rating: "3",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [1, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Ambusher",
			description: "In the first round of a combat, the slithering tracker has advantage on attack rolls against any creature it surprised."
		}, {
			name: "Damage Transfer",
			description: "While grappling a creature, the slithering tracker takes only haIf the damage dealt to it, and the creature it is grappling takes the other half."
		}, {
			name: "False Appearance",
			description: "While the slithering tracker remains motionless, it is indistinguishable from a puddle, unless an observer succeeds on a DC 18 Intelligence (Investigation) check."
		}, {
			name: "Keen Tracker",
			description: "The slithering tracker has advantage on Wisdom checks to track prey."
		}, {
			name: "Liquid Form",
			description: "The slithering tracker can enter an enemy’s space and stop there. It can also move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name: "Spider Climb",
			description: "The slithering tracker can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Watery Stealth",
			description: "While underwater, the slithering tracker has advantage on Dexterity (Stealth) checks made to hide, and it can take the Hide action as a bonus action."
		}
		],
		actions: [{
			name: "Life Leech",
			description: "One Large or smaller creature that the slithering tracker can see within 5 feet of it must succeed on a DC 13 Dexterity saving throw or be grappled (escape DC 13). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. In addition, the grappled target takes 16 (3d10) necrotic damage at the start of each of its turns. The slithering tracker can grapple only one target at a time."
		}
		],
	},
	"Spawn of Kyuss": {
		name: "Spawn of Kyuss",
		source: ["Volo's Guide", 192],
		size: "Medium",
		type: "undead",
		alignment: "chaotic evil",
		ac: [10, "", false],
		hp: 76,
		hd: [9, 8],
		speed: "30 ft",
		scores: [16, 11, 18, 5, 7, 3],
		saves: ["", "", "", "", 1, ""],
		damage_immunities: "poison",
		condition_immunities: "exhaustion, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: 8,
		languages: "understands the languages it knew in life but can't speak",
		challenge_rating: "5",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) necrotic damage.",
		}
		],
		traits: [{
			name: "Regeneration",
			description: "The spawn of Kyuss regains 10 hit points at the start of its turn if it has at least 1 hit point and isn’t in sunlight or a body of running water. If the spawn takes acid, fire, or radiant damage, this trait doesn’t function at the start of the spawn's next turn. The spawn is destroyed only if it starts its turn with 0 hit points and doesn’t regenerate."
		}, {
			name: "Worms",
			description: "If the spawn of Kyuss is targeted by an effect that cures disease or removes a curse, all the worms infesting it wither away, and it loses its Burrowing Worm action."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The spawn of Kyuss makes two attacks with its claws and uses Burrowing Worm."
		}, {
			name: "Burrowing Worm",
			description: "A worm launches from the spawn of Kyuss at one humanoid that the spawn can see within 10 feet of it. The worm latches onto the target’s skin unless the target succeeds on a DC 11 Dexterity saving throw. The worm is a Tiny undead with AC 6, 1 hit point, a 2 (-4) in every ability score, and a speed of 1 foot. While on the target’s skin, the worm can be killed by normal means or scraped off using an action (the spawn can use this action to launch a scraped-off worm at a humanoid it can see within 10 feet of the worm). Otherwise, the worm burrows under the target’s skin at the end of the target's next turn, dealing l piercing damage to it. At the end of each of its turns thereafter, the target takes 7 (2d6) necrotic damage per worm infesting it (maximum of 10d6). A worm-infested target dies if it drops to 0 hit points, then rises 10 minutes later as a spawn of Kyuss. If a worm-infested creature is targeted by an effect that cures disease or removes a curse, all the worms infesting it wither away."
		}
		],
	},
	"Stegosaurus": {
		name: "Stegosaurus",
		source: ["Volo's Guide", 140],
		size: "Huge",
		type: "beast",
		alignment: "unaligned",
		ac: [13, "Natural Armor", false],
		hp: 76,
		hd: [8, 12],
		speed: "40 ft",
		scores: [20, 9, 17, 2, 11, 5],
		saves: ["", "", "", "", "", ""],
		senses: "",
		passive_perception: 10,
		languages: "",
		challenge_rating: "4",
		attacks: [{
			name: "Tail",
			ability: 1,
			damage: [6, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
	},
	"Stench Kow": {
		name: "Stench Kow",
		source: ["Volo's Guide", 207],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [10, "", false],
		hp: 15,
		hd: [2, 10],
		speed: "30 ft",
		scores: [18, 10, 14, 2, 10, 4],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold, fire, poison",
		senses: "darkvision 60 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the kow moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage.",
		}, {
			name: "Stench",
			description: "Any creature other than a stench kow that starts its turn within 5 feet of the stench kow must succeed on a DC 26 Constitution saving throw or be poisoned until the start of the creature’s next turn. On a successful saving throw, the creature is immune to the stench of all stench kows for 1 hour."
		}
		],
	},
	"Stone Giant Dreamwalker": {
		name: "Stone Giant Dreamwalker",
		source: ["Volo's Guide", 150],
		size: "Huge",
		type: "giant (stone giant)",
		alignment: "chaotic neutral",
		ac: [18, "Natural Armor", false],
		hp: 161,
		hd: [14, 12],
		speed: "40 ft",
		scores: [23, 14, 21, 10, 8, 12],
		saves: ["", 6, 9, "", 3, ""],
		skills: "Athletics +14, Perception +3",
		condition_immunities: "charmed, frightened",
		senses: "darkvision 60 ft",
		passive_perception: 13,
		languages: "Common, Giant",
		challenge_rating: "10",
		attacks: [{
			name: "Greatclub",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			dc: [17, "Con"],
			description: "If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone.",
		}
		],
		traits: [{
			name: "Dreamwalker's Charm",
			description: "An enemy that starts its turn within 30 feet of the giant must make a DC 13 Charisma saving throw, provided that the giant isn’t incapacitated. On a failed save, the creature is charmed by the giant. A creature charmed in this way can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it succeeds on the saving throw, the creature is immune to this giant’s Dreamwalker's Charm for 24 hours."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The giant makes two attacks with its greatclub."
		}, {
			name: "Petrifying Touch",
			description: "The giant touches one Medium or smaller creature within 10 feet of it that is charmed by it. The target must make a DC 17 Constitution saving throw. On a failed save, the target becomes petrified, and the giant can adhere the target to its stony body. Greater restoration spells and other magic that can undo petrification have no effect on a petrified creature on the giant unless the giant is dead, in which case the magic works normally, freeing the petrified creature as well as ending the petrified condition on it."
		}
		],
	},
	"Storm Giant Quintessent": {
		name: "Storm Giant Quintessent",
		source: ["Volo's Guide", 151],
		size: "Huge",
		type: "giant (storm giant)",
		alignment: "chaotic good",
		ac: [12, "", false],
		hp: 230,
		hd: [20, 12],
		speed: "50 ft, fly 50 ft (hover), swim 50 ft",
		scores: [29, 14, 20, 17, 30, 19],
		saves: [14, "", 10, "", 10, 9],
		skills: "Arcana +8, History +8, Perception +10",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities: "lightning, Thunder",
		senses: "truesight 60 ft",
		passive_perception: 20,
		languages: "Common, Giant",
		challenge_rating: "16",
		attacks: [{
			name: "Lightning Sword",
			ability: 1,
			damage: [9, 6, "lightning"],
			range: "Melee (15 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The giant can breathe air and water."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The giant makes two Lightning Sword attacks or uses Wind Javelin twice."
		}, {
			name: "Windjavelin",
			description: "The giant coalesces wind into a javeIin-like form and hurls it at a creature it can see within 600 feet of it. The javelin is considered a magic weapon and deals 19 (3d6+9) piercing damage to the target, striking unerringly. The javelin disappears after it hits.",
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The giant can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature’s turn. The giant regains spent legendary actions at the start of its turn."
		}, {
			name: "Gust",
			description: "The giant targets a creature it can see within 60 feet of it and creates a magical gust of wind around it. The target must succeed on a DC 18 Strength saving throw or be pushed up to 20 feet in any horizontal direction the giant chooses."
		}, {
			name: "Thunderbolt (2 Actions)",
			description: "The giant hurls a Thunderbolt at a creature it can see within 600 feet of it. The target must make a DC 18 Dexterity saving throw, taking 22 (4d10) Thunder damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "One with the Storm (3 Actions)",
			description: "The giant vanishes, dispersing itself into the storm surrounding its lair. The giant can end this effect at the start of any of its turns, becoming a giant once more and appearing in any location it chooses within its lair. While dispersed, the giant can't take any actions other than lair actions, and it can’t be targeted by attacks, spells, or other effects. The giant can’t use this ability outside its lair, nor can it use this ability if another creature is using a control weather spell or similar magic to quell the storm."
		}
		],
	},
	"Swarm of Cranium Rats": {
		name: "Swarm of Cranium Rats",
		source: ["Volo's Guide", 133],
		size: "Medium",
		type: "swarm of Tiny beasts",
		alignment: "lawful evil",
		ac: [12, "", false],
		hp: 36,
		hd: [8, 8],
		speed: "30 ft",
		scores: [9, 14, 10, 15, 11, 14],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgenoning, piercing, slashing",
		condition_immunities: "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
		senses: "darkvision 30 ft",
		passive_perception: 10,
		languages: "telepathy 30 ft",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [4, 6, "piercing"],
			range: "Melee (0 ft)",
			modifiers: ["", "", false],
			description: "Or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer.",
		}
		],
		traits: [{
			name: "Illumination",
			description: "As a bonus action, the swarm can shed dim light from its brains in a 5-foot radius, increase the illumination to bright light in a 5-20-foot radius (and dim light for an additional number of feet equal to the chosen radius), or extinguish the light."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The swarm's innate spellcasting ability is Intelligence (spell save DC 13). As long as it has more than half of its hit points, it can innately cast the following spells, requiring no components::",
				"At will: command, comprehend languages, detect thoughts",
				"1/day each: confusion, dominate monster"
			]
		}, {
			name: "Swarm",
			description: "The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can’t regain hit points or gain temporary hit points."
		}, {
			name: "Telepathic Shroud",
			description: "The swarm is immune to any effect that would sense its emotions or read its thoughts. as well as to all divination spells."
		}
		],
	},
	"Swarm of Rot Grubs": {
		name: "Swarm of Rot Grubs",
		source: ["Volo's Guide", 208],
		size: "Medium",
		type: "swarm of Tiny beasts",
		alignment: "unaligned",
		ac: [8, "", false],
		hp: 22,
		hd: [5, 8],
		speed: "5 ft, climb 5 ft",
		scores: [2, 7, 10, 1, 2, 1],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "piercing, slashing",
		condition_immunities: "charmed, frightened, grappled, paralyzed, petrified, prone, restrained",
		senses: "blindsight 10 ft",
		passive_perception: 6,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bites",
			ability: 3,
			damage: [1, 4, "rot grubs"],
			range: "Melee (0 ft)",
			modifiers: [-2, "", false],
			description: "At the start of each of the target’s turns, the target takes 1d6 piercing damage per rot grub infesting it. Applying fire to the bite wound before the end of the target's next turn deals 1 fire damage to the target and kills these rot grubs. After this time, these rot grubs are too far under the skin to be burned. If a target infested by rot grubs ends its turn with 0 hit points, it dies as the rot grubs burrow into its heart and kill it. Any effect that cures disease kills all rot grubs infesting the target.",
		}
		],
		traits: [{
			name: "Swarm",
			description: "The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny maggot. The swarm can’t regain hit points or gain temporary hit points."
		}
		],
	},
	"Swashbuckler": {
		name: "Swashbuckler",
		source: ["Volo's Guide", 217],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any non-lawful alignment",
		ac: [17, "Leather Armor", false],
		hp: 66,
		hd: [12, 8],
		speed: "30 ft",
		scores: [12, 18, 12, 14, 11, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +8, Athletics +5, Persuasion +6",
		senses: "",
		passive_perception: 10,
		languages: "any one language (usually Common)",
		challenge_rating: "3",
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
			name: "Rapier",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Lightfooted",
			description: "The swashbuckler can take the Dash or Disengage action as a bonus action on each of its turns."
		}, {
			name: "Suave Defense",
			description: "While the swashbuckler is wearing light or no armor and wielding no shield, its AC includes its Charisma modifier."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The swashbuckler makes three attacks: one with a dagger and two with its rapier."
		}
		],
	},
	"Tanarukk": {
		name: "Tanarukk",
		source: ["Volo's Guide", 186],
		size: "Medium",
		type: "fiend (demon, orc)",
		alignment: "chaotic evil",
		ac: [14, "Natural Armor", false],
		hp: 95,
		hd: [10, 8],
		speed: "30 ft",
		scores: [18, 13, 20, 9, 9, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +2, Perception +2",
		damage_resistances: "fire, poison",
		senses: "darkvision 60 ft",
		passive_perception: 12,
		languages: "Abyssal, Common, Orc",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Aggressive",
			description: "As a bonus action, the tanarukk can move up to its speed toward a hostile creature that it can see."
		}, {
			name: "Magic Resistance",
			description: "The tanarukk has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The tanarukk makes two attacks: one with its bite and one with its greatsword."
		}
		],
		reactions: [{
			name: "Unbridled Fury",
			description: "In response to being hit by a melee attack, the tanarukk can make one melee weapon attack with advantage against the attacker."
		}
		],
	},
	"Thorny": {
		name: "Thorny",
		source: ["Volo's Guide", 197],
		size: "Medium",
		type: "plant",
		alignment: "neutral",
		ac: [14, "Natural Armor", false],
		hp: 27,
		hd: [5, 8],
		speed: "30 ft",
		scores: [13, 12, 13, 2, 10, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +3",
		damage_resistances: "lightning, piercing",
		senses: "darkvision 60 ft",
		passive_perception: 14,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Plant Camouflage ",
			description: "The thorny has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring plant life."
		}, {
			name: "Regeneration",
			description: "The thorny regains 5 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn’t function at the start of the thorny’s next turn. The thorny dies only if it starts its turn with 0 hit points and doesn’t regenerate."
		}
		],
	},
	"Tlincalli": {
		name: "Tlincalli",
		source: ["Volo's Guide", 193],
		size: "Large",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [15, "Natural Armor", false],
		hp: 85,
		hd: [10, 10],
		speed: "40 ft",
		scores: [16, 13, 16, 8, 12, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +4, Survival +4",
		senses: "darkvision 60 ft",
		passive_perception: 13,
		languages: "Tlincalli",
		challenge_rating: "5",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d10+3) slashing damage.",
		}, {
			name: "Spiked Chain",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (10 ft)",
			dc: [11, "Escape"],
			description: "Target is grappled (escape DC 11) if it is a Large or smaller creature. Until this grapple ends, the target is restrained, and the tlincalli can’t use the spiked chain against another target.",
		}, {
			name: "Sting",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			dc: [14, "Con"],
			description: "Plus 14 (4d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned for 1 minute. If it fails the saving throw by 5 or more, the target is also paralyzed while poisoned. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The tlincalli makes two attacks: one with its longsword or spiked chain, and one with its sting."
		}
		],
	},
	"Transmuter": {
		name: "Transmuter",
		source: ["Volo's Guide", 218],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [12, "", false],
		hp: 40,
		hd: [9, 8],
		speed: "30 ft",
		scores: [9, 14, 11, 17, 12, 11],
		saves: ["", "", "", 6, 4, ""],
		skills: "Arcana +6, History +6",
		senses: "",
		passive_perception: 11,
		languages: "any four languages",
		challenge_rating: "5",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 3 (1d8-1) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Transmuter's Stone",
			description: [
				"The transmuter carries a magic stone it crafted that grants its bearer one of the following effects:",
				"Darkvision out to a range of 60 feet",
				"An extra 10 feet of speed while the bearer is unencumbered",
				"Proficiency with Constitution saving throws",
				"Resistance to acid, cold, fire, lightning, or Thunder damage (transmuter’s choice whenever the transmuter chooses this benefit)",
				"If the transmuter has the stone and casts a transmutation spell of 1st level or higher, it can change the effect of the stone."
			]
		}
		],
		spells: [
			"The transmuter is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The transmuter has the following wizard spells prepared:",
			"Cantrips (at will): light, mending, prestidigitation, ray of frost ",
			"1st level (4 slots): chromatic orb, expeditious retreat*, mage armor",
			"2nd level (3 slots): alter self*, hold person, knock* ",
			"3rd level (3 slots): blink*, fireball, slow*",
			"4th level (3 slots): polymorph*, stoneskin ",
			"5th level (1 slot): telekinesis*",
			"*Transmutation spell of 1st level or higher"
		],
	},
	"Trapper": {
		name: "Trapper",
		source: ["Volo's Guide", 194],
		size: "Large",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [13, "Natural Armor", false],
		hp: 85,
		hd: [10, 10],
		speed: "10 ft, climb 10 ft",
		scores: [17, 10, 17, 2, 13, 4],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +2",
		senses: "blindsight 30 ft, darkvision 60 ft",
		passive_perception: 11,
		languages: "",
		challenge_rating: "3",
		attacks: [{
			name: "",
			ability: 1,
			damage: [0, 0, ""],
			range: "",
			description: "",
		}
		],
		actions: [{
			name: "Smother",
			description: "One Large or smaller creature within 5 feet of the trapper must succeed on a DC 14 Dexterity saving throw or be grappled (escape DC 14). Until the grapple ends, the target takes 17 (4d6+3) bludgeoning damage plus 3 (1d6) acid damage at the start of each of its turns. While grappled in this way, the target is restrained, blinded, and at risk of suffocating. The trapper can smother only one creature at a time.",
		}
		],
		traits: [{
			name: "Fake Appearance",
			description: "While the trapper is attached to a ceiling, floor, or wall and remains motionless, it is almost indistinguishable from an ordinary section of ceiling, floor, or wall. A creature that can see it and succeeds on a DC 20 Intelligence (investigation) or Intelligence (Nature) check can discern its presence."
		}, {
			name: "Spider Climb",
			description: "The trapper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}
		],
	},
	"Ulitharid": {
		name: "Ulitharid",
		source: ["Volo's Guide", 175],
		size: "Large",
		type: "aberration",
		alignment: "lawful evil",
		ac: [15, "Breastplate", false],
		hp: 127,
		hd: [17, 10],
		speed: "30 ft",
		scores: [15, 12, 15, 21, 19, 21],
		saves: ["", "", "", 9, 8, 9],
		skills: "Arcana +9, Insight +8, Perception +8, Stealth +5",
		senses: "darkvision 120 ft",
		passive_perception: 18,
		languages: "Deep Speech, Undercommon, telepathy 2 miles",
		challenge_rating: "9",
		attacks: [{
			name: "Tentacles",
			ability: 1,
			damage: [4, 10, "psychic"],
			range: "Melee (10 ft)",
			description: "If the target is Large or smaller, it is grappled (escape DC 14) and must succeed on a DC 17 Intelligence saving throw or be stunned until this grapple ends.",
		}, {
			name: "Extract Brain",
			ability: 1,
			damage: [10, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must be incapacitated and grappled by the ulitharid. If this damage reduces the target to 0 hit points, the ulitharid kills the target by extracting and devouring its brain.",
		}
		],
		traits: [{
			name: "Creature Sense",
			description: "The ulitharid is aware of the presence of creatures within 2 miles of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each creature’s intelligence score, but can't sense anything else about it. A creature protected by a mind blank spell, a nondetection spell, or similar magic can’t be perceived in this manner."
		}, {
			name: "Magic Resistance",
			description: "The ulitharid has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Psionic Hub",
			description: "If an elder brain establishes a psychic link with the ulitharid, the elder brain can form a psychic link with any other creature the ulitharid can detect using its Creature Sense. Any such link ends if the creature falls outside the telepathy ranges of both the ulitharid and the elder brain. The ulitharid can maintain its psychic link with the elder brain regardless of the distance between them, so long as they are both on the same plane of existence. lithe ulitharid is more than 5 miles away from the elder brain, it can end the psychic link at any time (no action required)."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The ulitharid’s innate spellcasting ability is Intelligence (spell save DC 17). It can innately cast the following spells, requiring no components:",
				"At will: detect thoughts, levitate",
				"1/day each: confusion, dominate monster, eyebite, feeblemind, mass suggestion, plane shift (self only), project image, scrying, telekinesis"
			]
		}
		],
		actions: [{
			name: "Mind Blast (Recharge 5-6)",
			description: "The ulitharid magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 17 Intelligence saving throw or take 31 (4d12+5) psychic damage and be stunned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
	},
	"Vargouille": {
		name: "Vargouille",
		source: ["Volo's Guide", 195],
		size: "Tiny",
		type: "fiend",
		alignment: "chaotic evil",
		ac: [12, "", false],
		hp: 13,
		hd: [3, 4],
		speed: "5 ft, fly 40 ft",
		scores: [6, 14, 14, 4, 7, 2],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison",
		condition_immunities: "Poisoned",
		senses: "darkvision 60 ft",
		passive_perception: 8,
		languages: "understands Abyssal, Infernal, and any languages it knew before becoming a vargouille but can't speak",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [3, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) poison damage.",
		}
		],
		actions: [{
			name: "Kiss ",
			description: "The vargouille kisses one incapacitated humanoid within 5 feet of it. The target must succeed on a DC 12 Charisma saving throw or become cursed. The cursed target loses 1 point of Charisma after each hour, as its head takes on fiendish aspects. The curse doesn’t advance while the target is in sunlight or the area of a daylight spell; don’t count that time. When the cursed target’s Charisma becomes 2, it dies, and its head tears from its body and becomes a new vargouille. Casting remove curse, greater restoration, or a similar spell on the target before the transformation is complete can end the curse. Doing so undoes the changes made to the target by the curse."
		}, {
			name: "Stunning Shriek",
			description: "The vargouille shrieks. Each humanoid and beast within 30 feet of the vargouille and able to hear it must succeed on a DC 12 Wisdom saving throw or be frightened until the end of the vargouille’s next turn. While frightened in this way, a target is stunned. If a target’s saving throw is successful or the effect ends for ft, the target is immune to the Stunning Shriek of all vargouilles for 1 hour."
		}
		],
	},
	"Vegepygmy": {
		name: "Vegepygmy",
		source: ["Volo's Guide", 196],
		size: "Small",
		type: "plant",
		alignment: "neutral",
		ac: [13, "Natural Armor", false],
		hp: 9,
		hd: [2, 6],
		speed: "30 ft",
		scores: [7, 14, 13, 6, 11, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Stealth +4",
		damage_resistances: "lightning, piercing",
		senses: "darkvision 60 ft",
		passive_perception: 12,
		languages: "Vegepygmy",
		challenge_rating: "1/4",
		attacks: [{
			name: "Claws ",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Sling",
			ability: 2,
			damage: [1, 4, "bludgeoning"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Plant Camouflage ",
			description: "The vegepygmy has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring plant life."
		}, {
			name: "Regeneration",
			description: "The vegepygmy regains 3 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn’t function at the start of the vegepygmy’s next turn. The vegepygmy dies only if it starts its turn with 0 hit points and doesn’t regenerate."
		}
		],
	},
	"Vegepygmy Chief": {
		name: "Vegepygmy Chief",
		source: ["Volo's Guide", 197],
		size: "Small",
		type: "plant",
		alignment: "neutral",
		ac: [14, "Natural Armor", false],
		hp: 33,
		hd: [6, 6],
		speed: "30 ft",
		scores: [14, 14, 14, 7, 12, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +4",
		damage_resistances: "lightning, piercing",
		senses: "darkvision 60 ft",
		passive_perception: 13,
		languages: "Vegepygmy",
		challenge_rating: "2",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 6 (id8+2) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The vegepygmy makes two attacks with its claws or two melee attacks with its spear."
		}, {
			name: "Spores (1/Day)",
			description: "A 15-foot-radius cloud of toxic spores extends out from the vegepygmy. The spores spread around corners. Each creature in that area that isn’t a plant must succeed on a DC 12 Constitution saving throw or be poisoned. While poisoned in this way, a target takes 9 (2d8) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
	},
	"Velociraptor": {
		name: "Velociraptor",
		source: ["Volo's Guide", 140],
		size: "Tiny",
		type: "beast",
		alignment: "unaligned",
		ac: [13, "Natural Armor", false],
		hp: 10,
		hd: [3, 4],
		speed: "30 ft",
		scores: [6, 14, 13, 4, 12, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "",
		passive_perception: 13,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 2,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Pack Tactics",
			description: "The velociraptor has advantage on an attack roll against a creature if at least one of the velociraptor’s allies is within 5 feet of the creature and the ally isn’t incapacitated."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The velociraptor makes two attacks: one with its bite and one with its claws."
		}
		],
	},
	"War Priest": {
		name: "War Priest",
		source: ["Volo's Guide", 218],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [18, "Plate", false],
		hp: 117,
		hd: [18, 8],
		speed: "30 ft",
		scores: [16, 10, 14, 11, 17, 13],
		saves: ["", "", 6, "", 7, ""],
		skills: "Intimidation +5, Religion +4",
		senses: "",
		passive_perception: 13,
		languages: "any two languages",
		challenge_rating: "9",
		attacks: [{
			name: "Maul",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The priest makes two melee attacks."
		}
		],
		reactions: [{
			name: "Guided Strike (Recharges after a Short or Long Rest)",
			description: "The priest grants a +10 bonus to an attack roll made by itself or another creature within 30 feet of it. The priest can make this choice after the roll is made but before it hits or misses."
		}
		],
		spells: [
			"The priest is a 9th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 15, +7 to hit with spell attacks). It has the following cleric spells prepared:",
			"Cantrips (at will): light, mending, sacred flame, spare the dying",
			"1st level (4 slots): divine favor, guiding bolt, healing word, shield of faith",
			"2nd level (3 slots): lesser restoration, magic weapon, prayer of healing, silence, spiritual weapon",
			"3rd level (3 slots): beacon of hope, crusader’s mantle, dispel magic, revivify, spirit guardians, water wall",
			"4th level (3 slots): banishment, freedom of movement, guardian of faith, stoneskin ",
			"5th level (1 slot): flame strike, mass cure wounds, hold monster"
		],
	},
	"Warlock of the Archfey": {
		name: "Warlock of the Archfey",
		source: ["Volo's Guide", 219],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [11, "", false],
		hp: 49,
		hd: [11, 8],
		speed: "30 ft",
		scores: [9, 13, 11, 11, 12, 18],
		saves: ["", "", "", "", 3, 6],
		skills: "Arcana +2, Deception +6, Nature +2, Persuasion +6",
		condition_immunities: "charmed",
		senses: "",
		passive_perception: 11,
		languages: "any two languages (usually Sylvan)",
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
			name: "Innate Spellcasting",
			description: [
				"The warlock’s innate spellcasting ability is Charisma. It can innately cast the following spells (spell save DC 15), requiring no material components:",
				"At will: disguise self, mage armor (self only), silent image, speak with animals",
				"1/day: conjure fey"
			]
		}
		],
		reactions: [{
			name: "Misty Escape (Recharges after a Short or Long Rest)",
			description: "In response to taking damage, the warlock turns invisible and teleports up to 60 feet to an unoccupied space it can see. It remains invisible until the start of its next turn or until it attacks, makes a damage roll, or casts a spell."
		}
		],
		spells: [
			"The warlock is a 11th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:",
			"Cantrips (at will): dancing lights, eldritch blast, friends, mage hand, minor illusion, prestidigitation, vicious mockery",
			"1st-5th level (3 5th-level slots): blink, charm person, dimension door, dominate beast, faerie fire, fear, hold monster, misty step, phantasmal force, seeming, sleep"
		],
	},
	"Warlock of the Fiend": {
		name: "Warlock of the Fiend",
		source: ["Volo's Guide", 219],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [12, "", false],
		hp: 78,
		hd: [12, 8],
		speed: "30 ft",
		scores: [10, 14, 15, 12, 12, 18],
		saves: ["", "", "", "", 4, 7],
		skills: "Arcana +4, Deception +7, Persuasion +7, Religion +4",
		damage_resistances: "slashing damage from nonmagical attacks not made with silvered weapons",
		senses: "darkvision 60 ft",
		passive_perception: 11,
		languages: "any two languages (usually Abyssal or Infernal)",
		challenge_rating: "7",
		attacks: [{
			name: "Mace",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) fire damage.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The warlock’s innate spellcasting ability is Charisma. It can innately cast the following spells (spell save DC 15), requiring no material components:",
				"At will: alter self, false life, levitate (self only), mage armor (self only), silent image",
				"1/day each: feeblemind, finger of death, plane shift"
			]
		}, {
			name: "Dark One's Own Luck (Recharges after a Short or Long Rest)",
			description: "When the warlock makes an ability check or saving throw, it can add a d10 to the roll. It can do this after the roll is made but before any of the roll’s effects occur."
		}
		],
		spells: [
			"The warlock is a l7th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:",
			"Cantrips (at will): eldritch blast, fire bolt, friends, mage hand, minor illusion, prestidigitation, shocking grasp",
			"1st-5th level (4 5th-level slots): banishment, burning hands, flame strike, hellish rebuke, magic circle, scorching ray, scrying, stinking cloud, suggestion, wall of fire"
		],
	},
	"Warlock of the Great Old One": {
		name: "Warlock of the Great Old One",
		source: ["Volo's Guide", 220],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [12, "", false],
		hp: 91,
		hd: [14, 8],
		speed: "30 ft",
		scores: [9, 14, 15, 12, 12, 18],
		saves: ["", "", "", "", 4, 7],
		skills: "Arcana +4, History +4",
		damage_resistances: "psychic",
		senses: "darkvision 60 ft",
		passive_perception: 11,
		languages: "any two languages, telepathy 30 ft",
		challenge_rating: "6",
		attacks: [{
			name: "Dagger",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Dagger",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The warlock’s innate spellcasting ability is Charisma. It can innately cast the following spells (spell save DC 15), requiring no material components:",
				"At will: detect magic, jump, levitate, mage armor (self only), speak with dead",
				"1/day each: arcane gate, true seeing"
			]
		}, {
			name: "Whispering Aura",
			description: "At the start of each of the warlock’s turns, each creature of its choice within 5 feet of it must succeed on a DC 15 Wisdom saving throw or take 10 (3d6) psychic damage, provided that the warlock isn’t incapacitated."
		}
		],
		spells: [
			"The warlock is a 14th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:",
			"Cantrips (at will): chill touch, eldritch blast, guidance, mage hand, minor illusion, prestidigitation, shocking grasp",
			"1st-5th level (3 5th-level slots): armor of Agathys, arms of Hadar, crown of madness, clairvoyance, contact other plane, detect thoughts, dimension door, dissonant whispers, dominate beast, telekinesis, vampiric touch"
		],
	},
	"Warlord": {
		name: "Warlord",
		source: ["Volo's Guide", 220],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "any alignment",
		ac: [18, "Plate", false],
		hp: 229,
		hd: [27, 8],
		speed: "30 ft",
		scores: [20, 16, 18, 12, 12, 18],
		saves: [9, 7, 8, "", "", ""],
		skills: "Athletics +9, Intimidation +8, Perception +5, Persuasion +8",
		senses: "",
		passive_perception: 15,
		languages: "any two languages",
		challenge_rating: "12",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
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
			name: "Indomitable (3/Day)",
			description: "The warlord can reroll a saving throw it fails. It must use the new roll."
		}, {
			name: "Survivor",
			description: "The warlord regains 10 hit points at the start of its turn if it has at least 1 hit point but fewer hit points than half its hit point maximum."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The warlord makes two weapon attacks."
		}
		],
		legendary_actions: [{
			name: "Legendary Actions (3/Turn)",
			description: "The warlord can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature’s turn. The warlord regains spent legendary actions at the start of its turn."
		}, {
			name: "Weapon Attack",
			description: "The warlord makes a weapon attack."
		}, {
			name: "Command Ally",
			description: "The warlord targets one ally it can see within 30 feet of it. if the target can see and hear the warlord, the target can make one weapon attack as a reaction and gains advantage on the attack roll."
		}, {
			name: "Frighten Foe (Costs 2 Actions)",
			description: "The warlord targets one enemy it can see within 30 feet of it. If the target can see and hear it, the target must succeed on a DC 16 Wisdom saving throw or be frightened until the end of warlord’s next turn."
		}
		],
	},
	"White Guard Drake": {
		name: "White Guard Drake",
		source: ["Volo's Guide", 158],
		size: "Medium",
		type: "dragon",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 52,
		hd: [7, 8],
		speed: "30 ft, burrow 20 ft, climb 30 ft",
		scores: [16, 11, 16, 4, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		damage_resistances: "cold",
		senses: "darkvision 60 ft",
		passive_perception: 12,
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
		],
	},
	"Wood Woad": {
		name: "Wood Woad",
		source: ["Volo's Guide", 198],
		size: "Medium",
		type: "plant",
		alignment: "lawful neutral",
		ac: [18, "Natural Armor", true],
		hp: 75,
		hd: [10, 8],
		speed: "30 ft, climb 30 ft",
		scores: [18, 12, 16, 10, 13, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +7, Perception +4, Stealth +4",
		damage_resistances: "bludgeoning, piercing",
		damage_vulnerabilities: "fire",
		condition_immunities: "charmed, frightened",
		senses: "darkvision 60 ft",
		passive_perception: 14,
		languages: "Sylvan",
		challenge_rating: "5",
		attacks: [{
			name: "Club",
			ability: 1,
			damage: [4, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Magic Club",
			description: "In the wood woad’s hand, its club is magical and deals 7 (3d4) extra damage (included in its attacks)."
		}, {
			name: "Plant Camouflage",
			description: "The wood woad has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring plant life."
		}, {
			name: "Regeneration",
			description: "The wood woad regains 10 hit points at the start of its turn if it is in contact with the ground. If the wood woad takes fire damage, this trait doesn’t function at the start of the wood woad’s next turn. The wood woad dies only if it starts its turn with 0 hit points and doesn’t regenerate."
		}, {
			name: "Tree Stride",
			description: "Once on each of its turns, the wood woad can use 10 feet of its movement to step magically into one living tree within 5 feet of it and emerge from a second living tree within 60 feet of it that it can see, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The wood woad makes two attacks with its club."
		}
		],
	},
	"Xvart": {
		name: "Xvart",
		source: ["Volo's Guide", 200],
		size: "Small",
		type: "humanoid (xvart)",
		alignment: "chaotic evil",
		ac: [13, "Leather Armor", false],
		hp: 7,
		hd: [2, 6],
		speed: "30 ft",
		scores: [8, 14, 10, 8, 7, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +4",
		senses: "darkvision 30 ft",
		passive_perception: 8,
		languages: "Abyssal",
		challenge_rating: "1/8",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Sling",
			ability: 2,
			damage: [1, 4, "bludgeoning"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Low Cunning",
			description: "The xvart can take the Disengage action as a bonus action on each of its turns."
		}, {
			name: "Overbearing Pack",
			description: "The xvart has advantage on Strength (Athletics) checks to shove a creature if at least one of the xvart’s allies is within 5 feet of the target and the ally isn’t incapacitated."
		}, {
			name: "Raxivort's Tongue",
			description: "The xvart can communicate with ordinary bats and rats, as well as giant bats and giant rats."
		}
		],
	},
	"Xvart Speaker": {
		name: "Xvart Speaker",
		source: ["Volo's Guide", 200],
		size: "Small",
		type: "humanoid (xvart)",
		alignment: "chaotic evil",
		ac: [13, "Leather Armor", false],
		hp: 7,
		hd: [2, 6],
		speed: "30 ft",
		scores: [8, 14, 10, 11, 7, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +4",
		senses: "darkvision 30 ft",
		passive_perception: 8,
		languages: "Abyssal plus one other language, usually Common or Goblin",
		challenge_rating: "1/8",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Xvart Warlock of Raxivort": {
		name: "Xvart Warlock of Raxivort",
		source: ["Volo's Guide", 200],
		size: "Small",
		type: "humanoid (xvart)",
		alignment: "chaotic evil",
		ac: [12, "", false],
		hp: 22,
		hd: [5, 6],
		speed: "30 ft",
		scores: [8, 14, 12, 8, 11, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +3",
		senses: "darkvision 30 ft",
		passive_perception: 10,
		languages: "Abyssal",
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
			name: "Innate Spellcasting",
			description: [
				"The xvart's innate spellcasting ability is Charisma. it can innately cast the following spells, requiring no material components:",
				"At will: detect magic, mage armor (self only)"
			]
		}, {
			name: "Low Cunning",
			description: "The xvart can take the Disengage action as a bonus action on each of its turns."
		}, {
			name: "Overbearing Pack",
			description: "The xvart has advantage on Strength (Athletics) checks to shove a creature if at least one of the xvart’s allies is within 5 feet of the target and the ally isn’t incapacitated."
		}, {
			name: "Raxivort's Tongue",
			description: "The xvart can communicate with ordinary bats and rats, as well as giant bats and giant rats."
		}
		],
		spells: [
			"The xvart is a 3rd-level spellcaster. Its spellcasting ability is Charisma (spell save DC ll, +3 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:",
			"Cantrips (at will): eldritch blast, mage hand, minor illusion, poison spray, prestidigitation",
			"1st-2nd level (2 2nd-level slots): burning hands, expeditious retreat, invisibility, scorching ray"
		],
	},
	"Yeth Hound": {
		name: "Yeth Hound",
		source: ["Volo's Guide", 201],
		size: "Large",
		type: "fey",
		alignment: "neutral evil",
		ac: [14, "Natural Armor", false],
		hp: 51,
		hd: [6, 10],
		speed: "40 ft, fly 40 ft (hover)",
		scores: [18, 17, 16, 5, 12, 7],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons",
		condition_immunities: "charmed, exhaustion, frightened",
		senses: "darkvision 60 ft",
		passive_perception: 11,
		languages: "understands Common, Elvish, and Sylvan but can't speak",
		challenge_rating: "4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 14 (4d6) psychic damage if the target is frightened.",
		}
		],
		traits: [{
			name: "Keen Hearing and Smell",
			description: "The yeth hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}, {
			name: "Sunlight Banishment",
			description: "If the yeth hound starts its turn in sunlight, it is transported to the Ethereal Plane. While sunlight shines on the spot from which it vanished, the hound must remain in the Deep Ethereal. After sunset, it returns to the Border Ethereal at the same spot, whereupon it typically sets out to find its pack or its master. The hound is visible on the Material Plane while it is in the Border Ethereal, and vice versa, but it can’t affect or be affected by anything on the other plane. Once it is adjacent to its master or a pack mate that is on the Material Plane, a yeth hound in the Border Ethereal can return to the Material Plane as an action."
		}, {
			name: "Telepathic Bond",
			description: "While the yeth hound is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically with each other."
		}
		],
		actions: [{
			name: "Baleful Baying",
			description: "The yeth hound bays magically. Every enemy within 300 feet of the hound that can hear it must succeed on a DC 13 Wisdom saving throw or be frightened until the end of the hound’s next turn or until the hound is incapacitated. A frightened target that starts its turn within 30 feet of the hound must use all its movement on that turn to get as far from the hound as possible, must finish the move before taking an action, and must take the most direct route, even if hazards lie that way. A target that successfully saves is immune to the baying of all yeth hounds for the next 24 hours."
		}
		],
	},
	"Yuan-ti Anathema": {
		name: "Yuan-ti Anathema",
		source: ["Volo's Guide", 202],
		size: "Huge",
		type: "monstrosity (shapechanger, yuan-ti)",
		alignment: "neutral evil",
		ac: [16, "Natural Armor", false],
		hp: 189,
		hd: [18, 12],
		speed: "40 ft, climb 30 ft, swim 30 ft",
		scores: [23, 13, 19, 19, 17, 20],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +7, Stealth +5",
		damage_resistances: "acid, fire, lightning",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: 17,
		languages: "Abyssal, Common, Draconic",
		challenge_rating: "12",
		attacks: [{
			name: "Claw (Anathema Form Only)",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Constrict",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Melee (15 ft)",
			dc: [16, "Escape"],
			description: "Plus 7 (2d6) acid damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained and takes 16 (3d6+6) bludgeoning damage plus 7 (2d6) acid damage at the start of each of its turns, and the anathema can’t constrict another target.",
		}, {
			name: "Flurry of Bites",
			ability: 1,
			damage: [6, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 14 (4d6) poison damage.",
		}
		],
		traits: [{
			name: "Innate Spellcasting (Anathema Form Only)",
			description: [
				"The anathema’s innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:",
				"At will: animal friendship (snakes only)",
				"3/day each: darkness, entangle, fear, haste, suggestion, polymorph",
				"1/day: divine word"
			]
		}, {
			name: "Magic Resistance",
			description: "The anathema has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Ophidiophobia Aura",
			description: "Any creature of the anathema’s choice, other than a snake or a yuan-ti, that starts its turn within 30 feet of the anathema and can see or hear it must succeed on a DC 17 Wisdom saving throw or become frightened of snakes and yuan-ti. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target’s saving throw is successful or the effect ends for it, the target is immune to this aura for the next 24 hours."
		}, {
			name: "Shapechanger",
			description: "The anathema can use its action to polymorph into a Huge giant constrictor snake, or back into its true form. its statistics are the same in each form. Any equipment it is wearing or carrying isn’t transformed."
		}, {
			name: "Six Heads",
			description: "The anathema has advantage on Wisdom (Perception) checks and on saving throws against being blinded. charmed, deafened, frightened, stunned, or knocked unconscious."
		}, {
			name: "Variant: Acid Slime",
			description: "As a bonus action, the yuan-ti can coat its body in a slimy acid that lasts for 1 minute. A creature that touches the yuan-ti, hits it with a melee attack while within 5 feet of it, or is hit by its constrict attack takes 5 (1d10) acid damage."
		}, {
			name: "Variant: Chameleon Skin",
			description: "The yuan-ti has advantage on Dexterity (Stealth) checks made to hide."
		}, {
			name: "Variant: Shed Skin (1/Day)",
			description: "The yuan-ti can shed its skin as a bonus action to free itself from a grapple, shackles, or other restraints. If the yuan-ti spends 1 minute eating its shed skin, it regains hit points equal to half its hit point maximum."
		}
		],
		actions: [{
			name: "Multiattack (Anathema Form Only)",
			description: "The anathema makes two claw attacks, one constrict attack, and one Flurry of Bites attack."
		}
		],
	},
	"Yuan-ti Broodguard": {
		name: "Yuan-ti Broodguard",
		source: ["Volo's Guide", 203],
		size: "Medium",
		type: "humanoid (yuan-ti)",
		alignment: "neutral evil",
		ac: [14, "Natural Armor", false],
		hp: 45,
		hd: [7, 8],
		speed: "30 ft",
		scores: [15, 14, 14, 6, 11, 4],
		saves: [4, 4, "", "", 2, ""],
		skills: "Perception +2",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: 12,
		languages: "Abyssal, Common, Draconic",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Mental Resistance",
			description: "The broodguard has advantage on saving throws against being charmed, and magic can’t paralyze it."
		}, {
			name: "Reckless",
			description: "At the start of its turn, the broodguard can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
		}, {
			name: "Variant: Chameleon Skin",
			description: "The yuan-ti has advantage on Dexterity (Stealth) checks made to hide."
		}, {
			name: "Variant: Shed Skin (1/Day)",
			description: "The yuan-ti can shed its skin as a bonus action to free itself from a grapple, shackles, or other restraints. If the yuan-ti spends 1 minute eating its shed skin, it regains hit points equal to half its hit point maximum."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The broodguard makes three attacks: one with its bite and two with its claws."
		}
		],
	},
	"Yuan-ti Mind Whisperer": {
		name: "Yuan-ti Mind Whisperer",
		source: ["Volo's Guide", 204],
		size: "Medium",
		type: "monstrosity (shapechanger, yuan-ti)",
		alignment: "neutral evil",
		ac: [14, "Natural Armor", false],
		hp: 71,
		hd: [13, 8],
		speed: "30 ft",
		scores: [16, 14, 13, 14, 12, 16],
		saves: ["", "", "", "", 4, 5],
		skills: "Deception +5, Stealth +4",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft (penetrates magical darkness)",
		passive_perception: 12,
		languages: "Abyssal, Common, Draconic",
		challenge_rating: "4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) poison damage.",
		}, {
			name: "Scimitar (Yuan-ti Form Only)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The yuan-ti can use its action to polymorph into a Medium snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn’t transformed. If it dies, it stays in its current form."
		}, {
			name: "Innate Spellcasting (Yuan-ti Form Only)",
			description: [
				"The yuan-ti’s innate spellcasting ability is Charisma (spell save DC 13). The yuan-ti can innately cast the following spells, requiring no material components:",
				"At will: animal friendship (snakes only)",
				"3/day: suggestion"
			]
		}, {
			name: "Magic Resistance",
			description: "The yuan-ti has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Mind Fangs (2/Day)",
			description: "The first time the yuan-ti hits with a melee attack on its turn, it can deal an extra 16 (3d10) psychic damage to the target.",
		}, {
			name: "Spellcasting (Yuan-ti Form Only)",
			description: [
				"The yuan-ti is a 6th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:",
				"Cantrips (at will): eldritch blast (range 300 ft, +3 bonus to each damage roll),friends, message, minor illusion, poison spray, prestidigitation",
				"1st-3rd level (2 3rd-level slots): charm person, crown of madness, detect thoughts, expeditious retreat, fly, hypnotic pattern, illusory script"
			]
		}, {
			name: "Sseth’s Blessing",
			description: "When the yuan-ti reduces an enemy to 0 hit points, the yuan-ti gains 9 temporary hit points."
		}, {
			name: "Variant: Chameleon Skin",
			description: "The yuan-ti has advantage on Dexterity (Stealth) checks made to hide."
		}, {
			name: "Variant: Shed Skin (1/Day)",
			description: "The yuan-ti can shed its skin as a bonus action to free itself from a grapple, shackles, or other restraints. If the yuan-ti spends 1 minute eating its shed skin, it regains hit points equal to half its hit point maximum."
		}
		],
		actions: [{
			name: "Multiattack (Yuan-ti Form Only)",
			description: "The yuan-ti makes one bite attack and one scimitar attack."
		}
		],
	},
	"Yuan-ti Nightmare Speaker": {
		name: "Yuan-ti Nightmare Speaker",
		source: ["Volo's Guide", 205],
		size: "Medium",
		type: "monstrosity (shapechanger, yuan-ti)",
		alignment: "neutral evil",
		ac: [14, "Natural Armor", false],
		hp: 71,
		hd: [13, 8],
		speed: "30 ft",
		scores: [16, 14, 13, 14, 12, 16],
		saves: ["", "", "", "", 3, 5],
		skills: "Deception +5, Stealth +4",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft (penetrates magical darkness)",
		passive_perception: 11,
		languages: "Abyssal, Common, Draconic",
		challenge_rating: "4",
		attacks: [{
			name: "Constrict",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			dc: [14, "Escape"],
			description: "On hit Target is grappled (escape DC 14) if it is a Large or smaller creature. Until this grapple ends, the target is restrained, and the yuan-ti can’t constrict another target.",
		}, {
			name: "Scimitar (Yuan-ti Form Only)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The yuan-ti can use its action to polymorph into a Medium snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn’t transformed. If it dies, it stays in its current form."
		}, {
			name: "Death Fangs (2/Day)",
			description: "The first time the yuan-ti hits with a melee attack on its turn, it can deal an extra 16 (3d10) necrotic damage to the target.",
		}, {
			name: "Innate Spellcasting (Yuan-ti Form Only)",
			description: [
				"The yuan-ti’s innate spellcasting ability is Charisma (spell save DC 13). The yuan-ti can innately cast the following spells, requiring no material components:",
				"At will: animal friendship (snakes only) 3/day: suggestion"
			]
		}, {
			name: "Magic Resistance",
			description: "The yuan-ti has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Spellcasting (Yuan-ti Form Only)",
			description: [
				"The yuan-ti is a 6th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:",
				"Cantrip (at will): chill touch, eldritch blast (range 300 ft, +3 bonus to each damage roll), mage hand, message, poison spray, prestidigitation",
				"1st-3rd level (2 3rd-level slots): arms of Hadar, darkness, fear, hex, hold person, hunger of Hadar, witch bolt"
			]
		}, {
			name: "Variant: Chameleon Skin",
			description: "The yuan-ti has advantage on Dexterity (Stealth) checks made to hide."
		}, {
			name: "Variant: Shed Skin (1/Day)",
			description: "The yuan-ti can shed its skin as a bonus action to free itself from a grapple, shackles, or other restraints. If the yuan-ti spends 1 minute eating its shed skin, it regains hit points equal to half its hit point maximum."
		}
		],
		actions: [{
			name: "Multiattack (Yuan-ti Form Only)",
			description: "The yuan-ti makes one constrict attack and one scimitar attack."
		}, {
			name: "Invoke Nightmare (Recharges after a Short or Long Rest)",
			description: "The yuan-ti taps into the nightmares of a creature it can see within 60 feet of it and creates an illusory, immobile manifestation of the creature’s deepest fears, visible only to that creature. The target must make a DC 13 Intelligence saving throw. On a failed save, the target takes 11 (2d10) psychic damage and is frightened of the manifestation, believing it to be real. The yuan-ti must concentrate to maintain the illusion (as if concentrating on a spell), which lasts for up to 1 minute and can’t be harmed. The target can repeat the saving throw at the end of each of its turns, ending the illusion on a success, or taking 11 (2d10) psychic damage on a failure.",
		}
		],
	},
	"Yuan-ti Pit Master": {
		name: "Yuan-ti Pit Master",
		source: ["Volo's Guide", 206],
		size: "Medium",
		type: "monstrosity (shapechanger, yuan-ti)",
		alignment: "neutral evil",
		ac: [14, "Natural Armor", false],
		hp: 88,
		hd: [16, 8],
		speed: "30 ft",
		scores: [16, 14, 13, 14, 12, 16],
		saves: ["", "", "", "", 3, 5],
		skills: "Deception +5, Stealth +4",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft (penetrates magical darkness)",
		passive_perception: 11,
		languages: "Abyssal, Common, Draconic",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) poison damage.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The yuan-ti can use its action to polymorph into a Medium snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn’t transformed. It doesn't change form if it dies."
		}, {
			name: "Innate Spellcasting (Yuan-ti Form Only)",
			description: [
				"The yuan-ti’s innate spellcasting ability is Charisma (spell save DC 13). The yuan-ti can innately cast the following spells, requiring no material components:",
				"At will: animal friendship (snakes only)",
				"3/day: suggestion"
			]
		}, {
			name: "Magic Resistance",
			description: "The yuan-ti has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Poison’s Disciple (2/Day)",
			description: "The first time the yuan-ti hits with a melee attack on its turn, it can deal an extra 16 (3d10) poison damage to the target.",
		}, {
			name: "Spellcasting (Yuan-ti Farm Only)",
			description: [
				"The yuan-ti is a 6th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:",
				"Cantrips (at will): eldritch blast (range 300 ft, +3 bonus to each damage roll), friends, guidance, mage hand, message, poison spray",
				"1st-3rd level (2 3rd-level slots): command, counterspell, hellish rebuke, invisibility, misty step, unseen servant, vampiric touch"
			]
		}, {
			name: "Variant: Chameleon Skin",
			description: "The yuan-ti has advantage on Dexterity (Stealth) checks made to hide."
		}, {
			name: "Variant: Shed Skin (1/Day)",
			description: "The yuan-ti can shed its skin as a bonus action to free itself from a grapple, shackles, or other restraints. If the yuan-ti spends 1 minute eating its shed skin, it regains hit points equal to half its hit point maximum."
		}
		],
		actions: [{
			name: "Multiattack (Yuan-ti Form Only)",
			description: "The yuan-ti makes two bite attacks using its snake arms."
		}, {
			name: "Merrshaulk's Slumber (1/Day)",
			description: "The yuan-ti targets up to five creatures that it can see within 60 feet of it. Each target must succeed on a DC 13 Constitution saving throw or fall into a magical sleep and be unconscious for 10 minutes. A sleeping target awakens if it takes damage or if someone uses an action to shake or slap it awake. This magical sleep has no effect on a creature immune to being charmed."
		}
		],
	}
};
