import { Countries } from './types';

export function formatText(input: string): string {
    return input
        .replace(/\\n\\n\\n[ {8}].*\\n\\n\\n/gim, '')
        .replace(/\n/g, '<br/>')
        .trim();
}

export function getCountryName(country: Countries): string {
    switch (country) {
        case 'at':
            return 'Austria';
        case 'au':
            return 'Australia';
        case 'be':
            return 'Belgium';
        case 'br':
            return 'Brazil';
        case 'ca':
            return 'Canada';
        case 'ch':
            return 'Switzerland';
        case 'de':
            return 'Germany';
        case 'es':
            return 'Spain';
        case 'fr':
            return 'France';
        case 'gb':
            return 'United Kingdom';
        case 'in':
            return 'India';
        case 'it':
            return 'Italy';
        case 'mx':
            return 'Mexico';
        case 'nl':
            return 'Netherlands';
        case 'nz':
            return 'New Zealand';
        case 'pl':
            return 'Poland';
        case 'ru':
            return 'Russia';
        case 'sg':
            return 'Singapore';
        case 'us':
            return 'United States';
        case 'za':
            return 'South Africa';
        default:
            return 'Unknown';
    }
}

export function getContractTime(contractTime: string): string {
    switch (contractTime) {
        case 'full_time':
            return 'Full-time';
        case 'part_time':
            return 'Part-time';
        case 'contract':
            return 'Contract';
        case 'permanent':
            return 'Permanent';
        default:
            return 'Unknown';
    }
}

const corsProxy = 'https://corsanywhere.herokuapp.com/';
export function getApiLink(country: Countries, page: number): string {
    return `${corsProxy}https://api.adzuna.com/v1/api/jobs/${country}/search/${page}`;
}
