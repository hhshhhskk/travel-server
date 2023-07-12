const db = require('../../../config/database');

// 마이페이지 찜목록 제거

function handler(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const { id, contentid } = req.body;

    db.query(`DELETE FROM mypage WHERE id = "${id}" AND wishlist_id = "${contentid}"`, function (err, rows) {
        if (err) {
          console.log(err);
        } else {
          res.json({ status: '성공', message: `${contentid}을 찜목록에서 제거 하였습니다.` })
          return;
        }
      });
    }

module.exports = handler;