const freeModel = (req, res) => {
  res.status(200).json({
    status: "success",
    model: "AI-Genius Free Model",
    message: `Welcome ${req.user.email}. You can use the free AI model.`,
    role: req.user.role,
  });
};

const premiumModel = (req, res) => {
  res.status(200).json({
    status: "success",
    model: "AI-Genius Premium Model",
    message: `Premium AI model accessed by ${req.user.email}.`,
    role: req.user.role,
  });
};

const purgeCache = (req, res) => {
  res.status(200).json({
    status: "success",
    message: `AI cache purged successfully by admin ${req.user.email}.`,
    role: req.user.role,
  });
};

module.exports = {
  freeModel,
  premiumModel,
  purgeCache,
};
