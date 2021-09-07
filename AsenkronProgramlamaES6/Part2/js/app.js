// Fetch Api Kullanımı
function getTextFile(){
	fetch("example.txt")
	.then(response => response.text())
	.then(data => console.log(data))
	.catch(err => console.log(err));
}
getTextFile();
////////////////////////////////////
function getJsonFile(){
	fetch("example.json")
	.then(response => response.json())
	.then(data => console.log(data))
	.then(data => {
		console.log(data.rates.TRY);
	})
	.catch(err => console.log(err));
}
getJsonFile();
////////////////////////////////////
function getExternal(){
	fetch("http://api.exchangeratesapi.io/v1/latest?access_key=c5fa41825272d7bd71e92dd9dfe6ac96&symbols=USD,AUD,CAD,PLN,MXN&format=1")
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.log(err));
}
getExternal();