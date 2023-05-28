
import {MdClose} from "react-icons/md"

import "./Comentaire.scss";
const MerciMessage = ({messageMerci, setMessageMerci}) => {
  return (
    <div className="commentaire">
      <div className="comment_content">
      <div className="head_text">
          <h1 className="title">Bien recu. Merci!</h1>
          <MdClose className='icon' onClick={()=> setMessageMerci(!messageMerci)}/>
     </div>
    <div className="wrapper">
    <div>
     <h3 className='title'>Encore une fois, mericie pour vos commentaire. vous nous aidez a améliorer noter produits.</h3>
    </div>
    <div>
    <button  onClick={()=> setMessageMerci(!messageMerci)}>Fermer</button>
     </div>
    </div>           
    </div>
    </div>
  )
}

export default MerciMessage