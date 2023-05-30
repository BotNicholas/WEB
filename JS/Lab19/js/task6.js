document.getElementById("country").addEventListener("change", ()=>{
    // alert(document.getElementById("country").value);

    if(document.getElementById("towns") != null){
        document.getElementById("towns").outerHTML = "";
    }

    let towns = document.createElement("select");
    towns.id = "towns";
    switch(document.getElementById("country").value){
        case "Moldova":
            towns.insertAdjacentHTML("beforeend", "<option value='chisinau'>Кишинёв</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='belti'>Бельцы</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='dubossari'>Дубоссары</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='leova'>Лёва</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='ocnota'>Окница</option>");
            break;
        case "Romania":
            towns.insertAdjacentHTML("beforeend", "<option value='buharest'>Бухарест</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='iasi'>Ясы</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='timisoara'>Тимишоара</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='craiova'>Крайова</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='brasov'>Брашов</option>");
            break;
        case "Russia":
            towns.insertAdjacentHTML("beforeend", "<option value='moscow'>Москва</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='peterburg'>Санкт-Перетрбург</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='ekaterinburg'>Екатеринбург</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='kazani'>Казань</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='voronej'>Воронеж</option>");
            break;
        case "Germany":
            towns.insertAdjacentHTML("beforeend", "<option value='berlin'>Берлин</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='gamburg'>Гамбург</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='munhen'>Мюнхен</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='keln'>Кёльн</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='bremen'>Бремен</option>");
            break;
        case "USA":
            towns.insertAdjacentHTML("beforeend", "<option value='newyork'>Нью-Йорк</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='losangeles'>Лосанджелес</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='chicago'>Чикаго</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='sansfancisco'>Сан-Франциско</option>");
            towns.insertAdjacentHTML("beforeend", "<option value='washington'>Вашингтон</option>");
            break;
                                                
    }

    document.getElementById("country_town").insertAdjacentElement("beforeend", towns);
});