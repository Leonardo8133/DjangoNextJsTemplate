import classes from './user-list.module.css';

function User(props) {

    const registerUser = async event => {
        event.preventDefault()

        const url = process.env.api + 'api/user/' + user.id
        const res = await fetch(
            url,
          {
            body: JSON.stringify({
              name: event.target.name.value
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'PATCH'
          }
        )
    
        const result = await res.json()
        console.log(result.user)
        // result.user => 'Ada Lovelace'
        
      }
    
    const { user } = props;
    return (
        <form className = 'input-group mt-3 card p-3 center' onSubmit={registerUser}>
            <h3 className = 'pl-5'> My account </h3>
            <div className="input-group pt-3 w-50">
                <div className="input-group-prepend w-25">
                    <span className="input-group-text" id="basic-addon1">Username</span>
                </div>                
                <p className="form-control" id="basic-addon1"> {user.username} </p>
            </div>
            <div className="input-group w-50">
                <div className="input-group-prepend w-25">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                </div>                
                <p className="form-control" id="basic-addon1"> {user.email} </p>
            </div>
            <div className="input-group w-50 pb-3">
                <div className="input-group-prepend w-25">
                    <span className="input-group-text" id="basic-addon1">First Name</span>
                </div>                
                <input type="text" className="form-control" id="basic-addon1" placeholder="Your first name. Ex: Pedro" defaultValue={user.first_name}></input>
            </div>
            <div className="input-group w-50 pb-3">
                <div className="input-group-prepend w-25">
                    <span className="input-group-text" id="basic-addon1">Last Name</span>
                </div>                
                <input type="text" className="form-control" id="basic-addon1" placeholder="Your second name. Ex: da Silva Costa" defaultValue={user.last_name}></input>
            </div>
            <div className="input-group w-50 pb-3">
                <div className="input-group-prepend w-25">
                    <span className="input-group-text" id="basic-addon1">Company Name</span>
                </div>                
                <input type="text" className="form-control" id="basic-addon1" placeholder="Your company name." defaultValue={user.company_name}></input>
            </div>
            <div className="input-group w-50">
                <div className="input-group-prepend w-25">
                    <span className="input-group-text" id="basic-addon1">Max Products</span>
                </div>                
                <p className="form-control" id="basic-addon1"> {user.max_products} </p>
            </div>
            <div className="input-group input-group-prepend w-50">
                <button type="submit" className="form-control"placeholder="Your company name."> Apply Changes </button>
            </div>
        </form>
    )
}

export default User