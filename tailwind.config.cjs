/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', 'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],

  // enable dark mode via class strategy
  // darkMode: 'class',

  plugins: [require('daisyui'), require('@tailwindcss/typography')],

  // daisyUI config (optional)
  daisyui: {
    // themes: true,
    themes: [
      {
        'mathster': {
          primary: '#f04c4c',
          'primary-focus': '#d1a666',
          'primary-content': '#ffffff',

          secondary: '#b365e6',
          'secondary-focus': '#a451db',
          'secondary-content': '#ffffff',

          accent: '#37cdbe',
          'accent-focus': '#2ba69a',
          'accent-content': '#ffffff',

          neutral: '#3b424e',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',

          'base-100': '#ffffff',
          'base-200': '#191919',
          'base-300': '#ced3d9',
          'base-content': '#000000',
          tertiary: '#92675D',

          info: '#1c92f2',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',

          '--rounded-box': '1rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '0.5rem',
          '--border-btn': '1px'
        }
      }

    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark'
  }
}
