import "./Question.scss"
import { useState } from "react"

// import arrw icon
import arrow from "../../../assets/images/arrowup.svg";


export const Question = () => {
    const [open, setOpen] = useState(true)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)

  return (
    <div className='question'>
       <div className="box_question">
          <div className="title">
            <h1>su'aalaha inta badan la iswaydiiyo</h1>
          </div>
          <div className="box_asked_questions">
             <div className="box_content_questions">
                <div className="top_arrow_questions">
                    <h2>waa maxay lacag bixinta aad agbashaan ?</h2>
                    <img src={arrow} alt="arrow" className={`arrow-icon-question ${open ? 'up' : 'down'}`}
                    onClick={()=>setOpen(!open)}
                    />
                </div>
                {
                    open && (
                        <div className="aswer">
                            <p>waqtigan xaagirka ah waxaan aqbaalnaa kaliya lacagta franka djibouti kaliya .
                            dhawaan waxaan ku dari doonaa doorashooyin badan oo ay ku jiraan bixinta kaadhka.</p>
                        </div>
                    )
                }
             </div>
             <div className="box_content_questions">
                <div className="top_arrow_questions">
                    <h2>gobaledee baad delivery ku gaysaan buugta ?</h2>
                    <img src={arrow} alt="arrow" className={`arrow-icon-question ${open2 ? 'up' : 'down'}`}
                    onClick={()=>setOpen2(!open2)}
                    />
                </div>
                {
                    open2  && (
                        <div className="aswer">
                           <p>waqtigan xaadirka ah, waxa aanu geyna dhamaan magaladha djibouti oo dhaan.
                            laakiin dhawaan aanu balaadhin doona insha allah</p>
                        </div>
                    )
                }
             </div>
             <div className="box_content_questions">
                <div className="top_arrow_questions">
                    <h2>alaabtayda xiligee baa la ii keenaya markaan dalbado kadib ?</h2>
                    <img src={arrow} alt="arrow" className={`arrow-icon-question ${open3 ? 'up' : 'down'}`}
                    onClick={()=>setOpen3(!open3)}
                    />
                </div>
                {
                    open3 && (
                        <div className="aswer">
                          <p>macmiil waxaad alaabtaada helaysa isla maaalinta aad dalbato hadii aad joogtid djibouti</p>
                        </div>
                    )
                }
             </div>
             <div className="box_content_questions">
                <div className="top_arrow_questions">
                    <h2>halkee baan idin kalasoo xidhiidhi karaa ?</h2>
                    <img src={arrow} alt="arrow" className={`arrow-icon-question ${open4 ? 'up' : 'down'}`}
                    onClick={()=>setOpen4(!open4)}
                    />
                </div>
                {
                    open4 && (
                        <div className="aswer">
                           <p>fadlan soo wac nambarka caawinta macaamiisha 77 31 18 66 ama email kan info@kahinebooks.net</p>
                        </div>
                    )
                }
             </div>
          </div>
       </div>
    </div>
  )
}
