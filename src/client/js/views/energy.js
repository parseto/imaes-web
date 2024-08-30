document.addEventListener("DOMContentLoaded", function () {
  const menuTitles = document.querySelectorAll(".menu__title");

  // 1. 현재 활성화된 페이지의 URL을 가져옴
  const currentUrl = window.location.href;

  // 2. URL을 '/'로 split하여 마지막에서 두 번째 요소를 가져옴
  const urlParts = currentUrl.split("/");
  const secondLastPart = urlParts[urlParts.length - 2];

  // 3. URL을 '/'로 split하여 마지막 요소를 가져옴
  const lastPart = urlParts[urlParts.length - 1];

  // 4. 숫자 부분만 추출 (예: 'e1' -> '1')
  const numberPart = lastPart.match(/\d+/); // 숫자 부분만 추출
  // 5. 'elec', 'gas', 'commodity'에 따른 menu__title 선택 및 활성화
  if (
    secondLastPart === "elec" ||
    secondLastPart === "gas" ||
    secondLastPart === "commodity"
  ) {
    let activateMenuTitle;

    if (secondLastPart === "elec") {
      activateMenuTitle = menuTitles[0]; // 첫 번째 메뉴 항목 (전력예측 솔루션)
    } else if (secondLastPart === "gas") {
      activateMenuTitle = menuTitles[1]; // 두 번째 메뉴 항목 (천연가스예측 솔루션)
    } else if (secondLastPart === "commodity") {
      activateMenuTitle = menuTitles[2]; // 세 번째 메뉴 항목 (유가예측 솔루션)
    }

    if (activateMenuTitle) {
      const menuItem = activateMenuTitle.parentElement;
      const submenu = menuItem.querySelector(".submenu");

      // submenu를 열고 active 클래스를 추가
      submenu.style.display = "block";
      activateMenuTitle.classList.add("active");

      // 해당하는 숫자에 맞는 서브메뉴 항목을 활성화
      if (numberPart && numberPart[0] === "1") {
        const firstSubmenuItem = submenu.querySelectorAll("li")[0]; // 첫 번째 li
        if (firstSubmenuItem) {
          firstSubmenuItem.classList.add("active");
        }
      } else if (numberPart && numberPart[0] === "2") {
        const secondSubmenuItem = submenu.querySelectorAll("li")[1]; // 두 번째 li
        if (secondSubmenuItem) {
          secondSubmenuItem.classList.add("active");
        }
      }
    }
  }

  // 기존의 클릭 이벤트 핸들러
  menuTitles.forEach((title) => {
    title.addEventListener("click", function () {
      const menuItem = this.parentElement;
      const submenu = menuItem.querySelector(".submenu");

      // 모든 서브메뉴를 닫고 active 클래스를 제거
      menuTitles.forEach((otherTitle) => {
        const otherMenuItem = otherTitle.parentElement;
        const otherSubmenu = otherMenuItem.querySelector(".submenu");

        if (otherSubmenu && otherSubmenu !== submenu) {
          otherSubmenu.style.display = "none";
          otherMenuItem
            .querySelector(".menu__title")
            .classList.remove("active");
        }
      });

      // 현재 클릭한 메뉴의 서브메뉴를 열고 닫음
      if (submenu.style.display === "block") {
        submenu.style.display = "none";
        this.classList.remove("active");
      } else {
        submenu.style.display = "block";
        this.classList.add("active");
      }
    });
  });
});
