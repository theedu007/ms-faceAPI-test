
const getImage = () => {
    const file = document.querySelector("input[type=file]").files[0];
    const formData = new FormData();
    formData.append("image", file);
    fetch("/getface", {
        method: "POST",
        body: formData
    }).then(response => {
        return response.blob();
    }).then(blobResponse => {
        const imgHtml = document.createElement("img");
        imgHtml.src = URL.createObjectURL(blobResponse);
        const imageContainer = document.querySelector("#scanImage");
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imgHtml);
        
    })
    .catch(console.error());
}

const addSrcImage = () => {
    const file = document.querySelector("input[type=file]").files[0];
    const srcDiv = document.querySelector("#srcImage");
    const imgHtml = document.createElement("img");
    const reader = new FileReader();
    reader.onload = () => {
        imgHtml.src = reader.result;

    };
    if(file){
        reader.readAsDataURL(file);
        srcDiv.innerHTML = "";
        srcDiv.appendChild(imgHtml);
    }
    else{
        srcDiv.innerHTML = "";
    }
}

window.onload = () => {
    const fileInput = document.querySelector("input[type=file]");
    fileInput.addEventListener("change", addSrcImage);
}