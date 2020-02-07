var GGtR = {
	"Flying Horror": {
		name: "Flying Horror",
		source: ["Guildmasters' Guide to Ravnica", 203],
		size: "Medium",
		type: "aberration",
		alignment: "Lawful Evil",
		ac: [16, "Natural Armor", false],
		hp: 49,
		hd: [9, 8],
		scores: [9, 20, 12, 2, 15, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +7",
		passive_perception: "14",
		languages: "",
		challenge_rating: "3",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "radiant",
		condition_immunities: "frightened",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Claws",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 14 (4d6) psychic damage.",
		}
		],
		traits: [{
			name: "Fear Frenzy",
			description: "The horror has advantage on attack rolls against frightened creatures."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the horror has disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Frightening Screech (Recharge 5-6)",
			description: "The horror screeches. Each creature within 30 feet of it that can hear it must succeed on a DC 13 Wisdom saving throw or be frightened of it for 1 minute. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the horror's Frightening Screech for the next 24 hours."
		}
		],
		description: "Horrors and Madness:\n Horrors on Ravnica are terror and madness personified. You can represent this reality by using the madness rules in the Dungeon Master's Guide.\n Whenever a character fails a saving throw against the flying horror's Frightening Screech, the shadow horror's claw attack, or the skittering horror's Maddening Presence, note that fact. At the end of the encounter, have each character who failed at least one of those saving throws make a DC 13 Wisdom saving throw. On a successful save, nothing happens. On a failed save, a character gains a form of madness from the Dungeon Master's Guide, with the severity depending on how many of the saving throws that character failed during the encounter, as shown on the Madness Severity table.\n Failed Saves | Madness\n 1 | Short-term\n 2-3 | Long-term\n 4+ | Indefinite\n  \n Horrors:\n Terrifying evils stalk, fly, and scuttle in the dark corners of Ravnica, from the depths of the undercity to the blackest parts of the night sky. Collectively, these creatures are called horrors-a variety of things that lurk in the dark and embody the deepest fears of Ravnica's people. All are evil creatures with dim reason and preternatural cunning.\n At least three guilds have been known to compel horrors into service. For House Dimir, horrors spread fear and despair in the citizenry and carry out assassinations or kidnappings against well-protected targets. For the Cult of Rakdos, horrors are simply one more weapon in an arsenal of terrifying and shock-inspiring creatures that might appear on stage. For the Golgari Swarm, horrors scavenge the sewers and protect the guild's territory.\n House Dimir uses all three base kinds of horrors. The Cult of Rakdos prefers shadow horrors, and the Golgari Swarm uses skittering horrors.\n Customizing a Horror:\n Horrors share some common body types but vary wildly in other characteristics. A particular horror's form might incorporate elements that resemble fiendish, insectile, or reptilian features. To customize a horror, choose a base creature (flying horror, shadow horror, or skittering horror), then roll once on the Primary Features table and once on the Secondary Features table (or choose an option from each table). Add those features to the base creature.\n  \n d4 | Feature\n 1 | Avoidance. If the horror is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.\n 2 | Damage Resistances. The horror has resistance to necrotic and psychic damage.\n 3 | Innate Spellcasting. The horror's innate spellcasting ability is Charisma (spell save DC 13 for flying horror, DC 16 for shadow horror, and DC 17 for skittering horror). It can innately cast the following spells, requiring no material components: 3/day: darkness 1/day each: fear (shadow horror and skittering horror only), phantasmal killer (skittering horror only)\n 4 | Psychic Rebuke. When the horror takes damage from a melee attack, it can use its reaction to emit psychic energy within a 5-foot radius. Each creature in that area takes 3 (1d6) psychic damage (flying horror), 7 (2d6) psychic damage (shadow horror), or 10 (3d6) psychic damage (skittering horror).\n  \n d4 | Feature\n 1 | Grasping Tendrils. The horror has four tendrils. Each tendril can be attacked (AC 12, 10 hit points). Destroying one deals no damage to the horror. As a bonus action, the horror can target one creature it can see within 10 feet of it. The target must succeed on a Dexterity saving throw or be grappled by the horror. The DC of the saving throw and the DC to escape the grapple are the same: 9 for the flying horror, 13 for the shadow horror, and 19 for the skittering horror. Until the grapple ends, the horror can't use the same tendril to grapple another target.\n 2 | Indomitable Mind. The horror is immune to the charmed condition.\n 3 | Keen Senses. The horror has advantage on Wisdom (Perception) checks that rely on sight, sound, or smell.\n 4 | Mind Sight. Magical darkness doesn't impede the horror's darkvision.",
	},
	"Shadow Horror": {
		name: "Shadow Horror",
		source: ["Guildmasters' Guide to Ravnica", 205],
		size: "Large",
		type: "aberration",
		alignment: "Lawful Evil",
		ac: [13, "", false],
		hp: 120,
		hd: [16, 10],
		scores: [12, 16, 14, 2, 17, 18],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +7, Stealth +11",
		passive_perception: "17",
		languages: "",
		challenge_rating: "9",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "radiant",
		condition_immunities: "frightened",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [4, 8, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Claw",
			ability: 2,
			damage: [3, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 16 Wisdom saving throw or be frightened of the horror until the end of the target's next turn.",
		}
		],
		traits: [{
			name: "Incorporeal Movement",
			description: "The horror can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
		}, {
			name: "Shadow Stealth",
			description: "While in dim light or darkness, the horror can take the Hide action as a bonus action."
		}, {
			name: "Shadow Stride",
			description: "As a bonus action, the horror can step into a shadow within 5 feet of it and magically appear in an unoccupied space within 5 feet of a second shadow that is up to 60 feet away. Both shadows must be cast by a Small or larger creature or object."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the horror has disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The horror makes three attacks: one with its bite and two with its claws."
		}, {
			name: "Lashing Shadows (Recharge 5-6)",
			description: "Each creature within 60 feet of the horror, except other horrors, must succeed on a DC 16 Dexterity saving throw or take 27 (6d8) necrotic damage."
		}
		],
		description: "Horrors and Madness:\n Horrors on Ravnica are terror and madness personified. You can represent this reality by using the madness rules in the Dungeon Master's Guide.\n Whenever a character fails a saving throw against the flying horror's Frightening Screech, the shadow horror's claw attack, or the skittering horror's Maddening Presence, note that fact. At the end of the encounter, have each character who failed at least one of those saving throws make a DC 13 Wisdom saving throw. On a successful save, nothing happens. On a failed save, a character gains a form of madness from the Dungeon Master's Guide, with the severity depending on how many of the saving throws that character failed during the encounter, as shown on the Madness Severity table.\n Failed Saves | Madness\n 1 | Short-term\n 2-3 | Long-term\n 4+ | Indefinite\n  \n Horrors:\n Terrifying evils stalk, fly, and scuttle in the dark corners of Ravnica, from the depths of the undercity to the blackest parts of the night sky. Collectively, these creatures are called horrors-a variety of things that lurk in the dark and embody the deepest fears of Ravnica's people. All are evil creatures with dim reason and preternatural cunning.\n At least three guilds have been known to compel horrors into service. For House Dimir, horrors spread fear and despair in the citizenry and carry out assassinations or kidnappings against well-protected targets. For the Cult of Rakdos, horrors are simply one more weapon in an arsenal of terrifying and shock-inspiring creatures that might appear on stage. For the Golgari Swarm, horrors scavenge the sewers and protect the guild's territory.\n House Dimir uses all three base kinds of horrors. The Cult of Rakdos prefers shadow horrors, and the Golgari Swarm uses skittering horrors.\n Customizing a Horror:\n Horrors share some common body types but vary wildly in other characteristics. A particular horror's form might incorporate elements that resemble fiendish, insectile, or reptilian features. To customize a horror, choose a base creature (flying horror, shadow horror, or skittering horror), then roll once on the Primary Features table and once on the Secondary Features table (or choose an option from each table). Add those features to the base creature.\n d4 | Feature\n 1 | Avoidance. If the horror is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.\n 2 | Damage Resistances. The horror has resistance to necrotic and psychic damage.\n 3 | Innate Spellcasting. The horror's innate spellcasting ability is Charisma (spell save DC 13 for flying horror, DC 16 for shadow horror, and DC 17 for skittering horror). It can innately cast the following spells, requiring no material components: 3/day: darkness 1/day each: fear (shadow horror and skittering horror only), phantasmal killer (skittering horror only)\n 4 | Psychic Rebuke. When the horror takes damage from a melee attack, it can use its reaction to emit psychic energy within a 5-foot radius. Each creature in that area takes 3 (1d6) psychic damage (flying horror), 7 (2d6) psychic damage (shadow horror), or 10 (3d6) psychic damage (skittering horror).\n  \n d4 | Feature\n 1 | Grasping Tendrils. The horror has four tendrils. Each tendril can be attacked (AC 12, 10 hit points). Destroying one deals no damage to the horror. As a bonus action, the horror can target one creature it can see within 10 feet of it. The target must succeed on a Dexterity saving throw or be grappled by the horror. The DC of the saving throw and the DC to escape the grapple are the same: 9 for the flying horror, 13 for the shadow horror, and 19 for the skittering horror. Until the grapple ends, the horror can't use the same tendril to grapple another target.\n 2 | Indomitable Mind. The horror is immune to the charmed condition.\n 3 | Keen Senses. The horror has advantage on Wisdom (Perception) checks that rely on sight, sound, or smell.\n 4 | Mind Sight. Magical darkness doesn't impede the horror's darkvision.",
	},
	"Skittering Horror": {
		name: "Skittering Horror",
		source: ["Guildmasters' Guide to Ravnica",],
		size: "Huge",
		type: "aberration",
		alignment: "Lawful Evil",
		ac: [17, "Natural Armor", false],
		hp: 228,
		hd: [24, 12],
		scores: [22, 16, 17, 2, 14, 18],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +7, Stealth +8",
		passive_perception: "17",
		languages: "",
		challenge_rating: "15",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "radiant",
		condition_immunities: "frightened",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 10, "piercing"],
			range: "Melee (10 ft)",
			description: ""
		}, {
			name: "Claws",
			ability: 1,
			damage: [4, 8, "slashing"],
			range: "Melee (10 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Spider Climb",
			description: "The horror can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the horror has disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The horror can use its Maddening Presence and make three attacks: one with its bite and two with its claws."
		}, {
			name: "Maddening Presence",
			description: "The horror targets one creature it can see within 30 feet of it. If the target can see or hear the horror, the target must make a DC 17 Wisdom saving throw. On a failed saving throw, the target becomes paralyzed until the end of its next turn. If a creature's saving throw is successful, the creature is immune to the horror's Maddening Presence for the next 24 hours."
		}
		],
		environment: ""
	},
	"Archon of the Triumvirate": {
		name: "Archon of the Triumvirate",
		source: ["Guildmasters' Guide to Ravnica", 192],
		size: "Medium",
		type: "celestial",
		alignment: "Lawful Neutral",
		ac: [18, "Plate Armor", false],
		hp: 144,
		hd: [17, 8],
		scores: [20, 15, 19, 15, 21, 18],
		saves: ["", "", "9", "", "10", "9"],
		skills: "Insight +10, Perception +10",
		passive_perception: "20",
		languages: "All",
		challenge_rating: "14",
		damage_resistances: "bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Hammer of Justice",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 18 (4d8) force damage. If the target is a creature, it must succeed on a DC 18 Strength saving throw or be knocked prone.",
		}
		],
		traits: [{
			name: "Eye of the Law",
			description: "As a bonus action, the archon can target a creature it can see within 120 feet of it and determine which laws that creature has broken in the last 24 hours."
		}, {
			name: "Mount",
			description: "If the archon isn't mounted, it can use a bonus action to magically teleport onto the creature serving as its mount, provided the archon and its mount are on the same plane of existence. When it teleports, the archon appears astride the mount along with any equipment it is wearing or carrying. While mounted and not incapacitated, the archon can't be surprised, and both it and its mount gain advantage on Dexterity saving throws. If the archon is reduced to 0 hit points while riding its mount, the mount is reduced to 0 hit points as well."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The archon's innate spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). The archon can innately cast the following spells, requiring no material components:",
				"At will: calm emotions, command, compelled duel"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The archon makes two Hammer of Justice attacks."
		}, {
			name: "Pacifying Presence",
			description: "Each creature of the archon's choice that the archon can see within 120 feet of it must succeed on a DC 18 Wisdom saving throw, or else the target drops any weapons it is holding, ends its concentration on any spells or other effects, and becomes charmed by the archon for 1 minute. The charmed creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the archon's Pacifying Presence for the next 24 hours."
		}
		],
		legendary_actions: [{
			description: "The celestial can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The celestial regains spent legendary actions at the start of its turn."
		}, {
			name: "Rejoin Mount",
			description: "If the archon isn't mounted, it magically teleports to its steed and mounts it as long as the archon and its steed are on the same plane of existence."
		}, {
			name: "Smite (Costs 2 Actions)",
			description: "The archon makes a Hammer of Justice attack, and then its mount can use its reaction to make a melee weapon attack."
		}, {
			name: "Detention (Costs 3 Actions)",
			description: "The archon targets a creature it can see within 60 feet of it. The target must succeed on a DC 18 Charisma saving throw or be magically teleported to a harmless demiplane until the end of the archon's next turn, whereupon the target reappears in the space it left or the nearest unoccupied space if that space is occupied."
		}
		],
		spells: "calm emotions, command, compelled duel",
		description: "Eternal Riders\n The bond between an archon and its winged felidar mount is so close that the two are sometimes considered a single being, acting with a single mind. If an archon is ever thrown from its saddle, it can magically return to its place astride its mount in an instant.\n Immortal Nature\n An archon doesn't require food, drink, or sleep.",
	},
	"Battleforce Angel": {
		name: "Battleforce Angel",
		source: ["Guildmasters' Guide to Ravnica", 189],
		size: "Medium",
		type: "celestial",
		alignment: "Lawful Good",
		ac: [18, "Plate Armor", false],
		hp: 66,
		hd: [12, 8],
		scores: [16, 12, 13, 11, 17, 18],
		saves: ["", "", "", "", "6", "7"],
		skills: "Investigation +3, Perception +6",
		passive_perception: "16",
		languages: "all",
		challenge_rating: "5",
		damage_resistances: "fire, radiant",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened",
		senses: "darkvision 120 ft, truesight 120 ft",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 18 (4d8) radiant damage. Two-Handed: 8 (1d10+3) slashing damage. If the target is within 5 feet of any of the angel's allies, the target takes an extra 2 (1d4) radiant damage.",
		}
		],
		traits: [{
			name: "Flyby",
			description: "The angel doesn't provoke an opportunity attack when it flies out of an enemy's reach."
		}, {
			name: "Magic Resistance",
			description: "The angel has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The angel makes two melee attacks. It also uses Battlefield Inspiration."
		}, {
			name: "Battlefield Inspiration",
			description: "The angel chooses up to three creatures it can see within 30 feet of it. Until the end of the angel's next turn, each target can add a d4 to its attack rolls and saving throws."
		}
		],
		description: "Battleforce angels are the radiant hosts that soar into combat, bathed in the light of Boros zeal. They lead companies of mortal soldiers from above or fly ahead of roc-mounted skyknights. They don't shy away from the blood, pain, and confusion of combat; rather, they immerse themselves in the shifting tides of battle. Only by wading into the battle can they fulfill their responsibility to carry out the commands of the warleaders by adapting their tactics to the shifting situation on the ground.\n Warleaders\n The wisest, most visionary angels are responsible for forming and implementing the military strategy of the Boros Legion. Since they are immortal, their plans might span centuries, and they have been known to accept decades of losses as a reasonable cost for a more significant victory many years later. These warleaders have the statistics of planetars or solars (as presented in the Monster Manual), but their appearance is similar to other Boros angels.",
	},
	"Deathpact Angel": {
		name: "Deathpact Angel",
		source: ["Guildmasters' Guide to Ravnica", 192],
		size: "Medium",
		type: "celestial",
		alignment: "Lawful Evil",
		ac: [18, "Natural Armor", false],
		hp: 175,
		hd: [27, 8],
		scores: [16, 18, 14, 19, 20, 23],
		saves: ["", "", "", "9", "10", "11"],
		skills: "Insight +10, Intimidation +11, Perception +10, Persuasion +11",
		passive_perception: "20",
		languages: "all",
		challenge_rating: "14",
		damage_resistances: "necrotic, radiant; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Scythe",
			ability: 2,
			damage: [2, 4, "slashing"],
			range: "Melee (10 ft)",
			description: "Plus 27 (6d8) necrotic damage.",
		}
		],
		traits: [{
			name: "Exploitation of the Debtors",
			description: "As a bonus action, the angel targets a creature charmed by it that it can see within 30 feet of it. The angel deals 11 (2d10) necrotic damage to the target, and the angel gains temporary hit points equal to the damage dealt."
		}, {
			name: "Flyby",
			description: "The angel doesn't provoke an opportunity attack when it flies out of an enemy's reach."
		}, {
			name: "Magic Resistance",
			description: "The angel has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The angel's innate spellcasting ability is Charisma (spell save DC 19, +11 to hit with spell attacks). The angel can innately cast the following spells, requiring no material components:",
				"At will: command (as a 2nd-level spell), detect evil and good",
				"1/day: raise dead",
				"3/day each: charm person (as a 5th-level spell), darkness, suggestion"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The angel makes two attacks with its scythe. It can substitute Chains of Obligation for one of these attacks."
		}, {
			name: "Chains of Obligation",
			description: "The angel targets one creature charmed by it that it can see within 90 feet of it. The target must succeed on a DC 19 Charisma saving throw or become paralyzed for 1 minute or until it takes any damage."
		}
		],
		spells: "command, detect evil and good, raise dead, charm person, darkness, suggestion",
		description: "Gift Givers\n Posing as a beneficent god, a deathpact angel attracts petitioners who beg the angel for blessings: wealth, prestige, health, revenge, and the like. Imagining itself generous and merciful, the angel usually tries to grant the petitioners what they seek by using its abilities, drawing from its hoard of riches, or extorting favors from other members of the guild. True to the spirit of the Orzhov, though, the angel doesn't bestow these gifts out of kindness, but for the sake of gaining fanatical followers who owe it life debts.\n Debt and Indenture\n Those who receive favors from a deathpact angel incur a debt that they carry with fervent devotion. They regularly bring trinkets and offerings to the angel, no longer asking or expecting anything in return, and even willingly offer up their mortal lives for their angelic patron. Even after death, these debtors continue to serve the angel and the Orzhov Syndicate as indentured spirits (described later in this chapter).\n Debts Paid\n Orzhov Angels:\n Few angels find anything appealing in the corruption and decadence embodied by the Orzhov Syndicate, since such a society is fundamentally antithetical to their natures, but disillusionment can seduce even immortal beings. When cynicism takes root in an angel's heart, when questions undermine devotion to the cause of justice, when strength becomes a tool to lord over the weak, the Orzhov Syndicate is there to welcome the angel with open arms, offering status, respect, and power.\n Orzhov angels might claim positions as executioners, commanders, or power brokers, but more often they carve out their own place in the guild, standing apart from the otherwise rigid hierarchy of the Orzhov.",
	},
	"Felidar": {
		name: "Felidar",
		source: ["Guildmasters' Guide to Ravnica", 199],
		size: "Large",
		type: "celestial",
		alignment: "Lawful Neutral",
		ac: [17, "Natural Armor", false],
		hp: 93,
		hd: [11, 10],
		scores: [19, 16, 17, 10, 17, 14],
		saves: ["", "6", "", "", "6", "5"],
		skills: "Insight +6, Perception +6",
		passive_perception: "16",
		languages: "understands Celestial and Common but can't speak",
		challenge_rating: "5",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 8, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Claws",
			ability: 1,
			damage: [3, 6, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Bonding",
			description: "The felidar can magically bond with one creature it can see, right after spending at least 1 hour observing that creature while within 30 feet of it. The bond lasts until the felidar bonds with a different creature or until the bonded creature dies. This bond has the following effects: The felidar and the bonded creature can communicate telepathically with each other at a distance of up to 100 feet. The felidar can sense the direction and distance to the bonded creature if they're on the same plane of existence. As an action, the felidar or the bonded creature can sense what the other sees and hears, during which time it loses its own sight and hearing. This effect lasts until the start of its next turn."
		}, {
			name: "Keen Hearing and Sight",
			description: "The felidar has advantage on Wisdom (Perception) checks that rely on hearing or sight."
		}, {
			name: "Pounce",
			description: "If the felidar moves at least 20 feet straight toward a creature and hits it with a claw attack on the same turn, that target must succeed on a DC 15 Strength saving throw or be knocked prone. If the target is prone, the felidar can make one claw attack against it as a bonus action."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The felidar makes two attacks: one with its bite and one with its claws."
		}, {
			name: "Variant: Winged Felidars",
			description: "Some felidars boast huge, feathered wings. A winged felidar uses the same stat block as an ordinary felidar, with the addition of a flying speed of 40 feet."
		}
		],
		description: "A felidar is a celestial creature whose nature reflects an inherent devotion to law and order. It resembles an enormous cat with two pairs of downward-sloping horns and prominent teeth. Its blue-gray hide has a silvery, geometric pattern, and its thick white mane falls in an orderly fashion around its shoulders.\n Nearly every felidar forms a close bond with one other creature. Winged felidars almost always bond with archons, joining in their relentless pursuit of justice. Other felidars ally with members of the Azorius Senate and form bonds with high-ranking justiciars and ministers, aiding them in enforcing the law and tracking down criminals. Some Azorius felidars form bonds with important prisoners in Azorius custody, ensuring that the felidars can track down the felons if they escape custody.",
	},
	"Firemane Angel": {
		name: "Firemane Angel",
		source: ["Guildmasters' Guide to Ravnica", 190],
		size: "Medium",
		type: "celestial",
		alignment: "Chaotic Good",
		ac: [18, "Plate Armor", false],
		hp: 135,
		hd: [18, 8],
		scores: [22, 15, 17, 12, 14, 23],
		saves: ["10", "", "", "", "6", "10"],
		skills: "Insight +6, Perception +6",
		passive_perception: "16",
		languages: "all",
		challenge_rating: "12",
		damage_resistances: "fire, radiant; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 11 (1d10+6) slashing damage. Plus 22 (5d8) fire or radiant damage (angel's choice).",
		}
		],
		traits: [{
			name: "Flyby",
			description: "The angel doesn't provoke an opportunity attack when it flies out of an enemy's reach."
		}, {
			name: "Magic Resistance",
			description: "The angel has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Relentless (Recharges after a Short or Long Rest)",
			description: "If the angel takes 21 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The angel's innate spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). The angel can innately cast the following spells, requiring no material components:",
				"3/day each: compelled duel, guiding bolt (as a 5th-level spell)",
				"1/day each: daylight, fireball (as a 6th-level spell)"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The angel makes two melee attacks."
		}
		],
		spells: "compelled duel, guiding bolt, daylight, fireball",
		description: "Firemane angels are holy champions and paragons of war who specialize in single combat. They are powerful warriors who seek out the mightiest foes in any conflict, trusting lesser soldiers to handle lesser opponents.\n Like many other Boros angels, firemanes typically have red hair. In the heat of battle, a firemane's hair can ignite, transforming into a mane of flames cascading over its shoulders and down its back.\n Warleaders\n The wisest, most visionary angels are responsible for forming and implementing the military strategy of the Boros Legion. Since they are immortal, their plans might span centuries, and they have been known to accept decades of losses as a reasonable cost for a more significant victory many years later. These warleaders have the statistics of planetars or solars (as presented in the Monster Manual), but their appearance is similar to other Boros angels.",
	},
	"Aurelia": {
		name: "Aurelia",
		source: ["Guildmasters' Guide to Ravnica", 230],
		size: "Medium",
		type: "celestial (angel)",
		alignment: "Lawful Good",
		ac: [22, "Natural Armor", false],
		hp: 287,
		hd: [25, 8],
		scores: [26, 24, 25, 17, 25, 30],
		saves: ["", "14", "14", "", "", "17"],
		skills: "Insight +14, Perception +14",
		passive_perception: "24",
		languages: "all",
		challenge_rating: "23",
		damage_resistances: "necrotic, radiant; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 13 (1d10+8) slashing damage. Plus 27 (6d8) radiant damage.",
		}, {
			name: "Warleader's Helix (Recharge 5-6)",
			ability: 6,
			damage: [12, 8, "radiant"],
			range: "Ranged (60 ft)",
			modifiers: [-1, "", ""], // bonuses to: [to hit, to damage, add ability to damage];
			description: "Aurelia can choose another creature she can see within 10 feet of the target. The second creature regains 27 (6d8) hit points.",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If Aurelia fails a saving throw, she can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Aurelia has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Aurelia makes three longsword attacks and uses Leadership."
		}, {
			name: "Leadership",
			description: "Aurelia utters a few inspiring words to one creature she can see within 30 feet of her. If the creature can hear her, it can add a d10 to one attack roll or saving throw it makes before the start of Aurelia's next turn."
		}
		],
		reactions: [{
			name: "Parry",
			description: "Aurelia adds 7 to her AC against one melee attack that would hit her. To do so, Aurelia must see the attacker and be wielding a melee weapon."
		}, {
			name: "Unyielding",
			description: "When Aurelia is subjected to an effect that would move her, knock her prone, or both, she can use her reaction to be neither moved nor knocked prone."
		}
		],
		legendary_actions: [{
			description: "Aurelia can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Aurelia regains spent legendary actions at the start of its turn."
		}, {
			name: "Command Allies",
			description: "Aurelia chooses up to three creatures she can see within 30 feet of her. If a chosen creature can see or hear Aurelia, it can immediately use its reaction to make one weapon attack, with advantage on the attack roll."
		}, {
			name: "Longsword Attack (Costs 2 Actions)",
			description: "Aurelia makes one longsword attack."
		}, {
			name: "Frighten Foes (Costs 3 Actions)",
			description: "Aurelia targets up to five creatures she can see within 30 feet of her. Each target must succeed on a DC 25 Wisdom saving throw or be frightened of her until the end of her next turn. Any target within 5 feet of Aurelia has disadvantage on the saving throw."
		}
		],
		description: "Immortal Nature\n Aurelia doesn't require food, drink, or sleep.",
	},
	"Servitor Thrull": {
		name: "Servitor Thrull",
		source: ["Guildmasters' Guide to Ravnica", 221],
		size: "Small",
		type: "construct",
		alignment: "Unaligned",
		ac: [11, "", false],
		hp: 22,
		hd: [4, 6],
		scores: [11, 13, 14, 6, 6, 3],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "8",
		languages: "understands Common but can't speak",
		challenge_rating: "1/4",
		damage_resistances: "",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "exhaustion, poisoned",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Claws",
			ability: 2,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		reactions: {
			name: "Self-Sacrifice",
			description: "When a creature within 5 feet of the thrull is hit by an attack, the thrull swaps places with that creature and is hit instead."
		},
		description: "The most wretched of thrulls are the servitors, small and slender, that serve as playthings for their Orzhov masters. They run trivial errands, transport small items, caper and dance, and keep their masters' expensive robes from trailing on the dirty street. They are utterly loyal, lacking any concept of thinking for themselves.\n Construct Nature\n A thrull doesn't require air, food, drink, or sleep.",
	},
	"Winged Thrull": {
		name: "Winged Thrull",
		source: ["Guildmasters' Guide to Ravnica", 221],
		size: "Small",
		type: "construct",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 31,
		hd: [7, 6],
		scores: [9, 15, 12, 8, 9, 8],
		saves: ["", "4", "", "", "", ""],
		skills: "",
		passive_perception: "9",
		languages: "understands Common but can't speak",
		challenge_rating: "1/2",
		damage_resistances: "",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "exhaustion, poisoned",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Claws",
			ability: 2,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Rock",
			ability: 2,
			damage: [1, 6, "bludgeoning"],
			range: "Ranged (20/60 ft)",
			description: ""
		}
		],
		reactions: {
			name: "Self-Sacrifice",
			description: "When a creature within 5 feet of the thrull is hit by an attack, the thrull swaps places with that creature and is hit instead."
		},
		description: "Winged thrulls are at once the most intelligent of Orzhov thrulls (which isn't saying much), as well as the smallest, most unobtrusive, and most mobile. They act as messengers and spies for their Orzhov masters and tend to mimic the mannerisms and movements of the oligarchs they serve.\n Construct Nature\n A thrull doesn't require air, food, drink, or sleep.",
	},
	"Niv-Mizzet": {
		name: "Niv-Mizzet",
		source: ["Guildmasters' Guide to Ravnica", 241],
		size: "Gargantuan",
		type: "dragon",
		alignment: "Chaotic Neutral",
		ac: [22, "Natural Armor", false],
		hp: 370,
		hd: [19, 20],
		scores: [29, 14, 29, 30, 17, 25],
		saves: ["", "", "17", "18", "11", ""],
		skills: "Arcana +18, Insight +11, Perception +11",
		passive_perception: "21",
		languages: "Common, Draconic",
		challenge_rating: "26",
		damage_resistances: "cold, psychic, thunder",
		damage_immunities: "fire, lightning",
		damage_vulnerabilities: "",
		condition_immunities: "charmed",
		senses: "blindsight 60 ft, darkvision 120 ft",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (15 ft)",
			description: "Plus 14 (4d6) fire damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (10 ft)",
			description: ""
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (20 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If Niv-Mizzet fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Locus of the Firemind",
			description: "Niv-Mizzet can maintain concentration on two different spells at the same time. In addition, he has advantage on saving throws to maintain concentration on spells."
		}, {
			name: "Magic Resistance",
			description: "Niv-Mizzet has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Master Chemister",
			description: "When Niv-Mizzet casts a spell that deals damage, he can change the spell's damage to cold, fire, force, lightning, or thunder."
		}
		],
		spells: [
			"Niv-Mizzet is a 20th-level Izzet spellcaster. His spellcasting ability is Intelligence (spell save DC 26, +18 to hit with spell attacks). He has the following wizard spells prepared:",
			"Cantrips (at will): fire bolt, light, prestidigitation, ray of frost, shocking grasp",
			"1st level (4 slots): detect magic, magic missile, shield, thunderwave, unseen servant",
			"2nd level (3 slots): blur, enlarge/reduce, flaming sphere, scorching ray",
			"3rd level (3 slots): counterspell, fireball, hold person, lightning bolt, slow",
			"4th level (3 slots): confusion, dimension door, fabricate",
			"5th level (2 slots): conjure elemental, polymorph, wall of fire, wall of force",
			"6th level (1 slots): chain lightning, disintegrate, true seeing",
			"7th level (1 slots): project image, reverse gravity, teleport",
			"8th level (1 slots): control weather, maze, power word stun",
			"9th level (1 slots): prismatic wall"
		],
		actions: [{
			name: "Multiattack",
			description: "Niv-Mizzet makes three attacks: one with his bite and two with his claws."
		}, {
			name: "Fire Breath (Recharge 5-6)",
			description: "Niv-Mizzet exhales fire in a 90-foot cone. Each creature in that area must make a DC 25 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one."
		}
		],
		legendary_actions: [{
			description: "Niv-Mizzet can take 4 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Niv-Mizzet regains spent legendary actions at the start of its turn."
		}, {
			name: "Cantrip",
			description: "Niv-Mizzet casts one of his cantrips."
		}, {
			name: "Tail Attack",
			description: "Niv-Mizzet makes a tail attack."
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "Niv-Mizzet beats his wings. Each creature within 15 feet of him must succeed on a DC 25 Dexterity saving throw or take 14 (2d4+9) bludgeoning damage and be knocked prone. Niv-Mizzet can then fly up to half his flying speed."
		}, {
			name: "Dracogenius (Costs 3 Actions)",
			description: "Niv-Mizzet regains a spell slot of 3rd level or lower."
		}
		],
		slots: "4, 3, 3, 3, 2, 1, 1, 1, 1",
		description: "Possessed of arrogance and vanity that matches his vast intellect and tremendous power, Niv-Mizzet is the ancient dragon who founded and continues to control the Izzet League. From his private laboratory at the top of the Izzet guildhall, Niv-Mizzet directs the research and experiments of his countless underlings. He coordinates a tremendous number of apparently unrelated projects, working toward some mysterious end.\n There can be little doubt that this ancient dragon is one of the most intelligent beings on Ravnica and one of the world's most powerful spellcasters. He is just as acquisitive as any dragon, but his treasure is scientific and magical knowledge. His ambition is a looming threat in the minds of all the other guildmasters, but confronting him directly is almost unthinkable thanks to the combination of his awesome magical power and the sheer physical threat of a fire-breathing, swordtoothed dragon.",
	},
	"Arclight Phoenix": {
		name: "Arclight Phoenix",
		source: ["Guildmasters' Guide to Ravnica", 193],
		size: "Medium",
		type: "elemental",
		alignment: "Chaotic Neutral",
		ac: [16, "", false],
		hp: 142,
		hd: [19, 8],
		scores: [15, 22, 17, 5, 12, 7],
		saves: ["", "10", "", "", "", ""],
		skills: "",
		passive_perception: "11",
		languages: "",
		challenge_rating: "12",
		damage_resistances: "thunder; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "lightning, poison",
		damage_vulnerabilities: "",
		condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, restrained, unconscious",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Arclight Touch",
			ability: 2,
			damage: [6, 8, "lightning"],
			range: "Melee (5 ft)",
			modifiers: ["", "", false], // bonuses to: [to hit, to damage, add ability to damage];
			description: "Lightning jumps from the target to one creature of the phoenix's choice that it can see within 30 feet of the target. That second creature must succeed on a DC 18 Dexterity saving throw or take 27 (6d8) lightning damage.",
		}
		],
		traits: [{
			name: "Flyby",
			description: "The arclight phoenix doesn't provoke an opportunity attack when it flies out of an enemy's reach."
		}, {
			name: "Grounded Lightning",
			description: "The first time on a turn that the arclight phoenix touches the ground, it takes 11 (2d10) force damage."
		}, {
			name: "Illumination",
			description: "The arclight phoenix sheds bright light in a 15-foot radius and dim light for an additional 15 feet."
		}, {
			name: "Lightning Form",
			description: "The arclight phoenix can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the phoenix or hits it with a melee attack while within 5 feet of it takes 9 (2d8) lightning damage. In addition, the arclight phoenix can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 9 (2d8) lightning damage."
		}, {
			name: "Crackling Death",
			description: "When the arclight phoenix dies, it explodes. Each creature within 30 feet of it must make a DC 18 Dexterity saving throw, taking 36 (8d8) lightning damage on a failed save, or half as much damage on a successful one. The explosion destroys the phoenix but leaves behind a Tiny, warm egg with a mizzium shell. The egg contains the embryo of a new arclight phoenix. It hatches when it is in the area of a spell that deals lightning damage, or if a creature touches the egg and expends spell slots whose combined levels equal 13 or more. When it hatches, the egg releases a new arclight phoenix that appears in the egg's space."
		}
		],
		description: "Elemental Nature\n An arclight phoenix doesn't require air, food, drink, or sleep.",
	},
	"Blistercoil Weird": {
		name: "Blistercoil Weird",
		source: ["Guildmasters' Guide to Ravnica", 207],
		size: "Medium",
		type: "elemental",
		alignment: "Chaotic Neutral",
		ac: [13, "", false],
		hp: 45,
		hd: [7, 8],
		scores: [16, 16, 15, 5, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "10",
		languages: "Draconic",
		challenge_rating: "4",
		damage_resistances: "cold, fire; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) fire damage, or 11 (2d8+3) bludgeoning damage plus 14 (4d6) fire damage if the weird is Large or bigger.",
		}
		],
		traits: [{
			name: "Feed on Fire",
			description: "If the weird takes fire damage from a spell or other magical effect, its size increases by one category. If there isn't enough room for the weird to increase in size, it attains the maximum size possible in the space available. While the weird is Large or bigger, it makes Strength checks and saving throws with advantage. If the weird starts its turn at Gargantuan size, the weird releases energy in an explosion. Each creature within 30 feet of the weird must make a DC 12 Dexterity saving throw, taking 28 (8d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in the area that aren't being worn or carried. The weird's size then becomes Medium."
		}, {
			name: "Form of Fire and Water",
			description: "The weird can move through a space as narrow as 1 inch wide without squeezing. In addition, the weird can enter a hostile creature's space and stop there. The first time the weird enters another creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the burning creature takes 5 (1d10) fire damage at the start of each of its turns."
		}, {
			name: "Heated Body",
			description: "A creature that touches the weird or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage."
		}, {
			name: "Illumination",
			description: "The weird sheds bright light in a 30-foot radius and dim light for an additional 30 feet."
		}
		],
		description: "A blistercoil weird is an anthropomorphic brute formed from water and molten rock. It absorbs energy from magical fire, causing its oozelike body to increase in size. During one disastrous experiment, Izzet researchers observed a blistercoil weird expanding to fill a six-story workshop before it released all its excess energy in an enormous explosion and returned to its original size.\n Elemental Nature\n An Izzet weird doesn't require air, food, drink, or sleep.",
	},
	"Fluxcharger": {
		name: "Fluxcharger",
		source: ["Guildmasters' Guide to Ravnica", 208],
		size: "Large",
		type: "elemental",
		alignment: "Chaotic Neutral",
		ac: [16, "Natural Armor", false],
		hp: 60,
		hd: [8, 10],
		scores: [15, 18, 15, 6, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "10",
		languages: "Draconic",
		challenge_rating: "7",
		damage_resistances: "thunder; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "lightning, poison",
		damage_vulnerabilities: "",
		condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Slam",
			ability: 2,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Plus 10 (3d6) fire damage.",
		}, {
			name: "Arc Lightning",
			ability: 2,
			damage: [3, 10, "lightning"],
			range: "Ranged (30 ft)",
			modifiers: ["", "", false], // bonuses to: [to hit, to damage, add ability to damage];
			description: "Lightning jumps from the target to one creature of the fluxcharger's choice that it can see within 30 feet of the target. That second creature must succeed on a DC 15 Dexterity saving throw or take 13 (3d8) lightning damage. Hit or Miss: The fluxcharger takes 5 (1d10) force damage after resolving the attack.",
		}
		],
		traits: [{
			name: "Amplify Lightning",
			description: "Whenever a spell that deals lightning damage includes one or more fluxchargers in its area, the spell deals an extra 9 (2d8) lightning damage."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The fluxcharger makes two slam attacks or uses Arc Lightning twice."
		}
		],
		description: "In an effort to create a weird that could be more easily controlled, Izzet mages tried binding elemental lightning, fire, and smoke into a framework made of the magical alloy mizzium. The experiment was partly successful: the resulting weird, a fluxcharger, doesn't explode like some other weirds do, but it is more intelligent and more headstrong than other weirds.\n A fluxcharger's mizzium frame is suggestive of an angel. A faceplate is meant to give it some personality, but most people find its solemn expression and unblinking stare more unnerving than relatable.\n Elemental Nature\n An Izzet weird doesn't require air, food, drink, or sleep.",
	},
	"Galvanice Weird": {
		name: "Galvanice Weird",
		source: ["Guildmasters' Guide to Ravnica", 209],
		size: "Medium",
		type: "elemental",
		alignment: "Chaotic Neutral",
		ac: [12, "Natural Armor", false],
		hp: 22,
		hd: [3, 8],
		scores: [14, 10, 17, 3, 10, 5],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "10",
		languages: "",
		challenge_rating: "1",
		damage_resistances: "cold, lightning; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 5 (2d4) lightning damage. If the target is a creature, it must succeed on a DC 13 Constitution saving throw or lose the ability to use reactions until the start of the weird's next turn.",
		}
		],
		traits: [{
			name: "Death Burst",
			description: "When the galvanice weird dies, it explodes in a burst of ice and lightning. Each creature within 10 feet of the exploding weird must make a DC 13 Dexterity saving throw, taking 7 (2d6) lightning damage on a failed save, or half as much damage on a successful one."
		}
		],
		description: "Galvanice weirds seem to be the epitome of weird technology. Indeed, they serve willingly, with cheerful stupidity, as guardians and laborers in Izzet workshops. They combine a rigid body of elemental ice with a core of lightning that animates them. If a galvanice weird is destroyed, the ice shatters and lightning crackles outward in a dangerous explosion. Still, most Izzet researchers find that their usefulness outweighs this risk.\n Elemental Nature\n An Izzet weird doesn't require air, food, drink, or sleep.",
	},
	"Conclave Dryad": {
		name: "Conclave Dryad",
		source: ["Guildmasters' Guide to Ravnica", 194],
		size: "Medium",
		type: "fey",
		alignment: "Lawful Good",
		ac: [16, "Natural Armor", false],
		hp: 143,
		hd: [22, 8],
		scores: [12, 19, 14, 19, 20, 21],
		saves: ["", "", "", "8", "9", "9"],
		skills: "Arcana +8, Nature +8, Perception +9",
		passive_perception: "19",
		languages: "Common, Elvish, Sylvan",
		challenge_rating: "9",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Vine Staff",
			ability: 2,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, it must succeed on a DC 17 Dexterity saving throw or become restrained by twisting vines for 1 minute. A target restrained in this way can use an action to make a DC 17 Strength (Athletics) or Dexterity (Acrobatics) check, ending the effect on itself on a success.",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The dryad has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Speak with Beasts and Plants",
			description: "The dryad can communicate with beasts and plants as if they and the dryad shared a language."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The dryad's innate spellcasting ability is Charisma (spell save DC 17). The dryad can innately cast the following spells, requiring no material components:",
				"At will: druidcraft",
				"3/day each: dispel magic, entangle, plant growth, spike growth",
				"1/day each: moonbeam, grasping vine, wall of thorns"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dryad makes three attacks, using its vine staff, its longbow, or both."
		}, {
			name: "Summon Mount (1/Day)",
			description: "The dryad magically summons a mount, which appears in an unoccupied space within 60 feet of the dryad. The mount remains for 8 hours, until it or the dryad dies, or until the dryad dismisses it as an action. The mount uses the stat block of an elk (see the Monster Manual) with these changes: it is a plant instead of a beast, it has an Intelligence of 6, and it understands Sylvan but can't speak. While within 1 mile of the mount, the dryad can communicate with it telepathically."
		}, {
			name: "Suppress Magic (Recharge 5-6)",
			description: "The dryad targets one magic item it can see within 120 feet of it. If the magic item isn't an artifact, its magical properties are suppressed for 10 minutes, until the dryad is incapacitated or dies, or until the dryad uses a bonus action to end the effect."
		}
		],
		description: "Summoned Mount\n When leading its guild into battle, a dryad rides a magically summoned creature woven of living branches, vines, and grasses and imbued with a fey spirit.",
	},
	"Trostani": {
		name: "Trostani",
		source: ["Guildmasters' Guide to Ravnica", 252],
		size: "Large",
		type: "fey",
		alignment: "Neutral Good",
		ac: [17, "Natural Armor", false],
		hp: 252,
		hd: [24, 10],
		scores: [19, 14, 20, 16, 30, 25],
		saves: ["", "", "11", "", "16", "13"],
		skills: "Arcana +9, Insight +16, Nature +9, Perception +16, Persuasion +13",
		passive_perception: "26",
		languages: "Common, Druidic, Elvish, Sylvan",
		challenge_rating: "18",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, grappled",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Constrict",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			modifiers: ["", 1, ""], // bonuses to: [to hit, to damage, add ability to damage];
			description: "15 (3d6+5) bludgeoning damage. Target is grappled (escape DC 19). Until this grapple ends, the target is restrained. Trostani can grapple no more than three targets at a time.",
		}, {
			name: "Touch of Order",
			ability: 5,
			damage: [3, 8, "radiant"],
			range: "Melee (5 ft)",
			modifiers: ["", "", true], // bonuses to: [to hit, to damage, add ability to damage];
			description: "Trostani can choose one magic item she can see in the target's possession. Unless it's an artifact, the item's magic is suppressed until the start of Trostani's next turn.",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If Trostani fails a saving throw, she can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Trostani has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "Trostani's weapon attacks are magical."
		}, {
			name: "Speak with Beasts and Plants",
			description: "Trostani can communicate with beasts and plants as if they shared a language."
		}, {
			name: "Tree Stride",
			description: "Once on her turn, Trostani can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Trostani's innate spellcasting ability is Wisdom (spell save DC 24). She can innately cast the following spells, requiring no material components:",
				"At will: dispel magic, druidcraft",
				"3/day each: bless, conjure animals, giant insect, moonbeam, plant growth, spike growth, suggestion",
				"1/day each: conjure fey, mass cure wounds"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Trostani takes three actions: she uses Constrict and Touch of Order, and she casts a spell with a casting time of 1 action."
		}, {
			name: "Wrath of Mat'Selesnya (Recharge 5-6)",
			description: "Trostani conjures a momentary whirl of branches and vines at a point she can see within 60 feet of her. Each creature in a 30-foot cube on that point must make a DC 24 Dexterity saving throw, taking 21 (6d6) bludgeoning damage and 21 (6d6) slashing damage on a failed save, or half as much damage on a successful one."
		}
		],
		legendary_actions: [{
			description: "Trostani can take 5 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Trostani regains spent legendary actions at the start of its turn."
		}, {
			name: "Voice of Harmony",
			description: "Trostani makes one melee attack, with advantage on the attack roll."
		}, {
			name: "Voice of Life",
			description: "Trostani bestows 20 temporary hit points on another creature she can see within 120 feet of her."
		}, {
			name: "Voice of Order",
			description: "Trostani casts dispel magic."
		}, {
			name: "Chorus of the Conclave (Costs 2 Actions)",
			description: "Trostani casts suggestion. This counts as one of her daily uses of the spell."
		}, {
			name: "Awaken Grove Guardians (Costs 3 Actions)",
			description: "Trostani animates one or two trees she can see within 120 feet of her, causing them to uproot themselves and become awakened trees (see the Monster Manual for their stat blocks) for 1 minute or until Trostani uses a bonus action to end the effect. These trees understand Druidic and obey Trostani's spoken commands, but can't speak. If she issues no commands to them, the trees do nothing but follow her and take the Dodge action."
		}
		],
		description: "The Selesnya guildmaster is an amalgamation of three dryads in body, will, and soul. Each dryad's body extends from a central trunk, so while they possess independent minds, they share a single name-Trostani and a single life force. Usually Trostani communicates the will of the Worldsoul with one voice, but she retains three distinct personalities that embody the three parts of the Selesnyan ideal: order, life, and harmony. In the midst of increasing tensions on Ravnica, the three personalities have recently been at odds over how best to navigate the conclave through such difficult times.\n Trostani spends most of her time in the towering tree of Vitu-Ghazi, the Selesnya guildhall. There she communes with Mat'Selesnya and with the dryads who lead individual Selesnya communities across Ravnica.",
	},
	"Cackler": {
		name: "Cackler",
		source: ["Guildmasters' Guide to Ravnica", 195],
		size: "Small",
		type: "fiend (demon)",
		alignment: "Chaotic Evil",
		ac: [15, "Natural Armor", false],
		hp: 10,
		hd: [3, 6],
		scores: [9, 16, 11, 11, 7, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +3, Perception +0, Performance +3",
		passive_perception: "10",
		languages: "Abyssal, Common",
		challenge_rating: "1/2",
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Spiked Chain",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (10 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Last Laugh",
			description: "When the cackler dies, it releases a dying laugh that scars the minds of other nearby creatures. Each creature within 10 feet of the cackler must succeed on a DC 11 Wisdom saving throw or take 2 (1d4) psychic damage."
		}, {
			name: "Mimicry",
			description: "The cackler can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 11 Wisdom (Insight) check."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The cackler's innate spellcasting ability is Charisma (spell save DC 11, +3 to hit with spell attacks). The cackler can innately cast the following spells, requiring no material components:",
				"At will: fire bolt",
				"1/day: Tasha's hideous laughter"
			]
		}
		],
		description: "Cacklers are small, jabbering jesters that spice up Rakdos performances with their chaotic antics. Their incessant cackling can inspire uncontrollable laughter by making everything—even the most horrifying spectacles—seem hilarious. Some cacklers excel at vocal mimicry and perform as impressionists; others put their sadistic bent to use by lurking in shadows and terrifying passersby. Rakdos performers enjoy dressing cacklers in a variety of masks, hats, and costumes to lampoon public figures.\n Demonic \"Devils\"\n The creatures called \"devils\" in Ravnica are minor demons akin to quasits. While the larger demons embody evil qualities such as blood lust and torment, these lesser demons reflect the whimsical and chaotic side of Rakdos and his cult. Their mischievous antics cause disorder and destruction out of proportion to the demons' small size.\n Diabolic Demons\n Many of the demons of Ravnica are monstrous, winged creatures of human-like form. They are best represented by the statistics of the nalfeshnee, the shadow demon, or the vrock in the Monster Manual. Demons associated with the Cult of Rakdos often have fiery attacks that make them similar to barbed devils or horned devils, except that they are demons. (They are chaotic evil, they speak Abyssal and not Infernal, and they lack Devil's Sight.)",
	},
	"Master of Cruelties": {
		name: "Master of Cruelties",
		source: ["Guildmasters' Guide to Ravnica", 196],
		size: "Large",
		type: "fiend (demon)",
		alignment: "Chaotic Evil",
		ac: [18, "Plate Armor", false],
		hp: 127,
		hd: [15, 10],
		scores: [18, 17, 16, 19, 16, 21],
		saves: ["", "", "7", "8", "7", "9"],
		skills: "Deception +9, Intimidation +9, Performance +9, Persuasion +9",
		passive_perception: "13",
		languages: "Abyssal, Common, telepathy 120 ft",
		challenge_rating: "9",
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "poisoned",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 13 (3d8) psychic damage. Two-Handed: 13 (2d8+4) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "Plus 13 (3d8) psychic damage.",
		}
		],
		traits: [{
			name: "Aura of Blood Lust",
			description: "When any other creature starts its turn within 30 feet of the master, that creature must succeed on a DC 17 Wisdom saving throw, or it must immediately take the Attack action, making one melee attack against a random creature within reach. If no creatures are within reach, it makes a ranged attack against a random creature within range, throwing its weapon if necessary."
		}, {
			name: "Feed on the Crowd",
			description: "Whenever a creature within 60 feet of the master dies, the master gains 15 temporary hit points and has advantage on all attack rolls, ability checks, and saving throws until the end of its next turn."
		}, {
			name: "Magic Resistance",
			description: "The master has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The master's innate spellcasting ability is Charisma (spell save DC 17). The master can innately cast the following spells, requiring no material components:",
				"At will: charm person (as a 3rd-level spell), crown of madness",
				"1/day: dominate person"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The master makes two melee attacks with its spear."
		}, {
			name: "Captivating Presence (Recharge 6)",
			description: "Each creature within 120 feet of the master must succeed on a DC 17 Wisdom saving throw or be charmed by the master for 1 hour. While charmed in this way, a creature's speed is 0. If the charmed creature takes damage, it can repeat the saving throw, ending the effect on itself on a success. A target that succeeds on the saving throw is immune to the Captivating Presence of all masters of cruelties for the next 24 hours."
		}
		],
		description: "When a master of cruelties steps up as ringleader of a Rakdos show, the audience can be assured of a performance they will remember for the rest of their lives—however brief that might be.\n The mesmerizing presence of a master of cruelties draws every eye to the demon and commands an audience's full attention. With every act of depraved torment the demon performs, onlookers are drawn more and more into the blood lust. Audiences clamor for more violence, and those who get too caught up in the revelry feel compelled to partake in the indiscriminate killing.\n Demonic \"Devils.\"\n The creatures called \"devils\" in Ravnica are minor demons akin to quasits. While the larger demons embody evil qualities such as blood lust and torment, these lesser demons reflect the whimsical and chaotic side of Rakdos and his cult. Their mischievous antics cause disorder and destruction out of proportion to the demons' small size.\n Diabolic Demons\n Many of the demons of Ravnica are monstrous, winged creatures of human-like form. They are best represented by the statistics of the nalfeshnee, the shadow demon, or the vrock in the Monster Manual. Demons associated with the Cult of Rakdos often have fiery attacks that make them similar to barbed devils or horned devils, except that they are demons. (They are chaotic evil, they speak Abyssal and not Infernal, and they lack Devil's Sight.)",
	},
	"Rakdos": {
		name: "Rakdos",
		source: ["Guildmasters' Guide to Ravnica", 247],
		size: "Huge",
		type: "fiend (demon)",
		alignment: "Chaotic Evil",
		ac: [20, "Natural Armor", false],
		hp: 300,
		hd: [24, 12],
		scores: [26, 15, 22, 14, 18, 30],
		saves: ["15", "", "13", "", "11", "17"],
		skills: "Intimidation +17, Performance +17, Persuasion +17",
		passive_perception: "14",
		languages: "Abyssal, Common",
		challenge_rating: "24",
		damage_resistances: "necrotic; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "fire, poison",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Curtain-Call Scythe",
			ability: 1,
			damage: [3, 10, "slashing"],
			range: "Melee (10 ft)",
			description: "Plus 13 (3d8) fire damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (10 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Captivating Presence",
			description: "Any creature that starts its turn within 30 feet of Rakdos must make a DC 25 Wisdom saving throw. On a failed save, the creature becomes charmed by Rakdos for 1 minute or until the creature is farther than 30 feet away from him. On a successful save, the creature becomes immune to Rakdos's Captivating Presence for 24 hours."
		}, {
			name: "Cruel Entertainment",
			description: "When a creature Rakdos can see within 60 feet of him is reduced to 0 hit points, Rakdos gains 25 temporary hit points."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Rakdos fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Rakdos has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "Rakdos's weapon attacks are magical."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Rakdos's spellcasting ability is Charisma (spell save DC 25). He can innately cast hellish rebuke (at 5th level) at will, requiring no material components.",
				"At will: hellish rebuke"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Rakdos makes two attacks with his Curtain-Call Scythe or his claws."
		}
		],
		legendary_actions: [{
			description: "Rakdos can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Rakdos regains spent legendary actions at the start of its turn."
		}, {
			name: "Sadistic Revelry",
			description: "Each creature within 60 feet of Rakdos that is his ally or is charmed by him must use its reaction to move up to half its speed toward the creature closest to it that it can see, provided it isn't already within 5 feet of that creature. It then must make one melee attack against that creature if it is able to do so."
		}, {
			name: "Scythe (Costs 2 Actions)",
			description: "Rakdos uses Curtain-Call Scythe."
		}, {
			name: "Touch of Pain (Costs 3 Actions)",
			description: "Rakdos makes a claw attack against one creature within 10 feet of him. The target must succeed on a DC 25 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the creature can't maintain concentration on a spell or any other effect that requires concentration. The poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}
		],
		description: "Rakdos, the demon for whom his cult is named, embodies hedonism. He is also the consummate entertainer, whose mere appearance is an act of grisly performance art. A monstrous figure standing thirty feet tall, spreading enormous wings, crowned with fire and swinging a flaming scythe, Rakdos demands the spotlight. His every entrance is a showstopper.\n Sometimes after his grand entrance, Rakdos crouches to witness the performances of those who adore him. To them, his opinion is the only one that matters, but he is a demanding spectator. He has seen thousands of years of circus tricks and has no patience for performers who don't give their all. His flaming scythe has brought more than one tepid show to a sudden and spectacular close. Jaded as he is, Rakdos attends his cult's performances only rarely. He often retreats into his lair below the cult's guildhall for months or years at a time, but his followers know that he might emerge at any time to witness the latest spectacle.",
	},
	"Sire of Insanity": {
		name: "Sire of Insanity",
		source: ["Guildmasters' Guide to Ravnica", 197],
		size: "Huge",
		type: "fiend (demon)",
		alignment: "Chaotic Evil",
		ac: [17, "Natural Armor", false],
		hp: 157,
		hd: [15, 12],
		scores: [23, 6, 19, 14, 19, 22],
		saves: ["", "", "8", "6", "8", "10"],
		skills: "Deception +10, Intimidation +10",
		passive_perception: "14",
		languages: "Abyssal, Common, telepathy 120 ft",
		challenge_rating: "12",
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "poisoned",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 12, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 16 (3d10) psychic damage.",
		}, {
			name: "Claws",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (10 ft)",
			description: "Plus 9 (2d8) psychic damage.",
		}
		],
		traits: [{
			name: "Aura of Mind Erosion",
			description: "Any creature that starts its turn within 30 feet of the sire must make a DC 18 Wisdom saving throw. On a successful save, the creature is immune to this aura for the next 24 hours. On a failed save, the creature has disadvantage for 1 minute on Wisdom and Charisma checks and on Wisdom and Charisma saves. At the start of each of its turns, the sire can suppress this aura until the start of its next turn."
		}, {
			name: "Magic Resistance",
			description: "The sire has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The sire's innate spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). The sire can innately cast the following spells, requiring no material components:",
				"At will: clairvoyance, crown of madness, major image, suggestion",
				"1/day each: confusion, mass suggestion"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The sire makes two attacks: one with its bite and one with its claws."
		}
		],
		description: "Rakdos nightclubs, where visitors can indulge any dark desire and revel in sadistic spectacle, are the favored haunts of the demons known as sires of insanity. Lurking in an underground vault beneath a Rakdos operation, a sire of insanity feasts on the violence, torment, and depravity unfolding above. Occasionally, cultists bring would-be recruits to the demon's presence, and—true to its name—the sire of insanity breaks the new cultist's mind.\n A sire of insanity is a bloated demon resembling a bipedal lizard. It stands some thirty feet tall and weighs many thousands of pounds, so it tends to keep hidden away in its subterranean lair, working its evil from the shadows.\n Demonic \"Devils\"\n The creatures called \"devils\" in Ravnica are minor demons akin to quasits. While the larger demons embody evil qualities such as blood lust and torment, these lesser demons reflect the whimsical and chaotic side of Rakdos and his cult. Their mischievous antics cause disorder and destruction out of proportion to the demons' small size.\n Diabolic Demons\n Many of the demons of Ravnica are monstrous, winged creatures of human-like form. They are best represented by the statistics of the nalfeshnee, the shadow demon, or the vrock in the Monster Manual. Demons associated with the Cult of Rakdos often have fiery attacks that make them similar to barbed devils or horned devils, except that they are demons. (They are chaotic evil, they speak Abyssal and not Infernal, and they lack Devil's Sight.)",
	},
	"Bloodfray Giant": {
		name: "Bloodfray Giant",
		source: ["Guildmasters' Guide to Ravnica", 200],
		size: "Huge",
		type: "giant",
		alignment: "Chaotic Evil",
		ac: [14, "Natural Armor", false],
		hp: 103,
		hd: [9, 12],
		scores: [23, 9, 20, 7, 8, 9],
		saves: ["9", "", "8", "", "2", ""],
		skills: "Athletics +9, Perception +2",
		passive_perception: "12",
		languages: "Giant",
		challenge_rating: "6",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Chain",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "If the target is a creature, it is grappled (escape DC 17). Until the grapple ends, the target is restrained, and the giant can't use this attack on anyone else.",
		}, {
			name: "Rock",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			description: ""
		}
		],
		reactions: {
			name: "Furious Defense",
			description: "After a creature the giant can see is dealt damage by a foe within 20 feet of the giant, the giant makes a chain attack against that foe."
		},
		description: "Giants in the Cult of Rakdos act as enforcers, bouncers, and sometimes even pillars, holding the mobile platforms that serve as stages for Rakdos performances. Like other members of the cult, giants thrill to the violence of those shows. Though they can seem entranced by the horror unfolding on the stage, they react quickly and brutally to any interruption of the performance.\n Giants:\n Giants use their tremendous size and strength to advance the cause of no less than four guilds. In the Boros Legion and the Orzhov Syndicate, they are cunning soldiers. The giants of the Cult of Rakdos and the",
	},
	"Borborygmos": {
		name: "Borborygmos",
		source: ["Guildmasters' Guide to Ravnica", 238],
		size: "Huge",
		type: "giant",
		alignment: "Chaotic Neutral",
		ac: [14, "Natural Armor", false],
		hp: 270,
		hd: [20, 12],
		scores: [24, 11, 24, 8, 17, 16],
		saves: ["13", "", "13", "", "9", ""],
		skills: "Athletics +13, Insight +9, Survival +9",
		passive_perception: "13",
		languages: "Common, Giant",
		challenge_rating: "18",
		damage_resistances: "poison, psychic",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, frightened",
		senses: "tremorsense 60 ft",
		attacks: [{
			name: "Maul",
			ability: 1,
			damage: [6, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "If the target is a creature, it must succeed on a DC 21 Strength saving throw or be knocked prone.",
		}, {
			name: "Stomp",
			ability: 1,
			damage: [2, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (30/120 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If Borborygmos fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Poor Depth Perception",
			description: "Borborygmos has disadvantage on any attack roll against a target more than 30 feet away."
		}, {
			name: "Siege Monster",
			description: "Borborygmos deals double damage to objects and structures."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Borborygmos can use his Frightful Presence. He also makes two attacks: one with his maul and one with his stomp."
		}, {
			name: "Frightful Presence",
			description: "Each creature of Borborygmos's choice that is within 60 feet of him and can see or hear him must succeed on a DC 17 Wisdom saving throw or become frightened of him for 1 minute. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to Borborygmos's Frightful Presence for the next 24 hours."
		}
		],
		legendary_actions: [{
			description: "Borborygmos can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Borborygmos regains spent legendary actions at the start of its turn."
		}, {
			name: "Attack",
			description: "Borborygmos makes a weapon attack."
		}, {
			name: "Bellow (Costs 2 Actions)",
			description: "Borborygmos yells menacingly at one creature he can see within 60 feet of him. That creature must succeed on a DC 17 Wisdom saving throw or become frightened of him for 1 minute. If the creature is already frightened, it becomes stunned instead. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to Borborygmos's Bellow for the next 24 hours."
		}, {
			name: "Wide Berth (Costs 3 Actions)",
			description: "Borborygmos moves up to half his speed and can move through the space of any creature smaller than Huge. The first time Borborygmos enters a creature's space during this move, the creature must make a DC 21 Dexterity saving throw. If the saving throw succeeds, the creature is pushed 5 feet away from Borborygmos. If the saving throw fails, that creature is knocked prone, and Borborygmos can make a stomp attack against it."
		}
		],
		description: "Mightiest of the Mighty\n Borborygmos leads the Burning Tree clan, which is the largest and most diverse of the Gruul Clans. He is almost always accompanied by other members of his clan-not because he needs their protection, but because they might need his. His companions include creatures ranging from burly giants to cowering goblins.\n The Gruul follow strength, and Borborygmos holds his position only because he has proved stronger than any challenger.",
	},
	"Guardian Giant": {
		name: "Guardian Giant",
		source: ["Guildmasters' Guide to Ravnica", 201],
		size: "Huge",
		type: "giant",
		alignment: "Lawful Neutral",
		ac: [19, "Half Plate Armor", false],
		hp: 137,
		hd: [11, 12],
		scores: [24, 17, 22, 10, 18, 12],
		saves: ["", "6", "", "", "7", ""],
		skills: "Insight +7, Perception +10",
		passive_perception: "20",
		languages: "Common, Giant",
		challenge_rating: "8",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "Two-Handed: 20 (3d8+7) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Ranged (60/240 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Vigilant",
			description: "The giant can't be surprised."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The giant makes three spear attacks."
		}
		],
		reactions: {
			name: "Protection",
			description: "When an attacker the giant can see makes an attack roll against a creature within 10 feet of the giant, the giant can impose disadvantage on the attack roll."
		},
		description: "Most of the giants in the Boros Legion come from a single clan, the Skorskal, that has long been at odds with the Gruul Clans. These giants are guards and gatekeepers, well represented in the Sunhome Guard, as well as powerful muscle supporting Boros missions.\n Giants of the Skorskal clan are often assigned to protect Boros garrisons and forts throughout Ravnica. They are excellent sentinels, keen-eyed and vigilant, and serve as living walls to protect smaller soldiers fighting alongside them. Skorskal giants look much like enormous humans with huge muscles and comparatively small heads.\n Giants:\n Giants use their tremendous size and strength to advance the cause of no less than four guilds. In the Boros Legion and the Orzhov Syndicate, they are cunning soldiers. The giants of the Cult of Rakdos and the Gruul Clans are no less effective but lack discipline.",
	},
	"Nivix Cyclops": {
		name: "Nivix Cyclops",
		source: ["Guildmasters' Guide to Ravnica", 216],
		size: "Large",
		type: "giant",
		alignment: "Unaligned",
		ac: [14, "Half Plate Armor", false],
		hp: 115,
		hd: [10, 10],
		scores: [24, 9, 22, 7, 10, 9],
		saves: ["", "", "9", "", "3", ""],
		skills: "",
		passive_perception: "10",
		languages: "Common, Giant",
		challenge_rating: "8",
		damage_resistances: "",
		damage_immunities: "poison, psychic",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 10, "bludgeoning"],
			range: "Melee (10 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The cyclops has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The cyclops makes two slam attacks."
		}
		],
		reactions: {
			name: "Spell Vitalization",
			description: "Immediately after a creature casts a spell of 1st level or higher within 120 feet of the cyclops, the cyclops can move up to twice its speed without provoking opportunity attacks. It can then make one slam attack against a target of its choice."
		},
		description: "Cyclopes like those described in the Monster Manual are found primarily among the Gruul Clans. They are forces of nature, and even though they have occasionally been recruited into the Boros Legion, they can never truly be tamed.\n Cyclopes serve the Izzet league as workshop guardians, personal protectors, and heavy laborers. They wear mizzium armor plating to minimize injuries from laboratory mishaps, piston gauntlets to increase their strength for lifting and punching, and telescopic helmets to minimize the shortcomings of their monocular vision. They are sometimes called monoclons or Nivix cyclopes, after the name of the Izzet guildhall.",
	},
	"Orzhov Giant": {
		name: "Orzhov Giant",
		source: ["Guildmasters' Guide to Ravnica", 202],
		size: "Large",
		type: "giant",
		alignment: "Lawful Evil",
		ac: [18, "Plate Armor", false],
		hp: 84,
		hd: [8, 10],
		scores: [23, 13, 21, 12, 13, 8],
		saves: ["", "4", "8", "", "4", ""],
		skills: "",
		passive_perception: "11",
		languages: "Common, Giant",
		challenge_rating: "6",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Greataxe",
			ability: 1,
			damage: [3, 12, "slashing"],
			range: "Melee (10 ft)",
			description: "If the Orzhov giant scores a critical hit, it rolls the damage dice three times, instead of twice.",
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Focus",
			description: "As a bonus action, the giant can target a creature it can see within 30 feet of it and make that creature its focus. The target remains the giant's focus for 1 minute, or until either the target or the giant drops to 0 hit points. When the giant makes an attack roll against its focus, it adds a d4 to its attack roll. If the giant attacks a different target while it has a focus, it subtracts a d4 from its attack roll."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The giant makes two greataxe attacks."
		}
		],
		description: "A few giants join the ranks of the Orzhov Syndicate and serve as guards, executioners, and thugs-the muscle of the guild. The presence of Orzhov giants in markets and streets serves as an effective reminder for business owners to keep their payments up to date.\n Giants:\n Giants use their tremendous size and strength to advance the cause of no less than four guilds. In the Boros Legion and the Orzhov Syndicate, they are cunning soldiers. The giants of the Cult of Rakdos and the Gruul Clans are no less effective but lack discipline.",
	},
	"Sunder Shaman": {
		name: "Sunder Shaman",
		source: ["Guildmasters' Guide to Ravnica", 202],
		size: "Huge",
		type: "giant",
		alignment: "Chaotic Neutral",
		ac: [20, "Stone Armor", false],
		hp: 138,
		hd: [12, 12],
		scores: [23, 15, 21, 10, 12, 9],
		saves: ["", "6", "9", "", "5", ""],
		skills: "Athletics +10, Perception +5",
		passive_perception: "15",
		languages: "Giant",
		challenge_rating: "10",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [4, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: ""
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			description: "If the target is a creature, it must succeed on a DC 18 Strength saving throw or be knocked prone.",
		}
		],
		traits: [{
			name: "Reckless",
			description: "At the start of its turn, the giant can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
		}, {
			name: "Siege Monster",
			description: "The giant deals double damage to objects and structures."
		}, {
			name: "Stone Camouflage",
			description: "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The giant makes two slam attacks. The first of those attacks that hits deals an extra 18 (4d8) damage if the giant has taken damage since its last turn."
		}
		],
		description: "Gruul sunder shamans are angry giants that channel their rage into brutal attacks that deal overwhelming damage to foes and structures alike.\n These shamans sometimes lead hill giants and stone giants that also live among the Gruul Clans. They are occasionally joined by cyclopes, ettins, fomorians, and ogres. Like the rest of the Gruul, they hate the urban development that encroaches on the wilds where they once lived-not least because they have so much difficulty fitting inside the small structures. They delight in destroying such edifices, and in the heat of their rage, they walk through buildings, trample people underfoot, and generally cause as much chaos as possible. They often armor themselves with pieces of buildings and wield columns or other architectural elements as clubs.\n Giants:\n Giants use their tremendous size and strength to advance the cause of no less than four guilds. In the Boros Legion and the Orzhov Syndicate, they are cunning soldiers. The giants of the Cult of Rakdos and the Gruul Clans are no less effective but lack discipline.",
	},
	"Hybrid Brute": {
		name: "Hybrid Brute",
		source: ["Guildmasters' Guide to Ravnica", 217],
		size: "Medium",
		type: "humanoid (Simic hybrid)",
		alignment: "Neutral Good",
		ac: [18, "Natural Armor", false],
		hp: 52,
		hd: [8, 8],
		scores: [18, 11, 15, 8, 11, 9],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "10",
		languages: "Common plus any one language",
		challenge_rating: "2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The hybrid can breathe air and water."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hybrid makes two claw attacks."
		}
		],
		description: "Simic Hybrids:\n The Guardian Project is a consequence of increasing tension within the Simic Combine as the threat of interguild conflict looms. Believing that the Simic must be prepared to fight for their lives when that conflict comes to a head, biomancers have created soldiers to help defend the guild. These hybrids (also called guardians, after the name of the project) are created from human, vedalken, and elf guild members who volunteer to be transformed.",
	},
	"Hybrid Flier": {
		name: "Hybrid Flier",
		source: ["Guildmasters' Guide to Ravnica", 217],
		size: "Medium",
		type: "humanoid (Simic hybrid)",
		alignment: "Neutral Good",
		ac: [13, "", false],
		hp: 39,
		hd: [6, 8],
		scores: [12, 16, 14, 11, 10, 11],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "10",
		languages: "Common plus any one language",
		challenge_rating: "2",
		damage_resistances: "acid",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Javelin (Melee)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Javelin (Ranged)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: ""
		}, {
			name: "Spit Acid",
			ability: 2,
			damage: [4, 4, "acid"],
			range: "Ranged (20/60 ft)",
			modifiers: ["", "", false], // bonuses to: [to hit, to damage, add ability to damage];
			description: ""
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hybrid makes two javelin attacks. It can replace one javelin attack with Spit Acid."
		}
		],
		description: "Simic Hybrids:\n The Guardian Project is a consequence of increasing tension within the Simic Combine as the threat of interguild conflict looms. Believing that the Simic must be prepared to fight for their lives when that conflict comes to a head, biomancers have created soldiers to help defend the guild. These hybrids (also called guardians, after the name of the project) are created from human, vedalken, and elf guild members who volunteer to be transformed.",
	},
	"Hybrid Poisoner": {
		name: "Hybrid Poisoner",
		source: ["Guildmasters' Guide to Ravnica", 217],
		size: "Medium",
		type: "humanoid (Simic hybrid)",
		alignment: "Neutral Good",
		ac: [14, "", false],
		hp: 26,
		hd: [4, 8],
		scores: [12, 19, 14, 12, 13, 12],
		saves: ["", "6", "4", "", "", ""],
		skills: "Athletics +3, Perception +3, Stealth +6",
		passive_perception: "13",
		languages: "Common plus any one language",
		challenge_rating: "1",
		damage_resistances: "",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "poisoned",
		senses: "darkvision 30 ft",
		attacks: [{
			name: "Toxic Touch",
			ability: 2,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			modifiers: [, "", false], // bonuses to: [to hit, to damage, add ability to damage];
			description: "Target must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute. At the end of each of the poisoned target's turns, it must repeat the save, taking 3 (1d6) poison damage on a failed save, or ending the effect on itself on a successful one.",
		}
		],
		traits: [{
			name: "Assassinate",
			description: "During its first turn, the hybrid poisoner has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the hybrid scores against a surprised creature is a critical hit."
		}, {
			name: "Poisonous Skin",
			description: "Any creature that touches the hybrid or hits it with a melee attack while within 5 feet of it takes 3 (1d6) poison damage."
		}
		],
		description: "Simic Hybrids:\n The Guardian Project is a consequence of increasing tension within the Simic Combine as the threat of interguild conflict looms. Believing that the Simic must be prepared to fight for their lives when that conflict comes to a head, biomancers have created soldiers to help defend the guild. These hybrids (also called guardians, after the name of the project) are created from human, vedalken, and elf guild members who volunteer to be transformed.",
	},
	"Hybrid Shocker": {
		name: "Hybrid Shocker",
		source: ["Guildmasters' Guide to Ravnica", 218],
		size: "Medium",
		type: "humanoid (Simic hybrid)",
		alignment: "Neutral Good",
		ac: [12, "", false],
		hp: 39,
		hd: [6, 8],
		scores: [13, 14, 14, 10, 12, 9],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "11",
		languages: "Common plus any one language",
		challenge_rating: "1",
		damage_resistances: "",
		damage_immunities: "lightning",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Shocking Touch",
			ability: 2,
			damage: [2, 8, "lightning"],
			range: "Melee (5 ft)",
			modifiers: [, "", false], // bonuses to: [to hit, to damage, add ability to damage];
			description: ""
		}, {
			name: "Tentacles",
			ability: 2,
			damage: [0, 0, ""],
			range: "Melee (15 ft)",
			description: "Target is grappled (escape DC 11), and the hybrid pulls the target up to 15 feet straight toward it. Until this grapple ends, the target takes 5 (1d10) lightning damage at the start of each of its turns, and the hybrid shocker can't use its tentacles on another creature.",
		}
		],
		traits: [{
			name: "Electrified Body",
			description: "Any creature that touches the hybrid or hits it with a melee attack while within 5 feet of it takes 5 (1d10) lightning damage."
		}, {
			name: "Illumination",
			description: "The hybrid sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hybrid makes two attacks: one with its shocking touch and one with its tentacles."
		}
		],
		description: "Simic Hybrids:\n The Guardian Project is a consequence of increasing tension within the Simic Combine as the threat of interguild conflict looms. Believing that the Simic must be prepared to fight for their lives when that conflict comes to a head, biomancers have created soldiers to help defend the guild. These hybrids (also called guardians, after the name of the project) are created from human, vedalken, and elf guild members who volunteer to be transformed.",
	},
	"Hybrid Spy": {
		name: "Hybrid Spy",
		source: ["Guildmasters' Guide to Ravnica", 218],
		size: "Medium",
		type: "humanoid (Simic hybrid)",
		alignment: "Neutral Good",
		ac: [13, "", false],
		hp: 22,
		hd: [4, 8],
		scores: [11, 17, 12, 13, 14, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +5",
		passive_perception: "14",
		languages: "Common plus any one language",
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
			description: ""
		}
		],
		traits: [{
			name: "Chameleon Skin",
			description: "The hybrid has advantage on Dexterity (Stealth) checks made to hide."
		}, {
			name: "Spider Climb",
			description: "The hybrid can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hybrid makes two shortsword attacks."
		}
		],
		description: "Simic Hybrids:\n The Guardian Project is a consequence of increasing tension within the Simic Combine as the threat of interguild conflict looms. Believing that the Simic must be prepared to fight for their lives when that conflict comes to a head, biomancers have created soldiers to help defend the guild. These hybrids (also called guardians, after the name of the project) are created from human, vedalken, and elf guild members who volunteer to be transformed.",
	},
	"Biomancer": {
		name: "Biomancer",
		source: ["Guildmasters' Guide to Ravnica", 256],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Neutral Good",
		ac: [17, "Splint Armor", false],
		hp: 110,
		hd: [17, 8],
		scores: [10, 15, 14, 20, 14, 15],
		saves: ["", "", "", "9", "6", ""],
		skills: "Arcana +9, Nature +9",
		passive_perception: "12",
		languages: "Common plus any one language",
		challenge_rating: "10",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			modifiers: [-1, -1, ""], // bonuses to: [to hit, to damage, add ability to damage];
			description: ""
		}
		],
		traits: [{
			name: "Bolstering Presence",
			description: "The biomancer magically emanates life-giving energy within 30 feet of itself. Any ally of the biomancer that starts its turn there regains 5 (1d10) hit points."
		}, {
			name: "Magic Resistance",
			description: "The biomancer has advantage on saving throws against spells and other magical effects."
		}
		],
		spells: [
			"The biomancer is a 16th-level Simic spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The biomancer has the following wizard spells prepared:",
			"Cantrips (at will): acid splash, light, mending, poison spray, shocking grasp",
			"1st level (4 slots): detect magic, grease, shield",
			"2nd level (3 slots): alter self, darkvision, enlarge/reduce, hold person",
			"3rd level (3 slots): counterspell, dispel magic, haste, protection from energy",
			"4th level (3 slots): confusion, conjure minor elementals, polymorph",
			"5th level (2 slots): cone of cold, creation, hold monster",
			"6th level (1 slots): move earth, wall of ice",
			"7th level (1 slots): prismatic spray",
			"8th level (1 slots): control weather"
		],

		slots: "4, 3, 3, 3, 2, 1, 1, 1",
		description: "Nearly all the innovation and advancement in Simic bioengineering comes from the work of biomancers. Specialists in hybridizing and altering creatures through a mixture of science and magic, they have spawned countless hybrids and krasis in search of the perfect union between nature and civilization.",
	},
	"Blood Witch": {
		name: "Blood Witch",
		source: ["Guildmasters' Guide to Ravnica", 248],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Chaotic Evil",
		ac: [12, "15 with mage armor", false],
		hp: 78,
		hd: [12, 8],
		scores: [16, 14, 15, 13, 9, 19],
		saves: ["", "", "", "", "2", "7"],
		skills: "Arcana +4, Intimidation +7, Perception +2, Stealth +5",
		passive_perception: "12",
		languages: "Abyssal plus any one language (usually Common)",
		challenge_rating: "7",
		damage_resistances: "psychic",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Shortsword",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Blood Witch Dance",
			description: "The witch can use a bonus action to control the movement of one creature cursed by its hex spell that it can see within 30 feet of it. The creature must succeed on a DC 15 Charisma saving throw or use its reaction to move up to 30 feet in a direction of the witch's choice."
		}, {
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the witch's darkvision."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The witch's innate spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). The witch can innately cast the following spells, requiring no material components:",
				"At will: alter self, detect magic, eldritch blast (at 11th level), false life, levitate (self only), mage armor (self only)",
				"1/day each: circle of death, enthrall, suggestion",
				"3/day each: hellish rebuke, hex, scorching ray (at 3rd level)"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The witch makes two attacks: one with its longsword and one with its shortsword."
		}
		],
		description: "Blood witches imagine themselves to be the intermediaries between Rakdos and his cult-the pinnacle of his priesthood, his trusted advisors, and the messengers who communicate his will to the scattered troupes and ringmasters. The Cult of Rakdos recognizes no authority but Rakdos, and the demon lord requires no advisors. Nonetheless, the blood witches are smart, charismatic, and powerful, so their voices do carry some weight.\n Blood witches strive both to protect the cult from external interference and to punish those who bring harm to the guild. They claim grandiose titles, such as Tormentor of the Wojek, as a way of mocking their intended victims.",
	},
	"Cosmotronic Blastseeker": {
		name: "Cosmotronic Blastseeker",
		source: ["Guildmasters' Guide to Ravnica", 242],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Chaotic Neutral",
		ac: [15, "Chain Shirt", false],
		hp: 37,
		hd: [5, 8],
		scores: [14, 15, 16, 18, 9, 12],
		saves: ["", "4", "5", "", "", ""],
		skills: "Arcana +6, Intimidation +3, Perception +1",
		passive_perception: "11",
		languages: "any one language (usually Common)",
		challenge_rating: "4",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Warhammer",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 7 (1d10+2) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Empowered Spell (3/Day)",
			description: "When the blastseeker rolls damage for a spell, it can reroll up to four dice of damage. It must use the new dice."
		}, {
			name: "Tides of Chaos (1/Day)",
			description: "The blastseeker makes one attack roll, ability check, or saving throw with advantage."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The blastseeker's innate spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The blastseeker can innately cast the following spells, requiring no components other than its Izzet gear, which doesn't function for others:",
				"2/day: fireball",
				"3/day each: scorching ray, shield, thunderwave"
			]
		}
		],
		description: "While chemisters focus on inventing new tools, weapons, and other devices for the guild to use, the role of a blastseeker is to put those devices to work. Despite the name, not all such devices produce explosions, but all the most interesting ones (from the Izzet perspective) do.",
	},
	"Counterflux Blastseeker": {
		name: "Counterflux Blastseeker",
		source: ["Guildmasters' Guide to Ravnica", 242],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Chaotic Neutral",
		ac: [13, "16 with mage armor", false],
		hp: 39,
		hd: [6, 8],
		scores: [13, 16, 15, 18, 11, 14],
		saves: ["", "", "4", "", "2", ""],
		skills: "Arcana +6, Perception +2",
		passive_perception: "12",
		languages: "Common plus any one language",
		challenge_rating: "2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Rapier",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Counterflux Overcast (Recharge 5-6)",
			description: "The blastseeker can create an additional effect immediately after casting a spell. Roll a d6 to determine the effect: 1-3. The blastseeker creates a 15-foot-radius invisible sphere centered on itself that lasts until the end of its next turn. Creatures in the sphere have disadvantage on saving throws against spells and other magical effects. 4-6. The blastseeker creates a 15-foot-radius invisible sphere centered on itself that lasts until the end of its next turn. Creatures in the sphere have advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The blastseeker's innate spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The blastseeker can innately cast the following spells, requiring no components other than its Izzet gear, which doesn't function for others:",
				"3/day each: enlarge/reduce, mage armor (self only), scorching ray",
				"1/day each: counterspell, dispel magic, protection from energy"
			]
		}
		],
		description: "While chemisters focus on inventing new tools, weapons, and other devices for the guild to use, the role of a blastseeker is to put those devices to work. Despite the name, not all such devices produce explosions, but all the most interesting ones (from the Izzet perspective) do.",
	},
	"Druid of the Old Ways": {
		name: "Druid of the Old Ways",
		source: ["Guildmasters' Guide to Ravnica", 239],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Chaotic Neutral",
		ac: [14, "Hide Armor", false],
		hp: 90,
		hd: [12, 8],
		scores: [11, 15, 16, 10, 20, 14],
		saves: ["", "5", "6", "", "8", ""],
		skills: "Nature +3, Perception +8, Survival +8",
		passive_perception: "18",
		languages: "Common, Druidic",
		challenge_rating: "7",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 4 (1d8) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Siege Monster",
			description: "The druid deals double damage to objects and structures."
		}, {
			name: "Speak with Beasts and Plants",
			description: "The druid can communicate with beasts and plants as if they shared a language."
		}, {
			name: "Spellcasting",
			description: [
				"The druid is a 12th-level Gruul spellcaster. Its spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks). It has the following druid spells prepared:",
				"Cantrips (at will): druidcraft, produce flame, resistance, thorn whip",
				"1st level (4 slots): cure wounds, faerie fire, thunderwave",
				"2nd level (3 slots): beast sense, flame blade, pass without trace",
				"3rd level (3 slots): conjure animals, dispel magic, plant growth",
				"4th level (3 slots): dominate beast, freedom of movement, wall of fire",
				"5th level (2 slots): commune with nature, conjure elemental, scrying",
				"6th level (1 slots): transport via plants, wall of thorns"
			]
		}
		],
		slots: "4, 3, 3, 3, 2, 1",
		description: "The End-Raze\n The druids of the Old Ways believe that civilization will never be eradicated by scattered raids and petty skirmishes. They cling to the idea of a coming apocalypse, the End-Raze, when Ilharg's hoofs will trample every brick and stone of Ravnica's soaring skylines to rubble. The world will return to a state of nature in which the lawless code of muscle and savagery will reign once again.",
	},
	"Firefist": {
		name: "Firefist",
		source: ["Guildmasters' Guide to Ravnica", 231],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Lawful Good",
		ac: [18, "Plate Armor", false],
		hp: 117,
		hd: [18, 8],
		scores: [16, 10, 14, 11, 17, 13],
		saves: ["", "", "5", "", "6", ""],
		skills: "Intimidation +4, Religion +3",
		passive_perception: "13",
		languages: "any one language (usually Common)",
		challenge_rating: "7",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The firefist makes two greatsword attacks."
		}
		],
		reactions: {
			name: "Guided Attack (Recharges after a Short or Long Rest)",
			description: "When the firefist or one creature it can see within 30 feet of it makes an attack roll, the firefist grants a +10 bonus to that roll."
		},
		spells: [
			"The firefist is a 9th-level Boros spellcaster. Its spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). It has the following cleric spells prepared:",
			"Cantrips (at will): fire bolt, light, sacred flame, spare the dying",
			"1st level (4 slots): guiding bolt, healing word, heroism, shield of faith",
			"2nd level (3 slots): lesser restoration, scorching ray",
			"3rd level (3 slots): blinding smite, crusader's mantle, revivify",
			"4th level (3 slots): banishment, wall of fire",
			"5th level (1 slots): flame strike"
		],

		slots: "4, 3, 3, 3, 1",
		description: "Boros firefists combine potent magic with peerless fighting ability, inspiring all who serve alongside them. They often act as the point of contact between the Boros Legion and the angelic leaders.",
	},
	"Flux Blastseeker": {
		name: "Flux Blastseeker",
		source: ["Guildmasters' Guide to Ravnica", 242],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Chaotic Neutral",
		ac: [12, "15 with mage armor", false],
		hp: 55,
		hd: [10, 8],
		scores: [10, 15, 12, 20, 9, 14],
		saves: ["", "5", "", "8", "", ""],
		skills: "Arcana +8, Perception +2",
		passive_perception: "12",
		languages: "Common plus any one language",
		challenge_rating: "5",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 4 (1d8) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Fluxbending Overcast (Recharge 5-6)",
			description: "The blastseeker can create an additional effect immediately after casting a spell. Roll a d6 to determine the effect: 1-3. The blastseeker teleports, swapping places with a creature it can see within 30 feet of it. 4-6. The blastseeker and each creature within 10 feet of it must succeed on a DC 16 Constitution saving throw or take 11 (2d10) thunder damage."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The blastseeker's innate spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). The blastseeker can innately cast the following spells, requiring no components other than its Izzet gear, which doesn't function for others:",
				"3/day each: mage armor (self only), scorching ray",
				"1/day each: banishment, cone of cold, dimension door, fireball, ice storm"
			]
		}
		],
		description: "While chemisters focus on inventing new tools, weapons, and other devices for the guild to use, the role of a blastseeker is to put those devices to work. Despite the name, not all such devices produce explosions, but all the most interesting ones (from the Izzet perspective) do.",
	},
	"Frontline Medic": {
		name: "Frontline Medic",
		source: ["Guildmasters' Guide to Ravnica", 231],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Lawful Good",
		ac: [20, "Plate Armor", false],
		hp: 19,
		hd: [3, 8],
		scores: [15, 10, 14, 10, 13, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Medicine +5, Perception +3",
		passive_perception: "13",
		languages: "any one language (usually Common)",
		challenge_rating: "1/4",
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
			description: "Two-Handed: 6 (1d8+2) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		spells: [
			"The medic is a 3rd-level Boros spellcaster. Its spellcasting ability is Wisdom (spell save DC 11). The medic has the following cleric spells prepared:",
			"Cantrips (at will): mending, resistance, spare the dying",
			"1st level (4 slots): cure wounds, sanctuary",
			"2nd level (2 slots): aid, lesser restoration"
		],
		slots: "4, 2",
		description: "The soldiers of the Boros Legion depend on skilled healers to keep them on their feet. Frontline medics use a mix of magical healing and mundane medicine to keep their compatriots alive.",
	},
	"Galvanic Blastseeker": {
		name: "Galvanic Blastseeker",
		source: ["Guildmasters' Guide to Ravnica", 243],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Chaotic Neutral",
		ac: [13, "", false],
		hp: 52,
		hd: [8, 8],
		scores: [10, 17, 14, 19, 10, 13],
		saves: ["", "6", "", "", "", ""],
		skills: "Acrobatics +6, Arcana +7, Perception +3",
		passive_perception: "13",
		languages: "Common and Primordial, plus any one language",
		challenge_rating: "5",
		damage_resistances: "lightning, thunder",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 4 (1d8) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Galvanic Overcast (Recharge 5-6)",
			description: "When the blastseeker casts lightning bolt or thunderwave, it can roll a die. On an odd number, the blastseeker takes 9 (2d8) force damage. On an even number, the spell also deals 9 (2d8) lightning damage to each target that fails its saving throw."
		}, {
			name: "Heart of the Storm",
			description: "When the blastseeker casts lightning bolt or thunderwave, all other creatures within 10 feet of the blastseeker each take 3 lightning damage."
		}, {
			name: "Gust-Propelled Leap",
			description: "The blastseeker can use a bonus action to fly up to 10 feet without provoking opportunity attacks."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The blastseeker's innate spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). The blastseeker can innately cast the following spells, requiring no components other than its Izzet gear, which doesn't function for others:",
				"1/day: stoneskin",
				"3/day each: levitate, lightning bolt, thunderwave"
			]
		}
		],
		description: "While chemisters focus on inventing new tools, weapons, and other devices for the guild to use, the role of a blastseeker is to put those devices to work. Despite the name, not all such devices produce explosions, but all the most interesting ones (from the Izzet perspective) do.",
	},
	"Horncaller": {
		name: "Horncaller",
		source: ["Guildmasters' Guide to Ravnica", 253],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Lawful Good",
		ac: [13, "Hide Armor", false],
		hp: 39,
		hd: [6, 8],
		scores: [13, 12, 14, 10, 14, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Animal handling +4, Nature +2, Perception +4",
		passive_perception: "14",
		languages: "Common plus any one language",
		challenge_rating: "1",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Staff",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 5 (1d8+1) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Speak with Beasts",
			description: "The horncaller can communicate with beasts as if they shared a language."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The horncaller's innate spellcasting ability is Wisdom (spell save DC 14). The horncaller can innately cast the following spells, requiring no material components:",
				"1/day each: bless, conjure animals"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The horncaller makes two melee attacks with its staff and uses One with the Worldsoul."
		}, {
			name: "One with the Worldsoul",
			description: "The horncaller chooses one beast it can see within 30 feet of it. If the beast can hear the horncaller, the beast uses its reaction to make one melee attack against a target that the horncaller can see."
		}
		],
		description: "Specialized shamans called horncallers use their magic to call wild beasts to fight alongside Selesnya troops. In quieter times, they tend the animals associated with Selesnya enclaves and parks.",
	},
	"Lawmage": {
		name: "Lawmage",
		source: ["Guildmasters' Guide to Ravnica", 228],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Lawful Neutral",
		ac: [15, "Breastplate", false],
		hp: 84,
		hd: [13, 8],
		scores: [13, 12, 14, 17, 14, 13],
		saves: ["", "", "", "6", "5", ""],
		skills: "Arcana +6, Perception +5, Persuasion +4",
		passive_perception: "15",
		languages: "Common plus any one language",
		challenge_rating: "6",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 5 (1d8+1) bludgeoning damage.",
		}
		],
		spells: [
			"The lawmage is an 8th-level Azorius spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The lawmage has the following wizard spells prepared:",
			"Cantrips (at will): fire bolt, friends, light, message",
			"1st level (4 slots): alarm, expeditious retreat, shield",
			"2nd level (3 slots): arcane lock, detect thoughts, hold person",
			"3rd level (3 slots): clairvoyance, dispel magic, slow",
			"4th level (2 slots): locate creature, stoneskin"
		],
		slots: "4, 3, 3, 2",
		description: "The Azorius Senate has spellcasters who are trained to capture lawbreakers and bring them to justice. A lawmage's magic is focused on restraining criminals and on protecting bystanders from becoming casualties when arresters are pursuing malefactors. A significant proportion of the guild's vedalken are lawmages.",
	},
	"Mind Mage": {
		name: "Mind Mage",
		source: ["Guildmasters' Guide to Ravnica", 233],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Lawful Evil",
		ac: [12, "15 with mage armor", false],
		hp: 49,
		hd: [11, 8],
		scores: [10, 14, 10, 20, 15, 16],
		saves: ["", "", "", "8", "5", ""],
		skills: "Arcana +8, Deception +6, Insight +5, Persuasion +6",
		passive_perception: "12",
		languages: "Common plus any four languages",
		challenge_rating: "5",
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
			description: ""
		}, {
			name: "Dagger (Ranged)",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Special Equipment",
			description: "The mage wears a Spies' Murmur (see chapter 5)."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The mage's spellcasting ability is Intelligence (spell save DC 16). It can innately cast the following spells, requiring no components:",
				"At will: encode thoughts (see chapter 2), friends",
				"3/day each: charm person, detect thoughts, mage armor, sleep, suggestion",
				"1/day each: dominate person, mass suggestion, modify memory"
			]
		}
		],
		description: "Dimir mind mages are among the most feared spellcasters in Ravnica, thanks in large part to the aura of mystery that shrouds them and their work. Their ability to read and alter memories commands respect from the other members of House Dimir and makes them useful in the full spectrum of the guild's activities. Many mind mages lead cells of their own.",
	},
	"Precognitive Mage": {
		name: "Precognitive Mage",
		source: ["Guildmasters' Guide to Ravnica", 228],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Lawful Neutral",
		ac: [11, "14 with mage armor", false],
		hp: 63,
		hd: [14, 8],
		scores: [9, 13, 10, 18, 13, 11],
		saves: ["", "", "", "6", "3", ""],
		skills: "Perception +3",
		passive_perception: "13",
		languages: "Common plus any one language",
		challenge_rating: "3",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 3 (1d8-1) bludgeoning damage.",
		}
		],
		actions: [{
			name: "Glimpse the Temporal Flood (Recharge 5-6)",
			description: "The mage targets one creature within 120 feet of it that it can see. The target takes 18 (4d8) psychic damage, and it must succeed on a DC 14 Intelligence saving throw or be stunned until the end of its next turn."
		}
		],
		reactions: {
			name: "Precognitive Insight (3/Day)",
			description: "When the mage or a creature it can see makes an attack roll, a saving throw, or an ability check, the mage can cause the roll to be made with advantage or disadvantage."
		},
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The mage's innate spellcasting ability is Intelligence (spell save DC 14). It can cast the following spells, requiring no material components:",
				"3/day: detect thoughts, mage armor",
				"1/day each: clairvoyance, locate object"
			]
		}
		],
		description: "Precognitive mages, a rarity among Azorius spellcasters, are capable of capturing glimpses of the future. They are typically employed to anticipate the actions of wanted criminals, thus aiding in their capture.",
	},
	"Rakdos Lampooner": {
		name: "Rakdos Lampooner",
		source: ["Guildmasters' Guide to Ravnica", 248],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Chaotic Evil",
		ac: [12, "Leather Armor", false],
		hp: 27,
		hd: [5, 8],
		scores: [11, 12, 13, 12, 9, 18],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +6, Performance +6",
		passive_perception: "9",
		languages: "Common plus any one language",
		challenge_rating: "2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Club",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		spells: [
			"The lampooner is a 4th-level Rakdos spellcaster. Its spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). It knows the following bard spells:",
			"Cantrips (at will): dancing lights, minor illusion, vicious mockery",
			"1st level (4 slots): bane, dissonant whispers, silent image, Tasha's hideous laughter, thunderwave",
			"2nd level (3 slots): crown of madness, enthrall, suggestion"
		],
		slots: "4, 3",
		description: "One of the most effective weapons in the Rakdos cult's arsenal is satire, and a Rakdos lampooner is a virtuoso of that art. Lampooners generally reserve their mockery for people and guilds that have seized an outsized measure of power, those who need to be taken down a peg, rather than piling further humiliation onto those who are already struggling. They use masks, marionettes, or effigies to caricature public figures, or sometimes play pranks on those individuals directly in the streets.",
	},
	"Rakdos Performer, Blade Juggler": {
		name: "Rakdos Performer, Blade Juggler",
		source: ["Guildmasters' Guide to Ravnica", 249],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Chaotic Evil",
		ac: [13, "", false],
		hp: 22,
		hd: [4, 8],
		scores: [13, 17, 12, 10, 8, 15],
		saves: ["", "5", "", "", "", "4"],
		skills: "Acrobatics +7, Performance +4",
		passive_perception: "9",
		languages: "any one language (usually Common)",
		challenge_rating: "1",
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
			description: ""
		}, {
			name: "Dagger (Ranged)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Nimble",
			description: "The performer can take the Disengage action as a bonus action on each of its turns."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The juggler makes three dagger attacks."
		}
		],
		description: "By offering a place for those of many different talents, the Cult of Rakdos has seen its numbers swell with performing artists, including blade jugglers, fire eaters, and high wire acrobats. Performers carry the message of Rakdos out into the streets: cut loose, free yourself from the bonds of society's mores and expectations, and indulge your desires.",
	},
	"Rakdos Performer, Fire Eater": {
		name: "Rakdos Performer, Fire Eater",
		source: ["Guildmasters' Guide to Ravnica", 249],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Chaotic Evil",
		ac: [13, "", false],
		hp: 22,
		hd: [4, 8],
		scores: [13, 17, 12, 10, 8, 15],
		saves: ["", "5", "", "", "", "4"],
		skills: "Acrobatics +7, Performance +4",
		passive_perception: "9",
		languages: "any one language (usually Common)",
		challenge_rating: "1",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Bladed Chain",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (10 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Nimble",
			description: "The performer can take the Disengage action as a bonus action on each of its turns."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The fire eater makes two attacks with its bladed chain."
		}, {
			name: "Spew Flame (Recharge 4-6)",
			description: "The fire eater exhales flames. Each creature in a 15-foot cone must make a DC 13 Dexterity saving throw, taking 9 (2d8) fire damage on a failed save, or half as much damage on a successful one."
		}
		],
		description: "By offering a place for those of many different talents, the Cult of Rakdos has seen its numbers swell with performing artists, including blade jugglers, fire eaters, and high wire acrobats. Performers carry the message of Rakdos out into the streets: cut loose, free yourself from the bonds of society's mores and expectations, and indulge your desires.",
	},
	"Rakdos Performer, High-Wire Acrobat": {
		name: "Rakdos Performer, High-Wire Acrobat",
		source: ["Guildmasters' Guide to Ravnica", 249],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Chaotic Evil",
		ac: [13, "", false],
		hp: 22,
		hd: [4, 8],
		scores: [13, 17, 12, 10, 8, 15],
		saves: ["", "5", "", "", "", "4"],
		skills: "Acrobatics +7, Performance +4",
		passive_perception: "9",
		languages: "any one language (usually Common)",
		challenge_rating: "1",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Barbed Pole",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "The acrobat can jump up to 20 feet. This movement doesn't provoke opportunity attacks.",
		}
		],
		traits: [{
			name: "Nimble",
			description: "The performer can take the Disengage action as a bonus action on each of its turns."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The acrobat makes two attacks with its barbed pole."
		}
		],
		description: "By offering a place for those of many different talents, the Cult of Rakdos has seen its numbers swell with performing artists, including blade jugglers, fire eaters, and high wire acrobats. Performers carry the message of Rakdos out into the streets: cut loose, free yourself from the bonds of society's mores and expectations, and indulge your desires.",
	},
	"Reckoner": {
		name: "Reckoner",
		source: ["Guildmasters' Guide to Ravnica", 231],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Lawful Neutral",
		ac: [18, "Plate Armor", false],
		hp: 52,
		hd: [8, 8],
		scores: [16, 12, 15, 15, 12, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, Intimidation +2, Perception +3",
		passive_perception: "13",
		languages: "Common plus any one language",
		challenge_rating: "4",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d10+3) slashing damage.",
		}
		],
		traits: [{
			name: "First Strike",
			description: "The reckoner has advantage on initiative rolls."
		}
		],
		spells: [
			"The reckoner is a 5th-level Boros spellcaster. Its spellcasting ability is Intelligence (spell save DC 12, +4 to hit with spell attacks). The reckoner has the following wizard spells prepared:",
			"Cantrips (at will): blade ward, light, message, shocking grasp",
			"1st level (4 slots): guiding bolt, shield, thunderwave, witch bolt",
			"2nd level (3 slots): blur, levitate",
			"3rd level (2 slots): lightning bolt"
		],
		reactions: {
			name: "Lightning Backlash (Recharge 5-6)",
			description: "When a creature hits the reckoner with an attack, the attacker takes lightning damage equal to half the damage dealt by the attack."
		},
		slots: "4, 3, 2",
		description: "Boros reckoners combine physical power and magical prowess, serving as the shock troops of the legion. They are adept at breaking up mobs and organized lines of defense. Sometimes described as living thunderstorms, reckoners charge their bodies with lightning that bursts forth in their spells and lashes out at enemies who harm them. Many reckoners are minotaurs.",
	},
	"Rubblebelt Stalker": {
		name: "Rubblebelt Stalker",
		source: ["Guildmasters' Guide to Ravnica", 239],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Chaotic Neutral",
		ac: [14, "Piecemeal Armor", false],
		hp: 11,
		hd: [2, 8],
		scores: [10, 15, 12, 10, 14, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +2, Perception +4, Stealth +4",
		passive_perception: "14",
		languages: "any one language (usually Common)",
		challenge_rating: "1/2",
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
			description: ""
		}
		],
		traits: [{
			name: "Ambusher",
			description: "In the first round of a combat, the stalker has advantage on attack rolls against any creature that hasn't taken a turn yet."
		}, {
			name: "Nimble Escape",
			description: "The stalker can take the Disengage or Hide action as a bonus action on each of its turns."
		}, {
			name: "Ruin Dweller",
			description: "The stalker has advantage on Dexterity (Stealth) checks made to hide in ruins, and its speed is not reduced in difficult terrain composed of rubble."
		}, {
			name: "Siege Monster",
			description: "The stalker deals double damage to objects and structures."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The stalker makes three attacks with its shortsword."
		}
		],
		description: "Rubblebelt stalkers are scouts and skirmishers for the Gruul Clans. They excel at moving over challenging terrain, whether they're picking their way through treacherous ruins or clambering across rooftops. They favor ambush tactics and avoid confrontations with stronger forces, relying on their superior mobility to make their escape.",
	},
	"Scorchbringer Guard": {
		name: "Scorchbringer Guard",
		source: ["Guildmasters' Guide to Ravnica", 243],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Chaotic Neutral",
		ac: [16, "Breastplate", false],
		hp: 11,
		hd: [2, 8],
		scores: [13, 14, 12, 10, 9, 10],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "9",
		languages: "any one language (usually Common)",
		challenge_rating: "1/2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Light Hammer (Melee)",
			ability: 2,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Light Hammer (Ranged)",
			ability: 2,
			damage: [1, 4, "bludgeoning"],
			range: "Ranged (20/60 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Explosive Tank",
			description: "When the guard dies, or if it rolls a 1 when checking whether its Scorchbringer action recharges, the tank on its back explodes in a 10-foot radius sphere. Each creature in that area must make a DC 12 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects that aren't being worn or carried, and it destroys the scorchbringer."
		}
		],
		actions: [{
			name: "Scorchbringer (Recharge 4-6)",
			description: "The guard's scorchbringer spouts a stream of flame in a line that is 30 feet long and 5 feet wide. Each creature in the line must make a DC 12 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."
		}
		],
		description: "While chemisters focus on inventing new tools, weapons, and other devices for the guild to use, the role of a blastseeker is to put those devices to work. Despite the name, not all such devices produce explosions, but all the most interesting ones (from the Izzet perspective) do.",
	},
	"Soldier": {
		name: "Soldier",
		source: ["Guildmasters' Guide to Ravnica", 226],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Any alignment",
		ac: [18, "Chain Mail", false],
		hp: 16,
		hd: [3, 8],
		scores: [13, 12, 12, 10, 11, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Athletics +3",
		passive_perception: "12",
		languages: "any one language (usually Common)",
		challenge_rating: "1/2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 7 (1d10+2) slashing damage.",
		}
		],
		traits: [{
			name: "Formation Tactics",
			description: "The soldier has advantage on saving throws against being charmed, frightened, grappled, or restrained while it is within 5 feet of at least one ally."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The soldier makes two melee attacks."
		}
		],
		description: "Soldiers are found in many of Ravnica's guilds. The soldier stat block represents a typical member of the rank and file, though weaponry and armor can vary.",
	},
	"Thought Spy": {
		name: "Thought Spy",
		source: ["Guildmasters' Guide to Ravnica", 233],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Lawful Evil",
		ac: [13, "Leather Armor", false],
		hp: 27,
		hd: [6, 8],
		scores: [11, 14, 10, 16, 13, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +6, Insight +3, Investigation +5, Perception +3, Sleight of hand +4, Stealth +4",
		passive_perception: "13",
		languages: "Common plus any one language",
		challenge_rating: "1",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 30 ft",
		attacks: [{
			name: "Dagger (Melee)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Dagger (Ranged)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: ""
		}, {
			name: "Rapier",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Cunning Action",
			description: "On each of its turns, the thought spy can use a bonus action to take the Dash, Disengage, or Hide action."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The thought spy's innate spellcasting ability is Intelligence (spell save DC 13). The thought spy can innately cast the following spells, requiring no components:",
				"At will: charm person, disguise self, encode thoughts (see chapter 2)",
				"1/day each: blur, detect thoughts, gaseous form"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The thought spy makes two melee attacks, or it makes three ranged attacks with its daggers."
		}
		],
		description: "Thought spies form the backbone of House Dimir's covert operations. They are trained in stealth and infiltration, tactics that they supplement with rigorously developed mental abilities. To ensure that no secrets slip through Dimir's fingers, they infiltrate rival guilds. In addition to traditional means of gathering intelligence, thought spies use their magic to spy on the thoughts of their targets.",
	},
	"Golgari Shaman": {
		name: "Golgari Shaman",
		source: ["Guildmasters' Guide to Ravnica", 236],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "Lawful Evil",
		ac: [14, "Hide Armor", false],
		hp: 88,
		hd: [16, 8],
		scores: [11, 15, 12, 12, 17, 16],
		saves: ["", "", "4", "", "6", ""],
		skills: "Arcana +4, Insight +6, Nature +4, Religion +4",
		passive_perception: "13",
		languages: "Common, Elvish",
		challenge_rating: "5",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Quarterstaff",
			ability: 2,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 6 (1d8+2) bludgeoning damage.",
		}, {
			name: "Fungal Rot",
			ability: 6,
			damage: [2, 8, "necrotic"],
			range: "Melee (5 ft)",
			description: "Target must make a DC 14 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The shaman has advantage on saving throws against being charmed, and magic can't put it to sleep."
		}
		],
		spells: [
			"The shaman is an 8th-level Golgari spellcaster. Its spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). The shaman has the following druid spells prepared:",
			"Cantrips (at will): poison spray, shillelagh, thorn whip",
			"1st level (4 slots): cure wounds, entangle, ray of sickness",
			"2nd level (3 slots): pass without trace, ray of enfeeblement, spike growth",
			"3rd level (3 slots): animate dead, dispel magic, plant growth",
			"4th level (2 slots): blight, giant insect"
		],
		reactions: {
			name: "Feed on Death",
			description: "When a creature within 30 feet of the shaman drops to 0 hit points, the shaman gains 5 (1d10) temporary hit points."
		},
		slots: "4, 3, 3, 2",
		description: "Golgari shamans are the spiritual leaders of the Golgari Swarm. They teach the guild's beliefs about the cycles of nature, using their necromantic magic to show how life sprouts from death.\n Golgari shamans paint their faces so they appear to have extra eyes on their cheeks and chins. They sometimes use magical moodmark paint (described in chapter 5) to allow them to communicate by means of these marks. They wear clothing adorned with beetle carapaces, spiderwebs, or shelf fungus.\n Golgari Lairs:\n Members of the Golgari Swarm have an intimate connection to their territory. When at least six Golgari defend their territory together, they can call on the environment to aid them. The group must include Jarad Vod Savo or at least one Golgari shaman, kraul death priest, undercity medusa, or Devkarin lich. When determining the difficulty of such an encounter, consider the lair to be one additional creature of challenge rating 1.",
	},
	"Kraul Death Priest": {
		name: "Kraul Death Priest",
		source: ["Guildmasters' Guide to Ravnica", 214],
		size: "Medium",
		type: "humanoid (kraul)",
		alignment: "Lawful Evil",
		ac: [18, "Natural Armor", false],
		hp: 65,
		hd: [10, 8],
		scores: [16, 12, 14, 12, 15, 10],
		saves: ["", "", "4", "", "4", ""],
		skills: "Insight +4, Nature +3, Religion +3",
		passive_perception: "12",
		languages: "Common, Kraul",
		challenge_rating: "4",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 7 (1d8+3) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Feed on Death",
			description: "When a creature within 30 feet of the kraul drops to 0 hit points, the kraul or another creature of its choice within 30 feet of it gains 5 (1d10) temporary hit points, provided the kraul isn't incapacitated."
		}, {
			name: "Hive Mind",
			description: "The kraul is immune to the charmed and frightened conditions while within 30 feet of at least one other kraul."
		}, {
			name: "Pack Tactics",
			description: "The kraul has advantage on an attack roll against a creature if at least one of the kraul's allies is within 5 feet of the creature and the ally isn't incapacitated."
		}, {
			name: "Spider Climb",
			description: "The kraul can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The kraul's innate spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The kraul can innately cast the following spells, requiring no material components:",
				"At will: chill touch, poison spray",
				"3/day each: ray of enfeeblement, ray of sickness",
				"1/day each: animate dead, blight, vampiric touch"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The kraul makes one attack with its quarterstaff and casts one of its spells with a casting time of 1 action."
		}
		],
		spells: "chill touch, poison spray, ray of enfeeblement, ray of sickness, animate dead, blight, vampiric touch",
		description: "The death priests occupy the highest roles in kraul society. They lead the buzzing chants of the kraul rites. Their inscrutable clicks and buzzing can summon crippling necromantic magic, and the presence of death seems to fortify them. They draw power from the defeat of their enemies and channel it to their followers, ensuring the continuation of the cycle.\n The current leader of the kraul is a death priest named Mazirek.\n Kraul:\n The kraul are an ascendant power group within the Golgari Swarm, long content to linger at the margins of the undercity but now increasingly making their buzzing voices heard in the subterranean Golgari guildhall. These six-legged, insectile beings are hard-headed and literal-minded, with little grasp of metaphor or nuance.",
	},
	"Kraul Warrior": {
		name: "Kraul Warrior",
		source: ["Guildmasters' Guide to Ravnica", 213],
		size: "Medium",
		type: "humanoid (kraul)",
		alignment: "Lawful Evil",
		ac: [18, "Natural Armor", false],
		hp: 27,
		hd: [5, 8],
		scores: [15, 12, 13, 10, 11, 8],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "10",
		languages: "Kraul, understands Common but can't speak it",
		challenge_rating: "1/2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
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
			description: ""
		}
		],
		traits: [{
			name: "Hive Mind",
			description: "The kraul is immune to the charmed and frightened conditions while within 30 feet of at least one other kraul."
		}, {
			name: "Pack Tactics",
			description: "The kraul has advantage on an attack roll against a creature if at least one of the kraul's allies is within 5 feet of the creature and the ally isn't incapacitated."
		}, {
			name: "Spider Climb",
			description: "The kraul can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}
		],
		actions: [{
			name: "Variant: Winged Kraul Warriors",
			description: "Some kraul warriors have a flying speed of 40 feet, as a result of possessing gossamer wings. Their wings give them a higher station among the kraul soldiers. Winged kraul warriors serve the guild as scouts and shock troops."
		}
		],
		description: "Kraul society is organized into well-defined roles and castes. The vast majority of the kraul occupy various tiers of soldiery, from commanders and elite troops down to the lowliest infantry.\n Kraul:\n The kraul are an ascendant power group within the Golgari Swarm, long content to linger at the margins of the undercity but now increasingly making their buzzing voices heard in the subterranean Golgari guildhall. These six-legged, insectile beings are hard-headed and literal-minded, with little grasp of metaphor or nuance.",
	},
	"Zegana": {
		name: "Zegana",
		source: ["Guildmasters' Guide to Ravnica", 255],
		size: "Medium",
		type: "humanoid (merfolk)",
		alignment: "Lawful Neutral",
		ac: [16, "Natural Armor", false],
		hp: 130,
		hd: [20, 8],
		scores: [11, 14, 14, 20, 18, 16],
		saves: ["", "", "", "10", "9", ""],
		skills: "Insight +9, Nature +10, Perception +9",
		passive_perception: "19",
		languages: "Common, Elvish, Merfolk",
		challenge_rating: "16",
		damage_resistances: "cold, poison",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Prime Speaker's Trident (Melee)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			modifiers: ["", 5, ""], // bonuses to: [to hit, to damage, add ability to damage];
			description: "The trident emits a thunderous boom. Each creature in a 15-foot cube originating from the prongs of the trident must make a DC 18 Constitution saving throw. On a failed save, the creature takes 9 (2d8) thunder damage and is pushed 10 feet away from Zegana. If the creature is underwater, the damage is increased to 13 (3d8). On a successful save, the creature takes half as much damage and isn't pushed.",
		}, {
			name: "Prime Speaker's Trident (Ranged)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			modifiers: ["", 5, ""], // bonuses to: [to hit, to damage, add ability to damage];
			description: "The trident emits a thunderous boom. Each creature in a 15-foot cube originating from the prongs of the trident must make a DC 18 Constitution saving throw. On a failed save, the creature takes 9 (2d8) thunder damage and is pushed 10 feet away from Zegana. If the creature is underwater, the damage is increased to 13 (3d8). On a successful save, the creature takes half as much damage and isn't pushed.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "Zegana can breathe air and water."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Zegana fails a saving throw, she can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Zegana has advantage on saving throws against spells and other magical effects."
		}
		],
		spells: [
			"Zegana is a 15th-level Simic spellcaster. Her spellcasting ability is Intelligence (spell save DC 18, +10 to hit with spell attacks). She has the following wizard spells prepared:",
			"Cantrips (at will): acid splash, druidcraft, ray of frost, shape water",
			"1st level (4 slots): color spray, expeditious retreat, fog cloud, shield",
			"2nd level (3 slots): enlarge/reduce, gust of wind",
			"3rd level (3 slots): counterspell, fly, slow",
			"4th level (3 slots): control water, ice storm, polymorph",
			"5th level (2 slots): conjure elemental, creation",
			"6th level (1 slots): move earth, wall of ice",
			"7th level (1 slots): prismatic spray, teleport",
			"8th level (1 slots): control weather, dominate monster"
		],
		actions: [{
			attack: "Prime Speaker's Trident|10|2d6+5"
		}, {
			name: "Deluge (Recharge 4-6)",
			description: "Zegana conjures a wave of water that crashes down on an area within 120 feet of her. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a DC 18 Dexterity saving throw. On a failed save, a creature takes 18 (4d8) bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone. The water spreads out across the ground, extinguishing unprotected flames it comes in contact with, and then vanishes."
		}
		],
		legendary_actions: [{
			description: "Zegana can take 4 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Zegana regains spent legendary actions at the start of its turn."
		}, {
			name: "Adaptive Skin",
			description: "Zegana gains resistance to one damage type of her choice-acid, fire, lightning, or thunder-until the start of her next turn."
		}, {
			name: "Trident",
			description: "Zegana makes one melee attack with the Prime Speaker's Trident."
		}, {
			name: "Enlarge (Costs 2 Actions)",
			description: "Zegana casts enlarge/reduce on herself, using the enlarge option, without expending a spell slot."
		}, {
			name: "Deluge (Costs 3 Actions)",
			description: "Zegana uses Deluge, if available."
		}
		],
		slots: "4, 3, 3, 3, 2, 1, 1, 1",
		description: "The regal and reticent Prime Speaker Zegana is the merfolk guildmaster of the Simic Combine. She upholds the traditional ways of the guild and its utopian philosophy, which espouses a vision of an ideal world in which nature and civilization coexist in perfect balance. Some people in the guild-members of the Adaptationist faction in particular-argue that her ways are outdated and the guild requires more practical leadership. In response, Zegana maintains that she serves as prime speaker only at the sufferance of the Speakers' Chamber, and if the other speakers wish to replace her, they are certainly within their rights to do so.",
	},
	"Category 1 Krasis": {
		name: "Category 1 Krasis",
		source: ["Guildmasters' Guide to Ravnica", 210],
		size: "Medium",
		type: "monstrosity",
		alignment: "Unaligned",
		ac: [15, "Natural Armor", false],
		hp: 19,
		hd: [3, 8],
		scores: [16, 15, 14, 2, 13, 8],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "11",
		languages: "",
		challenge_rating: "1",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Claws",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The krasis can breathe air and water."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The krasis makes two attacks: one with its bite and one with its claws."
		}
		],
		description: "Krasis:\n In the deep sinkholes that serve as laboratories and guildhalls for the Simic Combine, biomancers employ a combination of magic and scientific method to create novel life forms. They coax new morphologies from existing creatures or combine traits from multiple organisms into one, producing the creatures known as krasis. Some krasis are unique creatures that can't reproduce. A few multiply and become part of the guild's standard menagerie.\n Creating a Krasis:\n To create a krasis, choose the appropriate stat block: category 1 (Medium), category 2 (Large), or category 3 (Huge). Then roll once on the Major Adaptations table and once on the Minor Adaptations table (or choose an option from each table) to determine its additional characteristics. The potency of some adaptations varies based on the category of the krasis, as indicated in the descriptions of those adaptations.\n Just a few examples of krasis are the battering krasis (a fusion of hammerhead shark and a powerfully built beast), the crocanura (a crocodile-frog), the drakewing krasis (a lizard-drake), the teratosuchus (a crocodile-crab), the shambleshark (a shark-crab), and the sharktocrab (an improved shambleshark that includes octopus elements as well).\n d8 | Major Adaptation\n 1 | Acidic Skin. Any creature that touches the krasis or hits it with a melee attack while within 5 feet of it takes 2 (1d4) acid damage (category 1), 4 (1d8) acid damage (category 2), or 6 (1d12) acid damage (category 3).\n 2 | Armored Hide. The krasis has better natural armor afforded by a shell or thick scales, increasing its Armor Class by 4.\n 3 | Bioluminescent Markings. The krasis has glowing patterns on its skin that take the shape of defensive runes, granting it advantage on saving throws against spells and other magical effects.\n 4 | Flight. The krasis has wings and gains a flying speed equal to its walking speed.\n 5 | Grabber. When the krasis hits a creature with its claws, the target is grappled (escape DC 13 for category 1, DC 15 for category 2, and DC 19 for category 3) by a specialized grasping appendage on the krasis. It can have only one creature grappled in this way at a time.\n 6 | Hypnotic Display (Recharge 5-6). As an action, the krasis creates mesmerizing colors and shapes around itself. Each creature within 15 feet of it that can see it must succeed on a Wisdom saving throw (DC 12 for category 1, DC 14 for category 2, and DC 18 for category 3) or be stunned for 1 minute. The stunned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on a saving throw against this effect becomes immune to the Hypnotic Display of all krasis for 24 hours.\n 7 | Venomous Sting. When the krasis hits a creature with its claws, the creature must succeed on a Constitution saving throw (DC 12 for category 1, DC 14 for category 2, and DC 18 for category 3) or be poisoned for 1 minute. If the krasis is a category 2 or 3, the creature is paralyzed while poisoned in this way. The poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n 8 | Regeneration. The krasis regains hit points (2 for a category 1, 5 for a category 2, and 10 for a category 3) at the start of each of its turns if it has at least 1 hit point.\n  \n d8 | Minor Adaptation\n 1 | Amorphous Structure. The krasis can move through a space as narrow as 1 inch wide without squeezing.\n 2 | Aquatic. The krasis gains a swimming speed equal to its walking speed.\n 3 | Climbing Speed. The krasis gains a climbing speed equal to its walking speed.\n 4 | Cryptic Skin. The krasis can change color to match its surroundings. It has advantage on Dexterity (Stealth) checks made to hide.\n 5 | Heightened Awareness. The krasis can't be surprised, as a result of having sensitive barbels like a catfish, stereoscopic vision like a chameleon, a tongue like a snake, eye stalks like a lobster, or an array of several eyes.\n 6 | Ink Cloud (Recharges after a Short or Long Rest). While underwater, the krasis can use a bonus action to expel a cloud of ink and then move up to its speed. The ink cloud is stationary and fills a 20-foot-radius sphere centered on a point in the krasis's space before it moves. The sphere is heavily obscured until the ink disperses after 1 minute. A strong current also disperses the ink cloud.\n 7 | Leaping Legs. With or without a running start, the krasis's long jump is 20 feet (category 1), 30 feet (category 2), or 40 feet (category 3). Its high jump is 10 feet (category 1), 20 feet (category 2), or 30 feet (category 3).\n 8 | Stabilizing Legs. The krasis has several crablike legs. As a result, it has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
	},
	"Category 2 Krasis": {
		name: "Category 2 Krasis",
		source: ["Guildmasters' Guide to Ravnica", 211],
		size: "Large",
		type: "monstrosity",
		alignment: "Unaligned",
		ac: [15, "Natural Armor", false],
		hp: 136,
		hd: [16, 10],
		scores: [18, 14, 16, 2, 13, 8],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "11",
		languages: "",
		challenge_rating: "6",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 12, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 12, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The krasis can breathe air and water."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The krasis makes two attacks: one with its bite and one with its claws."
		}
		],
		description: "Krasis:\n In the deep sinkholes that serve as laboratories and guildhalls for the Simic Combine, biomancers employ a combination of magic and scientific method to create novel life forms. They coax new morphologies from existing creatures or combine traits from multiple organisms into one, producing the creatures known as krasis. Some krasis are unique creatures that can't reproduce. A few multiply and become part of the guild's standard menagerie.\n Creating a Krasis:\n To create a krasis, choose the appropriate stat block: category 1 (Medium), category 2 (Large), or category 3 (Huge). Then roll once on the Major Adaptations table and once on the Minor Adaptations table (or choose an option from each table) to determine its additional characteristics. The potency of some adaptations varies based on the category of the krasis, as indicated in the descriptions of those adaptations.\n Just a few examples of krasis are the battering krasis (a fusion of hammerhead shark and a powerfully built beast), the crocanura (a crocodile-frog), the drakewing krasis (a lizard-drake), the teratosuchus (a crocodile-crab), the shambleshark (a shark-crab), and the sharktocrab (an improved shambleshark that includes octopus elements as well).\n d8 | Major Adaptation\n 1 | Acidic Skin. Any creature that touches the krasis or hits it with a melee attack while within 5 feet of it takes 2 (1d4) acid damage (category 1), 4 (1d8) acid damage (category 2), or 6 (1d12) acid damage (category 3).\n 2 | Armored Hide. The krasis has better natural armor afforded by a shell or thick scales, increasing its Armor Class by 4.\n 3 | Bioluminescent Markings. The krasis has glowing patterns on its skin that take the shape of defensive runes, granting it advantage on saving throws against spells and other magical effects.\n 4 | Flight. The krasis has wings and gains a flying speed equal to its walking speed.\n 5 | Grabber. When the krasis hits a creature with its claws, the target is grappled (escape DC 13 for category 1, DC 15 for category 2, and DC 19 for category 3) by a specialized grasping appendage on the krasis. It can have only one creature grappled in this way at a time.\n 6 | Hypnotic Display (Recharge 5-6). As an action, the krasis creates mesmerizing colors and shapes around itself. Each creature within 15 feet of it that can see it must succeed on a Wisdom saving throw (DC 12 for category 1, DC 14 for category 2, and DC 18 for category 3) or be stunned for 1 minute. The stunned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on a saving throw against this effect becomes immune to the Hypnotic Display of all krasis for 24 hours.\n 7 | Venomous Sting. When the krasis hits a creature with its claws, the creature must succeed on a Constitution saving throw (DC 12 for category 1, DC 14 for category 2, and DC 18 for category 3) or be poisoned for 1 minute. If the krasis is a category 2 or 3, the creature is paralyzed while poisoned in this way. The poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n 8 | Regeneration. The krasis regains hit points (2 for a category 1, 5 for a category 2, and 10 for a category 3) at the start of each of its turns if it has at least 1 hit point.\n  \n d8 | Minor Adaptation\n 1 | Amorphous Structure. The krasis can move through a space as narrow as 1 inch wide without squeezing.\n 2 | Aquatic. The krasis gains a swimming speed equal to its walking speed.\n 3 | Climbing Speed. The krasis gains a climbing speed equal to its walking speed.\n 4 | Cryptic Skin. The krasis can change color to match its surroundings. It has advantage on Dexterity (Stealth) checks made to hide.\n 5 | Heightened Awareness. The krasis can't be surprised, as a result of having sensitive barbels like a catfish, stereoscopic vision like a chameleon, a tongue like a snake, eye stalks like a lobster, or an array of several eyes.\n 6 | Ink Cloud (Recharges after a Short or Long Rest). While underwater, the krasis can use a bonus action to expel a cloud of ink and then move up to its speed. The ink cloud is stationary and fills a 20-foot-radius sphere centered on a point in the krasis's space before it moves. The sphere is heavily obscured until the ink disperses after 1 minute. A strong current also disperses the ink cloud.\n 7 | Leaping Legs. With or without a running start, the krasis's long jump is 20 feet (category 1), 30 feet (category 2), or 40 feet (category 3). Its high jump is 10 feet (category 1), 20 feet (category 2), or 30 feet (category 3).\n 8 | Stabilizing Legs. The krasis has several crablike legs. As a result, it has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
	},
	"Category 3 Krasis": {
		name: "Category 3 Krasis",
		source: ["Guildmasters' Guide to Ravnica", 212],
		size: "Huge",
		type: "monstrosity",
		alignment: "Unaligned",
		ac: [16, "Natural Armor", false],
		hp: 287,
		hd: [25, 12],
		scores: [23, 12, 21, 2, 13, 8],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "11",
		languages: "",
		challenge_rating: "16",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [6, 6, "piercing"],
			range: "Melee (10 ft)",
			description: ""
		}, {
			name: "Claws",
			ability: 1,
			damage: [3, 10, "slashing"],
			range: "Melee (10 ft)",
			description: ""
		}, {
			name: "Tail",
			ability: 1,
			damage: [6, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "If the target is a creature, it must succeed on a DC 19 Strength saving throw or be knocked prone.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The krasis can breathe air and water."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The krasis makes three attacks: one with its bite, one with its claws, and one with its tail."
		}
		],
		description: "Krasis:\n In the deep sinkholes that serve as laboratories and guildhalls for the Simic Combine, biomancers employ a combination of magic and scientific method to create novel life forms. They coax new morphologies from existing creatures or combine traits from multiple organisms into one, producing the creatures known as krasis. Some krasis are unique creatures that can't reproduce. A few multiply and become part of the guild's standard menagerie.\n Creating a Krasis:\n To create a krasis, choose the appropriate stat block: category 1 (Medium), category 2 (Large), or category 3 (Huge). Then roll once on the Major Adaptations table and once on the Minor Adaptations table (or choose an option from each table) to determine its additional characteristics. The potency of some adaptations varies based on the category of the krasis, as indicated in the descriptions of those adaptations.\n Just a few examples of krasis are the battering krasis (a fusion of hammerhead shark and a powerfully built beast), the crocanura (a crocodile-frog), the drakewing krasis (a lizard-drake), the teratosuchus (a crocodile-crab), the shambleshark (a shark-crab), and the sharktocrab (an improved shambleshark that includes octopus elements as well).\n d8 | Major Adaptation\n 1 | Acidic Skin. Any creature that touches the krasis or hits it with a melee attack while within 5 feet of it takes 2 (1d4) acid damage (category 1), 4 (1d8) acid damage (category 2), or 6 (1d12) acid damage (category 3).\n 2 | Armored Hide. The krasis has better natural armor afforded by a shell or thick scales, increasing its Armor Class by 4.\n 3 | Bioluminescent Markings. The krasis has glowing patterns on its skin that take the shape of defensive runes, granting it advantage on saving throws against spells and other magical effects.\n 4 | Flight. The krasis has wings and gains a flying speed equal to its walking speed.\n 5 | Grabber. When the krasis hits a creature with its claws, the target is grappled (escape DC 13 for category 1, DC 15 for category 2, and DC 19 for category 3) by a specialized grasping appendage on the krasis. It can have only one creature grappled in this way at a time.\n 6 | Hypnotic Display (Recharge 5-6). As an action, the krasis creates mesmerizing colors and shapes around itself. Each creature within 15 feet of it that can see it must succeed on a Wisdom saving throw (DC 12 for category 1, DC 14 for category 2, and DC 18 for category 3) or be stunned for 1 minute. The stunned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on a saving throw against this effect becomes immune to the Hypnotic Display of all krasis for 24 hours.\n 7 | Venomous Sting. When the krasis hits a creature with its claws, the creature must succeed on a Constitution saving throw (DC 12 for category 1, DC 14 for category 2, and DC 18 for category 3) or be poisoned for 1 minute. If the krasis is a category 2 or 3, the creature is paralyzed while poisoned in this way. The poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n 8 | Regeneration. The krasis regains hit points (2 for a category 1, 5 for a category 2, and 10 for a category 3) at the start of each of its turns if it has at least 1 hit point.\n  \n d8 | Minor Adaptation\n 1 | Amorphous Structure. The krasis can move through a space as narrow as 1 inch wide without squeezing.\n 2 | Aquatic. The krasis gains a swimming speed equal to its walking speed.\n 3 | Climbing Speed. The krasis gains a climbing speed equal to its walking speed.\n 4 | Cryptic Skin. The krasis can change color to match its surroundings. It has advantage on Dexterity (Stealth) checks made to hide.\n 5 | Heightened Awareness. The krasis can't be surprised, as a result of having sensitive barbels like a catfish, stereoscopic vision like a chameleon, a tongue like a snake, eye stalks like a lobster, or an array of several eyes.\n 6 | Ink Cloud (Recharges after a Short or Long Rest). While underwater, the krasis can use a bonus action to expel a cloud of ink and then move up to its speed. The ink cloud is stationary and fills a 20-foot-radius sphere centered on a point in the krasis's space before it moves. The sphere is heavily obscured until the ink disperses after 1 minute. A strong current also disperses the ink cloud.\n 7 | Leaping Legs. With or without a running start, the krasis's long jump is 20 feet (category 1), 30 feet (category 2), or 40 feet (category 3). Its high jump is 10 feet (category 1), 20 feet (category 2), or 30 feet (category 3).\n 8 | Stabilizing Legs. The krasis has several crablike legs. As a result, it has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
	},
	"Isperia": {
		name: "Isperia",
		source: ["Guildmasters' Guide to Ravnica", 227],
		size: "Gargantuan",
		type: "monstrosity",
		alignment: "Lawful Neutral",
		ac: [17, "Natural Armor", false],
		hp: 261,
		hd: [18, 20],
		scores: [20, 14, 18, 23, 26, 20],
		saves: ["", "9", "11", "13", "15", ""],
		skills: "Arcana +13, History +13, Insight +15, Perception +15",
		passive_perception: "25",
		languages: "Common, Sphinx",
		challenge_rating: "21",
		damage_resistances: "",
		damage_immunities: "psychic; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, frightened",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [3, 10, "slashing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, it must succeed on a DC 23 Wisdom saving throw or take 14 (4d6) psychic damage after each attack it makes against Isperia before the start of her next turn.",
		}
		],
		traits: [{
			name: "Inscrutable",
			description: "Isperia is immune to any effect that would sense her emotions or read her thoughts, as well as any divination spell that she refuses. Wisdom (Insight) checks made to ascertain her intentions or sincerity have disadvantage."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Isperia fails a saving throw, she can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Isperia has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Isperia's innate spellcasting ability is Wisdom (spell save DC 23). Isperia can innately cast imprisonment twice per day, requiring no material components.",
				"2/day: imprisonment"
			]
		}
		],
		spells: [
			"Isperia is a 15th-level Azorius spellcaster. Her spellcasting ability is Wisdom (spell save DC 23, +14 to hit with spell attacks). Isperia has the following cleric spells prepared:",
			"Cantrips (at will): guidance, light, resistance, sacred flame, thaumaturgy",
			"1st level (4 slots): command, detect evil and good, ensnaring strike, sanctuary, shield of faith",
			"2nd level (3 slots): arcane lock, augury, calm emotions, hold person, silence, zone of truth",
			"3rd level (3 slots): bestow curse, clairvoyance, counterspell, dispel magic, tongues",
			"4th level (3 slots): divination, locate creature",
			"5th level (2 slots): dispel evil and good, scrying",
			"6th level (1 slots): word of recall",
			"7th level (1 slots): divine word",
			"8th level (1 slots): antimagic field"
		],
		actions: [{
			name: "Multiattack",
			description: "Isperia makes two claw attacks. She can cast a spell with a casting time of 1 action in place of one claw attack."
		}, {
			name: "Supreme Legal Authority",
			description: "Isperia chooses up to three creatures she can see within 90 feet of her. Each target must succeed on a DC 23 Intelligence saving throw or Isperia chooses an action for that target: Attack, Cast a Spell, Dash, Disengage, Dodge, Help, Hide, Ready, Search, or Use an Object. The affected target can't take that action for 1 minute. At the end of each of the target's turns, it can end the effect on itself with a successful DC 23 Intelligence saving throw. A target that succeeds on the saving throw becomes immune to Isperia's Supreme Legal Authority for 24 hours."
		}
		],
		legendary_actions: [{
			description: "Isperia can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Isperia regains spent legendary actions at the start of its turn."
		}, {
			name: "Claw Attack",
			description: "Isperia makes one claw attack."
		}, {
			name: "Cast a Spell (Costs 2 Actions)",
			description: "Isperia casts a spell of 3rd level or lower from her list of prepared spells, using a spell slot as normal."
		}, {
			name: "Supreme Legal Authority (Costs 3 Actions)",
			description: "Isperia uses Supreme Legal Authority."
		}
		],
		slots: "4, 3, 3, 3, 2, 1, 1, 1",
		description: "Isperia is the current guildmaster of the Azorius Senate. As a sphinx, she is aloof and values solitude above all. However, she has been forced to give up her privacy to deal with the increased crime and chaos on Ravnica.\n Isperia is devoted to her guild's belief that law is the ultimate bulwark against chaos, and it is her steady hand that guides the Azorius through these uncertain times. As guildmaster, Isperia serves as the supreme judge, a role that takes advantage of her encyclopedic knowledge of Ravnica's labyrinthine legal system.\n If an encounter turns violent, Isperia refrains from using lethal force if possible, preferring to subdue a wrongdoing so that the legal system can mete out justice.",
	},
	"Skyjek Roc": {
		name: "Skyjek Roc",
		source: ["Guildmasters' Guide to Ravnica", 219],
		size: "Large",
		type: "monstrosity",
		alignment: "Unaligned",
		ac: [15, "Breastplate", false],
		hp: 37,
		hd: [5, 10],
		scores: [20, 13, 14, 3, 10, 8],
		saves: ["", "3", "", "", "2", ""],
		skills: "Perception +2",
		passive_perception: "12",
		languages: "",
		challenge_rating: "2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Beak",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Talons",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Keen Sight",
			description: "The roc has advantage on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The roc makes two attacks: one with its beak and one with its talons."
		}
		],
		description: "The aerial forces of the Boros Legion-skyknights who fly alongside the angels-take to the air mounted on Skyjek rocs. These avians are named for the skyknights who are also part of the Wojek League, called Skyjeks. From the backs of their rocs, these mounted soldiers carry out reconnaissance missions, bombard enemies on the ground, and engage flying foes.\n The shape of a Skyjek roc's body makes it relatively easy to saddle and ride, and it is typically equipped with armor plating on its head and chest.\n Skyjek rocs are headstrong and impulsive, but their bravery makes them ideal mounts for the Boros knights.",
	},
	"Skyswimmer": {
		name: "Skyswimmer",
		source: ["Guildmasters' Guide to Ravnica", 220],
		size: "Gargantuan",
		type: "monstrosity",
		alignment: "Unaligned",
		ac: [18, "Natural Armor", false],
		hp: 216,
		hd: [16, 20],
		scores: [23, 15, 16, 7, 12, 6],
		saves: ["", "", "8", "", "", ""],
		skills: "Perception +6",
		passive_perception: "16",
		languages: "",
		challenge_rating: "13",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the skyswimmer. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the skyswimmer, and it takes 21 (6d6) acid damage at the start of each of the skyswimmer's turns. If the skyswimmer takes 30 damage or more on a single turn from the swallowed creature, the skyswimmer must succeed on a DC 18 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the skyswimmer. If the skyswimmer dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone.",
		}, {
			name: "Slam",
			ability: 1,
			damage: [2, 12, "bludgeoning"],
			range: "Melee (30 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The skyswimmer can breathe air and water."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The skyswimmer makes three attacks: one with its bite and two with its slam."
		}
		],
		description: "Skyswimmers are enormous, predatory leviathans that feed on drakes, rocs, griffins, and anything else they encounter as they soar through the clouds above Ravnica.",
	},
	"Undercity Medusa": {
		name: "Undercity Medusa",
		source: ["Guildmasters' Guide to Ravnica", 222],
		size: "Medium",
		type: "monstrosity",
		alignment: "Lawful Evil",
		ac: [16, "Natural Armor", false],
		hp: 120,
		hd: [16, 8],
		scores: [16, 18, 16, 17, 12, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Insight +4, Perception +4, Stealth +7",
		passive_perception: "14",
		languages: "Common, Elvish",
		challenge_rating: "6",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Claw",
			ability: 2,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The medusa has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Surprise Attack",
			description: "During the first round of combat, the medusa has advantage on attack rolls against any creature that is surprised, and it deals an extra 10 (3d6) damage each time it hits such a creature with an attack."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The medusa's innate spellcasting ability is Intelligence (spell save DC 14). The medusa can innately cast the following spells, requiring no material components:",
				"1/day each: expeditious retreat, fog cloud, misty step"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The medusa makes two claw attacks. It can also use Petrifying Gaze before or after making these attacks."
		}, {
			name: "Petrifying Gaze",
			description: "The medusa fixes its gaze on one creature within 60 feet of it that it can see and that can see its eyes. The target must make a DC 14 Constitution saving throw. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by a greater restoration spell or similar magic."
		}
		],
		spells: "expeditious retreat, fog cloud, misty step",
		description: "The medusas of Ravnica, often called gorgons, are a monstrous race of creatures that appear superficially similar to human women. In place of hair, a gorgon has a writhing mass of black, serpentine cables, and its hands are scaly claws.\n The gaze of a medusa's glowing eyes causes living tissue to petrify. The transformation is rapid, leaving the victim as a stone statue, usually frozen in a position of abject fear or agony-a fine trophy for the medusa's macabre collection. The medusa must exert its will to effect this transformation, so the gaze of a surprised or friendly Ravnican medusa is harmless.\n This deadly gaze attack gives medusas a degree of power among the Golgari that is out of proportion with their small numbers. Medusas command a significant share of the guild's smaller cells around Ravnica, and at least one medusa is thought to be angling for control of the entire guild at the moment.\n Not all gorgons are so ambitious; some prefer to simply stalk the endless shadows of the undercity like hungry predators.",
	},
	"Wurm": {
		name: "Wurm",
		source: ["Guildmasters' Guide to Ravnica", 225],
		size: "Huge",
		type: "monstrosity",
		alignment: "Unaligned",
		ac: [18, "Natural Armor", false],
		hp: 200,
		hd: [16, 12],
		scores: [24, 10, 22, 3, 12, 4],
		saves: ["", "", "11", "", "6", ""],
		skills: "",
		passive_perception: "11",
		languages: "",
		challenge_rating: "14",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "blindsight 60 ft, tremorsense 60 ft",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [5, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "If the target is a Medium or smaller creature, it must succeed on a DC 20 Dexterity saving throw or be swallowed by the wurm. A swallowed creature is blinded and restrained, has total cover against attacks and other effects outside the wurm, and takes 17 (5d6) acid damage at the start of each of the wurm's turns. If the wurm takes 30 damage or more on a single turn from a creature inside it, the wurm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the wurm. If the wurm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone.",
		}
		],
		traits: [{
			name: "Siege Monster",
			description: "The wurm deals double damage to objects and structures."
		}, {
			name: "Earth Tremors",
			description: "The wurm creates earth tremors as it moves overland or underground. Any creature that comes within 30 feet of the moving wurm for the first time on a turn must succeed on a DC 20 Dexterity saving throw or take 10 (3d6) bludgeoning damage and fall prone. Any structure or object anchored to the ground that comes within 30 feet of the moving wurm for the first time on a turn takes 10 (3d6) force damage."
		}, {
			name: "Tunneler",
			description: "The wurm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake."
		}
		],
		description: "Wurms are huge creatures that resemble limbless, wingless dragons. They burrow through the earth and eat virtually anything they come across, and their movement accounts for much of the destruction in the rubblebelt regions of Ravnica. A wurm burrows through loose earth by using deep sonic vibrations to liquefy the earth in front of it and swim through the area. The soil resolidifies and closes behind it. Moving through rock is slower and more difficult, and the wurm leaves a tunnel in its wake. The Gruul Clans appreciate the devastation wurms can create, and the clans sometimes lure them into civilized areas where the destruction can be vast.",
	},
	"Lazav": {
		name: "Lazav",
		source: ["Guildmasters' Guide to Ravnica", 232],
		size: "Medium",
		type: "monstrosity (shapechanger)",
		alignment: "Lawful Evil",
		ac: [18, "Natural Armor", false],
		hp: 204,
		hd: [24, 8],
		scores: [16, 24, 18, 22, 20, 22],
		saves: ["", "13", "", "12", "11", "12"],
		skills: "Deception +18, Insight +11, Perception +11, Stealth +19",
		passive_perception: "21",
		languages: "Common, Thieves' cant",
		challenge_rating: "17",
		damage_resistances: "necrotic, psychic",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) psychic damage, and the target has disadvantage on the next attack roll it makes before Lazav's next turn.",
		}
		],
		traits: [{
			name: "Elusive",
			description: "No attack roll has advantage against Lazav unless he is incapacitated."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Lazav fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Shapechanger Savant",
			description: "Lazav can use a bonus action to polymorph into a Small or Medium humanoid he has seen. His statistics, other than his size, are the same in each form. Any equipment he is wearing or carrying isn't transformed."
		}, {
			name: "Psychic Defenses",
			description: "Unless Lazav is incapacitated, he is immune to magic that allows other creatures to read his thoughts, determine whether he is lying, know his alignment, or know his creature type. Creatures can telepathically communicate with Lazav only if he allows it."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Lazav's innate spellcasting ability is Intelligence (spell save DC 20). He can innately cast the following spells, requiring no material components:",
				"At will: detect thoughts, encode thoughts (see chapter 2), freedom of movement, vicious mockery (4d4 psychic damage)",
				"3/day each: blur, confusion, mirror image",
				"1/day each: modify memory, Rary's telepathic bond"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Lazav makes three shortsword attacks."
		}
		],
		legendary_actions: [{
			description: "Lazav can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Lazav regains spent legendary actions at the start of its turn."
		}, {
			name: "Attack",
			description: "Lazav makes a weapon attack."
		}, {
			name: "Cast a Spell (Costs 2 Actions)",
			description: "Lazav casts one of his innate spells."
		}, {
			name: "Shifting Nightmare (Costs 3 Actions)",
			description: "Lazav rapidly takes the form of several nightmarish creatures, lashing out at all nearby. Each creature within 10 feet of Lazav must succeed on a DC 21 Dexterity saving throw or take 18 (4d8) damage of a type chosen by Lazav: acid, cold, fire, lightning, or necrotic."
		}
		],
		description: "Lazav is uniquely qualified to be the Dimir guildmaster: he is a shapechanger whose mysterious genius is informed by agents from the entire Dimir network. He takes on a tremendous variety of guises as his needs and plans require. He might step out into the Ravnican streets as an elderly widow to eavesdrop at the bazaar, become a vedalken hussar of the Azorius Senate to sidestep a checkpoint, or transform into a Tin Street merchant to deceive a passing noble. His true form might be that of a doppelganger or some other creature; no one has ever seen it.",
	},
	"Anarch": {
		name: "Anarch",
		source: ["Guildmasters' Guide to Ravnica", 239],
		size: "Medium",
		type: "humanoid (any race)",
		alignment: "Chaotic Neutral",
		ac: [13, "Hide Armor", false],
		hp: 11,
		hd: [2, 8],
		scores: [14, 13, 12, 9, 11, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Survival +2",
		passive_perception: "12",
		languages: "any one language (usually Common)",
		challenge_rating: "1/4",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Spiked Club",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 7 (1d10+2) piercing damage.",
		}
		],
		traits: [{
			name: "Aggressive",
			description: "As a bonus action, the anarch can move up to its speed toward a hostile creature it can see."
		}, {
			name: "Siege Monster",
			description: "The anarch deals double damage to objects and structures."
		}
		],
		description: "The rank-and-file members of the Gruul Clans, called anarchs, despise civilization and have sworn to tear down both its physical structures and its institutions. Anarchs scavenge everything, from the hide armor they wear to the weapons they wield. As they pick through the refuse of the rubblebelts, they sometimes come across magic items and other valuable treasures.",
	},
	"Blood Drinker Vampire": {
		name: "Blood Drinker Vampire",
		source: ["Guildmasters' Guide to Ravnica", 223],
		size: "Medium",
		type: "undead",
		alignment: "Lawful Evil",
		ac: [16, "Natural Armor", false],
		hp: 90,
		hd: [12, 8],
		scores: [16, 18, 17, 16, 13, 19],
		saves: ["", "7", "6", "", "4", ""],
		skills: "Intimidation +7, Perception +4, Stealth +7",
		passive_perception: "14",
		languages: "the languages it knew in life",
		challenge_rating: "8",
		damage_resistances: "necrotic; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) necrotic damage. One willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. If the target is humanoid, it must succeed on a DC 15 Charisma saving throw or be charmed by the vampire for 1 minute. While charmed in this way, the target is infatuated with the vampire. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.",
		}, {
			name: "Rapier",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "The vampire can also grapple the target (escape DC 14) if it is a creature and the vampire has a hand free.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The vampire makes three melee attacks, only one of which can be a bite attack."
		}
		],
		reactions: {
			name: "Parry",
			description: "The vampire adds 3 to its AC against one melee attack that would hit it. To do so, the vampire must see the attacker and be wielding a melee weapon."
		},
		description: "Orzhov Vampires\n Vampires thrive in the Orzhov Syndicate, where they can collect tithes and payments from their debtors in the form of blood. Their undead nature gives them the same immortality enjoyed by the oligarch spirits, but they remain capable of experiencing all the delights of their corporeal forms. In contrast to Orzhov spirits, they also retain their personalities, which are almost uniformly cruel.\n Blood Bond\n Consuming a creature's blood creates a sort of empathic bond that allows the blood drinker vampire to exert some magical influence over its victim.\n Vampires:\n Creatures of the night, vampires are ageless undead beings who subsist on the blood of the living. They are fierce predators who mask their ravenous thirst behind a facade of sophistication and sensuality. Those who sip blood from golden chalices are no less voracious than those who tear out their victims' throats with their fangs; they just hide it better.\n The vampires of Ravnica differ from those in the Monster Manual in important ways. They lack the traits and abilities that those other vampires boast, but also lack the weaknesses that hinder such vampires. What they have in common is an unquenchable thirst for the blood that sustains their undead existence.",
	},
	"Devkarin Lich": {
		name: "Devkarin Lich",
		source: ["Guildmasters' Guide to Ravnica", 198],
		size: "Medium",
		type: "undead",
		alignment: "Lawful Evil",
		ac: [14, "Natural Armor", false],
		hp: 97,
		hd: [15, 8],
		scores: [11, 16, 14, 19, 16, 15],
		saves: ["", "", "7", "9", "8", ""],
		skills: "Arcana +14, Insight +8, Perception +8",
		passive_perception: "18",
		languages: "Common, Elvish, Kraul",
		challenge_rating: "14",
		damage_resistances: "necrotic; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Noxious Touch",
			ability: 4,
			damage: [4, 6, "poison"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 17 Constitution saving throw or be poisoned for 1 minute. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the lich fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Regeneration",
			description: "The lich regains 10 hit points at the start of its turn. If the lich takes fire or radiant damage, this trait doesn't function at the start of the lich's next turn. The lich dies only if it starts its turn with 0 hit points and doesn't regenerate."
		}, {
			name: "Turn Resistance",
			description: "The lich has advantage on saving throws against any effect that turns undead."
		}, {
			name: "Undead Fortitude",
			description: "If damage reduces the lich to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the lich drops to 1 hit point instead."
		}
		],
		spells: [
			"The lich is a 14th-level Golgari spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The lich has the following wizard spells prepared:",
			"Cantrips (at will): acid splash, chill touch, mage hand, poison spray, prestidigitation",
			"1st level (4 slots): chromatic orb, magic missile, ray of sickness",
			"2nd level (3 slots): Melf's acid arrow, ray of enfeeblement, spider climb, web",
			"3rd level (3 slots): animate dead, bestow curse, fear, vampiric touch",
			"4th level (3 slots): blight, Evard's black tentacles",
			"5th level (2 slots): cloudkill, insect plague",
			"6th level (1 slots): circle of death, create undead",
			"7th level (1 slots): finger of death"
		],
		legendary_actions: [{
			description: "The undead can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The undead regains spent legendary actions at the start of its turn."
		}, {
			name: "Cantrip",
			description: "The lich casts one of its cantrips."
		}, {
			name: "Noxious Touch (Costs 2 Actions)",
			description: "The lich uses Noxious Touch."
		}, {
			name: "Disrupt Life (Costs 3 Actions)",
			description: "Each creature within 30 feet of the lich must make a DC 17 Constitution saving throw, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one."
		}
		],
		slots: "4, 3, 3, 3, 2, 1, 1",
		description: "Undead Nature\n The lich doesn't require air, food, drink, or sleep.",
	},
	"Gloamwing": {
		name: "Gloamwing",
		source: ["Guildmasters' Guide to Ravnica", 215],
		size: "Large",
		type: "undead",
		alignment: "Lawful Evil",
		ac: [16, "Natural Armor", false],
		hp: 136,
		hd: [16, 10],
		scores: [20, 16, 17, 2, 11, 6],
		saves: ["8", "6", "", "", "", ""],
		skills: "Perception +3, Stealth +6",
		passive_perception: "13",
		languages: "understands Common",
		challenge_rating: "8",
		damage_resistances: "necrotic; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 8, "piercing"],
			range: "Melee (5 ft)",
			description: ""
		}, {
			name: "Claws",
			ability: 1,
			damage: [3, 6, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Death Link",
			description: "If its specter rider is reduced to 0 hit points, the gloamwing is destroyed."
		}, {
			name: "Flyby",
			description: "The gloamwing doesn't provoke an opportunity attack when it flies out of an enemy's reach."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the gloamwing has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The gloamwing makes two attacks: one with its bite and one with its claws."
		}
		],
		description: "A gloamwing's head is almost ratlike, with prominent teeth, and its leathery skin is stretched tight over its skull, where its eyes are empty sockets. Its body is mottled with bony plates, and great wings stretch from its shoulders.",
	},
	"Indentured Spirit": {
		name: "Indentured Spirit",
		source: ["Guildmasters' Guide to Ravnica", 206],
		size: "Medium",
		type: "undead",
		alignment: "Any alignment",
		ac: [11, "", false],
		hp: 13,
		hd: [3, 8],
		scores: [7, 13, 10, 10, 12, 11],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "11",
		languages: "the languages it knew in life",
		challenge_rating: "1",
		damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "cold, necrotic, poison",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "",
		attacks: [{
			name: "Withering Touch",
			ability: 2,
			damage: [3, 6, "necrotic"],
			range: "Melee (5 ft)",
			modifiers: ["", "", false], // bonuses to: [to hit, to damage, add ability to damage];
			description: ""
		}
		],
		traits: [{
			name: "Incorporeal Movement",
			description: "The spirit can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
		}
		],
		description: "Those who die with unpaid debts to the Orzhov Syndicate don't get a reprieve. Instead, their spirits serve the syndicate until they have worked off their obligation. Sometimes that means existing as an indentured spirit for years or even millennia.\n An indentured spirit is an incorporeal being draped in ghostly black robes and a hood that hides whatever face it might have. Chains are hung around its chest and arms as a perpetual marker of its servitude.",
	},
	"Jarad Vod Savo": {
		name: "Jarad Vod Savo",
		source: ["Guildmasters' Guide to Ravnica", 235],
		size: "Medium",
		type: "undead",
		alignment: "Lawful Evil",
		ac: [17, "Natural Armor", false],
		hp: 180,
		hd: [24, 8],
		scores: [14, 16, 16, 20, 16, 15],
		saves: ["", "", "10", "12", "10", ""],
		skills: "Arcana +12, Insight +10, Perception +10",
		passive_perception: "20",
		languages: "Common, Elvish, Kraul",
		challenge_rating: "22",
		damage_resistances: "necrotic; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Noxious Touch",
			ability: 4,
			damage: [8, 6, "poison"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 20 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Staff of Svogthir",
			ability: 2,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			modifiers: [2, 2, ""], // bonuses to: [to hit, to damage, add ability to damage];
			description: "Plus 13 (3d8) poison damage and 13 (3d8) necrotic damage.",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If Jarad fails a saving throw, he can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Jarad has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Regeneration",
			description: "Jarad regains 25 hit points at the start of his turn. If he takes fire or radiant damage, this trait doesn't function at the start of his next turn. He dies only if he starts its turn with 0 hit points and doesn't regenerate."
		}, {
			name: "Spore Infusion",
			description: "Jarad is surrounded by a cloud of spores. As a bonus action, he can cause the spores to deal 11 (2d10) poison damage to a creature he can see within 10 feet of him."
		}, {
			name: "Turn Resistance",
			description: "Jarad has advantage on saving throws against any effect that turns undead."
		}, {
			name: "Undead Fortitude",
			description: "If damage reduces Jarad to 0 hit points, he must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, he drops to 1 hit point instead."
		}
		],
		spells: [
			"Jarad is a 14th-level Golgari spellcaster. His spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). Jarad has the following wizard spells prepared:",
			"Cantrips (at will): acid splash, chill touch, mage hand, poison spray, prestidigitation",
			"1st level (4 slots): entangle, ray of sickness, sleep",
			"2nd level (3 slots): Melf's acid arrow, ray of enfeeblement, spider climb, web",
			"3rd level (3 slots): animate dead, plant growth, vampiric touch",
			"4th level (3 slots): blight, giant insect, grasping vine",
			"5th level (2 slots): cloudkill, insect plague",
			"6th level (1 slots): circle of death, create undead",
			"7th level (1 slots): finger of death, forcecage"
		],
		actions: [{
			name: "Multiattack",
			description: "Jarad makes two attacks: one with his Noxious Touch and one with his Staff of Svogthir. He can cast a spell with a casting time of 1 action in place of one of these attacks."
		}
		],
		legendary_actions: [{
			description: "Jarad can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Jarad regains spent legendary actions at the start of its turn."
		}, {
			name: "Cantrip",
			description: "Jarad casts one of his cantrips."
		}, {
			name: "Noxious Touch (Costs 2 Actions)",
			description: "Jarad uses Noxious Touch."
		}, {
			name: "Disrupt Life (Costs 3 Actions)",
			description: "Each creature within 30 feet of Jarad must make a DC 20 Constitution saving throw, taking 35 (10d6) necrotic damage on a failed save, or half as much damage on a successful one."
		}
		],
		slots: "4, 3, 3, 3, 2, 1, 1",
		description: "Undead Nature\n Jarad doesn't require air, food, drink, or sleep.",
	},
	"Mind Drinker Vampire": {
		name: "Mind Drinker Vampire",
		source: ["Guildmasters' Guide to Ravnica", 224],
		size: "Medium",
		type: "undead",
		alignment: "Lawful Evil",
		ac: [14, "", false],
		hp: 55,
		hd: [10, 8],
		scores: [16, 18, 12, 19, 13, 14],
		saves: ["", "6", "", "6", "3", ""],
		skills: "Deception +4, Insight +3, Perception +3, Stealth +6",
		passive_perception: "13",
		languages: "the languages it knew in life",
		challenge_rating: "4",
		damage_resistances: "necrotic",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 6, ""],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) necrotic damage. One willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.",
		}, {
			name: "Unarmed Strike",
			ability: 2,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "The vampire can also grapple the target (escape DC 13) if it is a creature and the vampire has a hand free.",
		}
		],
		traits: [{
			name: "Shadow Stealth",
			description: "While in dim light or darkness, the vampire can take the Hide action as a bonus action."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the vampire has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The vampire's innate spellcasting ability is Intelligence (spell save DC 14). It can innately cast the following spells, requiring no components:",
				"At will: message",
				"3/day each: charm person, hold person, mirror image, sleep",
				"1/day each: gaseous form, major image"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The vampire makes two attacks, only one of which can be a bite attack."
		}, {
			name: "Mind Siphon (Recharge 5-6)",
			description: "The vampire targets a creature it can see within 30 feet of it. The target must make a DC 14 Intelligence saving throw, with disadvantage if the vampire has previously consumed the target's blood. On a failed save, the target takes 28 (8d6) psychic damage, and the vampire discerns the target's surface emotions and thoughts. On a successful save, the target takes half as much damage, and the vampire discerns the target's general emotional state but not its thoughts."
		}
		],
		description: "Szadek's Heirs\n The founder of House Dimir, Szadek, was the first of the so-called mind drinkers. His secrets are passed on only to other members of his guild, and mind drinkers who leave House Dimir become enemies of the guild-the only exceptions to a rule that prohibits mind drinkers from feeding on others of their kind.\n Cell Leaders\n Thanks to their particular gifts, mind drinkers are often placed as leaders of small cells of covert Dimir operatives. They rarely trust their own agents, though, and often follow their cell members to make sure those members carry out missions as ordered. The most suspicious vampires might even siphon thoughts from their subordinates to detect any hint of betrayal.\n Vampires:\n Creatures of the night, vampires are ageless undead beings who subsist on the blood of the living. They are fierce predators who mask their ravenous thirst behind a facade of sophistication and sensuality. Those who sip blood from golden chalices are no less voracious than those who tear out their victims' throats with their fangs; they just hide it better.\n The vampires of Ravnica differ from those in the Monster Manual in important ways. They lack the traits and abilities that those other vampires boast, but also lack the weaknesses that hinder such vampires. What they have in common is an unquenchable thirst for the blood that sustains their undead existence.",
	},
	"Nightveil Specter": {
		name: "Nightveil Specter",
		source: ["Guildmasters' Guide to Ravnica", 215],
		size: "Medium",
		type: "undead",
		alignment: "Lawful Evil",
		ac: [17, "Natural Armor", false],
		hp: 105,
		hd: [14, 8],
		scores: [18, 19, 16, 6, 17, 11],
		saves: ["", "8", "", "", "7", ""],
		skills: "Insight +7, Perception +7, Stealth +8",
		passive_perception: "17",
		languages: "understands Common but can't speak",
		challenge_rating: "10",
		damage_resistances: "necrotic; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Scythe",
			ability: 2,
			damage: [2, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "Plus 13 (3d8) psychic damage.",
		}
		],
		traits: [{
			name: "Mount",
			description: "If the specter isn't mounted, it can use a bonus action to magically teleport onto its gloamwing mount, provided the specter and the gloamwing are on the same plane of existence. When it teleports, the specter appears astride the gloamwing along with any equipment it is wearing or carrying. While mounted and not incapacitated, the specter can't be surprised, and both it and its mount gain advantage on Dexterity saving throws."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The specter makes two scythe attacks."
		}, {
			name: "Mind Twist (Recharge 5-6)",
			description: "The specter magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Wisdom saving throw or take 22 (5d8) psychic damage and be stunned for 1 minute. The stunned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "Reap Memory (3/Day)",
			description: "The specter touches one incapacitated creature and chooses 1 hour from among the past 24. Unless the creature succeeds on a DC 15 Intelligence saving throw, the creature loses all memory of that hour. The creature regains the memory only if the specter dies within the next 24 hours."
		}
		],
		description: "Limited Sentience\n A Nightveil specter is created when the mind magic of House Dimir erases a person's identity, leaving a mind so broken it can no longer live. Thus, Nightveil specters have no memory of their previous lives, and they are just clever enough to follow their orders with some amount of creativity. They pursue their assigned tasks with fearless determination.\n Gloamwing Mount\n If a gloamwing is killed, its specter becomes fixated on destroying those responsible. If the specter survives, it can create a new gloamwing over the course of a month, during which time the specter is incapacitated.\n A gloamwing's head is almost ratlike, with prominent teeth, and its leathery skin is stretched tight over its skull, where its eyes are empty sockets. Its body is mottled with bony plates, and great wings stretch from its shoulders.\n Undead Nature\n A Nightveil specter and its gloamwing mount don't require air, food, drink, or sleep.",
	},
	"Obzedat Ghost": {
		name: "Obzedat Ghost",
		source: ["Guildmasters' Guide to Ravnica", 245],
		size: "Medium",
		type: "undead",
		alignment: "Lawful Evil",
		ac: [14, "Natural Armor", false],
		hp: 110,
		hd: [20, 8],
		scores: [10, 10, 13, 18, 20, 17],
		saves: ["", "", "", "7", "8", ""],
		skills: "Insight +8, Perception +8",
		passive_perception: "18",
		languages: "Common",
		challenge_rating: "8",
		damage_resistances: "acid, cold, fire, lightning, thunder; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "necrotic, poison",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Life Drain",
			ability: 1,
			damage: [4, 8, "necrotic"],
			range: "Melee (5 ft)",
			description: "The ghost regains hit points equal to half the amount of damage the target takes. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. The target dies if its hit point maximum is reduced to 0. This reduction to the target's hit point maximum lasts until the target finishes a long rest.",
		}
		],
		traits: [{
			name: "Council of Five",
			description: [
				"The ghost has a trait based on who it is, as shown below:",
				"Enezesku: Enfeebling Ray.: Enezesku's Innate Spellcasting trait includes ray of enfeeblement, which he can cast at will.",
				"Fautomni: Undead Fortitude.: If damage reduces Fautomni to 0 hit points, he must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, Fautomni drops to 1 hit point instead.",
				"Karlov: Unnatural Vigor.: When Karlov regains hit points, he has advantage on attack rolls he makes on his next turn.",
				"Vuliev: Teleportation.: Vuliev's Innate Spellcasting trait includes misty step, which he can cast at will.",
				"Xil Xaxosz: Lingering Spite.: When Xil Xaxosz is reduced to 0 hit points, his incorporeal form explodes in a burst of necrotic energy. Each creature within 5 feet of him must make a DC 16 Constitution saving throw, taking 14 (4d6) necrotic damage on a failed save, or half as much damage on a successful one."
			]
		}, {
			name: "Ethereal Sight",
			description: "The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa."
		}, {
			name: "Incorporeal Movement",
			description: "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
		}, {
			name: "Legendary Resistance (1/Day)",
			description: "If the ghost fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The ghost's innate spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks). It can innately cast the following spells, requiring no components:",
				"At will: chill touch (at 5th level, and the ghost regains hit points equal to half the amount of damage the target takes)",
				"1/day each: sanctuary, spirit guardians (at 4th level)"
			]
		}
		],
		actions: [{
			name: "Convene the Ghost Council",
			description: "The ghost summons the other four members of the Obzedat. At the start of the ghost's next turn, the other members appear in unoccupied spaces within 30 feet of the summoner. The ghosts each roll initiative when they appear."
		}
		],
		legendary_actions: [{
			description: "If five Obzedat ghosts are all within 30 feet of each other, they can collectively take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time, and only at the end of another creature's turn. Obzedat ghosts regain spent legendary actions at the start of the turn of the ghost with the highest initiative."
		}, {
			name: "Forced Obedience",
			description: "A target that all of the Obzedat ghosts can see must succeed on a DC 16 Wisdom saving throw or bow until the end of its next turn. Until this bow ends, the target can't take actions or reactions, and its speed is 0 and can't be increased."
		}, {
			name: "Indentured Spirits (Costs 3 Actions)",
			description: "The Obzedat ghosts conjure 1d6} {@creature indentured spirit (described in this chapter) within 60 feet of one of them."
		}
		],
		description: "Mostly Unanimous\n The ghosts of the Obzedat function as a unit, driven by their shared desire to accumulate ever more wealth for the guild. In times of disagreement, the eldest of the council exerts his seniority to bend the council to his will.\n Grandfather Karlov\n The head of the council, who gives final approval to its decisions and breaks ties within the group, is Karlov, known as Grandfather. In life, Karlov was the greediest of Orzhov oligarchs, and his many centuries as a spirit have not diminished his hunger for more wealth.\n Undead Nature\n An Obzedat ghost doesn't require air, food, drink, or sleep.\n The Ghost Council's Traits\n Ideal: \"Influence is measured in power, status, and money, but mostly money.\"\n Bond: \"Gather as much as you can while you can, for when you die, you will take it with you.\"\n Flaw: \"Everyone has a price.\"",
	},
	"Simic Merfolk": {
		name: "Simic Merfolk",
		source: ["Guildmasters' Guide to Ravnica", 187],
		size: "Medium",
		type: "humanoid (merfolk)",
		alignment: "Neutral",
		ac: [11, "", false],
		hp: 11,
		hd: [2, 8],
		scores: [10, 13, 12, 11, 11, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		passive_perception: "12",
		languages: "Aquan, Common",
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
			description: "Two-Handed: 4 (1d8) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The merfolk can breathe air and water."
		}
		],
		environment: "underwater, coastal"
	},
	"Sphinx of Judgment": {
		name: "Sphinx of Judgment",
		source: ["Guildmasters' Guide to Ravnica", 183],
		size: "Large",
		type: "monstrosity",
		alignment: "Lawful Neutral",
		ac: [17, "Natural Armor", false],
		hp: 136,
		hd: [16, 10],
		scores: [18, 15, 16, 18, 18, 18],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +12, History +12, Perception +8, Religion +8",
		passive_perception: "18",
		languages: "Common, Sphinx",
		challenge_rating: "11",
		damage_resistances: "bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "psychic",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, frightened",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: ""
		}
		],
		traits: [{
			name: "Inscrutable",
			description: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
		}, {
			name: "Magic Weapons",
			description: "The sphinx's weapon attacks are magical."
		}
		],
		spells: [
			"The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following wizard spells prepared:",
			"Cantrips (at will): mage hand, minor illusion, prestidigitation",
			"1st level (4 slots): detect magic, identify, shield",
			"2nd level (3 slots): darkness, locate object, suggestion",
			"3rd level (3 slots): dispel magic, remove curse, tongues",
			"4th level (3 slots): banishment, greater invisibility",
			"5th level (1 slots): legend lore"
		],
		actions: [{
			name: "Multiattack",
			description: "The sphinx makes two claw attacks."
		}
		],
		legendary_actions: [{
			description: "The monstrosity can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The monstrosity regains spent legendary actions at the start of its turn."
		}, {
			name: "Claw Attack",
			description: "The sphinx makes one claw attack."
		}, {
			name: "Teleport (Costs 2 Actions)",
			description: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
		}, {
			name: "Cast a Spell (Costs 3 Actions)",
			description: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
		}, {
			name: "Lair Actions",
			description: [
				"On initiative count 20 (losing initiative ties), the sphinx can take a lair action to cause one of the following magical effects; the sphinx can't use an effect again until it finishes a short or long rest:",
				"The flow of time is altered such that every creature in the lair must reroll initiative. The sphinx can choose not to reroll.",
				"The effects of time are altered such that every creature in the lair must succeed on a DC 15 Constitution saving throw or become 1d20 years older or younger (the sphinx's choice), but never any younger than 1 year old. A greater restoration spell can restore a creature's age to normal.",
				"The flow of time within the lair is altered such that everything within moves up to 10 years forward or backward (sphinx's choice). Only the sphinx is immediately aware of the time change. A wish spell can return the caster and up to seven other creatures designated by the caster to their normal time.",
				"The sphinx shifts itself and up to seven other creatures it can see within in its lair to another plane of existence. Once outside its lair, the sphinx can't use lair actions, but it can return to its lair as a bonus action on its turn, taking up to seven creatures with it."
			]
		}
		],
		slots: "4, 3, 3, 3, 1",
		description: "Source: Guildmasters' Guide to Ravnica p. ",
		environment: "desert"
	}
}

