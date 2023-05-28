import "./users.scss"
import Users from "../../../assets/fakeDate/Users"
import UserTable from "./UserTable"
import { FaSearch } from "react-icons/fa"
import { useState } from "react"


const User = () => {

  const [search, setSearch] = useState("")
  return (
    <section className='users'>
         <div className="top_content">
           <h1>Users List</h1>
         <div className="search">
              <input type="text" placeholder='search....' onChange={(e)=>setSearch(e.target.value)} />
              <FaSearch className='icon' />
             </div>
         </div>
         <div className="table_content">
          <table>
           <thead>
            <tr>
              <td>summary</td>
              <td>contact</td>
              <td>address</td>
              <td>brought books</td>
              <td>actions</td>
            </tr>
           </thead>
           <tbody>
            {
              Users.filter( item =>{
                return search === '' ? item: item.name.includes(search)
                 || item.address.includes(search)
                 || item.email.includes(search);
              }).map( (user,index)=>(
                <UserTable  key={user.id} {...user} index={index}/>
              ))
            }
           </tbody>
          </table>
         </div>
    </section>
  )
}

export default User