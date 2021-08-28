document.getElementById("change").addEventListener("click", change);

function change() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=c5fa41825272d7bd71e92dd9dfe6ac96&format=1");
    xhr.onload = function() {
        if (this.status) {
            const response = JSON.parse(this.responseText);
            // console.log(this.responseText);
            const rate = response.rates.TRY;
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value = (amount * rate);
        }
    }
    xhr.send();
}