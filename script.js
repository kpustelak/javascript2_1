(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 123123,
        title: "dsandlksandlkas",
        body: "ndosndsandjsandsakj",
      }),
    })
      .then((response) => response.json())
      .then((item) => {
        answer.innerHTML = "Dodano nowy post o ID = " + item.id;
      });
  });

  cw2.addEventListener("click", function () {
    //TODO
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
