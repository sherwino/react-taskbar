import styled, { css, keyframes} from "styled-components";

const animationFrames = keyframes`
  from {
    transform: rotate(0deg);

  }
  to {
    transform: rotate(360deg);

  }
`
// eslint-disable-next-line
const spinAnimation = css`${animationFrames} infinite 20s linear;`

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  width: 35px;
  overflow: hidden;
  margin: 0 2px;
  padding: 0 2px;
  /* border: 1px green solid; */
  justify-content: flex-start;
  align-items: center;
  animation: ${(props: any) => props.spin ? spinAnimation : "unset"};

  &:hover {
	background:rgba(255,255,255,0.1);
	transition: background 0.1s ease-in-out;
    cursor: pointer;	
  }
`;