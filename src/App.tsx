import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Heading title="Hello" />
      <Section title="Sub heading">This is my section</Section>
      <Counter />
      <List
        items={["Coffie", "Tacos", "Sugar"]}
        render={(item: string) => <span className="bold gold">{item}</span>}
      />
    </>
  );
}

export default App;
