// register user
const register = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  try {
    // console.log(req.body);
    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "password is required" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "password must be at least 8 chars" });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "confirm password must match password" });
    }
    //db insert
    res.status(200).json({ message: "registered successfully" });
  } catch (error) {
    return res.status(500).json({ message: "failed to register user" });
  }
};

module.exports = {
  register,
};
