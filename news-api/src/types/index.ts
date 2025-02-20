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
