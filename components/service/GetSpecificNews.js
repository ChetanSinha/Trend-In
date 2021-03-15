import { articleURL, language, API_KEY } from "../config/APIConfigFull";

export async function getArticles(sources = "bbc-news") {
  try {
    const query = await fetch(
      `${articleURL}?sources=${sources}&language=${language}`,
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
