import "./App.css";
import  Expenses from './components/Expenses';

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Toilet Paper", amount: 20.57, date: new Date(2021, 2, 28) },
    { title: "Rent", amount: 500.43, date: new Date(2021, 2, 28) },
    { title: "Bills", amount: 700.67, date: new Date(2021, 2, 28) },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
