import { colors } from './src/presentation/styles/theme/colors'

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        header: ['RobotoBold'],
        label: ['RobotoMedium'],
        body: ['RobotoRegular'],
        RobotoRegular: ['RobotoRegular'],
        RobotoMedium: ['RobotoMedium'],
        RobotoBold: ['RobotoBold'],
      },
      colors,
    },
  },
  plugins: [],
  darkMode: 'class',
}

export default config
