import { ImFacebook2 } from "react-icons/im";
import MAP from "./contactComponents/map";
const CONTACT = () => {
    return ( 
        <div className="Page" id="contact">
            <div className="info contact">
            <div className="title">
                <h1 >CONTACT </h1><h1 className=" us"> US</h1>
                </div>
                <div className="info hstry contactinf">
                <p>Contact No. 09561458085</p>
                <p>Tiktok: @ushootstudios</p>
                <p>Location: Beside Banko Kabayan, Behind Medrano Palaza, Santiago St., Poblacion, Ibaan, Batangas</p>

                </div>
                <div className="facebook">
                   <a href="https://www.facebook.com/USHOOTStudios.ph"> <ImFacebook2 /> </a>
                </div>
                <div className="map">
                    <MAP/>
                </div>
            </div>
        </div>
     );
}
 
export default CONTACT;