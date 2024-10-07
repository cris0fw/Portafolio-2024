import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "60px",
      duration: 600,
      delay: 300,
      reset: true,
    });

    sr.reveal(".contact__title");
    sr.reveal(".contact__form", { delay: 300 });
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_d4ovn8v",
          "template_jx7prvs",
          form.current,
          "KKjF-Q74HBdMbBVdY"
        )
        .then(
          () => {
            toast.success("¡Mensaje enviado exitosamente!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            if (form.current) form.current.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.log("Formulario no encontrado");
    }
  };

  return (
    <section id="contacto" className="w-full bg-[#101010] py-8">
      <ToastContainer />
      <div className="flex flex-col items-center justify-center mx-auto max-w-[600px] px-4">
        <h1 className="contact__title text-[35px] mt-5 font-bold text-center">
          Cont
          <span className="bg-gradient-to-r from-[#24ffe5] to-[#0057a0] bg-clip-text text-transparent">
            acto
          </span>
        </h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full gap-4 mt-6 contact__form"
        >
          <div className="flex flex-col w-full gap-4 md:flex-row">
            <input
              className="flex-1 p-3 border-2 border-[#24ffe5] rounded-md bg-[#111111] text-white"
              placeholder="Nombre completo"
              type="text"
              name="name"
              id="from_name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="flex-1 p-3 border-2 border-[#24ffe5] rounded-md bg-[#111111] text-white"
            />
          </div>

          <textarea
            cols={30}
            rows={6}
            name="message"
            placeholder="Tu mensaje"
            className="w-full p-3 border-2 border-[#24ffe5] rounded-md bg-[#111111] text-white"
          ></textarea>

          <button
            type="submit"
            className="w-full p-3 font-semibold text-[20px] bg-gradient-to-r from-[#24ffe5] to-[#0057a0] text-[#000000] rounded-md cursor-pointer hover:shadow-botonHover transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
