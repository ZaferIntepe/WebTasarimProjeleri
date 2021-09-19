// Elementleri Seçme
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUser = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github(); // github objesini oluşturduk
const ui = new UI();
// eventlistenner İşlemi
eventListeners();
function eventListeners(){
    githubForm.addEventListener("submit" , getData);
    clearLastUser.addEventListener("click" , clearAllSeacrhed);
    document.addEventListener("DOMContentLoaded" , getAllSearched);
}
function getData(e){
    let username = nameInput.value.trim();
    if(username === ""){
        alert("Lütfen Geçerli Bir Kullanıcı Adı Giriniz...");
    }
    else{
        github.getGithubData(username)
        .then(response => {
            if(response.user.message === "Not Found"){
                // Hata Mesajı
                ui.showError("Lütfen Geçerli Bir Kullanıcı Adı Giriniz...");
            }
            else{
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
        })
        .catch(err => ui.showError(err));
    }
    ui.clearInput(); // input Temizleme
    e.preventDefault();
}
function clearAllSeacrhed(){// Tüm Arananları Temizle
};
function getAllSearched(){//Arananları Storage'den Al Ve UI'ya Ekle
};