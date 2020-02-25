
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
        document.querySelector("#imageDiv").appendChild(imgHtml);
    })
    .catch(console.error());
}