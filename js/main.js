const APIusers = "http://localhost:8000/users";
const APIcatalog = "http://localhost:8000/catalog";
let signIn__button_login = document.querySelector(".sign-in__btn");
let modal__singIn = document.querySelector(".modal__sing-in");

let inpName = document.querySelector(".inpName");
let inpSurname = document.querySelector(".inpSurname");
let inpNumber = document.querySelector(".inpNumber");
let inpPassword = document.querySelector(".inpPassword");
let inpPasswordEx = document.querySelector(".inpPasswordEx");

let exit__btn = document.querySelector(".exit__btn");
let signIn__button_active = document.querySelector(".sign-in__button_active");
let modal__registr = document.querySelector(".modal__registr");
let inpType = document.querySelector(".inpType");
let inpModel = document.querySelector(".inpModel");
let inpYear = document.querySelector(".inpYear");
let inpPrice = document.querySelector(".inpPrice");
let inpImgs = document.querySelector(".inpImgs");
let header__addLink = document.querySelector(".header__add-link");
let create__cards = document.querySelector(".create__cards");
let addButton = document.querySelector(".addButton");
let login = document.querySelector(".login");

let content__notebooks = document.querySelector(".content__notebooks");
let content__mobiles = document.querySelector(".content__mobiles");
let content__acces = document.querySelector(".content__acces");
let select = document.querySelector(".select");
let option = document.querySelectorAll(".option");

let option_1 = document.querySelector(".option-1");
let option_2 = document.querySelector(".option-2");
let option_3 = document.querySelector(".option-3");

let visual_1 = document.querySelector(".visual-1");
let visual_2 = document.querySelector(".visual-2");
let visual_3 = document.querySelector(".visual-3");

let cancel = document.querySelector(".cancel");
let inpTypeEd = document.querySelector(".inpTypeEd");
let inpModelEd = document.querySelector(".inpModelEd");
let inpYearEd = document.querySelector(".inpYearEd");
let inpPriceEd = document.querySelector(".inpPriceEd");
let inpImgsEd = document.querySelector(".inpImgsEd");
let modal__edit = document.querySelector(".modal__edit");
let add__menuExit = document.querySelector(".add__menu-exit");
let cards__ssh = document.querySelector(".cards__ssh");
let inpSearch = document.querySelector(".inpSearch");
let searchValue = "";

let currentPage = 1;
let currentPage2 = 1;
let countPage = 1;

saveBtnEd = document.querySelector(".saveBtnEd");
saveBtnEdit = document.querySelector(".saveBtnEdit");
// let setAttribute = document.querySelector("");
signIn__button_login.addEventListener("click", () => {
  modal__singIn.classList.toggle("modal__sing-in_active");
  modal__registr.classList.remove("modal__registr_active");
  create__cards.classList.remove("create__cards_active");
});
login.addEventListener("click", () => {
  modal__registr.classList.toggle("modal__registr_active");
  modal__singIn.classList.remove("modal__sing-in_active");
  create__cards.classList.remove("create__cards_active");
});
header__addLink.addEventListener("click", () => {
  create__cards.classList.toggle("create__cards_active");
  modal__registr.classList.remove("modal__registr_active");
  modal__singIn.classList.remove("modal__sing-in_active");
});
exit__btn.addEventListener("click", () => {
  modal__singIn.classList.remove("modal__sing-in_active");
});
cancel.addEventListener("click", () => {
  modal__registr.classList.remove("modal__registr_active");
});
add__menuExit.addEventListener("click", () => {
  cards__ssh.classList.remove("create__cards_active");
});
signIn__button_active.addEventListener("click", () => {
  if (
    !inpName.value.trim() ||
    !inpSurname.value.trim() ||
    !inpNumber.value.trim() ||
    !inpPassword.value.trim() ||
    !inpPasswordEx.value.trim()
  ) {
    alert("Заполните все поля");
  } else {
    let newObj = {
      name: inpName.value,
      surname: inpSurname.value,
      number: inpNumber.value,
      password: inpPassword.value,
      passwordEx: inpPasswordEx.value,
    };
    createUsersObj(newObj);
  }
});

function createUsersObj(anketa) {
  fetch(APIusers, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(anketa),
  });
  inpName.value = "";
  inpSurname.value = "";
  inpNumber.value = "";
  inpPassword.value = "";
  inpPasswordEx.value = "";
  modal__registr.style.display = "none";
}

addButton.addEventListener("click", () => {
  if (
    !inpType.value.trim() ||
    !inpModel.value.trim() ||
    !inpYear.value.trim() ||
    !inpPrice.value.trim() ||
    !inpImgs.value.trim()
  ) {
    alert("Заполните все поля");
  } else {
    let newObj = {
      type: inpType.value,
      model: inpModel.value,
      year: inpYear.value,
      price: inpPrice.value,
      img: inpImgs.value,
    };
    createCards(newObj);
    readCatalog();
  }
});

function createCards(catalog) {
  fetch(APIcatalog, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(catalog),
  });
  inpType.value = "";
  inpModel.value = "";
  inpYear.value = "";
  inpPrice.value = "";
  inpImgs.value = "";
  create__cards.classList.toggle("create__cards_active");
}

