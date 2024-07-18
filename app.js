let searchNavigation = document.getElementById("search-navigation");
// let searchSuggestionContainer = document.getElementById("search-suggestion")
var mobileProducts = {
    Apple: {
        Iphone6: {
            Name: "Iphone 6",
            type: "Mobile",
            color: "Black",
            ram: "1gb",
            rom: "64gb",
            batteryTime: "1,810mAh",
            display: "4.7 inches",
            profilePicture: "./images/zsaSjr.jpg",//assests/Media/iphone6.jpeg
            Prices: "43,999",
            Pta: true,
            avalaible: true,
            cart: false
        },
        Iphone8: {
            Name: "Iphone 8",
            type: "Mobile",
            color: "Gold",
            ram: "2gb",
            rom: "256gb",
            batteryTime: "1821mAh",
            display: "4.7 inches",
            profilePicture: "./images/zsaSjr.jpg",//assests/Media/iphone8.jpeg
            Prices: "108,610",
            Pta: true,
            avalaible: true,
            cart: false
        },
        iphoneX: {
            Name: "Iphone X",
            type: "Mobile",
            color: "White",
            ram: "3gb",
            rom: "256gb",
            batteryTime: "2716mAh",
            display: "5.8 inches",
            profilePicture: "./images/zsaSjr.jpg",//assests/Media/iphneX.jpeg
            Prices: "144,999",
            Pta: true,
            avalaible: true,
            cart: false
        },
        Iphone11: {
            Name: "Iphone 11",
            type: "Mobile",
            color: "Gray",
            ram: "4gb",
            rom: "256gb",
            batteryTime: "3110mAh",
            display: "5.8 inches",
            profilePicture: "./images/zsaSjr.jpg",//assests/Media/iphone11.jpeg
            Prices: "178,000",
            Pta: true,
            avalaible: true,
            cart: false
        },
        Iphone12: {
            Name: "Iphone 12",
            type: "Mobile",
            color: "Gray",
            ram: "4gb",
            rom: "256gb",
            batteryTime: "2815mAh",
            display: "6.1 inches",
            profilePicture: "./images/zsaSjr.jpg",//assests/Media/iphone12.jpeg
            Prices: "179,999",
            Pta: true,
            avalaible: true,
            cart: false
        },
        Iphone14: {
            Name: "Iphone 14",
            type: "Mobile",
            color: "Gray",
            ram: "6gb",
            rom: "256gb",
            batteryTime: "3279mAh",
            display: "6.1 inches",
            profilePicture: "./images/zsaSjr.jpg",//assests/Media/Iphone14-img.jpeg
            Prices: "179,999",
            Pta: true,
            avalaible: true,
            cart: false
        }
    },
    Samsung: {
        galaxy_S21: {
            Name: "Galaxy S21",
            type: "Mobile",
            color: "Black",
            ram: "8gb",
            rom: "128gb",
            batteryTime: "4000mAh",
            display: "6.2 inches",
            profilePicture: "./images/zsaSjr.jpg",//assests/Media/galaxy-S21.jpeg
            Prices: "176,499",
            Pta: true,
            avalaible: true,
            cart: false
        },
        galaxy_A35: {
            Name: "Galaxy A35",
            type: "Mobile",
            color: "Aqua",
            ram: "8gb",
            rom: "256gb",
            batteryTime: "5000mAh",
            display: "6.6 inches",
            profilePicture: "./images/zsaSjr.jpg",//assests/Media/galaxy_A35.jpeg
            Prices: "114,999",
            Pta: true,
            avalaible: true,
            cart: false
        },
        galaxy_A06: {
            Name: "Galaxy A05",
            type: "Mobile",
            color: "Green",
            ram: "6gb",
            rom: "128gb",
            batteryTime: "5000mAh",
            display: "6.7 inches",
            profilePicture: "./images/zsaSjr.jpg",//assests/Media/galaxy-A05.jpeg
            Prices: "36,499",
            Pta: true,
            avalaible: true,
            cart: false
        }
    },
    Infinix: {
        hot_40_pro: {
            Name: "Hot 40 Pro",
            type: "Mobile",
            color: "Black",
            ram: "4gb",
            rom: "256gb",
            batteryTime: "5000mAh",
            display: "6.78 inches",
            profilePicture: "./images/zsaSjr.jpg",
            Prices: "45,999",//assests/Media/hot_40.jpeg
            Pta: true,
            avalaible: true,
            cart: false
        },
        note_40: {
            Name: "Note 40",
            type: "Mobile",
            color: "Green",
            ram: "8gb",
            rom: "256gb",
            batteryTime: "2815mAh",
            display: "6.78 inches",
            profilePicture: "./images/zsaSjr.jpg",//assests/Media/note_40.jpeg
            Prices: "54,999",
            Pta: true,
            avalaible: true,
            cart: false
        },
        hot_30: {
            Name: "Hot 30",
            type: "Mobile",
            color: "Black",
            ram: "8gb",
            rom: "128gb",
            batteryTime: "5000mAh",
            display: "6.78 inches",
            profilePicture: "./images/zsaSjr.jpg",//assests/Media/hot_30.jpg
            Prices: "34,999",
            Pta: true,
            avalaible: true,
            cart: false
        }

    },
    Tecno: {
        pova_06_pro: {
            Name: "Pova 06 Pro",
            type: "Mobile",
            color: "Silver",
            ram: "6gb",
            rom: "128gb",
            batteryTime: "6000mAh",
            display: "6.78 inches",
            profilePicture: "./images/zsaSjr.jpg",//assests/Media/pova_06_pro.jpeg
            Prices: "24,799",
            Pta: true,
            avalaible: true,
            cart: false
        },
        spark_20: {
            Name: "Spark 20",
            type: "Mobile",
            color: "Black",
            ram: "8gb",
            rom: "256gb",
            batteryTime: "5000mAh",
            display: "6.6 inches",
            profilePicture: "./images/zsaSjr.jpg",//assests/Media/spark_20.jpeg
            Prices: "31,799",
            Pta: true,
            avalaible: true,
            cart: false
        },
        camon_20: {
            Name: "Camon 20",
            type: "Mobile",
            color: "Serenity Blue",
            ram: "4gb",
            rom: "256gb",
            batteryTime: "5000mAh",
            display: "6.67 inches",
            profilePicture: "./images/zsaSjr.jpg",//assests/Media/camon_20.jpeg
            Prices: "41,499",
            Pta: true,
            avalaible: true,
            cart: false
        }
    }

}
var productContainer = document.getElementById('product-container');
function showingproduct() {
    for (var companiname in mobileProducts) {
        for (var brandnmae in mobileProducts[companiname]) {
            var prductby = document.createElement('div');
            prductby.setAttribute("id", "product-content");
            let productCard = `<div class="mobile-cards">
      <img src="./images/zsaSjr.jpg"/>
      <h1 style="margin: 5px; padding: 0%; text-decoration: underline">
       -: ${mobileProducts[companiname][brandnmae].Name} :-
      </h1>
      <h4 class="detail">
        color: "${mobileProducts[companiname][brandnmae].color}"
        <hr class="hr" />
        ram: "${mobileProducts[companiname][brandnmae].ram}"
        <hr class="hr" />
        rom: "${mobileProducts[companiname][brandnmae].rom}"
        <hr class="hr" />
        batteryTime: "${mobileProducts[companiname][brandnmae].batteryTime}"
        <hr class="hr" />
        Prices: "${mobileProducts[companiname][brandnmae].Prices}"
      </h4>
    </div>`;
            prductby.innerHTML = productCard;
            productContainer.appendChild(prductby);
        }
    }
}
showingproduct();

