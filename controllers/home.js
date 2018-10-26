module.exports.view = (req, res) => {
  res.render("index.ejs", {
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.REDIRECT_URI
  });
};
