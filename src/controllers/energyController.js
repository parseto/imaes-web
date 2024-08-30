import path from "path";
import fs from "fs";

// 대분류 controller
export const energyPage = (req, res) => {
  return res.render("energyMain", {
    pageTitle: "Forecast",
  });
};

// 중분류 controller
// 1. 전력
export const energyElec = (req, res) => {
  // HTML 파일 경로 설정
  const htmlFilePath = path.join(
    __dirname,
    "../images/forecast/electricity-forecast.html" // plotly의 경로는 이에 따라 바꿔주면됨.
  );

  // HTML 파일 내용을 동기적으로 읽어들임
  const htmlContent = fs.readFileSync(htmlFilePath, "utf8");

  // res.render에 추가 데이터 전달
  return res.render("energyElec", {
    pageTitle: "전력예측 솔루션",
    activateForecast: req.params["id"],
    graphContent: htmlContent, // graphContent 추가
    performanceContent: "energyElec에서 보냈습니다 222", // 추가적으로 필요한 데이터
  });
};

// 2. 가스
export const energyGas = (req, res) => {
  // HTML 파일 경로 설정
  const htmlFilePath = path.join(
    __dirname,
    "../images/forecast/gas-forecast.html" // plotly의 경로는 이에 따라 바꿔주면됨.
  );

  // HTML 파일 내용을 동기적으로 읽어들임
  const htmlContent = fs.readFileSync(htmlFilePath, "utf8");

  // res.render에 추가 데이터 전달
  return res.render("energyGas", {
    pageTitle: "천연가스예측 솔루션",
    activateForecast: req.params["id"],
    graphContent: htmlContent, // graphContent 추가
    performanceContent: "energyGas에서 보냈습니다 222", // 추가적으로 필요한 데이터
  });
};

// 3. 원자재
export const energyCommodity = (req, res) => {
  // HTML 파일 경로 설정
  const htmlFilePath = path.join(
    __dirname,
    "../images/forecast/commodity-forecast.html" // plotly의 경로는 이에 따라 바꿔주면됨.
  );

  // HTML 파일 내용을 동기적으로 읽어들임
  const htmlContent = fs.readFileSync(htmlFilePath, "utf8");

  // res.render에 추가 데이터 전달
  return res.render("energyCommodity", {
    pageTitle: "원자재예측 솔루션",
    activateForecast: req.params["id"],
    graphContent: htmlContent, // graphContent 추가
    performanceContent: "energyCommodity에서 보냈습니다 222", // 추가적으로 필요한 데이터
  });
};
