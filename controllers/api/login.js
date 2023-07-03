const db = require('../../config/database');

// 로그인
function handler(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
  const { id, password } = req.body;

  db.query(`select name from member WHERE id = "${id}" AND password = "${password}"`, function (err, rows) {
    if (rows.length === 0) {
      res.json({ status: '실패', message: '아이디 혹은 비밀번호가 일치하지 않습니다.' })
      return;
    } else {
      res.json(rows);
      return;
      }
    });
}

module.exports = handler;