const pagination = (totalGames, page, limit, genre, order, rating) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};

  if (genre) {
    if (totalGames.length > 15) {
      results.next_page = `http://localhost:3001/videogames?genre=${genre}&page=${
        page + 1
      }&limit=15`;
    }
    if (page > 1)
      results.previous_page = `http://localhost:3001/videogames?genre=${genre}&page=${
        page - 1
      }&limit=15`;
    results.results = totalGames.slice(startIndex, endIndex);
    return results;
  } else if (order) {
    if (totalGames.length > 15) {
      results.next_page = `http://localhost:3001/videogames?order=${order}&page=${
        page + 1
      }&limit=15`;
    }
    if (page > 1)
      results.previous_page = `http://localhost:3001/videogames?order=${order}&page=${
        page - 1
      }&limit=15`;
    results.results = totalGames.slice(startIndex, endIndex);
    return results;
  } else if (rating) {
    if (totalGames.length > 15) {
      results.next_page = `http://localhost:3001/videogames?rating=${rating}&page=${
        page + 1
      }&limit=15`;
    }
    if (page > 1)
      results.previous_page = `http://localhost:3001/videogames?rating=${rating}&page=${
        page - 1
      }&limit=15`;
    results.results = totalGames.slice(startIndex, endIndex);
    return results;
  } else {
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
  }
};

module.exports = pagination;
