/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "on-tertiary-container": "#7a46b8",
              "inverse-surface": "#e5e2e1",
              "on-background": "#e5e2e1",
              "on-primary-fixed-variant": "#004f53",
              "on-surface-variant": "#b9caca",
              "surface-bright": "#393939",
              "secondary": "#b0c6ff",
              "secondary-container": "#0068ed",
              "on-tertiary-fixed-variant": "#5e289b",
              "on-error": "#690005",
              "secondary-fixed": "#d9e2ff",
              "inverse-on-surface": "#313030",
              "tertiary-fixed": "#eedbff",
              "inverse-primary": "#00696e",
              "primary": "#e9feff",
              "error-container": "#93000a",
              "surface-container-low": "#1c1b1b",
              "error": "#ffb4ab",
              "on-secondary-fixed-variant": "#00429b",
              "on-surface": "#e5e2e1",
              "surface-container-high": "#2a2a2a",
              "surface": "#131313",
              "surface-container": "#201f1f",
              "surface-container-lowest": "#0e0e0e",
              "secondary-fixed-dim": "#b0c6ff",
              "surface-dim": "#131313",
              "surface-container-highest": "#353534",
              "primary-fixed-dim": "#00dce5",
              "tertiary-fixed-dim": "#dab9ff",
              "on-secondary-fixed": "#001945",
              "surface-variant": "#353534",
              "on-secondary-container": "#f2f3ff",
              "on-primary-container": "#006c71",
              "on-tertiary": "#460283",
              "primary-fixed": "#63f7ff",
              "tertiary": "#fff7ff",
              "on-error-container": "#ffdad6",
              "on-primary": "#003739",
              "surface-tint": "#00dce5",
              "on-secondary": "#002d6e",
              "primary-container": "#00f5ff",
              "tertiary-container": "#ead5ff",
              "on-primary-fixed": "#002021",
              "background": "#131313",
              "outline-variant": "#3a494a",
              "on-tertiary-fixed": "#2a0053",
              "outline": "#849495"
      },
      "borderRadius": {
              "DEFAULT": "0px",
              "lg": "0px",
              "xl": "0px",
              "full": "0px"
      },
      "spacing": {},
      "fontFamily": {
              "headline": [
                      "Inter"
              ],
              "body": [
                      "Inter"
              ],
              "label": [
                      "Space Grotesk"
              ]
      }
    },
  },
  plugins: [],
}
