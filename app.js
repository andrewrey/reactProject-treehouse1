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
  let { name, score } = prop;
  return (
    <div className="player">
      <span className="player-name">{name}</span>
      <Counter score={score} />
    </div>
  );
};

const Counter = (props) => {
  let { score } = props;
  return (
    <div className="counter">
      <button className="counter-action decrement">-</button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment">+</button>
    </div>
  );
};

const App = (prop) => {
  console.log(prop);
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={prop.initPlayers.length} />
      {/* Players List */}
      {prop.initPlayers.map((person) => (
        <Player name={person.name} score={person.score} key={person.id.toString()} />
      ))}
    </div>
  );
};

ReactDOM.render(<App initPlayers={peopleArray} />, document.getElementById("root"));
