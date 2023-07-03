const db = require('../../config/database');

// 회원정보
function handler(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const { id } = req.body;
    db.query(`select id, name from member WHERE id = "${id}"`, function (err, rows) {
        // console.log(rows);
        res.json(rows);
      });
}

module.exports = handler;