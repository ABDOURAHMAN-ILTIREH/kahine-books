import './Order.scss'
import { motion ,AnimatePresence} from "framer-motion"

// import window closer icons
import { MdClose } from "react-icons/md"
export const Order = ({orderOpen,setOrderOpen}) => {

  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { 
      y: "10px", 
      opacity: 1,
      transition: { delay: 0.5 }
    },
  }

  return (
    <AnimatePresence>
    <motion.div className='order'
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      >
          <motion.div className="order_message"
          variants={modal}
          >
            <div className="wrapper">
                <h1 className='title'>successe!</h1>
                < MdClose className='icon' onClick={()=> setOrderOpen(!orderOpen)}/>
            </div>
              <p>your order has reseved , the admistration will contact you in 24 hours coming.</p>
          </motion.div>
    </motion.div>
    </AnimatePresence>
  )
}
