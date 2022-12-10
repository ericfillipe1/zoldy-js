import { Fields, FormatField, ZoldyParams } from "./interface";
const encode = (fields: Fields<any>, fieldNameArray: string[], defualtValue: string): ((v: any) => string) => {
    const [fieldName, ...fieldNameArrayRest] = fieldNameArray
    if (fieldName) {
        if ('encode' in fields) {
            return (fields as FormatField<any>).encode;
        } else {
            const field = Object.keys(fields).filter(_fieldName => _fieldName == fieldName)[0]
            return encode(fields[field], fieldNameArrayRest, defualtValue)
        }
    }
    return () => defualtValue;
}


export class ZoldyParamsImpl<P> implements ZoldyParams<P> {
    constructor(private path: string, private fields: Fields<P>) {

    }
    encode(params: P): string {
        return this.path.replace(/(:\w+)/g, param => {
            const fieldNameArray = param.substring(1).split(".")
            return encode(this.fields, fieldNameArray, param)(params);
        })
    }
}

