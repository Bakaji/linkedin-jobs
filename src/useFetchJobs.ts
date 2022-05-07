import axios, { AxiosError } from 'axios';
import { useEffect, useReducer } from 'react';
import { getApiLink } from './helpers';
import { reducer } from './reducer';
import { ACTION_TYPE, State, Countries, SearchParamsType } from './types';

const initialState: State = {
    jobs: [],
    loading: false,
    count: null,
    error: null,
};

const staticParams = {
    app_id: '80947651',
    app_key: '56edb5fa7a732dd96c052fe7651c3a2f',
    results_per_page: 20,
};
export default function useFetchJobs(
    country: Countries,
    searchParams: SearchParamsType | null,
    page: number
) {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({ type: ACTION_TYPE.MAKE_REQUEST, payload: null });
        const cancelToken = axios.CancelToken.source();
        const requestParams: any = {
            ...staticParams,
        };
        if (searchParams?.search)
            requestParams.title_only = searchParams.search;
        if (searchParams?.fullTimeOnly) requestParams.full_time = 1;
        const options = {
            cancelToken: cancelToken.token,
            method: 'GET',
            url: getApiLink(country, page),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': '*',
            },
            params: requestParams,
        };
        axios
            .request(options)
            .then((response) => {
                dispatch({
                    type: ACTION_TYPE.RECEIVE_DATA,
                    payload: response.data,
                });
            })
            .catch((error: AxiosError) => {
                if (axios.isCancel(error)) return;
                dispatch({ type: ACTION_TYPE.ERROR, payload: error.message });
            });
        return () => {
            cancelToken.cancel();
        };
    }, [searchParams, country, page]);
    return state;
}
