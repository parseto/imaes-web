// 최상단 scroll down
document.querySelector(".scroll-down-btn").addEventListener("click", () => {
  const targetElement = document.querySelector(".second-block");

  // 요소의 위치를 계산
  const rect = targetElement.getBoundingClientRect();
  const scrollTop = window.scrollY;

  // 목표 위치를 계산하고 오프셋을 추가
  const targetPosition = rect.top + scrollTop - 250; // 50px 아래로 미세 조정

  // 지정된 위치로 스크롤
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

// home의 3가지 section
export const showForecastSection = () => {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const secondBlock = document.querySelector(".second-block");
      if (secondBlock) {
        secondBlock.classList.add("show-second-block");
      }
    }, 2000); // 2초 후에, home-second-block.scss랑 시간 맞추기
  });
};

showForecastSection();

// introduce
export const introduceDisappear = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header"); // base.pug에서 import한 header
    const introduce = document.querySelector(".introduce"); // introduce

    let lastScrollTop = 0; // 마지막 스크롤 위치 저장

    window.addEventListener("scroll", function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const introduceBottom = introduce.getBoundingClientRect().bottom;
      const headerHeight = header.offsetHeight;

      // 스크롤 다운
      if (scrollTop > lastScrollTop) {
        // first-block이 header와 겹칠 때 first-block 숨기기
        if (introduceBottom <= headerHeight) {
          introduce.style.opacity = 0;
          introduce.style.visibility = "hidden";
          introduce.style.transition = "opacity 0.3s ease-out";
        }
      }
      // 스크롤 업
      else {
        // 스크롤을 위로 하면 first-block 다시 나타나게
        if (scrollTop < lastScrollTop || introduceBottom > headerHeight) {
          introduce.style.opacity = 1;
          introduce.style.visibility = "visible";
          introduce.style.transition = "opacity 0.3s ease-in-out";
        }
      }

      lastScrollTop = scrollTop; // 현재 스크롤 위치를 저장
    });
  });
};

introduceDisappear();

// solution-header
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const solutionHeader = document.querySelector(".solution-header");
  const solutionTitle = document.querySelector(".solution-header__title");
  const solutionContent = document.querySelector(".solution-header__content");

  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const solutionHeaderRect = solutionHeader.getBoundingClientRect();
    const headerRect = header.getBoundingClientRect();

    // Check if solution-header__title and solution-header__content intersect with header
    const isIntersecting = solutionHeaderRect.bottom <= headerRect.bottom;

    // 스크롤 다운
    if (scrollTop > lastScrollTop) {
      // solution-header의 title과 content가 header와 겹칠 때 사라지기
      if (isIntersecting) {
        solutionTitle.classList.remove("appear-title");
        solutionContent.classList.remove("appear-content");
        solutionTitle.classList.add("disappear-title");
        solutionContent.classList.add("disappear-content");
      }
    }
    // 스크롤 업
    else {
      // 스크롤을 위로 하면 solution-header의 title과 content 다시 나타나게
      if (!isIntersecting) {
        solutionTitle.classList.remove("disappear-title");
        solutionContent.classList.remove("disappear-content");
        solutionTitle.classList.add("appear-title");
        solutionContent.classList.add("appear-content");
      }
    }

    lastScrollTop = scrollTop; // 현재 스크롤 위치를 저장
  });
});

// solution-box
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const solutionBoxes = document.querySelectorAll(".solution-box"); // 모든 solution-box 요소

  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const headerRect = header.getBoundingClientRect();
    const headerMiddle = headerRect.top + headerRect.height / 2;

    solutionBoxes.forEach((box) => {
      const boxRect = box.getBoundingClientRect();
      const boxMiddle = boxRect.top + boxRect.height / 2;

      // 스크롤 다운 시 solution-box의 중간 지점이 header와 겹칠 때 사라지기
      if (scrollTop > lastScrollTop) {
        if (boxMiddle <= headerMiddle && boxMiddle >= headerRect.top) {
          box.classList.remove("appear-box");
          box.classList.add("disappear-box");
        }
      }
      // 스크롤 업 시 solution-box 다시 나타나게
      else {
        if (boxMiddle > headerMiddle || boxMiddle < headerRect.top) {
          box.classList.remove("disappear-box");
          box.classList.add("appear-box");
        }
      }
    });

    lastScrollTop = scrollTop; // 현재 스크롤 위치를 저장
  });
});

//third-block
//appear
// document.addEventListener("DOMContentLoaded", function () {
//   const thirdBlock = document.querySelector(".third-block");

//   function handleScrollDown() {
//     const blockPosition =
//       thirdBlock.getBoundingClientRect().top + thirdBlock.offsetHeight / 10;
//     const windowHeight = window.innerHeight;

//     // third-block의 1/10 지점이 화면에 나타날 때, 클래스 추가
//     if (blockPosition <= windowHeight) {
//       thirdBlock.classList.add("show-third-block");
//     }
//   }
//   window.addEventListener("scroll", function () {
//     handleScrollDown();
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const thirdBlock = document.querySelector(".third-block");

  function handleScroll() {
    const blockTop = thirdBlock.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    // third-block이 window에 들어오면 나타나게
    if (blockTop <= windowHeight) {
      thirdBlock.classList.add("show-third-block");
    }

    if (blockTop > windowHeight) {
      thirdBlock.classList.remove("show-third-block");
    }
  }

  window.addEventListener("scroll", handleScroll);
});
