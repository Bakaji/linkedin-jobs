import { ACTION_TYPE, State, ReducerAction } from './types';

const reducer = (state: State, action: ReducerAction): State => {
    switch (action.type) {
        case ACTION_TYPE.MAKE_REQUEST:
            return {
                jobs: [],
                loading: true,
                count: null,
                error: null,
            };
        case ACTION_TYPE.RECEIVE_DATA:
            return {
                jobs: action.payload.results,
                count: action.payload.count ?? null,
                loading: false,
                error: null,
            };
        case ACTION_TYPE.ERROR:
            return {
                jobs: [],
                loading: false,
                count: null,
                error: action.payload,
            };
        default:
            return state;
    }
};
export { reducer };