let phoneSelect = document.getElementById("phone-select");
let mobilePhones = document.getElementById("model-select");
for (var mobilePhone in mobileProducts) {
    var phoneOption = document.createElement("option");
    phoneOption.value = mobilePhone;
    phoneOption.innerText = mobilePhone;
    phoneSelect.appendChild(phoneOption);
}
function setPhoneValue() {
    mobilePhones.removeAttribute("disabled")
    let phoneSel = document.getElementById("phone-select").value;
    mobilePhones.innerHTML = "";
    productContainer.innerHTML = "";
    for (var models in mobileProducts[phoneSel]) {
        let modelOption = document.createElement("option");
        modelOption.value = models
        modelOption.innerText = models;
        mobilePhones.appendChild(modelOption);
        console.log(mobileProducts[phoneSel][models].Name);
        console.log(mobileProducts[phoneSel][models].Prices);
        var searchmobile = document.createElement('div');
        searchmobile.setAttribute("id", "search-mobile");
        let searchmobilecard = `<div class="mobile-cards">
      <img src="./images/zsaSjr.jpg"/>
      <h1 style="margin: 5px; padding: 0%; text-decoration: underline">
       -: ${mobileProducts[phoneSel][models].Name} :-
      </h1>
      <h4 class="detail">
        color: "${mobileProducts[phoneSel][models].color}"
        <hr class="hr" />
        ram: "${mobileProducts[phoneSel][models].ram}"
        <hr class="hr" />
        rom: "${mobileProducts[phoneSel][models].rom}"
        <hr class="hr" />
        batteryTime: "${mobileProducts[phoneSel][models].batteryTime}"
        <hr class="hr" />
        Prices: "${mobileProducts[phoneSel][models].Prices}"
      </h4>
    </div>`;
        searchmobile.innerHTML = searchmobilecard;
        productContainer.appendChild(searchmobile);
    }
}

var mobileselector = document.getElementById('model-select');
mobilePhones.addEventListener("change", function () {
    let modelSearchValue = mobileselector.value;
    productContainer.innerHTML = "";
    for (var mobilePhonesModels in mobileProducts[phoneSelect.value][modelSearchValue]) {
        let productContent = document.createElement("div");
        productContent.setAttribute("id", "product-content");
        productContent.innerHTML = `<div class="mobile-cards">
      <img src="./images/zsaSjr.jpg"/>
      <h1 style="margin: 5px; padding: 0%; text-decoration: underline">
       -: ${mobileProducts[phoneSelect.value][modelSearchValue].Name} :-
      </h1>
      <h4 class="detail">
        color: "${mobileProducts[phoneSelect.value][modelSearchValue].color}"
        <hr class="hr" />
        ram: "${mobileProducts[phoneSelect.value][modelSearchValue].ram}"
        <hr class="hr" />
        rom: "${mobileProducts[phoneSelect.value][modelSearchValue].rom}"
        <hr class="hr" />
        batteryTime: "${mobileProducts[phoneSelect.value][modelSearchValue].batteryTime}"
        <hr class="hr" />
        Prices: "${mobileProducts[phoneSelect.value][modelSearchValue].Prices}"
      </h4>
    </div>`
        productContainer.appendChild(productContent);
        break
    }
})