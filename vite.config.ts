// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'




// export default defineConfig({
//   plugins: [react({
    
//     include: ['**/*.js', '**/*.jsx'] 
//   })],
// })

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})