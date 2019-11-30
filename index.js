// Search by Name
function searchByName() {
    var xhr = new XMLHttpRequest();
    var searchValue = document.getElementById("searchVal").value;
    var url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+searchValue
    xhr.open('GET', url);
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            // console.log(xhr.response)
            var output = xhr.response;
            var data = JSON.parse(output)
            console.log(data)
            searchResultPrint(data)
        }
        else {
            console.log("Error Code is:" + xhr.status)
        }
    }
    $("#displaySearch").empty();
    $("#displaySearchChar").empty();
}

function searchResultPrint(data) {
    var searchValue = document.getElementById("searchVal").value;
    var  parra = document.createElement('h1');
    parra.style.textAlign ="center";
    parra.style.color = "red";
    parra.setAttribute("class",'col-12');
    parra.innerHTML ="Showing Search Result for " + searchValue;
    $("#displaySearch").append(parra);

    for(var i = 0; i < data["meals"].length; i++){
        
        var cardAddCol = document.createElement('div');
        var cardAdd = document.createElement('div');
        var image = document.createElement('img');
        var cardDiv = document.createElement('div');
        var cardH5 = document.createElement('h5');
        var subdiv1 = document.createElement('div');
        var subdiv2 = document.createElement('div');
        var linkYouTube = document.createElement('a');
        
        cardAddCol.setAttribute('class',"col-4");
        
        cardAdd.setAttribute('class','card');
        cardAdd.setAttribute('class',"mt-5");
        image.setAttribute("src", data["meals"][i]["strMealThumb"]);
        image.setAttribute("class",'card-img-top');
        
        cardDiv.setAttribute('class',"card-body");
        cardDiv.setAttribute('class',"text-center");
        
        cardH5.setAttribute('class',"card-title");
        cardH5.innerHTML=data["meals"][i]["strMeal"];
        subdiv1.setAttribute('class',"card-text-center");
        subdiv1.innerHTML = "Catogery -" + data["meals"][i]["strCategory"];
        subdiv2.setAttribute('class',"card-text-center");
        subdiv2.innerHTML = "Famous in -" + data["meals"][i]["strArea"];
        
        linkYouTube.setAttribute("href", data["meals"][i]["strYoutube"]);
        linkYouTube.setAttribute('target', "_blank")
        linkYouTube.setAttribute("class", "btn btn-outline-dark");
        linkYouTube.innerHTML= "Watch YouTube Video"
        
        cardAdd.appendChild(image);
        cardAdd.appendChild(cardDiv);
        cardDiv.appendChild(cardH5)
        cardDiv.appendChild(subdiv1);
        cardDiv.appendChild(subdiv2);
        cardDiv.appendChild(linkYouTube);
        
        cardAddCol.appendChild(cardAdd);
        $("#displaySearch").append(cardAddCol);
    }
   
}

// Search By Char

function searchByCharacter() {
    var xhr = new XMLHttpRequest();
    var searchVal = document.getElementById("searchChar").value;
    var url = 'https://www.themealdb.com/api/json/v1/1/search.php?f='+searchVal
    xhr.open('GET', url);
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            // console.log(xhr.response)
            var charOutput = xhr.response;
            var charData = JSON.parse(charOutput)
            console.log(charData)
            searchCharResul(charData)
        }
        else {
            console.log("Error Code is:" + xhr.status)
        }
    }
    $("#displaySearchChar").empty();
    $("#displaySearch").empty();
}


function searchCharResul(charData) {
    var searchVal = document.getElementById("searchChar").value;
    var  parra = document.createElement('h1');
    parra.style.textAlign ="center";
    parra.style.color = "red";
    parra.setAttribute("class",'col-12');
    parra.innerHTML ="Showing Search Result for Character " + searchVal;
    $("#displaySearchChar").append(parra);

    for(var i = 0; i < charData["meals"].length; i++){

        var cardAddCol = document.createElement('div');
        var cardAdd = document.createElement('div');
        var image = document.createElement('img');
        var cardDiv = document.createElement('div');
        var cardH5 = document.createElement('h5');
        var subdiv1 = document.createElement('div');
        var subdiv2 = document.createElement('div');
        var linkYouTube = document.createElement('a');

        cardAddCol.setAttribute('class',"col-4");
        
        cardAdd.setAttribute('class','card');
        cardAdd.setAttribute('class',"mt-5");
        image.setAttribute("src", charData["meals"][i]["strMealThumb"]);
        image.setAttribute("class",'card-img-top');

        cardDiv.setAttribute('class',"card-body");
        cardDiv.setAttribute('class',"text-center");
        
        cardH5.setAttribute('class',"card-title");
        cardH5.innerHTML=charData["meals"][i]["strMeal"];
        subdiv1.setAttribute('class',"card-text-center");
        subdiv1.innerHTML = "Catogery -" + charData["meals"][i]["strCategory"];
        subdiv2.setAttribute('class',"card-text-center");
        subdiv2.innerHTML = "Famous in -" + charData["meals"][i]["strArea"];

        linkYouTube.setAttribute("href", charData["meals"][i]["strYoutube"]);
        linkYouTube.setAttribute('target', "_blank")
        linkYouTube.setAttribute("class", "btn btn-outline-dark");
        linkYouTube.innerHTML= "Watch YouTube Video"

        cardAdd.appendChild(image);
        cardAdd.appendChild(cardDiv);
        cardDiv.appendChild(cardH5)
        cardDiv.appendChild(subdiv1);
        cardDiv.appendChild(subdiv2);
        cardDiv.appendChild(linkYouTube);
        
        cardAddCol.appendChild(cardAdd);
        $("#displaySearchChar").append(cardAddCol);
    }
}
