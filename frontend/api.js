// import axios from "axios";

// const api = axios.create({
//     baseURL: "http://localhost:8080"
// });

// export default api;

// import axios from "axios";

// const api = axios.create({
//     baseURL: "https://contact-management-system-production-ddfe.up.railway.app"
// });

// export default api;
import axios from "axios";

const api = axios.create({
    baseURL:
        import.meta.env.VITE_BACKEND_URL ||
        "https://contact-management-system-production-ddfe.up.railway.app"
});

export default api;