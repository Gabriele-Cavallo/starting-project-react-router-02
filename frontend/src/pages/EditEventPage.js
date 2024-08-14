import { Link } from "react-router-dom"

export default function EditEventPage(){
    return (
        <>
            <h1>Ciao sono la EditEventPage</h1>
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