const nav = document.querySelector(".nav2");
const hamburger = document.querySelector(".nav-toggle");
const submit_Btn = document.querySelector(".submitBtn");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav-visi");
});

let tiffinArr = [
  {
    imgUrl:
      "https://as2.ftcdn.net/v2/jpg/04/26/94/99/1000_F_426949957_iFC4zrETHm1lFMiLpsVXeAhFQe6vCNAk.jpg",
    imgName: "Idli",
  },
  {
    imgUrl:
      "https://as2.ftcdn.net/v2/jpg/01/65/94/63/1000_F_165946303_Dj0zr1G7B8QsseRcP0RE2tfFty0NqXnu.jpg",
    imgName: "Dosa",
  },
  {
    imgUrl:
      "https://t4.ftcdn.net/jpg/04/98/13/23/240_F_498132312_2hCIYfgkvzgi6RQJ9LkpEsXLQRgdyv54.jpg",
    imgName: "Puri",
  },
  {
    imgUrl:
      "https://as2.ftcdn.net/v2/jpg/04/93/56/75/1000_F_493567592_wijZ9m7d1RtxuyoYF7ACHMaDmUvgi4ty.jpg",
    imgName: "Vada",
  },
  {
    imgUrl:
      "https://t4.ftcdn.net/jpg/03/19/21/49/240_F_319214993_0GiaFbI5SQ9Yy954epZNL24zDPOjlNOb.jpg",
    imgName: "Khichdi",
  },
  {
    imgUrl:
      "https://t3.ftcdn.net/jpg/03/87/56/80/240_F_387568034_Fv46T7GE5tEorFmRhVGcuwyBIwofr98w.jpg",
    imgName: "Bonda",
  },
  {
    imgUrl:
      "https://t4.ftcdn.net/jpg/03/76/16/99/240_F_376169937_Bz1sBXgfnkIub5iDCAynsnF8jKng3Qa4.jpg",
    imgName: "Chapathi",
  },
  {
    imgUrl:
      "https://t3.ftcdn.net/jpg/04/43/82/54/240_F_443825484_Xwf3v4AMCxybBMJoe0E4ixk43OGpZGe7.jpg",
    imgName: "Gunta-ponganalu",
  },
];
let lunchArr = [
  {
    imgUrl:
      "https://as2.ftcdn.net/v2/jpg/02/41/05/79/1000_F_241057989_XlOBf7rVsTPAOkNNiVBpT2IzXbTLJsxh.jpg",
    imgName: "Aalo",
  },

  {
    imgUrl:
      "https://t3.ftcdn.net/jpg/03/33/04/02/240_F_333040259_XAngCfVMVrmZbJXD3fqH4DVhMaTK7KbV.jpg",
    imgName: "Chicken",
  },
  {
    imgUrl:
      "https://as2.ftcdn.net/v2/jpg/04/65/76/81/1000_F_465768144_LCJFMuERMG5OsvJjs1ZWmtiPC9GlFljB.jpg",
    imgName: "Thotakura",
  },
  {
    imgUrl:
      "https://t4.ftcdn.net/jpg/04/35/53/69/240_F_435536965_G1Vaa7i3UZ9dQoChp7VMDAyAKFBph9so.jpg",
    imgName: "Mutton",
  },
  {
    imgUrl:
      "https://as2.ftcdn.net/v2/jpg/03/53/85/51/1000_F_353855148_vbypjaLxrA8jM2ZhfuvZuTKmVBbRjr2V.jpg",
    imgName: "Fish",
  },
  {
    imgUrl:
      "https://t3.ftcdn.net/jpg/03/18/32/18/240_F_318321891_B382TsKFWdk4CWVTmTBkCgdD5ZGDzwN1.jpg",
    imgName: "boti",
  },
  {
    imgUrl:
      "https://t3.ftcdn.net/jpg/03/00/06/56/240_F_300065634_NFc2jb0k2xMkSyZBdX6laPcwOHLpqRy3.jpg",
    imgName: "Egg Curry",
  },

  {
    imgUrl:
      "https://t4.ftcdn.net/jpg/03/76/16/99/240_F_376169937_Bz1sBXgfnkIub5iDCAynsnF8jKng3Qa4.jpg",
    imgName: "Chapathi",
  },
];
let dinnerArr = [
  {
    imgUrl:
      "https://t4.ftcdn.net/jpg/04/38/95/49/240_F_438954901_lZuC9BwArPpNt6lpDZOiYKGZ73nyfoTH.jpg",
    imgName: "Raagi-Dosa",
  },
  {
    imgUrl:
      "https://t3.ftcdn.net/jpg/05/57/75/54/240_F_557755479_u1eQNUm9fNeu7bxLqhT6TbubtLxWkJxB.jpg",
    imgName: "Jonna-Dosa",
  },
  {
    imgUrl:
      "https://t4.ftcdn.net/jpg/03/76/16/99/240_F_376169937_Bz1sBXgfnkIub5iDCAynsnF8jKng3Qa4.jpg",
    imgName: "Chapathi",
  },
  {
    imgUrl:
      "https://t3.ftcdn.net/jpg/03/62/55/02/240_F_362550226_H4lgK7iBPQbBotpZseFPoTd6oroVlR2t.jpg",
    imgName: "Raagi-Sangati",
  },
];

