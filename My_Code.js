var people = document.getElementById('my_table');

var table_data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ];

// Attempted a different method to add objects to the html table, but the CSS was not working correctly.

// var tab = document.querySelector("table");
// for (var obj of table_data) {
//   var row = `<tr><td>${obj.first_name}</td>
//              <td>${obj.last_name}</td>
//              <td>${obj.home}</td></tr>`;
//   tab.innerHTML += row;
// }         
 let curIndex = people.rows.length;


var tab = document.querySelector("table");
for (var i = 0; i < table_data.length; i++) {
  var newRow = people.insertRow(curIndex);
  var newCell = newRow.insertCell(0);
  newCell.appendChild(document.createTextNode(table_data[i].first_name));
  newCell = newRow.insertCell(1);
  newCell.appendChild(document.createTextNode(table_data[i].last_name));
  newCell = newRow.insertCell(2);
  newCell.appendChild(document.createTextNode(table_data[i].home));
  curIndex = people.rows.length;
}    

// var people = document.getElementById('my_table');

var addId = function(F_name, L_name, Home){

	var temp = {
  	first_name: F_name,
    last_name: L_name,
    home: Home,
  };

  table_data.push(temp);

  var newRow = people.insertRow(curIndex);
  var newCell = newRow.insertCell(0);
  newCell.appendChild(document.createTextNode(F_name));
  newCell = newRow.insertCell(1);
  newCell.appendChild(document.createTextNode(L_name));
  newCell = newRow.insertCell(2);
  newCell.appendChild(document.createTextNode(Home));

};

var addToHTMLTable = function(array){
	for(var i = 0; i < array.length; i++){
  	//insert array[i].first_name into html array slot here
    //insert array[i].last_name into html array slot here
    //insert array[i].home into html array slot here
  }
  
}
