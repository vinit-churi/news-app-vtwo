// const apiKeyOne = "c8ecc81fda1c46748c525dddc461c065";
const apiKeyTwo = "e4397fed6ebf4bae9b15c651e33df206";
const Requests = {
  showcase: `https://newsapi.org/v2/top-headlines?country=us&pageSize=1&apiKey=${apiKeyTwo}`,
  hot: `https://newsapi.org/v2/top-headlines?country=in&pageSize=1&apiKey=${apiKeyTwo}`,
  trending: `https://newsapi.org/v2/everything?pageSize=4&apiKey=${apiKeyTwo}&sortBy=relevancy&q=india`,
  EditorsPick: `https://newsapi.org/v2/everything?pageSize=4&apiKey=${apiKeyTwo}&sortBy=relevancy&q=space`,
  categoryGeneral: `general`,
  categoryScience: `https://newsapi.org/v2/top-headlines?apiKey=${apiKeyTwo}&country=in&category=science&pageSize=15`,
  categoryTechology: "technology",
  categorySports: "sports",
  categoryBusiness: "business",
  categoryEntertainment: "entertainment",
};

export default Requests;
