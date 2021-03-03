import { articleURL, countryCode, API_KEY } from "../config/APIConfig";

export async function getArticles(category = "general") {
  try {
    const query = await fetch(
      `${articleURL}?country=${countryCode}&category=${category}`,
      {
        headers: {
          "X-API-KEY": API_KEY,
        },
      }
    );

    const result = await query.json();

    return result.articles;
  } catch (error) {
    alert("error in fetching");
    console.log(error);
  }
}
