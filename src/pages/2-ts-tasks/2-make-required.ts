interface IUserDataForInsert {
    id?: string,
    special_id?: string,
    name: string,
    pass: string
}

/**
 * Задача:
 * Преобразовать интерфейс IUserDataForInsert так, чтобы получился IUser, то есть:
 * сделать id и special_id обязательными
 */

interface IUser {
    id: string,
    special_id: string,
    name: string,
    pass: string
}
