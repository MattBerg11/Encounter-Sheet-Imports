var BGDIA = {
	"Devil's Ride": {
		name: "Devil's Ride",
		source: ["Baldur's Gate Descent into Avernus", 218],
		size: "Large",
		type: "infernal vehicle",
		speed: "120",
		ac: [23, "19 while motionless", false],
		scores: [14, 18, 12, 0, 0, 0],
		saves: ["", "", "", "", "", ""],
		hp: "30",
		hd: [0, 0],
		damage_immunities: "fire, poison, psychic",
		condition_immunities: "blinded, charmed, deafened, frightened, paralysed, petrified, poisoned, stunned, unconcious",
		traits: [{
			name: "Jump",
			description: "If the Devil's Ride moves at least 30 feet in a straight line, it can clear a distance of up to 60 feet when jumping over a chasm, ravine, or other gap. Each foot it clears on the jump costs a foot of movement."
		}, {
			name: "Prone Deficiency",
			description: "If the Devil's Ride falls prone, it can't right itself and is incapacitated until pulled upright."
		}, {
			name: "Stunt",
			description: "On its turn, the driver ofthe Devil's Ride can expend 10 feet of movement to perform one free infernal vehicle stunt, such as a wheelie or a burnout. Before the stunt can be performed, the Devil's Ride must move at least l0 feet in a straight line. If the driver succeeds on DC 10 Dexterity check using the bike's Dexterity, the stunt is successful. Otherwise, the driver is unable to perform the stunt and can't attempt another stunt until the start of its next turn. If the check fails by 5 or more, the Devil's Ride and all creatures riding it immediately fall prone as the bike wipes out and comes to a dead stop."
		}, {
			name: "Helm (Requires 1 Crew and Grants Half Cover)",
			description: "Drive and steer the Devil's Ride."
		}
		],
		environment: "underdark"
	},
	"Tormenter": {
		name: "Tormenter",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Huge",
		type: "infernal vehicle",
		speed: "100",
		ac: "21 (19 while motionless)",
		scores: [16, 14, 14, 0, 0, 0],
		damage_immunities: "fire, poison, psychic",
		condition_immunities: "blinded, charmed, deafened, frightened, paralysed, petrified, poisoned, stunned, unconcious",
		traits: [{
			name: "Prone Deficiency",
			description: "If the Tormentor rolls over and falls prone, it can't right itself and is incapacitated until flipped upright."
		}, {
			name: "Magic Weapons",
			description: "The Tormenter's weapon attacks are magical."
		}, {
			name: "Helm (Requires 1 Crew and Grants Three Quarters Cover)",
			description: "Drive and steer the Tormentor."
		}
		],
		action: [{
			name: "Crushing Wheels",
			description: "The Tormentor can move through the space of any Medium or smaller creature. When it does, the creature must succeed on a DC 13 Dexterity saving throw or take 11 (2d10) bludgeoning damage and be knocked prone. If the creature was already prone, it takes an extra 11 (2d10) bludgeoning damage. This trait can't be used against a particular creature more than once each turn.",
			attack: "2d10"
		}, {
			name: "Raking Scythes",
			description: "When the Tormentor moves within 5 feet of a creature that isn't prone or another vehicle for the first time on a turn, it can rake the creature or vehicle with its protruding blades for 13 (2d10+2) slashing damage. A creature moves out of the way and takes no damage if it succeeds on a DC 13 Dexterity saving throw. A vehicle moves out of the way and takes no damage if its driver succeeds on the saving throw.",
			attack: "Raking Scythes|0|2d10+2"
		}, {
			name: "Harpoon Flinger (Requires 1 Crew and Grants Half Cover)",
			description: "Ammunition: 10 harpoons. Ranged Weapon Attack: +7 to hit, range 120 ft, one target. Hit 11 (2d8+2) piercing damage.",
			attack: "Harpoon Flinger|7|2d8+2"
		}
		],
		reactions: {
			name: "Juke",
			description: "If the Tormentor is able to move, the driver can use its reaction to grant the Tormentor advantage on a Dexterity saving throw."
		},
		environment: "underdark"
	},
	"Demon Grinder": {
		name: "Demon Grinder",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Gargantuan",
		type: "infernal vehicle",
		speed: "100",
		ac: "19",
		scores: [18, 10, 18, 0, 0, 0],
		hp: "200",
		hd: [0, 0],
		damage_immunities: "fire, poison, psychic",
		condition_immunities: "blinded, charmed, deafened, frightened, paralysed, petrified, poisoned, stunned, unconcious",
		traits: [{
			description: "Source: Baldur's Gate Descent into Avernus, p. 218"
		}, {
			name: "Magic Weapon",
			description: "The Demon Grinder's weapon attacks are magical."
		}, {
			name: "Prone Deficiency",
			description: "If the Demon Grinder rolls over and falls prone, it can't right itself and is incapacitated until flipped upright."
		}, {
			name: "Helm (Requires 1 Crew and Grants Three-Quarters Cover)",
			description: "Drive and steer the Demon Grinder."
		}
		],
		action: [{
			name: "Crushing Wheels",
			description: "The Demon Grinder can move through the space ofany Large or smaller creature. When it does, the creature must succeed on a DC 11 Dexterity saving throw or take 22 (4d10) bludgeoning damage and be knocked prone. If the creature was already prone, it takes an extra 22 (4d10) bludgeoning damage. This trait can't be used against a particular creature more than once each turn.",
			attack: "Crushing Wheels|0|4d10"
		}, {
			name: "Chomper (Requires 1 Crew and Grants Half Cover)",
			description: "Melee Weapon Attack: +9 to hit, reach 5 ft, one target. Hit: 25 (6d6+4) piercing damage. A target reduced to 0 hit points by this damage is ground to bits and spit out through pipes on both sides of the Demon Grinder. Any nonmagical items the target was holding or carrying are destroyed as well.",
			attack: "Chomper|9|6d6+4"
		}, {
			name: "Wrecking Ball (Requires 1 Crew and Grants Half-Cover)",
			description: "Melee Weapon Attack:+9 to hit, reach 15 ft, one target. Hit: 40 (8d8+4) bludgeoning damage. Double the damage if the target is an object or a structure.",
			attack: "Wrecking Ball|9|8d8+4"
		}, {
			name: "2 Harpoon Flingers (Each Station Requires 1 Crew and Grants Half Cover)",
			description: "Ammunition: 10 harpoons per station. Ranged Weapon Attack: +5 to hit, range 120 ft, one target. Hit: 9 (2d8) piercing damage.",
			attack: "Harpoon Flinger|5|2d8"
		}
		],
		environment: "underdark"
	},
	"Scavenger": {
		name: "Scavenger",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Huge",
		type: "infernal vehicle",
		speed: "100",
		ac: "20",
		scores: [20, 12, 20, 0, 0, 0],
		hp: "150",
		hd: [0, 0],
		damage_immunities: "fire, poison, psychic",
		condition_immunities: "blinded, charmed, deafened, frightened, paralysed, petrified, poisoned, stunned, unconcious",
		traits: [{
			description: "Source: Baldur's Gate Descent into Avernus, p. 219"
		}, {
			name: "Magic Weapons",
			description: "The Scavenger's weapon attacks are magical."
		}, {
			name: "Prone Deficiency",
			description: "If the Scavenger rolls over and falls prone, it can't right itself and is incapacitated until flipped upright."
		}, {
			name: "Helm (Requires 1 Crew and Grants Three-Quarter Cover)",
			description: "Drive and steer the Scavenger."
		}
		],
		action: [{
			name: "Crushing Wheels",
			description: "The Scavenger can move through the space of any Large or smaller creature. When it does, the creature must succeed on a DC 12 Dexterity saving throw or take 16 (3d10) bludgeoning damage and be knocked prone. If the creature was already prone, it takes an extra 16 (3d10) bludgeoning damage. This trait can't be used against a particular creature more than once each turn.",
			attack: "Crushing Wheels|0|3d10"
		}, {
			name: "Grappling Claw (Requires 1 Crew and Grants Half Cover)",
			description: "Melee Weapon Attack: +10 to hit, reach 15 ft, one target. Hit: The tar- get is grappled (escape DC 12). If the target is a creature, it is restrained until the grapple ends.\n The grappling claw can grapple only one target at a time, and the claw's operator can use a bonus action to make the claw release whatever it's holding."
		}
		],
		environment: "underdark"
	},
	"Crokek'toeck (chaotic evil)": {
		name: "Crokek'toeck (chaotic evil)",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Gargantuan",
		type: "fiend",
		speed: "60 ft, swim 60 ft",
		ac: "15 (natural armor)",
		challenge_rating: "14",
		scores: [28, 10, 24, 6, 10, 13],
		passive_perception: "10",
		hp: 297,
		hd: [17, 20],
		damage_immunities: "poison",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "darkvision 120 ft",
		languages: "understands Abyssal but can't speak",
		saves: ["", "", "12", "", "5", ""],
		traits: [{
			name: "Source",
			description: "Baldur's Gate Descent Into Avernus, p. 230"
		}, {
			name: "Amphibious",
			description: "Crokek'toeck can breathe air and water."
		}, {
			name: "Magic Resistance",
			description: "Crokek'toeck has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Secure Memory",
			description: "Crokek'toeck is immune to the waters of the River Styx as well as any effect that would steal or modify its memories or detect or read its thoughts."
		}, {
			name: "Standing Leap",
			description: "Crokek'toeck's long jump is up to 60 feet and its high jump is up to 30 feet, with or without a running start."
		}
		],
		action: [{
			name: "Bite",
			description: "Melee Weapon Attack: +14 to hit, reach 15 ft, one target. Hit 44 (10d6+9) piercing damage.",
			attack: "Bite|14|10d6+9"
		}, {
			name: "Disgorge Allies (Recharge 6)",
			description: "Crokek'toeck opens its mouth and disgorges 1d4 barlguras, 3d6 gnolls led by 1 gnoll fang of Yeenoghu, 6d6 drenches, or 1d3 vrocks (see the Monster Manual for these creatures' stat blocks). Each creature it disgorges appears in an unoccupied space within 30 feet of Crokek'toeck's mouth, or the closest next unoccupied space."
		}
		],
		environment: "underdark"
	},
	"Fist of Bane": {
		name: "Fist of Bane",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Medium",
		type: "humanoid (lawful evil)",
		speed: "30 ft",
		ac: "18 (chain mail, shield)",
		challenge_rating: "1/2",
		scores: [16, 11, 13, 10, 12, 11],
		passive_perception: "11",
		hp: 22,
		hd: [4, 8],
		languages: "common",
		traits: [{
			name: "Source",
			description: "Baldur's Gate Descent Into Avernus, p. 232"
		}, {
			name: "Tactical Discipline",
			description: "The fist of Bane has advantage on all ability checks and saving throws made during combat."
		}
		],
		action: [{
			name: "Mace",
			description: "Melee Weapon Attack: +5 to hit, reach 5 ft, one target. Hit 6 (1d6+3) bludgeoning damage.",
			attack: "Mace|5|1d6+3"
		}, {
			name: "Longbow",
			description: "Ranged Weapon Attack: +2 to hit, range 150/600 ft, one target. Hit 4 (1d8) piercing damage.",
			attack: "Longbow|2|1d8"
		}
		],
		environment: "underdark"
	},
	"Iron Consul": {
		name: "Iron Consul",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Medium",
		type: "humanoid (lawful evil)",
		speed: "30 ft",
		ac: "16 (chain mail)",
		challenge_rating: "2",
		scores: [17, 11, 16, 12, 15, 16],
		passive_perception: "14",
		hp: 45,
		hd: [6, 8],
		languages: "Common",
		saves: ["", "", "", "", "4", ""],
		skills: "Intimidation +5,Perception +5",
		traits: [{
			name: "Source",
			description: "Baldur's Gate Descent Into Avernus, p. 232"
		}, {
			name: "Tactical Discipline",
			description: "The iron consul has advantage on all ability checks and saving throws made during combat."
		}
		],
		action: [{
			name: "Multiattack",
			description: "The iron consul makes one attack with its spear and can use its Voice of Command ability."
		}, {
			name: "Spear",
			description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft, or range 20/60 ft, one target. Hit 6 (1d6+3) piercing damage, or 7 (1d8+3) piercing damage when used with two hands to make a melee attack.",
			attack: [
				"Spear|5|1d6+3",
				"Spear|7|1d8+3"
			]
		}, {
			name: "Voice of Command",
			description: "The iron consul selects up to two allies within 90 feet of it that can hear its commands. Each ally can immediately use its reaction to make one melee attack."
		}
		],
		environment: "underdark"
	},
	"Black Gauntlet of Bane": {
		name: "Black Gauntlet of Bane",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Medium",
		type: "humanoid (lawful evil)",
		speed: "30 ft",
		ac: "16 (chain mail)",
		challenge_rating: "6",
		scores: [18, 11, 18, 12, 15, 18],
		passive_perception: "15",
		hp: 51,
		hd: [6, 8],
		languages: "Common",
		saves: ["", "", "", "", "5", ""],
		skills: "Intimidation +7,Perception +5",
		traits: [{
			name: "Source",
			description: "Baldur's Gate Descent Into Avernus, p. 232"
		}, {
			name: "Aura of Terror",
			description: "When a hostile creature within 5 feet of the black gauntlet makes an attack roll or a saving throw, it has disadvantage on the roll. Creatures that are immune to the frightened condition are immune to this trait."
		}, {
			name: "Spellcasting",
			description: "The black gauntlet is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It has the following cleric spells prepared:\n \nCantrips (at will): guidance, sacred flame, thaumaturgy\n1st level (4 slots): bane, bless, cure wounds, guiding bolt (see Actions below)\n2nd level (3 slots): blindness/deafness, hold person, silence\n3rd level (2 slots): sending, spirit guardians"
		}, {
			name: "Tactical Disciple",
			description: "The black gauntlet has advantage on all ability checks and saving throws made during combat."
		}
		],
		action: [{
			name: "Multiattack",
			description: "The black gauntlet makes two attacks with its mace."
		}, {
			name: "Mace",
			description: "Melee Weapon Attack: +7 to hit, reach 5 ft, one target. Hit 7 (1d6+4) bludgeoning damage plus 13 (3d8) necrotic damage.",
			attack: "Mace|7|1d6+4+3d8"
		}, {
			name: "Guiding Bolt (1st-Level Spell; Requires a Spell Slot)",
			description: "Ranged Spell Attack: +7 to hit, range 120 ft, one creature. Hit: 14 (4d6) radiant damage, and the next attack roll made against the target before the end of the black gauntlet's next turn has advantage. If the black gauntlet casts this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each level above 1st."
		}
		],
		spells: "guidance,sacred flame,thaumaturgy,bane,bless,cure wounds,guiding bolt,blindness/deafness,hold person,silence,sending,spirit guardians",
		slots: "4,3,2",
		environment: "underdark"
	},
	"Night Blade": {
		name: "Night Blade",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Medium",
		type: "humanoid (chaotic evil)",
		speed: "40 ft",
		ac: "12",
		challenge_rating: "1/4",
		scores: [11, 15, 12, 10, 11, 14],
		hp: 11,
		hd: [2, 8],
		languages: "Common",
		skills: "Intimidation +4,Stealth +6",
		traits: [{
			name: "Source",
			description: "Baldur's Gate Descent Into Avernus, p. 233"
		}, {
			name: "Aura of Murder",
			description: "As long as the night blade is not incapacitated, hostile creatures within 5 feet of it gain vulnerability to piercing damage unless they have resistance or immunity to such damage."
		}
		],
		action: {
			name: "Dagger",
			description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft, or range 20/60 ft, one target. Hit 4 (1d4+2) piercing damage,",
			attack: "Dagger|4|1d4+2"
		}
	},
	"Reaper of Bhaal": {
		name: "Reaper of Bhaal",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Medium",
		type: "humanoid (human, chaotic evil)",
		speed: "40 ft",
		ac: "12",
		challenge_rating: "2",
		scores: [11, 20, 13, 15, 12, 16],
		passive_perception: "13",
		hp: 11,
		hd: [2, 8],
		languages: "Common",
		skills: "Intimidation +5,Perception +3,Persuasion +5,Stealth +9",
		traits: [{
			name: "Source",
			description: "Baldur's Gate Descent Into Avernus, p. 233"
		}, {
			name: "Aura of Murder",
			description: "As long as the reaper is not incapacitated, hostile creatures within 5 feet of it gains vulnerability to piercing damage unless they have resistance or immunity to such damage."
		}, {
			name: "Innate Spellcasting",
			description: "The reaper's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no material components:\n \n1/day each: charm person, disguise self, sanctuary"
		}
		],
		action: [{
			name: "Multiattack",
			description: "The reaper makes two dagger attacks and uses Shroud Self."
		}, {
			name: "Dagger",
			description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft, or range 20/60 ft, one target. Hit 7 (1d4+5) piercing damage.",
			attack: "Dagger|7|1d4+5"
		}, {
			name: "Shroud Self",
			description: "The reaper magically turns invisible until the start of its next turn. This invisibility ends if the reaper makes an attack roll, makes a damage roll, or casts a spell."
		}
		],
		environment: "underdark"
	},
	"Death's Head of Bhaal": {
		name: "Death's Head of Bhaal",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Medium",
		type: "humanoid (human, chaotic evil)",
		speed: "50 ft,",
		ac: "15",
		challenge_rating: "5",
		scores: [20, 20, 20, 14, 13, 16],
		passive_perception: "14",
		hp: 76,
		hd: [8, 8],
		languages: "common",
		skills: "Intimidation +6,Perception +6,Stealth +11",
		traits: [{
			name: "Source",
			description: "Baldur's Gate Descent Into Avernus, p. 233"
		}, {
			name: "Aura of Murder",
			description: "As long as the death's head is not incapacitated, hostile creatures within 5 feet of it gain vulnerability to piercing damage unless they have resistance or immunity to such damage."
		}, {
			name: "Magic Resistance",
			description: "The death's head has advantage on saving throws against spells and other magical effects."
		}
		],
		action: [{
			name: "Multiattack",
			description: "The death's head uses Stunning Gaze and makes two dagger attacks."
		}, {
			name: "Dagger",
			description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft or range 20/60 ft one target. Hit 7 (1d4+5) piercing damage.",
			attack: "Dagger|7|1d4+5"
		}, {
			name: "Stunning Gaze",
			description: "The death's head targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be stunned until the end of its next turn."
		}
		],
		reactions: {
			name: "Unstoppable (3/Day)",
			description: "The death's head reduces the damage it takes from an attack to 0."
		},
		environment: "underdark"
	},
	"Necromite of Myrkul": {
		name: "Necromite of Myrkul",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Medium",
		type: "humanoid (neutral evil)",
		speed: "30 ft",
		ac: "11",
		challenge_rating: "1/2",
		scores: [10, 13, 15, 16, 11, 10],
		passive_perception: "10",
		hp: 13,
		hd: [2, 8],
		skills: "Arcana +5,Religion +5",
		traits: {
			name: "Source",
			description: "Baldur's Gate Descent Into Avernus, p. 234"
		},
		action: [{
			name: "Skull Flail",
			description: "Melee Weapon Attack: +2 to hit, reach 5 ft, one target. Hit 4 (1d8) bludgeoning damage.",
			attack: "Skull Flail|2|1d8"
		}, {
			name: "Claws of the Grave",
			description: "Ranged Spell Attack: +5 to hit, reach 5 ft, one target. Hit 8 (2d4+3) necrotic damage.",
			attack: "Claws|5|2d4+3"
		}
		],
		environment: "underdark"
	},
	"Skull Lasher of Myrkul": {
		name: "Skull Lasher of Myrkul",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Medium",
		type: "humanoid (neutral evil)",
		speed: "30 ft",
		ac: "12",
		challenge_rating: "1",
		scores: [10, 14, 15, 16, 13, 10],
		passive_perception: "11",
		hp: 32,
		hd: [5, 8],
		saves: ["", "", "", "", "3", ""],
		skills: "Arcana +5,Religion +5",
		traits: [{
			name: "Source",
			description: "Baldur's Gate Descent Into Avernus, p. 234"
		}, {
			name: "Spellcasting",
			description: "The skull lasher is a 3rd-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). It has the following wizard spells prepared:\n \nCantrips (at will): mage hand, message, prestidigitation\n1st level (4 slots): detect magic, protection from evil and good,\nray of sickness, shield\n2nd level (2 slots): darkness, misty step"
		}
		],
		action: [{
			name: "Multiattack",
			description: "The skull lasher makes two attacks with its flail."
		}, {
			name: "Iron Skull Flail",
			description: "Melee Weapon Attack: +2 to hit, reach 5 ft, one target. Hit: 4 (1d8) bludgeoning damage plus 7 (2d6) necrotic damage, and the target has disadvantage on all saving throws until the end of the skull lasher's next turn.",
			attack: "Skull Flail|2|1d8+2d6"
		}, {
			name: "Ray of Sickness (1st-level spell; Requires a Spell Slot)",
			description: "Ranged Spell Attack: +5 to hit, range 60 ft, one creature. Hit: 9 (2d8) poison damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned until the end of the skull lasher's next turn. If the skull lasher casts this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
			attack: "Ray of Sickness|5|2d8"
		}
		],
		spells: "mage hand,message,prestidigitation,detect magic,protection from evil and good,ray of sickness,darkness,misty steps",
		slots: "4,2",
		environment: "underdark"
	},
	"Master of Souls": {
		name: "Master of Souls",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Medium",
		type: "humanoid (neutral evil)",
		speed: "30 ft",
		ac: "12",
		challenge_rating: "4",
		scores: [10, 14, 17, 19, 14, 13],
		passive_perception: "12",
		hp: 45,
		hd: [6, 8],
		saves: ["", "", "", "", "4", ""],
		skills: "Arcana +6,Religion +6",
		traits: [{
			name: "Source",
			description: "Baldur's Gate Descent Into Avernus, p. 234"
		}, {
			name: "Grave Magic",
			description: "When the master of souls cast a spell that deals damage, it can change the spell's damage type to necrotic."
		}, {
			name: "Spellcasting",
			description: "The master of souls is a 5th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). It has the following wizard spells prepared:\n \nCantrips (at will): chill touch, mage hand, message, prestidigitation\n1st level (4 slots): burning hands, detect magic, ray of sickness, shield\n2nd level (3 slots): darkness, misty step, scorching ray\n3rd level (2 slots): animate dead, fireball"
		}
		],
		action: [{
			name: "Multiattack",
			description: "The master of souls attacks twice with its flail."
		}, {
			name: "Silver Skull Flail",
			description: "Melee Weapon Attack: +2 to hit, reach 5 ft, one target. Hit: 4 (1d8) bludgeoning damage plus 14 (4d6) necrotic damage, and the target has disadvantage on all saving throws until the end of the master of souls' next turn.",
			attack: "Skull Flail|2|1d8+4d6"
		}, {
			name: "Chill Touch (Cantrip)",
			description: "Ranged Spell Attack: +6 to hit, range 120 ft, one creature. Hit: 13 (2d8) necrotic damage, and the target can't regain hit points until the start of the master of souls' next turn. If the target is undead, it has disadvantage on attack rolls against the master of souls for the same duration.",
			attack: "Chill Touch|6|2d8"
		}, {
			name: "Ray of Sickness (1st-level Spell; Requires a Spell Slot)",
			description: "Ranged Spell Attack: +6 to hit, range 60 ft, one creature. Hit: 9 (2d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned until the end ofthe master of souls' next turn. Ifthe master ofsouls casts this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
			attack: "Ray of Sickness|6|2d8"
		}, {
			name: "Scorching Ray (2nd-level Spell; Requires a Spell Slot)",
			description: "Ranged Spell Attack: +6 to hit, range 120 ft, one target per ray (3 rays if a 2nd-level spell slot is used, 4 rays if a 3rd-level spell slot is used). Hit: 7 (2d6) fire damage per ray.",
			attack: "Scorching Ray|6|2d6"
		}
		],
		spells: "chill touch,mage hand,message,prestidigitation,burning hands,detect magic,ray of sickness,shield,darkness,misty step,scorching ray,animate dead,fireball",
		slots: "4,3,2",
		environment: "underdark"
	},
	"Fiendish Flesh Golem": {
		name: "Fiendish Flesh Golem",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Large",
		type: "construct (unaligned)",
		speed: "30 ft, fly 30 ft (Hover)",
		ac: "12 (natural armor)",
		challenge_rating: "8",
		scores: [20, 9, 20, 7, 10, 5],
		passive_perception: "10",
		hp: 210,
		hd: [20, 10],
		damage_immunities: "lightning, poison, bludgeoning, piercing, sand slashing from non-magical attacks that aren't adamantine or silvered",
		condition_immunities: "charmed, exhaustion, frightened, paralysed, petrified, poisoned",
		senses: "Darkvision 60 ft",
		languages: "Understands the languages of its creator but cant speak.",
		traits: [{
			name: "Source",
			description: "Baldur's Gate Descent Into Avernus, p. 236."
		}, {
			name: "Berserk",
			description: "Whenever the golem starts its turn with 100 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points. If the golem's creator is within 60 feet of the berserk golem, the creator can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 100 hit points or fewer, the golem might go berserk again."
		}, {
			name: "Immutable Form",
			description: "The golem is immune to any spell or effect that would alter its form."
		}, {
			name: "Lightning Absorption",
			description: "Whenever the golem is subjected to lightning damage, it takes no damage and instead gains a number of hit points equal to the lightning damage dealt."
		}, {
			name: "Magic Resistance",
			description: "The golem has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The golem's weapon attacks are magical."
		}
		],
		action: [{
			name: "Multiattack",
			description: "The golem makes two slam attacks."
		}, {
			name: "Slam",
			description: "Melee Weapon Attack: +8 to hit, reach 5 ft, one target. Hit 16 (2d10+5) bludgeoning damage.",
			attack: "Slam|8|2d10+5"
		}
		],
		environment: "underdark"
	},
	"Hellwasp": {
		name: "Hellwasp",
		source: ["Baldur's Gate Descent into Avernus",],
		size: "Large",
		type: "fiend (lawful evil)",
		speed: "10 ft, fly 60 ft (Hover)",
		ac: "19 (natural armor)",
		challenge_rating: "5",
		scores: [18, 15, 12, 10, 10, 7],
		saves: ["", "5", "", "", "3", ""],
		passive_perception: "10",
		hp: 52,
		hd: [8, 10],
		damage_immunities: "fire",
		senses: "darkvision 60 ft",
		languages: "infernal, telepathy 300 ft (with other hellwasps only)",
		traits: [{
			name: "Source",
			description: "Baldur's Gate Descent Into Avernus, p. 236."
		}, {
			name: "Magic Weapons",
			description: "The hellwasp's weapon attacks are magical."
		}
		],
		action: [{
			name: "Multiattack",
			description: "The hellwasp makes two attacks: one with its sting and one with its sword talons."
		}, {
			name: "Sting",
			description: "Melee Weapon Attack: +7 to hit, reach 5 ft, one creature. Hit:8 (1d8+4) piercing damage plus 7 (2d6) fire damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target is also paralyzed. The target can repeat the saving throw at the end ofeach of its turns, ending the effect on itself on a success.",
			attack: "Sting|7|1d8+4+2d6"
		}, {
			name: "Sword Talons",
			description: "Melee Weapon Attack: +7 to hit, reach 5 ft, one target. Hit 11 (2d6+4) piercing damage.",
			attack: "Sword Talons|7|2d6+4"
		}
		],
		environment: "underdark"
	}
}
