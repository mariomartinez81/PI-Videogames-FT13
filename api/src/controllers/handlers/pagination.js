const pagination = (totalGames, page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};

  if (totalGames.length > 15) {
    results.next_page = `http://localhost:3001/videogames?page=${
      page + 1
    }&limit=15`;
  }
  if (page > 1)
    results.previous_page = `http://localhost:3001/videogames?page=${
      page - 1
    }&limit=15`;

  results.results = totalGames.slice(startIndex, endIndex);
  return results;
};

module.exports = pagination;
