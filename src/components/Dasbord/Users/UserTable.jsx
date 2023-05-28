import { Link } from "react-router-dom"
import { MdDelete, MdDeliveryDining, MdList, MdLocalActivity, MdPhone, MdSell, MdStorage, MdUpdate, MdVerified, MdViewList } from "react-icons/md"
import { FaLocationArrow } from "react-icons/fa"


const UserTable = ({image,name,email,lastName,phone,address,broughtBooks,id,index}) => {
  const Colors = [
    {
      primaryColor :"#5d93e1",
      secondaryColor : "#ecf3fc",
    },
    {
      primaryColor :"#d9b46b",
      secondaryColor : "#fefaf1",
    },
    {
      primaryColor :"#5dc250",
      secondaryColor : "#f2faf1",
    },
    {
      primaryColor :"#f48687",
      secondaryColor : "#fdf1f1",
    },
    {
      primaryColor :"#8964f7",
      secondaryColor : "#f3f0fd",
    },
  ]
  return (
    <>
        <tr style={{"backgroundColor" : Colors[index%5].secondaryColor}}>
              <td className="wrapper_books">
                <div className="images">
                  <img src={image} alt={name} />
                </div>
                <div className="dec_book">
                  <h3 style={{"color":Colors[index%5].primaryColor}}>{name}</h3>
                  <p className="para">{lastName}</p>
                </div>
              </td>
              <td>
                <h2><MdPhone className="icons"/>{phone}</h2>
                <p>{email}</p>
              </td>
              <td>
                 <h2> <FaLocationArrow className="icons"/>{address}</h2>
              </td>
              <td className="verified">
                  <span><MdSell className="icons"/>{broughtBooks}</span>
              </td>
              <td>
                <div className="content_wrapper">
                  <Link  to={`/ClientUser/${id}`}><MdList  className="icons" style={{"color":Colors[index%5].primaryColor}}/></Link>
                  <Link><MdDelete className="icons" style={{"color":Colors[index%5].primaryColor}}/></Link>
                </div>
              </td>
            </tr>
    </>
  )
}

export default UserTable