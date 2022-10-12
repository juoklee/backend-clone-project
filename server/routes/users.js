const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth")



router.get("/auth", auth, (req, res) => {

    //여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 True라는 말
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
    });
});

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
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
            });
        })
    })
})

module.exports = router;