const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const getProphetData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.table(data); // Check the data in the console
      displayProphets(data.prophets);
    } catch (error) {
      console.error(error);
    }
  };
  
  getProphetData();

  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      
      const card = document.createElement('section');
      
      
      const fullName = document.createElement('h2');
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      
      
      const portrait = document.createElement('img');
      portrait.src = prophet.imageurl;
      portrait.alt = `${prophet.name} ${prophet.lastname}`;
      portrait.loading = 'lazy';
      portrait.width = 200; 
      portrait.height = 300;
      
      
      card.appendChild(fullName);
      card.appendChild(portrait);
      
      
      cards.appendChild(card);
    });
  };