export const filteringGamesCreated = (totalGames) => {
  const filterGames = totalGames.filter(
    (games) => games.id.toString().length > 7
  );
  return filterGames;
};
