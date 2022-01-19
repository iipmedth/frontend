const BASE_URL = "https://ipmedth-groep4-api.herokuapp.com/api/";

/**
 * @description Handles login
 * @param {String} email
 * @param {String} password
 * @returns {Boolean}
 */
export const login = async (email, password) => {
  try {
    let authenticated = false;
    await fetch(BASE_URL + "login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      authenticated = res.status === 200 ? true : false;
    });
    return authenticated;
  } catch (err) {
    return false;
  }
};

/**
 * @description Logout user and redirect to login page
 */
export const logout = async () => {
  await fetch(BASE_URL + "logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  window.location.replace("/");
};

/**
 * @description Handles register
 * @param {String} name
 * @param {String} email
 * @param {String} password
 */
export const register = async (name, email, password) => {
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
    /**
     * @TODO Handle error
     */
  }
};

/**
 * fetches user data of logged in user
 * @returns {JSON} User data
 */
export const fetchUserData = async () => {
  try {
    let data = null;
    await fetch(BASE_URL + "user", {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((response) => {
      data = response.json();
    });
    return data;
  } catch (err) {
    return null;
  }
};

/**
 * Fetches the patients of the logged in therapist
 * @returns {JSON} Patients of therapist
 */
export const fetchPatients = async () => {
  try {
    let data = null;
    await fetch(BASE_URL + "therapist/patients", {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((response) => {
      data = response.json();
    });
    return data;
  } catch (err) {
    return null;
  }
};

/**
 * @description fetches hand percentiles of patients per hand
 * @param {Integer} patient_id
 * @param {String} hand
 * @returns {JSON} object with hand percentiles
 */
export const fetchPatientHandPercentiles = async (patient_id, hand) => {
  try {
    let data = null;
    await fetch(BASE_URL + "measure/percentiles/" + patient_id + "/" + hand, {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((response) => {
      data = response.json();
    });
    return data;
  } catch (err) {}
};

/**
 * @description fetches count of amount of data entries
 * @param {*} patient_id
 * @param {*} hand
 * @returns {JSON} object with count of measurements
 */
export const fetchDataCount = async (patient_id, hand) => {
  try {
    let data = null;
    await fetch(BASE_URL + "measure/count/" + patient_id + "/" + hand, {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((response) => {
      data = response.json();
    });
    return data;
  } catch (err) {
    // TODO handle error
  }
};

export const fetchMeasurements = async (patient_id, hand) => {
  try {
    let data = null;
    await fetch(BASE_URL + "patient/" + patient_id + "/measure/" + hand, {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((response) => {
      data = response.json();
    });
    return data;
  } catch (err) {
    // TODO handle error
  }
};
