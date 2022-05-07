import { ReactElement } from 'react';
import { Pagination } from 'react-bootstrap';
export default function JobPagination({
    page,
    setPage,
    jobsCount,
}: {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    jobsCount: number | null;
}): ReactElement {
    const hasNextPage = (!!jobsCount && jobsCount > page * 20) || false;
    const lastPage = Math.ceil(jobsCount ?? -1 / 20);
    return (
        <Pagination>
            <Pagination.Prev disabled={page <= 1}></Pagination.Prev>

            {page > 2 && (
                <>
                    <Pagination.Item onClick={() => setPage(1)}>
                        {1}
                    </Pagination.Item>
                    <Pagination.Ellipsis></Pagination.Ellipsis>
                </>
            )}
            {page > 1 && (
                <Pagination.Item onClick={() => setPage(page - 1)}>
                    {page - 1}
                </Pagination.Item>
            )}
            <Pagination.Item active>{page}</Pagination.Item>
            <Pagination.Item onClick={() => setPage(page + 1)}>
                {page + 1}
            </Pagination.Item>
            {lastPage > page + 1 && (
                <>
                    <Pagination.Ellipsis></Pagination.Ellipsis>
                    <Pagination.Item onClick={() => setPage(lastPage)}>
                        {lastPage}
                    </Pagination.Item>
                </>
            )}
            <Pagination.Next disabled={!hasNextPage}></Pagination.Next>
        </Pagination>
    );
}
