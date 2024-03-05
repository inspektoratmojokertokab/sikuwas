const form = document.querySelector("form");
const modalSuccess = new bootstrap.Modal(
  document.getElementById("modalSuccess"),
  focus
);
const modalFail = new bootstrap.Modal(
  document.getElementById("modalFail"),
  focus
);

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
        if (res.status === 200) {
          form.reset();
          modalSuccess.show();
        } else {
          modalFail.show();
        }
      })
      .catch((error) => {
        modalFail.show();
        console.log(error);
      });
  }
});
