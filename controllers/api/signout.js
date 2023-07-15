const db = require('../../config/database');

// 회원탈퇴
function handler(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const { id } = req.body;
    db.query(`DELETE FROM member where id = "${id}"`, function (err, rows) {
        res.json({ status: '성공', message: `${id} : 해당 아이디가 삭제되었습니다.` })
        db.query(`DELETE FROM mypage where id = "${id}"`, function (err, rows) {
        });
      return;
  });
}

module.exports = handler;