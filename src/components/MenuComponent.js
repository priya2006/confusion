import React ,{Component} from 'react';
import { Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle } from 'reactstrap';
import Dishdetail from './Dishdetailcomponent';
import {COMMENTS} from '../shared/comment';
class Menu extends Component {
   constructor(props){
       super(props);
       this.state = {
           comments:COMMENTS,
           selecteddish:null
       }
       console.log("menu constructor is invoked");
   }
onDishSelect(dish){
 this.setState({
     selecteddish:dish
 });
}

componentDidMount(){
    console.log("menu componentdidmount is invoked");

}

renderDish(dish){
if(dish != null){
 return(
 <Card>
     <CardImg width="100%" src={dish.image} alt={dish.name} />
     <CardBody>
     <CardTitle>{dish.name}</CardTitle>
     <CardText>
         {dish.description}
         </CardText> 
     </CardBody>
 </Card>

 );
}
else{
    return(
        <div></div>
    );
}
}
render () {

const menu= this.props.dishes.map((dish) => {
     return (
         <div key = {dish.id} className="col-12 col-md-5 m-1">
             <Card onClick={()=> this.onDishSelect(dish)}>
                     <CardImg width="100%" src={dish.image} alt={dish.name} />
                 <CardImgOverlay>
                     <CardTitle>{dish.name}</CardTitle>
                 </CardImgOverlay>
             </Card>
         </div>
    
     );
});
console.log("menu render is invoked");

    return(
<div className="container">
    <div className="row">
   
       {menu}
        
    </div><br/><br/>
    <div className="row">
        <div class="col-12 col-sm-5">
        {this.renderDish(this.state.selecteddish)}
        </div>
        <div class="col-12 col-sm-5">
            <Dishdetail  comments={this.state.comments}/>
        </div>
    </div>
</div>

    );
    }
}

export default Menu;