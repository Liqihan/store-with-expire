import store from 'store';
import now from 'lodash/now';
import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';
export default {
    set (key, value, expireTime) {
        store.set(key, {
            value: value,
            expireTime: expireTime,
            time: now()
        });
    },
    get (key) {
        let read = store.get(key);
        if (isUndefined(read) || isNull(read)) {
            return null;
        }
        if (now() - read.time > read.expireTime) {
            return null;
        }
        return read.value;
    }
};
