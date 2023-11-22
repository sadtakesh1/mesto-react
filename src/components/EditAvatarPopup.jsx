import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef("");

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="placeAvatar">
        <input
          id="placeAvatar"
          className="popup__input"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required=""
          ref={avatarRef}
        />
        <p className="popup__error placeAvatar-error" />
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
