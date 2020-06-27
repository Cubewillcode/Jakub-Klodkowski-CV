function appendNumber(argument) {
	input.innerHTML += argument;
}

function ce() {
	input.innerHTML = "";
  output.innerHTML = "0";
}

function del() {
	input.innerHTML = input.innerHTML.slice(0,-1);
}


function equals() {
	output.innerHTML = this.eval(input.innerHTML);
}
