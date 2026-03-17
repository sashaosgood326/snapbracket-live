exports.handler = async function() {
  const API_KEY = "5bdea9daff957480875a847e3b39de81";
  const url = `https://api.the-odds-api.com/v4/sports/basketball_ncaab/odds/?apiKey=${API_KEY}&regions=us&markets=h2h,totals,spreads`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch odds" })
    };
  }
};
