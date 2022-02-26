var inputvalue = document.getElementById("inputvalue");
var dropdown = document.getElementById("dropdown");
var outputdiv = document.getElementById("outputdiv");

var result = {};
function temperatureConversion()
{
	t_val = parseFloat(inputvalue.value);
	switch(dropdown.selectedIndex)
	{
		case 0: //Celsius
			result["Celsius"] = t_val;
		break;
		case 1: //Fahrenheit
			result["Celsius"] = (t_val - 32) * 5/9;
		break;
		case 2: //Kelvin
			result["Celsius"] = t_val - 273.15;
		break;
		default:
		break;
	}

/*Fahrenheit*/	result["Fahrenheit"] = (result["Celsius"] * (9/5)) + 32;
/*Kelvin*/		result["Kelvin"] = result["Celsius"] + 273.15;
		printResult();
}

function printResult()
{
	outputdiv.innerHTML = "";

	for (const property in result)
	{
		var opt = document.createElement('div');
		opt.value = property;
		opt.innerHTML = property + " = " + result[property];
		//opt.setAttribute("onclick", "unitSelect('"+property+"')");
		outputdiv.appendChild(opt);
	}
	//itvoyagers.in
	Object.keys(result).forEach(function(key) { delete result[key]; }); // Empty the object once the resulted is printed
}