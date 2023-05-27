import { Component } from 'react';
import AnimeCard from './AnimeCard';

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const { anime } = this.props;
    return (
      <div className="anime-list">
        {anime.map((ele, i) => (
          <AnimeCard animeCard={ele} key={i} />
        ))}
      </div>
    );
  }
}

export default AnimeList;
