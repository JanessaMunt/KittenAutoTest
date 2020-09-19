function selectOptions() {
	$("#optionSelect").toggle();
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


var autoList = ["bcoin", "hunt", "trade", "praise", "tradeLeviathans", "tradeNaga"]

class autoEnabled {
	constructor(name){
		this.name = name;
		this.enabled = false;
		this.other = null;
	}
}

//create objects to check for auto on/off out of list
for(var i=0; i<autoList.length; i++){
  eval(autoList[i] + " = new autoEnabled(\"" + autoList[i] + "\")");
}

tradeNaga.other = .90;

var resources = [
  ["catnip", "wood", 50, .30, false, .95],
  ["wood", "beam", 175, .30, false, .95],
	["minerals", "slab", 250, .30, false, .95],
  ["coal", "steel", 100, .30, false, .95],
  ["iron", "plate", 125, .30, false, .95],
  ["oil", "kerosene", 7500, .30, false, .95],
  ["uranium", "thorium", 250, .30, false, .95],
	["unobtainium", "eludium", 1000, .30, false, .95]
];

var htmlMenuAddition = '<div id="farRightColumn" class="column">' +
'<a id="scriptOptions" onclick="selectOptions()"> | testscript </a>' +

'<div id="optionSelect" style="display:none; margin-top:-500px; margin-left:-100px; width:250px" class="dialog help">' +
'</div>' +
'</div>'
$("#footerLinks").append(htmlMenuAddition);

var div = document.getElementById('optionSelect');
for(var i=0; i<autoList.length; i++){
	div.innerHTML += '<button id="newbutton" style="color:red" style= "float:left" class="btnContent" > Placeholder </button><br>' ;
	document.getElementById('newbutton').setAttribute("onclick","autoSwitch(\'" + autoList[i] +"\',\'" + "auto"  + autoList[i]  + "\'" + ")" );
	document.getElementById("newbutton").innerHTML = "Auto " + capitalizeFirstLetter(autoList[i]);
	document.getElementById("newbutton").id = "auto" + autoList[i];
}


//toggle buttons
function autoSwitch(objectName, buttonName) {
	if (window[objectName].enabled == false) { //check if autocraft off on for this resource
		window[objectName].enabled = true; //turn on autocraft
		gamePage.msg(document.getElementById(""+buttonName+"").innerHTML + ' is now on'); //pring autocraft is on message
		document.getElementById(""+buttonName+"").style.color = 'black'; //change button to black
	}
	else if (window[objectName].enabled == true) { //check if autocraftis on for this resource
		window[objectName].enabled = false; //turn off autocraft
		gamePage.msg(document.getElementById(""+buttonName+"").innerHTML + ' is now off'); //print autocraft is off message
		document.getElementById(""+buttonName+"").style.color = 'red'; //change button to red
	}
}

/*
var div = document.getElementById('optionSelect');
for(var i=0; i<autoEnabled.length; i++){
	div.innerHTML += '<button id="newbutton" style="color:red" style= "float:left"> Placeholder </button><br>' ;
	document.getElementById('newbutton').setAttribute("onclick","autoSwitch(\'" + i +"\',\'" + "auto"  + autoEnabled[i][0]  + "\'" + ")" );
	document.getElementById("newbutton").innerHTML = "Auto " + capitalizeFirstLetter(autoEnabled[i][0]);
	document.getElementById("newbutton").id = "auto" + autoEnabled[i][0];
}
*/
/*
div.innerHTML += '<button id="autoBcoinButton" style="color:red" onclick="autoSwitch(0, \'autoBcoinButton\')" style= "float:left"> Auto Trade BCoin </button>' ;//button for auto Bcoin traiding
div.innerHTML += '<button id="autoHunt" style="color:red" onclick="autoSwitch(1, \'autoHunt\')"> Auto Hunt </button>' ;

div.innerHTML += '<button id="autoTradeNagasButton" style="color:red" onclick="autoSwitch(5, \'autoTradeNagasButton\')"> Auto Trade Nagas </button>' ;
div.innerHTML += '<span id="nagaFillAmount" title="Between 0 and 100"><input id="nagaInput" style="width:25px" onchange="autoEnabled[5][2] = this.value/100" value="30"></span>';

div.innerHTML += '<button id="autoTradeLeviathansButton" style="color:red" onclick="autoSwitch(4, \'autoTradeLeviathansButton\')"> Auto Trade Leviathans </button>' ;
//	div.innerHTML += '<button id="autoTrade" style="color:red" onclick="autoSwitch(3, \'autoTrade\')"> Auto Trade </button>' ;
div.innerHTML += '<button id="autoPraiseButton" style="color:red" onclick="autoSwitch(3, \'autoPraiseButton\')"> Auto Praise</button>' ;
*/

for(var i=0; i<resources.length; i++){
	var resourceName = capitalizeFirstLetter(resources[i][1]);
	//toggle buttons for auto crafting each basic resource
	div.innerHTML += '<button id="newbutton" style="color:red" onclick="placeholder"  style="width:150px"> placeholder </button>';  //autopopulate buttons
	document.getElementById('newbutton').setAttribute("onclick","autoCraftingSwitch(\'" + i +"\',\'" + "auto"  + resourceName  + "\'" + ")" );
	document.getElementById("newbutton").innerHTML = "Autocraft " + resourceName;
	document.getElementById("newbutton").id = "auto" + resourceName;

	//labels for each resource
	div.innerHTML += '<label id="newlabel">% </label>' ; //autopopulate labels
	document.getElementById("newlabel").id = "auto" + resourceName;

	//input for what % of each resource to craft
	div.innerHTML += '<span id="newspan" title="Between 0 and 100"><input id="newinput" style="width:25px" onchange="placeholder" value="30"></span>';  //autopopulate inputs
	document.getElementById("newspan").id = "auto" + resourceName + "Span";
	document.getElementById("newinput").setAttribute("onchange","resources["+i+"][3] = this.value/100");
	document.getElementById("newinput").id = "auto" + resourceName + "input";

	//input for threshold of resource to craft at
	div.innerHTML += '<span id="newspan" title="Between 0 and 100"><input id="newinput" style="width:25px" onchange="placeholder" value="95"></span><br>';  //autopopulate inputs
	document.getElementById("newspan").id = "auto" + resourceName + "SpanThreshold";
	document.getElementById("newinput").setAttribute("onchange","resources[" + i + "][5] = this.value/100");
	document.getElementById("newinput").id = "auto" + resourceName + "inputThreshold";
}

/*
'<button id="autoSlab" style="color:red" onclick="autoSwitch(3, \'autoSlab\')"> Auto Craft Slab </button>' + //button for auto steel crafting
'<label id="autoSlabLabel">Craft % </label>' +
'<span id="autoSlabSpan" title="Between 0 and 100"><input id="autoSlabText" type="text" style="width:25px" onchange="resources[2][3] = this.value/100" value="30"></span></br></br>' + //input for % of steel to craft

'<button id="autoSteel" style="color:red" onclick="autoSwitch(3, \'autoSteel\')"> Auto Craft Steel </button>' + //button for auto steel crafting
'<label id="autoSteelLabel">Craft % </label>' +
'<span id="autoSteelSpan" title="Between 0 and 100"><input id="autoSteelText" type="text" style="width:25px" onchange="resources[3][3] = this.value/100" value="30"></span></br></br>' + //input for % of steel to craft
*/

/*
function autoSwitch(on, buttonName) {
	if (autoEnabled[on][1] == false) { //check if autocraft off on for this resource
		autoEnabled[on][1] = true; //turn on autocraft
		gamePage.msg(document.getElementById(""+buttonName+"").innerHTML + ' is now on'); //pring autocraft is on message
		document.getElementById(""+buttonName+"").style.color = 'black'; //change button to black
	}
	else if (autoEnabled[on][1] == true) { //check if autocraftis on for this resource
		autoEnabled[on][1] = false; //turn off autocraft
		gamePage.msg(document.getElementById(""+buttonName+"").innerHTML + ' is now off'); //print autocraft is off message
		document.getElementById(""+buttonName+"").style.color = 'red'; //change button to red
	}
}

*/

//toggle crafting on/off
function autoCraftingSwitch(resNum, varName) {
	if (resources[resNum][4] == false) { //check if autocraft off on for this resource
		resources[resNum][4] = true; //turn on autocraft
		gamePage.msg('Auto craft' + resources[resNum][1] + ' is now on'); //pring autocraft is on message
		document.getElementById(""+varName+"").style.color = 'black'; //change button to black
	}
	else if (resources[resNum][4] == true) { //check if autocraftis on for this resource
		resources[resNum][4] = false; //turn off autocraft
		gamePage.msg('Auto craft' + resources[resNum][1] + ' is now off'); //print autocraft is off message
		document.getElementById(""+varName+"").style.color = 'red'; //change button to red
	}
}

function autoCraft(){
	for(var i=0; i < resources.length; i++) { //cycle through all resources
		var curRes = gamePage.resPool.get(resources[i][0]).value; //get current amount of resource
		var resourcePerSec = gamePage.getResourcePerTick(resources[i][0], 0) * 5; //get resources per second
		var triggerAutoCraft = resources[i][5]; //calculate how full the resource needs to be to trigger autocraft
	  if(resources[i][4] == true && curRes> (gamePage.resPool.get(resources[i][0]).maxValue)*resources[i][5]){ //check if autocraft is on & if resource is at threshold to auto craft
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
function autoBcoin(){
	if(bcoin.enabled == true){
		if(this.game.calendar.cryptoPrice> 1095 && gamePage.resPool.get("blackcoin").value > 0){ //check if bcoin price is over 1095
		self.game.diplomacy.sellBcoin(); //sellbcoin
		}
		if(this.game.calendar.cryptoPrice < 900 && gamePage.resPool.get("relic").value > this.game.calendar.cryptoPrice){ //check if bcoin price is under 900
		self.game.diplomacy.buyBcoin(); //buybcoin
		}
	}
}

//auto trade
function autoTrade(){

}

//auto trade leviathans
function autoTradeLeviathans(){
  if( tradeLeviathans.enabled == true && gamePage.resPool.get("unobtainium").value > 5000){//check if Leviathan trade is enabled and if enough unobtanium for trade
  gamePage.diplomacy.tradeAll(game.diplomacy.get("leviathans"), Math.floor(gamePage.resPool.get("unobtainium").value/5000)); //trade with levi
	}
	else{
		return;
	}
}


//auto trade Nagas
function autoTradeNagas(){
	if(tradeNaga.enabled == true && gamePage.resPool.get("minerals").value < tradeNaga.other*(gamePage.resPool.get("minerals").maxValue)){ //check if enabled and if under mineral threshold
	  gamePage.diplomacy.tradeAll(game.diplomacy.get("nagas"), 2878); //trade with naga
	 }
	else{
		return;
	}
}


//autohunt
function autoHunt(){
	if (hunt.enabled == true && gamePage.resPool.get("manpower").value > (gamePage.resPool.get("manpower").maxValue - gamePage.resPool.get("manpower").perTickCashed *5)) {
		gamePage.village.huntAll();
	}
	else{
		return;
	}
}


//autopraise
function autoPraise(){
	if(praise.enabled == true){
		gamePage.religion.praise();
	}
	else{
		return;
	}
}

//auto run things
setInterval(function(){
	autoCraft(); //autocraft
	autoBcoin(); //auto Bcoin
	autoTrade();
	autoTradeLeviathans(); //auto trade Leviathans
	autoTradeNagas();
	autoHunt(); //auto Hunt
	autoPraise(); // auto Praise
}, 1000); //repeat every second

//speed up time
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
