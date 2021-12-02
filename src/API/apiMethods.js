const BASE_URL = "https://ipmedth-groep4-api.herokuapp.com/api/";


export async const login = (email, password) => {
    try {
        await fetch(BASE_URL + "login", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
    } catch(err) {
        console.log(err);
    }
}
export async const register = (name, email, password) => {
    try {
        await fetch(BASE_URL + "register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: name,
              email: email,
              password: password,
              role: "Therapist",
            }),
          });
    } catch (err) {
        console.log(err);
    }
}