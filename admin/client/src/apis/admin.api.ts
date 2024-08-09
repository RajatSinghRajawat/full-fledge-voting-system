

const data = async (email: string, password: string): Promise<any> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        email,
        password
    });

    const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    try {
        const response = await fetch("http://localhost:3000/api/v1/admin", requestOptions);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error after logging it
    }
}

export default data;
