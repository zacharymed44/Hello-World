import React from "react";
import styled from 'styled-components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: true,
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView() {
    this.setState({
      page: !this.state.page,
    })
  }

  render() {
    return (
      <Container>
        {this.state.page ? (
          <Button id='Activate' className='main-button' onClick={this.changeView}>Click Here!</Button>
        ) : (
          <div>
          <p>Hello World!</p>
          <Button onClick={this.changeView}>Go Back!</Button>
          </div>
        )}
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50vh;
`;

const Button = styled.button`
  height: 50px;
  width: 125px;
  font-size: 20px;
  border-radius: 10px;



  &:hover {
    background-color: silver;
  }
`;
