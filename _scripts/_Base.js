//This would not be possible without the invaluble advice from MorePurpleMoreBetter! I highly recommend you check out his work @ https:reddit.com/r/mpmb

//Doc Open

//Set highlight preference on Doc\Open
app.runtimeHighlight = this.getField("HighlightRadio").value;
function highlightSelect(value) {
	if (value == "On") {
		app.runtimeHighlight = true;
	} else if (value == "Off") {
		app.runtimeHighlight = false;
	}
}

//Version & Footer
var sheetVersion = "v1.62";
this.getField("Version").value = "Encounter Sheet " + sheetVersion;
this.getField("Note").value = "Have a suggestion? Let me know by hitting the 'Contact Me!' button above!";

function applyMonster(input, fieldNum) {
	//
	//(<Monster name>, 1)
	if (!input) {
		return;
	}

	var fieldName = "Monster" + fieldNum;

	//Clear and reset form section for new monster
	resetForms("Monster" + fieldNum);

	//find the monster in the JSON object and don't do anything if it isn't found
	var choice = this.getField("List.Monster" + fieldNum).value;
	var monster = bookArray[choice][0][input];

	//Start the magic!
	this.getField(fieldName + ".Name").value = monster.name;
	this.getField(fieldName + ".AC").value = monster.ac[0];
	this.getField(fieldName + ".ArmorType").value = ((monster.ac[1] != "") ? monster.ac[1] : "None");
	if (monster.ac[2] == true) {
		this.getField(fieldName + ".Shield").display = display.hidden;
		this.getField(fieldName + ".Shield2").display = display.visible;
	} else {
		this.getField(fieldName + ".Shield").display = display.visible;
		this.getField(fieldName + ".Shield2").display = display.hidden;
	}
	this.getField(fieldName + ".Proficiency").value = "+" + challengeArray[monster.challenge_rating][1];
	this.getField(fieldName + ".Perception").value = monster.passive_perception;
	this.getField(fieldName + ".Health").value = monster.hp;
	this.getField(fieldName + ".HitDice").value = monster.hd[0] + "d" + monster.hd[1];
	this.getField(fieldName + ".Speed").value = monster.speed;
	this.getField(fieldName + ".Source").value = monster.source[0] + ", " + monster.source[1];

	// Ability Scores
	// scores : [27, 10, 22, 12, 16, 16], //[Str, Dex, Con, Int, Wis, Cha]
	// saves : ["", "", 10, "", 7, 7], //[Str, Dex, Con, Int, Wis, Cha]
	var Strength = monster.scores[0];
	var Dexterity = monster.scores[1];
	var Constitution = monster.scores[2];
	var Intellect = monster.scores[3];
	var Wisdom = monster.scores[4];
	var Charisma = monster.scores[5];
	var StrSave = ((monster.saves[0] != "") ? "+" + monster.saves[0] : posNeg(modArray[Strength]));
	var DexSave = ((monster.saves[1] != "") ? "+" + monster.saves[1] : posNeg(modArray[Dexterity]));
	var ConSave = ((monster.saves[2] != "") ? "+" + monster.saves[2] : posNeg(modArray[Constitution]));
	var IntSave = ((monster.saves[3] != "") ? "+" + monster.saves[3] : posNeg(modArray[Intellect]));
	var WisSave = ((monster.saves[4] != "") ? "+" + monster.saves[4] : posNeg(modArray[Wisdom]));
	var ChaSave = ((monster.saves[5] != "") ? "+" + monster.saves[5] : posNeg(modArray[Charisma]));

	// Skills
	this.getField(fieldName + ".Str").value = Strength;
	this.getField(fieldName + ".Dex").value = Dexterity;
	this.getField(fieldName + ".Con").value = Constitution;
	this.getField(fieldName + ".Int").value = Intellect;
	this.getField(fieldName + ".Wis").value = Wisdom;
	this.getField(fieldName + ".Cha").value = Charisma;

	// Modifiers
	this.getField(fieldName + ".StrMod").value = posNeg(modArray[Strength]);
	this.getField(fieldName + ".DexMod").value = posNeg(modArray[Dexterity]);
	this.getField(fieldName + ".ConMod").value = posNeg(modArray[Constitution]);
	this.getField(fieldName + ".IntMod").value = posNeg(modArray[Intellect]);
	this.getField(fieldName + ".WisMod").value = posNeg(modArray[Wisdom]);
	this.getField(fieldName + ".ChaMod").value = posNeg(modArray[Charisma]);

	// Saves
	this.getField(fieldName + ".StrSave").value = StrSave;
	this.getField(fieldName + ".DexSave").value = DexSave;
	this.getField(fieldName + ".ConSave").value = ConSave;
	this.getField(fieldName + ".IntSave").value = IntSave;
	this.getField(fieldName + ".WisSave").value = WisSave;
	this.getField(fieldName + ".ChaSave").value = ChaSave;

	// Attack Info
	for (a = 0; a < monster.attacks.length; a++) {
		this.getField(fieldName + ".Attack" + a).value = monster.attacks[a].name;
		this.getField(fieldName + ".AttackDamage" + a).value = attackDamage(monster, a);
		this.getField(fieldName + ".ToHit" + a).value = toHit(monster, a);
		this.getField(fieldName + ".AttackRange" + a).value = monster.attacks[a].range;
		if (monster.attacks[a].description) {
			if (monster.attacks[a].description.length > 250) {
				// When I put initiative to a separate page, possibly rework that >X characters changes the font size rather than an overflow page
				this.getField(fieldName + ".AttackInfo" + a).value = "Refer to Overflow Page for description";
				this.getField(fieldName + ".OverflowAttack" + a).value = monster.attacks[a].description;
			} else {
				this.getField(fieldName + ".AttackInfo" + a).value = monster.attacks[a].description;
			}
		}
	}
	this.getField(fieldName + ".MonsterInfo").value = compileInfo(monster);
	this.getField(fieldName + ".XP").value = removeCommas(challengeArray[monster.challenge_rating][0]);
	this.getField(fieldName + ".Features").value = ((compileFeatures(monster) != "") ? compileFeatures(monster) : "");
}

