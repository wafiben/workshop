import logo from './logo.svg';
import './App.css';

function App() {
const elmentOfJsx=(<h1>hello</h1>)
const name='siwar';
let user={firstName:'siwar',lastName:'belkhir'};
const styleOfElement={color:'red',fontSize:'15px'};
let arrayOfusers=[{id:15,firstName:'siwar',lastName:'belkhir'},
     {id:48,firstName:'wafi',lastName:'benjeddou'},
     {id:49,firstName:'khalil',lastName:'saidi'}]
const boolean=false;
const messageOferror=(<h1>no message to display</h1>)
const newElementOfJsx=boolean ? (<h1>hello </h1>):messageOferror ;
return (
    <div className="App"  /* style={{backgroundColor:'red',fontSize:'100px'}} */
    /* style={styleOfElement} */>
    {elmentOfJsx}
    {name}
    <div style={styleOfElement}>
      this is the first user of my application 
      <p>{user.firstName + ' '+user.lastName}</p>
    </div>
    <div>
      <img /* src={'/Reactjs.png'}  */  src='./ReactJS.png'    alt='anonymos'/>
    </div>
    <div>
      {arrayOfusers.map((user,index)=>(<p key={index}>{ user.firstName}</p>))}
    </div>
    <div>
      {newElementOfJsx}
    </div>
    </div>
  );
}

export default App;
