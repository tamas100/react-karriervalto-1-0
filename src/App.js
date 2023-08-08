import './App.css';
import HelloMessage from './Components/HelloMessage/HelloMessage';
import TypeMessage from './Components/TypeMessage/TypeMessage';
import ConditionalRender from './Components/ConditionalRender/ConditionalRender';
import HelloReact from './Components/HelloReact/HelloReact';
import TextSection from './Components/TextSection/TextSection';
import TextSectionFunction from './Components/TextSectionFunction/TextSectionFunction';
import AppText from './Components/AppText/AppText';
import UserData from './Components/UserData/UserData';
import Osszeg from './Components/Osszeg/Osszeg';
import FlashCards from './Components/FlashCards/FlashCards';

const record = {
  a: 1,
  b: 2
};

function callback() {

}

function App() {
  return (
    <div className="App">
      <HelloMessage name="Bill" />
      <HelloMessage name="Monica" />
      <HelloMessage name="Donald" />
      <HelloMessage name="Joe" />
      <TypeMessage val="Ez egy szöveg" />
      <TypeMessage val={5} />
      <TypeMessage val={5n} />
      <TypeMessage val={5 > 3} />
      <TypeMessage val={Symbol()} />
      <TypeMessage val={undefined} />
      <TypeMessage val={[1, 2, 3]} />
      <TypeMessage val={{ backgroundColor: "red", color: "black" }} />
      <TypeMessage val={record} />
      <TypeMessage val={callback} />
      <TypeMessage
        val={(e) => {
          e.preventDefault();
        }}
      />
      <ConditionalRender left={5} right={2} />
      <HelloReact name="React" />
      <TextSection title="React" text="Paragraph text." />
      <TextSectionFunction title="Tamás" text="Függvény" />
      <AppText />
      <UserData name="WallStreet Joe" email="troll@revenge-trading.com" />
      <Osszeg x="öt" y="8" />
      <FlashCards />
    </div>
  );
}

export default App;