function compileInfo(monster) {
	var XP = "",
	Type = "",
	Languages = "",
	Alignment = "",
	Size = "",
	Resistances = "",
	Immunities = "",
	Vulnerabilities = "",
	ConImmune = "";

	var XP = "\u2756CR & EXP: " + monster.challenge_rating + ", " + challengeArray[monster.challenge_rating][0];
	if (monster.type) {
		var Type = "\n\u2756Type: " + monster.type;
	}
	if (monster.languages) {
		var Languages = "\n\u2756Languages: " + monster.languages;
	}
	var Alignment = "\n\u2756Alignment: " + monster.alignment;
	var Size = "\n\u2756Size: " + monster.size;

	if (monster.damage_resistances) {
		var Resistances = "\n\u2756Resistances: " + monster.damage_resistances;
	}
	if (monster.damage_immunities) {
		var Immunities = "\n\u2756Immunities: " + monster.damage_immunities;
	}
	if (monster.damage_vulnerabilities) {
		var Vulnerabilities = "\n\u2756Vulnerabilities: " + monster.damage_vulnerabilities;
	}
	if (monster.condition_immunities) {
		var ConImmune = "\n\u2756Condition Immunities: " + monster.condition_immunities;
	}
	return XP + Type + Languages + Alignment + Size + Resistances + Immunities + Vulnerabilities + ConImmune;
}

function compileFeatures(monster) {
	var Skills = "",
	Spells = "",
	Traits = "",
	Actions = "",
	Reactions = "",
	Legendary = "";

	if (monster.skills) {
		var Skills = "\u2756Skills\u2756\n\u25CF " + monster.skills + "\n";
	}
	if (monster.spells) {
		for (var i = 0; i < monster.spells.length; i++) {
			Spells += "\u2022 " + monster.spells[i] + "\n";
		}
		var Spells = "\u2756Spells\u2756\n" + Spells;
	}

	if (monster.traits) {
		var TraitSetup = "";

		for (var i = 0; i < monster.traits.length; i++) {

			if (monster.traits[i].description.length > 1 && monster.traits[i].description instanceof Array) {
				var MultiDescSetup = "";
				var TraitName = "\n\u25CF " + monster.traits[i].name + "\u25CF ";
				// Now set the description lines
				for (var j = 0; j < monster.traits[i].description.length; j++) {
					MultiDescSetup += "\n\u25CF " + monster.traits[i].description[j];
				}
				var SingleTrait = TraitName + MultiDescSetup;
				TraitSetup += SingleTrait;
			} else {
				var SingleTrait = "\n\u25CF " + monster.traits[i].name + ": " + monster.traits[i].description;
				TraitSetup += SingleTrait;
			}

		}
		var Traits = "\u2756Traits\u2756" + TraitSetup + "\n";
	}

	if (monster.actions) {
		var ActionSetup = "";
		for (var i = 0; i < monster.actions.length; i++) {
			if (monster.actions[i].description.length > 1 && monster.actions[i].description instanceof Array) {
				var MultiDescSetup = "";
				var ActionName = "\n\u25CF " + monster.actions[i].name + "\u25CF ";
				// Now set the description lines
				for (var j = 0; j < monster.actions[i].description.length; j++) {
					MultiDescSetup += "\n\u25CF " + monster.actions[i].description[j];
				}
				var SingleAction = ActionName + MultiDescSetup;
				ActionSetup += SingleAction;
			} else {
				var SingleAction = "\n\u25CF " + monster.actions[i].name + ": " + monster.actions[i].description;
				ActionSetup += SingleAction;
			}

		}
		var Actions = "\u2756Actions\u2756" + ActionSetup + "\n";
	}

	if (monster.reactions) {
		var Reactions = "\u2756Reactions\u2756\n" + monster.reactions[0].name + ": " + monster.reactions[0].description + "\n";
	}

	if (monster.legendary_actions) {
		for (var i = 0; i < monster.legendary_actions.length; i++) {
			var Legendary = Legendary + "\n\u25CF " + monster.legendary_actions[i].name + ": " + monster.legendary_actions[i].description;
		}
		var Legendary = "\u2756Legendary Actions\u2756" + Legendary;
	}

	return Skills + Spells + Traits + Actions + Reactions + Legendary;
}

