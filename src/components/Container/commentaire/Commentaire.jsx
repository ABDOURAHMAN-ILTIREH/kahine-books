import { Link } from "react-router-dom";
import "./Comentaire.scss";
import {MdClose, MdStar, MdStarOutline} from "react-icons/md"


// import framer motion
import {motion, AnimatePresence} from "framer-motion"
import { useEffect, useState } from "react";
import MerciMessage from "./MerciMessage";

const Commentaire = ({setComment, comment}) => {
  const [messageMerci, setMessageMerci] = useState(true);

  // useState Stars1
  const [start, setStart] = useState(true);
  const startHandler = () =>{
    setStart(!start);
  }
  // useState Start 2
  const [start2, setStart2] = useState(true);
  const startHandler2 = () =>{
    setStart2(!start2);
  }
  // useState Start 3
  const [start3, setStart3] = useState(true);
  const startHandler3 = () =>{
    setStart3(!start3);
  }
  // useState Start 4
  const [start4, setStart4] = useState(true);
  const startHandler4 = () =>{
    setStart4(!start4);
  }
  // useState Start 5
  const [start5, setStart5] = useState(true);
  const startHandler5 = () =>{
    setStart5(!start5);
  }

  // framer motions
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { 
      y: "0", 
      opacity: 1,
      transition: { delay: 0.5 }
    },
  }

  // setHandler
  const setHandler = ()=>{
      setComment(!comment);
   }

  return (
    <AnimatePresence>
    <motion.div className="commentaire"
    variants={backdrop}
    initial="hidden"
    animate="visible"
    exit="hidden"
    >
      <motion.div className="comment_content"
        variants={modal}
      >
        <div className="head_text">
          <h1 className="title">Faits-nous part de vos commentaires</h1>
          <MdClose className='icon' onClick={()=> setComment(!comment)}/>
        </div>
        <div className="wrapper">
          <div>
             <h3 className="title">Dans quelle mesure etes-vous satisfait de l' experience de liver ?</h3>
             <div className="start_satisfaction">
                {
                 start ? (<MdStarOutline className='start' onClick={startHandler} />) : (<MdStar className='start' onClick={startHandler}/>)
                }
                {
                  start2 ? (<MdStarOutline className='start' onClick={startHandler2} />) : (<MdStar className='start' onClick={startHandler2}/>)
                }
                {
                  start3 ? (<MdStarOutline className='start' onClick={startHandler3} />) : (<MdStar className='start' onClick={startHandler3}/>)
                }
                {
                  start4 ? (<MdStarOutline className='start' onClick={startHandler4} />) : (<MdStar className='start' onClick={startHandler4}/>)
                }
                {
                start5 ? (<MdStarOutline className='start' onClick={startHandler5} />) : (<MdStar className='start' onClick={startHandler5}/>)
                }
              </div>
          </div>
          <div>
            <h3 className='title'>Que pouvais vous dire cette liver ?</h3>
            <textarea  cols="30" rows="10" placeholder="description"></textarea>
          </div>
          <div>
            <h3 className="title">Vous avez besoin d'aide ? <Link>Nous contacter</Link></h3>
          </div>
          <div>
            <button onClick={setHandler}>Envoiyer</button>
            <button onClick={()=> setComment(!comment)}>Annuler</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
    {/* {
      messageMerci && (
        <MerciMessage setMessageMerci={setMessageMerci} messageMerci={messageMerci} />
      )
    } */}
    </AnimatePresence>
  )
}

export default Commentaire