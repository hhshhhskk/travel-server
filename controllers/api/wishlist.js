const db = require('../../config/database');

// 찜 목록 체크
function handler(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.params.id
    const wishlist_id = req.params.contentid;
  // console.log(id, wishlist_id);
    db.query(`select id, wishlist_id from mypage WHERE wishlist_id = "${wishlist_id}" AND id = "${id}"`, function (err, rows) {
        // console.log(rows);
        if (rows.length === 0) {
          res.json({ status: '실패', message: '해당 항목이 없습니다.' })
          return;
        } else {
          res.json({ status: '성공', message: '해당 항목이 있습니다.' });
          return;
          }
      });
}

module.exports = handler;