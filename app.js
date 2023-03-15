let listDOM = document.querySelector("#list");
let inputDOM = document.querySelector("#task");
let ekle = document.querySelector("#liveToastBtn");
const toastLiveExample = document.getElementById('liveToast')
const toastLivefail = document.getElementById('fail')


function newElement(){
    ekle.onclick=function(){
        let li=document.createElement("li");
        li.textContent=inputDOM.value;
        if (inputDOM.value !== ""){  list.appendChild(li);}
        if   (inputDOM.value !== ""){
            const toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
            localStorage.setItem('yapilacaklar',inputDOM.value)
        } else {
            const toast = new bootstrap.Toast(toastLivefail)
            toast.show()
        }
}
}
var listItemArray = document.querySelectorAll("ul li")
var listItemArray = Array.from(listItems);
var newItem = document.getElementById("task").value;
var newListItem = document.createElement("li");
newListItem.innerHTML = newItem;
document.querySelector("ul").appendChild(newListItem);
localStorage.setItem("myList", JSON.stringify(listItemArray));
var myListFromStorage = JSON.parse(localStorage.getItem("myList"));





// // // HTML'de <ul> elementini seçin
//  const myList = document.querySelector("#task");

// // <li> elementlerini seçin ve bir diziye aktarın
// const myItems = Array.from(myList.children).map(item => item.textContent);

// // Diziyi JSON formatına dönüştürün ve local storage'a kaydedin
// localStorage.setItem('myList', JSON.stringify(myItems));

// // local storage'dan veriyi okuyun ve JSON formatından çıkarın
// const storedItems = JSON.parse(localStorage.getItem('myList'));

// // Kaydedilen öğeleri <ul> elementine ekleyin
// storedItems.forEach(item => {
//   const li = document.createElement('li');
//   li.textContent = item;
//   myList.appendChild(li);
// });




