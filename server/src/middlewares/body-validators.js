const checkFields = (object) => {
  const fields = Object.entries(object);
  const keyError = fields.find(
    ([key, value]) => value === undefined && key,
  );
  return keyError;
};

const loginBody = (req, res, next) => {
  const { user_name, password } = req.body;
  const loginUser = { user_name, password };

  const keyError = checkFields(loginUser);

  if (keyError) {
    res.status(400).json({
      error: `Missing '${keyError}' in request body`,
    });
    return;
  }

  res.loginUser = loginUser;
  next();
};

module.exports = {
  loginBody,
};
