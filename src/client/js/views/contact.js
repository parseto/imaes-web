document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const queryInput = document.getElementById("query");
  const agreeCheckbox = document.getElementById("agree");

  if (window.successMessage) {
    openModal(window.successMessage);
  }

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // 폼제출방지
    // 체크를 했는지 확인
    if (!agreeCheckbox.checked) {
      openModal("개인정보 수집 및 이용 동의는 필수입니다.");
    }
    // 모든 필드가 채워졌는지 확인
    else if (
      !nameInput.value.trim() ||
      !emailInput.value.trim() ||
      !queryInput.value.trim()
    ) {
      openModal("모든 항목을 기입해주세요."); // 모달 열기
    } else if (!emailInput.value.includes("@")) {
      openModal("email 형식이 맞지 않습니다.");
    } else if (window.errorMessage) {
      openModal(
        "문의가 정상적으로 전달되지 않았습니다.<br><br>지속적으로 반복시 imaes@i-maes.com으로 별도 연락바랍니다.",
        () => {
          window.location.href = "/contact"; // 모달 닫기 후 contact 페이지로 리다이렉트
        }
      );
    } else {
      openModal(
        "문의가 제출되었습니다.<br><br>답변까지 최대 5영업일이 소요될 수 있습니다.",
        () => {
          form.submit();
        }
      );
    }
  });

  function openModal(message, callback) {
    // 모달 오버레이 생성
    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay", "modal-open");

    // 모달 콘텐츠 생성
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    // 모달 메시지 생성
    const modalMessage = document.createElement("p");
    modalMessage.classList.add("modal-message");
    modalMessage.innerHTML = message;

    // 닫기 버튼 생성
    const closeButton = document.createElement("button");
    closeButton.classList.add("modal-close");
    closeButton.textContent = "닫기";

    // 모달 구성
    modalContent.appendChild(modalMessage);
    modalContent.appendChild(closeButton);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);

    // 닫기 버튼 클릭 시 모달 닫기 및 추가 작업 수행
    closeButton.addEventListener("click", () => {
      closeModal(modalOverlay);
      if (typeof callback === "function") {
        callback(); // 추가 작업 수행
      }
    });
  }

  function closeModal(modalOverlay) {
    document.body.removeChild(modalOverlay); // 모달 제거
  }
});
