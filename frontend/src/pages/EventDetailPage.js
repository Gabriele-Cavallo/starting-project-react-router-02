import { json, Link, useRouteLoaderData } from "react-router-dom";
import EventItem from '../components/EventItem.js';

export default function EventDetailPage(){
    const data = useRouteLoaderData('event-detail');

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="../" relative="path">Back</Link>
                    </li>
                    <li>
                        <Link to="edit" relative="path">Edit event</Link>
                    </li>
                </ul>
            </nav>
            <EventItem event={data.event} />
        </>
    )
}

export async function loader({request, params}){
    const param = params.eventId
    const response = await fetch(`http://localhost:8080/events/${param}`);

    if(!response.ok) {
        throw json({message: 'Could not fetch event data'}, {
            status: 500,
        });
    } else{
        return response;
    }
}
