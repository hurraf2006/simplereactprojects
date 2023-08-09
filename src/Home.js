import './styles/home.scss'
const Home = () => {
    return ( 
        <div className="Home">
            <div className="container">
            <div className="homeBox">
            <div className="leftHome">
            <h1 className="home_title">React Simple Projects</h1>
            <p>These are some examples of how components, routers, functions work in React Js. You can see that nice examples by clicking the Links above.</p>
            </div>
            <div className="rightHome">
                <img src={require('./images/home.png')} alt="" />
            </div>
            </div>
            </div>
                
        </div>
     );
}
 
export default Home;