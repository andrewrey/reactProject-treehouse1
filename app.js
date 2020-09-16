let peopleArray = [
  {
    name: "Tom",
    score: 35,
    id: 1,
  },
  {
    name: "Mike",
    score: 200,
    id: 2,
  },
  {
    name: "Arron",
    score: 12,
    id: 3,
  },
  {
    name: "May",
    score: 99,
    id: 4,
  },
  {
    name: "Jenny",
    score: 56,
    id: 5,
  },
];

const Header = (props) => {
  let { totalPlayers, title } = props;
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  );
};
const Player = (prop) => {
  let { name } = prop;
  return (
    <div className="player">
      <span className="player-name">{name}</span>
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

const App = (prop) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={prop.initPlayers.length} />
      {/* Players List */}
      {prop.initPlayers.map((person) => (
        <Player name={person.name} key={person.id.toString()} />
      ))}
    </div>
  );
};

ReactDOM.render(<App initPlayers={peopleArray} />, document.getElementById("root"));
