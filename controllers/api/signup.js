const db = require('../../config/database');

// 회원가입
function handler(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
  const { name, id, password, passwordcheck } = req.body;
  // id, password, name이 있는지 체크한다.
  if ( !name || !id || !password || !passwordcheck ) {
    res.status(400).json({ status: '실패', message: 'id, password, passwordcheck, name은 필수입력 사항입니다.' });
    return;
  }

  // password와 passwordcheck는 같아야한다.
  if (password !== passwordcheck) {
    res.status(400).json({ status: '실패', message: '패스워드가 일치하지않습니다.' });
    return;
  }

  // id는 중복되지 않도록한다.
  db.query(`SELECT id FROM member WHERE id = "${id}"`, function (err, rows) {
    if (rows.length !== 0) {      
      res.status(400).json({ status: '실패', message: '이미 존재하는 아이디입니다.' });
    return;
    } else {
  // 중복이 없다면 회원을 추가한다.
      db.query(`INSERT INTO member (id, password, passwordcheck, name) VALUES ("${id}", "${password}", "${passwordcheck}", "${name}")`, function (err, rows) {
        if (err) {
          console.log(err);
        } else {
          res.json({ status: '성공', message: '회원가입이 완료되었습니다.' })
          return;
        }
      });
    }
  });
}

module.exports = handler;