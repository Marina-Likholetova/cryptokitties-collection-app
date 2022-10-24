import { useState, useEffect } from "react";
import axios from "axios";


const defaultImage = "https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png";


export default function useImageCheck(src) {
    const [url, setUrl] = useState();

    
    useEffect(() => {
        if (!src) return
        let cancel;
        axios({
            url: src,
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
            .then((res) => setUrl(res.config.url))
            .catch((err) => {
                if (!axios.isCancel(err)) return setUrl(defaultImage);
            });
        return () => cancel();
    }, [src]);

    return url;
}
