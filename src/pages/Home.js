import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="Characters">
      ${characters.results.map(char => `
        <article class="Character-item">
          <a href="#/${char.id}/">
            <img src="${char.image}" alt="${char.name}" />
            <h2>${char.name}</h2>
          </a>
        </article>
      `).join('')}
    </div>
  `;
  return view;
}

export default Home;
