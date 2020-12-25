const searchForm = document.querySelector("form");
let searchKeyword = "";

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  searchKeyword = document.querySelector("input").value.trim();
  fetchResult(searchKeyword);
});

const fetchResult = (searchKeyword) => {
  fetch(`https://wordsapiv1.p.rapidapi.com/words/${searchKeyword}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "34c56a009cmsh75304c52976b92ep1a7325jsnba6430a4ce52",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    },
  }).then((res) => res.json().then((data) => showResult(data)));
  // .catch((err) => showResult("No Such word Found ERROR!!", true));
};

const showResult = (data, isError = false) => {
  const definition = data.results[0].definition;
  const synonym = data.results[0].synonyms;

  let synonyms = "";
  synonym.forEach((e) => {
    synonyms = synonyms + `<li>${e}</li>`;
  });

  const resultDiv = document.querySelector(".result");

  // if (!isError) {
  resultDiv.innerHTML = `    <div class="result container">
    <div class="box response textCenter">
      <h1 id="search1" class="title is-size-3">${searchKeyword}</h1>
      <div id="search2" class="box definition">
        <p>${definition}</p>
      </div>
      <br>
      <div id ="text1" class="synonym">
      <h1> <strong> Synonym </strong> </h1>
          <ul>
          ${synonyms}
          </ul>
      </div>
      <br>
    </div>
  </div>`;
  // } else {
  //   resultDiv.innerHTML = `    <div class="result container">
  //   <div class="box response textCenter">
  //     <h1 class="title is-size-3">${searchKeyword}</h1>
  //     <div class="box definition">
  //       <p>${data}</p>
  //     </div>
  //     <br>
  //     <br>
  //   </div>
  // </div>`;
  // }
};
