// Because Acrobat loads everything in a specific order this needs to be at the very end of the document. 

var bookArray = {
	// [0]: Full monster manual array
	// [1]: Monster listing for dialog
	// [2]: Manual abbreviation
	// [3]: Full Manual Name
	// [4]: Icon related information. "Blank" if no icon or image is available for the manual, otherwise state the full book name.
	CoS: [CoS, CoS_Dialog, "CoS", "Curse of Strahd","Curse of Strahd"],
	EE: [EE, EE_Dialog, "EE", "Elemental Evil","Elemental Evil"],
	MM: [MM, MM_Dialog, "MM", "Monster Manual","Blank"],
	MToF: [MToF, MToF_Dialog, "MToF", "Mordenkainen's Tome of Foes","Blank"],
	RoD: [RoD, RoD_Dialog, "RoD", "Rage of Demons","Rage of Demons"],
	SKT: [SKT, SKT_Dialog, "SKT", "Storm King's Thunder","Storm King's Thunder"],
	TftYP: [TftYP, TftYP_Dialog, "TftYP", "Tales from the Yawning Portal","Tales from the Yawning Portal"],
	Tortle: [Tortle, Tortle_Dialog, "Tortle", "The Tortle Package","The Tortle Package"],
	ToA: [ToA, ToA_Dialog, "ToA", "Tomb of Annihilation","Tomb of Annihilation"],
	ToB: [ToB, ToB_Dialog, "ToB", "Tome of Beasts","Blank"],
	ToD: [ToD, ToD_Dialog, "ToD", "Tyranny of Dragons","Tyranny of Dragons"],
	VGtM: [VGtM, VGtM_Dialog, "VGtM", "Volos Guide to Monsters","Blank"],
}
