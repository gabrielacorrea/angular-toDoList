var toDoList = [{
	isDone: false,
	date: "2015-09-14",
	description: "Estudar Angular",
	priority: 2, 
	authors: {
		name: 'Tay', 
		age: 25
	},
	changeForDone: function() {
		this.isDone = true;
	}

},
{
	isDone: false,
	date: "2015-09-15",
	description: "Cozinhar uma torta",
	priority: 3,
	authors: {
		name: 'Duarte', 
		age: 22
	}
}];

function list() {
	var toDo;
	for (toDo in toDoList) {
		document.writeln(toDoList[toDo].description);
	}
};

function printDone() {
	document.writeln(toDoList[0].isDone);
	toDoList[0].changeForDone();
	document.writeln(toDoList[0].isDone);
}



list();
printDone();