async function readCatalog(value) {
  const res = await fetch(
    `${APIcatalog}`
    // ?q=${searchValue}&_page=${currentPage}&_limit=3
  );
  //
  const data = await res.json();
  content__notebooks.innerHTML = "";
  content__mobiles.innerHTML = "";
  content__acces.innerHTML = "";
  data.forEach((elem) => {
    if (value === elem.type) {
      content__notebooks.innerHTML += `
    <div class="card__visual visual-1">
      <div class="visual__img">
        <img src="${elem.img}" alt="" />
      </div>
      <div class="visual__ charact">
        <h4 class="charact__type">${elem.type}</h4>
        <h4 class="charact__model">${elem.model}</h4>
        <h4 class="charact__year">${elem.year}</h4>
        <h4 class="charact__price">${elem.price}</h4>
      </div>
      <div class="btnsEdDel">
      <button class="btnEd btned" id="${elem.id}">Edit</button>
      <button class="btnDel btned" id="${elem.id}">Delete</button>
      </div>
    </div>
            `;
    } else if (value === elem.type) {
      content__notebooks.innerHTML += `
            <div class="card__visual visual-2">
              <div class="visual__img">
                <img src="${elem.img}" alt="" />
              </div>
              <div class="visual__ charact">
                <h4 class="charact__type">${elem.type}</h4>
                <h4 class="charact__model">${elem.model}</h4>
                <h4 class="charact__year">${elem.year}</h4>
                <h4 class="charact__price">${elem.price}</h4>
              </div>
              <div class="btnsEdDel">
              <button class="btnEd btned" id="${elem.id}">Edit</button>
              <button class="btnDel btned" id="${elem.id}">Delete</button>
              </div>
            </div>
                    `;
    } else if (value === elem.type) {
      content__notebooks.innerHTML += `
            <div class="card__visual visual-3">
              <div class="visual__img">
                <img src="${elem.img}" alt="" />
              </div>
              <div class="visual__ charact">
                <h4 class="charact__type">${elem.type}</h4>
                <h4 class="charact__model">${elem.model}</h4>
                <h4 class="charact__year">${elem.year}</h4>
                <h4 class="charact__price">${elem.price}</h4>
              </div>
              <div class="btnsEdDel">
              <button class="btnEd btned" id="${elem.id}">Edit</button>
              <button class="btnDel btned" id="${elem.id}">Delete</button>
              </div>
            </div>
                    `;
    }
  });
  // pageFunc();
}

select.addEventListener("change", (e) => {
  readCatalog(e.target.value);
});

document.addEventListener("click", (e) => {
  let del_id = e.target.id;
  let del_class = [...e.target.classList];
  //   console.log(del_id);
  if (del_class.includes("btnDel")) {
    fetch(`${APIcatalog}/${del_id}`, {
      method: "DELETE",
    })
      .then(() => readCatalog())
      //   .then(() => readSearch())
      .catch((error) => console.error("Error deleting item:", error));
  }
});
// ! EDIT
document.addEventListener("click", (e) => {
  const ed_id = e.target.id;
  const ed_class = [...e.target.classList];
  if (ed_class.includes("btnEd")) {
    fetch(`${APIcatalog}/${ed_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        inpTypeEd.value = data.type;
        inpModelEd.value = data.model;
        inpYearEd.value = data.year;
        inpPriceEd.value = data.price;
        inpImgsEd.value = data.img;
        saveBtnEdit.setAttribute("id", data.id);
      });
    modal__edit.classList.toggle("modal__edit_active");
  }
});

saveBtnEdit.addEventListener("click", () => {
  let edit = {
    type: inpTypeEd.value,
    model: inpModelEd.value,
    year: inpYearEd.value,
    price: inpPriceEd.value,
    img: inpImgsEd.value,
  };
  edited(edit, saveBtnEdit.id);
  modal__edit.classList.remove("modal__edit_active");
});
function edited(edit, id) {
  fetch(`${APIcatalog}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(edit),
  }).then(() => readCatalog());
  // .then(() => readSearch());
}

// inpSearch.addEventListener("input", (e) => {
//   searchValue = e.target.value.trim();
//   // console.log(e.target.value);
//   if (!inpSearch.value.trim()) {
//     currentPage = currentPage2;
//     e.preventDefault();
//   } else {
//     currentPage = 1;
//   }
//   readCatalog();
// });

// // ! PAGINATION
// function pageFunc() {
//   fetch(APIcatalog)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       countPage = Math.ceil(data.length / 3);
//     });
// }
// prevBtn.addEventListener("click", () => {
//   if (currentPage <= 1) return;
//   currentPage--;
//   currentPage2--;
//   readCatalog();
// });
// nextBtn.addEventListener("click", () => {
//   if (currentPage >= countPage) return;
//   currentPage++;
//   currentPage2++;
//   readCatalog();
// });

async function readSearch() {
  const res = await fetch(APIcatalog);
  const data = await res.json();
  content__notebooks.innerHTML = "";
  data.filter((elem) => {
    if (
      elem.type.toLowerCase().indexOf(inpSearch.value.toLowerCase()) != -1 ||
      elem.model.toLowerCase().indexOf(inpSearch.value.toLowerCase()) != -1 ||
      elem.price.toLowerCase().indexOf(inpSearch.value.toLowerCase()) != -1
    ) {
      content__notebooks.innerHTML += `
            <div class="card__visual visual-3">
              <div class="visual__img">
                <img src="${elem.img}" alt="" />
              </div>
              <div class="visual__ charact">
                <h4 class="charact__type">${elem.type}</h4>
                <h4 class="charact__model">${elem.model}</h4>
                <h4 class="charact__year">${elem.year}</h4>
                <h4 class="charact__price">${elem.price}</h4>
              </div>
              <div class="btnsEdDel">
              <button class="btnEd btned" id="${elem.id}">Edit</button>
              <button class="btnDel btned" id="${elem.id}">Delete</button>
              </div>
            </div>
                    `;
    } else if (!inpSearch.value.trim()) {
      content__notebooks.innerHTML = "";
    }
  });
}
inpSearch.addEventListener("input", () => {
  content__notebooks.innerHTML = "";
  readSearch();
});
