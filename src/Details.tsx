import { Accordion } from 'react-bootstrap';
import { formatText } from './helpers';

export default function Details({ text }: { text: string }) {
    return (
        <div className="mt-4">
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Job Description</Accordion.Header>
                    <Accordion.Body>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: formatText(text),
                            }}
                        ></div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
