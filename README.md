# store-with-expire

基于store.js封装的带失效期的store-with-expire

store.js是基于localstorage封装的，在不支持lcoalstorage的情况下会选择用cookie来实现客户端存储，但是都没有失效时间，就是为了解决这个问题而写的。
### usage 

#### set
```
    store.set(key, value, expireTime)
```

#### get
```
    store.get(key)
```