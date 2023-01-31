import Bookings from "../Services/Bookings/Bookings";

// functional component 

const Home = () => {
 const data = {
    name: 'home',
    handler: 'home'
 }
 return (
    <div>
         <Bookings title={'From Home'} data={data} />
    </div>
 )
}


export default Home;