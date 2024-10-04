// Verify login and respond
export const login = async (req, res) => {
  const { username, password } = req.body;

  // Validate the username and password
  if (
    username === process.env.MY_USERNAME &&
    password === process.env.MY_PASSWORD
  ) {
    // Generate a JWT token
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
