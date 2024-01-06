import Images from "../../assets";
import { LiaCameraRetroSolid } from "react-icons/lia";
const BARKADA = () => {
    return ( 
    <div className="package showcase barks">
        <div className="info">
            <div className="title">
                <h1>SERVICES</h1>
            </div>
            <div className="packs A">
                <h2>1199</h2>
                <ul>
                    <li> 4 to 6 pax</li>
                    <li> 30 mins shoot time</li>
                    <li> 15 mins selection time</li>
                    <li> Unlimited backgrounds</li>
                    <li> All digital copies</li>
                    <li> 6pcs printed copy</li>
                </ul>
            </div>
            <div className="title bkd">
                <h1>BARKADA</h1>
            </div>
            <div className="title pkg">
                <h1>PACKAGE</h1>
            </div>
        </div>
        <div className="photos">
            <div className="pink">
            <img className="Girls" src= {Images.barks1}/>
            </div>
            <div className="mustard">
            <img className="Girls" src= {Images.barks2}/>
            </div>
            <div className="title bkcamera">
                <LiaCameraRetroSolid />
            </div>
        </div>
    </div>
     );
}
 
export default BARKADA;