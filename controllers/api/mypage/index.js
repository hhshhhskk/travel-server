const db = require('../../../config/database');

// 마이페이지
function handler(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
  const id = req.params.id;
    db.query(`select id, wishlist_id, title from mypage WHERE id = "${id}"`, function (err, rows) {
        // console.log(rows);
        if (rows.length === 0) {
          res.json([{ status: '실패', message: '찜 목록이 없습니다.' }])
          return;
        } else {
          res.json(rows);
          return;
          }
      });
}

module.exports = handler;