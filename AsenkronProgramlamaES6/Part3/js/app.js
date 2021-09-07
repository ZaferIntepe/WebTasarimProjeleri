class Request{
	get(url){
		return new Promise((resolve , reject) => {
			fetch(url)
			.then(response => response.json())
			.then(data => resolve(data))
			.catch(err => reject(err));
		})
	}
}
const request = new Request();
let Albums;
request.get("https://jsonplaceholder.typicode.com/albums")
.then(Albums => {
	console.log(Albums);
})
.catch(err => console.log(err));

