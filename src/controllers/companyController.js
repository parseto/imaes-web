export const handleCompany = (req, res) => {
  console.log("This is handled by companyController");
  res.send("Handled by CompanyController. I will be the company main page");
};

export const company = (req, res) => {
  return res.render("company", {
    pageTitle: "About Us",
  });
};
