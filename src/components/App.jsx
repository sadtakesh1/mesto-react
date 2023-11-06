import React, { useState } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import ImagePopup from "./ImagePopup.jsx";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function onEditAvatar() {
    setEditAvatarPopupOpen(true);
  }

  function onEditProfile() {
    setEditProfilePopupOpen(true);
  }

  function onAddPlace() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopup() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onAddPlace={onAddPlace}
          onEditProfile={onEditProfile}
          onEditAvatar={onEditAvatar}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="profile-edit"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          submitButtontext="Сохранить"
          onClose={closeAllPopup}
        >
          <label htmlFor="userName">
            <input
              id="userName"
              className="popup__input popup__input_user-name"
              name="userName"
              type="text"
              minLength={2}
              maxLength={40}
              required=""
              placeholder="Введите имя"
            />
            <p className="popup__error userName-error" />
          </label>
          <label htmlFor="aboutUser">
            <input
              id="aboutUser"
              className="popup__input popup__input_about-user"
              name="aboutUser"
              type="text"
              minLength={2}
              maxLength={200}
              required=""
              placeholder="О себе"
            />
            <p className="popup__error aboutUser-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="add-card"
          title="Добавить карточку"
          isOpen={isAddPlacePopupOpen}
          submitButtontext="Создать"
          onClose={closeAllPopup}
        >
          <label htmlFor="userName">
            <input
              id="userName"
              className="popup__input popup__input_user-name"
              name="userName"
              type="text"
              minLength={2}
              maxLength={40}
              required=""
              placeholder="Введите имя"
            />
            <p className="popup__error userName-error" />
          </label>
          <label htmlFor="aboutUser">
            <input
              id="aboutUser"
              className="popup__input popup__input_about-user"
              name="aboutUser"
              type="text"
              minLength={2}
              maxLength={200}
              required=""
              placeholder="О себе"
            />
            <p className="popup__error aboutUser-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopup}
        >
          <label htmlFor="placeAvatar">
            <input
              id="placeAvatar"
              className="popup__input"
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              required=""
            />
            <p className="popup__error placeAvatar-error" />
          </label>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopup} />
        {/* <div className="popup popup_type_profile-edit">
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <button className="popup__close-button" type="button" />
            <form className="popup__form" name="editProfile" noValidate="">

              <button className="popup__save-button" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_add-card">
          <div className="popup__container">
            <h2 className="popup__title">Новое место</h2>
            <button className="popup__close-button" type="button" />
            <form className="popup__form" name="addCard" noValidate="">
              <label htmlFor="placeName">
                <input
                  id="placeName"
                  className="popup__input popup__input_place_name"
                  name="name"
                  type="text"
                  placeholder="Название"
                  required=""
                  minLength={2}
                  maxLength={30}
                />
                <p className="popup__error placeName-error" />
              </label>
              <label htmlFor="placeLink">
                <input
                  id="placeLink"
                  className="popup__input popup__input_place_image"
                  name="link"
                  type="url"
                  placeholder="Ссылка на картинку"
                  required=""
                />
                <p className="popup__error placeLink-error" />
              </label>
              <button
                className="popup__save-button popup__save-button_add"
                type="submit"
              >
                Создать
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_edit-avatar">
          <div className="popup__container">
            <button className="popup__close-button" type="button" />
            <h2 className="popup__title">Обновить аватар</h2>
            <form
              className="popup__form popup__form_edit-avatar"
              action="#"
              name="editAvatar"
              noValidate=""
            >
              <label htmlFor="placeAvatar">
                <input
                  id="placeAvatar"
                  className="popup__input"
                  name="link"
                  type="url"
                  placeholder="Ссылка на картинку"
                  required=""
                />
                <p className="popup__error placeAvatar-error" />
              </label>
              <button className="popup__save-button" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_delete-card">
          <div className="popup__container">
            <button className="popup__close-button" type="button" />
            <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
            <form
              className="popup__form popup__form_delete"
              action="#"
              name="deleteCard"
            >
              <button className="popup__save-button popup__save-form" type="submit">
                Да
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_full-image">
          <div className="popup__container">
            <button className="popup__close-button" type="button" />
            <img className="popup__image" src="#" alt="#" />
            <h2 className="popup__title popup__title_image" />
          </div>
        </div> */}
        <template className="card-template" />
      </div>
    </>
  );
}

export default App;
