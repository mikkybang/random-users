import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';

import './card.css';

class Card extends React.Component {

    state = {
        users: [],
        isLoading: true,
        errors: null
      };

      componentDidMount() {
        axios
          .get("https://randomuser.me/api/?results=100")
          .then(response =>
            response.data.results.map(user => ({
              name: `${user.name.first} ${user.name.last}`,
              username: `${user.login.username}`,
              email: `${user.email}`,
              image: `${user.picture.thumbnail}`
            }))
          )
          .then(users => {
            this.setState({
              users,
              isLoading: false
            });
          })
          .catch(error => this.setState({ error, isLoading: false }));
      }

    render() {
        const { isLoading, users } = this.state;
        return (
       <Router>
          <div>
          {!isLoading ? (
          users.map(user => {
            const { username, name, dob, image, address, email } = user;


            return (
                <div key={username}>
                    <div className="container">
                    <header>
                    <div className="bio">
                        <img src="http://www.croop.cl/UI/twitter/images/up.jpg" alt="background" className="bg" />
                        <div className="desc">
                        <h3>@carlf</h3>
                        <p>Carl Fredricksen is the protagonist in Up. He also appeared in Dug's Special Mission as a minor character.</p>
                        </div>
                    </div>
                    <div className="avatarcontainer">
                        <img src={image} alt="avatar" className="avatar" />
                        <div className="hover">
                        <div className="icon-twitter" />
                        </div>
                    </div>
                    </header>

        <div className="content">
          <div className="data">
          <p>{name}</p>
            <p>{dob}</p>
            <p>{address}</p>
          </div>
        </div>
      </div>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
          
        
        </div>
       </Router>  
    );
}

}
export default Card;
