var SKT = {
	// 31
	"Augrek Brighthelm": {
		name: "Augrek Brighthelm",
		source: ["Storm Kings Thunder", 247],
		size: "Medium",
		type: "humanoid (shield dwarf)",
		alignment: "lawful good",
		ac: [15, "Chain Shirt", true],
		hp: 13,
		hd: [2, 8],
		speed: "25 ft",
		scores: [14, 11, 15, 10, 11, 11],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "poison",
		skills: "Athletics +4, Perception +2",
		passive_perception: 12,
		languages: "Common, Dwarvish",
		senses: "darkvision 60 ft",
		challenge_rating: "0",
		traits: [{
				name: "Dwarven Resilience",
				description: "Augrek has advantage on saving throws against poison."
			}, {
				name: "Roleplaying Information",
				description: [
					"Sheriff's Deputy Augrek guards the southwest gate of Bryn Shander and welcomes visitors to town. She has a good heart.",
					"Ideal: \"You'll get farther in life with a kind word than an axe.",
					"Bond: \"Bryn Shander is my home. It's my job to protect her.",
					"Flaw: \"I'm head over heels in love with Sheriff Southwell. One day I hope to marry him.\"",
				]
			}
		],
		attacks: [{
				name: "Warhammer",
				ability: 1,
				damage: [1, 8, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "Two-Handed: 7 (1d10+2) bludgeoning damage.",
			}, {
				name: "Heavy Crossbow",
				ability: 1,
				damage: [1, 10, "piercing"],
				range: "Ranged (100/400 ft)",
				description: "Augrek carries ten crossbow bolts.",
			},
		],
	},
	"Beldora": {
		name: "Beldora",
		source: ["Storm Kings Thunder", 249],
		size: "Medium",
		type: "humanoid (Illuskan human)",
		alignment: "chaotic good",
		ac: [12, "", false],
		hp: 18,
		hd: [4, 8],
		speed: "30 ft",
		scores: [10, 14, 10, 16, 12, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Insight +3, Investigation +5, Perception +5, Persuasion +5",
		passive_perception: 13,
		languages: "Common, Draconic, Dwarvish, Halfling",
		challenge_rating: "0",
		attacks: [{
				name: "Shortsword",
				ability: 1,
				damage: [1, 6, "slashing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Hand Crossbow",
				ability: 2,
				damage: [1, 6, "piercing"],
				range: "Ranged (30/120 ft)",
				description: "Beldora carries ten crossbow bolts.",
			},
		],
		reactions: [{
				name: "Duck and Cover",
				description: "Beldora adds 2 to her AC against on melee attack that would hit her. To do so, Duvessa must see the attacker and can't be grappled or restrained.",
			},
		],
		traits: [{
				name: "Roleplaying Information",
				description: [
					"Beldora is a member of the harpers who survives using her wits and wiles. She looks like a homeless waif, but she's a survivor who shies away from material wealth.",
					"Ideal: \"We should all strive to help one another.",
					"Bond: \"I'll risk my life to protect the powerless.",
					"Flaw: \"I like lying to people. Makes life more interesting, no?\"",
				]
			},
		],
	},
	"Crag Cat": {
		name: "Crag Cat",
		source: ["Storm Kings Thunder", 240],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [13, "", false],
		hp: 34,
		hd: [4, 10],
		speed: "40 ft",
		scores: [16, 17, 16, 4, 14, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +7, Perception +4",
		senses: "darkvision 60 ft",
		passive_perception: 14,
		languages: "",
		challenge_rating: "1",
		attacks: [{
				name: "Bite",
				ability: 1,
				damage: [1, 10, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Claw",
				ability: 1,
				damage: [1, 8, "slashing"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Nondetection",
				description: "The cat cannot be targeted or detected by any divination magic or perceived through magical scrying sensors."
			}, {
				name: "Pounce",
				description: "If the cat moves at least 20 ft straight toward a creature then hits it with a claw attack on the same turn, that target must succeed on a DC13 Strength saving throw or be knocked prone. If the target is prone, the cat can make one bite attack against it as a bonus action."
			}, {
				name: "Spell Turning",
				description: "The cat has advantage on saving throws against any spell that tagets only the cat (not an area). If the cat's saving throw succeeds and the spell is of 7th level or lower, the spell has no effect on the cat and instead tagets the caster."
			}
		],
	},
	"Darathra Shendrel": {
		name: "Darathra Shendrel",
		source: ["Storm Kings Thunder", 253],
		size: "Medium",
		type: "humanoid (Illuskan humanoid)",
		alignment: "lawfull good",
		ac: [14, "Breastplate", false],
		hp: 52,
		hd: [8, 8],
		speed: "30 ft",
		scores: [16, 11, 14, 11, 11, 15],
		saves: ["", "", "", "", "", ""],
		skills: "History +2, Intimidation +4, Investigation +2, Perception +2, Presuasion +4",
		passive_perception: 12,
		languages: "Common",
		challenge_rating: "0",
		attacks: [{
				name: "Greatsword",
				ability: 1,
				damage: [2, 6, "slashing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Heavy Crossbow",
				ability: 1,
				damage: [1, 10, "piercing"],
				range: "Ranged (100/400 ft)",
				description: "Darathra carries twenty crossbow bolts.",
			},
		],
		traits: [{
				name: "Brave",
				description: "Darathra has advantage on saving throws against being frightened"
			}, {
				name: "Roleplaying Information",
				description: [
					"As the Lord Protector of Triboar and a secret agent of the Harpers, Darathra has sworn an oath to defend the town. She takes her duty very seriously. In addition to her gear, Darathra has an unarmored warhorse named Buster.",
					"Ideal: \"Good people should be given every chance to prosper, free of tyranny.",
					"Bond: \"I'll lay down my life to protect Triboar and its citizens.",
					"Flaw: \"I refuse to back down. Push me, and I'll push back.\"",
				]
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Darthra makes two melee attacks."
			}
		]
	},
	"Darz Helgar": {
		name: "Darz Helgar",
		source: ["Storm Kings Thunder", 253],
		size: "Medium",
		type: "humanoid (Illuskan human)",
		alignment: "neutral",
		ac: [12, "", false],
		hp: 27,
		hd: [5, 8],
		speed: "30 ft",
		scores: [15, 15, 12, 10, 11, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +2, Sleight of Hand +4, Stealth +4",
		passive_perception: 10,
		languages: "Common",
		challenge_rating: "0",
		attacks: [{
				name: "Shortsword",
				ability: 1,
				damage: [1, 6, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Sling",
				ability: 1,
				damage: [1, 4, "piercing"],
				range: "Ranged (30/120 ft)",
				description: "Darz carries twenty sling stones.",
			},
		],
		traits: [{
				name: "Sneak Attack (1/turn)",
				description: "Darz deals an extra 7 (2d6) damage when he hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft of an ally of Darz that isn't incapacitated and Darz doesn't have disadvantage on the attack roll.",
			}, {
				name: "Roleplaying Information",
				description: [
					"In his youth, Darz was a member of the Xanathar Thieves' Guild in Waterdeep. After serving ten years in prison for his crimes, he cut all ties to the city and moved north to be a campground caretaker.",
					"Ideal: \"You csan run from your past, but you can't hide from it.",
					"Bond: \"I've made a new life in Triboar. I'm not gonna run away this time.",
					"Flaw: \"I have no regrets. I do whatever it takes to survive.\"",
				]
			}
		],
	},
	"Duvessa Shane": {
		name: "Duvessa Shane",
		source: ["Storm Kings Thunder", 248],
		size: "Medium",
		type: "humanoid (Illuskan human)",
		alignment: "lawful good",
		ac: [10, "", false],
		hp: 9,
		hd: [2, 8],
		speed: "30 ft",
		scores: [10, 11, 10, 16, 14, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Insight +3, Persuasion +3",
		passive_perception: 12,
		languages: "Common, Dwarvish, Giant, Orc",
		challenge_rating: "0",
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
		reactions: [{
				name: "Parry",
				description: "Duvessa adds 2 to her AC against on melee attack that would hit him. To do so, Duvessa must see the attacker and be wielding a melee weapon."
			},
		],
		traits: [{
				name: "Roleplaying Information",
				description: [
					"The daughter of a Waterdhavian trader and a tavern server, Duvessa has her mother's talent for negotiation and her father's charm. As the first woman to serve as Town Speaker of BRyn Shander, and a young one at that, she has much to prove.",
					"Ideal: \"The people of Icewind Dale are survivors. They can weather any storm.\"",
					"Bond: \"My mother taught me what it means to be a good leader. I won't disappoint her.\"",
					"Flaw: \"I don't give an inch in any argument of conflict.\""
				],
			},
		],
	},
	"Ghelryn Foehammer": {
		name: "Ghelryn Foehammer",
		source: ["Storm Kings Thunder", 255],
		size: "Medium",
		type: "humanoid (shield dwarf)",
		alignment: "lawful good",
		ac: [14, "Breastplate", true],
		hp: 30,
		hd: [4, 8],
		speed: "30 ft",
		scores: [18, 7, 17, 10, 11, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +6, Intimidation +2,	Perception +2",
		senses: "Darkvision 60 ft",
		damage_resistances: "poison",
		passive_perception: 12,
		languages: "Common, Dwarvish",
		challenge_rating: "0",
		attacks: [{
				name: "Battleaxe",
				ability: 1,
				damage: [1, 10, "slashing"],
				range: "Melee (5 ft)",
				description: "Two-Handed: 9(ldlO+4) slashing damage.",
			},
		],
		traits: [{
				name: "Dwarven Resilience",
				description: "Ghelryn has advantage on saving throws against poison",
			}, {
				name: "Giant Slayer",
				description: "Any weapon attack that Ghelryn makes against a giant deals an extra 7 (2d6) damage on a hit",
			}, {
				name: "Roleplaying Information",
				description: [
					"The blacksmith Ghelryn has a good heart, but he hates ores and giants - hates them with a fiery passion. He considers it the solemn duty of all dwarves to cave in their skulls!",
					"Ideal: \"It is incumbent upon every dwarf to forge a legacy.\"",
					"Bond: \"I stand for Clan Foehammer and all dwarvenkind.\"",
					"Flaw: \"I never run from a fight, especially if it involves killing ores or giants.\"",
				]
			},
		],
		actions: [{
				name: "Multiattack",
				description: "Ghelryn makes two battleaxe attacks",
			},
		],
	},
	"Hulking Crab": {
		name: "Hulking Crab",
		source: ["Storm Kings Thunder", 240],
		size: "Huge",
		type: "beast",
		alignment: "unaligned",
		ac: [17, "Natural Armor", false],
		hp: 76,
		hd: [8, 12],
		speed: "20 ft, swim 30 ft",
		scores: [19, 8, 16, 3, 11, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +2",
		senses: "blindsight 30 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "5",
		attacks: [{
				name: "Claw",
				ability: 1,
				damage: [3, 10, "bludgeoning"],
				range: "Melee (10 ft)",
				description: "Target is grappled (escape DC 15). The crab has two claws, each of which can grapple only one target",
			},
		],
		traits: [{
				name: "Amphibious",
				description: "The crab can breathe air and water."
			}, {
				name: "Shell Camouflage",
				description: "While the crab remains motionless with it's eyestalks and pincers tucked close to it's body, it resembles a natural formation or a pile of detritus. A creature within 30 ft of it can discren its true nature with a successful DC 15 intelligence (Nature) check."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "The aboleth makes three tentacle attacks."
			},
		]
	},
	"Iymrith, Ancient Blue Dragon": {
		name: "Iymrith, Ancient Blue Dragon",
		source: ["Storm Kings Thunder", 241],
		size: "Gargantuan",
		type: "dragon, monster manual",
		alignment: "lawful evil",
		ac: [22, "Natural Armor", false],
		hp: 481,
		hd: [26, 20],
		speed: "40 ft, burrow 40 ft, fly 80 ft",
		scores: [29, 10, 27, 18, 17, 21],
		saves: ["", 7, 15, "", 10, 12],
		skills: "Perception +17, Stealth +7",
		damage_immunities: "lightning",
		senses: "blindsight 60 ft, darkvision 120 ft",
		passive_perception: 27,
		languages: "Common, Draconic, Giant, Terran",
		challenge_rating: "23",
		attacks: [{
				name: "Bite",
				ability: 1,
				damage: [2, 10, "piercing"],
				range: "Melee (15 ft)",
				description: "Plus 11 (2d10) lightning damage.",
			}, {
				name: "Claw",
				ability: 1,
				damage: [2, 6, "slashing"],
				range: "Melee (10 ft)",
				description: "",
			}, {
				name: "Tail",
				ability: 1,
				damage: [2, 8, "bludgeoning"],
				range: "Melee (20 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Innate Spellcasting",
				description: [
					"Iymrith's innate spellcasting ability is Charisma (spell save DC 20).",
					"Iymrith's stone shape can create a living gargoyle instead of altering the stone as described in the spell description.",
					"She can innately cast the following spells, requiring no material components: 1/day: counterspell, detect magic, ice storm, stone shape, teleport",
				]
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
			}, {
				name: "Frightful Presence",
				description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
			}, {
				name: "Lightning Breath (Recharge 5-6)",
				description: "The dragon exhales lightning in a 120-foot line that is 10 ft wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.",
			}, {
				name: "Change Shape",
				description: [
					"Iymrith magically polymorphs into a female storm giant or back into her true form. She reverts to her true form if she dies. Any equipment she is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
					"In storm giant form, Iymrith retains her alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Her statistics are otherwise replaced by those of the new form."
				]
			}
		],
		legendary_actions: [{
				name: "Detect",
				description: "The dragon makes a Wisdom (Perception) check."
			}, {
				name: "Tail Attack",
				description: "The dragon makes a tail attack."
			}, {
				name: "Wing Attack (Costs 2 Actions)",
				description: "The dragon beats its wings. Each creature within 15 ft of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6+9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
			}
		],
	},
	"Lifferlas": {
		name: "Lifferlas",
		source: ["Storm Kings Thunder", 250],
		size: "Huge",
		type: "plant",
		alignment: "unaligned",
		ac: [13, "Natural Armor", false],
		hp: 59,
		hd: [7, 12],
		speed: "20 ft",
		scores: [19, 6, 15, 10, 10, 7],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "blugdeoning, piercing",
		damage_vulnerabilities: "fire",
		passive_perception: 10,
		languages: "Common",
		challenge_rating: "0",
		attacks: [{
				name: "Slam",
				ability: 1,
				damage: [3, 6, "bludgeoning"],
				range: "Melee (10 ft)",
				description: "",
			},
		],
		traits: [{
				name: "False Appearance",
				description: "While Lifferlas remains motionless, it is indistinguishable from a normal tree."
			}, {
				name: "Roleplaying Information",
				description: [
					"A druid of the Emerald Enclave awakened the tree Lifferlas with a spell. Goldenfields is his home, its people his friends. Children like to carve their name and initials into his body and hang from his boughs, and he's happy with that.",
					"Ideal: \"I exist to protect the people and plants of Goldenfields.\"",
					"Bond: \"Children are wonderful. I would do anything to make them feel happy and safe.\"",
					"Flaw: \"I can't remember people's names and often get them mixed up.\""
				]
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Lifferlas makes two slam attacks."
			}
		]
	},
	"Maegera the Dawn Titan": {
		name: "Maegera the Dawn Titan",
		source: ["Storm Kings Thunder", 241],
		size: "Gargantuan",
		type: "elemental",
		alignment: "chaotic evil",
		ac: [16, "Natural Armor", false],
		hp: 341,
		hd: [22, 20],
		speed: "50 ft.",
		scores: [21, 22, 20, 10, 10, 19],
		saves: ["", "", 12, "", 7, 11],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "fire, poison",
		condition_immunities: "charmed, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "blindsight 120 ft",
		passive_perception: 10,
		languages: "Ignan",
		challenge_rating: "23",
		attacks: [{
				name: "Slam",
				ability: 1,
				damage: [10, 6, "bludgeoning"],
				range: "Melee (15 ft)",
				description: "Plus 35 (10d6) fire damage",
			},
		],
		traits: [{
				name: "Empowered Attacks",
				description: "Maegera's slam attacks are treated as magical for the purpose of overcoming resistance and immunity to damage from nonmagical attacks."
			}, {
				name: "Fire Aura",
				description: "At the start of each of Maegera's turns, each creature within 30 ft of it takes 35 (10d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature also takes 35 (10d6) fire damage from touching Maegera or from hitting it with a melee attack while within 10 ft of it, and a creature takes that damage the first time on a turn that Maegera moves into its space. Nonmagical weapons that hit Maegera are destroyed by fire immediately after dealing damage to it.",
			}, {
				name: "Fire Form",
				description: "Maegera can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing if fire could pass through that space."
			}, {
				name: "Illumination",
				description: "Maegera sheds bright light in a 120-foot radius and dim light in an additional 120 ft."
			}, {
				name: "Innate Spellcasting",
				description: "Maegera's can innately cast fireball (spell save DC 19) at will, requiring no material components. Maegera's spell casting ability is Charisma."
			}, {
				name: "Magic Resistance",
				description: "Maegera has advantage on saving throws against spells and other magical effects."
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Maegera makes three slam attacks."
			}
		],
		legendary_actions: [{
				name: "Quench Magic",
				description: "Maegera targets one creature that it can see within 60 ft of it. Any resistence or immunity to fire damage that the target gains from a spell or magic item is suppressed. The effect lasts until the end of Maegera's next turn."
			}, {
				name: "Smoke Cloud (Costs 2 Actions)",
				description: "Maegera exhales a billowing cloud of hot smoke and embers that fills a 60 ft cube. Each creature in the area takes 11 (2d10) fire damage. The cloud lasts until the end of Maegera's next turn. Creatures completely in the cloud are blinded and can't be seen.",
			}, {
				name: "Create Fire Elemental (Costs 3 Actions)",
				description: "Maegera's hit points are reduced by 50 as part of it separates and becomes a fire elemental with 102 hit points. The fire element appears in an unoccupied space within 15 ft of Maegera and acts on Maegera's initiative count. Maegera can't use this action if it has 50 hit points or fewer. The fire element obeys Maegera's commands and fights until destroyed."
			}
		]
	},
	"Markham Southwell": {
		name: "Markham Southwell",
		source: ["Storm Kings Thunder", 248],
		size: "Medium",
		type: "humanoid (Turami human)",
		alignment: "lawful good",
		ac: [17, "Splint", false],
		hp: 58,
		hd: [9, 8],
		speed: "30 ft",
		scores: [15, 13, 14, 11, 16, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5, Survival +5",
		passive_perception: 16,
		languages: "Common",
		challenge_rating: "0",
		attacks: [{
				name: "Longsword",
				ability: 1,
				damage: [1, 8, "slashing"],
				range: "Melee (5 ft)",
				description: "Two-Handed: 7 (1d10+2) slashing damage.",
			}, {
				name: "Heavy Crossbow",
				ability: 2,
				damage: [1, 10, "piercing"],
				range: "Ranged (100/400 ft)",
				description: "Markham carries twenty crossbow bolts.",
			},
		],
		actions: [{
				name: "Multiattack",
				description: "Markham makes two melee attacks."
			}
		],
		traits: [{
				name: "Roleplaying Information",
				description: [
					"Sheriff Markham of Bryn Shander is a brawny, likable man of few words. Nothing is more important to him than protecting Icewind Dale. He judges others by their actions, not their words.",
					"Ideal: \"All people deserve to be treated with dignity.\"",
					"Bond: \"Duvessa is a natural leader, but she needs help. That's my job.\"",
					"Flaw: \"I bury my emotions and have no interest in small talk.\""
				]
			}
		]
	},
	"Miros Xelbrin": {
		name: "Miros Xelbrin",
		source: ["Storm Kings Thunder", 251],
		size: "Medium",
		type: "humanoid (Damaran human)",
		alignment: "neutral good",
		ac: [10, "", false],
		hp: 22,
		hd: [4, 8],
		speed: "30 ft",
		scores: [16, 10, 15, 11, 12, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +4, Perception +3",
		passive_perception: 13,
		languages: "Common",
		challenge_rating: "0",
		attacks: [{
				name: "Bear Hug",
				ability: 1,
				damage: [1, 4, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "Target grappled (escape DC 13) and takes 5 (1d4+3) bludgeoning damage at the start of each of Miros's turns until the grapple ends. Miros cannot make attacks while grappling a creature.",
			}, {
				name: "Club",
				ability: 1,
				damage: [1, 4, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Heavy Crossbow",
				ability: 2,
				damage: [1, 10, "piercing"],
				range: "Ranged (100/400 ft)",
				description: "Miros carries ten crossbow bolts.",
			},
		],
		traits: [{
				name: "Roleplaying Information",
				description: [
					"Innkeeper Miros is a retired carnival attraction, dubbed \"the Yeti\" because of his barrel-shaped body and the thick, white hair covering his arms, chest, back, and head. When Goldenfields suffers, so does his business, so he takes strides to protect the compound.",
					"Ideal: \"As does the Emerald Enclave, I believe that civilization and the wilderness need to learn to coexist.",
					"Bond: \"Make fun of me all you like, but don't speak ill of my inn or my employees.",
					"Flaw: \"When something upsets me, I have a tendency to fly into a rage.\"",
				]
			},
		],
	},
	"Narth Tezrin": {
		name: "Narth Tezrin",
		source: ["Storm Kings Thunder", 254],
		size: "Medium",
		type: "humanoid (Tethyrian human)",
		alignment: "chaotic good",
		ac: [12, "", false],
		hp: 18,
		hd: [4, 8],
		speed: "30 ft",
		scores: [10, 15, 10, 12, 14, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Insight +4, Investigation +3, Perception +6, Persuasion +5",
		passive_perception: 16,
		languages: "Common, Dwarvish",
		challenge_rating: "0",
		attacks: [{
				name: "Shortsword",
				ability: 2,
				damage: [1, 6, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Hand Crossbow",
				ability: 2,
				damage: [1, 6, "piercing"],
				range: "Ranged (30/120 ft)",
				description: "Narth carries twenty crossbow bolts.",
			},
		],
		traits: [{
				name: "Cunning Action",
				description: "On each of his turns, Narth can use a bonus action to take the Dash, Disengage, or Hide action."
			}, {
				name: "Roleplaying Information",
				description: [
					"Narth sells gear to adventurers, and he also has an adventurous spirit. The Lionshield Coster pays him well, but he longs to make a name for himself. At the same time, he runsa a business with his partner Alaestra and knows she wouldn't forgive him if he ran off and never returned.",
					"Ideal: \"The bigger the risk, the greater the reward.\"",
					"Bond: \"I adore my colleague Alestra, and I'd like to do something to impress her.\"",
					"Flaw: \"I'll risk life and limb to become a legend.\""
				]
			}
		],
	},
	"Naxene Drathkala": {
		name: "Naxene Drathkala",
		source: ["Storm Kings Thunder", 252],
		size: "Medium",
		type: "humanoid (Turami human)",
		alignment: "neutral good",
		ac: [10, "", false],
		hp: 27,
		hd: [6, 8],
		speed: "30 ft",
		scores: [8, 11, 11, 17, 12, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +5, History +5",
		passive_perception: 11,
		languages: "Common, Draconic, Dwarvish, Elvish",
		challenge_rating: "0",
		attacks: [{
				name: "Staff",
				ability: 1,
				damage: [1, 8, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "Two-Handed: 3 (1d8-1) bludgeoning damage.",
			},
		],
		traits: [{
				name: "Roleplaying Information",
				description: [
					"Goldenfields' crops are vital Waterdeep's survival, which is why the Watchful Order of Magists and Protectors sent Naxene to make sure the temple-farm is adeuately defended. At first she regarded the task as a punishment, but now she appreciates the peace and quiet.",
					"Ideal: \"There's no problem that can't be solved with magic.\"",
					"Bond: \"I have great respect for Lady Laeral Silverhand of Waterdeep. She and the Lords' Alliance are going to bring some much-needed order to this lawless land.\"",
					"Flaw: \"I'm too smart to be wrong about anything.\""
				]
			}
		],
		spells: [
			"Naxene is a 6th level spellcaster. Her spellcasting ability is Intelligence (spell save DC 13; +5 to hit with spell attacks). She has the following wizard spells prepared:",
			"Cantrips (at will): fire bolt, light, mage hand, prestidigitation",
			"1st level (4 slots): mage armor, magic missile, shield",
			"2nd level (3 slots): misty step, suggestion",
			"3rd level (3 slots): fly, lightning bolt"
		],
	},
	"Nimir": {
		name: "Nimir",
		source: ["Storm Kings Thunder", 256],
		size: "Huge",
		type: "Giant",
		alignment: "Lawful Good",
		ac: [16, "Scale Mail", false],
		hp: 230,
		hd: [20, 12],
		speed: "50 ft, swim 50 ft",
		scores: [29, 14, 20, 16, 18, 18],
		saves: [14, "", 10, "", 9, 9],
		skills: "Athletics +14, Insight +8, Perception +9",
		damage_resistances: "cold",
		damage_immunities: "lightning, thunder",
		passive_perception: 19,
		languages: "Common, Giant",
		challenge_rating: "13",
		attacks: [{
				name: "Greatsword",
				ability: 1,
				damage: [6, 6, "slashing"],
				range: "Melee (10 ft)",
				description: "",
			}, {
				name: "Rock",
				ability: 1,
				damage: [4, 12, "bludgeoning"],
				range: "Ranged (60/240 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Amphibious",
				description: "The giant can breathe air and water.",
			}, {
				name: "Innate Spellcasting",
				description: [
					"The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:",
					"At will: detect magic, feather fall, levitate, light",
					"3/day each: control weather, water breathing",
				]
			}, {
				name: "Roleplaying Information",
				description: [
					"Nimir is an insightful, even-keeled storm giant who believes that a lasting alliance between giants and small folk can make the world a safer, more enlightened place. He believes King Hekaton was wise to choose Princess Serissa as his heir apparent, and it would never occur to him to question their orders.",
					"Ideal: \"It's the duty of the big to protect the small.\"",
					"Bond: \"I'd give my life to defend my king and his royal line.\"",
					"Flaw: \"I never question orders.\"",
				],
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The giant makes two greatsword attacks.",
			}, {
				name: "Lightning Strike (Recharge 5-6)",
				description: "The giant hurls a magical lightning bolt at a point it can see within 500 ft of it. Each creature within 10 ft of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one.",
			},
		],
	},
	"Oren Yogilvy": {
		name: "Oren Yogilvy",
		source: ["Storm Kings Thunder", 252],
		size: "Small",
		type: "humanoid (strongheart halfling)",
		alignment: "chaotic good",
		ac: [11, "", false],
		hp: 9,
		hd: [2, 6],
		speed: "25 ft",
		scores: [8, 13, 12, 11, 10, 16],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "poison",
		skills: "Perception +2, Performance +7, Persuasion +5",
		passive_perception: 12,
		languages: "Common, Halfling",
		challenge_rating: "0",
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
				name: "Halfling Nimbleness",
				description: "Oren can move through the space of any creature that is of a size large than his."
			}, {
				name: "Lucky",
				description: "When Oren rolls a 1 on an attack roll, ability check, or saving throw, he can reroll the die and must use the new roll."
			}, {
				name: "Stout Resilience",
				description: "Oren has advantage on saving throws against poison"
			}, {
				name: "Roleplaying Information",
				description: [
					"Oren came to Nurthfurrow's End looking for easy work and found it. He sings for his supper, drinks like a fish, and wanders the fields at night dreaming up new lyrics to entertain the inn's other guests. Oren likes to stir up trouble from time to time, but he doesn't have a mean bone in his body.",
					"Ideal: \"Music is food for the soul.\"",
					"Bond: \"You had me at \"Can I buy you a drink.\"",
					"Flaw: \"I have a knack for putting myself in harm's way. Good thing I'm lucky!\""
				]
			}
		],
	},
	"Orlekto": {
		name: "Orlekto",
		source: ["Storm Kings Thunder", 256],
		size: "Huge",
		type: "Giant",
		alignment: "Chaotic Evil",
		ac: [16, "Scale Mail", false],
		hp: 230,
		hd: [20, 12],
		speed: "50 ft, swim 50 ft",
		scores: [29, 14, 20, 16, 18, 18],
		saves: [14, "", 10, "", 9, 9],
		skills: "Athletics +14, Deception +14, Perception +9",
		damage_resistances: "cold",
		damage_immunities: "lightning, thunder",
		passive_perception: 19,
		languages: "Common, Giant",
		challenge_rating: "13",
		attacks: [{
				name: "Greatsword",
				ability: 1,
				damage: [6, 6, "slashing"],
				range: "Melee (10 ft)",
				description: "",
			}, {
				name: "Rock",
				ability: 1,
				damage: [4, 12, "bludgeoning"],
				range: "Ranged (60/240 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Amphibious",
				description: "The giant can breathe air and water.",
			}, {
				name: "Innate Spellcasting",
				description: [
					"The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:",
					"At will: detect magic, feather fall, levitate, light",
					"3/day each: control weather, water breathing",
				]
			}, {
				name: "Roleplaying Information",
				description: [
					"Orlekto is in love with Princess Mirran and wants to see her become Queen of the Wyrmskull Throne. (If Mirran is dead, Orlekto aims to avenge her.) If the opportunity to eliminate Hekaton or Serissa presents itself, Orlekto seizes it. Until then, he conceals his treacherous nature.",
					"Ideal: \"Storm giants should rule the world. Weak leaders have let dragons and others steal what the gods gave to us!\"",
					"Bond: \"I serve Princess Mirran and her alone.\"",
					"Flaw: \"For Mirran's love or my revenge, I'd betray my king and my honor.\"",
				]
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The giant makes two greatsword attacks.",
			}, {
				name: "Lightning Strike (Recharge 5-6)",
				description: "The giant hurls a magical lightning bolt at a point it can see within 500 ft of it. Each creature within 10 ft of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one.",
			},
		],
	},
	"Othovir": {
		name: "Othovir",
		source: ["Storm Kings Thunder", 255],
		size: "Medium",
		type: "humanoid (Illuskan human",
		alignment: "lawful neutral",
		ac: [10, "", false],
		hp: 16,
		hd: [3, 8],
		speed: "30 ft",
		scores: [11, 10, 13, 12, 14, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Insight +4, Persuasion +5",
		passive_perception: 12,
		languages: "Common, Elvish",
		challenge_rating: "0",
		attacks: [{
				name: "Rapier",
				ability: 1,
				damage: [1, 8, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Roleplaying Information",
				description: [
					"Othovir is a gifted harness-maker who doesn't talk about his family or where he came from. He cares about his business, his clients, and his good name.",
					"Ideal: \"Find what you do well, and do it to the best of your ability.\"",
					"Bond: \"I won't allow my name to be tarnished.\"",
					"Flaw: \"I get angry when others pry into my private life.\""
				]
			},
		],
		reactions: [{
				name: "Parry",
				description: "Othovir adds 2 to his AC against one melee attack that would hit him. To do so, Othovir must see the attacker and be wielding a melee weapon.",
			},
		],
		spells: [
			"Othovir is a 2nd-level spellcaster. His spellcasting ability is Charisma (spell save DC 13; +5 to hit with spell attacks). He has the following sorcerer spells prepared:",
			"Cantrips (at will): blade ward.fire bolt, mending, prestidigitation",
			"1st level (3 slots): mage armor, thunderwave, witch bolt"
		]
	},
	"Purple Wormling": {
		name: "Purple Wormling",
		source: ["Storm Kings Thunder", 242],
		size: "Large",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [12, "Natural Armor", false],
		hp: 42,
		hd: [5, 10],
		speed: "20 ft",
		scores: [16, 7, 16, 1, 6, 2],
		saves: ["", "", "", "", "", ""],
		senses: "blindsight 30 ft, tremorsense 30 ft",
		passive_perception: 8,
		challenge_rating: "2",
		attacks: [{
				name: "Bite",
				ability: 1,
				damage: [1, 8, "piercing"],
				range: "Melee (5 ft)",
				description: "If target is a Small or smaller creature, it must succeed on a DC 13 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the wormling, and it takes 3 (1d6) acid damage at the start of each of the wormling's turns. If the wormling takes 10 damage or more on a single turn from a creature inside it, the wormling must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 ft of the wormling. If the wormling dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 5 ft of movement, exiting prone.",
			}, {
				name: "Tail Stinger",
				ability: 1,
				damage: [1, 4, "piercing"],
				range: "Melee (5 ft)",
				description: "Target must make a DC 13 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The wormling makes two attacks: one with its bite and one with its stinger."
			}
		]
	},
	"Shaldoor": {
		name: "Shaldoor",
		source: ["Storm Kings Thunder", 256],
		size: "Huge",
		type: "Giant",
		alignment: "Chaotic Good",
		ac: [16, "Scale Mail", false],
		hp: 230,
		hd: [20, 12],
		speed: "50 ft, swim 50 ft",
		scores: [29, 14, 20, 16, 18, 18],
		saves: [14, "", 10, "", 9, 9],
		skills: "Animal Handling +9, Athletics +14, Perception +9",
		damage_resistances: "cold",
		damage_immunities: "lightning, thunder",
		passive_perception: 19,
		languages: "Common, Giant",
		challenge_rating: "13",
		attacks: [{
				name: "Greatsword",
				ability: 1,
				damage: [6, 6, "slashing"],
				range: "Melee (10 ft)",
				description: "",
			}, {
				name: "Rock",
				ability: 1,
				damage: [4, 12, "bludgeoning"],
				range: "Ranged (60/240 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Amphibious",
				description: "The giant can breathe air and water.",
			}, {
				name: "Innate Spellcasting",
				description: [
					"The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:",
					"At will: detect magic, feather fall, levitate, light",
					"3/day each: control weather, water breathing",
				]
			}, {
				name: "Roleplaying Information",
				description: [
					"A skilled rider of roes and whales, Shaldoor believes that Annam the All-Father shattered the ordning to push giants into war against the dragons. She is thrilled to be on the front lines in this great conflict!",
					"Ideal: \"Giants are made for war-storm giants most of all!\"",
					"Bond: \"Ostoria is gone, yet I long for the return of a mighty giant empire.\"",
					"Flaw: \"I like to rain destruction down upon my enemies, and I never show them mercy.\"",
				]
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The giant makes two greatsword attacks.",
			}, {
				name: "Lightning Strike (Recharge 5-6)",
				description: "The giant hurls a magical lightning bolt at a point it can see within 500 ft of it. Each creature within 10 ft of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one.",
			},
		],
	},
	"Sir Baric Nylef": {
		name: "Sir Baric Nylef",
		source: ["Storm Kings Thunder", 249],
		size: "Medium",
		type: "humanoid (Illuskan human)",
		alignment: "lawful good",
		ac: [18, "Plate", false],
		hp: 52,
		hd: [8, 8],
		speed: "30 ft",
		scores: [18, 11, 14, 11, 15, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Insight +4, Investigation +2, Medicine +4, Survival +4",
		passive_perception: 12,
		languages: "Common",
		challenge_rating: "0",
		attacks: [{
				name: "Maul",
				ability: 1,
				damage: [2, 6, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Heavy Crossbow",
				ability: 2,
				damage: [1, 10, "piercing"],
				range: "Ranged (100/400 ft)",
				description: "Baric carries twenty crossbow bolts.",
			},
		],
		traits: [{
				name: "Brave",
				description: "Baric has advantage on saving throws against being frightened."
			}, {
				name: "Roleplaying Information",
				description: [
					"As a knight of the Order of the Gauntlet, Sir Baric has sworn oaths to catch evildoers and bring them to justice. His current quarry is a dwarf brigand, Worvil \"the Weezil\" Forkbeard, who is rumored to be hiding in Iceland Dale. In addition to his gear, Sir Baric has an unarmored warhorse, Henry.",
					"Ideal: \"Evil must not be allowed to thrive in this world.\"",
					"Bond: \"Tyr is my lord; the order, my family. Through my actions, I shall honor both.\"",
					"Flaw: \"I'm not afraid to die. When Tyr finally calls me, I'll go to him happily.\""
				]
			}
		],
	},
	"Sirac of Suzail": {
		name: "Sirac of Suzail",
		source: ["Storm Kings Thunder", 247],
		size: "Medium",
		type: "humanoid (Chondathan human)",
		alignment: "lawful good",
		ac: [14, "Leather Armor", false],
		hp: 22,
		hd: [5, 8],
		speed: "30 ft",
		scores: [14, 17, 11, 12, 13, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +4, Insight +3, Survival +3",
		passive_perception: 11,
		languages: "Common, Orc",
		challenge_rating: "0",
		attacks: [{
				name: "Shortsword",
				ability: 2,
				damage: [1, 6, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Dart",
				ability: 2,
				damage: [1, 4, "piercing"],
				range: "Ranged (20/60 ft)",
				description: "Sirac carries six darts.",
			},
		],
		reactions: [{
				name: "Parry",
				description: "Sirac adds 2 to his AC against on melee attack that would hit him. To do so, Sirac must see the attacker and be wielding a melee weapon."
			},
		],
		traits: [{
				name: "Roleplaying Information",
				description: [
					"An acolyte of Torm, Sirac grew up on the streets of Suzail, the capital of Cormyr. He came to Icewind Dale to become a knucklehead trout fishe but instead found religion. The misbegotten son of Artus Climber, a renowened human adventurer, Sirac hasn't seen his father since he was a baby.",
					"Ideal: \"Without duty or loyalty, a man is nothing.\"",
					"Bond: \"Icewind Dale is where i belong for the rest of my life.\"",
					"Flaw: \"I am honest to a fault.\""
				]
			}
		]
	},
	"Shalvus Martholio": {
		name: "Shalvus Martholio",
		source: ["Storm Kings Thunder", 250],
		size: "Medium",
		type: "humanoid (Turami human)",
		alignment: "neutral",
		ac: [13, "Leather Armor", false],
		hp: 27,
		hd: [6, 8],
		speed: "30 ft",
		scores: [10, 15, 10, 12, 14, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +4, Insight +4, Investigation +3, Perception +4, Sleight of Hand +4, Stealth +4",
		passive_perception: 12,
		languages: "Common, Elvish",
		challenge_rating: "0",
		attacks: [{
				name: "Quarterstaff",
				ability: 1,
				damage: [1, 6, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "Or 4 (1d8) bludgeoning damage if used with both hands.",
			}, {
				name: "Hand Crossbow",
				ability: 2,
				damage: [1, 6, "piercing"],
				range: "Ranged (30/120 ft)",
				description: "Shalvus carries ten crossbow bolts.",
			},
		],
		traits: [{
				name: "Sneak Attack (1/turn)",
				description: "Shalvus deals an extra 7 (2d6) damage when he hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft of an ally of Shalvus that isn't incapacitated and Shalvus doesn't have disadvantage on the attack roll.",
			}, {
				name: "Roleplaying Information",
				description: [
					"Nalaskur Thaelond of Bargewright Inn has entrusted the shepherd Shalvus with an important assignment: to figure out the best way by which Goldenfields can be brought under the Black Network's control. Shalvus believes that success will ensure his swift rise through the Zhentarim ranks.",
					"Ideal: \"I'll do what it takes to prove myself to the Zhentarim.\"",
					"Bond: \"I love animals, and I'm very protective of them.\"",
					"Flaw: \"I can't resist taking risks to feed my ambitions.\""
				]
			}
		],
	},
	"Tressym": {
		name: "Tressym",
		source: ["Storm Kings Thunder", 242],
		size: "Tiny",
		type: "beast",
		alignment: "chaotic neutral",
		ac: [12, "", false],
		hp: 5,
		hd: [2, 4],
		speed: "40 ft, climb 30 ft, fly 40' ft",
		scores: [3, 15, 10, 11, 12, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5, Stealth +4",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		passive_perception: 15,
		challenge_rating: "0",
		attacks: [{
				name: "Claws",
				ability: 3,
				damage: [1, "", "slashing"],
				range: "Melee (5 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Detect Invisibility",
				description: "Within 50 ft of the tressym, magical invisibility fails to conceal anything from the tressym's sight"
			}, {
				name: "Keen Smell",
				description: "The tressym has advantage on Wisdom (Perception) checks that rely on smell."
			}, {
				name: "Poison Sense",
				description: "The tressym can detect whether a substance is poisonous by taste, touch, or smell."
			}
		],
	},
	"Urgala Meltimer": {
		name: "Urgala Meltimer",
		source: ["Storm Kings Thunder", 254],
		size: "Medium",
		type: "humanoid (Turami human)",
		alignment: "lawful good",
		ac: [12, "Leather Armor", false],
		hp: 58,
		hd: [9, 8],
		speed: "30 ft",
		scores: [16, 13, 14, 12, 14, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +5, Intimidation +3",
		passive_perception: 12,
		languages: "Common, Giant",
		challenge_rating: "0",
		attacks: [{
				name: "Morningstar",
				ability: 1,
				damage: [1, 8, "piercing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Shortbow",
				ability: 2,
				damage: [1, 6, "piercing"],
				range: "Ranged (80/320 ft)",
				description: "Urgala carries a quiver of twenty arrows",
			},
		],
		traits: [{
				name: "Giant Slayer",
				description: "Any weapon attack that Urgala makes against a giant deals an extra 7 (2d6) damage on a hit.",
			}, {
				name: "Roleplaying Information",
				description: [
					"A retired adventurer, Urgala owns a respectable inn, the Northshield House, and she doesn't want to see it or her neighbors' homes destroyed. She has no tolerance for monsters or bullies.",
					"Ideal: \"We live in a violent world, and sometimes violence is necessary for survival.\"",
					"Bond: \"My home is my life. Threaten it, and I'll hurt you.\"",
					"Flaw: \"I know how treacherous and greedy adventurers can be. I don't trust them-any of them.\"",
				]
			},
		],
		actions: [{
				name: "Multiattack",
				description: "Urgala makes two attacks with her morningstar or her shortbow."
			},
		],
	},
	"Uthgardt Shaman": {
		name: "Uthgardt Shaman",
		source: ["Storm Kings Thunder", 243],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "neutral evil",
		ac: [13, "Natural Armor", false],
		hp: 38,
		hd: [7, 8],
		speed: "30 ft",
		scores: [14, 12, 13, 10, 15, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Medicine +4, Nature +4, Perception +4, Survival +6",
		passive_perception: 14,
		languages: "Bothii, Common",
		challenge_rating: "2",
		attacks: [{
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
				name: "Shortbow",
				ability: 2,
				damage: [1, 6, "piercing"],
				range: "Ranged (80/320 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Innate Spellcasting",
				description: [
					"The shaman can innately cast the following spells. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks).",
					"At Will: dancing lights, message, mage hand, thaumaturgy",
					"1/day: augury, bestow curse, cordon of arrows, detect magic, hex, prayer of healing, speak with dead, spirit guardians"
				]
			},
		],
	},
	"Vaasha": {
		name: "Vaasha",
		source: ["Storm Kings Thunder", 256],
		size: "Huge",
		type: "Giant",
		alignment: "Neutral Good",
		ac: [16, "Scale Mail", false],
		hp: 230,
		hd: [20, 12],
		speed: "50 ft, swim 50 ft",
		scores: [29, 14, 20, 16, 18, 18],
		saves: [14, "", 10, "", 9, 9],
		skills: "Athletics +14, Survival +14, Perception +9",
		damage_resistances: "cold",
		damage_immunities: "lightning, thunder",
		passive_perception: 19,
		languages: "Common, Giant",
		challenge_rating: "13",
		attacks: [{
				name: "Greatsword",
				ability: 1,
				damage: [6, 6, "slashing"],
				range: "Melee (10 ft)",
				description: "",
			}, {
				name: "Rock",
				ability: 1,
				damage: [4, 12, "bludgeoning"],
				range: "Ranged (60/240 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Amphibious",
				description: "The giant can breathe air and water.",
			}, {
				name: "Innate Spellcasting",
				description: [
					"The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:",
					"At will: detect magic, feather fall, levitate, light",
					"3/day each: control weather, water breathing",
				]
			}, {
				name: "Roleplaying Information",
				description: [
					"Vaasha is a skilled hunter and tracker who doesn't charge into danger without first assessing the risks. She's not afraid to speak her mind, even to her king. To her, a worthy leader values the truth, no matter how painful it is.",
					"Ideal: \"I want this conflict over with so that I can return to the quiet stillness of the ocean depths.\"",
					"Bond: \"I'll protect this beautiful world from the ravages of evil with my dying breath.\"",
					"Flaw: \"I don't care if my words hurt others' feelings.\"",
				]
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The giant makes two greatsword attacks.",
			}, {
				name: "Lightning Strike (Recharge 5-6)",
				description: "The giant hurls a magical lightning bolt at a point it can see within 500 ft of it. Each creature within 10 ft of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one.",
			},
		],
	},
	"Yakfolk Warrior": {
		name: "Yakfolk Warrior",
		source: ["Storm Kings Thunder", 244],
		size: "Large",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [11, "Leather Armor", false],
		hp: 60,
		hd: [8, 10],
		speed: "30 ft",
		scores: [18, 11, 15, 14, 15, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +4, Survival +4",
		passive_perception: 12,
		languages: "Common, Yikaria",
		challenge_rating: "3",
		attacks: [{
				name: "Greatsword",
				ability: 1,
				damage: [4, 6, "slashing"],
				range: "Melee (5 ft)",
				description: "",
			}, {
				name: "Longbow",
				ability: 2,
				damage: [2, 8, "piercing"],
				range: "Ranged (150/600 ft)",
				description: "",
			},
		],
		traits: [{
				name: "Possession (Recharges after a rest",
				description: [
					"The yakfolk attempts to magically possess a humanoid or giant. The yakfolk must touch the target throughout a short rest or the attempt fails. At the end of the rest, the target must succeed a DC 12 Con saving throw or be possessed by the yakfolk, which disappears with everything its carrying and wearing. Until the possession ends, the target is incapacitated, loses control of its body, and it unaware of its surroundings. The yakfolk now controls the body and cannot be targeted by any attack, spell, or other effect, and it retains its alignment, its Intelligence, Wisdom, and Charisma scores; and its proficiencies. It otherwise uses the target's statistics, except the target's knowledge, class features, feats, and proficiencies.",
					"The possession lats until either the body drops to 0 hit points, the yakfolk ends the possession as an action, or the yakfolk is forced out of the body by an effect such as dispel evil and good spell. When the possession ends, the yakfolk appears in an unoccupied space within 5 ft of the body and is stunned until the end of its next turn. If the host body dies while it is possessed by the yakfolk, the yakfolk dies as well and its body does not reappear."
				]
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The yakfolk makes two attacks, either with it's greatsword or its longbow"
			}
		]
	},
	"Yakfolk Priest": {
		name: "Yakfolk Priest",
		source: ["Storm Kings Thunder", 245],
		size: "Large",
		type: "monstrosity",
		alignment: "neutral evil",
		ac: [12, "Hide Armor", false],
		hp: 52,
		hd: [7, 10],
		speed: "30 ft",
		scores: [16, 11, 15, 14, 18, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +4, Medicine +6, Survival +6",
		passive_perception: 14,
		languages: "Common, Yikaria",
		challenge_rating: "4",
		attacks: [{
				name: "Quarterstaff",
				ability: 1,
				damage: [2, 6, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "Two-Handed: 12 (2d8+3) bludgeoning damage.",
			}
		],
		traits: [{
				name: "Possession (Recharges after a rest",
				description: [
					"The yakfolk attempts to magically possess a humanoid or giant. The yakfolk must touch the target throughout a short rest or the attempt fails. At the end of the rest, the target must succeed a DC 12 Con saving throw or be possessed by the yakfolk, which disappears with everything its carrying and wearing. Until the possession ends, the target is incapacitated, loses control of its body, and it unaware of its surroundings. The yakfolk now controls the body and cannot be targeted by any attack, spell, or other effect, and it retains its alignment, its Intelligence, Wisdom, and Charisma scores; and its proficiencies. It otherwise uses the target's statistics, except the target's knowledge, class features, feats, and proficiencies.",
					"The possession lats until either the body drops to 0 hit points, the yakfolk ends the possession as an action, or the yakfolk is forced out of the body by an effect such as dispel evil and good spell. When the possession ends, the yakfolk appears in an unoccupied space within 5 ft of the body and is stunned until the end of its next turn. If the host body dies while it is possessed by the yakfolk, the yakfolk dies as well and its body does not reappear."
				]
			},
		],
		actions: [{
				name: "Multiattack",
				description: "The yakfolk makes two attacks, either with it's greatsword or its longbow"
			}, {
				name: "Summon Earth Elemental (1/day)",
				description: "The yakfolk summons an earth elemental. The elemental appears in an unoccupied space within 60 ft of its summoner and acts as an ally of the summoner. It remains for 10 minutes, until it dies, or until its summoner dismisses it as an action."
			}
		],
		spells: [
			"The yakfolk is a 7th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). The priest has the following cleric spells prepared: ",
			"Cantrips (at will): light, mending, sacred flame, thaumaturgy",
			"1st level (4 slots): bane, command, cure wounds, sanctuary",
			"2nd level (3 slots): augury, hold person, spiritual weapon",
			"3rd level (3 slots): bestow curse, protection from energy, sending",
			"4th level (1 slots): banishment"
		],
	},
	"Zi Liang": {
		name: "Zi Liang",
		source: ["Storm Kings Thunder", 251],
		size: "Medium",
		type: "humanoid (Shou human)",
		alignment: "chaotic good",
		ac: [15, "", false],
		hp: 22,
		hd: [5, 8],
		speed: "30 ft",
		scores: [12, 15, 11, 14, 16, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +4, Athletics +3, Perception +5, Stealth +4",
		passive_perception: 15,
		languages: "Common, Elvish, Goblin",
		challenge_rating: "0",
		attacks: [{
				name: "Quarterstaff",
				ability: 1,
				damage: [1, 6, "bludgeoning"],
				range: "Melee (5 ft)",
				description: "Or 5 (1d8+1) bludgeoning damage if used with both hands.",
			}, {
				name: "Sling",
				ability: 2,
				damage: [1, 4, "bludgeoning"],
				range: "Ranged (30/120 ft)",
				description: "Zi carries twenty sling stones.",
			},
		],
		traits: [{
				name: "Unarmored Defense",
				description: "While Zi is wearing no armor and wielding no shield, her AC includes her Wisdom modifier."
			}, {
				name: "Roleplaying Information",
				description: [
					"Zi Liang is a devout worshiper of Chauntea, the Earth Mother. She has considerably less faith in Goldenfields' defenders, so she patrols the temple-farm during her off-duty hours.",
					"Ideal: \"If we faithfully tend to our gardens and our fields, Chauntea will smile upon us.",
					"Bond: \"Goldenfields is the breadbasket of the North. People depend on its safety and prosperity, and I'll do what must be done to protect it.",
					"Flaw: \"I don't trust authority. I do what my heart says is right.\"",
				]
			}
		],
		actions: [{
				name: "Multiattack",
				description: "Zi makes two melee attacks."
			}
		]
	}
};