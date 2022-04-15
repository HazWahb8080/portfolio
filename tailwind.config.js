module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
       Marc: ["Marcellus", "serif"],
       Solata:['Inconsolata', "monospace"],
       Forum:['Forum', "cursive"],
       Hind:['Hind', "sans-serif"],
       Moret:["Moret"],
       Popp:['Poppins', 'sans-serif'],
       
      },
      backgroundImage: {
        'giphy': "url('../utils/giphy.gif')",
        'giphy1': "url('../utils/giphy1.gif')",
        'giphy2': "url('../utils/giphy2.gif')",
        'giphy3': "url('../utils/giphy3.gif')",
        'giphy4': "url('../utils/giphy4.gif')",
        'giphy5': "url('../utils/giphy5.gif')",
        'giphy6': "url('../utils/giphy6.gif')",
        'giphy7': "url('../utils/giphy7.gif')",
        'giphy8': "url('../utils/giphy8.gif')",
        'giphy9': "url('../utils/giphy9.gif')",
        'giphy10':"url('../utils/giphy10.gif')",
        'giphy11':"url('../utils/giphy11.gif')",
        'giphy12':"url('../utils/giphy12.gif')",
        'giphy13':"url('../utils/giphy13.gif')",
      },
    },
  },
  plugins: [],
}