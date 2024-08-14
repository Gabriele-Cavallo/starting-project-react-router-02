import { Link, useParams } from "react-router-dom";

export default function EventDetailPage(){
    const params = useParams();

    return (
        <>
            <h1>Ciao sono la EventDetailPage di {params.eventId}</h1>
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
        </>
    )
}