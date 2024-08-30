export const rootPage = (req, res) => {
  return res.render("home", {
    pageTitle: "Home",
  });
};
