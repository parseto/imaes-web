import { insertIntoTable } from "../schema/contactSchema";

export const contact = (req, res) => {
  return res.render("contact", {
    pageTitle: "Contact",
  });
};

export const contactedInfo = async (req, res) => {
  const { name, email, query } = req.body;

  // 데이터베이스에 정보 삽입.
  try {
    await insertIntoTable(name, email, query); // 데이터베이스에 데이터를 삽입합니다.;
    res.status(201).render("contact", {
      pageTitle: "Contact",
    });
  } catch (error) {
    console.error("Error in contactedInfo controller:", error); // 에러를 로그에 출력
    res.status(500).render("contact", {
      pageTitle: "Contact",
      errorMessage: true,
    });
  }
};
