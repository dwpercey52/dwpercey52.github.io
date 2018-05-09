	var currentList = [];
	var cookingList = ["Worm Paste", "Yogurt", "Foulweather Frog"];
	var alchemyList = ["Alc1", "Alc2", "Alc3"];
	
	
	var imgString = "https://static.ffxiah.com/images/icon/";
	var linkString = "https://ffxiah.com/item/";
	
	function listSort(){
		var temp = cookingList.sort();
		cookingList = temp;
		temp = alchemyList.sort();
		alchemyList = temp;
		console.log("items are sorted");
	}
	
	function updateList(){
		var test = document.getElementById("craftList").value;
		var newList = document.getElementById("itemSearch");
		var optionAdd;
		var temp;
		
		if(test == "Cooking"){
			newList.innerHTML = '';
			for(var i = 0; i < cookingList.length; i++){
				optionAdd = document.createElement("option");
				temp = cookingList[i];
				optionAdd.text = temp;
				optionAdd.value = temp;
				newList.add(optionAdd);
			}
		}
		else if(test == "Alchemy"){
			newList.innerHTML = '';
			for(var i = 0; i < alchemyList.length; i++){
				optionAdd = document.createElement("option");
				temp = alchemyList[i];
				optionAdd.text = temp;
				optionAdd.value = temp;
				newList.add(optionAdd);
			}	
		}
	}
	
	
	