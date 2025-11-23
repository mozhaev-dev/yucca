<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<template>
  <div class="app">
    <header class="app-header">
      <h1 class="app-title">
        Yucca
      </h1>
      <p class="app-subtitle">
        P2P Video Conferencing
      </p>
    </header>

    <main class="app-main">
      <div class="demo-card">
        <h2>Welcome to Yucca!</h2>
        <p>Minimalist P2P video conferencing platform</p>
        
        <div class="demo-counter">
          <button
            class="demo-button"
            @click="increment"
          >
            Count: {{ count }}
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.app-header {
  padding: 2rem;
  text-align: center;
}

.app-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.app-subtitle {
  font-size: 1.2rem;
  margin: 0.5rem 0 0;
  opacity: 0.9;
}

.app-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
}

.demo-card h2 {
  margin: 0 0 1rem;
  font-size: 1.8rem;
}

.demo-card p {
  margin: 0 0 2rem;
  opacity: 0.9;
}

.demo-counter {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.demo-button {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.demo-button:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.demo-button:active {
  transform: translateY(0);
}
</style>

