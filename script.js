// Function to fetch the NASA image of the day data
async function fetchAPOD() {
    const apiKey = "BnjlgCuASb6JOgvfmmMWhtw5TN9eiRyuD8sCTxJa";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data from NASA API");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Function to format the date to a more readable format (e.g., July 21, 2023)
  function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  
  // Function to display the NASA image of the day data
  function displayAPOD(data) {
    const apodImage = document.getElementById("apodImage");
    const apodTitle = document.getElementById("apodTitle");
    const apodDate = document.getElementById("apodDate");
    const apodExplanation = document.getElementById("apodExplanation");
  
    apodImage.src = data.url;
    apodImage.alt = data.title;
    apodTitle.textContent = data.title;
  
    const date = new Date();
    const formattedDate = formatDate(date);
    apodDate.textContent = formattedDate;
  
    apodExplanation.textContent = data.explanation;
  }
  
  // Call the function to fetch the data and display it on the page
  fetchAPOD().then((data) => {
    if (data) {
      displayAPOD(data);
    }
  });
  
