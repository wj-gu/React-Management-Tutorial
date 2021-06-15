import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root : {
    width: '100%',
    marginTop: theme.spacing.unit *3,
    overflowX : "auto"
  },
  table: {
    minWidth : 1080
  }
})

class App extends Component {

  state = { // 변경할 수 있는 변수
    customers: ""  
  }

  componentDidMount(){ // 모든 컴포넌트 준비가 완료되면 호출되는 함수
     this.callApi()
     .then(res => this.setState({customers: res}))
     .catch(err => console.log(err));
     
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render(){
    const {classes} = this.props; // props는 변경할 수 없는 변수
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.state.customers ? this.state.customers.map(c => {
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
              }) : ""
            }
          </TableBody>
        </Table>

      </Paper>
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

export default withStyles(styles)(App);

