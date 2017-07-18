
	var yourCharName = "", dfndrName = "", n=1, defeatFlag = true;
	var yourCharID = "", dfndrID = "";
	var characters = {
		leiaChar: {
			name: "leia",
			healthPts : 120,
			attkPwr: 8,
			newAttkPwr: 8,
			cntrAttkPwr: 8
		},
		lukeChar: {
			name: "luke",
			healthPts : 100,
			attkPwr: 5,
			newAttkPwr: 5,
			cntrAttkPwr: 5
		},
		reyChar: {
			name: "rey",
			healthPts : 150,
			attkPwr: 20,
			newAttkPwr: 20,
			cntrAttkPwr: 20
		},
		hansoloChar: {
			name: "han-solo",
			healthPts : 180,
			attkPwr: 25,
			newAttkPwr: 25,
			cntrAttkPwr: 25
		}
	};

	function addCharacters(charName, srcName, healthPt, charNameID, charNumID, imgClassName, 
		subDivClassContainer, divClassToCreate) {
		//create the div, name, healthpoint tags and image
		var createDiv = $("<div>");
		var createName = $("<h6>");
		var createHealthPt = $("<h6>");
		var createALink = $("<a>");
		var imgTag = $("<img>");

		//add class name for div
		createDiv.addClass(subDivClassContainer);

		//add html text name of the character to h6
		createName.html(charName);
		createName.addClass("chrName");
		createName.attr('id',charNameID);
		createName.appendTo(createALink);

		//add image src to image
		imgTag.attr('src', srcName);		
		imgTag.addClass(imgClassName);
		imgTag.appendTo(createALink);

		//add html text health point of the character to h6
		createHealthPt.html(healthPt);
		createHealthPt.addClass("healthPts");
		createHealthPt.attr('id',charNumID);
		createHealthPt.appendTo(createALink);

		//add href to <a> tag
		createALink.attr("href", "");	
		// createALink.addClass("aTagPic");

		// add <a> to div
		createDiv.append(createALink);
		//add the div to the parent div container
		$("#"+divClassToCreate).append(createDiv);		
	}
	
	function createInitialChars() {
		//call function to add the characters		
		addCharacters("leia","assets/images/leia.jpg", "120", "charName1", "charHP1", 
			"imgClassRow1Chars", "subDivClassRow1CharsImgs", "divClassRow1CharsImgs");
		addCharacters("luke","assets/images/luke.jpg", "100", "charName2", "charHP2", 
			"imgClassRow1Chars", "subDivClassRow1CharsImgs", "divClassRow1CharsImgs");
		addCharacters("rey","assets/images/Rey.png", "150", "charName3", "charHP3", 
			"imgClassRow1Chars", "subDivClassRow1CharsImgs", "divClassRow1CharsImgs");
		addCharacters("han-solo","assets/images/han-solo.jpg", "180", "charName4", "charHP4", 
			"imgClassRow1Chars", "subDivClassRow1CharsImgs", "divClassRow1CharsImgs");
	}

	function getAttackPwr(prop) {
		//get property value
		return characters[prop].name;
	}

	function getAttackPwr(prop) {
		//get property value
		return characters[prop].attkPwr;
	}

	function setAttackPwr(prop, propValue) {
		//set property value
		console.log("set attkPwr - prop = " + prop + ", propValue = " + propValue);
		characters[prop].attkPwr = propValue;
	}

	function getNewAttackPwr(prop) {
		//get property value
		return characters[prop].newAttkPwr;
	}

	function setNewAttackPwr(prop, propValue) {
		//set property value
		console.log("set new attkPwr - prop = " + prop + ", propValue = " + propValue);
		characters[prop].newAttkPwr = propValue;
	}

	function getCntrAttackPwr(prop) {
		//get property value
		return characters[prop].cntrAttkPwr;
	}

	function setCntrAttackPwr(prop, propValue) {
		//set property value
		console.log("set new cntr attkPwr - prop = " + prop + ", propValue = " + propValue);
		characters[prop].cntrAttkPwr = propValue;
	}

	function getHealthPts(prop) {
		//get property value
		return characters[prop].healthPts;
	}

	function setHealthPts(prop, propValue) {
		//set property value
		console.log("set hlth pts - prop = " + prop + ", propValue = " + propValue);
		characters[prop].healthPts = propValue;
	}

	function displayAttackPwr(dName, propValue) {
		//display attack power
		console.log("dName = " + dName + ", propValue = " + propValue);
		$(".pTagAttackPwr").text("You attacked " + dName + " for " + propValue + " damage.");
	}

	function displayCounterAttackPwr(dName, propValue) {
		//display counter attack power
		console.log("dName = " + dName + ", propValue = " + propValue);
		$(".pTagCounterAttackPwr").text(dName + " attacked you back for " + propValue + " damage.");
	}

	function displayHlthPoints(hpName, propValue) {
		console.log("hpName = " + hpName + ", propValue = " + propValue);
		$("#"+hpName).text(propValue);
	}

	function attackClicked() {
		var yourCharHlthPts = 0, yourCharAPwr = 0, yourCharNewAPwr = 0, yourCharCntrAPwr = 0;
		var dfndrCharHlthPts = 0, dfndrCharAPwr = 0, dfndrCharCntrAPwr = 0;
		var yourPropName = "", dfndrPropName = "", yourHlthPts = 0, dfndrHlthPts = 0;

		console.log("your char = " + yourCharName + ", dfndr char = " + dfndrName);

		//get your char property values
		if(yourCharName==="leia") {
			yourCharHlthPts = getHealthPts("leiaChar");
			yourCharAPwr = getAttackPwr("leiaChar");
			yourCharNewAPwr = getNewAttackPwr("leiaChar");
			yourCharCntrAPwr = getCntrAttackPwr("leiaChar");
			yourPropName = "leiaChar";
			yourHlthPts = "charHP1";
		}
		else if(yourCharName==="luke") {
			yourCharHlthPts = getHealthPts("lukeChar");
			yourCharAPwr = getAttackPwr("lukeChar");
			yourCharNewAPwr = getNewAttackPwr("lukeChar");
			yourCharCntrAPwr = getCntrAttackPwr("lukeChar");
			yourPropName = "lukeChar";
			yourHlthPts = "charHP2";
		}
		else if(yourCharName==="rey") {
			yourCharHlthPts = getHealthPts("reyChar");
			yourCharAPwr = getAttackPwr("reyChar");
			yourCharNewAPwr = getNewAttackPwr("reyChar");
			yourCharCntrAPwr = getCntrAttackPwr("reyChar");
			yourPropName = "reyChar";
			yourHlthPts = "charHP3";
		}
		else if(yourCharName==="han-solo") {
			yourCharHlthPts = getHealthPts("hansoloChar");
			yourCharAPwr = getAttackPwr("hansoloChar");
			yourCharNewAPwr = getNewAttackPwr("hansoloChar");
			yourCharCntrAPwr = getCntrAttackPwr("hansoloChar");
			yourPropName = "hansoloChar";
			yourHlthPts = "charHP4";
		};
		console.log("yourCharHlthPts = " + yourCharHlthPts + ", yourCharAPwr = " + yourCharAPwr + 
			", yourCharNewAPwr = " + yourCharNewAPwr + ", yourCharCntrAPwr = " + yourCharCntrAPwr);

		//get defender values
		if(dfndrName==="leia") {
			dfndrCharHlthPts = getHealthPts("leiaChar");
			dfndrCharAPwr = getAttackPwr("leiaChar");
			dfndrCharCntrAPwr = getCntrAttackPwr("leiaChar");
			dfndrPropName = "leiaChar";
			dfndrHlthPts = "charHP1";
		}
		else if(dfndrName==="luke") {
			dfndrCharHlthPts = getHealthPts("lukeChar");
			dfndrCharAPwr = getAttackPwr("lukeChar");
			dfndrCharCntrAPwr = getCntrAttackPwr("lukeChar");
			dfndrPropName = "lukeChar";
			dfndrHlthPts = "charHP2";
		}
		else if(dfndrName==="rey") {
			dfndrCharHlthPts = getHealthPts("reyChar");
			dfndrCharAPwr = getAttackPwr("reyChar");
			dfndrCharCntrAPwr = getCntrAttackPwr("reyChar");
			dfndrPropName = "reyChar";
			dfndrHlthPts = "charHP3";
		}
		else if(dfndrName==="han-solo") {
			dfndrCharHlthPts = getHealthPts("hansoloChar");
			dfndrCharAPwr = getAttackPwr("hansoloChar");
			dfndrCharCntrAPwr = getCntrAttackPwr("hansoloChar");
			dfndrPropName = "hansoloChar";
			dfndrHlthPts = "charHP4";
		};
		console.log("dfndrCharHlthPts = " + dfndrCharHlthPts + ", dfndrCharAPwr = " + dfndrCharAPwr + 
			", dfndrCharCntrAPwr = " + dfndrCharCntrAPwr);

		//check health point is > 0
		if((yourCharHlthPts>0) && (dfndrCharHlthPts>0) && (n<4)) {
			//display attack pwr and counter attk pwr
			displayAttackPwr(dfndrName, yourCharNewAPwr);
			displayCounterAttackPwr(dfndrName, dfndrCharCntrAPwr);			

			//minus dfndr's health points
			console.log("dfndrCharHlthPts = " + dfndrCharHlthPts + ", yourCharNewAPwr = " + yourCharNewAPwr);
			dfndrCharHlthPts -= yourCharNewAPwr;
			setHealthPts(dfndrPropName, dfndrCharHlthPts);
			displayHlthPoints(dfndrHlthPts,dfndrCharHlthPts);

			//minus your health points
			console.log("yourCharHlthPts = " + yourCharHlthPts + ", dfndrCharCntrAPwr = " + dfndrCharCntrAPwr);
			yourCharHlthPts -= dfndrCharCntrAPwr;
			setHealthPts(yourPropName, yourCharHlthPts);
			displayHlthPoints(yourHlthPts,yourCharHlthPts);

			//add your attack power
			console.log("yourCharNewAPwr = " + yourCharNewAPwr + ", yourCharAPwr = " + yourCharAPwr);
			yourCharNewAPwr += yourCharAPwr;
			setNewAttackPwr(yourPropName, yourCharNewAPwr);			
		}
		
		//check hlth pts is <= 0		
		if(yourCharHlthPts<=0) {
			//game over
			$(".pTagAttackPwr").text("");
			$(".pTagCounterAttackPwr").text("You lost!!! Game over!!!");
			$(".resetGameClassName").show();				
			//display restart button
		}
		else if(dfndrCharHlthPts<=0) {
			//disappear enemy
			n++;
			console.log("n = " + n);
			if(n>3) {
				$(".pTagAttackPwr").text("");
				if(yourCharHlthPts>0){				
					$(".pTagCounterAttackPwr").text("You won!!! Game over!!!");				
				}				
				$(".resetGameClassName").show();
			}
			else {
				$("#"+dfndrID).parent().remove();
				$(".pTagAttackPwr").text("");
				$(".pTagCounterAttackPwr").text("You have defeated " + dfndrName + 
					", you can choose to fight another enemy.");
			}
		}
		if(n>3) {
			$(".pTagAttackPwr").text("");
			if(yourCharHlthPts>0){				
				$(".pTagCounterAttackPwr").text("You won!!! Game over!!!");				
			}
			else if(dfndrCharHlthPts>0){
				$(".pTagCounterAttackPwr").text("You lost!!! Game over!!!");
			}
			$(".resetGameClassName").show();			
		}		
}

