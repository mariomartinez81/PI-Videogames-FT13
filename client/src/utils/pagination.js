export const pagination = (totalGames, page) => {
  const limit = 15;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};

  results.results = totalGames.slice(startIndex, endIndex);
  return results;
  //by name
};
