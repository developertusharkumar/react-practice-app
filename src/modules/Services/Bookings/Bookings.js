// functional component 

// const Bookings = (props) => {
//     console.log('props', props.data);


//     const {title} = props; 
//     const {name ,handler} = props.data;
//     return (
//        <div>
//           <p>Hi Bookings {title} - name {name}</p>
//        </div>
//     )
//    }


import React from "react";


class Bookings extends React.Component {


    constructor() {
        super();
        console.log('this.props', this.props);
    

    }
   
    render() {
        return (
            <div>
                   Hi Bookings {this.props.title} = {this.props.data.name}
            </div>
        )
    }
}

   
   
   export default Bookings;