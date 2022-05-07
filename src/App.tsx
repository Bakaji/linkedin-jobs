import useFetchJobs from './useFetchJobs';
import { Container, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import JobView from './Job';
import JobPagination from './JobPagination';
import Error from './Error';
import Loading from './Loading';
import { Countries, SearchParamsType } from './types';
import SearchForm from './SearchForm';
function App() {
    const [searchParams, setSearch] = useState<SearchParamsType>({
        search: '',
        location: '',
        fullTimeOnly: false,
    });
    const [page, setPage] = useState<number>(1);
    const [country, setCountry] = useState<Countries>(Countries.us);
    const {
        jobs,
        count: jobsCount,
        loading,
        error,
    } = useFetchJobs(country, searchParams, page);
    const handleParamsChanges = (e: any) => {
        const param = e?.target?.name;
        const value =
            param !== 'fullTimeOnly' ? e.target?.value : e.target?.checked;
        setPage(1);
        setSearch({
            ...searchParams,
            [param]: value,
        });
    };
    const handleCountryChange = (country: Countries) => {
        setPage(1);
        setCountry(country);
    };

    return (
        <Container
            className="d-flex flex-column"
            style={{ minHeight: '100vh' }}
        >
            <h1 className="text-primary mt-5 mb-4">Linkedin Jobs</h1>
            <SearchForm
                searchParams={searchParams}
                onChange={handleParamsChanges}
                country={country}
                setCountryChange={handleCountryChange}
            />
            <JobPagination
                page={page}
                setPage={setPage}
                jobsCount={jobsCount}
            />
            <div
                className="d-flex flex-column justify-content-center"
                style={{ flex: '1' }}
            >
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error error={error} />
                ) : (
                    <ul style={{ paddingLeft: '0' }}>
                        {jobs.map((job, index) => (
                            <ListGroup
                                key={index}
                                style={{ padding: '0!important' }}
                            >
                                <JobView job={job}></JobView>
                            </ListGroup>
                        ))}
                    </ul>
                )}
            </div>
            <JobPagination
                page={page}
                setPage={setPage}
                jobsCount={jobsCount}
            />
        </Container>
    );
}

export default App;
