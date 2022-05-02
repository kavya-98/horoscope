import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Loader from './Loader';
import './App.css';
import validator from 'validator';
// import {Link, useNavigate} from 'react-router-dom';
//import { Link } from "react-router-dom";

function App() {
  const [sign, setSign] = useState('');
  const [read, setRead] = useState();
  const [day, setDay] = useState();
  const [showCard, setShowCard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
 // const navigate = useNavigate();
  const signs = [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisces',
  ];
  const days = ['yesterday', 'today', 'tommorow'];

  const getRead = (sign='leo',day='today') => {
    
    axios.post(`https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`)
      .then((response) => {
        console.clear();
        console.log(response.data);
        setRead(response.data);
        setLoading(false)
      });
  };
  const handleSelect = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSign(e.target.value);
  //  getRead(e.target.value);
    
  };
  const handleclick=(e)=>{
    if(name==''||sign===''||day==''||email==""){
      alert("All fields are required");
    }
    else if(!validator.isEmail(email)){
      alert('Enter valid Email!')
    }
    else{
      e.preventDefault();
    setShowCard(true);
    getRead(sign,day);
    setLoading(true);
    // navigate('/card',{state:{...read},name:{name},sign:{sign}});
    }
    
  }
  return (
    <div className="App">
    <div className='container'>
    <h1>Daily Horoscope</h1>
    <form>
    
      
        <label>User Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)}></input>
      
      
        <label>select sign</label>
        <select onChange={handleSelect} name="signs">
        <option value="" disabled selected>
            select sign
          </option>
          {signs.map((sign) => (
            <option value={sign} key={signs.indexOf(sign)}>
              {sign}
            </option>
          ))}
        </select>
      
      
        <label>select day</label>
        <select onChange={(e) => setDay(e.target.value)} name="days">
        <option value="" disabled selected>
            select day
          </option>
          {days.map((i) => (
            <option value={i} key={days.indexOf(i)}>
              {i}
            </option>
          ))}
        </select>
      
        <label>Email-id</label>
        <input type="email"  onChange={(e)=>setEmail(e.target.value)}></input>
     
      </form>
      <br></br>
      <button onClick={handleclick}>submit</button>
      </div>
      <br></br>
      <div className='card-box'>
        {loading ? <Loader /> : (showCard ? <Card {...read} sign={sign} name={name}/> : null)}
        
      </div>
    </div>
  );
}

export default App;
