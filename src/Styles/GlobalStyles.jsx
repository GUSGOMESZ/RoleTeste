import { createGlobalStyles } from "styled-components";

const GlobalStyles = createGlobalStyles`:root{

    &, *.light-mode {
        --color-grey-0: #fff;
        --color-grey-50: #f9fafb;
        --color-grey-100: #f3f4f6;
        --color-grey-200: #e5e7eb;
        --color-grey-300: #d1d5db;
        --color-grey-400: #9ca3af;
        --color-grey-500: #6b7280;
        --color-grey-600: #4b5563;
        --color-grey-700: #374151;
        --color-grey-800: #1f2937;
        --color-grey-900: #111827;

        --color-blue-100: #e0f2fe;
        --color-blue-700: #0369a1;
        --color-green-100: #dcfce7;
        --color-green-700: #15803d;
        --color-yellow-100: #fef9c3;
        --color-orange-100: #ffb16c;
        --color-yellow-500: #dda556;
        --color-yellow-700: #a16207;
        --color-silver-100: #e5e7eb;
        --color-silver-700: #374151;
        --color-indigo-100: #e0e7ff;
        --color-indigo-700: #4338ca;

        --color-pink-100: #fa9feb;
        --color-red-100: #fee2e2;
        --color-red-700: #b91c1c;
        --color-red-800: #991b1b;
    
        --backdrop-color: rgba(255, 255, 255, 0.1);
    
        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
        --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

        --image-grayscale: 0;
        --image-opacity: 100%;
    }
}`;

export default GlobalStyles;
