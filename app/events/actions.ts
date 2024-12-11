export const getEvents = async () =>{
    const data = await fetch('https://api-admin-dcc.onrender.com/events')
    return data.json();
}

