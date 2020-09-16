const Header = (props) => {
  let { totalPlayers, title } = props;
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  );
};
const Player = ({ name, id, removePlayer }) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>
          ✖
        </button>
        {name}
      </span>
      <Counter />
    </div>
  );
};

class Counter extends React.Component {
  state = {
    score: 0,
  };
  incrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };
  decrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score - 1,
    }));
  };
  render() {
    let { score } = this.state;
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}>
          -
        </button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}>
          +
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      {
        name: "Tom",
        id: 1,
      },
      {
        name: "Mike",
        id: 2,
      },
      {
        name: "Arron",
        id: 3,
      },
      {
        name: "May",
        id: 4,
      },
      {
        name: "Jenny",
        id: 5,
      },
    ],
  };
  handleRemovePlayer = (id) => {
    this.setState((prevState) => ({
      players: prevState.players.filter((player) => player.id !== id),
    }));
  };
  render() {
    let { players } = this.state;
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={players.length} />
        {/* Players List */}
        {players.map((person) => (
          <Player name={person.name} key={person.id.toString()} removePlayer={this.handleRemovePlayer} id={person.id} />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
