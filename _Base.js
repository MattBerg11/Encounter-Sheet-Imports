
//This would not be possible without the invaluble advice from MorePurpleMoreBetter! I highly recommend you check out his work http://www.dmsguild.com/browse.php?author=morepurplemorebetter

//Doc Open

/*
//Check Version
if(app.viewerVersion < 10) {
app.alert("This Document Requires Acrobat/Reader 7.0 or later for Proper Operation",3);
app.alert(app.viewerVersion,3);
}
 */
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
var sheetVersion = "v1.5";
this.getField("Version").value = "Encounter Sheet " + sheetVersion;
this.getField("Note").value = "If you like this sheet, please consider giving it a rating or a review on DMsGuild!";

function applyMonster(input, fieldNum) {
	if (!input) {
		return
	}
	//(<Monster name>, 1)
	var fieldName = "Monster" + fieldNum;

	//Clear and reset form section for new monster
	resetMonster(fieldNum);

	//find the monster in the JSON object and don't do anything if it isn't found
	var listToChoose = this.getField("List." + fieldName).value;
	if (listToChoose == "CoS") {
		var monster = CoS[input];
	}
	if (listToChoose == "EE") {
		var monster = EE[input];
	}
	if (listToChoose == "MM") {
		var monster = MM[input];
	}
	if (listToChoose == "MToF") {
		var monster = MToF[input];
	}
	if (listToChoose == "RoD") {
		var monster = RoD[input];
	}
	if (listToChoose == "SKT") {
		var monster = SKT[input];
	}
	if (listToChoose == "ToA") {
		var monster = ToA[input];
	}
	if (listToChoose == "ToB") {
		var monster = ToB[input];
	}
	if (listToChoose == "ToD") {
		var monster = ToD[input];
	}
	if (listToChoose == "VGtM") {
		var monster = VGtM[input];
	}
	if (listToChoose == "TftYP") {
		var monster = TFtYP[input];
	}

	if (listToChoose == "test") {
		var monster = test[input];
	}

	if (!monster)
		return;

	this.getField(fieldName + ".AC").value = monster.ac[0];
	this.getField(fieldName + ".ArmorType").value = ((monster.ac[1] != "") ? monster.ac[1] : "None")
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
				this.getField(fieldName + ".AttackInfo" + a).value = "Refer to Overflow Page for description";
				this.getField(fieldName + ".OverflowAttack" + a).value = monster.attacks[a].description;

			} else {
				this.getField(fieldName + ".AttackInfo" + a).value = monster.attacks[a].description;
			}
		}
	}
	this.getField(fieldName + ".MonsterInfo").value = compileInfo(monster);
	this.getField(fieldName + ".XP").value = removeCommas(challengeArray[monster.challengeRating][0]);
	this.getField(fieldName + ".Features").value = ((compileFeatures(monster) != "") ? compileFeatures(monster) : "")
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

function featureCompiler(Resistances, Immunities, Traits, Actions, Reactions, Legendary) {
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

}

