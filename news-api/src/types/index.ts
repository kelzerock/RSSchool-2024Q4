export interface NewsApi {
    source: {
        id: string | null;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface NewsApiResponse {
    status: 'ok' | 'error';
    totalResults: number;
    articles: NewsApi[];
}

export interface SourceApi {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface SourceApiResponse {
    status: 'ok' | 'error';
    sources: SourceApi[];
}

//Loader
export interface OptionsUrl {
    [index: string]: string;
}

export type ApiResponse = NewsApiResponse | SourceApiResponse;

export enum MethodRequest {
    GET = 'GET',
}

export enum Endpoint {
    source = 'sources',
    everything = 'everything',
    topHeadlines = 'top-headlines',
}
