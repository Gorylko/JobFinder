import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { itemService } from '../../services/item.service'
import { authenticationService } from '../../services/authentication.service';

class ItemInfo extends Component{

    constructor(props){

        super(props);
        this.state = {
            isLoaded: false,
            itemId: props.match.params.number, 
            item: null
        }
    }

    componentDidMount() {
      itemService.getById(this.state.itemId)
      .then(item =>{
        this.setState({
          item: item,
          isLoaded: true
        });
      })
    }

    render(){
      console.log(React.version);
      if(!this.state.isLoaded){
          return(
            <div class="progress">
              <div class="indeterminate"></div>
            </div>
          );
      }
      return(
        <div>
            {authenticationService.isLogged && 
              <Link to={`delete/${this.state.item.id}`}>
                <a class="waves-effect waves-light btn-large white-text jf-green-button">Удалить<i class="large material-icons right">delete</i></a>
              </Link>
            }
          <h3 className="center jf-page-title jf-text">Информация</h3>
          <div className="row">
            <div class="col 8s 8m 8l">
              <div class="card-panel jf-text grey darken-2 hoverable">
                <h1>{this.state.item.name}</h1>
                <p class="flow-text">{this.state.item.description}</p>
                <div class="card-panel jf-green hoverable">
                  <h4>Требования к кандидату</h4>
                  <p>
                    {this.state.item.requirements}
                  </p>
                </div>
                <div class="card-panel jf-green hoverable">
                  <h4>Предложения реботодателя</h4>
                  <p>
                    {this.state.item.benefits}
                  </p>
                </div>
              </div>
            </div>
            <div class="col 4s 4m 4l">
              <div class="card-panel jf-green jf-text hoverable">
                <blockquote>{this.state.item.phoneNumber}</blockquote>
                <blockquote>{this.state.item.email}</blockquote>
              </div>
              <div class="card-panel green darken-3 jf-text hoverable">
                <h4>Дополнительные контакты</h4>
                <span class="jf-text">{this.state.item.additionalContacts}</span>
              </div>
            </div>
          </div>
        </div>
          );
    }
}

export default ItemInfo;