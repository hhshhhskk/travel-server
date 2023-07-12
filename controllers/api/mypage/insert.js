const db = require('../../../config/database');

// 마이페이지 찜목록 추가

function handler(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const { id, contentid, title } = req.body;

    db.query(`INSERT INTO mypage (id, wishlist_id, title) VALUES ("${id}", "${contentid}", "${title}")`, function (err, rows) {
        if (err) {
          console.log(err);
        } else {
          res.json({ status: '성공', message: `${contentid}을 찜목록에 추가 하였습니다.` })
          return;
        }
      });
    }

module.exports = handler;