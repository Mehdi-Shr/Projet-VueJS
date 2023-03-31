const baseApiURL = "https://product-comparator.vercel.app";

export const createProduct = async (data, token) => {
    const response = await fetch(`${baseApiURL}/products`, {
        method: "POST",
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

export const getProduct = async (productId) => {
    const response = await fetch(`${baseApiURL}/products/${productId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return {
        status: response.status,
        body: await response.json()
    }
}

export const getAll = async () => {
    const response = await fetch(`${baseApiURL}/products/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return {
        status: response.status,
        body: await response.json()
    }
}

const getAllBy = async (search) => {

}

export const updateProduct = async (productId, data, token) => {
    const response = await fetch(`${baseApiURL}/products/${productId}`, {
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

export const deleteProduct = async (productId, token) => {
    const response = await fetch(`${baseApiURL}/products/${productId}`, {
        method: "DELETE",
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