function changeMods(num, mod, ability) {
	this.getField("Monster" + num + "." + ability + "Mod").value = posNeg(modArray[mod]);
	this.getField("Monster" + num + "." + ability + "Save").value = posNeg(modArray[mod]);
}

// This is better control over what fields are being reset.
function resetForms(formsToReset) {

	if (formsToReset == "Monster0") {
		this.resetForm("Monster0");
		resetMonster(0);
	}
	if (formsToReset == "Monster1") {
		this.resetForm("Monster1");
		resetMonster(1);
	}
	if (formsToReset == "Initiative") {
		this.resetForm("Initiative");
	}
	if (formsToReset == "WholeSheet") {
		this.resetForm("Monster0");
		resetMonster(0);
		this.resetForm("Monster1");
		resetMonster(1);
		this.resetForm("Initiative");
		this.resetForm("Encounter.Notes");
		this.resetForm("Encounter.Name");
		this.resetForm("Encounter.Difficulty");
		this.resetForm("Note");
	}
}

// Reset the monster block to it's default values
function resetMonster(num) {

	var fieldName = "Monster" + num;

	//clear and hide initiative checkboxes
	for (var i = 1; i < 6; i++) {
		this.getField(fieldName + ".HP" + i + ".InitiativeBox_af_image").display = display.hidden;
		this.getField(fieldName + ".HP" + i + ".InitiativeCheckbox").display = display.hidden;
	}

	this.getField(fieldName + ".Name").display = display.visible;
	this.getField(fieldName + ".CustomName").display = display.hidden;
	this.getField(fieldName + ".Shield").display = display.visible;
	this.getField(fieldName + ".Shield2").display = display.hidden;
}

/* function featureCompiler(Resistances, Immunities, Traits, Actions, Reactions, Legendary) {
var count = 0;

count += Resistances.lenth;

if (count < 2400) {
var frontPage = Resistances;
} else {
var backPage = Resistances;
}

count += Immunities.length;
if (count < 2400) {
var frontPage = frontPage + Immunities;
} else {
var backPage = backPage + Immunities;
}

count += Traits;
if (count < 2400) {
var frontPage = frontPage + Traits;
} else {
var backPage = backPage + Traits;
}

} */

// Calculate the number to display in Monster0.toHit
function toHit(monster, attackNum) {

	if (monster.attacks[attackNum].ability == 0 && !monster.attacks[attackNum].name) {
		return "";
	} else {
		var modifiedHit = 0,
		hitMod = 0,
		proficiency = 0;

		// scores: [21, 9, 15, 18, 15, 18],
		var proficiency = challengeArray[monster.challenge_rating][1]; // 4
		var attackSkill = monster.attacks[attackNum].ability - 1; // 1
		var skillScore = monster.scores[attackSkill]; // 21
		var hitMod = modArray[skillScore]; // Score 21 => 5 bonus
		if (monster.attacks[attackNum].modifiers) {
			var modifiedHit = monster.attacks[attackNum].modifiers[0];
		}
		var plusHit = +hitMod + +proficiency + +modifiedHit;
		return posNeg(plusHit);
	}
}

// Calculate the +damage information
function attackDamage(monster, attackNum) {
	var ability = 0,
	modifiedDamage = 0,
	abilityPosNeg = "",
	modifiers = "",
	diceDamage = 0;

	if (monster.attacks[attackNum].modifiers) {
		var modifiers = monster.attacks[attackNum].modifiers;
	}

	// If it is straight damage or no damage, bypass 1dX and just display info
	// modifiers: [0,1,2] - +hit, +damage, True/False for if the attack does not have a +damage modifier
	if (!monster.attacks[attackNum].damage || monster.attacks[attackNum].damage[0] == 0) {
		if (monster.attacks[attackNum].damage[1] != 0) {
			return monster.attacks[attackNum].damage[1] + " " + monster.attacks[attackNum].damage[2] + " damage";
		} else {
			return "";
		}
	} else {
		var ability = getStat(monster, attackNum);
		var abilityPosNeg = posNeg(ability);

		// Easy way to remove +damage on spell attacks
		//if (monster.attacks[attackNum].modifiers[2] == undefined) { var modifierTrueFalse = ""; }

		if (monster.attacks[attackNum].ability > 3 && modifiers[2] != true || modifiers[2] == false) {
			var abilityPosNeg = "",
			ability = 0;
		}
		// Add a special modifier to the damage total
		if (modifiers) {
			var modifiedDamage = modifiers[1] + +ability;
			var abilityPosNeg = posNeg(modifiedDamage);
		}

		if (abilityPosNeg == 0) {
			var abilityPosNeg = ""
		}

		var dieNum = monster.attacks[attackNum].damage[0];
		var dieSize = monster.attacks[attackNum].damage[1];
		var damageType = monster.attacks[attackNum].damage[2];
		var diceRoll = "; (" + dieNum + "d" + dieSize + abilityPosNeg + ") " + damageType;

		// return 10; (3d10+5) slashing
		return Math.floor((((dieSize / 2) + .5) * dieNum) + +modifiedDamage + +ability) + diceRoll;
	}
}

