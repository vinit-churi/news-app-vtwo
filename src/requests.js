const Requests = {
  showcase:
    "https://newsapi.org/v2/top-headlines?country=us&pageSize=1&apiKey=c8ecc81fda1c46748c525dddc461c065",
  hot:
    "https://newsapi.org/v2/top-headlines?country=in&pageSize=1&apiKey=c8ecc81fda1c46748c525dddc461c065",
  trending:
    "https://newsapi.org/v2/everything?pageSize=4&apiKey=c8ecc81fda1c46748c525dddc461c065&sortBy=relevancy&q=india",
  editors:
    "https://newsapi.org/v2/top-headlines?country=ca&pageSize=3&apiKey=c8ecc81fda1c46748c525dddc461c065",
  EditorsPick:
    "https://newsapi.org/v2/everything?pageSize=1&apiKey=c8ecc81fda1c46748c525dddc461c065&sortBy=relevancy&q=space",
  categoryGeneral: "general",
  categoryScience:
    "https://newsapi.org/v2/top-headlines?apiKey=c8ecc81fda1c46748c525dddc461c065&country=in&category=science&pageSize=15",
  categoryTechology: "technology",
  categorySports: "sports",
  categoryBusiness: "business",
  categoryEntertainment: "entertainment",
};

export default Requests;
