const IMG_ACCESS_KEY = 'kWuw6vg9fc9Hehd5aeURFw-qECbF9kvWI91pLfqrzMY'
const URL = `https://api.unsplash.com/photos/random?query=landscape&client_id=${IMG_ACCESS_KEY}`
const URL2 =`https://kyung0446.github.io/json/image_unsplash.json`
const URL3 =`./image_unsplash.json`;

// fetch(URL2).then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data.urls.full);
//     let bg = document.createElement('img');
//     bg.src = data.urls.full;
//     if( bg.src = data.urls.full){
//         document.body.appendChild(bg);
//     }else{
//         let anothorBg = document.createElement('img');
//         anothorBg.src = `cafe-1.jpg`
//         document.body.appendChild(anothorBg)
//     }

    
// })

const changeBgImg = (image_url)=>{
    const bodyElem = document.body;
    bodyElem.style.backgroundImage = 
    `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${image_url})`;
}

const getRandomIdx = (data)=>{
    let ranNum = Math.floor(Math.random()*data.length);
    changeBgImg(data[ranNum].urls.full)
    setCopright(data[ranNum]);
    
}

const setCopright = (data)=>{
    let currentData = data.location
    let Copyright = document.createElement('p');
    Copyright.className = 'bg_desc';
    Copyright.textContent = `사진제공 : ${data.alt_description},${currentData.name},${currentData.country}`
    document.body.appendChild(Copyright);
}

const bg_init = ()=>{
    fetch(URL3).then(response=>response.json())
    .then(data =>getRandomIdx(data))
    .catch(error=>console.log(error))
}

bg_init();

