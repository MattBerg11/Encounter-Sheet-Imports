var MFF = {
	// 18
	"Assassin Bug": {
		name: "Assassin Bug",
		source: ["Mordenkainen's Fiendish Folio", 4],
		size: "Medium",
		type: "monstrosity",
		alignment: "Neutral",
		ac: [14, "Natural Armor", false],
		hp: 55,
		hd: [10, 8],
		scores: [13, 14, 13, 4, 12, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +4",
		passive_perception: "13",
		languages: "understands Druidic but can't speak",
		challenge_rating: "3",
		damage_resistances: "poison",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "paralyzed",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. While poisoned this way, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Ovipositor",
			ability: 1,
			damage: [0, 0, ""],
			range: "Melee (5 ft)",
			description: "Target is infested with 1d3 assassin bug eggs, which immediately hatch into assassin bug maggots. At the start of each of the target's turns, the target takes 1d6 piercing damage per maggot infesting it. Applying fire to the bite wound before the end of the target's next turn deals 1 fire damage to the target and kills these assassin bug maggots. After this time, the maggots are too far under the skin to be burned. If a target infested by assassin bug maggots ends its turn with 0 hit points, it dies as the maggots burrow into its heart and kill it. Any effect that cures disease kills all assassin bug maggots infesting the target."
		}
		],
		traits: [{
			name: "Keen Smell",
			description: [
				"The assassin bug has advantage on Wisdom",
				"(Perception) checks that rely on smell."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The assassin bug makes two bite attacks."
		}
		],
		description: "Assassin bugs plague the frontier and the wilderness, where they seek to hatch their voracious maggots within incapacitated hosts. Resembling giant bluebottle flies, these insectile terrors bear stunted humanoid limbs hinting at the bizarre ceremonies that created them. Dangerous Cultivation: While the exact origins of the assassin bug are uncertain, rumors speak of an ancient sect of druids (possibly in service to Malar or Talos) who cultivated the first of these creatures. However, it remains unknown whether their intent was to create a benign means of breaking down monstrous corpses or a more insidious means of ridding the wilderness of growing humanoid populations. Little information survives regarding this sect, but the assassin bugs' unsettling humanoid-like limbs and limited language ability suggests that the druids might have engaged in self-sacrifice to achieve their creation. Horrific Egg Layers: An assassin bug attacks with a paralytic bite to first incapacitate its prey, making it easy to infect that paralyzed victim with eggs. However, they are able to infest any target as needed, and will do so to eliminate threats. Given their need to lay eggs in a living host, assassin bugs generally flee from constructs and undead. Once deposited within a living host, assassin bug eggs immediately hatch into assassin bug maggots that burrow toward their victim's heart, consuming it and killing the host unless they are quickly destroyed. After gorging themselves on the host's body over several days, the maggots emerge as juvenile assassin bugs, ready to continue their horrid life cycle. An Unnatural Plague: Whole settlements along the frontier have been wiped out by plagues of assassin bugs. Without a quickly organized defense, even a single bug can infest and overwhelm an unprepared population. Desperate rulers discovering that settlements are at risk often order entire neighborhoods or whole villages burned at the first sign of infestation. Within infested areas, guards patrol with burning brands and flaming swords, ready to set suspect dwellings ablaze. Fire is an effective destroyer of assassin bug maggots, and wild creatures observed running headfirst into wildfires often reveal an infestation of assassin bugs, as they immolate themselves in an instinctive effort to rid themselves of this scourge. Monstrous Interactions: Few creatures are able to survive an assassin bug's infestation without immediately being treated with magic or fire. Incredibly hardy monsters such as catoblepas and gorgons have sometimes been observed with deep pockmarks showing where juvenile assassin bugs have emerged from their bodies. Vile creatures such as hags sometimes cultivate assassin bugs to use their maggots in horrid recipes. And trolls have been known to intentionally allow assassin bugs to infest their bodies, which heal against the wounds of a maggot infestation and allow those maggots to be pulled out and consumed.",
	},
	"Blindheim": {
		name: "Blindheim",
		source: ["Mordenkainen's Fiendish Folio", 5],
		size: "Medium",
		type: "humanoid (blindheim)",
		alignment: "Chaotic Neutral",
		ac: [14, "Natural Armor", false],
		hp: 26,
		hd: [4, 8],
		scores: [13, 16, 15, 8, 10, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +3, Perception +2",
		passive_perception: "12",
		languages: "Undercommon",
		challenge_rating: "2",
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
			description: "",
		},
		],
		traits: [{
			name: "Radiant Eyes",
			description: "While its eyes are open, a blindheim projects bright light in a 60-foot cone and dim light for an additional 60 feet. It sets the orientation of this cone at the end of each of its turns. All creatures that can see the blindheim have disadvantage on attack rolls while in the area of bright light and within 15 feet of the blindheim. Creatures with the Sunlight Sensitivity trait that can see the blindheim have disadvantage on attack rolls anywhere in the area of bright light."
		}
		],
		actions: [{
			name: "Radiant Blast",
			description: "Radiant energy erupts from the blindheim's eyes in a 15-foot cone. Each creature in that area must succeed on a DC 12 Constitution saving throw or take 7 (2d6) radiant damage and be blinded until the end of the blindheim's next turn. Creatures with the Sunlight Sensitivity trait have disadvantage on this saving throw."
		}
		],
		description: "These frog-like humanoids have the ability to project intense, blinding light from their eyes. Dwelling on the fringes of the Underdark, blindheims are opportunistic ambushers who can be swayed into service with payment of fresh food and metal weapons. A blindheim's radiant eyes make these creatures a unique source of light in the Underdark depths, and are bright enough to hinder creatures that suffer in the presence of bright light—or to destroy their foes. Searing Eyes: A blindheim projects searing light in a cone from its leering, bulging eyes. The intensity of this light is equivalent to natural sunlight, and can disturb or disrupt many creatures acclimated to the lightless depths. If a blindheim chooses to focus its gaze, this energy can even char flesh and bone. Opportunistic Mercenaries: Blindheims have a fascination with tales and objects from the surface world, particularly plants and other natural items. They gather in the depths of the Underdark near routes used by merchants and other brave travelers. They typically make a cautious approach to stronger creatures, speaking in halting, croaking Undercommon to offer their services in return for fresh food, metal weapons, and trinkets from the surface world. But when they have superior numbers or engage creatures that appear weak, blindheims will often ambush to take what they want. Strange Outcasts: The blindheims speak of an ancient era when their folk dwelled upon the surface. According to their tales, their ancestors stole a piece of the sun, then fled to the Underdark before devouring it and gaining the ability to project radiant energy from their eyes. Blindheims fear that some day the sun will venture underground and have its revenge upon them. When dealing with surface dwellers, they insist that visitors swear to never tell the sun about them, and ask endless questions about the sun's actions, its anger, and its attitudes. But surface folk who attempt to soothe the blindheims' fears often cause these creatures great offense. In the minds of the blindheims, the sun could not possibly have forgotten their great and heroic theft, and anything said to dispel the belief that they remain infamous and feared by all folk of the surface rouses their anger. Pitiable Slaves: Some Underdark creatures, particularly the drow and kuo-toa, raid blindheim settlements in search of slaves. Although the light from these creatures' eyes is a formidable threat to these raiders, a captured blindheim is a useful living weapon.",
	},
	"Crab Folk": {
		name: "Crab Folk",
		source: ["Mordenkainen's Fiendish Folio", 6],
		size: "Large",
		type: "giant",
		alignment: "Neutral",
		ac: [16, "Natural Armor", false],
		hp: 68,
		hd: [8, 10],
		scores: [19, 10, 17, 7, 9, 9],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "9",
		languages: "Common, Giant",
		challenge_rating: "3",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Target is grappled (escape DC 14). Until this grapple ends, the crab folk can automatically hit the target with its claw, and the crab folk can't make attacks with that claw against other targets. The crab folk has two claws, each of which can grapple only one target.",
		},
		],
		traits: [{
			name: "Limited Amphibiousness",
			description: "The crab folk can breathe air and water, but it needs to be submerged once every 24 hours to avoid suffocating."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The crab folk makes two claw attacks."
		}
		],
		description: "The crab folk are the result of a magical ritual used long ago by a mighty green hag to transform her ogre minions into more useful servants. All crab folk that now exist are descended from those original creations, with most living in small, isolated clutches. Though they are content to lead peaceful lives as hunters and gatherers, the magic that created the crab folk sometimes compels them to lash out in fearsome raids when the conditions are right. Aquatic Vassals: Long ago, a green hag gathered a small army of ogres to serve as her enforcers along the desolate coast she had claimed. The hag found the ogres' simple minds and brutal strength useful, but too often, their lack of cunning foiled her plans. Many tumbled into the sea and drowned, too simpleminded and impatient to learn how to swim. Others smashed caravans and crushed their defenders most effectively, but looted cheap, bulky trade goods while leaving valuable smaller treasures behind. Frustrated by her servants, the hag wove a spell to adapt them to the coastal terrain while planting in their minds a few simple commands to help them with their tasks. She gave them the tenacity and toughness of a crab to augment their strength, grasping claws to help them claim the treasures she loved, and a deeply embedded magical compulsion to obedience. Treasure Hungry: The hag had a particular love of silver, and was loath to allow even the smallest bit of that metal to slip through her grasp. Her spell gave the crab folk an insatiable love for silver. When they see it, all crab folk feel an irresistible urge to seize it and carry it back to their lairs. If necessary, they resort to violence to claim the metal. Brutal Raiders: Each year, when the warm summer gives way to the chill of autumn, the crab folk look to the sky for omens. In ancient days, the green hag kept close watch on the fishing villages and towns near her domain. If those settlements grew too strong, she sent her familiar, a cruel seagull, to harangue the crab folk with its cries and drive them to war. Today, by a stroke of bad luck a gull might happen to land near a crab folk lair and utter the right combination of cries to summon up this ancient compulsion. Driven to action, the crab folk rampage along the coast, looting and smashing any settlements they know of or encounter. After six days exactly, their rampage ends, and they return to their humble lives. Deep-Seated Memories: When a coastal raid or a theft of silver is done, crab folk gather the treasures they have won and place them at the feet of a simple effigy of their hag creator, made from driftwood and other scrap and kept in their communal lair. The crab folk have little sense of what drives them, but they understand that the effigy represents a mother and creator who must be obeyed. Legend holds that the green hag preferred to travel in the guise of a regal hobgoblin queen. If the crab folk ever encounter someone who bears a strong resemblance to that form, their magical compulsion might force them to worship that creature, obeying their every command. Source: Mordenkainen's Fiendish Folio p. 6",
	},
	"Dire Corby": {
		name: "Dire Corby",
		source: ["Mordenkainen's Fiendish Folio", 7],
		size: "Medium",
		type: "humanoid (dire corby)",
		alignment: "Neutral Evil",
		ac: [13, "Natural Armor", false],
		hp: 16,
		hd: [3, 8],
		scores: [13, 14, 13, 6, 8, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +4, Perception +3",
		passive_perception: "13",
		languages: "Undercommon",
		challenge_rating: "1/2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "thunder",
		condition_immunities: "frightened",
		senses: "",
		attacks: [{
			name: "Claw",
			ability: 2,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Dire Cacophony",
			description: "Any creature other than a dire corby that starts its turn within 60 feet of a dire corby and can hear it must make a DC 11 Wisdom saving throw. On a failed save, the creature is unable to use the Dash action, cannot climb, or cast spells other than cantrips until the start of its next turn."
		}, {
			name: "Keen Hearing",
			description: "The dire corby has advantage on Wisdom (Perception) checks that rely on hearing."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dire corby makes two claw attacks."
		}
		],
		description: "Heralded by the ominous, deep rumbling of their strange song, great packs of dire corbies range across the Underdark, stripping the tunnels and caverns they traverse of all living things. Even the mightiest creatures of the Underdark hide within fortified lairs or step aside from a dire corby flock, knowing of how these creatures' bizarre song disrupts, disorients, and ultimately overwhelms their prey. Flocks of Doom: Dire corbies wander the Underdark in vast flocks, following predictable patterns of movement like migrating birds. They strip a region bare of the lichens, fungus, and vermin that comprise their diet before moving on to a fresh feeding ground. Underdark travelers prize accurate charts illustrating the movements of these flocks, since trailing a day behind them all but guarantees that the dire corbies will have cleared out many monsters and other threats. Horrid Songs The denizens of the Underdark hear an approaching flock of dire corbies long before it comes into view. As these creatures travel, they hoot, chirp, and howl in maddening cacophony. Their song has a strange magical current to it, causing those who hear it to suffer a stomach-churning vertigo that makes it impossible to move at speed or climb cave walls. Spellcasters suffer as their minds swim, leaving them unable to use anything but their simplest magic. The dire corbies' disorienting song has left countless Underdark creatures and travelers unable to flee as these monsters fall upon them. Strange Escort: Certain Underdark explorers—judged inventive by some and lunatics by others—have learned to travel among the dire corbies. After blocking their ears to avoid the effect of a flock's song, these travelers attempt to mimic the strange hooting and chirping of a dire corby, with these creatures' simple minds making success surprisingly easy. Accepted as part of the flock, a traveler can range across the Underdark escorted by hundreds of humanoid creatures that the other predators of the depths take pains to avoid. Unwitting Explorers: As old pathways become impassable or a flock sustains heavy losses in a particular area, dire corbies will sometimes chart a new migratory course. Depending on their new route, a mob of these creatures might emerge in a dungeon connecting the Underdark and the surface world. Rampaging through such a dungeon, the flock often forces its monstrous inhabitants to flee for safer lairs. When they inevitably emerge on the surface, the dire corbies' voracious appetites cause them to quickly strip their new environment—including any nearby settlements—of life. Source: Mordenkainen's Fiendish Folio p. 7",
	},
	"Eye of Fear and Flame": {
		name: "Eye of Fear and Flame",
		source: ["Mordenkainen's Fiendish Folio", 8],
		size: "Medium",
		type: "undead",
		alignment: "Chaotic Evil",
		ac: [15, "Natural Armor", false],
		hp: 136,
		hd: [16, 8],
		scores: [16, 14, 18, 18, 17, 18],
		saves: ["7", "", "8", "", "7", "8"],
		skills: "Perception +7",
		passive_perception: "17",
		languages: "Common, all languages known by any creature within 30 feet of it",
		challenge_rating: "9",
		damage_resistances: "necrotic, psychic",
		damage_immunities: "poison",
		damage_vulnerabilities: "",
		condition_immunities: "blinded, charmed, exhaustion, frightened, paralyzed, poisoned, stunned",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 12, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Turn Immunity",
			description: "The eye of fear and flame is immune to effects that turn undead."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The eye of fear and flame's innate spellcasting ability is Intelligence (spell save DC 16). It can innately cast the following spells, requiring no components:",
				"At will: detect evil and good, detect thoughts",
				"1/day each: etherealness, true seeing"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The eye of fear and flame makes two claw attacks and uses its Gemstone Eyes."
		}, {
			name: "Gemstone Eyes",
			description: [
				"The eye of fear and flame shoots one of the following magical eye rays, choosing one target it can see within 90 feet of it.",
				"Eye of FearThe target and up to four other creatures of the eye of fear and flame's choice within 10 feet of the target must each succeed on a DC 16 Wisdom saving throw or be frightened for 1 minute. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Eye of FlameThe target must make a DC 16 Dexterity saving throw. On a failed save, the target takes 44 (8d10) fire damage, and if it is a creature or a flammable object, it ignites. On a successful save, the target takes half as much damage and does not ignite. A target that ignites takes 5 (1d10) fire damage at the start of each of its turns until a creature takes an action to douse the fire."
			]
		}
		],
		description: "An eye of fear and flame stalks the world of the living, commanding individuals to perform evil deeds of the undead's choosing or be destroyed. If its commands are not obeyed, an eye of fear and flame throws back its hood to reveal its skull—set with gems of red and black in each eye socket—then attacks. Spectral Visage: An eye of fear and flame resembles a hooded, skeletal humanoid figure. The interior of its hood cannot be seen except as an opaque black void. Ominous tales speak of these creatures prowling city streets in the darkest nights and during times of unease and unrest. It is said that eyes of fear and flame were created by chaotic gods to foment the destruction of lawful creatures, or by lawful gods for the testing of their followers. Rumors state that only twenty of these creatures exist, but much of the truth about them remains unknown. Cruel Puppet Masters: An eye of fear and flame often chooses to appear during times of uncertainty, such as after a group's devastating defeat or when an individual contemplates some momentous decision. The undead seeks to corrupt vulnerable individuals, especially those of lawful or good alignments, by setting tasks that test its targets' moral foundations. A paladin might be ordered to murder an innocent, with the argument that not doing so will result in some greater evil taking place. Ultimately, the success or failure of the task is of less interest to the eye of fear and flame than the instigation of the evil act—and the general spread of chaos and misery that comes with it. Mystic Gemstones: An eye of fear and flame casts its magic powers through its gemstone eyes. In combat, it targets not only its opponents but also innocent bystanders, seeking to cause the greatest amount of confusion and destruction. If the creature is destroyed, these gems can be recovered, though they are treated as dangerous, cursed trophies akin to a demilich's soul gems. Still, they might be sold to certain discerning—and brazen—collectors. Source: Mordenkainen's Fiendish Folio p. 8, Infernal Machine Rebuild",
	},
	"Forlarren": {
		name: "Forlarren",
		source: ["Mordenkainen's Fiendish Folio", 9],
		size: "Medium",
		type: "fey",
		alignment: "Chaotic Neutral",
		ac: [16, "Natural Armor", false],
		hp: 45,
		hd: [6, 8],
		scores: [14, 16, 17, 12, 11, 18],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +5, Deception +8, Stealth +5",
		passive_perception: "10",
		languages: "Common, Sylvan",
		challenge_rating: "3",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Claw",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Gore",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Chromatic Ray",
			ability: 6,
			damage: [1, 6, "lightning"],
			range: "Ranged (60 ft)",
			description: "Plus 3 (1d6) fire damage plus 3 (1d6) cold damage.",
		},
		],
		traits: [{
			name: "Magic Resistance",
			description: "The forlarren has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The forlarren's innate spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring no material components:",
				"At will: expeditious retreat, false life, minor illusion, prestidigitation",
				"3/day each: aid, misty step, Tasha's hideous laughter",
				"1/day each: heal, heat metal, mirror image"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The forlarren makes two claw attacks and one gore attack, or it makes three chromatic ray attacks."
		}
		],
		description: "The descendants of satyrs corrupted by infernal power, forlarren are miserable creatures—an unhappy union between the rigid demands of the Nine Hells and the impulsive hedonism of the Feywild. Driven by dramatic and unpredictable emotions, these feral creatures wreak havoc wherever they go. Corrupted Essence: The devils of Avernus attempted an expedition to the Feywild long ago, and the forlarren are the bitter reminder of that doomed excursion. The archdevil Fierna—co-ruler of Phlegethos, the fourth layer of the Nine Hells—courted a mighty fey in hopes of luring him into trading away his soul. The attempt failed, but not before a troop of satyrs were corrupted by the dark delights of Phlegethos. The satyrs were bound to their fey lord and unable to bargain away their souls. So rather than claim them, Fierna warped and twisted them before returning them to the Feywild, content that the corruption of the satyrs would be adequate compensation for her failure. Bifurcated Souls: The divided nature of the forlarren reflects their origin, marking each one as two entities trapped in a single form. One forlarren might present itself as a friendly, agreeable guide that helps travelers survive the Nine Hells. Another is a howling beast that attempts to destroy all in its path. One will show mercy and empathy peppered with a parental attitude toward strangers. Another is a mirthful sybarite with an unfettered love of food, drink, and romance. When dealing with the forlarren, the only constant is the malleable, chaotic, and temperamental nature they all share. When its diabolical aspect shines through, a forlarren is a cunning, calculating, and brutal enemy. It might use its natural charm to worm its way into earning trust from those it encounters, casting itself as a helpless creature pleading for aid even as it looks for the opportunity to betray and overpower. Or it might seek to dominate the weak, set itself up as a petty lord, and rule over all those who fall into its grasp. A Sinister Cycle: A forlarren in its fey aspect demonstrates self-destructive urges that reflect the inherent tension in its nature. That aspect might drive it to drink itself nearly to death, or to throw itself into caring for others with such relentless energy that it eventually collapses from exhaustion. Unfortunately, when it reaches that breaking point, its diabolical nature asserts itself, and it remains in this scheming, dominating mindset until its plans are foiled and it faces defeat. Then, overwhelmed with fear and shame, the forlarren's diabolical nature fades and its fey aspect emerges once again. Several ballads of the Feywild recount the dramatic fall of valiant forlarren. In all these tales, the hero achieves some great deed only to see their sinister, diabolical side surface. Deceiving their companions during their most daunting trials, the forlarren then betrays those companions at the worst moment possible. Source: Mordenkainen's Fiendish Folio p. ",
	},
	"Fog Giant": {
		name: "Fog Giant",
		source: ["Mordenkainen's Fiendish Folio", 10],
		size: "Huge",
		type: "giant",
		alignment: "Neutral Evil",
		ac: [16, "Chain Mail", false],
		hp: 200,
		hd: [16, 12],
		scores: [27, 10, 22, 12, 16, 16],
		saves: ["", "", "10", "", "7", "7"],
		skills: "Insight +7, Perception +7, Persuasion +7",
		passive_perception: "17",
		languages: "Common, Giant",
		challenge_rating: "11",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [6, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Denizen of the Mist",
			description: "During its turn, the fog giant ignores the effects of fog cloud spells cast by it or other allied fog giants."
		}, {
			name: "Keen Smell",
			description: "The giant has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The giant's innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components:",
				"At will: detect magic, fog cloud, light",
				"3/day each: feather fall, misty step"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The giant makes two greatsword attacks and casts fog cloud."
		}, {
			name: "Petty Tyrant (Recharge 6)",
			description: "The fog giant shouts bloodcurdling threats at the creatures that serve it. Each medium or smaller ally of the giant within 120 feet of it that can see or hear it can use its reaction to make a melee attack."
		}
		],
		description: "The place of cloud giants in the ordning—the set of values and expectations that determines their rank in giant society—is driven by wealth. Those cloud giants foolish or unlucky enough to have their treasure plundered fall to the bottom of the ordning, becoming outcasts known as fog giants. Cut off from their proper place in society, they become raiders and marauders who seek to reclaim their treasure or start a new hoard—by any means possible. Beleaguered Moguls: Though they live as ruthless raiders, fog giants remain tasteful and refined in their desires. They remember their former wealth and power with a bitter mix of longing, regret, and shame, seeking always to replace the grandest treasures they once possessed. Simple coins, gems, or trade goods do nothing to satisfy the giant's desires. Instead, they seek out grand works of art, wondrous jewelry, and beautiful sculptures. Reasonable Offers: Fog giants are powerful warriors, but they prefer to use threats and intimidation to get their way. A fog giant seeks out news and rumors of treasures that appeal to its sense of refinement, then tracks down and treats owners of those treasures to a show of force. Kicking down the gate of a backwater duke's castle, slaying a dozen or more guards, then calling for parley is a typical fog giant strategy—followed by an offer to leave the duke alive in return for a treasure or two. Bandit Kings: Forced to dwell in exile in the lands of the small folk, many fog giants develop an interest in those folk. Using a combination of threats and the promise of vast reward once they return to their proper station, a fog giant lures desperate criminals, cunning bandits, and other raiders into their service in the dismal wilds they inhabit. These giants prefer to work with ambitious humans, renegade elves, and greedy dwarves—all folk they see as properly civilized. They treat orcs, goblinoids, and other \"barbarian\" types as pesky vermin, best killed or driven away. Calculating Masters: When a fog giant accumulates followers, it sets them to the task of rebuilding the giant's collection of wondrous, expensive treasures. Its favored servants are civilized folk who can mingle among the rich and refined. These agents take note of treasures that might interest the fog giant, who then plots heists, raids, and other stratagems to seize the chosen prize. A giant might undertake a carefully planned robbery, making extensive use of magic to cover their presence. Or it might engage in a brute-force raid that involves tearing off the roof of a merchant's home, seizing what they seek, and stalking away before the town watch can rally. Intricate Networks: Clever, ambitious, and greedy, many fog giants build up whole networks of bandits, raiders, spies, and criminals. In some cases, such a network might grow large enough that minions in the lower ranks are ignorant of their leader's true nature. Fog giants who amass such organizations think of themselves as exiled nobles, and often take on such fanciful titles as Duke of Robbery, Baron of Bandits, or Lord of Larceny. Source: Mordenkainen's Fiendish Folio p. 10",
	},
	"Jermlaine": {
		name: "Jermlaine",
		source: ["Mordenkainen's Fiendish Folio", 11],
		size: "Tiny",
		type: "humanoid (jermlaine)",
		alignment: "Neutral Evil",
		ac: [11, "", false],
		hp: 3,
		hd: [1, 4],
		scores: [4, 12, 13, 10, 11, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +5",
		passive_perception: "10",
		languages: "Undercommon",
		challenge_rating: "1/8",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 30 ft",
		attacks: [{
			name: "Club",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Dart",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Lurkers in Shadow",
			description: "Jermlaine are invisible to darkvision."
		}, {
			name: "Magic Resistance",
			description: "The jermlaine has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Vermin Friend",
			description: "The jermlaine can speak to and understand rats and giant rats."
		}, {
			name: "Swarming Rush",
			description: "A jermlaine adds 1d4 to its weapon damage rolls while within 5 feet of another, conscious jermlaine."
		}
		],
		description: "Jermlaine prove that terrible things can come in tiny packages. Their tiny, foot-tall forms can barely contain the cruelty and malevolence that courses through them. Deep in the Underdark, the jermlaine lurk among the tunnels, dungeons, and caverns inhabited by much larger, more dangerous folk. The jermlaine huddle in their small tunnels, avoiding contact with all other creatures unless they can marshal overwhelming numbers. When the odds are in their favor, they strike with a vicious determination that can overwhelm even a heavily armed drow patrol or duergar war party. Hateful Ambushers: Jermlaine hate and resent all larger creatures. They are acutely aware that their small size and weakness in combat makes them prey for countless Underdark creatures. This anger and resentment is channeled into vengeful scheming against creatures that enter their domain. The jermlaine keep careful watch, waiting for just the right moment to fall upon their enemies. When they strike, they emerge from their tunnels to attack in overwhelming waves. In the heat of battle, individual jermlaine gladly throw themselves on their enemies' weapons to clear the way for their allies' attacks. Hidden Threat: The jermlaine's skin is rough, leathery, and textured like stone. Whether by the design of some sympathetic god or through sheer luck, their hide makes them appear invisible to darkvision. Part of the jermlaine's anger comes from attempts to hunt them down and fashion cloaks and other material from their skin. Such experiments have yet to yield a functional magic item, and the jermlaine's hatred of outsiders is driven in part by their assumption that any who meet them seek to harvest them for such experiments. Secret Lairs: Because they are hunted for food or for their skin, jermlaine take care to hide their lairs away from prying eyes. They dig tunnels barely large enough to fit their 1-foot tall frames, making it almost impossible for their enemies to pursue them. Jermlaine dig their tunnels along dungeon hallways and Underdark passages, hiding the entrances to keep intruders out and set up their ambushes. The jermlaine create passages in the floor, along the walls, and in the upper part of the ceiling. When they attack, they spill upon their enemies from every direction in a bid to overwhelm them with sheer numbers. Allied Rodents: The jermlaine can decipher the chitters and squeaks of rats, and in turn can communicate with such rodents. Underdark explorers know to keep a careful watch when encountering signs of a rat infestation. Those rodents, as creatures of the surface world, are rare in the deep Underdark. Their presence invariably signals the presence of a jermlaine colony. Source: Mordenkainen's Fiendish Folio p. 11",
	},
	"Khargra": {
		name: "Khargra",
		source: ["Mordenkainen's Fiendish Folio", 12],
		size: "Small",
		type: "elemental",
		alignment: "Neutral",
		ac: [20, "Natural Armor", false],
		hp: 11,
		hd: [2, 6],
		scores: [13, 10, 14, 5, 11, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Stealth +2",
		passive_perception: "12",
		languages: "Terran",
		challenge_rating: "1/8",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "darkvision 60 ft",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is wearing metal armor or carrying a metal shield, the khargra attaches to that armor or shield. While attached, the khargra doesn't attack. Instead, at the start of each of the khargra's turns, roll a d20. On a 10 or higher, the armor or shield takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. The khargra can detach itself by spending 5 feet of its movement. A creature, including the target, can use its action to detach the khargra."
		},
		],
		traits: [{
			name: "Iron Scent",
			description: "The khargra can scent the location of ferrous metal within 30 feet of it."
		}
		],
		actions: [{
			name: "Earth Phasing",
			description: "Until the end of its next turn, the khargra can fly through nonmagical earth and stone. While doing so, it doesn't disturb the material it moves through. It can end its movement within earth or stone, but if it remains within earth or stone when this ability ends, it takes 14 (4d6) force damage and immediately moves to the nearest unoccupied space."
		}
		],
		reactions: [{
			name: "Opportunistic Hunger",
			description: "When a creature the khargra can see within 5 feet of it hits it with a metal weapon, the khargra can make a bite attack against that creature."
		}
		],
		description: "The bizarre khargra is a flying creature from the Elemental Plane of Earth that devours any metals it encounters. Though normally content to eat raw veins of ore, this creature considers refined and crafted metals to be particularly delectable. Vexing Scavengers: Khargras are native to the Elemental Plane of Earth, where they are considered annoying pests. They arrive in the Material Plane by accident, usually by following an earth elemental or other creature that has been summoned into the world. Khargras can eat and digest most metals, though they prefer iron, copper, and tin above others. They find gold bland and mushy, akin to a flavorless gruel. Though khargras digest metal with ease, organic matter and gems are repugnant to them. If a khargra eats such morsels for whatever reason, they remain lodged in its gullet for a few days of indigestion before the offending material is coughed up. Reluctant Predators: Khargras find living flesh disgusting, and they attack creatures only when driven by hunger and a lack of safer options. After securing a meal of whatever tasty, refined metal their victim carries, they quickly flee—and will flee before that rather than risk death. Stealthy Couriers: A number of clans among the dwarves, duergar, and azers have trained khargras as couriers. Making use of these creatures' odd digestive systems, their masters sprinkle iron dust on a scroll or other organic item that bears a message. The khargra devours the missive, digesting the dust but leaving the message lodged in its digestive tract. Trained over long years and with plentiful treats to learn the direction to different underground strongholds and outposts, the khargra carries its burden to its destination, then coughs up the message on command. Source: Mordenkainen's Fiendish Folio p. 12",
	},
	"Killmoulis": {
		name: "Killmoulis",
		source: ["Mordenkainen's Fiendish Folio", 13],
		size: "Tiny",
		type: "fey",
		alignment: "Neutral",
		ac: [14, "", false],
		hp: 7,
		hd: [2, 4],
		scores: [4, 19, 13, 12, 14, 13],
		saves: ["", "", "", "", "", ""],
		skills: "History +3, Perception +4, Stealth +8",
		passive_perception: "14",
		languages: "Common, Sylvan, telepathy 60 ft",
		challenge_rating: "0",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [1, 0, "bludgeoning"],
			range: "Melee (5 ft)",
			description: ""
		},
		],
		actions: [{
			name: "Blessing of Bountiful Generosity (1/day)",
			description: [
				"The killmoulis targets up to eight creatures within 100 feet of it that it can see. The next time a target finishes a long rest, it regains all spent Hit",
				"Dice and gains 10 temporary hit points."
			]
		}, {
			name: "Curse of Poor Hospitality (1/day)",
			description: "The killmoulis targets up to eight creatures within 100 feet of it that it can see. The next time a target completes a long rest, it does not regain spent Hit Dice."
		}
		],
		description: "A killmoulis can be either a bane or boon to an adventuring party. When kept well fed with tasty treats, this creature is a helpful assistant that mends armor, collects herbs that make the blandest rations into a feast, and turns a dull, uncomfortable campsite into a welcoming refuge. But if a party abuses or neglects a killmoulis, the creature's mean-spirited thirst for revenge can turn even the simplest expedition into a draining ordeal that leaves adventurers tired, dispirited, and sullen. Traveling Fey: A killmoulis arises spontaneously in the Feywild whenever someone commits an act of charity to help a tired or lost traveler. Emerging from the shadows near the site of the deed, the creature takes to the road, wandering to seek out travelers who might have food it can sneak away with in return for the benefits of its magic. Shy and solitary by nature, a killmoulis enjoys watching and listening to folk from distant places that it knows little about. Whether fierce raiders, enterprising merchants, or bold adventurers, all travelers have something interesting to offer a killmoulis. Hungry Helpers: Despite their odd appearance and origins, killmoulis crave the same creature comforts as many folk of the world. They adore sweet candies, fresh fruit, and other delicacies. When a killmoulis encounters a party of travelers, it hides and keeps a careful watch on them. At night, it sneaks into the travelers' camp and looks through their supplies for tasty treats, but will settle for rations, nuts, and other snacks. If it finds them, it quickly snuffles up a single day's worth of food with its long nose. In return, it then uses its magic to enhance the travelers' comfort as they rest. A Bitter Reproach: A killmoulis will follow after any party that has provided it with a tasty snack, slipping into camp each night to gorge itself and pay for its feast with its beneficial magic. But if the travelers attack, interfere with, or try to trap the killmoulis, it places a minor curse on the group and attempts to flee. For the rest of the characters' journey, their rations taste like ash and any camping spots are infested with lice and biting insects. Each character in the party wakes up sore and cramped, as rocks or sharp sticks somehow end up under their bedrolls. Once a killmoulis is angered, it continues to tail a group and visit its curse upon them. Only an offering of fine food and an earnest apology can sooth an angry killmoulis. Without that, these creatures hold a grudge against a group's rude behavior that can last for days. Source: Mordenkainen's Fiendish Folio p. 13",
	},
	"Mite": {
		name: "Mite",
		source: ["Mordenkainen's Fiendish Folio", 14],
		size: "Small",
		type: "fey",
		alignment: "Lawful Evil",
		ac: [12, "", false],
		hp: 7,
		hd: [2, 6],
		scores: [7, 14, 11, 10, 8, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +3, Stealth +6",
		passive_perception: "9",
		languages: "Sylvan, Undercommon",
		challenge_rating: "1/4",
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
		traits: [{
			name: "Vexing Presence",
			description: [
				"While within 30 feet of a mite that can see it, a non-fey creature has disadvantage on Dexterity checks and",
				"Dexterity saving throws."
			]
		}
		],
		actions: [{
			name: "Blood Boiling Hex (Recharge 6)",
			description: "The mite places a hex on a creature it can see within 60 feet of it for 1 minute. If the mite is hidden, using this ability does not reveal its location. While the creature is affected by this hex, whenever it makes an attack roll, an ability check, or a saving throw, it must roll a d6 and subtract the number rolled from the d20 roll. On any turn in which it suffers the effect of the hex, the target can attack an ally as a reaction, ignoring the effect of the hex when it does so. It can then ignore the effect of the hex until the end of its turn."
		}
		],
		description: "Mites are vexing fey creatures that delight in causing minor havoc and playing irritating pranks, making even the coolest, most experienced adventurers prone to outbursts of destructive frustration. When mites are about, even the simplest task can turn into a disaster, and a mild disagreement can quickly become a brawl. Heralds of Frustration: Mites are natives of the Feywild that arise when a creature becomes so irritated with a situation or event that it lashes out in violence. That creature experiences strange dreams the next time it sleeps, then sleepwalks to the nearest tree or other large plant, digs a small hole, screams into the depression, and refills the hole. When it awakes the next morning, the creature feels strangely refreshed. Then on the night of the next new moon, the dug-up earth stirs and a pack of mites emerges. Born of frustration and anger, these creatures exist only to replicate in others the emotions that created them. Nettlesome Pranksters: Mites prefer to live underground, seeking out dungeons and cave warrens where they dig a network of hidden burrows that wrap around existing passages and chambers. They use these hiding spots to watch the comings and goings of monsters and adventurers, setting traps to vex and annoy whenever possible. A trip wire might be set at the top of a flight of stairs to send creatures crashing down. Locks might be jammed with debris, gems replaced with fakes, and prized treasures stolen away. Mites aim to kill only if threatened with direct violence, content to otherwise take joy in watching mundane or simple tasks become frustrating, painful experiences. Fey Influence: When mites are about, creatures become irritable and easily frustrated to the point of violence. For such creatures, every minor failure feels like gross incompetence. Simple tasks become increasingly difficult. Those who undertake those tasks become overwhelmed with a sense of unresolved anger and frustration that demands an outlet—usually violence and destruction. The mites' influence can thus turn even the most orderly group into a mob of surly brawlers. Within even the most tight-knit adventuring party, morale plummets, arguments boil over into fights, and discipline becomes spotty at best. Chaotic Battlegrounds: Dungeons infested with mites for a long period of time devolve into chaotic battlegrounds. Even under the control of a strong leader, any faction in such a dungeon can see its members turn against each other as their frustration and antipathy build. When adventurers enter the dungeon, the mites go to work to exploit the added chaos. They use their magic to drag visitors into their web of anger and frustration, luring explorers deeper into the site and into situations and locations that promise to yield up the most havoc. Source: Mordenkainen's Fiendish Folio p. 14",
	},
	"Needle Spawn": {
		name: "Needle Spawn",
		source: ["Mordenkainen's Fiendish Folio", 16],
		size: "Medium",
		type: "plant",
		alignment: "Chaotic Evil",
		ac: [13, "", false],
		hp: 16,
		hd: [3, 8],
		scores: [13, 17, 12, 6, 13, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +5",
		passive_perception: "11",
		languages: "Sylvan",
		challenge_rating: "1/2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "blinded, deafened, exhaustion",
		senses: "blindsight 30 ft",
		attacks: [{
			name: "Claw",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Needle",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (60 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Close Quarters Shooting",
			description: "The needle spawn does not suffer disadvantage on ranged attacks while within 5 feet of a hostile creature that can see it and isn't incapacitated, if the target of the attack is also within 5 feet of the needle spawn."
		}
		],
		actions: [{
			name: "Needle Volley",
			description: "The needle spawn makes up to 1d6 needle attacks, but it cannot attack the same target more than twice during its turn."
		}
		],
		description: "A wise ranger knows that the sight of a needle spawn is an ill omen, for it heralds the rise of a dreaded needle lord and a war for the soul of a forest. Roving Corpses: Needle spawn are created by needle lords—hulking plant creatures that hail from fey domains wracked by wanton violence. When a needle lord enters a worldly forest, it spreads seed pods wherever it roams. A pod remains dormant until a humanoid dies near it or a humanoid corpse is dragged close by, whereupon the pod burrows into the corpse's decaying flesh and sprouts ropey vines covered in long, sharp needles. The vines wrap around the corpse to animate it, causing it to rise and lurch about like a zombie. Invasive Species: When a great battle is fought in a fey woodland, the plants of the wood sometimes take on the thirst for violence and conquest that propels the fey to war. These plants become needle lords—ogre-shaped masses of thorny vines covered with long, cruel needles that pierce flesh. A needle lord fancies itself a conquering general, wandering in search of a forest to conquer and claim. When it sets its sights on a forest, it first focuses on spreading the seed pods that give rise to its needle spawn vassals. It then prowls the wood in search of weak or defenseless humanoids to kill, converting their corpses into needle spawn to begin growing its army. Unnatural Ally: A needle lord is an implacable foe. Driven only by a desire to conquer and rule, it wages endless war with its army of mobile dead against all creatures it views as a threat to its domination. It might even forge treaties with hobgoblins, kobolds, and other creatures willing to obey it, but it sees any alliance that casts it as a lesser partner as only a temporary measure. The needle lord betrays any allies at the first opportunity, as it believes that only one creature can claim dominion over a forest. Source: Mordenkainen's Fiendish Folio p. 16",
	},
	"Needle Lord": {
		name: "Needle Lord",
		source: ["Mordenkainen's Fiendish Folio", 16],
		size: "Large",
		type: "plant",
		alignment: "Chaotic Evil",
		ac: [15, "Natural Armor", false],
		hp: 45,
		hd: [6, 10],
		scores: [18, 11, 14, 11, 15, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +6, Perception +4, Stealth +2",
		passive_perception: "14",
		languages: "Sylvan",
		challenge_rating: "3",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "blinded, deafened, exhaustion",
		senses: "blindsight 30 ft",
		attacks: [{
			name: "Raking Vine",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "Target is grappled (escape DC 14). Until this grapple ends, the target takes 11 piercing damage at the start of each of its turns. The needle lord has two raking vines, each of which can grapple only one target.",
		}, {
			name: "Needle",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (60 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Needle Defense",
			description: "Each time a creature makes a melee attack against a needle lord, it takes 2 piercing damage. A creature can choose to make an attack with disadvantage to avoid this damage."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The nettle lord makes 2 raking vine attacks."
		}, {
			name: "Needle Volley",
			description: "The needle lord makes up to 1d6 needle attacks, but it cannot attack the same target more than twice during its turn."
		}
		],
		description: "A wise ranger knows that the sight of a needle spawn is an ill omen, for it heralds the rise of a dreaded needle lord and a war for the soul of a forest. Roving Corpses: Needle spawn are created by needle lords—hulking plant creatures that hail from fey domains wracked by wanton violence. When a needle lord enters a worldly forest, it spreads seed pods wherever it roams. A pod remains dormant until a humanoid dies near it or a humanoid corpse is dragged close by, whereupon the pod burrows into the corpse's decaying flesh and sprouts ropey vines covered in long, sharp needles. The vines wrap around the corpse to animate it, causing it to rise and lurch about like a zombie. Invasive Species: When a great battle is fought in a fey woodland, the plants of the wood sometimes take on the thirst for violence and conquest that propels the fey to war. These plants become needle lords—ogre-shaped masses of thorny vines covered with long, cruel needles that pierce flesh. A needle lord fancies itself a conquering general, wandering in search of a forest to conquer and claim. When it sets its sights on a forest, it first focuses on spreading the seed pods that give rise to its needle spawn vassals. It then prowls the wood in search of weak or defenseless humanoids to kill, converting their corpses into needle spawn to begin growing its army. Unnatural Ally: A needle lord is an implacable foe. Driven only by a desire to conquer and rule, it wages endless war with its army of mobile dead against all creatures it views as a threat to its domination. It might even forge treaties with hobgoblins, kobolds, and other creatures willing to obey it, but it sees any alliance that casts it as a lesser partner as only a temporary measure. The needle lord betrays any allies at the first opportunity, as it believes that only one creature can claim dominion over a forest. Source: Mordenkainen's Fiendish Folio p. 16",
	},
	"Norker": {
		name: "Norker",
		source: ["Mordenkainen's Fiendish Folio", 17],
		size: "Small",
		type: "humanoid (goblinoid)",
		alignment: "Chaotic Evil",
		ac: [17, "Natural Armor", false],
		hp: 16,
		hd: [3, 8],
		scores: [13, 10, 13, 8, 8, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +3",
		passive_perception: "9",
		languages: "Common, Goblin",
		challenge_rating: "1/2",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Mace",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The norker makes one mace and one bite attack."
		}
		],
		reactions: [{
			name: "Defensive Rebuke",
			description: "If a creature within 5 feet of the norker makes a melee attack against it, the norker can use its reaction to cause 4 piercing damage to it."
		}
		],
		description: "Cruel, vicious, and lazy even by the standards of goblinoids, norkers are tough humanoids whose long, sharp fangs and thick, bony exoskeletons make them well-suited to the ranks of hobgoblin armies. Unfortunately for their would-be masters, norkers are rebellious, truculent, and prone to indolence unless watched with a keen eye and a hand that is quick to snap a whip. Denizens of the Deep Earth: In the ancient days, norkers were found deep within the earth. They were always few in number, and their god was a cruel, merciless tyrant who kept his children close and the outside world at a distance. This long-lost god may have been Maglubiyet's first conquest and his followers the initial, unwilling recruits into his crusade. Today, hobgoblins chafe at the suggestion that creatures as lazy and untamed as norkers could claim such an honor. For that reason alone, hobgoblin warlords are loath to use these creatures, preferring to keep them around as disposable labor in mines and quarries. Nasty, Brutish, and Short: Even goblins bully and harass norkers, as hobgoblins place the norkers at the bottom of the goblinoid ranks, yet the norkers' ferocity, tough hides, and sharp fangs allow them to rise up and defeat goblinoids that underestimate the norkers' strength and ferocity.. For this reason, norkers are likely encountered away from their brethren. Their natural armor and weapons make them dangerous foes even when relegated to menial labor. Only the dictates of Maglubiyet have prevented the hobgoblins from hunting down and exterminating these creatures. A Legacy of Hatred: Given their ancient defeat and terrible treatment at the hands of other goblinoids, the norkers have developed a peculiar sect of Maglubiyet worshipper. They call him the Great Scourge and believe that mortal life is a cruel test. Those norkers whose skin can withstand any blow and whose fangs sink deep into their enemies will be shepherded to paradise. To the norkers, all other creatures are enemies. Strong creatures can be mollified with servitude and obsequious begging, while weaker ones are victims for their fangs and clubs. Source: Mordenkainen's Fiendish Folio p. 17",
	},
	"Norker War Leader": {
		name: "Norker War Leader",
		source: ["Mordenkainen's Fiendish Folio", 17],
		size: "Small",
		type: "humanoid (goblinoid)",
		alignment: "Chaotic Evil",
		ac: [17, "Natural Armor", false],
		hp: 39,
		hd: [6, 8],
		scores: [16, 10, 15, 12, 11, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +5, Intimidation +3, Perception +2",
		passive_perception: "12",
		languages: "Common, Goblin",
		challenge_rating: "3",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Greataxe",
			ability: 1,
			damage: [1, 12, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		actions: [{
			name: "Multiattack",
			description: "The norker war leader makes one greataxe and one bite attack, and also uses Fight On, You Slugs."
		}, {
			name: "Fight On, You Slugs",
			description: "The norker war leader picks up to three allied goblinoids within 60 feet that can see it. The chosen creatures can each use their reactions to make a single melee attack."
		}
		],
		reactions: [{
			name: "Defensive Rebuke",
			description: "If a creature within 5 feet of the norker makes a melee attack against it, the norker can use its reaction to cause 6 piercing damage to it."
		}
		],
		description: "Cruel, vicious, and lazy even by the standards of goblinoids, norkers are tough humanoids whose long, sharp fangs and thick, bony exoskeletons make them well-suited to the ranks of hobgoblin armies. Unfortunately for their would-be masters, norkers are rebellious, truculent, and prone to indolence unless watched with a keen eye and a hand that is quick to snap a whip. Denizens of the Deep Earth: In the ancient days, norkers were found deep within the earth. They were always few in number, and their god was a cruel, merciless tyrant who kept his children close and the outside world at a distance. This long-lost god may have been Maglubiyet's first conquest and his followers the initial, unwilling recruits into his crusade. Today, hobgoblins chafe at the suggestion that creatures as lazy and untamed as norkers could claim such an honor. For that reason alone, hobgoblin warlords are loath to use these creatures, preferring to keep them around as disposable labor in mines and quarries. Nasty, Brutish, and Short: Even goblins bully and harass norkers, as hobgoblins place the norkers at the bottom of the goblinoid ranks, yet the norkers' ferocity, tough hides, and sharp fangs allow them to rise up and defeat goblinoids that underestimate the norkers' strength and ferocity.. For this reason, norkers are likely encountered away from their brethren. Their natural armor and weapons make them dangerous foes even when relegated to menial labor. Only the dictates of Maglubiyet have prevented the hobgoblins from hunting down and exterminating these creatures. A Legacy of Hatred: Given their ancient defeat and terrible treatment at the hands of other goblinoids, the norkers have developed a peculiar sect of Maglubiyet worshipper. They call him the Great Scourge and believe that mortal life is a cruel test. Those norkers whose skin can withstand any blow and whose fangs sink deep into their enemies will be shepherded to paradise. To the norkers, all other creatures are enemies. Strong creatures can be mollified with servitude and obsequious begging, while weaker ones are victims for their fangs and clubs. Source: Mordenkainen's Fiendish Folio p. 17",
	},
	"Screaming Devilkin": {
		name: "Screaming Devilkin",
		source: ["Mordenkainen's Fiendish Folio", 19],
		size: "Small",
		type: "fey",
		alignment: "Lawful Evil",
		ac: [17, "Natural Armor", false],
		hp: 18,
		hd: [4, 6],
		scores: [4, 16, 13, 5, 8, 11],
		saves: ["", "", "", "", "", ""],
		skills: "",
		passive_perception: "9",
		languages: "Sylvan",
		challenge_rating: "1",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Barbed Tail",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Agile Flier",
			description: "Opportunity attacks against the screaming devilkin have disadvantage while it is flying."
		}, {
			name: "Ceaseless Screaming",
			description: [
				"Any creature other than a screaming devilkin that starts its turn within 30 feet of one or more screaming devilkins and can hear it must make a DC 10",
				"Wisdom saving throw. On a failure the creature is incapacitated until the start of its next turn. On a success, the creature suffers no effect."
			]
		}, {
			name: "Stunted Legs",
			description: "The screaming devilkin has disadvantage on attack rolls and all attack rolls made against it gain advantage while the devilkin isn't flying."
		}
		],
		description: "The ferocious screaming devilkin are bizarre fey creatures spawned by overwhelming moments of panic. Despite their diabolic appearance and name, are denizens of the Feywild. Sages believe that their appearance derives from the primal fear inspired by fiendish creatures, while bards assert that panic, being such a repulsive emotion, is embodied by an equally ugly creature. Screaming Terrors: A screaming devilkin sometimes arises when a creature in the Feywild is overcome with panic to the point that it screams, babbles, and otherwise loses control of its faculties. When such an event occurs, the creature's scream echoes through the Feywild. If it echoes at just the right angle between a rocky outcropping in the dead of night, the scream gains intensity and volume until it reaches a piercing crescendo. At that moment, the stone of the outcropping shatters as a small flock of screaming devilkins erupts from the earth and take to the air. Wicked Tormentors: As befits creatures born from a moment of panic, screaming devilkins love to spread fear and confusion across the world. They gather in small flocks, lurking along lonely forest roads and mountain passes. When their victims approach, the devilkins swoop down upon them to lash them with their long, barbed tails. Their horrid shrieking overwhelms a creature's senses, inspiring a combination of panic, sensory overload, and confusion that leaves creatures reeling. Despite their evil nature, screaming devilkins rarely attack to kill. They much prefer to leave their victims badly injured and shorn of all hope. The devilkin steal treasures, weapons, and supplies, dooming an expedition to a slow death. The devilkin fly near their victims, taunting them with the items they stole. Predators in the area learn that the devilkin's screeching is a sure sign that easy prey draws near. Opportunistic Alliances: A flock of screaming devilkins can appreciate vicious cruelty in other creatures. If they see signs of an evil presence in the land, such as a cruel overlord or a vicious necromancer, they may offer an alliance if the villain offers plenty of opportunities for them to engage in wanton destruction and torment. These creatures serve as horrid mascots of a sort, capering about their new master and following orders to torment those who displease their leader with glee. Source: Mordenkainen's Fiendish Folio p. 19",
	},
	"Ygorl, Lord of Entropy": {
		name: "Ygorl, Lord of Entropy",
		source: ["Mordenkainen's Fiendish Folio", 20],
		size: "Large",
		type: "aberration",
		alignment: "Chaotic Neutral",
		ac: [20, "Natural Armor", false],
		hp: 325,
		hd: [26, 10],
		scores: [24, 18, 24, 20, 16, 26],
		saves: ["14", "", "14", "", "", "15"],
		skills: "Arcana +12, Deception +15, Intimidation +15, Persuasion +15",
		passive_perception: "13",
		languages: "all, telepathy 120 ft",
		challenge_rating: "23",
		damage_resistances: "acid, cold, fire, lightning, thunder",
		damage_immunities: "necrotic, poison; bludgeoning, piercing, slashing from nonmagical attacks",
		damage_vulnerabilities: "",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "truesight 120 ft",
		attacks: [{
			name: "Scythe",
			ability: 1,
			damage: [2, 10, "slashing"],
			range: "Melee (10 ft)",
			description: "Plus 19 (3d12) necrotic damage. Any creature reduced to 0 hit points by this attack dies, with its body and everything it is wearing and carrying, except magic items, exploding into a cloud of ash. The creature can be restored to life only by means of a wish spell.",
		}, {
			name: "Entropic Touch",
			ability: 1,
			damage: [2, 8, "necrotic"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 22 Constitution saving throw or gain one level of exhaustion.",
		},
		],
		traits: [{
			name: "Entropic Aura",
			description: "Each creature that is not a construct or undead that ends its turn within 15 feet of Ygorl takes 14 (4d6) necrotic damage."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If Ygorl fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "Ygorl has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"Ygorl's innate spellcasting ability is Charisma (spell save DC 23, +15 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
				"At will: blight, blink, chaos bolt*, detect magic, fly, shield",
				"3/day each: circle of death, enervation*, symbol (discord only)",
				"2/day each: finger of death, harm, mental prison*",
				"1/day each: power word kill, power word stun, symbol (death only), weird",
				"* Spell from Xanathar's Guide to Everything"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "Ygorl makes three attacks: two with its scythe, and one with its Entropic Touch."
		}, {
			name: "Summon Slaadi (1/Day)",
			description: "Ygorl summons 1d4+1 death slaadi. A summoned slaad appears in an unoccupied space within 60 feet of Ygorl, acts as an ally of Ygorl, and can't summon other slaadi. It remains for 1 minute, until it or Ygorl dies, or until Ygorl dismisses it as an action."
		}, {
			name: "Teleport",
			description: "Ygorl teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
		}
		],
		legendary_actions: [{
			description: "Ygorl, can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Ygorl, regains spent legendary actions at the start of its turn."
		}, {
			name: "Scythe",
			description: "Ygorl makes one attack with its scythe."
		}, {
			name: "Teleport",
			description: "Ygorl uses its Teleport action."
		}, {
			name: "Call the Void (Costs 3 Actions)",
			description: "Each creature that is not a construct or undead within 30 feet of Ygorl must make a DC 22 Constitution saving throw against the lord of entropy's attempt to unmake life, taking 42 (12d6) necrotic damage on a failed save, or half as much damage on a successful one. Ygorl then regains a number of hit points equal to half the total damage taken by all affected creatures."
		}
		],
		description: "The enigmatic being known as Ygorl was one of the first slaadi created after Primus unleashed the Spawning Stone upon Limbo. A powerful being suffused with entropic power, Ygorl delights in the act of unmaking and bringing chaos to any ecosystem it visits. Lesser slaadi follow close behind the lord of entropy, delighting and furthering the destruction it brings. Cycles of Chaos: As a personification of entropy, Ygorl is cursed to see things as they will become—broken and consumed by the march of eternity. It has no sense of empathy or compassion, driven only to unmake so that the resulting base elements of reality can fuel the multiverse's endless cycles of creation and destruction. Speaking to Ygorl is a taxing endeavor, as the lord of entropy channels its thoughts as a stream of consciousness that is both disturbing and difficult to follow. Mortal creatures that have attempted to parley with Ygorl are known to have been driven to madness in the process. Death and Destruction: Ygorl's most notable possession is an adamantine scythe with the slaad word for death inscribed across the blade, which can reduce living creatures to ash. The lord of entropy also bears a set of obsidian tablets slung about its waist, upon which it inscribes destructive runes. Living creatures wither and rot within the entropic energy emanated by Ygorl's magic. Source: Mordenkainen's Fiendish Folio p. 20",
	},
	"Xill": {
		name: "Xill",
		source: ["Mordenkainen's Fiendish Folio", 21],
		size: "Medium",
		type: "monstrosity",
		alignment: "Lawful Evil",
		ac: [16, "Natural Armor", false],
		hp: 33,
		hd: [6, 8],
		scores: [14, 18, 13, 11, 14, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Acrobatics +6, Athletics +4, Perception +4",
		passive_perception: "14",
		languages: "Common",
		challenge_rating: "3",
		damage_resistances: "",
		damage_immunities: "",
		damage_vulnerabilities: "",
		condition_immunities: "",
		senses: "",
		attacks: [{
			name: "Claw",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		},
		],
		traits: [{
			name: "Ethereal Jaunt",
			description: "As a bonus action, a xill can magically shift from the Material Plane to the Ethereal Plane, or vice versa."
		}, {
			name: "Poison Stinger",
			description: "The xill injects poison into one creature it hit with its claws this turn. The chosen creature must make a DC 11 Constitution saving throw, with disadvantage if the xill hit it more than once this turn, taking 14 (4d6) poison damage on a failed save, or half as much on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned this way."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The xill makes four claw attacks."
		}
		],
		description: "Deep within the Ethereal Plane are the demiplanes, miniatures worlds built by powerful archmages and other mighty entities to serve as a private domain. Each demiplane is a designed realm, built for a specific purpose. Some are fortresses, designed to keep wanderers from the material world away. Others are far more sinister, dark realms where evil dreams take root and become ghastly realities. Such is the realm that spawned the xill, horrific, insectoid creatures created long ago to serve an ancient, evil master. Gruesome Collectors: Xills are horrid, four-armed creatures that seem to be a cross between a lizard and insect. They emerge from the Ethereal Plane to fall upon their victims with their vicious claws, but their aim is no to kill. Instead, a xill injects its victim with a paralytic poison. When their the poison overwhelms their target, the xill snatches the victim and returns to the Ethereal. The ultimate fate of unfortunates carried off in this manner is not known, but plenty of speculation surrounds the xills' true nature and the demiplane that spawned them. An Ancient Remnant: A variety of theories attempt to explain the xills and their origin. The one found most plausible by scholars of the planes concerns the enigmatic wizard Keraptis. Supposedly, Keraptis long ago crafted a demiplane to serve as personal domain from which he could dispatch his servitors to collect the powerful artifacts he longed to stockpile. The xills were his creation, servitors who could slip to and from the Ethereal plane and steal any artifact or kidnap any person he wished to collect. A Mysterious Task: Little has been heard of Kerpatis. Save for the recent theft of three mighty items in the World of Greyhawk, he has remained primarily a figure of myth, rumor, and legend. As an inveterate collector of magic items, though, his demiplane is likely filled with powerful artifacts long thought lost to the multiverse. If the story is true, his demiplane is undoubtedly guarded by strange traps and logic-defying puzzles, along with a legion of brainwashed servitors and countless xills. As to the fate of the individuals seized by the xills, they perhaps form the bulk of Kerpatis's followers. Brainwashed by his magic and set to guard his many dungeons, these fanatics are among his most dangerous followers. It is telling that the xills rarely kidnap commoners. Instead, they target young but promising adventurers, those whose natural talent and aptitude point to a bright future but whose skills have not yet grown sharp enough to repel a dedicated assault. Source: Mordenkainen's Fiendish Folio p. 21",
	}
}
function getName() {
	for (key in MFF) {
		console.log(MFF[key].name);
	}
}
getName();