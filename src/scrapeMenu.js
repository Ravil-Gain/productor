import { load } from 'cheerio';
import get from 'axios';

export async function scrapeMenu() {
  const url = 'https://amps.ee/bistroo-parnu/';

  const weekdays = [
    'Pühapäev',
    'Esmaspäev',
    'Teisipäev',
    'Kolmapäev',
    'Neljapäev',
    'Reede',
    'Laupäev',
  ];
  try {
    const weekday = new Date().getDay();
    // console.log('weekday', weekdays[weekday]);

    const response = await get(url);
    const $ = load(response.data);
    const query = $(
      'body > div.elementor > div.elementor-element > div > div.elementor-element > div > div > div > div > div > div > div > div.elementor-element'
    )
      .text()
      .trim();
    const dayMenu = query.slice(
      query.search(weekdays[weekday]),
      query.search(weekdays[weekday + 1])
    );
    const menuArray = dayMenu
      .split('\n')
      .filter(
        (item) =>
          item !== '' &&
          item !== ' ' &&
          item.indexOf('\t') &&
          !item.includes(weekdays[weekday]) &&
          !item.includes('elementor') &&
          !item.includes('Suur') &&
          !item.includes('Väike') &&
          !item.includes(',')
      );
    console.log(menuArray);
    return menuArray;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// scrapeMenu();
