import { Greet } from './components/Greet';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Button } from './components/Buttons';
import { Input } from './components/Input';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet fname='Jitendra' messageCount={10} styles={{fontSize: '2rem', color: 'blue'}}/>
      <Status status='success' />
      <Heading>
        <h1>React-Typescript</h1>
      </Heading>
      <Button handleClick={(event, id) => console.log('clicked..', event, id)}/>
      <Input handleChange={(event) => console.log(event.target.value)}/>
    </div>
  );
}

export default App;
