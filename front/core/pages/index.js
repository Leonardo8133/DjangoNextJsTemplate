import Users from '../components/users/user-list'
import Header from '../components/ui/header'
import { getActiveUsers, getAllUsers, getUserById } from '../FakeData'

const Home = () => {
  return (
    <div>
      <Header/>
      {/* <div className="w3-container">
        <Users items = {getAllUsers()}/>
      </div> */}
    </div>
  )
}

export default Home;
