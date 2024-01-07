import SOLO from "./serviceComponents/solo";
import DUO from "./serviceComponents/duo";
import BARKADA from "./serviceComponents/barkada";
import GLAM from "./serviceComponents/glam";

const SERVICES = () => {
    return ( 
        <div className="Page service" id="service">
            <div className="slide">
            <SOLO />
            <DUO />
            <BARKADA />
            <GLAM />
        </div>
        </div>
     );
}
 
export default SERVICES;