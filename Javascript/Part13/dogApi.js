let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link);
    img.style.display = "block";
    img.style.width = "300px";
    img.style.height = "300px";
    img.style.borderRadius = "10px";
    img.style.marginTop = "20px";
});

async function getImage() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (e) {
    console.log("error -", e);
    return "No Image found";
  }
}