function posNeg(num) {
	if (num > 0) {
		return "+" + num;
	} else {
		return num;
	}
}

function getStat(monster, statAttack) {
	// [Str = 1, Dex = 2, Con = 3, Int = 4, Wis = 5, Cha = 6]
	var attackMod = monster.attacks[statAttack].ability - 1;
	return modArray[monster.scores[attackMod]];
}

function fixRace(race) {
	// go through files and make sure race is always an option to eliminate this
	if (race) {
		return race;
	} else {
		return "";
	}
}

/* function encounterDifficulty() {
var avgLevel = this.getField("Encounter.PartyLevel").value;
var partySize = this.getField("Encounter.PartySize").value;
var encounterEXP = this.getField("Encounter.XP").value;
var baseEXP = encounterTables.basetable[avgLevel];

var easy = baseEXP[0] * partySize;
var medium = baseEXP[1] * partySize;
var hard = baseEXP[2] * partySize;
var deadly = baseEXP[3] * partySize;

var difficulty = "Easy";

if (encounterEXP <= medium && encounterEXP > easy) {
var difficulty = "Medium";
}
if (encounterEXP <= hard && encounterEXP > medium) {
var difficulty = "Hard";
}
if (encounterEXP >= deadly) {
var difficulty = "Deadly";
}

return "\nBase EXP: " + baseEXP + "Encounter: " + encounterEXP + "\nDifficulty: " + difficulty + "\n E: " + easy + "\nM: " + medium + "\nH: " + hard + "\nD: " + deadly;
} */

function hpFunctions(number, hporder) {
	// Monster1.HP1.XP
	var Monster = "Monster" + number + ".";
	var HP = "HP" + hporder;
	if (this.getField(Monster + HP + ".Checkbox").value == "True") {
		this.getField(Monster + HP + ".XP").value = this.getField(Monster + "XP").value;
		this.getField(Monster + HP + ".InitiativeBox_af_image").display = display.visible;
		this.getField(Monster + HP + ".InitiativeCheckbox").display = display.visible;
	} else {
		this.getField(Monster + HP + ".XP").value = 0;
		this.getField(Monster + HP + ".InitiativeBox_af_image").display = display.hidden;
		this.getField(Monster + HP + ".InitiativeCheckbox").display = display.hidden;
	}
}

/* function initiativeFunctions(number, hporder) {
var Monster = "Monster." + number;
var HP = "HP." + hporder;
var min = 0,
max = 25;

min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min;
} */

function listForm() {
	// Populate the dialog window with the correct monster list
	//var section = this.getField("admin.WorkingSection").value;
	var choice = fv("List.Monster" + fv("admin.WorkingSection"));
	return bookArray[choice][1];
}

function fv(field) {
	return this.getField(field).value;
}

// Function for setting the icons for the manuals
function setIcons(manual) {
	var section = "Monster" + fv("admin.WorkingSection");
	if (this.getField("Img." + manual)) {
		var imgToGet = this.getField("Img." + manual).buttonGetIcon();
	} else {
		var imgToGet = this.getField("Img.Blank").buttonGetIcon();
	}
	imgToSet = this.getField(section + ".Img");

	if (imgToGet) {
		imgToSet.buttonSetIcon(imgToGet);
	}
}
/*
|||||||||||||||||||||||||||||||
||||| Monster List Dialog |||||
|||||||||||||||||||||||||||||||
 */

function initMonsterDialog(manual) {
	// Initiate monster dialog; set book; set icons
	// initMonsterDialog("Monster Manual");
	var section = fv("admin.WorkingSection");

	for (key in bookArray) {
		//      [0]   [1]         [2]    [3]               [4]
		// CoS: [CoS, CoS_Dialog, "CoS", "Curse of Strahd","Curse of Strahd"],
		if (manual == bookArray[key][3]) {
			this.getField("List.Monster" + section).value = bookArray[key][2];
			setIcons(manual);
		}
	}

	// Initialize Monster Dialog
	app.execDialog(monsterListDialog);
}
var monsterListDialog = {
	// This dialog box is called when the dialog box is created
	initialize: function (dialog) {
		this.loadDefaults(dialog);
	},
	//Load the monster list into the dialog
	loadDefaults: function (dialog) {
		dialog.load({
			subl: listForm(),
		})
	},

	// This dialog box is called when the OK button is clicked
	commit: function (dialog) {
		// When OK is hit, populate fields
		var elements = dialog.store()["subl"];
		for (var i in elements) {
			if (elements[i] > 0) {
				//bookArray[Book Chosen][Array Position][NAME]
				//app.alert(" You chose \ "" + i + "\", which has a source of " + bookArray[choice][0][i].source[0]);
				//app.alert("Name: " + bookArray[choice][0][i].name)
				var section = fv("admin.WorkingSection");
				applyMonster(i, section);
			}
		}
	},

	// Begin Dialog Box
	description: {
		name: "Manual", // Title of the dialog box
		elements: // Child element array
		[{
				type: "view",
				align_children: "align_left",
				elements: // Child element array
				[{
						type: "static_text",
						name: "Select Monster",
						font: "default"
					}, {
						type: "list_box",
						item_id: "subl",
						width: 200,
						height: 500
					}, {
						type: "ok_cancel"
					}
				]
			}
		]
	}
}

