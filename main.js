document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.getElementById("generateBtn");

  generateBtn.addEventListener("click", function () {
    let sentence = document.getElementById("sentence").value;
    postData("http://0.0.0.0:8123/make", { sentence: sentence }).then(
      (data) => {
        let diagramtl = document.getElementById("diagram-tl");
        diagramtl.innerHTML = data.svg;
      }
    );
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
