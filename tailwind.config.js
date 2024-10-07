/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "340px",
        md: "540px",
        lg: "768px",
        xl: "1180px",
      },
      container: {
        center: true,
        padding: {
          default: "12px",
          md: "32px",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        "black-transparent": "rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "gradiente-celeste":
          "linear-gradient(270deg, #24FFE5 10%, #0057A0 100%)",
      },
      boxShadow: {
        iconos: "0 0 25px #24FFE5",
        botonHover: "0 0 25px #24FFE5, 0 0 50px #24FFE5",
        segundoBoton: "0 0 25px transparent",
        imageHover: "0 0 25px #24FFE5, 0 0 50px #24FFE5, 0 0 100px #24FFE5",
        cardShadow: "0 0 10px #24FFE5",
      },
      colors: {
        main_celeste: "#24FFE5",
        bg_negro: "#101010",
      },
    },
  },
  plugins: [],
};
