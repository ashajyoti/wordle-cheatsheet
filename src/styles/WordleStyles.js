import styled, { keyframes } from "styled-components";

export const H2 = styled.h2`
  font-size: 2rem;
  color: black;
`;

export const Header = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const WBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WInput = styled.input`
  padding: 0.5rem;
  border: 2px solid #100c08;
  border-radius: 10px;
`;

export const WButton = styled.button`
  background-color: rgba(31, 149, 115, 0.8);
  border: 0px;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  margin-top: 1rem;
`;

export const WordsContainer = styled.div`
  width: 80%;
  max-width: 450px;
  margin: 15px 0;
  padding-top: 15px;
  border: 1px solid black;
  border-radius: 6px;
`;

export const WordSets = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const loader = keyframes`
   from {transform: rotate(0deg) scale(1,1);border-radius:0px;}
   to {transform: rotate(360deg) scale(0, 0);border-radius:50px;}
`;

export const WLoader = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  display: inline-block;
  padding: 0px;
  margin-top: 50px;
  opacity: 0.5;
  border: 3px solid #09acfd;
  animation-name: ${loader};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  /* animation: loader 1s ease-in-out infinite alternate; */
  &:before {
    content: " ";
    position: absolute;
    z-index: -1;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 3px solid #09acfd;
  }
  &:after {
    content: " ";
    position: absolute;
    z-index: -1;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border: 3px solid #09acfd;
  }
`;

// var loader = keyframes`
//    from {transform: rotate(0deg) scale(1,1);border-radius:0px;}
//    to {transform: rotate(360deg) scale(0, 0);border-radius:50px;}
// `;

export const WSearchInputWrapper = styled.div`
 display:flex;
 flex-wrap:wrap;
 width:100%;
 max-width: 350px;
 justify-content: space-between;
 align-items: center;
 margin: 0.75rem 0;
`;

export const WLabel = styled.div`
  font-size: 16px;
  text-transform: capitalize;
  color: crimson;
`;
