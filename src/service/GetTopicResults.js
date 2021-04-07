import { articleURL, API_KEY } from "../config/APIConfigFull";

export async function getArticles(topic) {
  try {
    const query = await fetch(
      `${articleURL}?qInTitle=${topic}&sortBy=publishedAt&language=en`,
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
