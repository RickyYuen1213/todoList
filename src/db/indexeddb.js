export const DBConfig = {
    name: 'matterhornDB',
    version: 1,
    objectStoresMeta: [
        {
            store: 'todoList',
            storeConfig: { keyPath: 'id' },
            storeSchema: [
                { name: 'userId', keypath: 'userId', options: { unique: false } },
                { name: 'title', keypath: 'title', options: { unique: false } },
                { name: 'completed', keypath: 'completed', options: { unique: false } },
                { name: 'timestamp', keypath: 'timestamp', options: { unique: false } }
            ]
        }
    ]
};

export const checkIndexedDBExist = () => {
    return !!window.indexedDB
}

export const checkDbExist = async () => {
    let result
    await window.indexedDB.databases().then(x => {
        result = (x[0] && x[0].name === DBConfig.name)
    })
    return result
}
