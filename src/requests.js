// const apiKeyOne = "c8ecc81fda1c46748c525dddc461c065";
const apiKeyTwo = "e4397fed6ebf4bae9b15c651e33df206";
const Requests = {
  showcase: `https://newsapi.org/v2/top-headlines?country=us&pageSize=1&apiKey=${apiKeyTwo}`,
  hot: `https://newsapi.org/v2/top-headlines?country=in&pageSize=1&apiKey=${apiKeyTwo}`,
  trending: `https://newsapi.org/v2/everything?pageSize=4&apiKey=${apiKeyTwo}&sortBy=relevancy&q=india`,
  EditorsPick: `https://newsapi.org/v2/everything?pageSize=4&apiKey=${apiKeyTwo}&sortBy=relevancy&q=space`,
  // categoryGeneral: `general`,
  categoryScience: `https://newsapi.org/v2/top-headlines?apiKey=${apiKeyTwo}&country=in&category=science&pageSize=15`,
  categoryTechology: `https://newsapi.org/v2/top-headlines?apiKey=${apiKeyTwo}&country=in&category=technology&pageSize=15`,
  categorySports: `https://newsapi.org/v2/top-headlines?apiKey=${apiKeyTwo}&country=in&category=sports&pageSize=15`,
  categoryBusiness: `https://newsapi.org/v2/top-headlines?apiKey=${apiKeyTwo}&country=in&category=business&pageSize=15`,
  categoryEntertainment: `https://newsapi.org/v2/top-headlines?apiKey=${apiKeyTwo}&country=in&category=entertainment&pageSize=15`,
};

const keyG = "8d8ce8f49342b07f2488082a9c8d9f59";
export const RequsetG = {
  showcase: `https://gnews.io/api/v4/top-headlines?&token=${keyG}&max=1&lang=en`,
  hot: `https://gnews.io/api/v4/top-headlines?&token=${keyG}&max=1&lang=en&topic=technology`,
  trending: `https://gnews.io/api/v4/top-headlines?&token=${keyG}&max=4&lang=en&topic=health`,
  EditorsPick: `https://gnews.io/api/v4/top-headlines?&token=${keyG}&max=4&lang=en&q=self%20help`,
  categoryScience: `https://gnews.io/api/v4/top-headlines?&token=${keyG}&max=6&lang=en&topic=science`,
  categoryTechology: `https://gnews.io/api/v4/top-headlines?&token=${keyG}&max=6&lang=en&topic=technology`,
  categorySports: `https://gnews.io/api/v4/top-headlines?&token=${keyG}&max=6&lang=en&topic=sports`,
  categoryBusiness: `https://gnews.io/api/v4/top-headlines?&token=${keyG}&max=6&lang=en&topic=business`,
  categoryEntertainment: `https://gnews.io/api/v4/top-headlines?&token=${keyG}&max=6&lang=en&topic=entertainment`,
};

export default Requests;
