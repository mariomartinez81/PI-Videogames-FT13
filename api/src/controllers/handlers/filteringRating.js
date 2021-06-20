const filterinRating = (totalGames, rating) => {
  if (rating === 'rating-highest') {
    let ordering = totalGames.sort((a, b) =>
      a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0
    );
    return ordering;
  } else if (rating === 'rating-lowest') {
    let ordering = totalGames.sort((a, b) =>
      a.rating > b.rating ? 1 : a.rating < b.rating ? -1 : 0
    );
    return ordering;
  }
};

module.exports = filterinRating;
