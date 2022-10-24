import styled from "styled-components";

const HeroSectionContainer = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
`;
const HeadingWarpper = styled.div`
  width: 100%;
  max-width: 50vw;
  height: 100%;
  background-color: #454;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px;
`;
const Title = styled.h2`
  color: #fff;
  font-weight: 800;
  font-size: 56px;
  &:hover {
    @keyframes Bouncing {

      30% {
        transform: scaleY(1.3) translateY(-10px);
      }
      50% {
        transform: scaleY(0.9) translateY(1px);
      }
      70% {
        transform: scaleY(1.2) translateY(-4px);
      }
      100% {
        transform: scaleY(1)
      }
    }
    animation: Bouncing 500ms;
  }
`;

const Subtitle = styled.p`
  color: #fff;
`;

const ParrallexWrapper = styled.div`
  width: 100%;
  max-width: 50vw;
  height: 100%;
  background-color: #555;
`;

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeadingWarpper>
        <Title>Henry</Title>
        <Subtitle>
          상상을 현실로 만들기를 즐기는 프론트엔드 개발자 이준구입니다
        </Subtitle>
      </HeadingWarpper>
      <ParrallexWrapper>패럴랙스 자리</ParrallexWrapper>
    </HeroSectionContainer>
  );
};

export default HeroSection;
