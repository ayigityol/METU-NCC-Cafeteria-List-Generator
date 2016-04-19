function yigit(p,t,q){
		var remember = [1,2,3,4,5,6,7]; 
		var str = p.value;
		var arr = str.split('\t');
		var i = 0;
		var dataObj = {
			foods : []
		};	
		var resultObj = {
		};
		var extObj = {
		"results" : []
		};
		
		while(arr.length > 0){
			if(i == 0){
				var yemekObj = {};
			}
			if(remember.indexOf(i) != -1){
				if(i == 1){
					while(arr[0].search(/0[0-9]/g) != -1){
						arr[0] = remove(arr[0], arr[0].search(/0[0-9]/g));
					}
					yemekObj["DATE"] = arr[0] + ".L"; 
				}
				else if(i == 2) yemekObj["DAY"] = arr[0];
				else
					yemekObj["YEMEK"+(i-2).toString()] = arr[0];
			}
			i++;
			if(i == 14){ dataObj["foods"].push(yemekObj);}
			i = i % 14;
			arr.shift();
		}
		i=0;
		var str = t.value;
		var arr = str.split('\t');
		while(arr.length > 0){
			if(i == 0){
				var yemekObj = {};
			}
			if(remember.indexOf(i) != -1){
				if(i == 1){
					while(arr[0].search(/0[0-9]/g) != -1){
						arr[0] = remove(arr[0], arr[0].search(/0[0-9]/g));
					}
					yemekObj["DATE"] = arr[0]+ ".D"; 
					
				}
				else if(i == 2) yemekObj["DAY"] = arr[0];
				else
					yemekObj["YEMEK"+(i-2).toString()] = arr[0];
			}
			i++;
			if(i == 14){ dataObj["foods"].push(yemekObj);}
			i = i % 14;
			arr.shift();
		}
		
		var dataString = JSON.stringify(dataObj);
		resultObj["FOOD"] = dataString;
		resultObj["EXPDATE"] = q.value;
		extObj.results.push(resultObj);
	var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(extObj));

	document.getElementById("out").innerHTML= '<a href="data:' + data + '" download="yigit.json">Yiğit</a>';
} 

function tanay(p,t){
	var remember = [1,3,4,5,6,7]; 
	var str = p.value;
	var arr = str.split('\t');
	var i = 0;
	var outString = "";
	while(arr.length > 0){
		if(remember.indexOf(i) != -1){
			if(i == 1){
				outString += arr[0].slice(0,2).replace('/','')+"\n*\n" ; 
			}
			else
				outString += arr[0] + "\n";
		}
		i++;
		i = i % 14;
		arr.shift();
	}
	var data = "text/plain;charset:utf-8," + encodeURIComponent(outString);
	document.getElementById("out").innerHTML += '<br><a href="data:' + data + '" download="ogleyemek.txt">Tanay Öğle</a>';
	outString = "";
	var str = t.value;
	var arr = str.split('\t');
	var i = 0;
	var outString = "";
	while(arr.length > 0){
		if(remember.indexOf(i) != -1){
			if(i == 1){
				outString += arr[0].slice(0,2).replace('/','')+"\n*\n" ; 
			}
			else
				outString += arr[0] + "\n";
		}
		i++;
		i = i % 14;
		arr.shift();
	}
	var data = "text/plain;charset:utf-8," + encodeURIComponent(outString);
	document.getElementById("out").innerHTML += '<br><a href="data:' + data + '" download="aksamyemek.txt">Tanay Akşam</a>';
}


function remove(string, index){
	return string.slice(0, index) + string.slice(index+1);
}