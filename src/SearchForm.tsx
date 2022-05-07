import { Form, Row, Col } from 'react-bootstrap';
import { getCountryName } from './helpers';
import { Countries, SearchParamsType } from './types';

export default function SearchForm({
    searchParams,
    onChange,
    country,
    setCountryChange,
}: {
    searchParams: SearchParamsType;
    onChange: (e: any) => void;
    country: Countries;
    setCountryChange: (e: any) => void;
}) {
    return (
        <div>
            <Form className="mb-4">
                <Row>
                    <Form.Group as={Col} controlId="job title">
                        <Form.Label>Job title</Form.Label>
                        <Form.Control
                            name="search"
                            type="text"
                            placeholder="Doctor, Engineer, etc."
                            value={searchParams.search}
                            onChange={(e) => onChange(e)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            aria-label=".form-select-lg example"
                            as="select"
                            name="country"
                            value={country}
                            onChange={(e) => setCountryChange(e.target.value)}
                        >
                            {Object.values(Countries).map((c, i) => (
                                <option key={i} value={c}>
                                    {getCountryName(c)}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="job loaction">
                        <Form.Label>Job location</Form.Label>
                        <Form.Control
                            name="location"
                            type="text"
                            placeholder="New York, London, etc."
                            value={searchParams.location}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        className="d-flex flex-column"
                        controlId="full time only"
                    >
                        <Form.Label style={{ flex: 1 }}></Form.Label>
                        <Form.Check
                            style={{ flex: 1 }}
                            name="fullTimeOnly"
                            type="checkbox"
                            label="Full time only"
                            checked={searchParams.fullTimeOnly}
                            onChange={onChange}
                        />
                    </Form.Group>
                </Row>
            </Form>
        </div>
    );
}
