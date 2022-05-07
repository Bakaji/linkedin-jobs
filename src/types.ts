// export type Job = {
//     job_url: string;
//     linkedin_job_url_cleaned: string;
//     company_name: string;
//     company_url: string;
//     job_title: string;
//     job_location: string;
//     posted_date: string;
//     normalized_company_name: string;
//     description: string;
//     recruiter_name: string;
//     linkedin_recruiter_url: string;
// };
export type Job = {
    adref: string;
    description: string;
    redirect_url: string;
    title: string;
    location: {
        display_name: string;
        area: string[];
    };
    id: string;
    salary_is_predicted?: string;
    contract_time?: string;
    created: string;
    category: {
        tag: string;
        label: string;
    };
    longitude: number;
    latitude: number;
    company: {
        display_name: string;
    };
};
export enum ACTION_TYPE {
    MAKE_REQUEST = 'MAKE_REQUEST',
    RECEIVE_DATA = 'RECEIVE_DATA',
    ERROR = 'ERROR',
}

export type ReducerAction = {
    type: ACTION_TYPE;
    payload: any;
};
export type State = {
    jobs: any[];
    loading: boolean;
    count: number | null;
    error: string | null;
};

export enum Countries {
    at = 'at',
    au = 'au',
    be = 'be',
    br = 'br',
    ca = 'ca',
    ch = 'ch',
    de = 'de',
    es = 'es',
    fr = 'fr',
    gb = 'gb',
    in = 'in',
    it = 'it',
    mx = 'mx',
    nl = 'nl',
    nz = 'nz',
    pl = 'pl',
    ru = 'ru',
    sg = 'sg',
    us = 'us',
    za = 'za',
}

export type ParamsType = {
    app_id: string;
    app_key: string;
    results_per_page: number;
};

export type urlArgs = {
    country: Countries;
    page: number;
};

export type SearchParamsType = {
    search: string;
    location: string;
    fullTimeOnly: boolean;
};
