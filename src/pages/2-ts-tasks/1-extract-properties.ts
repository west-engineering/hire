interface IAuthAllData {
    user_id: string,
    password: string,
    source_client: string,
    api_key: string,
    api_key_expiration_time: Date
}

/**
 * Задача:
 * Написать преобразование интерфейса IAuthAllData, которое приведет его к IApiKeyData, то есть:
 * оставить только ключи api_key и api_key_expiration_time
 */

interface IApiKeyData {
    api_key: string,
    api_key_expiration_time: Date
}

