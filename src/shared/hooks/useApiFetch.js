export default async function useApiFetch( endPoint, { method = 'GET', headers = {}, body } = {} ) {
    try {
        const response = await fetch(`http://localhost:8080/${endPoint}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            credentials: "include",
            ...(body && method !== 'GET' && {
                body: JSON.stringify(body)
            })
        })

        if (!response.ok) {
            const error = new Error('Erro na requisição')
            error.status = response.status
            error.body = await response.json().catch(() => null)

            throw error
        }

        if (response.status === 204) {
            return null
        }

        return response.json()
    } catch (err) {
        throw err
    }
}