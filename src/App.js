import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동1',
  'birthday' : '961222',
  'gender' : '여자',
  'job' : '대학생'
  }, {
    'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동2',
  'birthday' : '961223',
  'gender' : '남자',
  'job' : '대학생'
  }, {
    'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '홍길동3',
  'birthday' : '961224',
  'gender' : '남자',
  'job' : '대학생'
  }
]


class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
      // <Customer
      //   id={customer.id}
      //   image={customer.image}
      //   name={customer.name}
      //   birthday={customer.birthday}
      //   gender={customer.gender}
      //   job={customer.job}
      // />
    ); 
  }
}

export default App;

