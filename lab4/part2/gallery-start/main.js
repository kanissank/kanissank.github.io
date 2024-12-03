const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArr = ["pic1.jpg", "pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

/* Declaring the alternative text for each image file */
const imgAlts = [
    {altText: "photo 1 - picture of a eye"},
    {altText: "photo 2 - picture of brown rock"},
    {altText: "photo 3 - picture of purple and white flowers"},
    {altText: "photo 4 - picture of the first nations"},
    {altText: "photo 5 - picture of a butterfly"},
   
]

/* Looping through images */\
for (let i =0; i <imgArr.length; i++) {
    const newImage = document.createElement("img");
    newImage.setAttribute('src', `images/${imgArr[i]}`);
    
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
