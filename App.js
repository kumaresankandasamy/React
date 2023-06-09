function App() {
  function handleChangeName(){
      const names = ['cricket','football','basketball'];
      const int = Math.floor(Math.random()*3);
      return names[int];
    }

  return (
    <div>
      <p>React World!</p>
      <p>Let's play the {handleChangeName()} game</p>
    </div>
  );
}
export default App;
