fetch("ceos.json")
  .then(response => response.json())
  .then(data => {

// First Card
    document.getElementById("name1").innerHTML =
      data[0].name1;
    document.getElementById("company1").innerHTML =
      data[0].company1;
    document.getElementById("university1").innerHTML =
      data[0].university1;

// Second Card
    document.getElementById("name2").innerHTML =
      data[1].name2;

    document.getElementById("company2").innerHTML =
      data[1].company2;
    document.getElementById("university2").innerHTML =
      data[1].university2;

// Third Card
    document.getElementById("name3").innerHTML =
      data[2].name3;
    document.getElementById("company3").innerHTML =
      data[2].company3;
    document.getElementById("university3").innerHTML =
      data[2].university3;
      
// Fourth Card
    document.getElementById("name4").innerHTML =
      data[3].name4;
    document.getElementById("company4").innerHTML =
      data[3].company4;
    document.getElementById("university4").innerHTML =
      data[3].university4;
});



