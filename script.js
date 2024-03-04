const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add("was-validated");
  } else {
    event.preventDefault();
    const formData = new FormData(form);
    fetch(
      "https://script.google.com/macros/s/AKfycby_wiJKqdANOZLn09EI3gpuJh6gvfsra43pw25CijEzlvuIGvIe_pk0NZkjSuF6pzU/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => {
        console.log(res);
        if (res == "success") {
          console.log("form submitted successfully");
        } else {
          console.log("appscript error");
        }
      })
      .catch((error) => {
        console.error("network error: ", error);
      });
  }
});
