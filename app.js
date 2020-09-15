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

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={2} />
      {/* Players List */}
      <Player name="Mack" score={15} />
      <Player name="Tom" score={5} />
      <Player name="Ryan" score={30} />
      <Player name="Sam" score={11} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
