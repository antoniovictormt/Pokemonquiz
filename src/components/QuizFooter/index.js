import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: none;
    }
  }
`;

export default function QuizFooter(props) {
  return (
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/" target="_blank">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/" target="_blank">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}