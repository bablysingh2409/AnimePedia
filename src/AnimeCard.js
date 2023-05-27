import { Component } from 'react';

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    const { name, image } = this.props.animeCard;
    return (
      <div className="anime-card">
        <img src={image} />
        <p>{name}</p>
      </div>
    );
  }
}

export default AnimeCard;