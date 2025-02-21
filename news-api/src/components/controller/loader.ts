import { ApiResponse, Endpoint, MethodRequest, OptionsUrl } from '../../types/index';

class Loader {
    baseLink: string;
    options: OptionsUrl;

    constructor(baseLink: string, options: OptionsUrl) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: Endpoint; options: OptionsUrl },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load(MethodRequest.GET, endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: OptionsUrl, endpoint: Endpoint) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: MethodRequest, endpoint: Endpoint, callback: (data: ApiResponse) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: ApiResponse) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
