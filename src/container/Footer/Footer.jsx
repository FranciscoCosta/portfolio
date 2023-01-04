import React, { useState, useRef } from 'react';

import { images } from '../../constants';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWraper';
import emailjs from '@emailjs/browser';

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

    emailjs.sendForm('service_n6luvfo', 'template_zs3kj24', form.current, '89L3K0FyuSge3OC8B')
      .then((result) => {
          console.log(result.text);
          setLoading(false);
      }, (error) => {
          console.log(error.text);
          setLoading(false);
      });
  };

  return (
    <>
      <h2 className="head-text">Pode me contatar</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:francisco100eg@gmail.com" className="p-text">francisco100eg@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+55(31)99158-3328" className="p-text">+55(31)99158-3328</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex"ref={form} onSubmit={handleSubmit}>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Nome:" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Email :" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Sua Mensagem"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="p-text">{!loading ? 'Enviar' : 'Enviando...'}</button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Obrigado por entar em contacto!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'Contacto',
  'app__primarybg',
);