import  styled  from 'styled-components';

const HeroSectionContainer = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
`
const HeadingWarpper  =styled.div`
  width: 100%;
  max-width: 50vw;
  height: 100%;
  background-color: #454;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px;
`
const Title = styled.h2`
  color: #fff;
`
const Subtitle = styled.p`
  color: #fff;
`

const ParrallexWrapper = styled.div`
  width: 100%;
  max-width: 50vw;
  height: 100%;
  background-color: #555;
`

const HeroSection = () => {
  return (
    <HeroSectionContainer>

        <HeadingWarpper>
          <Title>안녕하세요?</Title>
          <Subtitle>상상을 현실로 만들기를 즐기는 프론트엔드 개발자 이준구입니다</Subtitle>
        </HeadingWarpper>
        <ParrallexWrapper>

        </ParrallexWrapper>

    </HeroSectionContainer>
  )
}

export default HeroSection