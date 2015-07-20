$(document).ready(function(){
	
	//jquery that runs on randomPeonGenerator being pressed to run RandomPeon object constructor
	$("#randomPeonGenerator").on('click', function(event){
		event.preventDefault();
		var randompeon = new RandomPeon();
		addRow(randompeon);
		
		//jquery to dynamically generate color css based on peonrank
		$('.peonrank').css('background-color', function(){
			return rankColor[$(this).text()] || '';
		});

	});

	$("#peonForm").submit(function(event){
		event.preventDefault();


		var $inputs = $("#peonForm :input");
		var values = {};

		$inputs.each(function(){
			values[this.name] = $(this).val();
			
		});
		addRow(values);

		//clear form after reset
		$('#peonForm')[0].reset();


		//jquery to dynamically generate color css based on peonrank
		$('.peonrank').css('background-color', function(){
			return rankColor[$(this).text()] || '';
		});
	});
	//jquery to remove closest row to nomorework button and remove employee
	$("#peonTable").on('click', '.noMoreWorkButton', function(){
		(this).closest("tr").remove();

	});
	//function to add row to table from random generator or form submit
	function addRow (values){
		$("tbody").append("<tr><td class='firstname'>"+values.firstname+"</td><td class='lastname'>"+values.lastname+"</td><td class='peonnum'>"+values.peonnum+"</td><td class='peontitle'>"+values.peontitle+"</td><td class='peonrank'>"+values.peonrank+"</td><td class='peonsalary'>"+values.salary+ "</td><td><button class='noMoreWorkButton'>"+"No more work."+"</td></tr>");
	}


});
//arrays for random peon generation
var firstnames=["Thrall", "Durotan", "Draka", "Drek'Thar", "Orgim", "Grommash", "Kargath", "Kilrogg","Tagar", "Nekros", "Ner'zhul", "Gul'Dan", "Teron"];
var lastnames=["Spinebreaker", "Wolfbrother", "Skullcrusher", "Gorefiend", "Hellscream", "Hellscream", "Blackhand", "Frostwolf", "Hellscream", "Halforcen", "Bladefist", "Saurfang"];
var peontitles=["Scout", "Grunt", "Sergeant", "Senior Sergeant", "First Sergeant", "Stone Guard", "Blood Guard", "Legionnaire", "Centurion", "Champion", "Lieutenant General", "General", "Warlord", "High Warlord"];

//object for color by peon rank
var rankColor = {
	1 : 'red',
	2 : 'orange',
	3 : 'yellow',
	4 : '#2B60DE',
	5 : 'green',
};
//function to generate a random peon
function RandomPeon(){
	this.firstname = firstnames[randomNumber(0, 12)];
	this.lastname = lastnames[randomNumber(0, 11)];
	this.peonnum = randomNumber(1,4000);
	this.peontitle = peontitles[randomNumber(0,13)];
	this.peonrank = randomNumber(1,5);
	this.salary = randomNumber(1,10);
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
