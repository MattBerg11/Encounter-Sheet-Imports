var AI = {
	"Chaos Quadrapod": {
		name: "Chaos Quadrapod",
		source: ["Acquisitions Incorporated", 209],
		size: "Large",
		type: "aberration",
		alignment: "Chaotic Evil",
		ac: [14, "Natural Armor", false],
		hp: 52,
		hd: [7, 10],
		scores: [18, 13, 15, 6, 10, 4],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +5, Perception +4",
		passive_perception: "14",
		languages: "",
		challenge_rating: "4",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "blindsight 120 ft (blind beyond this radius)",
		attacks: [{
			name: "Tentacle",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "If the target is a creature, it is grappled (escape DC 14). Until this grapple ends, the target is restrained. The chaos quadrapod can grapple no more than two targets at a time.",
		},
		],
		traits: [{
			name: "Magic Resistance",
			description: "The chaos quadrapod has advantage on saving throws against spells and other magical effects."
		}
		],
		action: [{
			name: "Multiattack",
			description: "The chaos quadrapod makes up to two tentacle attacks."
		}, {
			name: "Chaos Cloud (Recharges after a Short or Long Rest)",
			description: "The chaos quadrapod shoots forth a knot of roiling ethereal light that explodes at a point it can see within 60 feet of it. Each creature in a 20-foot-radius sphere centered on that point must succeed on a DC 14 Charisma saving throw or be stunned until the end of its next turn."
		}
		],
		description: "A cluster of four suckered tentacles with a pulsing mass of ethereal light as its central body, the chaos quadrapod is a creature of the Far Realm, and it channels the anarchic power of that plane as it destroys all in its path. The quadrapod ambulates by flinging its mucus-covered tentacles out and dragging itself along, creating a horrid slurping sound as it advances relentlessly toward its prey.",
	},
	"Clockwork Dragon": {
		name: "Clockwork Dragon",
		source: ["Acquisitions Incorporated", 209],
		size: "Medium",
		type: "construct",
		alignment: "Neutral",
		ac: [16, "Natural Armor", false],
		hp: 22,
		hd: [4, 8],
		scores: [14, 10, 12, 10, 11, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +2, Perception +4",
		passive_perception: "14",
		languages: "Common, Draconic",
		challenge_rating: "1",
		damage_resistances: "",
		damage_immunities: "poison, psychic",
		damage_vulnerabilities: "",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "blindsight 60 ft, darkvision 60 ft",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the clockwork dragon remains motionless, it is indistinguishable from a metal statue."
		}
		],
		action: [{
			name: "Fire Breath (Recharge 5-6)",
			description: "The clockwork dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one."
		}
		],
		description: "These intricately crafted constructs are typically made to reflect the forms of the metallic dragons. Plated in brass, bronze, copper, or faux gold and silver, they are often taken for fine draconic statues at first glance. A clockwork dragon makes a formidable guardian or defender, with its advanced intellect allowing it to be programmed with a wide range of orders, as well as being capable of wholly independent reactions to potential threats. Though most clockwork dragons have a breath weapon that deals fire damage, some might be constructed to deal acid, cold, or lightning damage, depending on their makers' whims.",
	},
	"Keg Robot": {
		name: "Keg Robot",
		source: ["Acquisitions Incorporated", 212],
		size: "Medium",
		type: "construct",
		alignment: "Unaligned",
		ac: [14, "Natural Armor", false],
		hp: 39,
		hd: [6, 8],
		scores: [16, 16, 15, 6, 8, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +1",
		passive_perception: "11",
		languages: "understands Common but can't speak",
		challenge_rating: "2",
		damage_resistances: "bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "poison, psychic",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Acid Squirt",
			ability: 1,
			damage: [1, 8, "acid"],
			range: "Ranged (20/40 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Customizable Storage",
			description: "A keg robot can hold up to three types of liquid payload totaling 12 gallons within its hollow, barrel-shaped body. A full keg robot can make one liquid attack per gallon before the liquid must be refilled. Filling a keg robot takes 2 rounds per gallon. Differing payloads can alter the keg robot's attacks from those presented here."
		}
		],
		action: [{
			name: "Beer Shower",
			description: [
				"The keg robot spews an unnaturally potent beer in a 15-foot cone or in a 30-foot line that is 5 feet wide. Each creature in the area must succeed on a DC 13 Constitution saving throw or be poisoned. While poisoned in this way, a creature has its speed halved by exposure to the potent brew. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"Additionally, the beer shower extinguishes any fires or open flames in its area."
			]
		}, {
			name: "Hot Oil Spray (Recharge 5-6)",
			description: [
				"The keg robot sprays hot oil in a 15-foot cone or in a 30-foot line that is 5 feet wide. Each creature in the area must make a DC 13 Dexterity saving throw. On a failed save, a creature takes 7 (1d8+3) fire damage and falls prone. On a successful save, a creature takes half as much damage and doesn't fall prone.",
				"Any creature affected by the hot oil spray that takes fire damage before the oil dries (after 1 minute) takes an additional 3 (1d6) fire damage, and the oil burns away.",
				"If the oil that remains in the area of the spray is lit, it burns for 1d4 rounds and deals 3 (1d6) fire damage to any creature that enters the area for the first time on a turn or ends its turn there."
			]
		}
		],
		description: "This beer is delicious. But did the spigot really have to be placed in that spot? A keg robot is a stout wood-and-metal construct, vaguely reminiscent of a dwarf wearing a horned helm and possessing a barrel for a body. These constructs are another achievement of the Heuristic Arcane Research and Development (HARD) department of Acquisitions Incorporated. These devices have a number of practical purposes, including the ability to be filled with a variety of substances of use to an adventuring party. Specific models are nominally named for their primary function, including \"ambulatory fermenter,\" \"mobile alchemical dispensary,\" and so forth. But their prominent use as portable beer dispensers has placed the name \"keg robot\" firmly into public consciousness. A keg robot can hold up to three different kinds of liquid in its body cavity, from water and other potables to alchemical substances and lamp oil. Its individual storage compartments can leak, providing drinkable liquids with a unique but mostly safe flavor. These constructs have a rudimentary intellect that allows them to operate independently and discern friend from foe-and which sometimes causes them to operate with a crass sense of humor that has never been fully explained.",
	},
	"Splugoth the Returned": {
		name: "Splugoth the Returned",
		source: ["Acquisitions Incorporated", 213],
		size: "Small",
		type: "humanoid (goblinoid)",
		alignment: "Neutral Evil",
		ac: [15, "Natural Armor", false],
		hp: 27,
		hd: [6, 6],
		scores: [10, 14, 12, 14, 11, 10],
		saves: ["", "", "", "4", "2", ""],
		skills: "Stealth +6",
		passive_perception: "10",
		languages: "Common, Draconic, Elvish, Goblin",
		challenge_rating: "2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Dagger",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Defensive Advantage",
			description: "As long as two or more of Splugoth's allies are within 5 feet of him and are not incapacitated, attack rolls against him are made with disadvantage."
		}, {
			name: "Nimble Escape",
			description: "Splugoth can take the Disengage or Hide action as a bonus action on each of his turns."
		}, {
			name: "Touch of Madness",
			description: "Splugoth has advantage on saving throws against being charmed or frightened."
		}
		],
		action: [{
			name: "Multiattack",
			description: "Splugoth makes two attacks with his dagger."
		}, {
			name: "Word From Beyond (1/day)",
			description: "Splugoth remembers and repeats aloud a few words from a place he entered while walking back from the next world to this one. Each creature of his choice within 30 feet of him that can hear him must succeed on a DC 12 Wisdom saving throw or be stunned until the end of its next turn."
		}
		],
		reactions: {
			name: "Absorb Attack",
			description: "When a creature Splugoth can see hits him with a melee weapon attack, the weapon snags on a pocket of residual resurrectional energy and is caught fast. The attack is negated and the weapon cannot be used until the creature succeeds on a DC 12 Strength (Athletics) check as an action to pull it out of Splugoth. Natural weapons can have their attacks negated by this feature, but can then be retracted automatically at the end of the attacking creature's turn."
		},
		description: "I'm going to give you a piece of advice. Don't trust Acquisitions Incorporated. And never, ever, ever trust Omin Dran. Wait, that's two pieces of advice. You owe me. Sometimes a goblin can't catch a break. First, you fall in with a cult that works for the release of a death god. Then you get taken prisoner by a group of sociopathic adventurers who end up letting you die after you save their sorry lives. One minute, you're a dead goblin named Splug. And then you're alive again, and it seems like a really good idea to play up the drama of resurrection with a cool new name-and a master plan for cold, cold revenge against those who betrayed you. Every once in a while, the (accidentally) capricious and (totally unintentionally) self-centered nature of an Acquisitions Incorporated franchise might incur some collateral damage among followers, hirelings, and staff. When that happens, the collateral damage sometimes inspires some collateral damage of its own. No one is entirely sure how many times Splugoth the Returned has actually returned from the dead. But as the point goblin for the group known as the Six (see \"Factions and Rivals\" in chapter 3), he's made vengeance against Acq Inc and Omin Dran his life's work. And then the work of his next life. And the one after that.",
	},
	"Ancient Deep Crow": {
		name: "Ancient Deep Crow",
		source: ["Acquisitions Incorporated", 211],
		size: "Huge",
		type: "monstrosity",
		alignment: "Unaligned",
		ac: [18, "Natural Armor", false],
		hp: 187,
		hd: [15, 12],
		scores: [23, 16, 23, 10, 15, 19],
		saves: ["", "", "11", "", "7", ""],
		skills: "Perception +7, Stealth +13",
		passive_perception: "17",
		languages: "Deep Crow",
		challenge_rating: "15",
		damage_resistances: "bludgeoning, piercing, slashing from nonmagical attacks",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "blindsight 60 ft, darkvision 120 ft",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 6, "Melee (5 ft)"],
			range: "slashing",
			description: "",
		}, {
			name: "Mandibles",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the ancient deep crow can't use its mandibles on another target.",
		},
		],
		traits: [{
			name: "Magic Resistance",
			description: "The ancient deep crow has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Shadow Stealth",
			description: "While in dim light or darkness, the ancient deep crow can take the Hide action as a bonus action."
		}
		],
		action: [{
			name: "Multiattack",
			description: "The ancient deep crow makes three attacks: one with its mandibles and two with its claws."
		}, {
			name: "Shadow Caw",
			description: "The ancient deep crow releases an ear-splitting caw. Each creature within 60 feet of the crow and able to hear it must make a DC 17 Constitution saving throw. On a failure, a creature takes 10 (3d6) psychic damage."
		}
		],
		legendary_actions: [{
			description: "The monstrosity can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The monstrosity regains spent legendary actions at the start of its turn."
		}, {
			name: "Detect",
			description: "The deep crow makes a Wisdom (Perception) check."
		}, {
			name: "Shadow Caw (Costs 2 Actions)",
			description: "The ancient deep crow uses Shadow Caw."
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The ancient deep crow beats its wings. Each creature within 10 feet of the deep crow must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone. The ancient deep crow can then fly up to half its flying speed."
		}, {
			name: "Regional Effects",
			description: [
				"The region containing an ancient deep crow's lair is transformed by the creature's presence, which creates one or more of the following effects:",
				"Supernatural shadow turns all bright light to dim light in underground regions within 6 miles of the lair.",
				"Intermittent, echoing caws can be heard coming from all directions within 6 miles of the lair.",
				"Subterranean beasts within 1 mile of the ancient deep crow's lair serve as the creature's eyes and ears, alerting it to the presence of intruders and making it all but impossible to surprise the ancient deep crow. If the ancient deep crow dies, these effects fade immediately."
			]
		}
		],
		description: "So little is known of the deep crows that even less is known of their monstrous leviathan cousins, the ancient deep crows. Whether these gargantuan specimens are elder deep crows grown to great size or some higher form that holds lesser deep crows in thrall remains to be determined. Ideally by someone else. Seriously, stay away from these things. Source: Acquisitions Incorporated p. ",
	},
	"Deep Crow": {
		name: "Deep Crow",
		source: ["Acquisitions Incorporated", 210],
		size: "Large",
		type: "monstrosity",
		alignment: "Unaligned",
		ac: [17, "Natural Armor", false],
		hp: 133,
		hd: [14, 10],
		scores: [20, 16, 18, 8, 15, 14],
		saves: ["", "", "8", "", "6", ""],
		skills: "Perception +6, Stealth +11",
		passive_perception: "16",
		languages: "Deep Crow",
		challenge_rating: "9",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "blindsight 30 ft, darkvision 120 ft",
		attacks: [{
			name: "Mandibles",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Target is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the deep crow can't use its mandibles on another target.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Magic Resistance",
			description: "The deep crow has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Shadow Stealth",
			description: "While in dim light or darkness, the deep crow can take the Hide action as a bonus action."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the deep crow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		action: [{
			name: "Multiattack",
			description: "The deep crow makes three attacks: one with its mandibles and two with its claws."
		}
		],
		description: "Terror from Above The deep crow's most fearsome attack is the bite of its mandibles, which can seize and hold almost any creature. Their preferred attack is a snatch-and-grab that sees a deep crow flying off with a living victim before its companions have any chance of counterattack. Provided the doomed prey doesn't struggle, the deep crow takes it back to its lair to be devoured at leisure. Creatures that do struggle might be repeatedly dropped from a height to soften them up a bit. Family Ties: Deep crows live alone for an unknown length of years, emerging from the lair only to hunt, to look for potential threats, and to mate. Mating is a once-in-a-lifetime urge that sees each deep crow involved in the pairing produce a cluster of four to eight eggs. Incubation lasts a year, followed by a year during which the fledgling deep crows stay close by their parent's side. The young then set out to establish lairs of their own. Unknown and Inscrutable: The mindset of these intelligent yet alien creatures is a mystery, but some who have encountered them relate that they are quick to hold a grudge. For years. Of even greater importance, they can teach their chicks to harbor the same resentments, instilling a cross-generational hatred of chosen foes that can last for centuries. A Deep Crow's Lair: Deep crows and ancient deep crows roost in places both deep and warm, favoring sites with access to exposed lava. The spires of volcanic rock the creatures prize as roosts are common in such places, whose ambient warmth provides constant temperature regulation for the creature's eggs.",
	},
	"Donaar Blit'zen": {
		name: "Donaar Blit'zen",
		source: ["Acquisitions Incorporated", 201],
		size: "Medium",
		type: "humanoid (dragonborn)",
		alignment: "Chaotic Good",
		ac: [18, "Plate Armor", false],
		hp: 45,
		hd: [7, 8],
		scores: [17, 8, 14, 10, 10, 16],
		saves: ["", "", "", "", "2", "5"],
		skills: "History +2, Insight +2, Intimidation +5, Persuasion +5",
		passive_perception: "10",
		languages: "Common, Draconic, Orc",
		challenge_rating: "3",
		damage_resistances: "acid",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Whenever Donaar rolls a 1 or 2 on a damage die, he can reroll the die and must use the new roll.",
		}, {
			name: "Whip",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Champion Challenge (Recharges after a Short or Long Rest)",
			description: "As a bonus action, Donaar causes each creature of his choice that he can see within 30 feet of him to make a DC 13 Wisdom saving throw. On a failure, a creature can't willingly move more than 30 feet away from Donaar. This effect ends on the creature if Donaar is incapacitated or dies, or if the creature is moved more than 30 feet away from him."
		}
		],
		spells: [
			"Donaar is a 5th-level spellcaster. His spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). He has the following paladin spells prepared:",
			"1st level (4 slots): command, compelled duel, cure wounds, wrathful smite",
			"2nd level (2 slots): aid, branding smite, lesser restoration, warding bond, zone of truth"
		],

		action: [{
			name: "Multiattack",
			description: "Donaar makes two attacks with his greatsword or his whip."
		}, {
			name: "Acid Vomit",
			description: "Donaar regurgitates acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 7 (2d6) acid damage on a failed save, or half as much damage on a successful one."
		}
		],
		slots: "4, 2",
		description: "Everybody cooooool out! The hulking dragonborn decisionist of the \"C\" Team, Donaar Blit'zen is an icon of brash confidence and warrior chill. He is known for his furious skill in battle, and for his propensity to fall asleep as soon as a fight is done (as well as countless other inopportune times). More immediately notable is the unique physical trait that all members of his clan bear-a stylish tail that is rare and often considered a deformity among dragonborn. As with his tail, an odd quirk of heritage makes Donaar's acid breath more of a signature vomiting, giving rise to a driving paranoia that this regurgitation might damage his teeth. As testaments to his obsession with dental hygiene, Donaar named his greatsword Toothbrush and calls his whip Floss. He carries an actual toothbrush (named Percival) and actual floss at all times. Those who know Donaar quickly come to recognize that the braggadocio that defines him involves a certain amount of artifice. When the young dragonborn left his clan and family to adventure in foreign climes, he realized that doing so provided the perfect opportunity to reinvent himself for folk who had no idea what he was once like. As such, Donaar has learned that no amount of bravado and compensation is too much-provided he leaves no openings for strangers to call him on it. By the same token, strangers quickly come to realize that reinforcing Donaar's self-congratulating sense of draconic entitlement makes it remarkably easy to win his favor. Despite his easily massaged vanity, the dragonborn sometimes shows the occasional streak of selflessness. Most notably, Donaar serves in his off-hours as parttime godfather to a young dragonborn named Chronaar, who had inadvertently imprinted on Donaar as a parental figure while he watched over her while she was in her egg.",
	},
	"Brahma Lutier": {
		name: "Brahma Lutier",
		source: ["Acquisitions Incorporated", 205],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "Neutral",
		ac: [12, "", false],
		hp: 33,
		hd: [6, 8],
		scores: [12, 15, 12, 11, 13, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Performance +5, Persuasion +5",
		passive_perception: "13",
		languages: "Common, Elvish",
		challenge_rating: "2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "War Lute",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "Brahma has advantage on saving throws against being charmed, and magic can't put her to sleep."
		}, {
			name: "Taunt (2/Day)",
			description: "Brahma can use a bonus action to target one creature she can see within 30 feet of her. If the target can hear Brahma, it must succeed on a DC 13 Charisma saving throw or have disadvantage on ability checks, attack rolls, and saving throws until the start of Brahma's next turn."
		}
		],
		spells: [
			"Brahma is a 4th-level spellcaster. Her spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). She has the following bard spells prepared:",
			"Cantrips (at will): mage hand, message, vicious mockery",
			"1st level (4 slots): charm person, heroism, illusory script, sleep, unseen servant",
			"2nd level (3 slots): cloud of daggers, invisibility"
		],
		action: [{
			name: "Song of Domination (3/day)",
			description: "Brahma targets one creature that can see or hear her, which must succeed on a DC 13 Wisdom saving throw or be charmed by her for 1 minute. The target can repeat the save at the end of each of its turns, ending the effect on itself on a success. It has disadvantage on these saves if being charmed by Brahma is something the target openly or secretly desires. For 1 hour after the charm effect ends, the target has disadvantage on Intelligence, Wisdom, or Charisma checks made as part of a contest with Brahma."
		}
		],
		slots: "4, 3",
		spells: "mage hand, message, vicious mockery, charm person, heroism, illusory script, sleep, unseen servant, cloud of daggers, invisibility",
		description: "Formally a former member of the \"B\" Team, Brahma Lutier is a gifted cartographer, spy, and troubadour. Tutored in at least the latter of those vocations by Audra Courtier (wife of Propha Dran and co-owner of the Dran & Courtier inn of Red Larch), Brahma's specialty is a song of domination that is legendarily difficult to resist. Her retirement is said to be connected to a falling out with husband Oak Truestrike, and Brahma has been operating as a solo agent for some time now. Known for a personality that is murderous and cheery in equal part, she utilizes an instrument of dragonborn design in combat. Known as a war lute, this unique item comes replete with hidden storage and powerful weaponry.",
	},
	"K'thriss Drow'b": {
		name: "K'thriss Drow'b",
		source: ["Acquisitions Incorporated", 202],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "Chaotic Neutral",
		ac: [14, "Studded Leather Armor", false],
		hp: 44,
		hd: [8, 8],
		scores: [8, 14, 12, 14, 11, 18],
		saves: ["0", "3", "2", "3", "3", "7"],
		skills: "Arcana +4, Insight +2, Investigation +4, Perception +2, Religion +4",
		passive_perception: "12",
		languages: "Celestial, Common, Elvish, Undercommon; can read all writing",
		challenge_rating: "3",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 120 ft",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Special Equipment",
			description: "K'thriss wears a robe of stars (accounted for in his statistics). The robe allows him to cast the following spells: 6/day: magic missile (7 missiles)"
		}, {
			name: "Awakened Mind",
			description: "K'thriss can telepathically speak to any creature he can see within 30 feet of him, provided the creature can understand at least one language."
		}, {
			name: "Fey Ancestry",
			description: "K'thriss has advantage on saving throws against being charmed, and magic can't put him to sleep. Sunlight Sensitivity. While in sunlight, K'thriss has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Innate Spellcasting",
			description: [
				"K'thriss's innate spellcasting ability is Charisma (spell save DC 14). He can innately cast the following spells, requiring no material components:",
				"At will: dancing lights, disguise self",
				"1/day each: darkness, faerie fire"
			]
		}
		],
		spells: [
			"K'thriss is a 5th-level spellcaster. His spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). He regains his expended spell slots when he finishes a short or long rest, and knows the following warlock spells:",
			"Cantrips (at will): chill touch, eldritch blast, mending, prestidigitation, thorn whip, vicious mockery",
			"3rd level (2 slots): dissonant whispers, fly, hex, misty step, sending, shatter"
		],

		action: {
			name: "Multiattack",
			description: "K'thriss makes two attacks with his sickle. Sickle. Melee Weapon Attack: +4 to hit, reach 5 ft, one target. 4 (1d4+2) slashing damage.",
		},
		slots: "2",
		description: "All things are divided into meat and mouths-but even a mouth is just meat. The drow warlock K'thriss Drow'b cuts a dashing figure as the worldly representative of the Ur-a ravenous, inscrutable, and largely indifferent elder entity from beyond reality. Tapped into this dark power, the \"C\" Team's hoards person sees all existence as a puzzle to unlock, and he is obsessed by the essential lack of meaning and purpose in the structures of so-called \"reality.\" Still, all things considered, he is most often polite and affable. Because after a long adventuring career, he understands that he can't afford to make more enemies. Given his blue skin tone, rumors suggest that K'thriss is of mixed heritage, but no one knows for sure. As a young and doubting adherent of Lolth, he stumbled upon fragments of a relic known as the Black Altar, exposing him to their infinite truths and shocking the drow's hair jet-black. His matching \"beard\" is actually a slow-growing colony of inert spores that K'thriss believes makes him look distinguished. Possessed of alarming and asymmetric crystalline eyes, he often wears a blindfold to spare others his visage, seeing through the eyes of his familiar while he does. Tentacles play a big part in K'thriss's spellcasting, whether wrenching him through the sky when he uses magic to fly, or manifesting in dark, suckered form when he casts spells such as thorn whip. And when enemies hear K'thriss whisper the deep truths of the Ur-typically something about how on a geologic time scale, everyone's desires are meaningless-they remember it. K'thriss's familiar, Ligotti, is a semisapient remnant of a tentacle attack, spawned by the warlock's intercessor patron god. Though entirely alien to the material plane (and often appearing in the form of a staff), Ligotti uses the stat block of a poisonous snake with these changes: It has an Intelligence score of 12 (+2). It has telepathy out to a range of 30 feet.",
	},
	"Môrgæn": {
		name: "Môrgæn",
		source: ["Acquisitions Incorporated", 199],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "Chaotic Neutral",
		ac: [16, "Studded Leather Armor", false],
		hp: 66,
		hd: [12, 8],
		scores: [12, 18, 12, 12, 14, 10],
		saves: ["3", "6", "", "", "", ""],
		skills: "Athletics +3, Insight +4, Nature +3, Perception +4, Stealth +6, Survival +4",
		passive_perception: "14",
		languages: "Common, Draconic, Dwarvish, Giant, Goblin",
		challenge_rating: "4",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Scimitars",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Fey Ancestry",
			description: "Môrgæn has advantage on saving throws against being charmed, and magic can't put her to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Môrgæn's spellcasting ability is Intelligence. She can innately cast the following spells, requiring no material components:",
				"At will: mage hand"
			]
		}
		],
		spells: [
			"Môrgæn is a 9th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). She has the following ranger spells prepared:",
			"1st level (4 slots): alarm, animal friendship, hunter's mark",
			"2nd level (3 slots): pass without trace, spike growth",
			"3rd level (2 slots): conjure animals"
		],

		action: [{
			name: "Multiattack",
			description: "Môrgæn makes three attacks with her scimitars or her longbow."
		}
		],
		slots: "4, 3, 2",
		description: "If I had wanted to kill, I would have killed. The ranger Môrgæn is a renowned tracker and hunter, able to pinpoint-target foes at any range, then vanish into the woods with no one the wiser. Her legendary ability with the longbow and the custom arrows she crafts instills fear into the hearts of her many enemies-and more than a few of her coworkers. Famously, she is the only member of Acquisitions Incorporated known to be paid in advance, lest a missed invoice lead to dire repercussions. A child of the forest, Môrgæn defends the natural world with singular ferocity and an impressive rate of sustained fire. Her core philosophy is that one should shoot first and then ask no questions later. Because what's the point of asking questions when the person you've shot first is already dead? Still, when the situation calls for it, this protector of the woodlands is equally at home on missions of subterfuge and social interaction in the big city, provided her well-known love of ale, wine, and other intoxicants doesn't get the better of her.",
	},
	"Oak Truestrike": {
		name: "Oak Truestrike",
		source: ["Acquisitions Incorporated", 205],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "Neutral Good Neutral Evil",
		ac: [15, "Studded Leather Armor", false],
		hp: 32,
		hd: [5, 8],
		scores: [13, 16, 14, 10, 13, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Nature +3, Perception +3, Performance +2, Stealth +5, Survival +3",
		passive_perception: "13",
		languages: "Common",
		challenge_rating: "2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Hooked Dagger",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Hand Crossbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Fey Ancestry",
			description: "Oak has advantage on saving throws against being charmed, and magic can't put him to sleep."
		}, {
			name: "Keen Hearing and Sight",
			description: "Oak has advantage on Wisdom (Perception) checks that rely on hearing or sight."
		}
		],
		action: [{
			name: "Multiattack",
			description: "Oak makes three attacks with his hooked daggers or his hand crossbow."
		}
		],
		reactions: {
			name: "Return the Favor (3/day)",
			description: "When Oak takes damage from a melee weapon attack, he can make a hooked dagger attack."
		},
		description: "Oak Truestrike is the \"B\" Team's decisionist-and, depending on who you talk to, a reincarnated demigod. (It's a long story.) Those who know him acknowledge his confidence, his arrogance, and his odd ability to engage with others by somehow saying exactly what each listener wants to hear. Whether this is some subtle magical ability or simply grifter's charm, he makes good use of it either wayOak becomes a radically different person with each of his reincarnations, flipping between neutral good and neutral evil. His memories of past lives have been fractured by his many deaths, but he spends each new life accounting for the previous life in a karmic-ledger kind of way. His current incarnation embraces the good side. Mostly. Except for that occasional toxic bitterness. Oh, and the misanthropy. Actually, if you end up hating this guy, it's probably not your fault.",
	},
	"Walnut Dankgrass": {
		name: "Walnut Dankgrass",
		source: ["Acquisitions Incorporated", 204],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "Lawful Neutral",
		ac: [14, "Leather Armor", false],
		hp: 52,
		hd: [8, 8],
		scores: [8, 16, 14, 10, 18, 10],
		saves: ["", "", "", "2", "6", ""],
		skills: "Athletics +1, Insight +6, Perception +6, Stealth +5, Survival +6",
		passive_perception: "16",
		languages: "Common, Druidic, Elvish, Sylvan",
		challenge_rating: "3",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Foremother (+1 Scimitar)",
			ability: 2,
			damage: [1, 6, ""],
			range: "slashing",
			description: "",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Fey Ancestry",
			description: "Walnut has advantage on saving throws against being charmed, and magic can't put her to sleep."
		}, {
			name: "Mask of the Wild",
			description: "Walnut can attempt to hide even when she is only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
		}, {
			name: "Wild Shape (Recharges after a Short or Long rest)",
			description: [
				"As a bonus action, Walnut can assume the shape of a dire wolf. She can stay in this form for 3 hours or until she reverts to her normal form as a bonus action. She automatically reverts if she falls unconscious, drops to 0 hit points, or dies.",
				"While transformed, Walnut's game statistics are replaced by the statistics of the dire wolf, except she retains her alignment, personality, and Intelligence, Wisdom, and Charisma scores.",
				"Her attacks in beast form are magical. While in beast form, Walnut can use a bonus action to expend one spell slot and regain 1d8 hit points per level of the spell slot expended."
			]
		}
		],
		spells: [
			"Walnut is a 7th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). She has the following druid spells prepared:",
			"Cantrips (at will): druidcraft, produce flame, thorn whip",
			"1st level (4 slots): cure wounds, entangle, thunderwave",
			"2nd level (3 slots): flame blade, moonbeam, pass without trace",
			"3rd level (3 slots): call lightning, dispel magic, plant growth",
			"4th level (1 slots): blight, freedom of movement"
		],

		action: [{
			name: "Multiattack",
			description: "Walnut makes two attacks with Foremother or her longbow."
		}
		],
		slots: "4, 3, 3, 1",
		description: "The war ever rages. Growing up in an all-female clan of druids, healers, and rangers, Walnut Dankgrass was drawn to the role of protector from her earliest years. Dedicated to Mielikki, the matriarchal clan known as the Enclave Panax Anima defended the unspoiled wild by word and blade (with the latter option more prevalent by far). But when tragedy struck the enclave, Walnut's clan was destroyed to the last-leaving her with nothing but the all-consuming desire to seek out and destroy those responsible. As a guardian of the wild, Walnut has long held an antipathy toward civilization and anything urban. However, understanding that civilization was the source of the evil that destroyed her people, she makes the city her home now. She embraces her role as the \"C\" Team's documancer, knowing that the city's power-and its weaknesses-can be fully gleaned only from within. Walnut distrusts most folk she meets, except for those whose bearing reflects the matriarchal structure she was once part of. No matter what shape her struggles take, she knows instinctively that her beliefs are right and true-and that she will follow those beliefs to the bitter end.",
	},
	"Auspicia Dran": {
		name: "Auspicia Dran",
		source: ["Acquisitions Incorporated", 208],
		size: "Medium",
		type: "humanoid (half-elf)",
		alignment: "Neutral Good",
		ac: [15, "Chain Shirt", false],
		hp: 52,
		hd: [8, 8],
		scores: [16, 14, 14, 15, 12, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +5, Perception +3",
		passive_perception: "13",
		languages: "Common, Elvish",
		challenge_rating: "2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d10+3) slashing damage",
		}, {
			name: "Light Crossbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "",
		},
		],
		action: [{
			name: "Multiattack",
			description: "Auspicia makes two attacks."
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"Auspicia's innate spellcasting ability is Intelligence. She can innately cast the following spells, requiring no components:",
				"At will: detect thoughts",
				"1/day each: augury"
			]
		}
		],
		description: "The youngest sister of Omin Dran, the half-elf Auspicia Dran had her life torn apart as a child when she was seized by a mysterious creature called the Wandering Crypt. Having spent long years in a kind of dark dream within the crypt, she was saved in the end by her brother Omin's tireless efforts and the valor of his handpicked \"C\" Team. Now returned safely to the world-and with the false Auspicia of the crypt's creation slain-she focuses on trying to discover her own identity and to work through the ongoing complications arising from her ordeal. When Auspicia emerged from the Wandering Crypt, she carried within her a growing level of psionic power. She can't help but read others' minds, but finds that wearing a diamond earring helps tamp that unwitting ability down. This magic has also left her connected to the crypt in a way she doesn't understand, even as it grants her occasional memories of others still trapped there and an awareness of faraway places. In combat, she manifests an instinctive knowledge of events before they happen, often making use of this ability to bring a fight to a standstill that encourages parley. But she has only just begun to explore her full precognitive potential.",
	},
	"Omin Dran": {
		name: "Omin Dran",
		source: ["Acquisitions Incorporated", 196],
		size: "Medium",
		type: "humanoid (half-elf)",
		alignment: "Lawful Neutral",
		ac: [18, "Plate Armor", false],
		hp: 65,
		hd: [10, 8],
		scores: [16, 8, 14, 11, 18, 12],
		saves: ["", "", "", "", "7", "4"],
		skills: "Deception +4, Insight +7, Intimidation +4, Medicine +7, Perception +7, Persuasion +4",
		passive_perception: "17",
		languages: "Common, Dwarvish, Elvish, Goblin",
		challenge_rating: "5",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Maul",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Divine Strike",
			description: "Once on each of his turns when he hits a creature with a weapon attack, Omin can cause the attack to deal an extra 4 (1d8) damage of the same type dealt by the weapon."
		}, {
			name: "Fey Ancestry",
			description: "Omin has advantage on saving throws against being charmed, and magic can't put him to sleep."
		}
		],
		spells: [
			"Omin is a 9th-level spellcaster. His spellcasting ability is Wisdom (spell save DC 15, +7 to hit with spell attacks). He has the following cleric spells prepared:",
			"Cantrips (at will): guidance, sacred flame, spare the dying, thaumaturgy",
			"1st level (4 slots): bless, command, divine favor, shield of faith",
			"2nd level (3 slots): enhance ability, hold person, magic weapon, silence, spiritual weapon",
			"3rd level (3 slots): beacon of hope, crusader's mantle, dispel magic, mass healing word, spirit guardians",
			"4th level (3 slots): death ward, freedom of movement, locate creature, stoneskin",
			"5th level (1 slots): dispel evil and good, flame strike, hold monster, greater restoration, legend lore"
		],
		action: [{
			name: "Multiattack",
			description: "Omin makes two attacks with his maul."
		}
		],
		reactions: {
			name: "War God's Blessing (Recharges after a Short or Long Rest)",
			description: "When a creature within 30 feet of Omin makes an attack roll, but before learning whether it hits or misses, Omin can grant the creature a +10 bonus to that roll."
		},
		slots: "4, 3, 3, 3, 1",
		description: "My duty, first and foremost, is to my shareholders. And I am the only shareholder. Ominifis Hereward Dran spent his formative years in the small waystop of Red Larch, where his mother, Prophetess, ran a popular inn and restaurant. In the brief periods of respite afforded by working the family business, Omin and his sisters, Auspicia and Portentia, were wont to wander the hills and trails around town, dreaming of adventure. But adventure of the wrong kind came calling for the trio one day, when an underground ruin they had often explored-actually a creature called the Wandering Crypt-took Auspicia from the world. Omin Dran built the organization called Acquisitions Incorporated to facilitate and expand his quest to find his true sister, at least in part. For despite his unprecedented success in establishing the market for franchised adventuring across the Sword Coast and beyond, Omin's full measure eludes most people. He is known to be a worshiper of Tymora, ruthless in matters of business, feckless in matters of love, and hopeless in games of chance. Omin is also often accused of being one of the Masked Lords of Waterdeep, though this bit of fancy earns little more than a chuckle in response. And even if the rumor were true, Omin would never leverage such a position for greater financial gain and power. Because that would be wrong...\n",
	},
	"Rosie Beestinger": {
		name: "Rosie Beestinger",
		source: ["Acquisitions Incorporated", 203],
		size: "Small",
		type: "humanoid (halfling)",
		alignment: "Chaotic Good",
		ac: [15, "Unarmored Defense", false],
		hp: 45,
		hd: [10, 6],
		scores: [8, 16, 12, 12, 14, 14],
		saves: ["1", "5", "", "", "", ""],
		skills: "Acrobatics +5, History +3, Intimidation +4, Stealth +5",
		passive_perception: "12",
		languages: "Common, Draconic, Elvish, Halfling",
		challenge_rating: "3",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Staff of the Master (+1 Quarterstaff)",
			ability: 2,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d8+4) bludgeoning damage.",
		}, {
			name: "Unarmed Strike",
			ability: 2,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Rosie's unarmed strikes are magical.",
		}
		],
		traits: [{
			name: "Brave",
			description: "Rosie has advantage on saving throws against being frightened."
		}, {
			name: "Halfling Nimbleness",
			description: "Rosie can move through the space of any creature that is of a size larger than hers."
		}, {
			name: "Evasion",
			description: "If Rosie is subjected to an effect that allows her to make a Dexterity saving throw to take only half damage, she instead takes no damage if she succeeds on the saving throw, and only half damage if she fails. She can't use this trait if she's incapacitated."
		}, {
			name: "Shadow Step",
			description: "When Rosie is in dim light or darkness, she can use a bonus action to teleport 60 feet to an unoccupied space she can see that is also in dim light or darkness. She then has advantage on the first melee attack she makes before the end of the turn."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Rosie's innate spellcasting ability is Wisdom (spell save DC 12). She can innately cast the following spells, requiring no material components:",
				"At will: minor illusion, sacred flame, thaumaturgy",
				"1/day each: command, darkness, darkvision, pass without trace, silence"
			]
		}
		],
		action: [{
			name: "Multiattack",
			description: "Rosie makes three attacks, then makes two unarmed strike attacks."
		}
		],
		reactions: {
			name: "Deflect Missiles",
			description: "In response to being hit by a ranged weapon attack, Rosie deflects the missile. The damage she takes from the attack is reduced by 1d10+9. If the damage is reduced to 0, she catches the missile if it's small enough to hold in one hand and she has a hand free."
		},
		spells: "minor illusion, sacred flame, thaumaturgy, command, darkness, darkvision, pass without trace, silence",
		description: "Well, I have this jar of eyeballs...Weighing in at just under 30 pounds and with a grandmotherly demeanor befitting her advanced age, Rosie Beestinger is easily mistaken for someone on the wrong side of the \"aggressor/victim\" relationship. But this is a mix-up that few people make more than once. Patient and studious, Rosie has schooled more than one malcontent with what the halfling refers to as \"the sauce\"-a whirlwind of kicks and punches to one or the other haunches that can inspire even the toughest half-orc to sprint toward anyplace Rosie isn't. As an increasing number of folk hear the tales of her prowess, the \"C\" Team cartographer's fame among her fellow halflings has become nothing short of legendary. Still, this adoration might be augmented by the sheer number of halflings related to Rosie. She has a daunting number of natural and adopted children, many of whom have followed their mother along the adventuring career track. Rosie's goals have always been more complex than merely seeking after adventure. She has long sought for ultimate meaning in the stars, and to seek justification for her belief that her bonds to her expansive family are reflected in the endless movements and intricate patterns of the sky. However, the Beestinger clan has a less metaphysical reputation in the eyes of many people, as constantly swirling rumors attempt to connect the family to various and nefarious halfling criminal enter prises. Naturally, Rosie knows nothing about any of that. Sure, her nickname is \"Grandmother Night,\" but that probably doesn't mean anything.",
	},
	"Flabbergast": {
		name: "Flabbergast",
		source: ["Acquisitions Incorporated", 200],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "Lawful Neutral",
		ac: [12, "15 with mage armor", false],
		hp: 40,
		hd: [9, 8],
		scores: [10, 14, 10, 17, 13, 13],
		saves: ["", "", "", "5", "3", ""],
		skills: "Arcana +5, Persuasion +3, History +5, Perception +3",
		passive_perception: "13",
		languages: "Common, Draconic, Elvish, Gnomish",
		challenge_rating: "4",
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
		},
		],
		spells: [
			"Flabbergast is a 9th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). He has the following wizard spells prepared:",
			"Cantrips (at will): fire bolt, light, mage hand, prestidigitation",
			"1st level (4 slots): detect magic, mage armor, distort value*",
			"2nd level (3 slots): gift of gab*, suggestion",
			"3rd level (3 slots): fast friends*, lightning bolt",
			"4th level (3 slots): greater invisibility",
			"5th level (1 slots): cone of cold",
			"*New spell introduced in chapter 3"
		]
	},
	slots: "4, 3, 3, 3, 1",
	description: "Not much is known of the mysterious and aloof majordomo of Acquisitions Incorporated Head Office, the mage known as Flabbergast. It's said that he hails from Neverwinter, and that his wealthy family helped erect and carve the famous Dolphin Bridge in that city. Although he detests physical labor, Flabbergast is a bit of a bridge builder in his own way, always striving to bring people together and flexing his diplomatic muscles. A pacifist bureaucrat, he abhors violence, and rarely puts his magical prowess on display. One thing that is known (though it's seldom spoken of) is that Flabbergast once worked for Dran Enterprises, and specifically for Portentia Dran. He carries a certain amount of guilt around being complicit in certain Dran Enterprises' dealings, and helped Acquisitions Incorporated on the side even before taking up an official role with the company. Though Head Office certainly trusts him, others might wonder where his true loyalties lie. Flabbergast's familiar, Mister Snibbly, uses the cat stat block.",

	"Jim Darkmagic": {
		name: "Jim Darkmagic",
		source: ["Acquisitions Incorporated", 197],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "Chaotic Neutral",
		ac: [12, "15 with mage armor", false],
		hp: 40,
		hd: [9, 8],
		scores: [8, 14, 10, 18, 12, 14],
		saves: ["", "", "", "7", "4", ""],
		skills: "Acrobatics +5, Animal handling +4, Arcana +7, History +7, Performance +5",
		passive_perception: "11",
		languages: "Common",
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
			"Jim is a 9th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). He has the following wizard spells prepared:",
			"Cantrips (at will): fire bolt, friends, mage hand, minor illusion, prestidigitation",
			"1st level (4 slots): disguise self, Jim's magic missile*, mage armor",
			"2nd level (3 slots): invisibility, Jim's glowing coin*",
			"3rd level (3 slots): incite greed*, fireball",
			"4th level (3 slots): conjure minor elementals, polymorph",
			"5th level (1 slots): mislead",
			"*New spell introduced in chapter 3"
		],

		action: [{
			name: "Minor Conjuration",
			description: "Jim conjures an inanimate object, no larger than 3 feet on a side and no more than 10 pounds, in his hand or on the ground in an unoccupied space he can see within 10 feet of him. The object is visibly magical, radiating dim light out to 5 feet. It disappears if it takes any damage, after 1 hour, or when Jim uses this feature again."
		}
		],
		slots: "4, 3, 3, 3, 1",
		description: "Have a magical day! James Winifred Darkmagic III is the scion of a mysterious, multiplanar wizarding family. Jim's arcane pedigree has long preceded him, incorporating equally healthy amounts of magical training and innate eldritch prowess. However, despite a natural talent that could have allowed him to make a name for himself as a court wizard, or perhaps \"that strange old man in the village,\" Jim's original penchant was not for the magic of scroll or spell, but for the stage. As an entertainer and purveyor of the \"Jim Darkmagic Experience,\" the legendary mage can often be found in markets and town squares, performing feats of mundane legerdemain. The renown he has earned for these feats is nearly equaled by the reputation that follows him as chief arcanist (and occasional arsonist) for Acquisitions Incorporated. And although his skills as an adventurer and real wizard remain highly sought after, Jim looks forward to a well-earned retirement, at which point he hopes to become a \"real wizard\"-by which he means a fake wizard-full time.",
	},
	"Pendragon Beestinger": {
		name: "Pendragon Beestinger",
		source: ["Acquisitions Incorporated", 206],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "Neutral Evil",
		ac: [12, "15 with mage armor", false],
		hp: 27,
		hd: [5, 8],
		scores: [10, 14, 12, 17, 10, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +5, Investigation +5, Performance +2",
		passive_perception: "10",
		languages: "Common, Draconic, Elvish, Halfling",
		challenge_rating: "2",
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
		}
		],
		traits: [{
			name: "Echo Spell (1/day)",
			description: "Pendragon can cast the spell he cast on his last turn, whose casting time becomes 1 bonus action. This bonus casting uses a spell slot as normal."
		}
		],
		spells: [
			"Pendragon is a 4th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). He has the following wizard spells prepared:",
			"Cantrips (at will): acid splash, light, mage hand, poison spray, shocking grasp",
			"1st level (4 slots): detect magic, mage armor, magic missile, sleep",
			"2nd level (3 slots): blindness/deafness, cloud of daggers, scorching ray"
		],
		slots: "4, 3",
		description: "Able arcanist Pendragon Beestinger took over as \"B\" Team cartographer after Brahma Lutier left the group. In fact, his first assignment was to assist in the team's attempts to apprehend the wandering bard. An adopted child of the \"C\" Team's Rosie Beestinger, Pendragon is his mother's foil in almost every way-including his goal of wanting to mainstream some of the family's rumored criminal interests. Pendragon has, in fact, attempted to kill his mother-and been killed himself in the process. Despite his having been resurrected at Rosie's request, things remain cool between the two. Pendragon was kicked out of wizarding school as a result of the dark rumors following the Beestinger clan. Now a self-taught mage, he specializes in making use of the dangerous spells and weird trinkets he often comes across in his role as a kind of arcane archaeologist. Seeking out the family feeling that an adventuring group provides keeps him in the \"B\" Team, even if that unfortunately comes with Oak Truestrike as a kind of father figure.",
	},
	"Phoenix Anvil": {
		name: "Phoenix Anvil",
		source: ["Acquisitions Incorporated", 206],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "Lawful Neutral",
		ac: [18, "Chain Mail", false],
		hp: 27,
		hd: [5, 8],
		scores: [15, 10, 12, 13, 16, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +4, Performance +3, Persuasion +3, Religion +3",
		passive_perception: "13",
		languages: "Common, Elvish",
		challenge_rating: "2",
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
			description: "Target must succeed on a DC 12 Strength saving throw or be pushed 5 feet.",
		}
		],
		traits: [{
			name: "Divine Display (1/day)",
			description: "As a bonus action, Phoenix causes his shield to flare with divine light. Each creature of his choice within 30 feet of him must succeed on a DC 13 Wisdom saving throw or be blinded for 1 minute. A creature can repeat the save at the end of each of its turns, ending the effect on itself with a success."
		}
		],
		spells: [
			"Phoenix is a 4th-level spellcaster. His spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). He has the following cleric spells prepared:",
			"Cantrips (at will): guidance, light, mending, sacred flame",
			"1st level (4 slots): bane, cure wounds, guiding bolt",
			"2nd level (3 slots): hold person, spiritual weapon"
		],

		action: [{
			name: "Multiattack",
			description: "Phoenix makes two melee attacks."
		}
		],
		slots: "4, 3",
		description: "The \"B\" Team hoards person, Phoenix Anvil is a servant of Waukeen and a soft-spoken sort. Really soft Like, he talks so infrequently that even he might not recognize his own voice. Phoenix comes from the streets, where he grew up a fighter until a job sweeping the steps of a small temple of Waukeen showed him a new path. His hunger for coin as an adventurer is thus guided by his knowledge of what it is to do without. More of an object individual than a people person, Phoenix is obsessively dedicated to the franchise's assets and accounts. Thankfully, he includes his fellow members among those assets, making him fiercely loyal. However, Oak Truestrike is the only team member he's ever really warmed to, which doesn't do either of them any good.",
	},
	"Viari": {
		name: "Viari",
		source: ["Acquisitions Incorporated", 198],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "Chaotic Good",
		ac: [19, "Studded Leather Armor +1", false],
		hp: 65,
		hd: [10, 8],
		scores: [12, 20, 14, 10, 8, 14],
		saves: ["", "8", "", "3", "", ""],
		skills: "Acrobatics +11, Athletics +7, Perception +5, Performance +5, Persuasion +5, Sleight of hand +11, Stealth +8",
		passive_perception: "15",
		languages: "Common, Draconic, Thieves' cant",
		challenge_rating: "5",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "+1 Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Rapier",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
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
		traits: [{
			name: "Evasion",
			description: "If Viari is subjected to an effect that allows him to make a Dexterity saving throw to take only half damage, he instead takes no damage if he succeeds on the saving throw, and only half damage if he fails. He can't use this trait if he's incapacitated."
		}, {
			name: "Second-Story Work",
			description: "Climbing does not cost Viari extra movement. Additionally, when he makes a running jump, the distance he covers increases by 5 feet."
		}, {
			name: "Sneak Attack (1/Turn)",
			description: "Viari deals an extra 14 (4d6) damage when he hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of Viari that isn't incapacitated and Viari doesn't have disadvantage on the attack roll."
		}
		],
		action: [{
			name: "Multiattack",
			description: "Viari makes two attacks with his shortsword and two attacks with his rapier."
		}
		],
		reactions: {
			name: "Uncanny Dodge",
			description: "Viari halves the damage that he takes from an attack that hits him. He must be able to see the attacker."
		},
		description: "I know a story about that...A product of life on a small-town farm, the rogue known as Viari carries fond memories of those childhood days and his loving family. (Well, except for that thing where his parents insist on thinking of his older brother as the successful one.) But he can be quick to show self-consciousness when talking of where he came from, and he never speaks of the name he bore in that former life After quickly rising in the ranks of Acquisitions Incorporated since joining that august team, Viari has come to head what's known as the organization's Stabbing Department. A potent threat in both dueling and earnest debate, he demonstrates an equal flair for planning and forethought, mad combat moves (involving leaping off high places whenever possible), and dark vengeance. Viari's career as an adventurer was nearly cut short during a battle of which the bards still sing. Unleashing a devastating attack with the aptly named Apocalypse Dagger, the rogue destroyed a giant single-handedly- and lost his arm in the process. Although Viari was made bodily whole again in an equally dramatic magical fashion, some of those closest to him have noticed that those miraculous events weigh on him still, perhaps suggesting consequences that only he foresees.\n",
	},
	"Portentia Dran": {
		name: "Portentia Dran",
		source: ["Acquisitions Incorporated", 208],
		size: "Medium",
		type: "monstrosity (shapechanger)",
		alignment: "Lawful Evil",
		ac: [17, "Chain Shirt", false],
		hp: 45,
		hd: [6, 8],
		scores: [12, 18, 16, 13, 12, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +6, Insight +3, Perception +3",
		passive_perception: "13",
		languages: "Common, Elvish",
		challenge_rating: "3",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "charmed",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Shortsword",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Sneak Attack (1/Turn)",
			description: "Portentia deals an extra 14 (4d6) damage when she hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of Portentia that isn't incapacitated and Portentia doesn't have disadvantage on the attack roll."
		}
		],
		action: [{
			name: "Multiattack",
			description: "Portentia makes three melee attacks."
		}, {
			name: "Change Shape",
			description: "Portentia magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than her own, or back into her true form. Any equipment she is wearing or carrying is absorbed or borne by the new form (her choice). In a new form, Portentia retains her game statistics and ability to speak, but her AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and she gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that she lacks."
		}
		],
		description: "Now the owner and driving force behind Dran Enterprises-perhaps Acquisitions Incorporated's most notable rival in the adventuring-for-profit-and-power biz- Portentia Dran is more than she appears to be. Quite literally. The person known as Portentia is actually a changeling, who took the place of the real Portentia before her fifth year. The changeling Portentia can affect a range of dis guises, and has spent long years engaged in a mission of manipulating the members of the Dran family. Years ago, it was Portentia who tricked her sister Auspicia into exploring the depths of the Wandering Crypt. And she would have been successful in arranging for Omin to be claimed by that creature as well if he hadn't fled immediately in search of a weapon to aid his captured sister. Whether in combat or social encounters, Portentia shifts frequently between different forms and mindsets, only some of which are fully humanoid. She fights to maim, with a cruel combat style that emphasizes surprise and painful instruction. She is willing to affect any appearance or attitude to achieve her goals. But what those goals are-for herself and Dran Enterprises alike-remain a secret known only to her.",
	},
	"Prophetess Dran": {
		name: "Prophetess Dran",
		source: ["Acquisitions Incorporated", 208],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "Lawful Good",
		ac: [14, "Breastplate", false],
		hp: 27,
		hd: [5, 8],
		scores: [14, 10, 12, 13, 16, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Medicine +5, Persuasion +3, Religion +5",
		passive_perception: "13",
		languages: "Common, Elvish",
		challenge_rating: "2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Maul",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Divine Eminence",
			description: "As a bonus action, Prophetess can expend a spell slot to cause her melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If Prophetess expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st."
		}, {
			name: "Fey Ancestry",
			description: "Prophetess has advantage on saving throws against being charmed, and magic can't put her to sleep."
		}
		],
		spells: [
			"Prophetess is a 5th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). Prophetess has the following cleric spells prepared:",
			"Cantrips (at will): light, sacred flame, thaumaturgy",
			"1st level (4 slots): cure wounds, guiding bolt, sanctuary",
			"2nd level (3 slots): lesser restoration, spiritual weapon",
			"3rd level (2 slots): dispel magic, spirit guardians"
		],
		slots: "4, 3, 2",
	}
}
