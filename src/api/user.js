const baseApiURL = "https://product-comparator.vercel.app";

export const register = async (data) => {
    const response = await fetch(`${baseApiURL}/user/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    })
    return {
        status: response.status,
        body: await response.json()
    }
}

export const login = async (data) => {
    const response = await fetch(`${baseApiURL}/user/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    })
    return {
        status: response.status,
        body: await response.json()
    }
}

export const getUser = async (token) => {
    const response = await fetch(`${baseApiURL}/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    return {
        status: response.status,
        body: await response.json()
    }
}

export const updateUser = async (data, token) => {
    const response = await fetch(`${baseApiURL}/user`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    return {
        status: response.status,
        body: await response.json()
    }
}

export const updatePassword = async (data, token) => {
    const response = await fetch(`${baseApiURL}/user/password`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    return {
        status: response.status,
        body: await response.json()
    }
}