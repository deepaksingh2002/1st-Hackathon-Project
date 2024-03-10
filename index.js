let arr = [
    {
        img_src: "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100",
        title: "Grocery",
    },
    {
        img_src: "https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
        title: "Mobiles",
    },
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100",
        title: "Fashion",
    },
    {
        img_src: "https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100",
        title: "Electronics",
    },
    {
        img_src: "https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100",
        title: "Home & Furniture",
    },
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100",
        title: "Appliances",
    },
    {
        img_src: "https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100",
        title: "Travel",
    },
    {
        img_src: "https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100",
        title: "Beauty & Personal Care",
    },
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100",
        title: "Two Wheelers",
    },
];

arr.map((element)=>{
    let image = document.createElement('img');
    image.src = element.img_src;

    let title = document.createElement("p");
    title.innerHTML = element.title;

    let box = document.createElement('div');
    box.append(image,title);

    console.log(box);

    document.getElementById("categories").append(box);
})