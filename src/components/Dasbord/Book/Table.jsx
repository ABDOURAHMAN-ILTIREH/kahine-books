import { Link } from "react-router-dom"
import { MdDelete, MdUpdate, MdViewList } from "react-icons/md"


const Table = ({title,image01,price,author,index,id,tarjumide}) => {
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
    <div className="wrapper">
                <div className="image_content">
                  <img src={image01} alt="images" />
                </div>
                <div className="dec_wrapper">
                    <h2 className="title">{title}</h2>
                    <h3 className="author">author:<span>{author}</span></h3>
                    <p className="text">Tarjoumid : <span>{tarjumide}</span></p>
                    <p className='price'>price: <span>{price}</span>/fd</p>
                    <div className="content_wrapper">
                        <Link  to={`/books/${id}`}><MdViewList  className="icons" style={{"color":Colors[index%5].primaryColor}}/></Link>
                        <Link to='UpdateProduct'><MdUpdate  className="icons" style={{"color":Colors[index%5].primaryColor}}/></Link>
                        <Link><MdDelete className="icons" style={{"color":Colors[index%5].primaryColor}}/></Link>
                    </div>
                </div>
              </div>
    </>
  )
}

export default Table