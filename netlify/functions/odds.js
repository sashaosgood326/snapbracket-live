exports.handler = async function() {
  const API_KEY = process.env.ODDS_API_KEY;

  const url = `https://api.the-odds-api.com/v4/sports/basketball_ncaab/odds/?apiKey=${API_KEY}&regions=us&markets=h2h,totals`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
