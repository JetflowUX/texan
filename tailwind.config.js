
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#010d67',
          container: '#1e297b',
          light: '#343f90',
          dark: '#000b52',
          fixed: '#dfe0ff',
          'fixed-dim': '#bcc2ff',
        },
        secondary: {
          DEFAULT: '#bb0024',
          container: '#e31f35',
          light: '#ff4d6a',
          dark: '#93001a',
          fixed: '#ffdad8',
          'fixed-dim': '#ffb3b0',
        },
        surface: {
          DEFAULT: '#f7f9fb',
          dim: '#d8dadc',
          bright: '#f7f9fb',
          'container-lowest': '#ffffff',
          'container-low': '#f2f4f6',
          container: '#eceef0',
          'container-high': '#e6e8ea',
          'container-highest': '#e0e3e5',
        },
        'on-surface': {
          DEFAULT: '#191c1e',
          variant: '#454651',
        },
        outline: {
          DEFAULT: '#767682',
          variant: '#c6c5d3',
        },
        tertiary: {
          DEFAULT: '#1e1e1e',
          container: '#333333',
        },
        text: {
          DEFAULT: '#191c1e',
          light: '#454651',
        },
        neutral: {
          DEFAULT: '#f2f4f6',
          dark: '#d8dadc',
        },
        chip: '#eff6ff',
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      boxShadow: {
        'card': '0px 2px 12px rgba(30, 41, 123, 0.06)',
        'card-hover': '0px 4px 20px rgba(30, 41, 123, 0.08)',
        'overlay': '0px 8px 32px rgba(30, 41, 123, 0.12)',
        'level-1': '0px 1px 8px rgba(30, 41, 123, 0.05)',
        'level-2': '0px 4px 20px rgba(30, 41, 123, 0.08)',
        'level-3': '0px 8px 32px rgba(30, 41, 123, 0.12)',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
}
