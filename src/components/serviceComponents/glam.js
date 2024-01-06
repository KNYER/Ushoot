import Images from "../../assets";
import { LiaCameraRetroSolid } from "react-icons/lia";
const GLAM = () => {
    return ( 
    <div className="package showcase glam">
        <div className="info">
            <div className="title">
                <h1>SERVICES</h1>
            </div>
            <div className="packs A">
                <h2>1399</h2>
                <ul>
                    <li> 1 pax</li>
                    <li> 30 mins shoot time</li>
                    <li> 15 mins selection time</li>
                    <li> Unlimited backgrounds</li>
                    <li> 5 enhanced digital copies</li>
                    <li> All raw digital copies</li>
                    <li> 6pcs printed copy</li>
                    <li> Hair and Makeup</li>
                </ul>
            </div>
            <div className="title bkd">
                <h1>GLAM</h1>
            </div>
            <div className="title pkg">
                <h1>PACKAGE</h1>
            </div>
        </div>
        <div className="photos">
            <div className="pink">
            <img className="Girls" src= {Images.glam1}/>
            </div>
            <div className="mustard">
            <img className="Girls" src= {Images.glam2}/>
            </div>
            <div className="title bkcamera">
                <LiaCameraRetroSolid />
            </div>
        </div>
    </div>
     );
}
 
export default GLAM;