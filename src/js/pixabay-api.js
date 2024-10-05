import axios from 'axios';

export const PER_PAGE = 15;
const API_KEY = VITE_API_KEY;
const BASE_URL = 'https://pixabay.com/api/?';
const QUERY_KEY = 'q';
const PAGE_KEY = 'page';

const searchParams = new URLSearchParams({
  key: API_KEY,
  orientation: 'horizontal',
  image_type: 'photo',
  safesearch: true,
  per_page: PER_PAGE,
});

export async function fetchImages(query, page = 1) {
  searchParams.set(QUERY_KEY, query);
  searchParams.set(PAGE_KEY, page);

  const url = BASE_URL + searchParams.toString();
  const response = await axios.get(url);
  return response.data;
}

//query may not exceed 100 characters
export function prepareQuery(query) {
  const words = query.split(/\s+/);
  let refactoredQuery = '';
  for (const word of words) {
    if ((refactoredQuery + '+' + word).length > 100) break;
    refactoredQuery += (refactoredQuery ? '+' : '') + word;
  }
  return refactoredQuery.toLowerCase();
}
