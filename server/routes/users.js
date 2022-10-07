const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

router.post("/signup", (req, res) => {
    console.log( req.body );
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({success: false, err});
        return res.status(200).json({
            success: true
        })
    })

});

router.post("/login", (req, res) => {
    console.log( req.body );

    User.findOne({ email: req.body.email }, (err, user) => {
        // email이 없을 때
        if(!user) {
            return res.json({ loginSuccess: false, message: "Auth failed, email not found" });
        }
        // password 비교
        user.comparePassword(req.body.password, (err, isMatch) => {
            // password가 맞지 않을 때
            if(!isMatch) {
                return res.json({ loginSuccess: false, message: "Wrong password" });
            }

            //jwt 생성
            

        })
    })
})

module.exports = router;