

function handler(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const url = 'https://api.kakaobrain.com/v1/inference/kogpt/generation';
  const REST_API_KEY = process.env.KAKAO_API_KEY; // Replace this with your actual KakaoAk API key

  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': 'KakaoAK ' + REST_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body)
  };
  console.log(req.body);

  fetch(url, requestOptions)
    .then(async response => {
      const re = await response.json()
      console.log(re);
    })
    .then(data => res.json(data))
    .catch(error => res.status(500).json({ error: 'Error fetching data from KakaoBrain API' }));
 
}
module.exports = handler;