function toHit(monster, attackNum) {
    if (monster.attacks[attackNum].ability == 0) {
        return "";
    }
    else {
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

function attackDamage(monster, attackNum) {
	var ability = 0,
	    modifiedDamage = 0,
	    abilityPosNeg = "",
	    diceDamage = 0;

    if (!monster.attacks[attackNum].damage || monster.attacks[attackNum].damage[0] == 0) {
        if (monster.attacks[attackNum].damage[1] != 0) {
            return monster.attacks[attackNum].damage[1] + " " + monster.attacks[attackNum].damage[2] + " damage";
        }
        else { return ""; }
    }
        
		else {
			var ability = getStat(monster, attackNum);
			var abilityPosNeg = posNeg(ability);

			// Easy way to remove +damage on spell attacks
			if (monster.attacks[attackNum].ability > 3 && monster.attacks[attackNum].modifiers[2] != true) {
				var abilityPosNeg = "",
				ability = 0;
			}

            if (monster.attacks[attackNum].modifiers) {
                /*
                if (monster.attacks[attackNum].modifiers[2]) {
                    var damageTrueFalse = monster.attacks[attackNum].modifiers[2];
                }
                else {
                    var damageTrueFalse = true;
                }
                */
				//Do not add ability modifier to the attack damage
				if (monster.attacks[attackNum].modifiers[2] != true) {
					var abilityPosNeg = "",
					ability = 0;
				}

				// Add to the modifier
				if (monster.attacks[attackNum].modifiers[1]) {
					var modifiedDamage = monster.attacks[attackNum].modifiers[1] + +ability;
					var abilityPosNeg = posNeg(modifiedDamage);
				}
			}

			//2d6, bludgeoning
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
		if (race) {
			return race;
		} else {
			return "";
		}
	}

	function encounterDifficulty() {
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
	}

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

	function initiativeFunctions(number, hporder) {
		var Monster = "Monster." + number;
		var HP = "HP." + hporder;
		var min = 0,
		max = 25;

		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	// Function for setting the icons for the manuals
	function setIcons(manual, monster) {
		var monster = "Monster" + monster;
		var imgToGet = this.getField("Img." + manual).buttonGetIcon();
		imgToSet = this.getField(monster + ".Img");
		if (imgToGet) {
			imgToSet.buttonSetIcon(imgToGet);
		}
	}

	// Set dropdown menus to correct monsters
	function setDropdowns(manual, section) {

		//Set icons at the top
		if (manual == "Monster Manual" || manual == "Volo's Guide to Monsters" || manual == "Tome of Beasts" || manual == "Mordenkainen's Tome of Foes" || manual == "test") {
			setIcons("Blank", section);
		} else {
			setIcons(manual, section);
		}

		//Set the monster list dropdown
		var monsterArray = [["", ""]],
		formOne = "Monster0",
		formTwo = "Monster1";

		if (manual == "Curse of Strahd") {
			var bookVar = "CoS";
			for (var monster in CoS) {
				monsterArray.push([CoS[monster].name, monster]);
			}
		} else if (manual == "Elemental Evil") {
			var bookVar = "EE";
			for (var monster in EE) {
				monsterArray.push([EE[monster].name, monster]);
			}
		}

		if (manual == "Monster Manual") {
			var bookVar = "MM";
			for (var monster in MM) {
				monsterArray.push([MM[monster].name, monster]);
			}
		}
		if (manual == "Mordenkainen's Tome of Foes") {
			var bookVar = "MToF";
			for (var monster in MToF) {
				monsterArray.push([MToF[monster].name, monster]);
			}
		}
		if (manual == "Rage of Demons") {
			var bookVar = "RoD";
			for (var monster in RoD) {
				monsterArray.push([RoD[monster].name, monster]);
			}
		} else if (manual == "Storm King's Thunder") {
			var bookVar = "SKT";
			for (var monster in SKT) {
				monsterArray.push([SKT[monster].name, monster]);
			}
		} else if (manual == "Tomb of Annihilation") {
			var bookVar = "ToA";
			for (var monster in ToA) {
				monsterArray.push([ToA[monster].name, monster]);
			}
		} else if (manual == "Tome of Beasts") {
			var bookVar = "ToB";
			for (var monster in ToB) {
				monsterArray.push([ToB[monster].name, monster]);
			}
		} else if (manual == "Tyranny of Dragons") {
			var bookVar = "ToD";
			for (var monster in ToD) {
				monsterArray.push([ToD[monster].name, monster]);
			}
		} else if (manual == "Volo's Guide to Monsters") {
			var bookVar = "VGtM";
			for (var monster in VGtM) {
				monsterArray.push([VGtM[monster].name, monster]);
			}
		} else if (manual == "Tales from the Yawning Portal") {
			var bookVar = "TftYP";
			for (var monster in TftYP) {
				monsterArray.push([TftYP[monster].name, monster]);
			}
		} else if (manual == "test") {
			for (var monster in test) {
				monsterArray.push([test[monster].name, monster]);
			}
		}
		if (section == 0) {
			this.getField("List." + formOne).value = bookVar;
			this.getField(formOne + ".Name").setItems(monsterArray);
		}
		if (section == 1) {
			this.getField("List." + formTwo).value = bookVar;
			this.getField(formTwo + ".Name").setItems(monsterArray);
		}
	}
	function bookDropdown() {
		var bookArray = ["Curse of Strahd", "Elemental Evil", "Monster Manual", "Mordenkainen's Tome of Foes", "Rage of Demons", "Storm King's Thunder", "Tomb of Annihilation", "Tome of Beasts", "Tyranny of Dragons", "Volo's Guide to Monsters", "Tales from the Yawning Portal"];
		this.getField("Manual.Monster0").setItems(bookArray);
		this.getField("Manual.Monster0").commitOnSelChange = true;
		this.getField("Manual.Monster1").setItems(bookArray);
		this.getField("Manual.Monster1").commitOnSelChange = true;
	}
	function createList(manual) {
		var monsterArray = [[""]];
		var i = 0;
		if (manual == "MM") {
			for (var monster in MonsterManual) {
				i++;
				monsterArray.push(["\"" + monster + "\":-" + i]);
			}
			//console.println(typeof monsterArray);
			this.getField("TestField").value = monsterArray;
			return monsterArray;
		}
	}
	/*
	function dialog() {
	var dialogDescriptor = {
	description: {
	name: "monsterDialog",
	width: 250,
	height: 600,
	align_children: "align_left",
	elements: [{
	item_id: "okca",
	type: "ok_cancel",
	}, {
	width: 200,
	height: 500,
	type: "list_box",
	item_id: "list",
	}
	]
	},
	initialize: function (dialog) {
	dialog.load({
	"list": dialogObject.list
	});
	},
	validate: function (dialog) {
	//add validate code here
	return true;
	},
	commit: function (dialog) {
	var elements = dialog.store();
	dialogObject.list = elements["list"];
	},
	"okca": function (dialog) { },
	"list": function (dialog) { },
	};

	//  var dropdownList = createList("MonsterManual");

	if (manual = "MonsterManual") {
	var ddList = { "Aarakocra": -1, "aboleth": -2, "Abominable Yeti": -3, "acolyte": -4, "adult black dragon": -5, "adult blue dracolich": -6, "adult blue dragon": -7, "adult brass dragon": -8, "adult bronze dragon": -9, "adult copper dragon": -10, "adult gold dragon": -11, "adult green dragon": -12, "adult red dragon": -13, "adult silver dragon": -14, "adult white dragon": -15, "air elemental": -16, "Allosaurus": -17, "ancient black dragon": -18, "ancient blue dragon": -19, "ancient brass dragon": -20, "ancient bronze dragon": -21, "ancient copper dragon": -22, "ancient gold dragon": -23, "ancient green dragon": -24, "ancient red dragon": -25, "ancient silver dragon": -26, "ancient white dragon": -27, "androsphinx": -28, "animated armor": -29, "ankheg": -30, "ape": -31, "Arcanaloth": -32, "archmage": -33, "assassin": -34, "awakened shrub": -35, "awakened tree": -36, "axe beak": -37, "azer": -38, "baboon": -39, "badger": -40, "balor": -41, "bandit": -42, "bandit captain": -43, "barbed devil": -44, "Barlgura": -45, "basilisk": -46, "bat": -47, "bearded devil": -48, "behir": -49, "berserker": -50, "black bear": -51, "black dragon wyrmling": -52, "black pudding": -53, "blink dog": -54, "blood hawk": -55, "blue dragon wyrmling": -56, "Blue Slaad": -57, "boar": -58, "bone devil": -59, "Bone Naga (Guardian)": -60, "brass dragon wyrmling": -61, "bronze dragon wyrmling": -62, "brown bear": -63, "bugbear": -64, "bulette": -65, "Bullywug": -66, "Cambion": -67, "camel": -68, "carrion crawler": -69, "cat": -70, "cave bear": -71, "centaur": -72, "chain devil": -73, "Chasme": -74, "chimera": -75, "chuul": -76, "clay golem": -77, "cloaker": -78, "cloud giant": -79, "cockatrice": -80, "commoner": -81, "constrictor snake": -82, "copper dragon wyrmling": -83, "couatl": -84, "crab": -85, "crocodile": -86, "cult fanatic": -87, "cultist": -88, "Cyclops": -89, "Dao": -90, "darkmantle": -91, "death dog": -92, "Death Knight": -93, "Death Slaad": -94, "Death Tyrant": -95, "deep gnome (svirfneblin)": -96, "deer": -97, "deva": -98, "dire wolf": -99, "Displacer Beast": -100, "djinni": -101, "doppelganger": -102, "draft horse": -103, "dragon turtle": -104, "dretch": -105, "drider": -106, "drow": -107, "Drow Elite Warrior": -108, "Drow Mage": -109, "Drow Priestess of Lolth": -110, "druid": -111, "dryad": -112, "duergar": -113, "Duodrone": -114, "dust mephit": -115, "eagle": -116, "earth elemental": -117, "efreeti": -118, "elephant": -119, "elk": -120, "Empyrean": -121, "erinyes": -122, "ettercap": -123, "ettin": -124, "Faerie Dragon (Blue)": -125, "Faerie Dragon (Green)": -126, "Faerie Dragon (Indigo)": -127, "Faerie Dragon (Orange)": -128, "Faerie Dragon (Red)": -129, "Faerie Dragon (Violet)": -130, "Faerie Dragon (Yellow)": -131, "fire elemental": -132, "fire giant": -133, "Fire Snake": -134, "Flameskull": -135, "flesh golem": -136, "flying snake": -137, "flying sword": -138, "Fomorian": -139, "Frog": -140, "frost giant": -141, "Galeb Duhr": -142, "gargoyle": -143, "Gas Spore": -144, "gelatinous cube": -145, "ghast": -146, "ghost": -147, "ghoul": -148, "giant ape": -149, "giant badger": -150, "giant bat": -151, "giant boar": -152, "giant centipede": -153, "giant constrictor snake": -154, "giant crab": -155, "giant crocodile": -156, "giant eagle": -157, "giant elk": -158, "giant fire beetle": -159, "giant frog": -160, "giant goat": -161, "giant hyena": -162, "giant lizard": -163, "giant octopus": -164, "giant owl": -165, "giant poisonous snake": -166, "giant rat": -167, "giant rat (diseased)": -168, "giant scorpion": -169, "giant sea horse": -170, "giant shark": -171, "giant spider": -172, "giant toad": -173, "giant vulture": -174, "giant wasp": -175, "giant weasel": -176, "giant wolf spider": -177, "gibbering mouther": -178, "Githyanki Knight": -179, "Githyanki Warrior": -180, "Githzerai Monk": -181, "Githzerai Zerth": -182, "glabrezu": -183, "gladiator": -184, "gnoll": -185, "Gnoll Fang of Yeenoghu": -186, "Gnoll Pack Lord": -187, "goat": -188, "goblin": -189, "Goblin Boss": -190, "gold dragon wyrmling": -191, "gorgon": -192, "Goristro": -193, "gray ooze": -194, "Gray Slaad": -195, "green dragon wyrmling": -196, "green hag": -197, "Green Slaad": -198, "Grell": -199, "grick": -200, "Grick Alpha": -201, "griffon": -202, "grimlock": -203, "guard": -204, "guardian naga": -205, "gynosphinx": -206, "harpy": -207, "hawk": -208, "hell hound": -209, "Helmed Horror": -210, "hezrou": -211, "hill giant": -212, "hippogriff": -213, "hobgoblin": -214, "Hobgoblin Captain": -215, "Hobgoblin Warlord": -216, "homunculus": -217, "Hook Horror": -218, "horned devil": -219, "hunter shark": -220, "hydra": -221, "hyena": -222, "ice devil": -223, "ice mephit": -224, "imp": -225, "Intellect Devourer": -226, "invisible stalker": -227, "iron golem": -228, "jackal": -229, "Jackalwere": -230, "Kenku": -231, "killer whale": -232, "knight": -233, "kobold": -234, "kraken": -235, "Kuo-Toa": -236, "Kuo-Toa Archpriest": -237, "Kuo-Toa Monitor": -238, "Kuo-Toa Whip": -239, "lamia": -240, "lemure": -241, "lich": -242, "lion": -243, "lizard": -244, "Lizard King/Queen": -245, "lizardfolk": -246, "Lizardfolk Shaman": -247, "mage": -248, "magma mephit": -249, "magmin": -250, "mammoth": -251, "Manes": -252, "manticore": -253, "Marid": -254, "marilith": -255, "mastiff": -256, "medusa": -257, "merfolk": -258, "merrow": -259, "Mezzoloth": -260, "mimic": -261, "Mind Flayer": -262, "Mind Flayer Arcanist": -263, "minotaur": -264, "minotaur skeleton": -265, "Monodrone": -266, "Mud Mephit": -267, "mule": -268, "mummy": -269, "mummy lord": -270, "Myconid Adult": -271, "Myconid Sovereign": -272, "Myconid Sprout": -273, "nalfeshnee": -274, "Needle Blight": -275, "night hag": -276, "nightmare": -277, "noble": -278, "Nothic": -279, "Nycaloth": -280, "ochre jelly": -281, "octopus": -282, "ogre": -283, "ogre zombie": -284, "oni": -285, "orc": -286, "Orc Eye of Gruumsh": -287, "Orc War Chief": -288, "Orog": -289, "otyugh": -290, "owl": -291, "owlbear": -292, "panther": -293, "pegasus": -294, "Pentadrone": -295, "Peryton": -296, "phase spider": -297, "Piercer": -298, "pit fiend": -299, "Pixie": -300, "planetar": -301, "plesiosaurus": -302, "poisonous snake": -303, "polar bear": -304, "Poltergeist": -305, "pony": -306, "priest": -307, "pseudodragon": -308, "Pteranodon": -309, "purple worm": -310, "Quadrone": -311, "Quaggoth": -312, "Quaggoth Spore Servant": -313, "Quaggoth Thonot": -314, "quasit": -315, "quipper": -316, "rakshasa": -317, "rat": -318, "raven": -319, "red dragon wyrmling": -320, "Red Slaad": -321, "reef shark": -322, "remorhaz": -323, "Revenant": -324, "rhinoceros": -325, "riding horse": -326, "roc": -327, "roper": -328, "rug of smothering": -329, "rust monster": -330, "saber-toothed tiger": -331, "sahuagin": -332, "Sahuagin Baron": -333, "Sahuagin Priestess": -334, "salamander": -335, "satyr": -336, "Scarecrow": -337, "scorpion": -338, "scout": -339, "sea hag": -340, "sea horse": -341, "shadow": -342, "Shadow Demon": -343, "shambling mound": -344, "shield guardian": -345, "shrieker": -346, "silver dragon wyrmling": -347, "skeleton": -348, "Slaad Tadpole": -349, "Smoke Mephit": -350, "solar": -351, "Spectator": -352, "specter": -353, "spider": -354, "Spined Devil": -355, "spirit naga": -356, "sprite": -357, "spy": -358, "steam mephit": -359, "stirge": -360, "stone giant": -361, "stone golem": -362, "storm giant": -363, "succubus/incubus": -364, "swarm of bats": -365, "swarm of beetles": -366, "swarm of centipedes": -367, "swarm of insects": -368, "swarm of poisonous snakes": -369, "swarm of quippers": -370, "swarm of rats": -371, "swarm of ravens": -372, "swarm of spiders": -373, "swarm of wasps": -374, "tarrasque": -375, "Thri-kreen": -376, "Thri-kreen (Psionic)": -377, "thug": -378, "tiger": -379, "treant": -380, "tribal warrior": -381, "triceratops": -382, "Tridrone": -383, "Troglodyte": -384, "troll": -385, "Twig Blight": -386, "tyrannosaurus rex": -387, "Ultroloth": -388, "Umber Hulk": -389, "unicorn": -390, "vampire": -391, "vampire spawn": -392, "veteran": -393, "violet fungus": -394, "vrock": -395, "vulture": -396, "warhorse": -397, "warhorse skeleton": -398, "water elemental": -399, "Water Weird": -400, "weasel": -401, "werebear": -402, "wereboar": -403, "wererat": -404, "weretiger": -405, "werewolf": -406, "white dragon wyrmling": -407, "wight": -408, "will-o\'-wisp": -409, "winter wolf": -410, "wolf": -411, "worg": -412, "wraith": -413, "wyvern": -414, "xorn": -415, "Yeti": -416, "Yochlol": -417, "young black dragon": -418, "young blue dragon": -419, "young brass dragon": -420, "young bronze dragon": -421, "young copper dragon": -422, "young gold dragon": -423, "young green dragon": -424, "young red dragon": -425, "Young Red Shadow Dragon": -426, "Young Remorhaz": -427, "young silver dragon": -428, "young white dragon": -429, "Yuan-ti Abomination": -430, "Yuan-ti Malison Type 1": -431, "Yuan-ti Malison Type 2": -432, "Yuan-ti Malison Type 3": -433, "Yuan-ti Pureblood": -434, "zombie": -435 };
	}

	var dialogObject = {
	// Setup initial listvar myList = {apple:-1,pear:-1,grape:1};// Load into dropdowndialog.load({"pop1":myList});
	list: ddList,
	execDialog: function () { return app.execDialog(dialogDescriptor); },
	selectedItem: function (control) {
	if (typeof (control) === "string") {
	control = this[control];
	}
	for (var item in control) {
	if (typeof (control[item]) === "object") {
	var r = this.selectedItem(control[item]);
	if (r !== undefined) {
	return r;
	}
	} else {
	if (control[item] > 0) {
	return control[item];
	}
	}
	}
	}
	};
	return dialogObject;
	}
	 */

	// NON PRIORITY FUNCTIONS

	function removeCommas(str) {
		return (str.replace(/,/g, ''));
	}

	// DATA SECTION

	var encounterTables = {
		"basetable": {
			"1": [25, 50, 75, 100],
			"2": [50, 100, 150, 200],
			"3": [75, 150, 225, 400],
			"4": [125, 250, 375, 500],
			"5": [250, 500, 750, 1100],
			"6": [300, 600, 900, 1400],
			"7": [350, 750, 1100, 1700],
			"8": [450, 900, 1400, 2100],
			"9": [550, 1100, 1600, 2400],
			"10": [600, 1200, 1900, 2800],
			"11": [800, 1600, 2400, 3600],
			"12": [1000, 2000, 3000, 4500],
			"13": [1100, 2200, 3400, 5100],
			"14": [1250, 2500, 3800, 5700],
			"15": [1400, 2800, 4300, 6400],
			"16": [1600, 3200, 4800, 7200],
			"17": [2000, 3900, 5900, 8800],
			"18": [2100, 4200, 6300, 9500],
			"19": [2400, 4900, 7300, 1090],
			"20": [2800, 5700, 8500, 12700],
		},

		"maxexp": {
			"1": [1, 25, 50, 75, 50],
			"2": [1.5, 33, 67, 100, 133],
		}
	}
	var modArray = ["N/A", -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10];

	var challengeArray = {
		"0": ["10", "2"],
		"1/8": ["25", "2"],
		"1/4": ["50", "2"],
		"1/2": ["100", "2"],
		"1": ["200", "2"],
		"2": ["450", "2"],
		"3": ["700", "2"],
		"4": ["1,100", "2"],
		"5": ["1,800", "3"],
		"6": ["2,300", "3"],
		"7": ["2,900", "3"],
		"8": ["3,900", "3"],
		"9": ["5,000", "4"],
		"10": ["5,900", "4"],
		"11": ["7,200", "4"],
		"12": ["8,400", "4"],
		"13": ["10,000", "5"],
		"14": ["11,500", "5"],
		"15": ["13,000", "5"],
		"16": ["15,000", "5"],
		"17": ["18,000", "6"],
		"18": ["20,000", "6"],
		"19": ["22,000", "6"],
		"20": ["25,000", "6"],
		"21": ["33,000", "7"],
		"22": ["41,000", "7"],
		"23": ["50,000", "8"],
		"24": ["62,000", "8"],
		"25": ["75,000", "8"],
		"26": ["90,000", "8"],
		"27": ["105,000", "8"],
		"28": ["120,000", "8"],
		"29": ["135,000", "9"],
		"30": ["155,000", "9"],
	}
	/*
	function challengeExp(rating) {
	if (rating == 0) { return "10"; }
	else if (rating == '1/8') { return "25"; }
	else if (rating == '1/4') { return "50"; }
	else if (rating == '1/2') { return "100"; }
	else if (rating == 1) { return "200"; }
	else if (rating == 2) { return "450"; }
	else if (rating == 3) { return "700"; }
	else if (rating == 4) { return "1,100"; }
	else if (rating == 5) { return "1,800"; }
	else if (rating == 6) { return "2,300"; }
	else if (rating == 7) { return "2,900"; }
	else if (rating == 8) { return "3,900"; }
	else if (rating == 9) { return "5,000"; }
	else if (rating == 10) { return "5,900"; }
	else if (rating == 11) { return "7,200"; }
	else if (rating == 12) { return "8,400"; }
	else if (rating == 13) { return "10,000"; }
	else if (rating == 14) { return "11,500"; }
	else if (rating == 15) { return "13,000"; }
	else if (rating == 16) { return "15,000"; }
	else if (rating == 17) { return "18,000"; }
	else if (rating == 18) { return "20,000"; }
	else if (rating == 19) { return "22,000"; }
	else if (rating == 20) { return "25,000"; }
	else if (rating == 21) { return "33,000"; }
	else if (rating == 22) { return "41,000"; }
	else if (rating == 23) { return "50,000"; }
	else if (rating == 24) { return "62,000"; }
	else if (rating == 25) { return "75,000"; }
	else if (rating == 26) { return "90,000"; }
	else if (rating == 27) { return "105,000"; }
	else if (rating == 28) { return "120,000"; }
	else if (rating == 29) { return "135,000"; }
	else if (rating == 30) { return "155,000"; }
	else { return ""; }
	}
	 */

	/*
	function getMod(stat) {
	if (stat == 30) { return "+10"; }
	else if (stat == 28 || stat == 29) { return "+9"; }
	else if (stat == 26 || stat == 27) { return "+8"; }
	else if (stat == 24 || stat == 25) { return "+7"; }
	else if (stat == 22 || stat == 23) { return "+6"; }
	else if (stat == 20 || stat == 21) { return "+5"; }
	else if (stat == 18 || stat == 19) { return "+4"; }
	else if (stat == 16 || stat == 17) { return "+3"; }
	else if (stat == 14 || stat == 15) { return "+2"; }
	else if (stat == 12 || stat == 13) { return "+1"; }
	else if (stat == 10 || stat == 11) { return "0"; }
	else if (stat == 8 || stat == 9) { return "-1"; }
	else if (stat == 6 || stat == 7) { return "-2"; }
	else if (stat == 4 || stat == 5) { return "-3"; }
	else if (stat == 2 || stat == 3) { return "-4"; }
	else if (stat == 1) { return "-5"; }
	else { return "N/A"; }
	}
	 */

	/*
	function layerControl() {
	if (Monster0 = true) {

	this.getField("Monster0.Shield").display = display.visible;

	if (Init == true) {
	for (var i = 1; i < 6; i++) {
	this.getField("Monster0.HP" + i + ".InitiativeBox_af_image").display = display.hidden;
	this.getField("Monster0.HP" + i + ".InitiativeCheckbox").display = display.hidden;
	}
	}
	}
	if (Monster1 == true) {

	this.getField("Monster1.Shield").display = display.visible;

	if (Init == true) {
	for (var i = 1; i < 6; i++) {
	this.getField("Monster1.HP" + i + ".InitiativeBox_af_image").display = display.hidden;
	this.getField("Monster1.HP" + i + ".InitiativeCheckbox").display = display.hidden;
	}
	}
	}

	if (display == "Show") {
	return
	}
	}
	 */

	/*
	DUNGEONS & DRAGONS, D&D, Wizards of the Coast, Forgotten Realms, the dragon ampersand, Player’s Handbook, Monster Manual, Dungeon Master’s Guide, D&D Adventurers League
	all other Wizards of the Coast product names and their respective logos are trademarks of Wizards of the Coast in the USA and other countries. All characters and their distinctive
	likenesses are property of Wizards of the Coast. This material is protected under the copyright laws of the United States of America. Any reproduction or unauthorized use of the
	material or artwork contained herein is prohibited without the express written permission of Wizards of the Coast. ©2016 Wizards of the Coast LLC, PO Box 707, Renton, WA 98057-0707, USA.
	Manufactured by Hasbro SA, Rue Emile-Boéchat 31, 2800 Delémont, CH. Represented by Hasbro Europe, 4 The Square, Stockley Park, Uxbridge, Middlesex, UB11 1ET, UK.
	All other original material in this work is ©2017 by Matt Berg (Shwaffle) and published under the Community Content Agreement for Dungeon Masters Guild.
	 */