/*
||||||||||||||||||||||||||||||
||||| Manual List Dialog |||||
||||||||||||||||||||||||||||||
 */

function initManualDialog(section) {
	// Section: 0 / 1
	fv("admin.WorkingSection") = section;
	app.execDialog(manualListDialog);
}

var manualListDialog = {
	initialize: function (dialog) {
		dialog.load({
			subl: {
				// Start Manuals
				"Manuals": {
					"Official": {
						"Adventure Module": {
							"Curse of Strahd": -1,
							"Storm King's Thunder": -1,
							"Tomb of Annihilation": -1,
							"Tales from the Yawning Portal": -1,
							"Tyranny of Dragons": {
								"Hoard of the Dragon Queen": -1,
								"The Rise of Tiamat": -1,
							},
							"Elemental Evil": {
								"Princes of the Apocalypse": -1,
							},
							"Rage of Demons": {
								"Out of the Abyss": -1,
							},

						},
						"Core/Supplement Rulebook": {
							"Monster Manual": +1, // Default option
							"Mordenkainen's Tome of Foes": -1,
							"Tome of Beasts": -1,
							"The Tortle Package": -1,
							"Volos Guide to Monsters": -1,
						}
					},
					"Third Party": {
						"Monster Hunter Manual": -1,
					},
				},
				// End Manuals
				// Start Other
				"Other": {
					"Type": {
						"Aberration": -1,
						"Animal": -1,
						"Beast": -1,
						"Celestial": -1,
						"Construct": -1,
						"Dragon": -1,
						"Elemental": -1,
						"Fey": -1,
						"Fiend": -1,
						"Giant": -1,
						"Humanoid": -1,
						"Magical Beast": -1,
						"Monstrosity": -1,
						"Ooze": -1,
						"Outsider": -1,
						"Plant": -1,
						"Undead": -1,
						"Vermin": -1,
					},
					"Size": {
						"Tiny": -1,
						"Small": -1,
						"Medium": -1,
						"Large": -1,
						"Gargantuan": -1,
					},
				},
				// End Other
			},
		})
	},
	getHierChoice: function (element) {
		if (typeof element == "object") {
			for (var i in element) {
				if (typeof element[i] == "object") {
					var retn = this.getHierChoice(element[i]);
					if (retn) {
						retn.label = i + ", " + retn.label;
						retn.value = i;
						return retn;
					}
					// if element[i] > 0, we’ve found the selected item
				} else if (element[i] > 0) {
					// Return the selection
					return i;
				}
			}
		} else {
			if (element[i] > 0)
				return element[i];
		}
	},
	butn: function (dialog) {
		var element = dialog.store()["subl"]
			var retn = this.getHierChoice(element);
		if (retn) {
			// Init monster list
			initMonsterDialog(retn);
			// Do cool loading text?
			dialog.end("Manual selected, moving to Monster Dialog");
		} else {
			app.alert("Acrobat does not allow you to select the 'branch' in a list. You must select an option within the tree.");
		}
	},

	cncl: function (dialog) {
		dialog.end("Manual Dialog canceled without a selection")
	},
	// Dialog box description
	description: {
		name: "Manual Selection",
		elements:
		[{
				type: "view",
				align_children: "align_left",
				elements:
				[{
						type: "cluster",
						name: "Please select the source you would like to use:",
						elements:
						[{
								type: "hier_list_box",
								item_id: "subl",
								char_width: 30,
								height: 350
							}
						]
					}, {
						type: "view",
						align_children: "align_right",
						elements:
						[{
								type: "button",
								item_id: "cncl",
								name: "Cancel"
							}, {
								item_id: "butn",
								type: "button",
								name: "Select"
							}
						]
					}
				]
			}
		]
	}
}

/*
|||||||||||||||||||
||||| Toolbar |||||
|||||||||||||||||||

The icon related information has been copied from MPMB's sheet due to the fact that his shit just works. The toolbar is a great way to remove settings related stuff from the sheet itself, allowing me to make the printed sheet more useful.
 */
 
function initToolBar() {
	CreateIcons();
var oIcon = null; // iconstream

	try {
		app.addToolButton({
			cName: "myToolButton",
			oIcon: allIcons.reset,
			cExec: "app.alert('Someone pressed me!')",
			cTooltext: "Test Button",
			cEnable: true,
			nPos: 0
		});
	} catch (e) {
		app.alert("No");
 		//test("Nope.");
		app.removeToolButton("myToolButton");
		//initToolBar();
 	}
}


