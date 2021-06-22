export const filteringALphabetic = (totalGames, order) => {
  if (order === 'A-Z') {
    let ordering = totalGames.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase()
        ? 1
        : a.name.toLowerCase() < b.name.toLowerCase()
        ? -1
        : 0
    );
    return ordering;
  } else if (order === 'Z-A') {
    let ordering = totalGames.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase()
        ? -1
        : a.name.toLowerCase() < b.name.toLowerCase()
        ? 1
        : 0
    );
    return ordering;
  }
};
