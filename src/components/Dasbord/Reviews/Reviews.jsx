import "./reviews.scss"
import Users from "../../../assets/fakeDate/Users"


// import icons
import {FaBook} from "react-icons/fa"
const Reviews = () => {

const user = Users.filter( user => user.userReviews === true)
console.log(user)
  return (
    <section className='reviews'>
        <div className="top_content">
        <h1>Clients Reviews</h1>
        <p>Review are what makes our work improve !</p>
      </div>
      <div className="table_content">
          <table>
           <thead>
            <tr>
              <td>Reviewers</td>
              <td>Type of reviews</td>
              <td>Review</td>
            </tr>
           </thead>
           <tbody>
                {
                  user.map( user =>(
                  <tr key={user.id}>
                        <td className="wrapper_books">
                          <div className="images">
                            <picture>
                            <img src={user.image} alt={user.name} />
                            </picture>
                          </div>
                          <div className="dec_book">
                            <h3>{user.name}</h3>
                            <p className="para">{user.address}</p>
                          </div>
                        </td>
                        <td className="type_reviews">
                            <p> <span><FaBook className="icons" /></span> books</p>
                        </td>
                        <td>
                          <p>{user.reviews}</p>
                      </td>
                  </tr>
                  ))
                }
           </tbody>
          </table>
         </div>
    </section>
  )
}

export default Reviews