var ButtonIcons = {
	reset: "00000000000000000000000040c5c73d70b8b92610d0cf3d000000001095881e80968721bf93831daf9e95008fa29904efa69b14bfaca21affc8c123ffbcb617cfbeb81e60d5cf3e10b0a91c000000000000000030c6bb9c80bcbe47afbfc137ffbdbf2bdfb9b8269fc3ba49cfb0a339ffb2a33cffc7b751ffbdb41fffc8bf2affcdc23bffb5ab23ffd2cc2dffc8c324ffc1bb21ffb8b120ffd3cc3f60b6ac3200000000afc5bd6cffb2af44ffdcd86effe7dd96ffbab069ffc6ca28ffbabf16ffb4b90dffc6ca1effc5c721ffbebf1affc5c620ffb9b813ffcfb899ffe0c9a9fffff199ffaca324ffbfb82d8fcdc82e00000000dfb4ad5bffc0bd52fffffe94ffffffbcfff1e7a0ffc7cc2affc3c81fffc1c519ffb7ba0fffd0d22dffafb00bffb0b10bffd1d02bffe9d3b3fffff5d5fff5e68dff9e9416ffada61bafc7c22800000000afafa627ffd2cc4affe8e663fffff9fbfffffafbfffcf8c2ffb9b680ffe2e1aaffd9d7a2ffe8ded0ffd5c8bbffc6bf81ffe7dea1fffffce9fffffbe9ffd0bf73ffb6aa38ffc5bf2d60cbc71defc2b93affcfc647ffbab533ffb6b431ffbda9abffffefefffceca94ffe9e6b0fffffec8ffffffcffffdf3e5fffffdeffff6eeb1ffdfd699fffffce9ffd6c1afff9f8e42ffb9ad3bdfc8c13020beba10efc0b709ffc2b90bffcbc81bffc3c61eff86822fffe5e1b8ffb2b294fffffff3fffdfff3fffffffffffbf9fffffffbfffffffbffffcfc3c5ffc5c285ff8a8629ff8d7e1fffaea32cffc3bc2a9fc6c1218fc9c012ffcec517ffc7c417ffafb20aff928e3bff79754bffc7c7a9fff7f9ebfffffff5fff2f2f2fffffcfffffcf5fffffffbffffdfd2d5ff7d7a3eff767315ff928424ff9b8f19ffaba41270c0bb1a70c9bd11ffd1c519ffc9be36ffa9a135ffa19e4effb2b17dffb0b397fffcffeffff5feedfffafff3fffbffddfffeffddfffffeffffdad2d6ffb0aa99ffb5ae7aff948725ff92861aff938917bf978d1b30c9bd11ffc9bd10ffccc139ffa9a135fff8f5a4ffffffd1ffb1b498ffabb39eff8f9987ffb9c3b2ffd6e2b8ff909870ffbcb9bcffd2cbcfffffffeeffeae4b0ff948625ff92871aff938816ff968c1a20cbc017ffc5ba11ffd0ca28ffb7b623ffd7d383ffd5d1aeffc4c3b5fff9ffefffe5eedaffbac4aaffd5e0b8ffb4bc95fffafbe8ffecead8ffe2e3b9ffaba965ff958c23ff948b22ff8f8621ff89812270cfc31affc7bb12ffbdb715ffc6c532ff7e7a2aff706c49ffadad9ffffdfff3fffbfff0ffc3ccb3ffd9e4bdffe2ebc4ffffffedffe2dfcdff727248ff878642ff90871eff938b22ff9189238f8a822330beb223ffcfc434ffc6c127ffcacb2fff746d23ffb3ae82ffb8b795fff5f8dbfffeffe5ffe9edd4ffe9ecdbffdee1d0ffeeeddeffe6e2d4ff9c9c6eff7e7e34ff888718ff8c8d15ff8d8f128f898a0e50c7bb2cffcabf2fffc9c42affb9bb1fffa19b50ffffffd3ffaead8bffffffe6fffcffe3ffa4a890ff989b89ffcdd0c0fffffff2ffd9d5c7ffffffd5ffa7a75dff939223ff8b8c14ff86870b8f85860a80cecb1fffb7b408ffc1b457ffdbcc96fffff7d3ffffffdbffb0b071ffffffc6fffdffddff626442ff686f30ffdbe1a2ffffffcaff9fa167fffdf9ddfffffde2ffbcb495ff9b946bff80802ebf82841c80bfbb0fffcfcb1fffe7da7effffffc9ffffffdbffa8a07bff939354ffbdc182ffffffe1ff797a58ff8c9354ffeaf0b1ffdbdfa2ff9ea066ffadaa8efffff9defffff9daffc3bb93cf8a8937607e8018bfccc02effc4b826ffeedb70ffffff9afffff083ffd3c251ffc3b918ffc3b918ffd0c433ffc7bb2affc8bf1dffd4cb29ffcfc528ffbeb21effd3c639fffff27effffffa8ffe2cf8bef6f6e41806f734630c8bc2aefbfb321ffd4c257ffe9d66bffd6c457ffc3b241ffc4ba19ffc4bb19ffd0c333ffcec232ffcdc322ffcfc524ffccc225ffc1b521ffc7ba2effdece5affdecb6fffa4914cbf7a794c0000000040cac11effc4bb18ffcabc34ffcabc34ffbfb128ffc4b72bffcfc719ffcac314ffbdb21bffc8bd26ffc9c115ffc6be12ffcbc318ffccc41cffc7bd22ffc6ba2cffddd149dfb4a838608888540000000080c9c01ebfc9bf1d9fccbf378fcabc34ffc5b72edfcdc03470d2cb1d60c8c1128faa9f09dfbdb21cafc4bd11dfc3bb0fafcbc31980d1c92160ccc126cfc6b92b80beb22a40aca0310000000000000000",
	test: "00000000000000000000000040c5c73d70b8b92610d0cf3d000000001095881e80968721bf93831daf9e95008fa29904efa69b14bfaca21affc8c123ffbcb617cfbeb81e60d5cf3e10b0a91c000000000000000030c6bb9c80bcbe47afbfc137ffbdbf2bdfb9b8269fc3ba49cfb0a339ffb2a33cffc7b751ffbdb41fffc8bf2affcdc23bffb5ab23ffd2cc2dffc8c324ffc1bb21ffb8b120ffd3cc3f60b6ac3200000000afc5bd6cffb2af44ffdcd86effe7dd96ffbab069ffc6ca28ffbabf16ffb4b90dffc6ca1effc5c721ffbebf1affc5c620ffb9b813ffcfb899ffe0c9a9fffff199ffaca324ffbfb82d8fcdc82e00000000dfb4ad5bffc0bd52fffffe94ffffffbcfff1e7a0ffc7cc2affc3c81fffc1c519ffb7ba0fffd0d22dffafb00bffb0b10bffd1d02bffe9d3b3fffff5d5fff5e68dff9e9416ffada61bafc7c22800000000afafa627ffd2cc4affe8e663fffff9fbfffffafbfffcf8c2ffb9b680ffe2e1aaffd9d7a2ffe8ded0ffd5c8bbffc6bf81ffe7dea1fffffce9fffffbe9ffd0bf73ffb6aa38ffc5bf2d60cbc71defc2b93affcfc647ffbab533ffb6b431ffbda9abffffefefffceca94ffe9e6b0fffffec8ffffffcffffdf3e5fffffdeffff6eeb1ffdfd699fffffce9ffd6c1afff9f8e42ffb9ad3bdfc8c13020beba10efc0b709ffc2b90bffcbc81bffc3c61eff86822fffe5e1b8ffb2b294fffffff3fffdfff3fffffffffffbf9fffffffbfffffffbffffcfc3c5ffc5c285ff8a8629ff8d7e1fffaea32cffc3bc2a9fc6c1218fc9c012ffcec517ffc7c417ffafb20aff928e3bff79754bffc7c7a9fff7f9ebfffffff5fff2f2f2fffffcfffffcf5fffffffbffffdfd2d5ff7d7a3eff767315ff928424ff9b8f19ffaba41270c0bb1a70c9bd11ffd1c519ffc9be36ffa9a135ffa19e4effb2b17dffb0b397fffcffeffff5feedfffafff3fffbffddfffeffddfffffeffffdad2d6ffb0aa99ffb5ae7aff948725ff92861aff938917bf978d1b30c9bd11ffc9bd10ffccc139ffa9a135fff8f5a4ffffffd1ffb1b498ffabb39eff8f9987ffb9c3b2ffd6e2b8ff909870ffbcb9bcffd2cbcfffffffeeffeae4b0ff948625ff92871aff938816ff968c1a20cbc017ffc5ba11ffd0ca28ffb7b623ffd7d383ffd5d1aeffc4c3b5fff9ffefffe5eedaffbac4aaffd5e0b8ffb4bc95fffafbe8ffecead8ffe2e3b9ffaba965ff958c23ff948b22ff8f8621ff89812270cfc31affc7bb12ffbdb715ffc6c532ff7e7a2aff706c49ffadad9ffffdfff3fffbfff0ffc3ccb3ffd9e4bdffe2ebc4ffffffedffe2dfcdff727248ff878642ff90871eff938b22ff9189238f8a822330beb223ffcfc434ffc6c127ffcacb2fff746d23ffb3ae82ffb8b795fff5f8dbfffeffe5ffe9edd4ffe9ecdbffdee1d0ffeeeddeffe6e2d4ff9c9c6eff7e7e34ff888718ff8c8d15ff8d8f128f898a0e50c7bb2cffcabf2fffc9c42affb9bb1fffa19b50ffffffd3ffaead8bffffffe6fffcffe3ffa4a890ff989b89ffcdd0c0fffffff2ffd9d5c7ffffffd5ffa7a75dff939223ff8b8c14ff86870b8f85860a80cecb1fffb7b408ffc1b457ffdbcc96fffff7d3ffffffdbffb0b071ffffffc6fffdffddff626442ff686f30ffdbe1a2ffffffcaff9fa167fffdf9ddfffffde2ffbcb495ff9b946bff80802ebf82841c80bfbb0fffcfcb1fffe7da7effffffc9ffffffdbffa8a07bff939354ffbdc182ffffffe1ff797a58ff8c9354ffeaf0b1ffdbdfa2ff9ea066ffadaa8efffff9defffff9daffc3bb93cf8a8937607e8018bfccc02effc4b826ffeedb70ffffff9afffff083ffd3c251ffc3b918ffc3b918ffd0c433ffc7bb2affc8bf1dffd4cb29ffcfc528ffbeb21effd3c639fffff27effffffa8ffe2cf8bef6f6e41806f734630c8bc2aefbfb321ffd4c257ffe9d66bffd6c457ffc3b241ffc4ba19ffc4bb19ffd0c333ffcec232ffcdc322ffcfc524ffccc225ffc1b521ffc7ba2effdece5affdecb6fffa4914cbf7a794c0000000040cac11effc4bb18ffcabc34ffcabc34ffbfb128ffc4b72bffcfc719ffcac314ffbdb21bffc8bd26ffc9c115ffc6be12ffcbc318ffccc41cffc7bd22ffc6ba2cffddd149dfb4a838608888540000000080c9c01ebfc9bf1d9fccbf378fcabc34ffc5b72edfcdc03470d2cb1d60c8c1128faa9f09dfbdb21cafc4bd11dfc3bb0fafcbc31980d1c92160ccc126cfc6b92b80beb22a40aca0310000000000000000",
}

