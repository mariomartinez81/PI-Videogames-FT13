export const filteringGenre = (totalGames, genre) => {
  let matchGenre = totalGames
    .map((game) => {
      let array = [];
      if (game.genre) {
        for (let item of game.genre) {
          if (item.name === genre) array.push(game);
        }
      } else {
        for (let item of game.Genres) {
          if (item.name === genre) array.push(game);
        }
      }
      return array;
    })
    .filter((ele) => ele.length > 0)
    .flat(Infinity);
  return matchGenre;
};
