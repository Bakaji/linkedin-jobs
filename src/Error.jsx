import { Card } from 'react-bootstrap';
import errorSVG from './error.png';
export default function Error({ error }) {
    return (
        <div className="errorParent">
            <Card style={{ minWidth: '300px', aspectRatio: '1/1' }}>
                <Card.Body>
                    <div className=" d-flex flex-column justify-content-center align-items-center">
                        <img
                            height={200}
                            width={200}
                            src={errorSVG}
                            alt="error"
                        />
                        <div className="d-flex flex-column">Error {error}</div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
