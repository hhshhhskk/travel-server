const express    = require('express');
const cors       = require("cors");
const bodyParser = require('body-parser');
const app = express();

const rootRouter = require('./routes/index');

app.use(cors({
  origin: "*",                // 출처 허용 옵션
  credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', function (req, res) {
  res.send('Hello World');
})

// app.use("/user", require("./routes/userRouter"));
app.use("/", rootRouter);

app.listen(8080, () => {
    console.log("server start")
})