import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import db from '../db.json';

import {
  QuizBackground,
  QuizCorner,
  QuizFooter,
  QuizLogo,
  QuizWidget,
} from '../src/components';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  console.log('retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <QuizWidget>
          <QuizWidget.Header>
            <h1>{db.title}</h1>
          </QuizWidget.Header>
          <QuizWidget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (infoEvent) {
              infoEvent.preventDefault();

              router.push(`/quiz?name=${name}`);

              /* console.log('Submition') */
            }}>
              <input
                onChange={function (eventInfo) {
                  setName(eventInfo.target.value);
                  /* console.log(eventInfo.target.value); */
                }}
                placeholder="Your username" />
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
            </form>
          </QuizWidget.Content>
        </QuizWidget>

        <QuizWidget>
          <QuizWidget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </QuizWidget.Content>
        </QuizWidget>
        <QuizFooter />
      </QuizContainer>
      <QuizCorner projectUrl="https://github.com/antoniovictormt" />
    </QuizBackground>
  );
}
