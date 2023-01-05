const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];



const imagesList = document.querySelector("ul.gallery");
const createImagesListItem = images
  .map(
    (image) =>
      `<li class="gallery__item"><img class="gallery__image" src="${image.url}" alt="${image.alt}"></li>`
  )
  .join("");
imagesList.insertAdjacentHTML("afterbegin", createImagesListItem);


//const gallery = document.querySelector(".gallery");
//gallery.style.display = "flex";
//gallery.style.flexDirection = "row";
//gallery.style.justifyContent = "center";
//gallery.style.gridGap = "170px";
//gallery.style.listStyle = "none";
//gallery.style.border = "3px solid green";

//for (const img of images) {
  //gallery.insertAdjacentHTML(
    //"afterbegin",
    //`<li><img src=${img.url}, alt=${
    //  img.alt
    //}, width=${250}, height=250></img></li>`
  //);
//}

//DRUGA METODA

// const gallery = document.querySelector(".gallery");
// images.forEach(function (value) {
//   const galleryItem = document.createElement("li");
//   galleryItem.insertAdjacentHTML("afterbegin", `<img src=${value.url}>`);
//   console.log(galleryItem);
//   gallery.append(galleryItem);
// });
// console.log(gallery);