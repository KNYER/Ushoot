import Images from "../../assets";
import { LiaCameraRetroSolid } from "react-icons/lia";
const SOLO = () => {
    return ( 
    <div className="package showcase solo">
        <div className="info">
            <div className="title">
                <h1>SERVICES</h1>
            </div>
            <div className="packs A">
                <p>A</p>
                <h2>299</h2>
                <ul>
                    <li> 1 pax</li>
                    <li> 15 mins shoot time</li>
                    <li> 10 mins selection time</li>
                    <li> 2 backgrounds</li>
                    <li> 2pcs printed copy</li>
                </ul>
            </div>

            <div className="packs B">
                <p>B</p>
                <h2>399</h2>
                <ul>
                    <li> 1 pax</li>
                    <li> 15 mins shoot time</li>
                    <li> 2 backgrounds</li>
                    <li> All digital copies</li>
                </ul>
            </div>
            <div className="title offer">
                <h1>SOLO</h1>
            </div>
            <div className="title pkg">
                <h1>PACKAGE</h1>
            </div>
        </div>
        <div className="photos">
            <div className="pink">
            <img className="Girls" src= {Images.solo1}/>
            </div>
            <div className="mustard">
            <img className="Girls" src= {Images.solo2}/>
            </div>
            <div className="blue">
            <img className="Girls" src= {Images.solo3}/>
            </div>
            <div className="title camera">
                <LiaCameraRetroSolid />
            </div>
        </div>
    </div>
     );
}
 
export default SOLO;