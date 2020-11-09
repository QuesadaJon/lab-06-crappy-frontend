import request from 'superagent';

export async function fetchClasses() {
    try {   
        const response = await request.get('https://pacific-reaches-64332.herokuapp.com/classes')
    return response.body
    } catch (e) {
    throw e;
    }
}

export async function fetchClass(id) {
    try {   
        const response = await request.get(`https://pacific-reaches-64332.herokuapp.com/classes/${id}`)
    return response.body
    } catch (e) {
    throw e;
    }
}

export async function fetchRoles() {
    try {   
        const response = await request.get('https://pacific-reaches-64332.herokuapp.com/roles')
    return response.body
    } catch (e) {
    throw e;
    }
}

export async function createClass(newClass) {
    try {   
        await request
        .post('https://pacific-reaches-64332.herokuapp.com/classes')
        .send(newClass);

        return;
    } catch (e) {
    throw e;
    }
}
 
export async function deleteClass(id) {
    try {   
        await request.delete(`https://pacific-reaches-64332.herokuapp.com/classes/${id}`)

        return
    } catch (e) {
    throw e;
    }
}

export async function updateClass(id, newClass) {
    try {   
        await request
        .put(`https://pacific-reaches-64332.herokuapp.com/classes/${id}`)
        .send(newClass);
    } catch (e) {
    throw e;
    }
}