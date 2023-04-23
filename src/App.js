// import './App.css';
// import List from './List'

// function App() {
//   return (
//     <div className="App">
//       <List/>
//     </div>
//   );
// }

// export default App;
import './App.css';
import List from './List'

function App() {
  const items = [
    { text: 'IPHONE 14 PRO' },
    { text: 'IPHONE 13 PRO' },
    { text: 'IPHONE 12 PRO' },
    { text: 'IPHONE 11 PRO' },
    { text: 'IPHONE  xS' },
  ];

  return (
    <div className="App">
      <List items={items} />
    </div>
  );
}

export default App;
