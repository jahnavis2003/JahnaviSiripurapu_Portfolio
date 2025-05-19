// tailwind.config.js
// export const content = [
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./public/index.html",
// ];
// export const theme = {};
// export const plugins = [];
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    theme: {
      screens: {
        xs: "480px", // Custom "xs" breakpoint for small phones
        sm: "640px",
        md: "768px",
        mdl: "880px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
    plugins: [
      require('tailwind-scrollbar'),
    ],
    
  };