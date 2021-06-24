import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import VideoGame from './VideoGame';
import { Provider } from 'react-redux';
import store from '../../store/index';

describe('<VideGame/>', () => {
  let component;
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Router>
          <VideoGame />
        </Router>
      </Provider>
    );
  });
  test('render', () => {
    expect(component.getByTestId('videogames-card')).not.toBeRequired();
  });
});

//   test('render contents', () => {
//     const videogames = {
//       results: [
//         {
//           id: 3498,
//           name: 'Grand Theft Auto V',
//           image:
//             'https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg',
//           genre: [
//             {
//               id: 4,
//               name: 'Action',
//               slug: 'action',
//               games_count: 120403,
//               image_background:
//                 'https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg',
//             },
//             {
//               id: 3,
//               name: 'Adventure',
//               slug: 'adventure',
//               games_count: 88164,
//               image_background:
//                 'https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg',
//             },
//           ],
//           rating: 4.48,
//         },
//         {
//           id: 4200,
//           name: 'Portal 2',
//           image:
//             'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
//           genre: [
//             {
//               id: 2,
//               name: 'Shooter',
//               slug: 'shooter',
//               games_count: 39508,
//               image_background:
//                 'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
//             },
//             {
//               id: 7,
//               name: 'Puzzle',
//               slug: 'puzzle',
//               games_count: 67635,
//               image_background:
//                 'https://media.rawg.io/media/games/39a/39a8aa7798b685f9625e857bc394259d.jpg',
//             },
//           ],
//           rating: 4.62,
//         },
//         {
//           id: 3328,
//           name: 'The Witcher 3: Wild Hunt',
//           image:
//             'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
//           genre: [
//             {
//               id: 4,
//               name: 'Action',
//               slug: 'action',
//               games_count: 120403,
//               image_background:
//                 'https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg',
//             },
//             {
//               id: 3,
//               name: 'Adventure',
//               slug: 'adventure',
//               games_count: 88164,
//               image_background:
//                 'https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg',
//             },
//             {
//               id: 5,
//               name: 'RPG',
//               slug: 'role-playing-games-rpg',
//               games_count: 37010,
//               image_background:
//                 'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
//             },
//           ],
//           rating: 4.67,
//         },
//         {
//           id: 5286,
//           name: 'Tomb Raider (2013)',
//           image:
//             'https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg',
//           genre: [
//             {
//               id: 4,
//               name: 'Action',
//               slug: 'action',
//               games_count: 120403,
//               image_background:
//                 'https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg',
//             },
//             {
//               id: 3,
//               name: 'Adventure',
//               slug: 'adventure',
//               games_count: 88164,
//               image_background:
//                 'https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg',
//             },
//           ],
//           rating: 4.07,
//         },
//         {
//           id: 5679,
//           name: 'The Elder Scrolls V: Skyrim',
//           image:
//             'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
//           genre: [
//             {
//               id: 4,
//               name: 'Action',
//               slug: 'action',
//               games_count: 120403,
//               image_background:
//                 'https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg',
//             },
//             {
//               id: 5,
//               name: 'RPG',
//               slug: 'role-playing-games-rpg',
//               games_count: 37010,
//               image_background:
//                 'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
//             },
//           ],
//           rating: 4.42,
//         },
//       ],
//     };
//     const page = 1;
//     const component = render(<VideoGame data={videogames} page={page} />);
//     console.log(component);
//   });
