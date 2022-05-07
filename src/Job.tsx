import { Job } from './types';
import { Badge, Card } from 'react-bootstrap';
import Details from './Details';
import { getContractTime } from './helpers';
export default function JobView({ job }: { job: Job }) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div>
                        <Card.Title>
                            {job.title ?? 'Job title'} -{' '}
                            <span className="text-muted fs-6 fw-lighter">
                                {job.company?.display_name}
                            </span>
                        </Card.Title>
                        <Card.Subtitle className="fs-6 text-muted mb-2">
                            {new Date(job.created).toLocaleDateString() ??
                                'No posting date'}
                        </Card.Subtitle>
                        {job.location?.display_name && (
                            <Badge bg="secondary" className="mb-2 mr-2">
                                {job.location.display_name}
                            </Badge>
                        )}
                        {job.contract_time && (
                            <Badge bg="secondary" className="mb-2 mr-2">
                                {getContractTime(job.contract_time)}
                            </Badge>
                        )}
                        <div style={{ wordBreak: 'break-all' }}>
                            {job.redirect_url && (
                                <a
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={job.redirect_url}
                                >
                                    Apply for{' '}
                                    {job.title.length < 25
                                        ? job.title
                                        : 'this job'}
                                </a>
                            )}
                        </div>
                    </div>
                    <div
                        className="d-flex align-items-center pt-5 justify-content-center h-100"
                        style={{ height: '100%' }}
                    >
                        {job.company?.display_name && (
                            <h3>{job.company.display_name}</h3>
                        )}
                    </div>
                </div>
                {job.description && <Details text={job.description}></Details>}
            </Card.Body>
        </Card>
    );
}
