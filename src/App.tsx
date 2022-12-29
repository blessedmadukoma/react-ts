import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Heading title="Hello" />
      <Section title="Sub heading">This is my section</Section>
      <Counter />
    </>
  );
}

export default App;
