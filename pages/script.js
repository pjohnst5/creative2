$(document).ready(function() { //$ which part of the document do you want to work on


	$("#lyricsSubmit").click(function(e) {
		console.log("eh");

	e.preventDefault();
	var songName = $("#songInput").val();
	var artist = $("#artistInput").val();
    var myurl= "https://api.lyrics.ovh/v1/" + artist + "/" + songName;
		$.ajax({
		    url : myurl,
		    dataType : "json",
		    success : function(json) {
			console.log(json);


			var results = "";
			results += json.lyrics.replace(/\n/g, "<br />");
			$("#lyricsResultsHome").html(results);
		    }
		});    
    }); //end of weather submit click handler

});
