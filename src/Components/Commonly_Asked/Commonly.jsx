import {React , useState} from 'react'
import {BiSolidDownArrow , BiSolidRightArrow} from "react-icons/bi"
import img from "../../../public/Images/Group4.png"
function Commonly() {
    const [showItems, setShowItems] = useState([true, false, false, false]);

    // Fonction pour basculer l'état d'un élément de FAQ spécifique
    const toggleItem = (index) => {
      const newShowItems = [...showItems]; // Créez une copie du tableau d'états actuel
      newShowItems[index] = !newShowItems[index]; // Inversez l'état de l'élément spécifique
      setShowItems(newShowItems); // Mettez à jour le tableau d'états
    };
  

    return (
        <div className="commonly">
          <div className="commonly-info">
            <h4>FAQ’s</h4>
            <h2>Commonly Asked Questions</h2>
          </div>
          <div className="commonly-components">
            <div className="all-components">
              {showItems.map((show, index) => (
                <div className="components" key={index}>
                  <div className="components-info">
                    <h4>Q{index + 1} . Lorem ipsum dolor sit amet, consetetur ?</h4>
                    <div className={show ? "C-para Active" : "C-para"}>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum.
                      </p>
                    </div>
                  </div>
                  <div className="icon-open-close" onClick={() => toggleItem(index)}>
                    {show ? <BiSolidRightArrow /> : <BiSolidDownArrow />}
                  </div>
                </div>
              ))}
            </div>
            <img src={img} alt="" />
          </div>
        </div>
      );
}

export default Commonly