
import React from "react";
import Bookings from "./Bookings/Bookings";

class Services extends React.Component {

    data = {
        name: 'service',
        handler: 'service'
     }
    render() {
        return (
            <div>
                    <Bookings title={'From Service'} data={this.data}/>
            </div>
        )
    }
}

export default Services;