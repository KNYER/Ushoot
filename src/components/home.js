import NAVBAR from "./homeComponents/navbar";
import SLOGAN from "./homeComponents/slogan";
import US from "./homeComponents/us";
import LOGO from "./homeComponents/logo";
import GIRLS_IMAGES from "./homeComponents/imageGirls";
import TRIANGLE from "./homeComponents/triangle";
const HOME = () => {
    return ( 
      <div id="home">
        <NAVBAR />
        <div className="Page">
          <SLOGAN />
          <US/>
          <LOGO/>
          <GIRLS_IMAGES/>
          <TRIANGLE/>
        </div>
      </div>
     );
}
 
export default HOME;