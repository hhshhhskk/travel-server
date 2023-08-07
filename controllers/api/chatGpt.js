

function handler(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const url = 'https://api.kakaobrain.com/v1/inference/kogpt/generation';
  const REST_API_KEY = '0c4b9c21db4149dca386b602d3553011'; // Replace this with your actual KakaoAk API key

  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': 'KakaoAk ' + REST_API_KEY,
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
















// const { Configuration, OpenAIApi } = require("openai");

// // OpenAI API 키 설정
// const apiKey = "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";
// const configuration = new Configuration({
//   apiKey: apiKey,
// });
// const openai = new OpenAIApi(configuration);

// // 클라이언트로부터 메시지를 받아 응답을 생성하여 JSON 형식으로 클라이언트에게 전송

// async function handler(req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     try {
//         const userInput = req.body.userInput;
//         console.log(req.body.userInput);

//         // 챗지피티 API 호출
//         const response = await openai.createChatCompletion({
//             model: "gpt-3.5-turbo",
//             messages: [{ role: "user", content: userInput }],
//             temperature: 1,
//             max_tokens: 256,
//             top_p: 1,
//             frequency_penalty: 0,
//             presence_penalty: 0,
//     });
        
//         // API 응답에서 필요한 정보 추출
//         const aiReply = response.data.choices[0].message.content.trim();
        
//         // JSON 형식으로 응답 생성
//         const responseData = { ai: aiReply };
//         // console.log("대답", responseData);
        
//         // 클라이언트에게 JSON 형식으로 응답 전송
//         res.json(responseData);
//       } catch (error) {
//         console.error('Error fetching AI response:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       }
// }
// module.exports = handler;