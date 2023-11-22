import { useEffect, useCallback } from "react";

function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  submitButtontext = "Сохранить",
  children,
  onSubmit
}) {
  //пишешь функцию для установки слушателя на esc вызывающий onClose

  const handleEscKeydown = useCallback((event) => {
    if (event.key === "Escape") {
      onClose();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscKeydown); //x123
    } else {
      document.removeEventListener("keydown", handleEscKeydown); //x123
    }

  }, [isOpen]);

  return (
    <div
      className={`popup popup__type_${name} ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <form
          action="#"
          name={name}
          onSubmit={onSubmit}
          className={`popup__form popup__form_${name}`}
        >
          {children}
          <button className="popup__save-button" type="submit">
            {submitButtontext}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
