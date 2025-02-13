module.exports.sendToken = async (user, statuCode, res) => {
  console.log(user,statuCode,res)
    const token = user.getJWTToken();

    console.log(token)
  
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    res.status(statuCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  };
  