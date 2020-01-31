var WDotMM = {
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
		skills: "Athletics +6, Survival +2",
		damage_immunities: "fire, bludgeoning, piercing, and slashing from metal weapons",
		senses: "darkvision 60ft",
		passive_perception: "10",
		languages: "Common, Ignan",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: ,
			damage: [, , ""],
			range: "",
			description: "Melee Weapon Attack: +6 to hit, reach 5ft, one target. Hit: 11 (2d6+4) piercing damage",
		}, {
			name: "Claws",
			ability: ,
			damage: [, , ""],
			range: "",
			description: "Melee Weapon Attack: +7 to hit, reach 5ft, one target. Hit: 7 (1d6+4) slashing damage",
		},
		],
		traits: [{
			name: "Metal Immunity",
			description: "The lava child can move through metal without hindrance, and it has advantage on attack rolls against any creature wearing metal armor or using a metal shield."
		}
		],
		action: [{
			name: "Multiattack",
			description: "The lava child makes two attacks- one with its bite and one with its claws."
		}
		],
		environment: "Underdark"
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
			ability: ,
			damage: [, , ""],
			range: "",
			description: "Meee Weapon Attack: +7 to hit, reach 10ft, one target. Hit: 10 (1d12+4) bludgeoning damage, and the target is grappled (escape DC 15). The scaladar has two claws, each of which can grapple one target.",
		}, {
			name: "Sting",
			ability: ,
			damage: [, , ""],
			range: "",
			description: "Melee Weapon Attack: +7 to hit, reach 10ft, one target. Hit: 9 (1d10+4) piercing damage plus 11 (2d10) lightning damage.",
		},
		],
		traits: [{
			name: "Lightning Absorption",
			description: "Whenever the scaladar is  subjected to lightning damage, it takes no damage, and its sting deals an extra 11 (2d10) lightning damage until the end of its next turn"
		}, {
			name: "Sadar Link",
			description: "The scaladar knows the location of other scaladar within 100 feet of it, and it can sense when any of them take damage"
		}
		],
		action: [{
			name: "Multiattack",
			description: "The scaladar makes three attacks- two with its claws and one with its sting"
		}
		],
		environment: "Underdark"
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
			ability: ,
			damage: [, , ""],
			range: "",
			description: "Melee Weapon Attack: +5 to hit, reach 5 ft, one creature. Hit: 6 (1d6+3) piercing damage, and the werebat gains temporary hit points equal to the damage dealt. If the target is humanoid, it must succeed on a DC 10 Constitution saving throw or be cursed with werebat lycanthropy",
		}, {
			name: "Scimitar (Humanoid or Hybrid Form Only)",
			ability: ,
			damage: [, , ""],
			range: "",
			description: "Melee Weapon Attack: +5 to hit, reach 5 ft, one creature. Hit: 6 (1d6+3) slashing damage.",
		}, {
			name: "Shortbow (Humanoid or Hybrid Form Only)",
			ability: ,
			damage: [, , ""],
			range: "",
			description: "Ranged Weapon Attack: +5 to hit, range 80/320 ft, one target. Hit: 6 (1d6+3) piercing damage.",
		},
		],
		traits: [{
			name: "Shapechanger",
			description: "The werebat can use its action to polymorph into a Medium bat-humanoid hybrid or into a Large giant bat, or back into its true form, which is humanoid. Its statistics, other than size, are the same in each form. Any equipment it. is wearing or carrying isn't transformed. It reverts to its true form if it dies."
		}, {
			name: "Echolocation (Bat or Hybrid Form Only)",
			description: "The werebat has blindsight out to a range of 60 feet as long as it’s not deafened."
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
		action: [{
			name: "Multiattack (Humanoid or Hybrid Form Only)",
			description: "In humanoid form, the werebat makes two scimitar attacks or two shortbow attacks. In hybrid form, it can make one bite attack and one scimitar attack"
		}
		],
		environment: "Underdark"
	}
}