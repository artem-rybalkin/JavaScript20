$(function(){

	$.getJSON('https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json',
		function(jsondata) {

			var skils = [];
			var skils2 = [];
			var names = [];
			var sortNames = [];
			var allFriends = [];
			var allFriends2 = [];
			var obj = jsondata;
				skils = _.map(obj,'skills');
				var obj3 = _.flattenDeep(skils);
				var obj31 = _.uniq(obj3);
				console.log (obj31.sort());
///////////////////////////////////////////////// 
			$.each(obj, function(k){
				names[k] = {name:obj[k].name, friends:obj[k].friends.length};
			});
			var sortNames = _.map( _.sortBy(names, ['friends']), 'name');
			console.log(sortNames);

/////////////////////////////////////////////////
			
			allFriends = _.map(obj, 'friends');
			allFriends2 =_.flattenDeep(allFriends);
			var allFriendsName = _.map(allFriends2, 'name');
			var allFriendsNameUniq  = _.uniq(allFriendsName);
			
			console.log(allFriendsNameUniq);
		});
	
	
});
	