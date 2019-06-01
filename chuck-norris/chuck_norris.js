const loaderQuery = document.querySelector("#loader");

const getJoke = async (category) => {
  try {
    const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
    return response.data.value;
  }
  catch(error) {
    console.log('error')
  }
}

let dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", function (event) {
    event.preventDefault();
  GetSelectedValue() 
});

function GetSelectedValue(){
  try {
    let result = dropdown.options[
      dropdown.selectedIndex].value;
    if (result == "None") {
      let h1 = document.querySelector("h2");
  h1.innerHTML = null
      throw('nothing found')
    }
    displayJoke(result)
  }
  catch(error) {
    console.log(error);
  }
}

const displayJoke =  async (category) => { 
  loaderQuery.style.display = "flex";
  let h2 = document.querySelector("h2");
  h2.innerHTML = null
  const joke = await getJoke(category)
  h2.innerHTML = joke;
  loaderQuery.style.display = "none";
  return joke
}
