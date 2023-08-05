fetch("settings.json").then(
    response=>{
    return response.json();
}).then(responseJson=>{
    console.log(responseJson);
})
let userListDOM=document.createElement("ul");

let body=document.querySelector("body");
body.append(userListDOM);

fetch("https://jsonplaceholder.typicode.com/posts").then(
    response=>{
        return response.json();
    }
).then(responseJson=>{
   responseJson.forEach(element => {
    let users=document.createElement("li");
    users.textContent=`${element.title}`;
    userListDOM.append(users);

    fetch("https://jsonplaceholder.typicode.com/photos").then(
        response=>{
            return response.json();
        }
        ).then(photos=>{
            photos.forEach((photo)=>{
               let img=document.createElement("img");
               img.src=photo.url;
               img.style="width:5px;height:5px;";
               users.append(img);
            })
        }
    )
   });
})