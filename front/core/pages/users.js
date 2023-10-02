import User from '../components/users/user-item'
import { getUserById } from '../FakeData'
import { getEndpoint } from '../api-urls'
import Header from '../components/ui/header'
import axios from 'axios'
function Home (props) {

        console.log(props)
  return (
    <div>
      <Header/>
      <div className="container">
        <User user = {props.data}/>
      </div>
    </div>
  )
}

export default Home;


export async function getServerSideProps (context) {
    console.log(context)
    const {data} = await axios.get(getEndpoint("get_user")) 
    return {
        props : {
            data, 
        }
    } 
}