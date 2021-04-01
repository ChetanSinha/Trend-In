export async function getArticles(subname = "trending") {
  try {
    const results = await fetch(
      `https://www.reddit.com/r/${subname}.json?limit=800&?sort=hot&t=all`
    )
      .then((res) => res.json())
      .then((json) => {
        return json.data.children;
      });

    return results;
  } catch (err) {
    alert("error in fetching");
    console.log("error", err);
  }
}
