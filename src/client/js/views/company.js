document.querySelector(".scroll-down-btn").addEventListener("click", () => {
  const targetElement = document.querySelector(
    ".company-container:first-child"
  );

  // 요소의 위치를 계산
  const rect = targetElement.getBoundingClientRect();
  const scrollTop = window.scrollY;

  // 목표 위치를 계산하고 오프셋을 추가
  const targetPosition = rect.top + scrollTop - 100; // 50px 아래로 미세 조정

  // 지정된 위치로 스크롤
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});
