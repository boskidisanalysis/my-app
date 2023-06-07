import CardList from './components/Cardlist';
import SearchBox from './components/SearchBox';
import './App.css';
import { useState, useEffect } from 'react';

 
const App = () => {

  const [robot, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('')

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setRobots(users)});
    // console.log(count)
  },[]);
  
  const filteredRobots = robot.filter(robot =>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

    return !robot.length ?
    <h1>Loading</h1> :
    (
  <>    
    <div className="App-header">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange}/>
    </div>
    <CardList robots={filteredRobots} />
    
    
  </>

  );
}

export default App;

