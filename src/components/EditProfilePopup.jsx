import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

function handleNameChange(evt) {
  setName(evt.target.value);
}

function handleDescriptionChange(evt) {
  setDescription(evt.target.value);
}

function handleSubmit(evt) {
  evt.preventDefault();

  onUpdateUser({
    name: name,
    about: description,
  });
}

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="profile-edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      submitButtontext="Сохранить"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="userName">
        <input
          id="name"
          className="popup__input popup__input_user-name"
          name="name"
          type="text"
          minLength={2}
          maxLength={40}
          required
          placeholder="Введите имя"
          value={name || ''}
          onChange={handleNameChange}
        />
        <p className="popup__error userName-error" />
      </label>
      <label htmlFor="aboutUser">
        <input
          id="about"
          className="popup__input popup__input_about-user"
          name="about"
          type="text"
          minLength={2}
          maxLength={200}
          required
          placeholder="О себе"
          value={description || ''}
          onChange={handleDescriptionChange}
        />
        <p className="popup__error aboutUser-error" />
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