// ------------------ execution start -------------------

$(document).ready(function() {
	$(".resetGameClassName").hide();
	// call function to create 4 characters
	createInitialChars();	

	//-------------------click event to pick your character------------------
	$(".imgClassRow1Chars").on("click", function() {		
		// console.log("this = " + this);

		//get src path
		var srcPath = this.src;
		// console.log("srcPath full = " + srcPath);		
		srcPath = srcPath.substring(srcPath.indexOf("assets"), srcPath.length);
		// console.log("srcPath substring = " + srcPath);

		//get character name and its id
		var playerNameId = $(this).siblings('.chrName').attr('id');
		var playerName = $("#"+playerNameId).text();
		yourCharName = playerName;
		// alert("sibling name id = " + playerNameId + " , name = " + playerName);

		//get character health points and its id
		var playerHealthPtId = $(this).siblings('.healthPts').attr('id');
		var playerHealthPt = $("#"+playerHealthPtId).text();
		// alert("sibling hp id = " + playerHealthPtId + " , hp = " + playerHealthPt);

		//empty the top row with all 4 characters
		$("#divClassRow1CharsImgs").remove();

		//create your character and enemy characters
		if(playerName==="leia") {
			addCharacters("leia","assets/images/leia.jpg", "120", "charName1", "charHP1", 
				"imgClassYourChar", "subDivContainerChr", "divClassYourCharImg");		
			// alert("inside if true - leia");
		}
		else {
			addCharacters("leia","assets/images/leia.jpg", "120", "charName1", "charHP1", 
				"imgClassEnmyChar", "subDivContainerEnmy", "divClassEnemyCharImgs");
			// alert("inside else - leia");
		}
		if(playerName==="luke") {
			addCharacters("luke","assets/images/luke.jpg", "100", "charName2", "charHP2", 
				"imgClassYourChar", "subDivContainerChr", "divClassYourCharImg");		
			// alert("inside if true - luke");
		}
		else {
			addCharacters("luke","assets/images/luke.jpg", "100", "charName2", "charHP2", 
				"imgClassEnmyChar", "subDivContainerEnmy", "divClassEnemyCharImgs");
			// alert("inside else - luke");
		}
		if(playerName==="rey") {
			addCharacters("rey","assets/images/Rey.png", "150", "charName3", "charHP3", 
				"imgClassYourChar", "subDivContainerChr", "divClassYourCharImg");		
			// alert("inside if true - rey");
		}
		else {
			addCharacters("rey","assets/images/Rey.png", "150", "charName3", "charHP3", 
				"imgClassEnmyChar", "subDivContainerEnmy", "divClassEnemyCharImgs");
			// alert("inside else - rey");
		}
		if(playerName==="han-solo") {
			addCharacters("han-solo","assets/images/han-solo.jpg", "180", "charName4", "charHP4", 
				"imgClassYourChar", "subDivContainerChr", "divClassYourCharImg");		
			// alert("inside if true - solo");
		}
		else {
			addCharacters("han-solo","assets/images/han-solo.jpg", "180", "charName4", "charHP4", 
				"imgClassEnmyChar", "subDivContainerEnmy", "divClassEnemyCharImgs");
			// alert("inside else - solo");
		}
		// alert("end");
		$(".subDivContainerEnmy").css({"background": "red", "border-color": "black"});
		$(".subDivContainerEnmy").children().css({"color": "black"});

		//set return to false, otherwise the page reloads and goes back to the initial stage where all
		// characaters are displayed on the top
		return false;		
	});
	
	//-----------------------------event to pick defender character-------------------------	
	$(document).on("click", ".imgClassEnmyChar", function() {
		// console.log("dfndr this = " + this);
		$(".pTagCounterAttackPwr").text("");
		//get character name and its id
		var playerNameId = $(this).siblings('.chrName').attr('id');
		dfndrID = playerNameId;
		var playerName = $("#"+playerNameId).text();
		dfndrName = playerName;
		// alert("sibling name id = " + playerNameId + " , name = " + playerName);

		if(playerName==="leia") {
			$("#"+playerNameId).parent().remove();
			addCharacters("leia","assets/images/leia.jpg", "120", "charName1", "charHP1", 
				"imgClassDfndrChar", "subDivContainerDfndr", "divClassDfndrCharImg");		
			// alert("inside if true - leia");
		}
		else if(playerName==="luke") {
			$("#"+playerNameId).parent().remove();
			addCharacters("luke","assets/images/luke.jpg", "100", "charName2", "charHP2", 
				"imgClassDfndrChar", "subDivContainerDfndr", "divClassDfndrCharImg");		
			// alert("inside if true - luke");
		}
		else if(playerName==="rey") {
			$("#"+playerNameId).parent().remove();
			addCharacters("rey","assets/images/Rey.png", "150", "charName3", "charHP3", 
				"imgClassDfndrChar", "subDivContainerDfndr", "divClassDfndrCharImg");		
			// alert("inside if true - rey");
		}
		else if(playerName==="han-solo") {
			$("#"+playerNameId).parent().remove();
			addCharacters("han-solo","assets/images/han-solo.jpg", "180", "charName4", "charHP4", 
				"imgClassDfndrChar", "subDivContainerDfndr", "divClassDfndrCharImg");		
			// alert("inside if true - solo");
		}

		// alert("end");
		$(".subDivContainerDfndr").css({"background": "black", "border-color": "green"});
		$(".subDivContainerDfndr").children().css({"color": "white"});
		// debugger;
		return false;		
	});

	$(".attack").on("click", function() {
		//check defender is chosen
		// console.log("empty = " + $(".subDivContainerDfndr").is(':empty'));
		// if ( $(".subDivContainerDfndr").is(':empty') ){
		// 	$(".pTagAttackPwr").text("");
		// 	$(".pTagCounterAttackPwr").text("Choose enemy to fight.");			
		// }
		// else 
		  	attackClicked();
		
		// debugger;
		return false;
	});

	$(".resetGameClassName").on("click", function() {
		location.reload(true);
		return false;
	});	
});