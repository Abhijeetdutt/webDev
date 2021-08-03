const BtnSelectAdd = document.querySelector(".btn-select-add");
const BtnWhereAdd = document.querySelector(".btn-where-add");
const DivSelectContainer = document.getElementById("div-container-select");
const DivWhereContainer = document.getElementById("div-container-where");

BtnSelectAdd.addEventListener("click", AddNewSelect);
BtnWhereAdd.addEventListener("click", AddNewWhere);

function AddNewSelect() {
	const selectSelect = document.createElement("select");
	selectSelect.classList.add('div-shadow');

	var options = ["ipaddress", "fqdn", "certname"]

	for (const val of options) 
	{
		var option = document.createElement("option");
		option.value = val;
		option.text = val.charAt(0).toUpperCase() + val.slice(1);
		selectSelect.appendChild(option)
	}

	DivSelectContainer.appendChild(selectSelect);
}

function AddNewWhere() {
	const selectWhere = document.createElement("select");
	selectWhere.classList.add("div-shadow");
	DivWhereContainer.appendChild(selectWhere);
}
