import {Routes, Route} from 'react-router-dom'

// pages Components
import Home from "../components/Dasbord/Home/Home"
import Setting from '../components/Dasbord/setting/Setting';
import Message from '../components/Dasbord/Message/Message';
import Books from '../components/Dasbord/Book/Book';
import Reviews from "../components/Dasbord/Reviews/Reviews"
import UpdateUser from '../components/Dasbord/UpadateUser/UpdateUser';
import New from '../components/Dasbord/new/New';
import UpdateProduct from '../components/Dasbord/updateProduct/UpdateProduct';
import ViewBook from '../components/Dasbord/Views/ViewBook';
import Users from '../components/Dasbord/Users/Users';
import ViewUser from '../components/Dasbord/viewUser/ViewUser';
import InboxMessage from '../components/Dasbord/InboxMessage/InboxMessage';

const  DashRouter = ()  => {
  return (
    <div className= "DashRouter">
      <Routes >
           <Route path='/'>
              <Route index element={<Home />}/>
              <Route path='users'>
                  <Route index element={<Setting />}/>
                  <Route path="updateUser" element={<UpdateUser />} />
              </Route>
             
              <Route path='Message'>
                  <Route index element={<Message />} />
                  <Route path="inboxMessage" element={<InboxMessage />} />
                  {/* <Route path="UpdateProduct" element={<UpdateProduct />} />
                  <Route path="/books/:id" element={<ViewBook />} /> */}
              </Route>
              <Route path='books'>
                  <Route index element={<Books />} />
                  <Route path="addNewBooks" element={<New />} />
                  <Route path="UpdateProduct" element={<UpdateProduct />} />
                  <Route path="/books/:id" element={<ViewBook />} />
              </Route>
              <Route path='ClientUser'>
                  <Route index element={<Users />} />
                  <Route path="/ClientUser/:id" element={<ViewUser />} /> 
              </Route>
              <Route path="/Reviews" element={<Reviews  />} />
           </Route>
       </Routes>
    </div>
  );
}

export default DashRouter;