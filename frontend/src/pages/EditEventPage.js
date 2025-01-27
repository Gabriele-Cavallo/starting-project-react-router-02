import { Link, useRouteLoaderData } from "react-router-dom";
import EventForm from '../components/EventForm.js';

export default function EditEventPage(){
    const data = useRouteLoaderData('event-detail');
    const event = data.event;
    return (
        <>
            <EventForm method={'PATCH'} event={event} />
            <nav>
                <ul>
                    <li>
                        <Link to="../" relative="path">Back</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}