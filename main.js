document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.getElementById("generateBtn");
  const sentenceInput = document.getElementById("sentence");
  const legend = document.getElementById("legend");
  const diagramtl = document.getElementById("diagram-tl");

  const heading = `<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">`;
  const dt = `<dt class='text-sm font-medium text-gray-500'>`;
  const dd = `<dd class='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>`;

  generateBtn.addEventListener("click", function () {
    let sentence = sentenceInput.value;
    postData("https://nothingherebut.me/diagrammer/make", {
      sentence: sentence,
    }).then((data) => {
      diagramtl.innerHTML = data.svg;
      legend.innerHTML = "";
      data.labels.forEach((element) => {
        legend.innerHTML += `${heading}${dt}${element[0]}</dt>${dd}${element[1]}</dd></div>`;
      });
    });
  });
});

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    origin: "https://gjtorikian.com/diagrammer",
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
