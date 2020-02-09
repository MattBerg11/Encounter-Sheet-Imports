var ERFtLW = {
	// 42
	"Belashyrra": {
		name: "Belashyrra",
		source: ["Eberron: Rising from the Last War", 286],
		size: "Medium",
		type: "aberration",
		alignment: "Chaotic Evil",
		ac: [19, "Natural Armor", false],
		hp: 304,
		hd: [32, 8],
		scores: [24, 21, 20, 25, 22, 23],
		saves: ["", "", "", "14", "13", "13"],
		skills: "Arcana +14, Perception +13",
		passive_perception: "23",
		languages: "Deep Speech, telepathy 120 ft",
		challenge_rating: "22",
		damage_resistances: "poison, psychic",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "blinded, charmed, exhaustion, frightened, poisoned, prone",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [3, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Alien Mind",
			description: "If a creature tries to read Belashyrra's thoughts or deals psychic damage to it, that creature must succeed on a DC 22 Intelligence saving throw or be stunned for 1 minute. The stunned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "Eye Thief",
			description: "Belashyrra can see through the eyes of all creatures within 120 feet of it. It can use its Eye Ray through any creature within 120 feet of it, as though it were in that creature's space."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Belashyrra fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Belashyrra has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Regeneration",
			description: "Belashyrra regains 20 hit points at the start of its turn. If it takes radiant damage, this trait doesn't function at the start of its next turn. Belashyrra dies only if it starts its turn with 0 hit points and doesn't regenerate."
		}, {
			name: "Teleport",
			description: "As a bonus action, Belashyrra can teleport up to 30 feet to an unoccupied space it can see."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Belashyrra makes two attacks with its claws and uses its Eye Ray once."
		}, {
			name: "Eye Ray",
			description: [
				"Belashyrra shoots one of the following magical eye rays of its choice, targeting one creature it can see within 120 feet of it:",
				"Psyche-Reconstruction Ray: The target must make a DC 22 Wisdom saving throw, taking 49 (9d10) psychic damage on a failed save, or half as much damage on a successful one. If this damage reduces a creature to 0 hit points, it dies and transforms into a spectator under Belashyrra's control and acts immediately after Belashyrra in the initiative order. The target can't be returned to its original form by any means short of a wish spell.",
				"Domination Ray: The target must succeed on a DC 22 Wisdom saving throw or be charmed by Belashyrra for 1 minute or until the target takes damage. Belashyrra can issue telepathic commands to the charmed creature (no action required), which it does its best to obey.",
				"Mind-Weakening Ray: The target must succeed on a DC 22 Intelligence saving throw or take 36 (8d8) psychic damage and be unable to cast spells or activate magic items for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"Blinding Ray: The target and each creature within 10 feet of it must succeed on a DC 22 Constitution saving throw or take 19 (3d12) radiant damage and be blinded for 1 minute. Until this blindness ends, Belyshyrra can see through the blinded creature's eyes. The blinded creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
			]
		}
		],
		legendary_actions: [{
			description: "Belashyrra can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Belashyrra regains spent legendary actions at the start of its turn."
		}, {
			name: "Claw",
			description: "Belashyrra makes one claw attack."
		}, {
			name: "Implant Fear (Costs 2 Actions)",
			description: "Belashyrra targets a creature it can see within 60 feet of it. The target must succeed on a DC 22 Wisdom saving throw or take 22 (4d10) psychic damage and immediately use its reaction, if available, to move as far as its speed allows away from Belashyrra."
		}, {
			name: "Rend Reality (Costs 3 Actions)",
			description: "Belashyrra rips at the bonds of reality in its immediate area. Each creature within 10 feet of Belashyrra must succeed on a DC 22 Constitution saving throw or take 19 (3d12) force damage and gain one level of exhaustion."
		}, {
			name: "Lair Actions",
			description: [
				"While within the Citadel of Lidless Eyes, Belashyrra can invoke the ambient magic to take lair actions. On initiative count 20 (losing initiative ties), Belashyrra can take a lair action to cause one of the following effects; it can't use the same effect two rounds in a row:",
				"An eye opens on a solid surface within 60 feet of Belashyrra. One random eye ray of Belashyrra's shoots from that eye at a target of Belashyrra's choice that it can see. The eye then closes and disappears.",
				"Belashyrra creates a wave of madness. Each creature it can see within its lair must succeed on a DC 22 Wisdom saving throw or be charmed for 1 minute. While charmed in this way, a creature must use its action at the start of its turn before moving to make a melee attack against another creature of Belashyrra's choice within reach. If there are no creatures within reach, the charmed creature can act normally for that turn. A charmed creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"Belashyrra taps into the eyesight of creatures in its lair and alters their perception. Each creature of Belashyrra's choice in the lair must make a DC 22 Wisdom saving throw. On a failure, the affected creature perceives objects and creatures a short distance from their actual locations, imposing disadvantage on the creature's attack rolls against those targets. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to this lair action for the next 24 hours."
			]
		}, {
			name: "Regional Effects",
			description: [
				"Belashyrra's lair is known to touch remote areas of the Shadow Marches and caverns below Xen'drik. A region containing a passage to Belashyrra's lair is warped by its magic, which creates one or more of the following effects:",
				"Creatures within 1 mile of the passage sometimes feel as if they're being watched.",
				"Beasts that live within 5 miles of the passage undergo magical transmutation, growing eyes or eyestalks that Belashyrra can see through.",
				"A humanoid who spends at least 1 hour within 1 mile of the passage must succeed on a DC 21 Wisdom saving throw or descend into a type of madness (see \"Madness of Belashyrra\" below). A creature that succeeds on this saving throw can't be affected by this regional effect again for 24 hours.",
				"If Belashyrra dies, these effects fade over the course of 1d10 days."
			]
		}
		],
		description: "Dreadful Visions:The madness of Belashyrra is tied to sight: images that can't be unseen, horrific hallucinations, the fear of blindness and of being watched—or realizing that something else is using your eyes. Belashyrra can force its victims to question whether what they perceive is real, or can fill their world with such terrors that they willingly blind themselves to escape. Belashyrra sees mortals as raw materials to be exploited or insects to be exterminated. However, the Lord of Eyes has been known to take an interest in specific mortals. Belashyrra's warlocks serve as its envoys in the world and are often directed to seek out creatures and sites that the daelkyr wishes to see through their eyes. Belashyrra's Cults: The Lord of Eyes has followers across Khorvaire, and its cults are typically driven by mad visions. Devoted cultists can grow eyes in unusual locations, and might have darkvision or other supernatural abilities when they view the world through those eyes. Beholderkin often advise or lead Belashyrra's cults, and cultists typically treat these aberrations as divine beings. Belashyrra's Lair Belashyrra makes its lair in the Citadel of Lidless Eyes deep in Khyber, a site that appears to have been molded from molten stone, chitin, and flesh. Across its warped and liquid expanses, thousands of eyes of every size and shape peer into the endless darkness. Beholders, dolgrims, and stranger aberrations dwell within the halls of the citadel, which is one of the few places where such creatures are willing to live side by side. Some beholderkin serve Belashyrra as guards and agents, while others spend their lives in deep meditation, pursuing inner visions known only to the Lord of Eyes. It's rumored that anyone who sits on the citadel's throne can see through the eyes of any sentient creature on Eberron or in Khyber. If encountered in its lair, Belashyrra has a challenge rating of 23 (50,000 XP). Madness of Belashyrra If a creature goes mad in Belashyrra's lair or while it can see the daelkyr, it gains a form of indefinite madness. Roll on the Madness of Belashyrra table to determine the nature of this madness, which takes the form of a character flaw that lasts until cured. Chapter 8 of the Dungeon Master's Guide has more information on madness.",
		environment: ""
	},
	"Bone Knight": {
		name: "Bone Knight",
		source: ["Eberron: Rising from the Last War", 316],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Any Non-Good Alignment",
		ac: [20, "Bonecraft Armor", false],
		hp: 84,
		hd: [13, 8],
		scores: [18, 13, 14, 12, 14, 16],
		saves: ["", "", "", "", "5", "6"],
		skills: "Athletics +7, Deception +6, Intimidation +6",
		passive_perception: "12",
		languages: "any one language (usually Common)",
		challenge_rating: "5",
		damage_resistances: "necrotic, poison",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
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
			name: "Commander of Bones",
			description: "As a bonus action, the knight can target one skeleton or zombie it can see within 30 feet of it. The target must make a DC 14 Wisdom saving throw. On a failed save, the target must obey the knight's commands until the knight dies or until the knight releases it as a bonus action. The knight can command up to twelve undead at a time this way."
		}, {
			name: "Master of the Pallid Banner",
			description: "While within 60 feet of the knight, any undead ally of the knight has advantage on saving throws against any effect that turns undead."
		}
		],
		spells: [
			"The knight is an 8th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). It has the following paladin spells prepared:",
			"1st level (4 slots): command, compelled duel, hellish rebuke, wrathful smite",
			"2nd level (3 slots): branding smite, crown of madness, darkness, find steed, magic weapon"
		],

		actions: [{
			name: "Multiattack",
			description: "The knight attacks twice with one of its weapons."
		}
		],
		slots: "4, 3",
		description: "Bone knights are the champions of the Order of the Emerald Claw. Clad in distinctive bonecraft armor—heavy armor adorned with the bones of fallen enemies—these fearsome warriors command squads of undead soldiers as they pursue the sinister goals of Lady Illmarrow. Karrnathi Patriots: Early in the Last War, Karrnath turned to the necromancers of the Blood of Vol to bolster the nation's army with undead forces. The skeletons and zombies created by the necromancers were mindless creatures that required guidance. The first bone knights were appointed to provide this control. Devoted paladins of the Blood of Vol were fused into suits of bonecraft armor, whose magic focused their divine gifts, allowing them to command units of mindless undead. Bonecraft armor can't be removed without killing the knight who wears it, and when donning it, each bone knight understood that their former life was over. The Fall of the Emerald Claw: During the Last War, many bone knights took service with the Order of the Emerald Claw, helping that name strike fear into the enemies of Karrnath. In the last decade, King Kaius III of Karrnath has done much to ensure a peaceful end to the Last War. Under the terms of the Treaty of Thronehold, Kaius sealed most of Karrnath's undead in deep vaults, and the Order of the Emerald Claw was disbanded. A few bone knights remained in service to the crown, but most were cast aside—still bound to their bonecraft armor and still convinced of Karrnathi supremacy. These bone knights felt that Kaius had betrayed both them and their nation, leading their once-proud order to find a new purpose in the service of Lady Illmarrow.",
	},
	"Changeling": {
		name: "Changeling",
		source: ["Eberron: Rising from the Last War", 317],
		size: "Medium",
		type: "humanoid (changeling, shapechanger)",
		alignment: "Any alignment",
		ac: [13, "Leather Armor", false],
		hp: 22,
		hd: [4, 8],
		scores: [8, 15, 12, 14, 10, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +4, Deception +5, Insight +2, Perception +2, Persuasion +5",
		passive_perception: "12",
		languages: "Common, Dwarvish, Elvish, Halfling, Thieves' cant",
		challenge_rating: "1/2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
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
			name: "Change Appearance",
			description: "The changeling can use its action to polymorph into a Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The changeling makes two attacks with its dagger."
		}, {
			name: "Unsettling Visage (Recharges after a Short or Long Rest)",
			description: "Each creature within 30 feet of the changeling must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}
		],
		description: "Changelings are a humanoid race of shapechangers who conceal their true identities behind false faces. Their gifts of mimicry allow them to appear as members of any humanoid culture, playing the part of a dwarf one day and a dragonborn the next. Although changelings can adopt any guise, most rely on a few established personas, each with a developed history and a network of friends and acquaintances.",
	},
	"Clawfoot": {
		name: "Clawfoot",
		source: ["Eberron: Rising from the Last War", 289],
		size: "Medium",
		type: "beast",
		alignment: "Unaligned",
		ac: [13, "", false],
		hp: 19,
		hd: [3, 8],
		scores: [12, 16, 14, 4, 12, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +5",
		passive_perception: "13",
		languages: "",
		challenge_rating: "1",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 8, "v"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 2,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Pack Tactics",
			description: "The clawfoot has advantage on an attack roll against a creature if at least one of the clawfoot's allies is within 5 feet of the creature and the ally isn't incapacitated."
		}, {
			name: "Pounce",
			description: "If the clawfoot moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 11 Strength saving throw or be knocked prone. If the target is prone, the clawfoot can make one bite attack against it as a bonus action."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The clawfoot makes two attacks: one with its bite and one with its claws."
		}
		],
		description: "Clawfoot dinosaurs are two-legged saurians with sharp teeth and toe claws that resemble deadly sickles. They are imposing creatures, about the size of a tall human, and are fierce enough to take down even larger prey. In the wild, an untrained clawfoot can easily hold its own in combat, but they are even fiercer when hunting in packs. Their instinct for pack structure has made these dinosaurs a traditional war mount for the halflings of the Talenta Plains, with clawfoots quickly and eagerly responding to training and control. Dinosaurs are widespread on Eberron, particularly in Q'barra, the Talenta Plains, Xen'drik, and Argonnessen. Smaller dinosaurs are the rule in Q'barra and the Talenta Plains, including varieties commonly used by Talenta halflings as mounts.",
	},
	"Corrin Delmaco": {
		name: "Corrin Delmaco",
		source: ["Eberron: Rising from the Last War", 271],
		size: "Small",
		type: "humanoid (halfling)",
		alignment: "Any alignment",
		ac: [12, "", false],
		hp: 21,
		hd: [6, 6],
		scores: [10, 15, 10, 12, 14, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Insight +4, Investigation +5, Perception +6, Persuasion +5, Sleight of hand +4, Stealth +4",
		passive_perception: "16",
		languages: "any two languages",
		challenge_rating: "1",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
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
			description: "",
		}
		],
		traits: [{
			name: "Cunning Action",
			description: "On each of its turns, Corrin can use a bonus action to take the Dash, Disengage, or Hide action."
		}, {
			name: "Sneak Attack (1/Turn)",
			description: "Corrin deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of Corrin that isn't incapacitated and Corrin doesn't have disadvantage on the attack roll."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Corrin makes two melee attacks."
		}
		],
	},
	"Dolgaunt": {
		name: "Dolgaunt",
		source: ["Eberron: Rising from the Last War", 290],
		size: "Medium",
		type: "aberration",
		alignment: "Lawful Evil",
		ac: [16, "Unarmored Defense", false],
		hp: 33,
		hd: [6, 8],
		scores: [14, 18, 12, 13, 14, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +6, Perception +4, Stealth +6",
		passive_perception: "14",
		languages: "Deep Speech, Goblin",
		challenge_rating: "3",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "blinded",
		senses: "blindsight 120 ft (blind beyond this radius)",
		attacks: [{
			name: "Tentacle",
			ability: 2,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "Target is grappled (escape DC 12) if it is a Large or smaller creature. Until this grapple ends, the dolgaunt can't use the same tentacle on another target. The dolgaunt has two tentacles.",
		}, {
			name: "Unarmed Strike",
			ability: 2,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Evasion",
			description: "If the dolgaunt is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the dolgaunt instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's incapacitated."
		}, {
			name: "Unarmored Defense",
			description: "While the dolgaunt is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dolgaunt makes two tentacle attacks and two unarmed strikes. Up to two tentacle attacks can be replaced by Vitality Drain."
		}, {
			name: "Vitality Drain",
			description: "One creature grappled by a tentacle of the dolgaunt must make a DC 11 Constitution saving throw. On a failed save, the target takes 9 (2d8) necrotic damage, and the dolgaunt regains a number of hit points equal to half the necrotic damage taken."
		}
		],
		description: "Dolgaunts are emaciated hobgoblins with disease-hued flesh. Their eye sockets gape open and empty above a mouth with a wormlike tongue. Writhing cilia cover their bodies, with longer tendrils around their heads and two wiry tentacles protruding from their bare shoulders. A dolgaunt is blind but can perceive its surroundings through the sensitive cilia that cover its skin. It can also absorb life through its tentacles, allowing it to drain the vitality out of any creature it touches. Warped by Chaos: When the daelkyr emerged from Xoriat to conquer Khorvaire, they captured and transformed that land's indigenous creatures to create armies of hideous warriors. Dyrrn the Corruptor shaped dolgaunts from hobgoblin stock, turning them into intelligent, cold, and efficient killers. When the daelkyr were defeated, the dolgaunts descended into the depths of Khyber with their masters. There, they study in cavernous monasteries, forging their bodies into living weapons dedicated to the missions given them by those masters. Dolgaunts are often found commanding squads of dolgrims, and can also be found working with the Cults of the Dragon Below—particularly those devoted to Dyrrn the Corruptor.",
	},
	"Dolgrim": {
		name: "Dolgrim",
		source: ["Eberron: Rising from the Last War", 291],
		size: "Small",
		type: "aberration",
		alignment: "Chaotic Evil",
		ac: [15, "Natural Armor", false],
		hp: 13,
		hd: [3, 6],
		scores: [15, 14, 12, 8, 10, 8],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "10",
		languages: "Deep Speech, Goblin",
		challenge_rating: "1/2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Morningstar",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Hand Crossbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
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
		}
		],
		traits: [{
			name: "Dual Consciousness",
			description: "The dolgrim has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dolgrim makes three attacks."
		}
		],
		description: "Dolgrims are squat, deformed things. Warped by the daelkyr, a dolgrim is essentially two goblins crushed into one creature, their misshapen body boasting four arms and a pair of twisted mouths that gibber and slather at the front of a headless torso. The two mouths of a dolgrim sometimes carry on demented conversations with one another. However, a dolgrim has only a single personality—sadistic, bloodthirsty, and brutally dedicated to serving itself. Small numbers of these creatures sometimes make their way to the surface, often under the command of dolgaunts, and undertaking missions advancing the inscrutable schemes of their malevolent masters. But great hordes of dolgrims remain clustered in Khyber with the daelkyr, dreaming of the day when they will be released into Eberron to feast and destroy.",
	},
	"Dusk Hag": {
		name: "Dusk Hag",
		source: ["Eberron: Rising from the Last War", 292],
		size: "Medium",
		type: "fey",
		alignment: "Neutral Evil",
		ac: [17, "Natural Armor", false],
		hp: 82,
		hd: [15, 8],
		scores: [11, 14, 12, 17, 16, 18],
		saves: ["", "", "", "6", "6", ""],
		skills: "Deception +7, Insight +6, Perception +6",
		passive_perception: "16",
		languages: "Common, Giant, Infernal",
		challenge_rating: "6",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "blinded, charmed, frightened",
		senses: "blindsight 60 ft",
		attacks: [{
			name: "Claws",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Nightmare Touch",
			ability: 6,
			damage: [4, 6, ""],
			range: "Melee (5 ft)",
			modifiers: ["", "", true], // bonuses to: [to hit, to damage, add ability to damage];
			description: "Melee Spell Attack: +7 to hit, reach 5 ft, one creature. 18 (4d6+4) psychic damage. If the target is unconscious, it takes an extra 10 (3d6) psychic damage and is cursed until the hag dies or the curse is removed. The cursed creature's hit point maximum decreases by 5 (1d10) whenever it finishes a long rest.",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The hag has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The hag's spellcasting ability is Charisma (spell save DC 15). She can innately cast the following spells, requiring no material components:",
				"At will: detect magic, disguise self",
				"3/day each: dream, hypnotic pattern, sleep (9d8)",
				"1/day each: legend lore, scrying"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hag makes two Nightmare Touch attacks."
		}
		],
		reactions: [{
			name: "Dream Eater",
			description: "When an unconscious creature the hag can see within 30 feet of her regains consciousness, the hag can force the creature to make a DC 15 Wisdom saving throw. Unless the save succeeds, the creature takes 11 (2d10) psychic damage, and the hag regains hit points equal to the amount of damage taken."
		}
		],
		description: "Dusk hags resemble gnarled crones with shriveled orange skin, tangled gray hair, and eyes that burn like hot coals. They see visions of the future in their dreams, and their dark magic allows them to influence the dreams of others, sending messages or inflicting nightmares with a touch. Tales talk of ambitious wizards, frantic monarchs, and desperate heroes undertaking quests or making bargains with a dusk hag in exchange for its prophecies and visions of the future. But the information gained from a dusk hag often has a way of causing more pain than joy. Like all hags, dusk hags enjoy causing strife to those who bargain with them, and find ways to twist and turn promises to their own advantage. The Dusk Hag Prophecies table provides examples of the sort of dreams dusk hags might share with unsuspecting sleepers.",
	},
	"Dyrrn": {
		name: "Dyrrn",
		source: ["Eberron: Rising from the Last War", 288],
		size: "Medium",
		type: "aberration",
		alignment: "Chaotic Evil",
		ac: [21, "Natural Armor", false],
		hp: 325,
		hd: [31, 8],
		scores: [26, 21, 22, 26, 23, 24],
		saves: ["", "", "", "15", "13", "14"],
		skills: "Arcana +15, History +15, Insight +13, Perception +13",
		passive_perception: "23",
		languages: "Deep Speech, telepathy 120 ft",
		challenge_rating: "24",
		damage_resistances: "poison, psychic",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "blinded, charmed, exhaustion, frightened, poisoned, prone",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Tentacle Whip",
			ability: 1,
			damage: [3, 10, "slashing"],
			range: "Melee (10 ft)",
			description: "If the target is a Medium or smaller creature, it is grappled (escape DC 23), pulled into an unoccupied space within 5 feet of Dyrrn, and must succeed on a DC 23 Intelligence saving throw or be stunned until this grapple ends. Dyrrn can't use the same tentacle whip on another target until this grapple ends. Dyrrn has two tentacle whips.",
		}
		],
		traits: [{
			name: "Alien Mind",
			description: "If a creature tries to read Dyrrn's thoughts or deals psychic damage to it, that creature must succeed on a DC 23 Intelligence saving throw or be stunned for 1 minute. The stunned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Dyrrn fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Dyrrn has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Regeneration",
			description: "Dyrrn regains 20 hit points at the start of its turn. If Dyrrn takes radiant damage, this trait doesn't function at the start of its next turn. Dyrrn dies only if it starts its turn with 0 hit points and doesn't regenerate."
		}, {
			name: "Teleport",
			description: "As a bonus action, Dyrrn can teleport up to 30 feet to an unoccupied space it can see."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Dyrrn makes one Tentacle Whip attack and uses its Corruption once. Dyrrn can replace its Tentacle Whip attack with Extract Brain if it has a creature grappled."
		}, {
			name: "Corruption",
			description: [
				"Dyrrn targets one creature it can see within 60 feet of it. The target must succeed on a DC 23 Constitution saving throw or take 22 (4d6+8) necrotic damage and become corrupted for 1 minute.",
				"A corrupted creature's flesh twists in alien ways. The creature has disadvantage on attack rolls, its speed is reduced by half, and if it tries to cast a spell, it must first succeed on a DC 15 Intelligence check or the spell fails and is wasted. The corrupted creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
			]
		}, {
			name: "Extract Brain",
			description: "Melee Weapon Attack: +15 to hit, reach 5 ft, one incapacitated creature grappled by Dyrrn. 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, Dyrrn kills the target by extracting and devouring its brain.",
			attack: "Extract Brain|15|10d10"
		}
		],
		legendary_actions: [{
			description: "Dyrrn can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Dyrrn regains spent legendary actions at the start of its turn."
		}, {
			name: "Tentacle Whip",
			description: "Dyrrn makes one attack with its Tentacle Whip."
		}, {
			name: "Spawn Aberration (Costs 2 Actions)",
			description: "Dyrrn regurgitates an intellect devourer in an unoccupied space within 5 feet of it. The intellect devourer is under Dyrrn's control and acts immediately after Dyrrn in the initiative order."
		}, {
			name: "Mind Blast (Costs 3 Actions)",
			description: "Dyrrn magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 23 Intelligence saving throw or take 30 (5d8+8) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "Lair Actions",
			description: [
				"While within the Palace of Sinew, Dyrrn can invoke the ambient magic to take lair actions. On initiative count 20 (losing initiative ties), Dyrrn can take a lair action to cause one of the following effects; it can't use the same effect two rounds in a row:",
				"Dyrrn uses its Corruption action.",
				"A 30-foot-square area of ground within 120 feet of Dyrrn sprouts tentacles until initiative count 20 on the next round. Any creature that starts or ends its turn in the area must succeed on a DC 23 Strength saving throw or be restrained. A creature can escape the tentacles with a successful DC 23 Strength (Athletics) or Dexterity (Acrobatics) check as an action.",
				"Each creature of Dyrrn's choice that it can see within 120 feet of it must succeed on a DC 23 Wisdom saving throw or take 26 (4d12) psychic damage. Unless the target has immunity to psychic damage, its Intelligence score is reduced by 1d4 each time it fails the saving throw for this lair action. The target dies if its Intelligence score is reduced to 0. The reduction lasts until the target finishes a short or long rest."
			]
		}, {
			name: "Regional Effects",
			description: [
				"A region containing a passage to Dyrrn's lair is warped in one or more of these ways:",
				"Plants and animals raised within 2 mile of the passage have twisted, aberrant forms. Use the Daelkyr Modifications table for inspiration.",
				"Creatures within 1 mile of the passage frequently feel as if something is crawling under their skin.",
				"If a humanoid spends at least 1 hour within 1 mile of the passage, that creature must succeed on a DC 22 Wisdom saving throw or descend into a type of madness (see \"Madness of Dyrrn\" below). A creature that succeeds on this saving throw can't be affected by this regional effect again for 24 hours.",
				"If Dyrrn dies, these effects fade away after 1d10 days."
			]
		}
		],
	},
	"Expeditious Messenger": {
		name: "Expeditious Messenger",
		source: ["Eberron: Rising from the Last War", 293],
		size: "Tiny",
		type: "construct",
		alignment: "Neutral",
		ac: [13, "", false],
		hp: 7,
		hd: [2, 4],
		scores: [6, 16, 13, 8, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +5, Stealth +5",
		passive_perception: "11",
		languages: "one language spoken by its creator",
		challenge_rating: "1/8",
		damage_resistances: "",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "exhaustion, poisoned",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Flyby",
			description: "The messenger doesn't provoke opportunity attacks when it flies out of an enemy's reach."
		}, {
			name: "Telepathic Bond",
			description: "While the messenger is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically."
		}
		],
	},
	"Fastieth": {
		name: "Fastieth",
		source: ["Eberron: Rising from the Last War", 289],
		size: "Medium",
		type: "beast",
		alignment: "Unaligned",
		ac: [14, "", false],
		hp: 9,
		hd: [2, 8],
		scores: [12, 18, 10, 4, 11, 4],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "10",
		languages: "",
		challenge_rating: "1/4",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Quickness (Recharge 5-6)",
			description: "The fastieth can take the Dodge action as a bonus action."
		}
		],
	},
	"Garra": {
		name: "Garra",
		source: ["Eberron: Rising from the Last War", 272],
		size: "Large",
		type: "giant",
		alignment: "Any Chaotic Alignment",
		ac: [12, "Hide Armor", false],
		hp: 30,
		hd: [4, 10],
		scores: [17, 10, 14, 7, 9, 10],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "9",
		languages: "Common, Giant",
		challenge_rating: "1",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Battleaxe",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 14 (2d10+3) slashing damage.",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		},
		],
		environment: "underdark, mountain, forest, hill, urban, desert, arctic"
	},
	"Hashalaq Quori": {
		name: "Hashalaq Quori",
		source: ["Eberron: Rising from the Last War", 305],
		size: "Medium",
		type: "aberration",
		alignment: "Lawful Evil",
		ac: [17, "Natural Armor", false],
		hp: 99,
		hd: [18, 8],
		scores: [12, 14, 13, 18, 16, 18],
		saves: ["", "", "", "", "7", "8"],
		skills: "Arcana +12, History +12, Insight +11, Persuasion +8",
		passive_perception: "13",
		languages: "Common, Quori",
		challenge_rating: "9",
		damage_resistances: "psychic",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, frightened",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Idyllic Touch",
			ability: 4,
			damage: [1, 10, "force"],
			range: "Melee (5 ft)",
			modifiers: ["", "", true], // bonuses to: [to hit, to damage, add ability to damage];
			description: "If the target is a creature, it must succeed on a DC 16 Wisdom saving throw or fall prone in a fit of laughter.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The quori uses its Mind Thrust twice."
		}, {
			name: "Mind Thrust",
			description: "The quori targets a creature it can see within 60 feet of it. The target must make a DC 16 Wisdom saving throw, taking 18 (4d8) psychic damage on a failed save, or half as much damage on a successful one."
		}, {
			name: "Possession (Recharge 6)",
			description: [
				"One humanoid that the quori can see within 5 feet of it must succeed on a DC 16 Charisma saving throw or be possessed by the quori; the quori then disappears, and the target is incapacitated and loses control of its body. The quori now controls the body but doesn't deprive the target of awareness. The quori can't be targeted by any attack, spell, or other effect, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.",
				"The possession lasts until the body drops to 0 hit points, the quori ends it as a bonus action, or the quori is forced out by an effect like the dispel evil and good spell. When the possession ends, the quori reappears in an unoccupied space within 5 feet of the body. The target is immune to this quori's Possession for 24 hours after succeeding on the saving throw or after the possession ends."
			]
		}
		],
		reactions: [{
			name: "Empathic Feedback",
			description: "When the quori takes damage from a creature it can see within 60 feet of it, the quori can force that creature to succeed on a DC 16 Intelligence saving throw or take 11 (2d10) psychic damage."
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The quori's spellcasting ability is Intelligence (spell save DC 16). It can innately cast the following spells, requiring no components:",
				"At will: charm person",
				"1/day: dominate person, dream",
				"3/day each: detect thoughts, disguise self, suggestion"
			]
		}
		],
		description: "Hashalaq quori are loremasters and judges, and are commonly known as dreamstealers. In their natural form, hashalaqs are composed of hundreds of translucent tendrils. They can compress and configure these tendrils to form a wide range of simple shapes. A point of blue light suspended within its tendrils serves as the hashalaq's sensory organ, which can be moved around to suit the creature's current shape. The Power of Pleasure: Hashalaq quori have studied their mortal prey for centuries. Inhabiting human bodies as Inspired has granted the hashalaq a deep understanding of the hedonistic urges of humanity. As a result, they have developed numerous ways to control humanoids through pleasure—even as they have developed a taste for such things themselves. The Learned of Dal Quor: Hashalaq quori are the loremasters of Dal Quor. Even those hashalaqs who don't make use of Inspired vessels dedicate themselves to studying Eberron and the planes, and they are among the few quori castes whose members understand the ways of magic. In Dal Quor, the hashalaq quori are typically found as advisors to the kalaraq. They also serve as judges, policing the quori and ensuring that the rivalries of the tsucora never threaten the greater plans of the Dreaming Dark. Dal Quor is the plane of dreams and is currently dominated by a dark power known as il-Lashtavar, or the Dreaming Dark. Il-Lashtavar is served by a host of aberrations that are the embodiments of dreams and nightmares—the quori. Because it is difficult for anything to physically travel to or from Dal Quor, quori in Eberron are typically encountered while possessing a host body. The Inspired are the most common type of willing host for the quori and are described earlier in this chapter.",
	},
	"Homunculus Servant": {
		name: "Homunculus Servant",
		source: ["Eberron: Rising from the Last War", 62],
		size: "Tiny",
		type: "construct",
		alignment: "Neutral",
		ac: [13, "Natural Armor", false],
		hp: "1",
		hd: [0, 0],
		speed: "walk 20 ft, fly 30 ft",
		scores: [4, 15, 12, 10, 10, 7],
		saves: ["", "4", "", "", "", ""],
		skills: "Perception +4, Stealth +4",
		passive_perception: "14",
		languages: "understands the languages you speak",
		challenge_rating: "0",
		damage_resistances: "",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "exhaustion, poisoned",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Force Strike",
			ability: 2,
			damage: [1, 4, "force"],
			range: "Ranged (30 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Evasion",
			description: "If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's incapacitated."
		}, {
			name: "Might of the Master",
			description: "The following numbers increase by 1 when your proficiency bonus increases by 1: the homunculus's skill and saving throw bonuses (above) and the bonuses to hit and damage of its attack (below)."
		}
		],
		reactions: [{
			name: "Channel Magic",
			description: "The homunculus delivers a spell you cast that has a range of touch. The homunculus must be within 120 feet of you."
		}
		],
		description: "HP is equal the homunculus's Constitution modifier+your Intelligence modifier+your level in this class",
	},
	"Inspired": {
		name: "Inspired",
		source: ["Eberron: Rising from the Last War", 294],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "Lawful Evil",
		ac: [12, "15 with mage armor", false],
		hp: 40,
		hd: [9, 8],
		scores: [11, 14, 10, 16, 10, 16],
		saves: ["", "", "", "5", "2", ""],
		skills: "Deception +7, Insight +2, Persuasion +7",
		passive_perception: "10",
		languages: "Common, Quori",
		challenge_rating: "2",
		damage_resistances: "psychic",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, frightened",
		senses: "",
		attacks: [{
			name: "Crysteel Dagger",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) force damage.",
		}
		],
		traits: [{
			name: "Dual Mind",
			description: "The Inspired has advantage on Wisdom saving throws."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The Inspired's spellcasting ability is Intelligence (spell save DC 13). It can innately cast the following spells, requiring no material components:",
				"At will: mage hand, vicious mockery",
				"1/day each: charm person, dissonant whispers, hex, hold person, mage armor"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The Inspired makes two crysteel dagger attacks. It can replace one attack with vicious mockery."
		}, {
			name: "Vicious Mockery (Cantrip)",
			description: "The Inspired unleashes a string of insults laced with subtle enchantments at one creature it can see within 60 feet of it. If the target can hear the Inspired, the target must succeed on a DC 13 Wisdom saving throw or take 2 (1d4) psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn."
		}, {
			name: "Variant: Quori Vessel",
			description: "The Inspired are vessels for quori spirits, allowing the quori to manifest a portion of their power while the vessel is possessed. An Inspired can gain benefits depending on the type of quori possessing it. The quori also gains access to the Inspired's knowledge and features."
		}, {
			name: "Suggestion (3/Day)",
			description: "The Inspired can cast the suggestion spell (spell save DC 13), requiring no material components."
		}, {
			name: "All Around Vision",
			description: "The Inspired can't be surprised."
		}, {
			name: "Arcane Eye (3/Day)",
			description: "The Inspired can cast the arcane eye spell, requiring no material components."
		}, {
			name: "Fear (1/Day)",
			description: "The Inspired can cast the fear spell (spell save DC 13), requiring no material components."
		}
		],
		description: "The rulers of distant Sarlona are known as the Inspired. These noble families are said to be bound to celestial spirits that guide and empower them, but the truth is far darker. The Inspired are the mortal hosts of the nightmare spirits of Dal Quor, and they carry out the foul agenda of the Dreaming Dark. Any humanoid who can dream can volunteer to serve as a quori vessel. But the Inspired of Sarlona are humans bred to be such vessels. They have no choice in this destiny, since they can't resist quori possession. Physically, Inspired resemble the kalashtar, possessing an almost supernatural beauty. Most of the people of the Five Nations have heard of the Inspired lords in Riedra—never realizing that Inspired are spread throughout Khorvaire as well. Beggars and generals, mayors and merchants might all be secret servants of the Dreaming Dark. Such Inspired have to willingly accept quori possession, but the Dreaming Dark has long experience in weaving dreams that can convince mortals to surrender their bodies.",
	},
	"Iron Defender": {
		name: "Iron Defender",
		source: ["Eberron: Rising from the Last War", 293],
		size: "Medium",
		type: "construct",
		alignment: "Neutral",
		ac: [17, "Natural Armor", false],
		hp: 30,
		hd: [4, 8],
		scores: [16, 14, 16, 8, 11, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +4",
		passive_perception: "13",
		languages: "understands the languages of its creator but can't speak",
		challenge_rating: "1",
		damage_resistances: "",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "exhaustion, poisoned",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, it must succeed on a DC 13 Strength saving throw or take an extra 3 (1d6) piercing damage and be grappled (escape DC 13). The defender can have only one creature grappled in this way at a time.",
		}
		],
		traits: [{
			name: "Keen Senses",
			description: "The defender has advantage on Wisdom (Perception) checks."
		}, {
			name: "Telepathic Bond",
			description: "While the defender is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically."
		}
		],
	},
	"Kalaraq Quori": {
		name: "Kalaraq Quori",
		source: ["Eberron: Rising from the Last War", 306],
		size: "Medium",
		type: "aberration",
		alignment: "Lawful Evil",
		ac: [18, "Natural Armor", false],
		hp: 161,
		hd: [19, 8],
		scores: [12, 21, 18, 23, 24, 25],
		saves: ["", "", "", "12", "13", "13"],
		skills: "Deception +13, Perception +13, Persuasion +13",
		passive_perception: "23",
		languages: "all, telepathy 120 ft",
		challenge_rating: "19",
		damage_resistances: "cold, necrotic, poison, psychic; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "blinded, charmed, exhaustion, frightened, grappled, paralyzed, petrified, prone, restrained",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Arcane Blast",
			ability: 6,
			damage: [1, 10, "force"],
			range: "Ranged (120 ft)",
			modifiers: ["", "", true], // bonuses to: [to hit, to damage, add ability to damage];
			description: "",
		}, {
			name: "Soul Binding",
			ability: 6,
			damage: [4, 10, "necrotic"],
			range: "Melee (5 ft)",
			modifiers: ["", "", true], // bonuses to: [to hit, to damage, add ability to damage];
			description: "A creature reduced to 0 hit points from this attack dies and has its soul imprisoned in one of the quori's eyes. The target can't be revived by any means short of a wish spell until the quori is destroyed.",
		},
		],
		traits: [{
			name: "All-Around Vision",
			description: "The quori can't be surprised while it isn't incapacitated."
		}, {
			name: "Incorporeal Movement",
			description: "The quori can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
		}, {
			name: "Magic Resistance",
			description: "The quori has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The quori's spellcasting ability is Charisma (spell save DC 21, +13 to hit with spell attacks). It can innately cast the following spells, requiring no components:",
				"At will: arcane eye",
				"3/day each: clairvoyance, confusion, dream, eyebite"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The quori makes two Soul Binding attacks. Alternatively, it can make four attacks with Arcane Blast."
		}, {
			name: "Mind Seed (1/Day)",
			description: [
				"The quori touches one humanoid, which must succeed on a DC 21 Intelligence saving throw or be cursed. The curse lasts until it's removed by a remove curse or greater restoration spell.",
				"The cursed target suffers 1 level of exhaustion every 24 hours, and finishing a long rest doesn't reduce its exhaustion. If the cursed target reaches exhaustion level 6, it doesn't die; it instead becomes a thrall under the quori's control, and all its exhaustion is removed. Only the wish spell can free the thrall from this control."
			]
		}, {
			name: "Swarm of Eyes (Recharge 6)",
			description: "The quori creates a swarm of spectral eyes that fills a 30-foot-radius sphere centered on a point it can see within 60 feet of it. Each creature in that area must make a DC 21 Wisdom saving throw. On a failure, a creature takes 45 (10d8) psychic damage, and it is blinded for 1 minute. On a success, a creature takes half as much damage and isn't blinded. A blinded creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "Possession (Recharge 6)",
			description: [
				"One humanoid that the quori can see within 5 feet of it must succeed on a DC 21 Charisma saving throw or be possessed by the quori; the quori then disappears, and the target is incapacitated and loses control of its body. The quori now controls the body but doesn't deprive the target of awareness. The quori can't be targeted by any attack, spell, or other effect, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.",
				"The possession lasts until the body drops to 0 hit points, the quori ends it as a bonus action, or the quori is forced out by an effect like the dispel evil and good spell. When the possession ends, the quori reappears in an unoccupied space within 5 feet of the body. The target is immune to this quori's Possession for 24 hours after succeeding on the saving throw or after the possession ends."
			]
		}
		],
		description: "The most powerful quori are the kalaraqs, also known as eyebinders—entities formed of pure shadow that is outlined by a nimbus of energy. A host of disembodied eyes whirl around a kalaraq, each reflecting a consciousness the creature has consumed. Kalaraq quori guide the quori race, and the Devourer of Dreams—the personal emissary of the Dreaming Dark—is of this order. Although the kalaraqs never fight one another overtly, each has its own agenda, and each hopes to someday seize the throne of the Devourer of Dreams. Because of this internal conflict, it is unusual for a kalaraq to leave Dal Quor to inhabit a mortal vessel and become one of the Inspired. Dal Quor is the plane of dreams and is currently dominated by a dark power known as il-Lashtavar, or the Dreaming Dark. Il-Lashtavar is served by a host of aberrations that are the embodiments of dreams and nightmares—the quori. Because it is difficult for anything to physically travel to or from Dal Quor, quori in Eberron are typically encountered while possessing a host body. The Inspired are the most common type of willing host for the quori and are described earlier in this chapter.",
	},
	"Kalashtar": {
		name: "Kalashtar",
		source: ["Eberron: Rising from the Last War", 317],
		size: "Medium",
		type: "humanoid (kalashtar)",
		alignment: "Any alignment",
		ac: [12, "", false],
		hp: 16,
		hd: [3, 8],
		scores: [12, 14, 12, 13, 15, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +4, Insight +4, Persuasion +6",
		passive_perception: "12",
		languages: "Common, telepathy 20 ft",
		challenge_rating: "1/4",
		damage_resistances: "psychic",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
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
			name: "Dual Mind",
			description: "The kalashtar has advantage on Wisdom saving throws."
		}
		],
		actions: [{
			name: "Mind Thrust",
			description: "The kalashtar targets a creature it can see within 30 feet of it. The target must succeed on a DC 12 Wisdom saving throw or take 11 (2d10) psychic damage."
		}
		],
		description: "The kalashtar have bonded with good-aligned quori spirits, which communicate with their hosts through dreams and visions. Descended from monks who offered their bodies as sanctuaries to those quori escaping the evil of Dal Quor, the kalashtar now fight to herald in a new age of light and balance.",
	},
	"Karrnathi Undead Soldier": {
		name: "Karrnathi Undead Soldier",
		source: ["Eberron: Rising from the Last War", 295],
		size: "Medium",
		type: "undead",
		alignment: "Lawful Evil",
		ac: [17, "Half Plate Armor", false],
		hp: 52,
		hd: [7, 8],
		scores: [16, 14, 16, 12, 13, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +5, Perception +3",
		passive_perception: "13",
		languages: "Common",
		challenge_rating: "3",
		damage_resistances: "cold, poison",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d10+3) slashing damage.",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Pack Tactics",
			description: "The soldier has advantage on an attack roll against a creature if at least one of the soldier's allies is within 5 feet of the creature and the ally isn't incapacitated."
		}, {
			name: "Undead Fortitude",
			description: "If damage reduces the soldier to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the soldier drops to 1 hit point instead."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The soldier attacks three times with one of its weapons."
		}
		],
		reactions: [{
			name: "Parry",
			description: "The soldier adds 3 to its AC against one melee attack that would hit it. To do so, the soldier must see the attacker and be wielding a melee weapon."
		}
		],
		description: "Undead soldiers form the elite core of the army of Karrnath. Fearless and tireless, they are a terrifying sight on the battlefield. With the end of the Last War, most Karrnathi undead have been sealed in vaults below the city of Atur. However, the Karrnathi army keeps numerous undead in its service, while others have been commandeered by the malevolent Order of the Emerald Claw. The Odakyr Rites: The nation of Karrnath has a proud martial heritage, and its soldiers are unmatched in discipline. But in the early years of the Last War, Karrnath was crippled by famine and plague. In desperation, King Kaius I embraced the Blood of Vol, whose priests bolstered the armies of Karrnath with undead. Initially, those skeletons and zombies required constant control and served as cannon fodder. Over decades, a high priest named Malevanor worked with the necromancers of the Blood of Vol to develop the Odakyr Rites, which grant Karrnathi undead the ability to make tactical decisions and operate without direct guidance. The Odakyr Rites work only when performed on the remains of a soldier slain in battle, and only in manifest zones tied to the plane of Mabar. The most significant such zones in Karrnath exist in the cities of Atur and Odakyr (now called Fort Bones). The number of Karrnathi undead soldiers steadily increased over the course of the war, with the losses of Karrnath's living troops offset by the recovery and raising of their remains. Malevanor claimed that Karrnathi undead are animated and granted intelligence by the patriotic spirit of Karrnath. However, many Karrns fear that the undead are vessels for a darker power—and that Lady Illmarrow or someone else will turn the undead against the living. Intelligent and Inhuman: Karrnathi undead bear little resemblance to the people they were in life. These undead are content to stand motionless and silent for days. They show no emotion, and certainly no mercy or compassion. Undead soldiers kill any opposing forces—including civilians among those forces—unless given explicit instructions to the contrary. A few exceptional Karrnathi undead retain their individuality and the memories of their former lives. Such undead are often found as champions of the Blood of Vol or agents of the Order of the Emerald Claw. Undead Nature: A Karrnathi undead soldier doesn't require air, food, drink, or sleep.",
	},
	"Lady Illmarrow": {
		name: "Lady Illmarrow",
		source: ["Eberron: Rising from the Last War", 296],
		size: "Medium",
		type: "undead",
		alignment: "Neutral Evil",
		ac: [19, "Natural Armor", false],
		hp: 199,
		hd: [21, 8],
		scores: [16, 16, 20, 27, 21, 24],
		saves: ["", "", "12", "15", "12", ""],
		skills: "Arcana +15, History +15, Insight +12, Perception +12",
		passive_perception: "22",
		languages: "Common, Draconic, Elvish",
		challenge_rating: "22",
		damage_resistances: "cold, lightning",
		damage_immunities: "necrotic, poison; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned, stunned",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Chill Touch (Cantrip)",
			ability: 4,
			damage: [4, 8, "necrotic"],
			range: "Ranged (120 ft)",
			description: "Target can't regain hit points until the start of Illmarrow's next turn. If the target is undead, it also has disadvantage on attack rolls against Illmarrow until the end of her next turn.",
		}, {
			name: "Paralyzing Claw",
			ability: 1,
			damage: [3, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) cold damage, and the target must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If Illmarrow fails a saving throw, she can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Illmarrow has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Rejuvenation",
			description: "Illmarrow's body turns to dust when she drops to 0 hit points, and her equipment is left behind. She gains a new body after 1d10 days, regaining all her hit points and becoming active again. The new body appears within two hundred miles of the location at which she was destroyed."
		}
		],
		spells: [
			"Illmarrow is a 20th-level spellcaster. Her spellcasting ability is Intelligence (spell save DC 23, +15 to hit with spell attacks). Illmarrow has the following wizard spells prepared:",
			"Cantrips (at will): chill touch, fire bolt, mage hand, prestidigitation, ray of frost",
			"1st level (4 slots): magic missile, shield, sleep",
			"2nd level (3 slots): blur, detect thoughts, mirror image",
			"3rd level (3 slots): animate dead, counterspell, fireball, fly, lightning bolt",
			"4th level (3 slots): blight, confusion, polymorph",
			"5th level (3 slots): cloudkill, cone of cold, hold monster, scrying",
			"6th level (2 slots): chain lightning, circle of death, create undead, scrying",
			"7th level (2 slots): finger of death, forcecage, prismatic spray",
			"8th level (1 slots): incendiary cloud, maze",
			"9th level (1 slots): power word kill, time stop"
		],
		actions: [{
			name: "Poison Breath (Recharge 5-6)",
			description: [
				"Illmarrow exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 20 Constitution saving throw. On a failed save, a creature takes 35 (10d6) poison damage and is poisoned for 1 minute. While poisoned in this way, the creature can't regain hit points. On a successful save, the creature takes half as much damage and isn't poisoned.",
				"A humanoid reduced to 0 hit points by this damage dies and rises at the start of Illmarrow's next turn as a zombie. The zombie acts immediately after Illmarrow in the initiative count and is permanently under her command, following her verbal orders."
			]
		}
		],
		legendary_actions: [{
			description: "Lady can take 4 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Lady regains spent legendary actions at the start of its turn."
		}, {
			name: "Cantrip",
			description: "Illmarrow casts a cantrip."
		}, {
			name: "Paralyzing Claw",
			description: "Illmarrow uses her Paralyzing Claw."
		}, {
			name: "Frightening Presence (Costs 2 Actions)",
			description: "Illmarrow targets up to three creatures she can see within 30 feet of her. Each target must succeed on a DC 20 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to Illmarrow's Frightening Presence for the next 24 hours."
		}, {
			name: "Poison Breath (Costs 3 Actions)",
			description: "Illmarrow recharges her Poison Breath and uses it."
		}
		],
		slots: "4, 3, 3, 3, 3, 2, 2, 1, 1",
		description: "Lady Illmarrow is a legend—an ancient lich said to dwell in a castle of bone and ice in the coldest regions of the Lhazaar Principalities. Some stories say that she is served by a legion of undead and that she maintains a court of vampires and ghosts in her palace of ice. Other tales claim that when anyone dies in Lhazaar, Illmarrow chooses whether to take their soul before it passes on to the Keeper and Dolurrh. But Lady Illmarrow is no folk tale. She is the greatest necromancer in Eberron, and after centuries of silence, she is setting ancient plots into motion at last. She is the power behind the Order of the Emerald Claw, but her motives for founding the order are buried in her past. Lady Illmarrow has no interest in ruling the living. Rather, she seeks to become Queen of the Dead. The Mark of Death: Illmarrow is a fiefdom on the isle of Farlnen—home to a community of elves exiled from Aerenal, who have practiced necromancy for centuries. But Lady Illmarrow's roots extend far beyond her island domain. Long ago, it was revealed that the elven line of Vol—a house that practiced the art of necromancy and bore the Dragonmark of Death—was engaged in secret blood rites with a clan of dragons. The discovery of this pact triggered an unprecedented alliance between the Sibling Kings of Aerenal and the dragons of Argonnessen. The Sibling Kings proclaimed that House Vol would be exterminated to the last member, and the Mark of Death would be eliminated from the world. The line of Vol had long been rivals of the Undying Court, and many whisper even today that the attack on House Vol was nothing more than an excuse to eliminate a political rival. But others believe that what the Undying Court truly feared was a path shown in the Draconic Prophecy—that a child born of dragon and elf could become a godlike avatar of death. Illmarrow Rises: Even as dragons and elves fought to destroy the line of Vol, a child was born to the house: Erandis. A scion of elf and dragon, Erandis bore a Mark of Death unlike any other. In time, it might have been her gateway to immortality and unrivaled power, but she was hunted down and killed long before she could master the mark's magic. Her mother, Minara Vol, escaped with her daughter's body to the icy reaches of Farlnen, far from the conflict. There, Minara unleashed all her necromantic power to raise Erandis as a lich. As an undead being, Erandis lost the use of her dragonmark. Thus, when the diviners of Aerenal asked if the line of Vol had been exterminated and the Mark of Death destroyed, they received a vision affirming that the bloodline of Vol was no more. To the world, the last survivor of that bloodline is known as Lady Illmarrow. But in truth, she is Erandis Vol, heir to the Mark of Death. Trapped in Undeath: When Minara restored Erandis as a lich, she hid her daughter's phylactery, weaving enchantments into it that cause Erandis to be reborn in a random safe haven after she is destroyed. Thus, even Erandis herself doesn't know the location or form of her phylactery. Lady Illmarrow and the Blood of Vol The Blood of Vol and Lady Illmarrow are both legacies of the line of Vol, but they aren't one and the same. As far as the world knows, the line of Vol was exterminated. Followers of the Blood of Vol who have heard of Lady Illmarrow believe that she's a champion of their faith, but they don't worship or serve her. And the powers of priests of the Blood of Vol don't come from Lady Illmarrow.",
	},
	"Living Burning Hands": {
		name: "Living Burning Hands",
		source: ["Eberron: Rising from the Last War", 298],
		size: "Medium",
		type: "construct",
		alignment: "Unaligned",
		ac: [15, "Natural Armor", false],
		hp: 15,
		hd: [2, 8],
		scores: [10, 12, 16, 3, 6, 6],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "8",
		languages: "",
		challenge_rating: "1",
		damage_resistances: "bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "fire",
		damage_vulnerabilities: "",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, grappled, poisoned, prone",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Magical Strike",
			ability: 3,
			damage: [1, 6, "fire"],
			range: "Melee (5 ft)",
			modifiers: [, "", true], // bonuses to: [to hit, to damage, add ability to damage];
			description: ".",
		}
		],
		traits: [{
			name: "Amorphous",
			description: "The living spell can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name: "Magic Resistance",
			description: "The living spell has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Spell Mimicry (Recharge 5-6)",
			description: "The living spell unleashes a thin sheet of flames in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 10 (3d6) fire damage on a failed save, or half as much damage on a successful one."
		}
		],
		description: "Constructed Nature: A living spell doesn't require air, food, drink, or sleep. Of all the anomalies that emerged from the magical cataclysm that created the Mournland, the appearance of living spells might be the most mysterious. In some unknown fashion, the magical energy unleashed during the Last War caused spell effects to take on sentience. A living spell appears much like a normal spell effect, except that its magical energy endures indefinitely. Living spells haunt the Mournland and other areas blasted by the Last War, somehow subsisting on ambient magical energy as they writhe and across the landscape. Though they have no need for sustenance, they attack any creatures they come into contact with, lashing out indiscriminately with their corrupted magic. Customizing a Living Spell: Living spells come in many varieties; the stat blocks here are three examples. Living spells most often manifest from evocation and conjuration spells. To make a living spell from a different spell, choose a damage-dealing evocation or conjuration spell from the wizard spell list of up to 5th level. Then consult the Living Spell Customization table to see which stat block to customize, based on the chosen spell's level. Spell Level | Stat Block to Customize 1–2 | Living burning hands 3–4 | Living lightning bolt 5 | Living cloudkill\n			 Now make the following changes to that stat block: Damage Immunity. Replace the living spell's damage immunity with immunity to the type (or types) of damage dealt by the chosen spell. Magical Strike. Replace the damage that Magical Strike deals with one type of damage dealt by the chosen spell. Spell Mimicry. Replace the effect of Spell Mimicry with the effect of the chosen spell. If that spell requires a saving throw, use spell save DC from the replaced spell, and if the spell involves an attack roll, use the attack bonus from the living spell's Magical Strike. For example, if you turn fireball (a 3rd-level spell) into a living spell, customize the living lightning bolt. The living fireball has immunity to fire damage, instead of lightning damage; deals fire damage with its Magical Strike; and replicates fireball with Spell Mimicry.",
	},
	"Living Cloudkill": {
		name: "Living Cloudkill",
		source: ["Eberron: Rising from the Last War", 299],
		size: "Large",
		type: "construct",
		alignment: "Unaligned",
		ac: [15, "Natural Armor", false],
		hp: 73,
		hd: [7, 10],
		scores: [10, 15, 14, 3, 11, 6],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "10",
		languages: "",
		challenge_rating: "7",
		damage_resistances: "bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, grappled, poisoned, prone",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Magical Strike",
			ability: 2,
			damage: [5, 6, "poison"],
			range: "Melee (10 ft)",
			modifiers: [3, 3, true], // bonuses to: [to hit, to damage, add ability to damage];
			description: "."
		}
		],
		traits: [{
			name: "Amorphous",
			description: "The living spell can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name: "Magic Resistance",
			description: "The living spell has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The living spell makes two Magical Strike attacks."
		}, {
			name: "Spell Mimicry (Recharge 5-6)",
			description: [
				"The living spell creates a 40-foot-diameter sphere of fog within 60 feet of it (the fog spreads around corners). When a creature enters the fog for the first time on a turn or starts its turn there, it must make a DC 16 Constitution saving throw, taking 22 (5d8) poison damage on a failed save, or half as much damage on a successful one.",
				"The fog moves 10 feet away from the living spell at the start of each of its turns, rolling along the ground and through openings. The fog lasts for 10 minutes or until the living spell's concentration ends (as if concentrating on a spell)."
			]
		}
		],
		description: "Constructed Nature: A living spell doesn't require air, food, drink, or sleep. Of all the anomalies that emerged from the magical cataclysm that created the Mournland, the appearance of living spells might be the most mysterious. In some unknown fashion, the magical energy unleashed during the Last War caused spell effects to take on sentience. A living spell appears much like a normal spell effect, except that its magical energy endures indefinitely. Living spells haunt the Mournland and other areas blasted by the Last War, somehow subsisting on ambient magical energy as they writhe and across the landscape. Though they have no need for sustenance, they attack any creatures they come into contact with, lashing out indiscriminately with their corrupted magic. Customizing a Living Spell: Living spells come in many varieties; the stat blocks here are three examples. Living spells most often manifest from evocation and conjuration spells. To make a living spell from a different spell, choose a damage-dealing evocation or conjuration spell from the wizard spell list of up to 5th level. Then consult the Living Spell Customization table to see which stat block to customize, based on the chosen spell's level. Spell Level | Stat Block to Customize 1–2 | Living burning hands 3–4 | Living lightning bolt 5 | Living cloudkill\n			 Now make the following changes to that stat block: Damage Immunity. Replace the living spell's damage immunity with immunity to the type (or types) of damage dealt by the chosen spell. Magical Strike. Replace the damage that Magical Strike deals with one type of damage dealt by the chosen spell. Spell Mimicry. Replace the effect of Spell Mimicry with the effect of the chosen spell. If that spell requires a saving throw, use spell save DC from the replaced spell, and if the spell involves an attack roll, use the attack bonus from the living spell's Magical Strike. For example, if you turn fireball (a 3rd-level spell) into a living spell, customize the living lightning bolt. The living fireball has immunity to fire damage, instead of lightning damage; deals fire damage with its Magical Strike; and replicates fireball with Spell Mimicry.",
	},
	"Living Lightning Bolt": {
		name: "Living Lightning Bolt",
		source: ["Eberron: Rising from the Last War", 299],
		size: "Large",
		type: "construct",
		alignment: "Unaligned",
		ac: [15, "Natural Armor", false],
		hp: 57,
		hd: [6, 10],
		scores: [10, 15, 18, 3, 10, 6],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "10",
		languages: "",
		challenge_rating: "5",
		damage_resistances: "bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "lightning",
		damage_vulnerabilities: "",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, grappled, poisoned, prone",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Magical Strike",
			ability: 2,
			damage: [5, 6, "lightning"],
			range: "Melee (10 ft)",
			modifiers: [2, -1, true], // bonuses to: [to hit, to damage, add ability to damage];
			description: ".",
		}
		],
		traits: [{
			name: "Amorphous",
			description: "The living spell can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name: "Magic Resistance",
			description: "The living spell has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The living spell makes two Magical Strike attacks."
		}, {
			name: "Spell Mimicry (Recharge 5-6)",
			description: "The living spell unleashes a stroke of lightning in a line 100 feet long and 5 feet wide. Each creature in the line must make a DC 15 Dexterity saving throw, taking 28 (8d6) lightning damage on a failed save, or half as much damage on a successful one."
		}
		],
		description: "Constructed Nature: A living spell doesn't require air, food, drink, or sleep. Of all the anomalies that emerged from the magical cataclysm that created the Mournland, the appearance of living spells might be the most mysterious. In some unknown fashion, the magical energy unleashed during the Last War caused spell effects to take on sentience. A living spell appears much like a normal spell effect, except that its magical energy endures indefinitely. Living spells haunt the Mournland and other areas blasted by the Last War, somehow subsisting on ambient magical energy as they writhe and across the landscape. Though they have no need for sustenance, they attack any creatures they come into contact with, lashing out indiscriminately with their corrupted magic. Customizing a Living Spell: Living spells come in many varieties; the stat blocks here are three examples. Living spells most often manifest from evocation and conjuration spells. To make a living spell from a different spell, choose a damage-dealing evocation or conjuration spell from the wizard spell list of up to 5th level. Then consult the Living Spell Customization table to see which stat block to customize, based on the chosen spell's level. Spell Level | Stat Block to Customize 1–2 | Living burning hands 3–4 | Living lightning bolt 5 | Living cloudkill\n			 Now make the following changes to that stat block: Damage Immunity. Replace the living spell's damage immunity with immunity to the type (or types) of damage dealt by the chosen spell. Magical Strike. Replace the damage that Magical Strike deals with one type of damage dealt by the chosen spell. Spell Mimicry. Replace the effect of Spell Mimicry with the effect of the chosen spell. If that spell requires a saving throw, use spell save DC from the replaced spell, and if the spell involves an attack roll, use the attack bonus from the living spell's Magical Strike. For example, if you turn fireball (a 3rd-level spell) into a living spell, customize the living lightning bolt. The living fireball has immunity to fire damage, instead of lightning damage; deals fire damage with its Magical Strike; and replicates fireball with Spell Mimicry.",
	},
	"Magewright": {
		name: "Magewright",
		source: ["Eberron: Rising from the Last War", 318],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Any alignment",
		ac: [11, "", false],
		hp: 9,
		hd: [2, 8],
		scores: [11, 13, 10, 14, 14, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4",
		passive_perception: "12",
		languages: "Common plus any two languages",
		challenge_rating: "0",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
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
			"The magewright's spellcasting ability is Intelligence (spell save DC 12). To cast one of its rituals, the magewright must provide additional material components whose value in gold pieces is 20 times the spell's level. These components are consumed when the ritual is finished. The magewright knows the following spells:",
			"At will: mage hand, prestidigitation",
			"Rituals: knock"
		],
		description: "In Khorvaire, magic is part of everyday life. A chef might use prestidigitation to heat and season food, while a blacksmith uses mending to perform minor repairs and guidance to help inspire their work. Those who work minor magic into their labors are called magewrights. Far more limited in magical power than a typical spellcaster, a magewright is dedicated to learning a handful of spells, and magewrights cast their non-cantrip spells as rituals—even spells that can't normally be cast in this way. Most magewright rituals take 10 minutes to perform, but certain complex rituals can take up to 1 hour. However long the ritual takes, it requires extra material components, usually in the form of dragonshards. Creating a Magewright: The magewright stat block provides the baseline statistics for a magewright. You then add to that baseline by choosing a specialty from the Magewright Specialties table, or roll for one. The specialty determines additional spells the magewright knows, including ones that can be cast only as rituals. The specialty also gives the magewright more proficiencies. d8 | Specialty | Spells | Proficiencies 1 | Artisan | Guidance, mending | One type of artisan's tools 2 | Entertainer | Minor illusion, thaumaturgy. Ritual only: disguise self. | Performance (+3) 3 | Healer | Resistance, spare the dying. Ritual only: detect poison and disease, lesser restoration (1 hour). | Medicine (+4), herbalism kit 4 | Lamplighter | Light. Ritual only: continual flame (1 hour). | Tinker's tools 5 | Locksmith | Mending. Ritual only: arcane lock (1 hour), knock. | Thieves' tools, tinker's tools 6 | Mediator | Guidance. Ritual only: comprehend languages, zone of truth. | Insight (+4), Persuasion (+3) 7 | Medium | Minor illusion. Ritual only: speak with dead. | Deception (+3), Religion (+4) 8 | Oracle | Guidance. Ritual only: augury, divination (1 hour). | History (+4), Religion (+4)\n			",
	},
	"Mordakhesh": {
		name: "Mordakhesh",
		source: ["Eberron: Rising from the Last War", 301],
		size: "Medium",
		type: "fiend",
		alignment: "Lawful Evil",
		ac: [18, "Plate Armor", false],
		hp: 170,
		hd: [20, 8],
		scores: [20, 16, 18, 15, 17, 20],
		saves: ["10", "", "9", "", "8", "10"],
		skills: "Athletics +10, Insight +8, Perception +8, Persuasion +10",
		passive_perception: "18",
		languages: "Common, Infernal",
		challenge_rating: "15",
		damage_resistances: "bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
		damage_immunities: "",
		damage_vulnerabilities: "piercing from magic weapons wielded by good creatures",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 5 (1d10) force damage.",
		}, {
			name: "Chromatic Orb",
			ability: 6,
			damage: [3, 8, ""],
			range: "Ranged (120 ft)",
			modifiers: [, "", ""], // bonuses to: [to hit, to damage, add ability to damage];
			description: "One creature. Damage of a type chosen by Mordakhesh: acid, cold, fire, lightning, poison, or thunder."
		},
		],
		traits: [{
			name: "Limited Magic Immunity",
			description: "Mordakhesh can't be affected or detected by spells of 6th level or lower unless he wishes to be. Mordakhesh has advantage on saving throws against all other spells and magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Mordakhesh's spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). Mordakhesh can innately cast the following spells, requiring no material components:",
				"At will: chromatic orb, detect thoughts, disguise self",
				"1/day each: banishing smite, destructive wave, fly, mass suggestion, staggering smite, suggestion, true seeing"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Mordakhesh makes three greatsword attacks."
		}
		],
		legendary_actions: [{
			description: "Mordakhesh can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Mordakhesh regains spent legendary actions at the start of its turn."
		}, {
			name: "Attack",
			description: "Mordakhesh makes one weapon attack or casts chromatic orb."
		}, {
			name: "Chromatic Resistance",
			description: "Modakhesh gains resistance to one damage type of his choice—acid, cold, fire, lightning, poison, or thunder—until the start of his next turn."
		}, {
			name: "Warlord's Command (Costs 2 Actions)",
			description: "Mordakhesh targets up to two allies that he can see within 30 feet of him. If a target can see and hear him, the target can make one weapon attack as a reaction and gains advantage on the attack roll."
		}
		],
		description: "In the age when fiends and dragons waged war across Eberron, rakshasas served the fiendish lords as strategists and generals. A rakshasa named Mordakhesh rose up through the ranks to become one of the greatest commanders of his age, and a dragon-slaying specialist. For this, he earned the nickname Shadowsword, along with a legendary reputation for leaving death in his wake. Mordakhesh serves as the prakhutu or \"speaker\" of his imprisoned master, Rak Tulkhesh, and he seeks to free his lord by bathing the world in blood. Like a spider with multiple webs, he has agents and pawns (which he calls his \"claws\") established in armies across Khorvaire. The most significant of those is the barbarian horde he amasses in the Demon Wastes—warriors who threaten to sweep into Aundair on a tide of blood. Many of the horrors of the Last War were instigated—or at least encouraged—by Mordakhesh's operatives, and his claws are known to have perpetrated some of the most brutal massacres of that conflict. No one knows how far the Shadowsword's reach extends, or which commanders in the armies of Khorvaire serve him.",
	},
	"Radiant Idol": {
		name: "Radiant Idol",
		source: ["Eberron: Rising from the Last War", 308],
		size: "Large",
		type: "celestial",
		alignment: "Lawful Evil",
		ac: [18, "Natural Armor", false],
		hp: 142,
		hd: [15, 10],
		scores: [23, 18, 19, 17, 20, 21],
		saves: ["", "", "", "", "9", "9"],
		skills: "Deception +9, Insight +9, Perception +9, Persuasion +9",
		passive_perception: "19",
		languages: "all, telepathy 120 ft",
		challenge_rating: "11",
		damage_resistances: "radiant; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Flail",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 18 (4d8) radiant damage.",
		}
		],
		traits: [{
			name: "Aura of False Divinity",
			description: "A creature that starts its turn within 30 feet of the radiant idol must make a DC 17 Wisdom saving throw, provided the radiant idol isn't incapacitated. On a failed save, the creature is charmed by the radiant idol. A creature charmed in this way can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it succeeds on the saving throw, a creature is immune to this radiant idol's Aura of False Divinity for 24 hours."
		}, {
			name: "Magic Resistance",
			description: "The radiant idol has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The radiant idol's spellcasting ability is Charisma (spell save DC 17). The radiant idol can innately cast the following spells, requiring no material components:",
				"At will: charm person, cure wounds, disguise self, thaumaturgy",
				"1/day each: commune, dominate person, insect plague, mass suggestion, raise dead"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The radiant idol makes two melee attacks."
		}, {
			name: "Radiant Strike (1/Day)",
			description: "The radiant idol chooses a point on the ground it can see within 60 feet of it. A 30-foot-radius, 40-foot-high cylinder of bright light appears there until the start of the radiant idol's next turn. Each creature in the cylinder when it appears or that ends its turn there must make a DC 17 Constitution saving throw, taking 36 (8d8) radiant damage on a failed save, or half as much damage on a successful one."
		}
		],
		description: "A radiant idol was an angel that was banished from the celestial realm of Syrania and cast down to the Material Plane. One sin led to their fall: the desire to be worshiped by mortals. Now in the mortal realm, most radiant idols gather cults of devoted followers. Fallen Angels: The insatiable hunger to be adored can transform a fallen angel, physically and mentally. In its true form, a radiant idol appears to be a warped angel. It might have bloody stumps in place of its wings, or its wings could be weighted down with chains representing its pride. A radiant idol uses disguise self to hide its corruption, presenting an image of celestial glory. The Weight of Corruption: When a radiant idol achieves a sizable following through silvered words and demonstrations of power, its facade begins to crack, and a downward spiral ensues. As the radiant idol sinks deeper into the realm of material power, it begins twisting its followers, leading them ever deeper into ominous ritualism, hedonistic folly, and fanatical doom. Immortal Nature: A radiant idol doesn't require food, drink, or sleep.",
	},
	"Rak Tulkhesh": {
		name: "Rak Tulkhesh",
		source: ["Eberron: Rising from the Last War", 303],
		size: "Huge",
		type: "fiend",
		alignment: "Neutral Evil",
		ac: [23, "Natural Armor", false],
		hp: 478,
		hd: [33, 12],
		scores: [29, 19, 27, 21, 22, 26],
		saves: ["17", "", "16", "", "14", "16"],
		skills: "Athletics +17, Intimidation +16, Perception +14",
		passive_perception: "24",
		languages: "all, telepathy 120 ft",
		challenge_rating: "28",
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned, stunned",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Spawned Melee Weapon",
			ability: 1,
			damage: [3, 12, "force"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Spawned Ranged Weapon",
			ability: 2,
			damage: [3, 8, "force"],
			range: "Ranged (150/600 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Deadly Critical",
			description: "Rak Tulkhesh scores a critical hit on a roll of 19 or 20 and rolls the damage dice three times, instead of twice."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Rak Tulkhesh fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Rak Tulkhesh has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Whirlwind of Weapons",
			description: "A magical aura of weapons surrounds Rak Tulkhesh in a 10 foot radius. At the start of each of his turns, any other creature in the aura takes 14 (4d6) force damage."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Rak Tulkhesh's spellcasting ability is Charisma (spell save DC 24). He can innately cast the following spells, requiring no material components:",
				"At will: detect thoughts, dispel magic, spirit guardians",
				"1/day each: banishing smite, blinding smite, staggering smite"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Rak Tulkhesh makes four weapon attacks."
		}, {
			name: "Change Shape",
			description: [
				"Rak Tulkhesh magically polymorphs into a humanoid, beast, or giant that has a challenge rating no higher than his own, or back into his true form. He reverts to his true form if he dies. Any equipment he is wearing or carrying is absorbed or borne by the new form (his choice).",
				"In a new form, Rak Tulkhesh retains his alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, and Intelligence, Wisdom, and Charisma scores, as well as this action. His statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
			]
		}
		],
		legendary_actions: [{
			description: "Rak can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Rak regains spent legendary actions at the start of its turn."
		}, {
			name: "Attack",
			description: "Rak Tulkhesh makes one weapon attack."
		}, {
			name: "End Magic (Costs 2 Actions)",
			description: "Rak Tulkhesh casts dispel magic."
		}, {
			name: "Provoke Rage (Costs 3 Actions)",
			description: "Each creature within 60 feet of Rak Tulkhesh must succeed on a DC 24 Wisdom saving throw or use its reaction to make a melee weapon attack against a random creature within reach. If no creatures are within reach, it makes a ranged weapon attack against a random creature within range, throwing its weapon if necessary. This attack is made with advantage and gains a +4 bonus to the damage roll."
		}
		],
		description: "Called the Rage of War, Rak Tulkhesh is the incarnation of impulses that drives many mortals to battle. Fear, greed, hatred—these are seeds that the Rage of War sows in the hopes of producing a bloody harvest. Rak Tulkhesh typically takes the form of a vaguely draconic creature twisted by demonic rage. Covered in iron spikes protruding from his bleeding flesh, this overlord looms fifteen feet high at the shoulders, and his wings span over forty feet. While in combat, Rak Tulkhesh roars in rage as new weapons are spawned from his body, called forth by the Rage of War to slaughter all who dare stand before him. Khyber Shards: Rak Tulkhesh's soul is divided among a group of Khyber shards spread through the underworld and is confined to those shards by the light of the Silver Flame. While shattered and bound, the Rage of War can't bring his full power to bear on the world. But he can influence events in the vicinity of any of his shards, drawing power from acts of violence. The Last War was a boon that allowed Rak Tulkhesh to darken the hearts of soldiers and civilians alike, whose actions then weakened the overlord's bonds to give him even greater sway over the regions surrounding his shards. The violence seen in Thaliost and other occupied cities, the hatred against warforged and Cyran refugees, the calls for a return to war—all these things bear the mark of Rak Tulkhesh's malign influence. Minions of Rak Tulkhesh: Any organization that fosters hatred unwittingly serves Rak Tulkhesh, and countless soldiers in the Five Nations are devoted to the Rage of War. Many of the Carrion Tribes of the Demon Wastes likewise serve Rak Tulkhesh and yearn to carry his bloody banner into the soft lands of the south. The minotaurs of Droaam revere Rak Tulkhesh as the Horned Prince. But the most powerful of the overlord's follower's is the rakshasa Mordakhesh the Shadowsword—Rak Tulkhesh's exarch among the Lords of Dust, who commands a host of fiends exerting the overlord's will across Khorvaire. Immortal Nature: An overlord doesn't require air, food, drink or sleep. It also can't die permanently. Upon its death, it reforms elsewhere in the multiverse and becomes active again at a time set by the DM. In the first days of the world, the children of Khyber rose from the darkness to reign over Eberron. The greatest among them were the overlords, who held dominion over a world of fear, war, and death until the children of Eberron and Siberys rose up against them. Armies of dragons fought against the fiends of Khyber. And though the overlords couldn't be destroyed, the couatl sacrificed their lives to build a prison of celestial light: a silver flame that bound the overlords in Khyber once more. These bonds have held for countless generations, but the overlords still yearn to break free and reclaim the world above. As long as the overlords are bound by the Silver Flame, they can't physically manifest in the world. But each overlord embodies a particular aspect of evil, which grows in strength as their servants—the fiends known as the Lords of Dust—scheme to unleash their ancient masters. The overlords gain strength when mortals embrace the dark paths laid down for them. And as they grow stronger, they gain more influence. Some thirty overlords are bound in Khyber. Two are described here: Rak Tulkhesh and Sul Khatesh, both of whom remain imprisoned and can't take physical form. The stat blocks provided here reflect the powers they would wield if they were ever unleashed upon the world.",
	},
	"Shifter": {
		name: "Shifter",
		source: ["Eberron: Rising from the Last War", 319],
		size: "Medium",
		type: "humanoid (shifter)",
		alignment: "Any alignment",
		ac: [14, "Leather Armor", false],
		hp: 19,
		hd: [3, 8],
		scores: [12, 16, 14, 11, 15, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +5, Insight +4, Nature +2, Perception +4",
		passive_perception: "14",
		languages: "Common",
		challenge_rating: "1/2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Bite",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Shifting (Recharges after a Short or Long Rest)",
			description: "As a bonus action, the shifter takes on a more bestial form for 1 minute or until it dies. The shifter gains 5 temporary hit points. It can make a bite attack when it activates this trait and also as a bonus action on each of its turns while in its bestial form."
		}
		],
		description: "Shifters are tied to primal spirits, which most of them refer to as the beast within. They are lithe of form and have bestial features: large eyes, flat noses, pointed ears, and light fur over much of their bodies. When a shifter fully embraces the beast within by \"shifting,\" these features become even more pronounced.",
	},
	"Steel Defender": {
		name: "Steel Defender",
		source: ["Eberron: Rising from the Last War", 61],
		size: "Medium",
		type: "construct",
		alignment: "Neutral",
		ac: [15, "Natural Armor", false],
		hp: "2",
		hd: [0, 0],
		speed: "walk 40 ft",
		scores: [14, 12, 14, 4, 10, 6],
		saves: ["", "3", "4", "", "", ""],
		skills: "Athletics +4, Perception +4",
		challenge_rating: "0",
		passive_perception: "14",
		languages: "understands the languages you speak",
		damage_resistances: "",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, poisoned",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "",
			ability: 1,
			damage: [0, 0, ""],
			range: "",
			description: "",
		}
		],
		traits: [{
			name: "Might of the Master",
			description: "The following numbers increase by 1 when your proficiency bonus increases by 1: the defender's skill and saving throw bonuses (above), the bonuses to hit and damage of its rend attack, and the number of hit points restored by its Repair action (below)."
		}, {
			name: "Vigilant",
			description: "The defender can't be surprised."
		}
		],
		actions: [{
			name: "Force-Empowered Rend",
			description: "Melee Weapon Attack: +4 to hit, reach 5 ft, one target you can see. 1d8+2 force damage."
		}, {
			name: "Repair (3/Day)",
			description: "The magical mechanisms inside the defender restore 2d8+2 hit points to itself or to one construct or object within 5 feet of it."
		}
		],
		reactions: [{
			name: "Deflect Attack",
			description: "The defender imposes disadvantage on the attack roll of one creature it can see that is within 5 feet of it, provided the attack roll is against a creature other than the defender."
		}
		],
		description: "HP is equal the steel defender's Constitution modifier+your Intelligence modifier+five times your level in this class",
	},
	"Sul Khatesh": {
		name: "Sul Khatesh",
		source: ["Eberron: Rising from the Last War", 304],
		size: "Large",
		type: "fiend",
		alignment: "Lawful Evil",
		ac: [22, "Natural Armor", false],
		hp: 475,
		hd: [50, 10],
		scores: [18, 21, 19, 30, 22, 25],
		saves: ["", "", "12", "18", "14", "15"],
		skills: "Arcana +18, History +18, Insight +14, Religion +18",
		passive_perception: "16",
		languages: "all, telepathy 150 ft",
		challenge_rating: "28",
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Arcane Blast",
			ability: 4,
			damage: [1, 10, "force"],
			range: "Ranged (120 ft)",
			modifiers: [, "", true], // bonuses to: [to hit, to damage, add ability to damage];
			description: ".",
		}, {
			name: "Magic Staff",
			ability: 1,
			damage: [5, 12, "force"],
			range: "Melee (5 ft)",
			description: ".",
		},
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If Sul Khatesh fails a saving throw, she can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Sul Khatesh has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Master of Magic",
			description: "Sul Khatesh has advantage on Constitution saving throws to maintain concentration."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Sul Khatesh's spellcasting ability is Intelligence (spell save DC 26, +18 to hit with spell attacks). She can innately cast the following spells, requiring no material components:",
				"At will: counterspell, detect magic, detect thoughts, dispel magic, eyebite, fireball, lightning bolt, shield",
				"3/day each: chain lightning, create undead, dream, hold monster, mass suggestion, scrying",
				"1/day each: foresight, gate, power word kill, teleport"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Sul Khatesh makes four attacks with Arcane Blast."
		}, {
			name: "Arcane Cataclysm (Recharges after a Long Rest)",
			description: "Sul Khatesh conjures orbs of magical energy that plummet to the ground at three different points she can see within 1 mile of her. Each creature in a 40-foot-radius sphere centered on each point must make a DC 26 Dexterity saving throw, taking 71 (11d12) force damage on a failed save or half as much damage on a successful one. A creature in the area of more than one arcane burst is affected only once. The area of each arcane burst then acts as an antimagic field for 1 hour. Sul Khatesh and spells she casts are unaffected by these fields."
		}, {
			name: "Change Shape",
			description: [
				"Sul Khatesh magically polymorphs into a humanoid, beast, or giant that has a challenge rating no higher than her own, or back into her true form. She reverts to her true form if she dies. Any equipment she is wearing or carrying is absorbed or borne by the new form (Sul Khatesh's choice).",
				"In a new form, Sul Khatesh retains her alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, and Intelligence, Wisdom, and Charisma scores, as well as this action. Her statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
			]
		}
		],
		legendary_actions: [{
			description: "Sul can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Sul regains spent legendary actions at the start of its turn."
		}, {
			name: "Attack",
			description: "Sul Khatesh makes two attacks with her Arcane Blast or one attack with her magic staff."
		}, {
			name: "Consume Magic (Costs 2 Actions)",
			description: "Sul Khatesh targets a creature within 120 feet of her who is concentrating on a spell. The target must succeed on a DC 26 Constitution saving throw or its concentration is broken on the spell, and Sul Khatesh gains 5 temporary hit points per level of that spell."
		}, {
			name: "Maddening Secrets (Costs 3 Actions)",
			description: "Sul Khatesh whispers an arcane secret into the mind of a creature she can see within 60 feet of her. The target must succeed on a DC 26 Wisdom saving throw or expend one of its spell slots of 3rd level or lower and deal 26 (4d12) force damage to each creature within 30 feet of it. A creature that fails the saving throw but can't expend a spell slot is instead stunned until the end of its next turn."
		}
		],
		description: "Sul Khatesh is known as the Keeper of Secrets and the Queen of Shadows. She embodies the fears and superstitions surrounding magic, from malevolent warlocks to mad wizards, from deadly curses to magical power that draws those who wield it deeper into darkness. Sul Khatesh is subtler than the Rage of War. She empowers warlocks and whispers secrets into the minds of wizards and artificers, helping them master spells and create relics they could never shape on their own. But few of those inspired by Sul Khatesh understand what forces they are dealing with, or recognize the danger inherent in her gifts. The Queen of Shadows: An entity of shadow, Sul Khatesh can assume any form. Her favored shape is a twelve-foot-tall humanoid figure draped in a flowing, hooded robe formed of swirling mist and clinging shadow. Minions: Most of Sul Khatesh's followers are wizards and warlocks, and she is one of the primary patrons for warlocks in Khorvaire. Covens devoted to the Queen of Shadows use dark magic and fear to dominate whole communities, while isolated warlocks make pacts with Sul Khatesh to pursue power and revenge. By sharing her power in this way, the overlord perpetuates the image of the evil warlock, inciting fear that strengthens the Keeper of Secrets even more. Sul Khatesh's chief agent among the Lords of Dust is the rakshasa Hektula, who serves as the librarian in the demonic citadel of Ashtakala. Known as the First Scribe, Hektula presides over an immense trove of arcane knowledge and artifacts. Immortal Nature: An overlord doesn't require air, food, drink or sleep. It also can't die permanently. Upon its death, it reforms elsewhere in the multiverse and becomes active again at a time set by the DM. In the first days of the world, the children of Khyber rose from the darkness to reign over Eberron. The greatest among them were the overlords, who held dominion over a world of fear, war, and death until the children of Eberron and Siberys rose up against them. Armies of dragons fought against the fiends of Khyber. And though the overlords couldn't be destroyed, the couatl sacrificed their lives to build a prison of celestial light: a silver flame that bound the overlords in Khyber once more. These bonds have held for countless generations, but the overlords still yearn to break free and reclaim the world above. As long as the overlords are bound by the Silver Flame, they can't physically manifest in the world. But each overlord embodies a particular aspect of evil, which grows in strength as their servants—the fiends known as the Lords of Dust—scheme to unleash their ancient masters. The overlords gain strength when mortals embrace the dark paths laid down for them. And as they grow stronger, they gain more influence. Some thirty overlords are bound in Khyber. Two are described here: Rak Tulkhesh and Sul Khatesh, both of whom remain imprisoned and can't take physical form. The stat blocks provided here reflect the powers they would wield if they were ever unleashed upon the world.",
	},
	"Tarkanan Assassin": {
		name: "Tarkanan Assassin",
		source: ["Eberron: Rising from the Last War", 320],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Any Non-Good Alignment",
		ac: [15, "Studded Leather Armor", false],
		hp: 45,
		hd: [7, 8],
		scores: [12, 16, 14, 10, 14, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +3, Deception +2, Perception +4, Sleight of hand +5, Stealth +5",
		passive_perception: "14",
		languages: "Common, Thieves' cant",
		challenge_rating: "2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) poison damage.",
		}, {
			name: "Fire Bolt (Cantrip)",
			ability: 5,
			damage: [2, 10, "fire"],
			range: "Ranged (120 ft)",
			description: "A flammable object hit by this spell ignites if it isn't being worn or carried.",
		},
		],
		traits: [{
			name: "Unstable Mark",
			description: "When the assassin casts an innate spell, each creature within 10 feet of the assassin must make a DC 12 Constitution saving throw, taking 4 (1d8) force damage on a failed save, or half as much damage on a successful one."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The assassin's spellcasting ability is Constitution (+4 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
				"At will: fire bolt",
				"1/day: chromatic orb"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The assassin makes two shortsword attacks."
		}, {
			name: "Chromatic Orb (1/Day)",
			description: "Ranged Spell Attack: +4 to hit, range 90 ft, one creature. 18 (4d8) damage of a type chosen by the assassin: acid, cold, fire, lightning, poison, or thunder."
		}
		],
		description: "Tarkanan assassins are the elite killers, spies, and thieves who work for House Tarkanan, a criminal organization specializing in theft and assassination. In addition to their deadly skill, a Tarkanan assassin possesses an aberrant dragonmark—a twisted sigil that provides them with magical power. House Tarkanan actively seeks and recruits people with aberrant dragonmarks. Aberrant Dragonmark Innate Spells: The power granted by an aberrant dragonmark is unpredictable. When running a Tarkanan assassin, you can roll on the Aberrant Dragonmark Innate Spells table to determine the spells gained from that NPC's aberrant mark, replacing the spells in the stat block's Innate Spellcasting trait. d6 | At Will | 1/Day 1 | Fire bolt (2d10) | Burning hands (3d6) 2 | Shocking grasp (2d8) | Chromatic orb (4d8) 3 | Poison spray (2d12) | Ray of sickness (3d8) 4 | Friends | Charm person (two creatures) 5 | Minor illusion | Thunderwave (2d8) 6 | Dancing lights | Sleep (7d8)\n			",
	},
	"The Lord of Blades": {
		name: "The Lord of Blades",
		source: ["Eberron: Rising from the Last War", 300],
		size: "Medium",
		type: "humanoid (warforged)",
		alignment: "Lawful Evil",
		ac: [19, "Natural Armor", false],
		hp: 195,
		hd: [23, 8],
		scores: [20, 15, 18, 19, 17, 18],
		saves: ["11", "", "10", "10", "9", ""],
		skills: "Arcana +10, Athletics +11, History +10, Perception +9",
		passive_perception: "19",
		languages: "Common, Draconic, Dwarvish, Elvish",
		challenge_rating: "18",
		damage_resistances: "necrotic, poison",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened",
		senses: "",
		attacks: [{
			name: "Adamantine Sixblade",
			ability: 1,
			damage: [3, 10, "slashing"],
			range: "Melee (10 ft)",
			description: "Plus 7 (2d6) force damage.",
		}, {
			name: "Bladed Wings (Melee)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Bladed Wings (Ranged)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}, {
			name: "Fire Bolt (Cantrip)",
			ability: 4,
			damage: [4, 10, "fire"],
			range: "Ranged (120 ft)",
			modifiers: [, "", ""], // bonuses to: [to hit, to damage, add ability to damage];
			description: ".",
		}
		],
		traits: [{
			name: "Adamantine Plating",
			description: "Any critical hit against the Lord of Blades becomes a normal hit."
		}, {
			name: "Bladed Armor",
			description: "A creature that grapples the Lord of Blades or is grappled by him takes 13 (3d8) slashing damage. A creature takes 13 (3d8) slashing damage if it starts its turn grappling or being grappled by the Lord of Blades."
		}, {
			name: "Charge",
			description: "If the Lord of Blades moves at least 10 feet straight toward a target and then hits it with his adamantine sixblade on the same turn, the target takes an extra 11 (2d10) slashing damage. If the target is a creature, it must succeed on a DC 19 Strength saving throw or be pushed up to 10 feet away and knocked prone."
		}, {
			name: "Warforged Resilience",
			description: "The Lord of Blades has advantage on saving throws against being poisoned, is immune to disease, and magic can't put him to sleep."
		}
		],
		spells: [
			"The Lord of Blades is a 20th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 18, +10 to hit with spell attacks). He has the following artificer spells prepared:",
			"Cantrips (at will): fire bolt, mage hand, mending, prestidigitation",
			"1st level (4 slots): expeditious retreat, sanctuary, thunderwave",
			"2nd level (3 slots): blur, heat metal, scorching ray, see invisibility",
			"3rd level (3 slots): dispel magic, fly, haste",
			"4th level (3 slots): freedom of movement, Mordenkainen's faithful hound",
			"5th level (2 slots): animate objects, wall of force"
		],
		actions: [{
			name: "Multiattack",
			description: "The Lord of Blades makes three attacks: two with his adamantine sixblade and one with his bladed wings."
		}
		],
		legendary_actions: [{
			description: "The humanoid (warforged) can take 4 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The humanoid (warforged) regains spent legendary actions at the start of its turn."
		}, {
			name: "Attack",
			description: "The Lord of Blades makes one weapon attack."
		}, {
			name: "Cantrip",
			description: "The Lord of Blades casts one of his cantrips."
		}, {
			name: "Cast a Spell (Costs 2 Actions)",
			description: "The Lord of Blades casts a spell of 2nd level or lower from his spell list that takes 1 action to cast."
		}, {
			name: "Blade Dash (Costs 3 Actions)",
			description: "The Lord of Blades moves up to his speed without provoking opportunity attacks, then makes one attack with his adamantine sixblade. He can make one bladed wings attack against each creature he moves past."
		}
		],
		slots: "4, 3, 3, 3, 2",
		description: "The Lord of Blades is a warforged warlord who has broken all ties with his former masters. He has established a nation for his people deep in the Mournland, centered in a great fortress where warforged from all over Khorvaire can come and feel a sense of belonging. No one knows what the Lord of Blades plans for his followers, but many fear that he intends to build a legion of warforged zealots, primed to march from the Mournland to unleash destruction on their former masters. Some tales assert that the Lord of Blades led the warforged armies of Cyre in the Last War. Others cast him as a newer warforged, perhaps the last to come out of the Cannith creation forges before the Thronehold Accords led to their dismantling. One story claims the Lord of Blades caused the destruction of Cyre and warns that he plans to repeat the Day of Mourning in each of the remaining Five Nations. Whatever the truth, he has become a beacon for warforged everywhere. Warforged Nature: The Lord of Blades doesn't require air, food, drink, or sleep.",
	},
	"Tsucora Quori": {
		name: "Tsucora Quori",
		source: ["Eberron: Rising from the Last War", 307],
		size: "Medium",
		type: "aberration",
		alignment: "Lawful Evil",
		ac: [16, "Natural Armor", false],
		hp: 68,
		hd: [8, 8],
		scores: [17, 14, 18, 14, 14, 16],
		saves: ["", "", "", "", "5", "6"],
		skills: "Insight +5, Perception +5",
		passive_perception: "15",
		languages: "Common, Quori",
		challenge_rating: "7",
		damage_resistances: "psychic",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, frightened",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Pincer",
			ability: 1,
			damage: [1, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target is grappled (escape DC 14) if it is a Large or smaller creature. The quori has two pincers, each of which can grapple one target.",
		}, {
			name: "Claws",
			ability: 1,
			damage: [4, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Stinger",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 10 (3d10) psychic damage. Target must succeed on a DC 14 Wisdom saving throw or be frightened of the quori for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The quori makes three attacks: one pincer attack, one attack with its claws, and one stinger attack."
		}, {
			name: "Possession (Recharge 6)",
			description: [
				"One humanoid that the quori can see within 5 feet of it must succeed on a DC 14 Charisma saving throw or be possessed by the quori; the quori then disappears, and the target is incapacitated and loses control of its body. The quori now controls the body but doesn't deprive the target of awareness. The quori can't be targeted by any attack, spell, or other effect, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.",
				"The possession lasts until the body drops to 0 hit points, the quori ends it as a bonus action, or the quori is forced out by an effect like the dispel evil and good spell. When the possession ends, the quori reappears in an unoccupied space within 5 feet of the body. The target is immune to this quori's Possession for 24 hours after succeeding on the saving throw or after the possession ends."
			]
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The quori's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring no components:",
				"At will: charm person",
				"1/day: fear"
			]
		}
		],
		description: "Tsucora quori are nightmarish creatures. Their headless torsos are covered with eyes and twitching limbs, including two massive arms that end in powerful pincers, and a serpentine tail tipped with a vicious stinger. They are cruel and calculating, enjoying the power they wield over others as they concoct elaborate schemes to advance their own positions and discredit their rivals. Relentless Schemers: Constantly jockeying for position, each tsucora hopes to be reincarnated as a more powerful servant of the Dreaming Dark. As such, their plans are as often focused on the ruination of competitors as they are on the furthering of il-Lashtavar's plans. When they aren't serving in the cities of their nightmare realm, they hunt the dreaming spirits of mortals. Fearmongers: Their ability to manipulate the fears of mortals sees tsucoras often sent to Eberron as Inspired. Nothing keeps humanoid chattel in line like fear, and the tsucoras are the masters of manipulating the uncertainty of mobs and high-ranking officials alike. The effectiveness of tsucora Inspired keeps the members of this order in the good graces of the kalaraq quori. Dal Quor is the plane of dreams and is currently dominated by a dark power known as il-Lashtavar, or the Dreaming Dark. Il-Lashtavar is served by a host of aberrations that are the embodiments of dreams and nightmares—the quori. Because it is difficult for anything to physically travel to or from Dal Quor, quori in Eberron are typically encountered while possessing a host body. The Inspired are the most common type of willing host for the quori and are described earlier in this chapter.",
	},
	"Undying Councilor": {
		name: "Undying Councilor",
		source: ["Eberron: Rising from the Last War", 311],
		size: "Medium",
		type: "undead",
		alignment: "Neutral Good",
		ac: [17, "Natural Armor", false],
		hp: 104,
		hd: [16, 8],
		scores: [16, 10, 14, 17, 21, 16],
		saves: ["", "", "6", "7", "9", ""],
		skills: "Arcana +7, History +11, Insight +9, Perception +9, Religion +7",
		passive_perception: "19",
		languages: "Common, Elvish",
		challenge_rating: "10",
		damage_resistances: "",
		damage_immunities: "poison, radiant",
		damage_vulnerabilities: "necrotic",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Radiant Touch",
			ability: 5,
			damage: [3, 6, "radiant"],
			range: "Melee (5 ft)",
			modifiers: ["", "", true], // bonuses to: [to hit, to damage, add ability to damage];
			description: ".",
		}
		],
		traits: [{
			name: "Aura of Radiance",
			description: "The councilor magically sheds bright light in a 15-foot radius and dim light for an additional 15 feet. The councilor can extinguish or restore this light as a bonus action. If the bright light overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created that darkness is dispelled."
		}, {
			name: "Magic Resistance",
			description: "The councilor has advantage on saving throws against spells and other magical effects."
		}
		],
		spells: [
			"The councilor is a 13th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). It has the following cleric spells prepared:",
			"Cantrips (at will): guidance, mending, sacred flame, spare the dying, thaumaturgy",
			"1st level (4 slots): bless, command, create or destroy water",
			"2nd level (3 slots): augury, calm emotions, hold person",
			"3rd level (3 slots): daylight, dispel magic, spirit guardians",
			"4th level (3 slots): banishment, divination, guardian of faith",
			"5th level (2 slots): dispel evil and good, flame strike, scrying",
			"6th level (1 slots): forbiddance, planar ally",
			"7th level (1 slots): plane shift"
		],
		actions: [{
			name: "Multiattack",
			description: "The councilor makes two Radiant Touch attacks."
		}, {
			name: "Healing Touch (3/Day)",
			description: "The councilor touches another creature. The target magically regains 18 (3d8+5) hit points and is freed from one curse afflicting it (councilor's choice)."
		}, {
			name: "Flame Strike (5th-Level Spell; Requires a Spell Slot)",
			description: "The councilor chooses a point it can see within 60 feet of it. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on that point must make a DC 17 Dexterity saving throw. A creature takes 14 (4d6) fire damage and 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one. If the councilor casts this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (its choice) increases by 1d6 for each slot level above 5th."
		}
		],
		legendary_actions: [{
			description: "The undead can take 2 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The undead regains spent legendary actions at the start of its turn."
		}, {
			name: "Touch",
			description: "The councilor makes one attack with its Radiant Touch."
		}, {
			name: "Shimmering Aura (Costs 2 Actions)",
			description: "The councilor channels positive energy into its Aura of Radiance. Until the end of the councilor's next turn, it sheds bright light in a 30-foot radius and dim light for an additional 30 feet. Any creature that starts its turn in the bright light must succeed on a DC 17 Constitution saving throw or be blinded until the end of the councilor's next turn."
		}
		],
		slots: "4, 3, 3, 3, 2, 1, 1",
		description: "Undying councilors guide and protect the people of Aerenal. They are the most powerful members of the Undying Court who still maintain their physical forms. While many undying councilors spend their days advising the living, some devote years projecting their consciousness into the Astral Plane, seeking new knowledge to share with their people. Still, not all minds are capable of assimilating immortality, and undying councilors sometimes buckle under the strain and go mad. The undying are undead creatures sustained by positive energy or the devotion of mortal beings. Where strong negative emotions can trap a spirit as a ghost or wraith, the undying are spirits who linger because they are cherished and who in turn seek to protect and guide the people of their community. Though it's possible for undying to appear anywhere, it is rare for them to manifest naturally. The only place where they are found in significant numbers is the island of Aerenal, a land whose close ties to the plane of Irian suffuse it with positive energy. The elves of Aerenal spent thousands of years working to develop rituals that tap into this energy, allowing them to preserve their greatest citizens as undying. The Face of Death: The light of Irian sustains the spirit, but it doesn't preserve the physical body. The undying appear as desiccated corpses, their flesh withering away over centuries. At the same time, the spirit of the undying surrounds the body—an aura of light forming a spectral shadow of the soul. The light shed by an undying doesn't generate heat, but it provides a sense of warmth and comfort. The most powerful of the undying can separate their spirits from their physical forms, existing as beings of pure light. This state is the ultimate goal of the elves of Aerenal, and such beings are known as ascendant councilors. Bound by Love and Light: Undying are sustained by positive energy, whether found in manifest zones tied to Irian—such as in Shae Mordai, the Aereni City of the Dead—or freely given by the devotion of mortal beings. The worship of the Undying Court is what sustains the undying of Aerenal, but devotion is a finite resource. As such, each elf that becomes an undying must earn their afterlife. If an undying elf leaves Aerenal, they require a community of elves or another source of positive energy to sustain them. Failing this, their light fades and they eventually die. The Undying Court: The honored undead of Aerenal are united in the Undying Court. Based in the city of Shae Mordai, the members of the Undying Court spend their time meditating, engaging in research, or continuing to perfect the arts they practiced in life. They serve as guides and advisors to the living, and members of the noble lines of Aerenal can exercise the rite of counsel to consult with ancestors in Shae Mordai. The greatest members of the Undying Court are the ascendant councilors. These beings of pure light are focused on contemplating the mysteries of life and the planes, and can work together to wield godlike power that allows them to shield Aerenal from almost any threat. However, the ascendant councilors can exercise power beyond Aerenal only by acting through devoted mortals—paladins and clerics of the Undying Court. Undead Nature: An undying doesn't require air, food, drink, or sleep.",
	},
	"Undying Soldier": {
		name: "Undying Soldier",
		source: ["Eberron: Rising from the Last War", 311],
		size: "Medium",
		type: "undead",
		alignment: "Neutral Good",
		ac: [17, "Breastplate", false],
		hp: 26,
		hd: [4, 8],
		scores: [16, 12, 14, 11, 13, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +5, History +4, Perception +3, Religion +4",
		passive_perception: "13",
		languages: "Common, Elvish",
		challenge_rating: "2",
		damage_resistances: "radiant; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
		damage_immunities: "poison",
		damage_vulnerabilities: "necrotic",
		condition_immunities: "exhaustion, poisoned",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 7 (1d8+3) piercing damage. Plus 9 (2d8) radiant damage if the target is a fiend or undead.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "Plus 9 (2d8) radiant damage if the target is a fiend or undead.",
		},
		],
		traits: [{
			name: "Illumination",
			description: "The soldier magically sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The soldier can extinguish or restore this light as a bonus action."
		}, {
			name: "Turn Resistance",
			description: "The soldier has advantage on saving throws against any effect that turns undead."
		}
		],
		description: "Undying soldiers make up the army of Aerenal's City of the Dead. They guard the temples of the Undying Court and the mansions of the noble lines of Aerenal, and Aereni ambassadors are often accompanied by undead bodyguards. Undying soldiers wear heirloom armor and wield ornate weaponry. The undying are undead creatures sustained by positive energy or the devotion of mortal beings. Where strong negative emotions can trap a spirit as a ghost or wraith, the undying are spirits who linger because they are cherished and who in turn seek to protect and guide the people of their community. Though it's possible for undying to appear anywhere, it is rare for them to manifest naturally. The only place where they are found in significant numbers is the island of Aerenal, a land whose close ties to the plane of Irian suffuse it with positive energy. The elves of Aerenal spent thousands of years working to develop rituals that tap into this energy, allowing them to preserve their greatest citizens as undying. The Face of Death: The light of Irian sustains the spirit, but it doesn't preserve the physical body. The undying appear as desiccated corpses, their flesh withering away over centuries. At the same time, the spirit of the undying surrounds the body—an aura of light forming a spectral shadow of the soul. The light shed by an undying doesn't generate heat, but it provides a sense of warmth and comfort. The most powerful of the undying can separate their spirits from their physical forms, existing as beings of pure light. This state is the ultimate goal of the elves of Aerenal, and such beings are known as ascendant councilors. Bound by Love and Light: Undying are sustained by positive energy, whether found in manifest zones tied to Irian—such as in Shae Mordai, the Aereni City of the Dead—or freely given by the devotion of mortal beings. The worship of the Undying Court is what sustains the undying of Aerenal, but devotion is a finite resource. As such, each elf that becomes an undying must earn their afterlife. If an undying elf leaves Aerenal, they require a community of elves or another source of positive energy to sustain them. Failing this, their light fades and they eventually die. The Undying Court: The honored undead of Aerenal are united in the Undying Court. Based in the city of Shae Mordai, the members of the Undying Court spend their time meditating, engaging in research, or continuing to perfect the arts they practiced in life. They serve as guides and advisors to the living, and members of the noble lines of Aerenal can exercise the rite of counsel to consult with ancestors in Shae Mordai. The greatest members of the Undying Court are the ascendant councilors. These beings of pure light are focused on contemplating the mysteries of life and the planes, and can work together to wield godlike power that allows them to shield Aerenal from almost any threat. However, the ascendant councilors can exercise power beyond Aerenal only by acting through devoted mortals—paladins and clerics of the Undying Court. Undead Nature: An undying doesn't require air, food, drink, or sleep.",
	},
	"Valenar Hawk": {
		name: "Valenar Hawk",
		source: ["Eberron: Rising from the Last War", 312],
		size: "Tiny",
		type: "fey",
		alignment: "Neutral",
		ac: [14, "", false],
		hp: 10,
		hd: [4, 4],
		scores: [8, 18, 10, 9, 16, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5",
		passive_perception: "15",
		languages: "understands Common, Elvish, and Sylvan but can't speak",
		challenge_rating: "1/8",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Talons",
			ability: 2,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Bonding",
			description: "The hawk can magically bond with one creature it can see, immediately after spending at least 1 hour observing that creature while within 30 feet of it. The bond lasts until the hawk bonds with a different creature or until the bonded creature dies. While bonded, the hawk and the bonded creature can communicate telepathically with each other at a distance of up to 100 feet."
		}, {
			name: "Keen Sight",
			description: "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
		}
		],
		description: "The elves of Valenar say that when their ancestors fought the giants of Xen'drik, elf druids took the forms of animals on the battlefield. The cruel and mighty Emperor Cul'sir of the giants laid a curse upon the druids and trapped them in the forms of animals. Just as the ancestors of the Valenar guide their warriors in battle, the spirits of these druids can awaken power in an animal to create a companion worthy of a champion. Valenar animals are awakened to advanced intelligence and power by the touch of an ancestral spirit. Traditionally, Valenar animals choose Valenar elves as companions, reflecting a bond between the ancestors of elf and animal. To be chosen by a Valenar animal is a great honor, and any such elf is treated with respect and reverence. Still, on the rare occasions when a Valenar animal chooses an adventurer of a different ancestry as a companion, it is universally accepted. The Valenar animals presented here—hawk, hound, and steed—are but examples, for the ancestral spirits can take on many animal forms. Variant: Ancestral Traits: Each Valenar animal can be customized with an ancestral gift, a supernatural trait granted by its ancestral spirit. Choose a trait or roll on the Ancestral Traits table for each Valenar animal. d8 | Trait 1 | Bestow Luck (1/Day). As a bonus action, the animal chooses one creature it can see within 30 feet of it. The next ability check, attack roll, or saving throw the target makes in the next hour has advantage. 2 | Burst of Speed (Recharge 6). The animal can take the Dash action as a bonus action. 3 | Camouflage. The animal has advantage on Dexterity (Stealth) checks it makes while outdoors. 4 | Lie Detector. The animal knows when a creature within 15 feet of it tells a lie. 5 | Fey Ancestry. The animal has advantage on saving throws against being charmed or frightened, and magic can't put it to sleep. 6 | Fey Step (1/Day). The animal, along with anything it is wearing or carrying, teleports up to 30 feet to an unoccupied space it can see. 7 | Quickness (Recharge 6). The animal can take the Dodge action as a bonus action. 8 | Shrouded Step. The animal can't be tracked except by magical means, and it leaves behind no tracks or other traces of its passage.\n			",
	},
	"Valenar Hound": {
		name: "Valenar Hound",
		source: ["Eberron: Rising from the Last War", 312],
		size: "Medium",
		type: "fey",
		alignment: "Neutral",
		ac: [14, "Natural Armor", false],
		hp: 19,
		hd: [3, 8],
		scores: [17, 15, 14, 10, 15, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		passive_perception: "14",
		languages: "understands Common, Elvish, and Sylvan but can't speak",
		challenge_rating: "1/2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
		}
		],
		traits: [{
			name: "Bonding",
			description: "The hound can magically bond with one creature it can see, immediately after spending at least 1 hour observing that creature while within 30 feet of it. The bond lasts until the hound bonds with a different creature or until the bonded creature dies. While bonded, the hound and the bonded creature can communicate telepathically with each other at a distance of up to 100 feet."
		}, {
			name: "Keen Hearing and Smell",
			description: "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}
		],
		description: "The elves of Valenar say that when their ancestors fought the giants of Xen'drik, elf druids took the forms of animals on the battlefield. The cruel and mighty Emperor Cul'sir of the giants laid a curse upon the druids and trapped them in the forms of animals. Just as the ancestors of the Valenar guide their warriors in battle, the spirits of these druids can awaken power in an animal to create a companion worthy of a champion. Valenar animals are awakened to advanced intelligence and power by the touch of an ancestral spirit. Traditionally, Valenar animals choose Valenar elves as companions, reflecting a bond between the ancestors of elf and animal. To be chosen by a Valenar animal is a great honor, and any such elf is treated with respect and reverence. Still, on the rare occasions when a Valenar animal chooses an adventurer of a different ancestry as a companion, it is universally accepted. The Valenar animals presented here—hawk, hound, and steed—are but examples, for the ancestral spirits can take on many animal forms. Variant: Ancestral Traits: Each Valenar animal can be customized with an ancestral gift, a supernatural trait granted by its ancestral spirit. Choose a trait or roll on the Ancestral Traits table for each Valenar animal. d8 | Trait 1 | Bestow Luck (1/Day). As a bonus action, the animal chooses one creature it can see within 30 feet of it. The next ability check, attack roll, or saving throw the target makes in the next hour has advantage. 2 | Burst of Speed (Recharge 6). The animal can take the Dash action as a bonus action. 3 | Camouflage. The animal has advantage on Dexterity (Stealth) checks it makes while outdoors. 4 | Lie Detector. The animal knows when a creature within 15 feet of it tells a lie. 5 | Fey Ancestry. The animal has advantage on saving throws against being charmed or frightened, and magic can't put it to sleep. 6 | Fey Step (1/Day). The animal, along with anything it is wearing or carrying, teleports up to 30 feet to an unoccupied space it can see. 7 | Quickness (Recharge 6). The animal can take the Dodge action as a bonus action. 8 | Shrouded Step. The animal can't be tracked except by magical means, and it leaves behind no tracks or other traces of its passage.\n			",
	},
	"Valenar Steed": {
		name: "Valenar Steed",
		source: ["Eberron: Rising from the Last War", 313],
		size: "Large",
		type: "fey",
		alignment: "Neutral",
		ac: [13, "", false],
		hp: 22,
		hd: [3, 10],
		scores: [14, 16, 14, 10, 15, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		passive_perception: "14",
		languages: "understands Common, Elvish, and Sylvan but can't speak",
		challenge_rating: "1/2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Hooves",
			ability: 2,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Bonding",
			description: "The steed can magically bond with one creature it can see, immediately after spending at least 1 hour observing that creature while within 30 feet of it. The bond lasts until the steed bonds with a different creature or until the bonded creature dies. While bonded, the steed and the bonded creature can communicate telepathically with each other at a distance of up to 100 feet."
		}
		],
		description: "The elves of Valenar say that when their ancestors fought the giants of Xen'drik, elf druids took the forms of animals on the battlefield. The cruel and mighty Emperor Cul'sir of the giants laid a curse upon the druids and trapped them in the forms of animals. Just as the ancestors of the Valenar guide their warriors in battle, the spirits of these druids can awaken power in an animal to create a companion worthy of a champion. Valenar animals are awakened to advanced intelligence and power by the touch of an ancestral spirit. Traditionally, Valenar animals choose Valenar elves as companions, reflecting a bond between the ancestors of elf and animal. To be chosen by a Valenar animal is a great honor, and any such elf is treated with respect and reverence. Still, on the rare occasions when a Valenar animal chooses an adventurer of a different ancestry as a companion, it is universally accepted. The Valenar animals presented here—hawk, hound, and steed—are but examples, for the ancestral spirits can take on many animal forms. Variant: Ancestral Traits: Each Valenar animal can be customized with an ancestral gift, a supernatural trait granted by its ancestral spirit. Choose a trait or roll on the Ancestral Traits table for each Valenar animal. d8 | Trait 1 | Bestow Luck (1/Day). As a bonus action, the animal chooses one creature it can see within 30 feet of it. The next ability check, attack roll, or saving throw the target makes in the next hour has advantage. 2 | Burst of Speed (Recharge 6). The animal can take the Dash action as a bonus action. 3 | Camouflage. The animal has advantage on Dexterity (Stealth) checks it makes while outdoors. 4 | Lie Detector. The animal knows when a creature within 15 feet of it tells a lie. 5 | Fey Ancestry. The animal has advantage on saving throws against being charmed or frightened, and magic can't put it to sleep. 6 | Fey Step (1/Day). The animal, along with anything it is wearing or carrying, teleports up to 30 feet to an unoccupied space it can see. 7 | Quickness (Recharge 6). The animal can take the Dodge action as a bonus action. 8 | Shrouded Step. The animal can't be tracked except by magical means, and it leaves behind no tracks or other traces of its passage.\n			",
	},
	"Warforged Colossus": {
		name: "Warforged Colossus",
		source: ["Eberron: Rising from the Last War", 314],
		size: "Gargantuan",
		type: "construct",
		alignment: "Unaligned",
		ac: [23, "Natural Armor", false],
		hp: 410,
		hd: [20, 20],
		scores: [30, 11, 30, 3, 11, 8],
		saves: ["", "", "", "4", "8", "7"],
		skills: "",
		passive_perception: "10",
		languages: "understands Common but can't speak",
		challenge_rating: "25",
		damage_resistances: "",
		damage_immunities: "necrotic, poison; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, incapacitated, paralyzed, petrified, poisoned, stunned",
		senses: "truesight 150 ft",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 12, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "The colossus can push the target up to 20 feet away from it.",
		}, {
			name: "Eldritch Turret",
			ability: 1,
			damage: [4, 8, "force"],
			range: "Ranged (300 ft)",
			modifiers: ["", "", false], // bonuses to: [to hit, to damage, add ability to damage];
			description: "If the target is a creature, it is knocked prone.",
		}
		],
		traits: [{
			name: "Immutable Form",
			description: "The colossus is immune to any spell or effect that would alter its form."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the colossus fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "The colossus has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Siege Monster",
			description: "The colossus deals double damage to objects and structures."
		}, {
			name: "Towering Terror",
			description: "Any enemy outside the colossus that starts its turn within 30 feet of it must succeed on a DC 26 Wisdom saving throw or be frightened until the start of the enemy's next turn. If the enemy's saving throw is successful, it is immune to this colossus's Towering Terror for the next 24 hours."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The colossus makes three attacks—one with its slam and two with its eldritch turrets—and then uses Stomp."
		}, {
			name: "Stomp",
			description: [
				"The colossus stomps one of its feet at a point on the ground within 20 feet of it. Any creature in a 20-foot-radius, 20-foot-high cylinder centered on this point must succeed on a DC 26 Dexterity saving throw or take 33 (6d10) bludgeoning damage and fall prone. Until the colossus uses its Stomp again or moves, the creature is restrained. While restrained in this way, the creature (or another creature within 5 feet of it) can use its action to make a DC 26 Strength check. On a success, the creature relocates to an unoccupied space of its choice within 5 feet of the colossus and is no longer restrained.",
				"Structures, as well as nonmagical objects that are neither being worn nor carried, take the same amount of damage if they are in the cylinder (no save)."
			]
		}, {
			name: "Incinerating Beam (Recharge 5-6)",
			description: "The colossus fires a beam of light in a 150-foot line that is 10 feet wide. Each creature in the line must make a DC 26 Dexterity saving throw, taking 60 (11d10) radiant damage on a failed save, or half as much damage on a successful one. A creature reduced to 0 hit points by this beam is disintegrated, leaving behind anything it was wearing or carrying."
		}
		],
		description: "In the final days of the Last War, House Cannith unleashed its mightiest creations: the warforged colossi. These enormous mechanical warriors thundered across Cyre, crushing everything in their paths and leaving ruin behind them. Meant to end the war decisively, the colossi pulverized hundreds of soldiers beneath their feet and incinerated whole legions with beams of fiery light that shot from their mouths. This rampage was cut short on the Day of Mourning. The arcane cataclysm that engulfed Cyre destroyed most of the warforged colossi, causing them to collapse into lifeless heaps. Colossal Survivors: Some warforged colossi survived the Day of Mourning more or less intact and are thought to only be in stasis, waiting to be awakened. Cannith artificers are eager to track them down and determine whether they can be awakened or, at the very least, salvaged for docents and other magic items. Here are locations where operational warforged colossi are rumored to dwell: \"Arkus\" (Colossus WX-11) lies prone at the bottom of the Glowing Chasm in the northern part of the Mournland, with one of its arms torn off. \"Artorok\" (Colossus WX-73) sits at the bottom of Lake Cyre amid the scaffolding of a sunken House Cannith workshop, flooded but otherwise intact. \"Hanamar\" (Colossus WX-42) stands at the bottom of Kraken Bay, near the coast of Valenar, buried up to its knees in sand and flooded, but it is otherwise intact. \"Karrnslayer\" (Colossus WX-31) lost its legs but crawls through the Mournland, using its arms to drag its great bulk across the ground. It is always prone and can't use its Stomp action, but makes three extra turret attacks when it takes the Multiattack action option. \"Landro\" (Colossus WX-33) is partially phased into a mountainside on the border of Cyre and Breland, but still explorable and potentially salvageable. \"Norr\" (Colossus WX-5) is slumped amid the ruins of Metrol, the former capital of Cyre. \"Tymber\" (Colossus WX-12) squats in the Crawling Swamp, in the northwest corner of the Shadow Marches. How it got there, no one knows. Hollow Structure: Although it can operate without a crew, a warforged colossus is built to carry wizards, artificers, magewrights, and elite troops. For this reason, these constructs are largely hollow on the inside, with tunnels, ladders, storage areas, and observation decks. A colossus might be filled with monsters and secrets, in addition to the corpses of those who died inside it. In chapter 4, map 4.8 illustrates an inactive warforged colossus, and the text that accompanies it explains how the colossus might serve as an adventure location.",
	},
	"Warforged Soldier": {
		name: "Warforged Soldier",
		source: ["Eberron: Rising from the Last War", 320],
		size: "Medium",
		type: "humanoid (warforged)",
		alignment: "Any alignment",
		ac: [16, "Natural Armor", false],
		hp: 30,
		hd: [4, 8],
		scores: [16, 12, 16, 10, 14, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +5, Perception +4, Survival +4",
		passive_perception: "14",
		languages: "Common",
		challenge_rating: "1",
		damage_resistances: "poison",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Armblade",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
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
		traits: [{
			name: "Warforged Resilience",
			description: "The warforged has advantage on saving throws against being poisoned and is immune to disease. Magic can't put it to sleep."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The warforged makes two armblade attacks."
		}
		],
		reactions: [{
			name: "Protection",
			description: "When an attacker the warforged can see makes an attack roll against a creature within 5 feet of the warforged, the warforged can impose disadvantage on the attack roll."
		}
		],
		description: "Warforged soldiers are humanoids formed from wood and steel, then magically imbued with life and sentience. The warforged were created to fight in the Last War, and in the aftermath of that conflict, they struggle to understand their place in the world. Most warforged soldiers still serve their former masters, often guarding dragonmarked houses or merchant caravans. Many warforged find it difficult to separate themselves from the soldiers they were made to be, seeking work as bouncers, bailiffs, and bodyguards. Others put their tireless strength to work as laborers, committed to the reconstruction of the towns and cities they defended or destroyed in the war.",
	},
	"Warforged Titan": {
		name: "Warforged Titan",
		source: ["Eberron: Rising from the Last War", 315],
		size: "Huge",
		type: "construct",
		alignment: "Lawful Neutral",
		ac: [20, "Natural Armor", false],
		hp: 125,
		hd: [10, 12],
		scores: [23, 8, 22, 3, 11, 1],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "10",
		languages: "understands the languages of its creator but can't speak",
		challenge_rating: "8",
		damage_resistances: "",
		damage_immunities: "poison, psychic",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Axehand",
			ability: 1,
			damage: [3, 8, "slashing"],
			range: "Melee (10 ft)",
			description: "Plus 11 (2d10) slashing damage if the target is prone.",
		}, {
			name: "Hammerfist",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone.",
		},
		],
		traits: [{
			name: "Platforms",
			description: "The warforged titan has two platforms built into its chassis. One Medium or smaller creature can ride on each platform without squeezing. To make a melee attack against a target within 5 feet of the warforged, they must use spears or weapons with reach and the target must be Large or larger."
		}, {
			name: "Siege Monster",
			description: "The warforged titan deals double damage to objects and structures."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The warforged titan makes one axehand attack and one hammerfist attack."
		}, {
			name: "Sweeping Axe (Recharge 6)",
			description: "The warforged titan makes a sweep with its axehand, and each creature within 10 feet of it must make a DC 17 Dexterity saving throw. A creature takes 19 (3d8+6) slashing damage on a failed save, or half as much damage on a successful one."
		}
		],
		description: "Warforged titans are hulking constructs built to wreak paths of destruction through enemy armies. Some of the most feared combatants of the Last War, warforged titans are barely sentient, with just enough intelligence to follow commands. Legacy of Giants: In the Age of Giants, giant artificers built mindless war golems to aid them in their war against the quori. Millennia later, some of these golems were unearthed by adventurers searching for the secrets of that age, then turned over to artificers working for the dragonmarked houses during the Last War. House Cannith studied these designs, and in the course of uncovering the secrets of the golems and the giant artificers who made them, House Cannith created the first warforged titans.",
	},
	"Zakya Rakshasa": {
		name: "Zakya Rakshasa",
		source: ["Eberron: Rising from the Last War", 309],
		size: "Medium",
		type: "fiend",
		alignment: "Lawful Evil",
		ac: [18, "Scale Mail", false],
		hp: 59,
		hd: [7, 8],
		scores: [18, 14, 18, 12, 13, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +7, Perception +4",
		passive_perception: "14",
		languages: "Common, Infernal",
		challenge_rating: "5",
		damage_resistances: "bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "",
		damage_vulnerabilities: "piercing from magic weapons wielded by good creatures",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 9 (1d10+4) slashing damage.",
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
		traits: [{
			name: "Limited Magic Immunity",
			description: "The rakshasa can't be affected or detected by spells of 1st level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects."
		}, {
			name: "Magic Weapons",
			description: "The rakshasa's weapon attacks are magical."
		}, {
			name: "Martial Prowess (1/Turn)",
			description: "When the rakshasa hits a creature with a melee weapon attack, the attack deals an extra 11 (2d10) damage of the weapon's type, and the creature must make a DC 15 Strength saving throw. On a failure, the rakshasa can push the creature up to 10 feet away from it, knock the creature prone, or make the creature drop one item it is holding of the rakshasa's choice."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The rakshasa's innate spellcasting ability is Charisma (spell save DC 11). The rakshasa can innately cast the following spells, requiring no material components:",
				"At will: detect thoughts, disguise self",
				"1/day: shield"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The rakshasa makes three melee weapon attacks. Alternatively, it can make two ranged attacks with its javelins."
		}
		],
		description: "Millions of years before the rise of the humanoid races, the rakshasas of Eberron ruled a civilization that spanned Khorvaire. Masters of combat, the rakshasas of Eberron wield their weapons with demonic fury, rushing into battle seeking vengeance against those who bound their fiendish masters. Rakshasas are described in the Monster Manual. A martial variant—the zakya rakshasa—is presented here. Zakya rakshasas are the bloodthirsty foot soldiers of the rakshasa horde. They are driven to free their fiendish rulers, seeking vengeance against the dragons and those who revere the couatls. Unlike other rakshasas with their luxurious robes and fineries, zakya rakshasas are almost always clad in battle gear: well-worn scale mail, a razor-sharp longsword, and a heavy shield bearing the emblem of their demonic master.",
	}
}
