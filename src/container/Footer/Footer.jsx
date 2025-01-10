import React, { useState, useRef } from 'react';
import { images } from '../../constants';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWraper';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../context/LanguageContext';
import { toast } from 'react-toastify';



import './Footer.scss';

const Footer = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs.sendForm('service_3neecfd', 'template_zs3kj24', form.current, '89L3K0FyuSge3OC8B')
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          window.scrollTo(0, 0);
          toast.success(translations[language].thankYou);
      }, (error) => {
          console.error('Email sending error:', error);
          setLoading(false);
      });
  };

  const { language } = useLanguage();

  const translations = {
    en: {
      title: "You can contact me",
      email: "francisco100eg@gmail.com",
      phone: "+55(31)99158-3328",
      namePlaceholder: "Name:",
      emailPlaceholder: "Email:",
      messagePlaceholder: "Your Message",
      submitButton: "Send",
      thankYou: "Thank you for getting in touch!"
    },
    pt: {
      title: "Pode me contatar",
      email: "francisco100eg@gmail.com",
      phone: "+55(31)99158-3328",
      namePlaceholder: "Nome:",
      emailPlaceholder: "Email:",
      messagePlaceholder: "Sua Mensagem",
      submitButton: "Enviar",
      thankYou: "Obrigado por entrar em contato!"
    }
  };

  return (
    <>
      <h2 className="head-text" id={language === 'pt' ? 'Contato' : 'Contact'}>
        {translations[language].title}
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href={`mailto:${translations[language].email}`} className="p-text">{translations[language].email}</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href={`tel:${translations[language].phone}`} className="p-text">{translations[language].phone}</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" ref={form} onSubmit={handleSubmit}>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder={translations[language].namePlaceholder} name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder={translations[language].emailPlaceholder} name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder={translations[language].messagePlaceholder}
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="p-text">{!loading ? translations[language].submitButton : 'Sending...'}</button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            {translations[language].thankYou}
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contato',
  'app__primarybg',
);