let tiffinBox = document.querySelector(".tiffin");
let lunchBox = document.querySelector(".lunch");
let dinnerBox = document.querySelector(".dinner");

var Current_MenuItems;
var Current_MenuBoxes;

function existedArrays(arr, box) {
  for (let i = 0; i < arr.length; i++) {
    box.innerHTML += `<div class="box">
    <img src=${arr[i].imgUrl} class="images img">
    <h2>${arr[i].imgName}</h2>
    </div>`;
  }
}

existedArrays(tiffinArr, tiffinBox);
existedArrays(lunchArr, lunchBox);
existedArrays(dinnerArr, dinnerBox);

const tiffinPlusBtn = document.querySelector(".p1");
const lunchPlusBtn = document.querySelector(".p2");
const dinnerPlusBtn = document.querySelector(".p3");
const doneHandler = document.querySelector(".btn1");

let tiffinArr_obj = [];
let lunchArr_obj = [];
let dinnerArr_obj = [];

var wholeObj = {
  Tiffin: tiffinArr_obj,
  Lunch: lunchArr_obj,
  Dinner: dinnerArr_obj,
};

var storingObjects;
var mealName;
var existedData;

var login_value = JSON.parse(
  localStorage.getItem(localStorage.getItem("currentUser"))
);
console.log(login_value);

var exist_tiffin;
var exist_lunch;
var exist_dinner;

function plusBtn(
  plusBtns,
  spanElem,
  MenuArrays,
  MenuBoxes,
  storingBoxes,
  stored_userValues
) {
  document.querySelector(".form1").classList.add("form-visible");
  document.querySelector(".s1").innerHTML = spanElem;
  Current_MenuItems = MenuArrays;
  Current_MenuBoxes = MenuBoxes;
  storingObjects = storingBoxes;
  existedData = stored_userValues;
  mealName = spanElem;
}

let imageUrl = document.querySelector(".img-url-1");
let imageName = document.querySelector(".img-name-1");

doneHandler.addEventListener("click", () => {
  var obj = { imgUrl: imageUrl.value, imgName: imageName.value };

  if (login_value != null) {
    existedData.push(obj);

    Current_MenuBoxes.innerHTML = "";
    existedArrays(Current_MenuItems, Current_MenuBoxes);
    existedArrays(existedData, Current_MenuBoxes);
    localStorage.setItem(
      localStorage.getItem("currentUser"),
      JSON.stringify(login_value)
    );

    imageUrl.value = "";
    imageName.value = "";
  } else {
    storingObjects.push(obj);

    console.log(mealName, storingObjects);

    Current_MenuBoxes.innerHTML = "";
    existedArrays(Current_MenuItems, Current_MenuBoxes);
    existedArrays(storingObjects, Current_MenuBoxes);

    localStorage.setItem(
      localStorage.getItem("currentUser"),
      JSON.stringify(wholeObj)
    );

    console.log(wholeObj);

    imageUrl.value = "";
    imageName.value = "";
  }
});

function checkingData() {
  if (login_value != null) {
    exist_tiffin = login_value["Tiffin"];
    exist_lunch = login_value["Lunch"];
    exist_dinner = login_value["Dinner"];

    existedArrays(exist_tiffin, tiffinBox);
    existedArrays(exist_lunch, lunchBox);
    existedArrays(exist_dinner, dinnerBox);
  }
}

checkingData();
