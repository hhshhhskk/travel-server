const db = require('../../../config/database');

// 마이페이지 찜목록 추가

function handler(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const { id, wishlist_id } = req.body;

    db.query(`INSERT INTO mypage (id, wishlist_id) VALUES ("${id}", "${wishlist_id}")`, function (err, rows) {
        if (err) {
          console.log(err);
        } else {
          res.json({ status: '성공', message: `${wishlist_id} 를 찜목록에 추가 하였습니다.` })
          return;
        }
      });
    }

module.exports = handler;