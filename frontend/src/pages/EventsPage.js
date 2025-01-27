import EventsList from '../components/EventsList';
import { json, useLoaderData } from 'react-router-dom';

function EventsPage() {
    const events = useLoaderData();

    // if(events.isError){
    //   return <p>{events.message}</p>  
    // }

  return (
    <>
       <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader(){
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return {isError:true, message: 'Could not fetch events.'}
        // throw new Response(JSON.stringify({message: 'Could not fetch events!', status: 500}));
        return json({message: 'Could not fetch events!'},{
           status: 500, 
        });
    } else {
        const resData = await response.json();
        // const res = new Response('any data', {status: 201})
        return resData.events;
    }
};