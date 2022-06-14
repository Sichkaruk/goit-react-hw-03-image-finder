import React, { Component } from "react";
import {
  Container,
  Title,
  Logo,
  Button,
  SubTitle,
  List,
  ListItem,
  Link,
} from "./App.styled";
import logo from "./img/logo3.png";

class App extends Component {
  render() {
    return (
      <Container>
        <Title>
          <Logo src={logo} alt="logo" width="50px" />
          Image Finder
        </Title>
        <SubTitle>Template list</SubTitle>
        <List>
          <ListItem>Example list item</ListItem>
          <ListItem>Example list item</ListItem>
          <ListItem>Example list item</ListItem>
        </List>
        <Link href="#">Example link</Link>
        <br /> <br />
        <Button type="button" onClick={this.onClick}>
          Click me
        </Button>
      </Container>
    );
  }
}

export default App;
