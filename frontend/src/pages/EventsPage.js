import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'event-1',
        place: 'place-1',
        date: 'today'
    },
    {
        id: 'e2',
        title: 'event-2',
        place: 'place-2',
        date: 'today'
    },
    {
        id: 'e3',
        title: 'event-3',
        place: 'place-3',
        date: 'today'
    },
];

export default function EventsPage(){
    return (
        <>
            <ul>
                {DUMMY_EVENTS.map(event => <li key={event.id}><Link to={`/events/${event.id}`}>{event.title}</Link></li>)}
            </ul>
        </>
    )
}