import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  FormHelperText,
  TextField,
} from "@mui/material";
import { IoSend } from "react-icons/io5";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import s from "./Contact.module.css";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const theme = createTheme({
  status: {
    danger: "#fd0000",
  },
  palette: {
    primary: {
      main: "#2b4f71",
      darker: "#053e85",
    },
    secondary: {
      main: "#16aa36",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    error: {
      main: "#c62828",
    },
  },
});

const validateForm = (input, name, errors, language) => {
  if (name === "name") {
    !input.name
      ? (errors = {
          ...errors,
          name:
            language === "english"
              ? "Please write your name"
              : "Por favor escribe tu nombre",
        })
      : delete errors.name;
  }
  if (name === "email") {
    !input.email
      ? (errors = {
          ...errors,
          email:
            language === "english"
              ? "Please write your email"
              : "Por favor escribe tu email",
        })
      : !/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.email)
      ? (errors = {
          ...errors,
          email:
            language === "english"
              ? "Please write a valid email"
              : "Por favor escribe un email valido",
        })
      : delete errors.email;
  }
  return errors;
};

export default function Contact() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState(false);
  const form = useRef();
  const language = useSelector((state) => state.language);
  const avatar = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449461/Portfolio/avatarOK_wlxgjc.webp';

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validateForm(
        {
          ...input,
          [e.target.name]: e.target.value,
        },
        e.target.name,
        errors,
        language
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setModal(true);
        setTimeout(() => {
          setModal(false);
        }, 3000);
        setInput({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const disabled =
    Object.keys(errors).length > 0 ||
    !input.name ||
    !input.message ||
    !input.email
      ? true
      : false;

  return (
    <div className={s.container}>
      <div className={s.text}>
        <h1>{language === "english" ? "Contact" : "Contacto"}</h1>
        <ThemeProvider theme={theme}>
          <div className={s.containerForm}>
            <form className={s.form} onSubmit={handleSubmit} ref={form}>
              <FormControl>
                <InputLabel htmlFor="name" error={!!errors.name}>
                  {language === "english" ? "Name" : "Nombre"}
                </InputLabel>
                <Input
                  id="name"
                  name="name"
                  error={!!errors.name}
                  aria-describedby="component-name-text"
                  value={input.name}
                  onChange={handleChange}
                />
                <FormHelperText
                  id="component-name-text"
                  className={!errors.name ? s.hide : null}
                >
                  {errors.name || "Nothing"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="email" error={!!errors.email}>
                  Email
                </InputLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  error={!!errors.email}
                  aria-describedby="component-email-text"
                  value={input.email}
                  onChange={handleChange}
                />
                <FormHelperText
                  id="component-email-text"
                  className={!errors.email ? s.hide : null}
                >
                  {errors.email || "Nothing"}
                </FormHelperText>
              </FormControl>
              <TextField
                id="message"
                name="message"
                label={language === "english" ? "Message" : "Mensaje"}
                multiline
                maxRows={3}
                value={input.message}
                onChange={handleChange}
                variant="standard"
                className={s.textArea}
              />

              <Button
                variant="contained"
                endIcon={<IoSend />}
                className={s.btnSend}
                type="submit"
                disabled={disabled}
              >
                {language === "english" ? "Send" : "Enviar"}
              </Button>
            </form>
          </div>
        </ThemeProvider>
        <div className={modal ? s.visible : s.hidden}>
          <div className={s.containerModal}>
            <img src={avatar} alt="Avatar" className={s.avatar} />
            {language === "english" ? (
              <>
                <h1>Thank you</h1>
                <p>I will contact you soon!</p>
              </>
            ) : (
              <>
                <h1>Gracias</h1>
                <p>Pronto me contactare contigo!</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
