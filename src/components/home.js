import Footer from "./footer";
import FourthPage from "./fourthpage";
import FrontPage from "./navigation/first";
import Nav from "./navigation/nav";
import SecondPage from "./secondPage";
import ThirdPage from "./thirdPage";

function Home(){
    return(
        <>
    <Nav></Nav>
    <FrontPage></FrontPage>
    <SecondPage></SecondPage>
    <ThirdPage></ThirdPage>
    <FourthPage></FourthPage>
    <Footer></Footer>
    </>
    )
}
export default Home;