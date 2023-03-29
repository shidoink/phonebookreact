let token ='a7d39b8a9dbb6ca7e9a427946478a6cbd258124785e0cafe'



export const server_calls = {
    get: async () => {
        const response = await fetch(`https://heliotrope-auspicious-harmonica.glitch.me/api/contacts`,
        {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
        });

        if(!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async(data: any={})=> {
        const response = await fetch(`https://heliotrope-auspicious-harmonica.glitch.me/api/contacts`,
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        if(!response.ok){
            throw new Error("Failed to create new data on the server")
        }

        return await response.json()
    },
    update: async( id:string, data:any={} ) => {
        const response = await fetch(`https://heliotrope-auspicious-harmonica.glitch.me/api/contacts/${id}`,
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error ('Failed to update data on server')
        }
        return await response.json()

    },
    delete: async( id:string) => {
        const response = await fetch(`https://heliotrope-auspicious-harmonica.glitch.me/api/contacts/${id}`,
        {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            
        })

        if (!response.ok){
            throw new Error ('Failed to delete data on server')
        }
        return;
    },


}