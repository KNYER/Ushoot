import Images from "../../assets";
const GIRLS_IMAGES = () => {
    return ( 
        <div className="imgGirls">
            <div className="one">
            <img className="Girls" src= {Images.g1}/>
            </div>
            <div className="two">
            <img className="Girls" src= {Images.g2}/>
            </div>
            <div className="three">
            <img className="Girls" src= {Images.g3}/> 
            </div>

        </div>
     );
}
 
export default GIRLS_IMAGES;