var allIcons = {};
function CreateIcons() {
	for (var aIcon in ButtonIcons) {
		allIcons[aIcon] = {
			name: aIcon,
			count: 0,
			width: 20,
			height: 20,
			read: function (nBytes) {
				theReturn = ButtonIcons[this.name].slice(this.count, this.count += nBytes);
				if (this.count >= 131072)
					this.count = 0;
				return theReturn;
			}
		};
	};
}
// Function to test the monsters within a manual. Loads all items into the sheet to see if any errors occur
function tm(manual, manual2) {
	// tm(VGtM,"VGtM");
	this.getField("List.Monster0").value = manual2;
	for (key in manual) {
		console.println("\nMonster:" + key);
		applyMonster(key, 0);
	}
}

function removeCommas(str) {
	return (str.replace(/,/g, ''));
}
function test(string) {
	console.println(string);
}
function Hide(field) {
	if (this.getField(field))
		this.getField(field).display = display.hidden;
}
function DontPrint(field) {
	if (this.getField(field))
		this.getField(field).display = display.noPrint;
}
function Show(field) {
	if (this.getField(field))
		this.getField(field).display = display.visible;
}
function layerControl(layer, value) {
	this.getOCGs();
	/*
	[object OCG = "Monster1.Overflow"],
	[object OCG = "Monster0.Overflow"],
	[object OCG = "Templates"],
	[object OCG = "Monster1.Background"],
	[object OCG = "Monster1"],
	[object OCG = "Monster1.Fields"],
	[object OCG = "Monster0.Background"],
	[object OCG = "Monster0"],
	[object OCG = "Monster0.Fields"],
	[object OCG = "Guides"],
	[object OCG = "Guides"],
	[object OCG = "Templates"],
	[object OCG = "Header"],
	[object OCG = "Monster1.Overflow"],
	[object OCG = "Monster1.Background"],
	[object OCG = "Monster1"],
	[object OCG = "Monster1.Fields"],
	[object OCG = "Monster0.Overflow"],
	[object OCG = "Monster0.Background"],
	[object OCG = "Monster0"],
	[object OCG = "Monster0.Fields"] */
}
/*
DUNGEONS & DRAGONS, D&D, Wizards of the Coast, Forgotten Realms, the dragon ampersand, Player’s Handbook, Monster Manual, Dungeon Master’s Guide, D&D Adventurers League
all other Wizards of the Coast product names and their respective logos are trademarks of Wizards of the Coast in the USA and other countries. All characters and their distinctive
likenesses are property of Wizards of the Coast. This material is protected under the copyright laws of the United States of America. Any reproduction or unauthorized use of the
material or artwork contained herein is prohibited without the express written permission of Wizards of the Coast. ©2016 Wizards of the Coast LLC, PO Box 707, Renton, WA 98057-0707, USA.
Manufactured by Hasbro SA, Rue Emile-Boéchat 31, 2800 Delémont, CH. Represented by Hasbro Europe, 4 The Square, Stockley Park, Uxbridge, Middlesex, UB11 1ET, UK.
All other original material in this work is ©2017 by Shwaffle and published under the Community Content Agreement for Dungeon Masters Guild.
*/
