$(function(){

	$.getJSON('https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json',
		function(jsondata) {

			var skils = [];
			var names = [];
			var sortNames = [];
			var allFriends = [];
			var obj = jsondata;
			$.each(obj, function(i) {
				$.each(obj[i].skills, function(j){
				skils.push(obj[i].skills[j]);
				});
			});
				var obj3 = _.uniq(skils);
				// console.log (obj3.sort());
///////////////////////////////////////////////// 
			$.each(obj, function(k){
				names[k] = {name:obj[k].name, friends:obj[k].friends.length};
				sortNames.push(obj[k].friends.length);
			});
			var obj2 = _.sortBy(names, ['friends']);
				// console.log(names);
				// console.log(obj2);
/////////////////////////////////////////////////
			$.each(obj, function(l){
				$.each(obj[l].friends, function(m) {
					
					allFriends.push(obj[l].friends[m].name);
				});
			});
			var obj4 = _.uniq(allFriends);
			console.log(obj4);
		});
	
	
});
	