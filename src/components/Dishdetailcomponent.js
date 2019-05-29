import React ,{Component} from 'react';
import { Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle } from 'reactstrap';
import {Media} from 'reactstrap';
  
class Dishdetail extends Component {


    componentDidMount(){
        console.log("dishdetail componentdidmount is invoked");
    
    }
    
    render(){
        
        console.log("dishdetail render is invoked");

        const display=this.props.comments.map((comment)=> {
         return(
        <Media tag='li'>
            <Media body>
            <p>{comment.comment}</p>
            <p>--{comment.writer},{comment.date}</p>
            </Media>
        </Media>

         );
          
        });
        return( 
       <div className="container">
           <p>COMMENTS</p>
        {display}
       </div>
            );
    }
}
export default Dishdetail;