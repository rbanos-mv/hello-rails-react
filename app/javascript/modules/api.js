const apiGetGreeting = () => fetch('http://localhost:3000/greetings')
  .then((response) => response.json())
  .then((json) => json.message)
  .catch((error) => {
    throw error;
  });

export default apiGetGreeting;
