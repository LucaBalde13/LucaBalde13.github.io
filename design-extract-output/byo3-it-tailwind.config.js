/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(202, 100%, 97%)',
            '100': 'hsl(202, 100%, 94%)',
            '200': 'hsl(202, 100%, 86%)',
            '300': 'hsl(202, 100%, 76%)',
            '400': 'hsl(202, 100%, 64%)',
            '500': 'hsl(202, 100%, 50%)',
            '600': 'hsl(202, 100%, 40%)',
            '700': 'hsl(202, 100%, 32%)',
            '800': 'hsl(202, 100%, 24%)',
            '900': 'hsl(202, 100%, 16%)',
            '950': 'hsl(202, 100%, 10%)',
            DEFAULT: '#00588a'
        },
        secondary: {
            '50': 'hsl(39, 80%, 97%)',
            '100': 'hsl(39, 80%, 94%)',
            '200': 'hsl(39, 80%, 86%)',
            '300': 'hsl(39, 80%, 76%)',
            '400': 'hsl(39, 80%, 64%)',
            '500': 'hsl(39, 80%, 50%)',
            '600': 'hsl(39, 80%, 40%)',
            '700': 'hsl(39, 80%, 32%)',
            '800': 'hsl(39, 80%, 24%)',
            '900': 'hsl(39, 80%, 16%)',
            '950': 'hsl(39, 80%, 10%)',
            DEFAULT: '#e8a732'
        },
        accent: {
            '50': 'hsl(5, 62%, 97%)',
            '100': 'hsl(5, 62%, 94%)',
            '200': 'hsl(5, 62%, 86%)',
            '300': 'hsl(5, 62%, 76%)',
            '400': 'hsl(5, 62%, 64%)',
            '500': 'hsl(5, 62%, 50%)',
            '600': 'hsl(5, 62%, 40%)',
            '700': 'hsl(5, 62%, 32%)',
            '800': 'hsl(5, 62%, 24%)',
            '900': 'hsl(5, 62%, 16%)',
            '950': 'hsl(5, 62%, 10%)',
            DEFAULT: '#d65e53'
        },
        'neutral-50': '#212121',
        'neutral-100': '#000000',
        'neutral-200': '#33373d',
        'neutral-300': '#ffffff',
        'neutral-400': '#69727d',
        'neutral-500': '#7a7a7a',
        'neutral-600': '#f5f5f5',
        'neutral-700': '#2d2d2d',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            '-apple-system',
            'sans-serif'
        ],
        heading: [
            'Roboto',
            'sans-serif'
        ],
        body: [
            'Poppins',
            'sans-serif'
        ]
    },
    fontSize: {
        '0': [
            '0px',
            {
                lineHeight: '0px'
            }
        ],
        '1': [
            '1px',
            {
                lineHeight: '1.5px'
            }
        ],
        '12': [
            '12px',
            {
                lineHeight: '12px'
            }
        ],
        '13': [
            '13px',
            {
                lineHeight: '19.5px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '14px'
            }
        ],
        '15': [
            '15px',
            {
                lineHeight: '15px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '18.4px'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '25.2px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '20px'
            }
        ],
        '22': [
            '22px',
            {
                lineHeight: '33px'
            }
        ],
        '25': [
            '25px',
            {
                lineHeight: '25px'
            }
        ],
        '30': [
            '30px',
            {
                lineHeight: '30px'
            }
        ],
        '35': [
            '35px',
            {
                lineHeight: '35px'
            }
        ],
        '36': [
            '36px',
            {
                lineHeight: '54px'
            }
        ],
        '40': [
            '40px',
            {
                lineHeight: '40px'
            }
        ]
    },
    spacing: {
        '1': '2px',
        '10': '20px',
        '12': '24px',
        '15': '30px',
        '20': '40px',
        '25': '50px',
        '28': '56px',
        '30': '60px',
        '40': '80px',
        '72': '144px',
        '75': '150px',
        '241px': '241px'
    },
    borderRadius: {
        sm: '3px',
        full: '100px'
    },
    screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1025px',
        '1200px': '1200px',
        '1367px': '1367px',
        '2400px': '2400px'
    },
    transitionDuration: {
        '250': '0.25s',
        '300': '0.3s',
        '400': '0.4s',
        '6000': '6s',
        '20000': '20s'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '100%'
    }
},
  },
};
