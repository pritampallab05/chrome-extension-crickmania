/**
*   Replace the <API_KEY> with your key.
*/
$.get("https://cricapi.com/api/cricket?apikey=<API_KEY>", function(matchdata) {
    var matches = matchdata.data;
    var list_html = "<ol>";
	for(i=0;i<matches.length;i++){
        list_html += "<li>" + matches[i].description + "</li>";
    }
    list_html += "</ol>";
    $('#matches').html(list_html);
});