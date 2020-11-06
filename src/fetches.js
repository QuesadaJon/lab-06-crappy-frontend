import request from 'superagent';

export async function fetchClasses() {
    try {   
        const response = await request.get('https://pacific-reaches-64332.herokuapp.com/classes')
    return response.body
    } catch (e) {
    throw e;
    }
}