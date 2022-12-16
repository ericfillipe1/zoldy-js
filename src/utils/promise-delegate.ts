
export type Deferred<R> = {
    promise: Promise<R>
    resolve: (value: R | PromiseLike<R>) => void
    reject: (reason?: any) => void
}

const defer = <R>() => {
    var deferred: Deferred<R> = {} as any
    deferred.promise = new Promise<R>((resolve, reject) => {
        deferred.resolve = resolve
        deferred.reject = reject
    })
    return deferred
}

export default defer