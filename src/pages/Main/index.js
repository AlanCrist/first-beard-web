import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

class Main extends React.Component {
  state = {
    newRepository: '',
  };

  handleInputChange = e => {
    this.setState({ newRepository: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { newRepository } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            onChange={this.handleInputChange}
          />
          <SubmitButton>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

export default Main;
