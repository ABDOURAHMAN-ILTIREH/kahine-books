import './box.css'
import image01 from "../../../assets/Users/teacher-1.png"
const BoxMessage = ({own}) => {
  return (
        <div className={own ? "message_content own" : "message_content"}>
            <div className="chatProfile">
              <picture className="picture">
                <img src={image01} alt="images" />
              </picture>
              <p className="mss_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio sed sint repudiandae labore facilis nam, recusandae voluptate beatae neque blanditiis cupiditate qui, amet suscipit eveniet placeat pariatur accusantium id deserunt?</p>
            </div>
              <div className="date">
                1 hour ago
              </div>  
        </div>
  )
}

export default BoxMessage