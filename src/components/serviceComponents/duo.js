import Images from "../../assets";
import { LiaCameraRetroSolid } from "react-icons/lia";
const DUO = () => {
    return ( 
        <div className="package showcase duo">
        <div className="info">
            <div className="title">
                <h1>SERVICES</h1>
            </div>
            <div className="packs A">
                <p>A</p>
                <h2>499</h2>
                <ul>
                    <li> 1 to 2 pax</li>
                    <li> 30 mins shoot time</li>
                    <li> 15 mins selection time</li>
                    <li> 2 backgrounds</li>
                    <li> 4pcs printed copy</li>
                </ul>
            </div>

            <div className="packs B">
                <p>B</p>
                <h2>399</h2>
                <ul>
                    <li> 1 to 2 pax</li>
                    <li> 30 mins shoot time</li>
                    <li> 2 backgrounds</li>
                    <li> All digital copies</li>
                </ul>
            </div>
            <div className="title offer">
                <h1>DUO</h1>
            </div>
            <div className="title pkg">
                <h1>PACKAGE</h1>
            </div>
        </div>
        <div className="photos">
            <div className="pink">
            <img className="Girls" src= {Images.duo1}/>
            </div>
            <div className="mustard">
            <img className="Girls" src= {Images.duo2}/>
            </div>
            <div className="blue">
            <img className="Girls" src= {Images.duo3}/>
            </div>
            <div className="title camera">
                <LiaCameraRetroSolid />
            </div>
        </div>
    </div>
     );
}
 
export default DUO;