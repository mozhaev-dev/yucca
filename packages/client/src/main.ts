import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// Test import from @yucca/shared workspace package
import { generateRoomId } from '@yucca/shared'

const app = createApp(App)

app.mount('#app')

// Test that shared package imports work correctly
console.log('Yucca Client Started')
console.log('Test Room ID:', generateRoomId())
