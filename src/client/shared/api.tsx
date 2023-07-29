const serverUrl = 'http://localhost:3000';

export const handleRequest=
    function (endPoint:string, data:object):Promise<Response>{
        return fetch(`${serverUrl}${endPoint}`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

export const patchRequest =
function(endPoint:string, data:object):Promise<Response>{
    return fetch(`${serverUrl}${endPoint}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

export const getRequest =
function(endPoint:string):Promise<Response>{
    return fetch(`${serverUrl}${endPoint}`,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

export {};