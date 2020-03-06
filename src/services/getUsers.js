const getUsers = users => {
    const { photo } = users.photo;
    const { name } = users.name;
    const { description } = users.description

    const data = {
        photo,
        name,
        description
    }
    return data;
}

export default getUsers;