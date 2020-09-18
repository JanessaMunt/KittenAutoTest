function selectOptions() {
	$("#optionSelect").toggle();
};

var autoBcoinEnable = false;
var resources = [
       		["catnip", "wood", 50, .30, false],
            ["wood", "beam", 175, .30, false],
        	["minerals", "slab", 250, .30, false],
            ["coal", "steel", 100, .30, false],
        	["iron", "plate", 125, .30, false],
            ["oil", "kerosene", 7500, .30, false],
            ["uranium", "thorium", 250, .30, false],
			["unobtainium", "eludium", 1000, .30, false]
                ];

var htmlMenuAddition = '<div id="farRightColumn" class="column">' +
'<a id="scriptOptions" onclick="selectOptions()"> | testscript </a>' +

'<div id="optionSelect" style="display:none; margin-top:-400px; margin-left:-100px; width:200px" class="dialog help">' +

'<button id="autoSlab" style="color:red" onclick="autoSwitch(3, \'autoSlab\')"> Auto Craft Slab </button>' + //button for auto steel crafting
'<label id="autoSlabLabel">Craft % </label>' +
'<span id="autoSlabSpan" title="Between 0 and 100"><input id="autoSlabText" type="text" style="width:25px" onchange="resources[2][3] = this.value/100" value="30"></span></br></br>' + //input for % of steel to craft

'<button id="autoSteel" style="color:red" onclick="autoSwitch(3, \'autoSteel\')"> Auto Craft Steel </button>' + //button for auto steel crafting
'<label id="autoSteelLabel">Craft % </label>' +
'<span id="autoSteelSpan" title="Between 0 and 100"><input id="autoSteelText" type="text" style="width:25px" onchange="resources[3][3] = this.value/100" value="30"></span></br></br>' + //input for % of steel to craft

'</div>' +
'</div>'

$("#footerLinks").append(htmlMenuAddition);

//toggle crafting on/off
function autoSwitch(resNum, varName) {
	if (resources[resNum][4] == false) { //check if autocraft off on for this resource
		resources[resNum][4] = true;
		gamePage.msg('Auto craft' + resources[resNum][0] + ' is now on');
		document.getElementById(varName).style.color = 'black';
	} else if (resources[resNum][4] == true) { //check if autocraftis on for this resource
		resources[resNum][4] = false;
		gamePage.msg('Auto craft' + resources[resNum][0] + ' is now off');
		document.getElementById(varName).style.color = 'red';
	}
}


//autocraft steel
function autoCraft(){
	for(var i=0; i < resources.length; i++) { //cycle through all resources
		var curRes = gamePage.resPool.get(resources[i][0]).value; //get current amount of resource
	//	console.log(curRes);
		var resourcePerSec = gamePage.getResourcePerTick(resources[i][0], 0) * 5; //get resources per second
	//	console.log(resourcePerSec);
	  if(resources[i][4] == true && curRes> (gamePage.resPool.get(resources[i][0]).maxValue - resourcePerSec)){ //check if autocraft is on & if resource is going to hit cap soon

			var resourcePerCraft = Math.floor((gamePage.resPool.get(resources[i][0]).maxValue)/(resources[i][2])*(resources[i][3])); //calculate how many crafts to do
			if(gamePage.craft(resources[i][1], resourcePerCraft) == undefined){ //handles when there is not enough iron to make steel
				gamePage.craftAll(resources[i][1])
			}
			else{
		    gamePage.craft(resources[i][1], resourcePerCraft); //craft resource
			}
	  }
	}
}

//autobcoin
/*
function autoBcoin(){
	if(this.game.calendar.cryptoPrice> 1095 ){ //check if bcoin price is over 1095
	self.game.diplomacy.sellBcoin(); //sellbcoin
	}
	if(this.game.calendar.cryptoPrice < 900){ //check if bcoin price is under 900
	self.game.diplomacy.buyBcoin(); //buybcoin
	}
}
*/

//auto run things
setInterval(function(){
	autoCraft(); //autocraft
	//autoBcoin();
}, 1000); //repeat second

//time function

if (!window.speed) speed = 1;
if (!game.realUpdateModel) game.realUpdateModel = game.updateModel;
game.updateModel = () => {
    for (var i = 0; i < speed; i++) {
        if (i !== 0) {
            game.calendar.tick();
        }
        game.realUpdateModel();
    }
}
setSpeed = spd => {
    if (spd >= 1) {
        speed = spd;
        updateSpeedText();
    }
}
speedUp = () => setSpeed(speed * 2);
slowDown = () => setSpeed(speed / 2);
$("#timeSetting").remove();
$('#gamePageContainer').append($('<div id="timeSetting" style="position: absolute; top: 50px; right: 10px;" onclick="event.preventDefault(); speedUp();" oncontextmenu="event.preventDefault(); slowDown();">'));
updateSpeedText = () => $("#timeSetting").html("Speed: " + speed + "x" + (speed > 30 ? " <br />(right click<br />to lower)" : ""));
updateSpeedText(); 
