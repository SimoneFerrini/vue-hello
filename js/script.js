const { createApp } = Vue

createApp({
    data() {
      return {
        title: 'Hello Vue!',
        image: 'img/img01.png'
      }
    }
}).mount('#app')