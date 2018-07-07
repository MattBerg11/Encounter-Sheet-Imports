//This would not be possible without the invaluble advice from MorePurpleMoreBetter! I highly recommend you check out his work https:reddit.com/r/mpmb

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
var sheetVersion = "v1.6";
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
	var choice = returnFieldValue("List.Monster" + fieldNum);
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
	this.getField(fieldName + ".Proficiency").value = "+" + challengeArray[monster.challengeRating][1];
	this.getField(fieldName + ".Perception").value = monster.passivePerception;
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
	this.getField(fieldName + ".XP").value = removeCommas(challengeArray[monster.challengeRating][0]);
	this.getField(fieldName + ".Features").value = ((compileFeatures(monster) != "") ? compileFeatures(monster) : "");
}

function compileInfo(monster) {
	var Language = "",
	Immunities = "",
	Type = "";
	Resistances = "";

	var XP = "\u2756CR & EXP: " + monster.challengeRating + ", " + challengeArray[monster.challengeRating][0];
	if (monster.languages) {
		var Language = "\n\u2756Languages: " + monster.languages;
	} else {
		var Language = "";
	}
	var Alignment = "\n\u2756Alignment: " + monster.alignment;
	var Size = "\n\u2756Size: " + monster.size;
	if (monster.damage_resistances) {
		var Resistances = "\n\u2756Resistances: " + monster.damage_resistances;
	}
	if (monster.damage_immunities) {
		var Immunities = "\n\u2756Immunities: " + monster.damage_immunities;
	}
	if (monster.type) {
		var Type = "\n\u2756Type: " + monster.type;
		if (monster.subtype) {
			var Type = Type + "; " + monster.subtype;
		}
	}
	return XP + Type + Language + Alignment + Size + Resistances + Immunities;
}

function compileFeatures(monster) {
	var Traits = "",
	Actions = "",
	Reactions = "",
	Legendary = "",
	Skills = "",
	Spells = "";

	if (monster.spells) {
		for (var i = 0; i < monster.spells.length; i++) {
			Spells += "\u2022 " + monster.spells[i] + "\n";
		}
		var Spells = "\u2756Spells\u2756\n" + Spells;
	}
	if (monster.skills) {
		var Skills = "\u2756Skills\u2756\n\u25CF " + monster.skills + "\n";
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

	if (monster.attacks[attackNum].ability == 0) {
		return "";
	} else {
		var modifiedHit = 0,
		hitMod = 0,
		proficiency = 0;

		// scores: [21, 9, 15, 18, 15, 18],
		var proficiency = challengeArray[monster.challengeRating][1]; // 4
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

// Function for setting the icons for the manuals
function setIcons(manual, section) {
	var section = "Monster" + section;
	var imgToGet = this.getField("Img." + manual).buttonGetIcon();
	imgToSet = this.getField(section + ".Img");
	if (imgToGet) {
		imgToSet.buttonSetIcon(imgToGet);
	}
}

function initDialog(manual, section) {
	//Initiate monster dialog; set book; set icons
	for (key in bookArray) {
		if (manual == bookArray[key][3]) {
			var bookVar = bookArray[key][2];
			var iconVar = bookArray[key][4];
		}
	}

	setIcons(iconVar, section);

	this.getField("admin.WorkingSection").value = section;
	this.getField("List.Monster" + section).value = bookVar
		//this.getField("List.Monster" + section).value = bookVar;
		app.execDialog(monsterListDialog);
}

function removeCommas(str) {
	return (str.replace(/,/g, ''));
}

function returnFieldValue(arg) {
	return this.getField(arg).value;
}

function listForm() {
	// Populate the dialog window with the correct list
	var section = returnFieldValue("admin.WorkingSection");
	var choice = returnFieldValue("List.Monster" + section);
	return bookArray[choice][1];
}

// Admin function. Only used to refresh the manuals list.
function bookDropdown() {
	//Depreciate bookList and use bookArray
	var bookList = [];
	for (key in bookArray) {
		bookList.push(bookArray[key][3]);
	}
	this.getField("Manual.Monster0").setItems(bookList);
	this.getField("Manual.Monster1").setItems(bookList);
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

	// This dialog box is called when the OK button is clicked.
	commit: function (dialog) {
		// When OK is hit, populate fields
		var elements = dialog.store()["subl"];
		for (var i in elements) {
			if (elements[i] > 0) {
				//bookArray[Book Chosen][Array Position][NAME]
				//app.alert("You chose \"" + i + "\", which has a source of " + bookArray[choice][0][i].source[0]);
				//app.alert("Name: " + bookArray[choice][0][i].name)
				var section = returnFieldValue("admin.WorkingSection");
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
All other original material in this work is ©2017 by Matt Berg (Shwaffle) and published under the Community Content Agreement for Dungeon Masters Guild.
*/
