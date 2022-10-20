import  Head  from 'next/head';
import Header from './Header';




interface Props {
  children:React.ReactNode
}
const Layout = ({children}:Props) => {

  const tagsArr = "프론트엔드개발자, 프론트엔드 이력서, 프론트엔드 포트폴리오, 포트폴리오웹사이트, 개발자채용, 개발자이력서, 신입프론트엔드, 프론트엔드고용, 프론트엔드 포트폴리오 웹사이트"

  return (
    <>
    <Head>
      <title>이준구 포트폴리오</title>
      <meta name='keyword' content={tagsArr}/>
    </Head>
    <Header/>
    <>{children}</>
    </>
  )
}

export default Layout