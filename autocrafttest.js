function selectOptions() {
	$("#optionSelect").toggle();
};

var craftSteel = false;
var htmlMenuAddition = '<div id="farRightColumn" class="column">' +

'<a id="scriptOptions" onclick="selectOptions()"> | testscript </a>' +

'<div id="optionSelect" style="display:none; margin-top:-400px; margin-left:-100px; width:200px" class="dialog help">' +


'<button id="autoCraft" style="color:red" onclick="autoSwitch(\'autoCraft\')"> Auto Craft Steel </button>' +

'</div>' +
'</div>'

$("#footerLinks").append(htmlMenuAddition);

function autoSwitch(varName) {
	if (craftSteel == false) {
		craftSteel = true;
		gamePage.msg('Auto' + 'craft Steel' + ' is now on');
		document.getElementById(varName).style.color = 'black';
	} else if (craftSteel == true) {
		craftSteel = false;
		gamePage.msg('Auto' + 'craft Steel' + ' is now off');
		document.getElementById(varName).style.color = 'red';
	}
}


//autocraft steel
setInterval(function(){
  if(craftSteel == true){
    gamePage.craftAll(resources[3][1]); //craft all steel
  }
}, 1000); //repeat second

//time function
/*
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
*/
