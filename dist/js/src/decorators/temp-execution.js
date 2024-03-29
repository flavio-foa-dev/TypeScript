export function TempExecution(seconds = false) {
    return function (target, propertyKey, descriptor) {
        const originMethod = descriptor.value;
        descriptor.value = function (...args) {
            const tempStart = performance.now();
            const resultReturn = originMethod.apply(this, args);
            const tempEnd = performance.now();
            console.log(`Method ${propertyKey} had the time to ${(tempEnd - tempStart) / 1000} seconds`);
            return resultReturn;
        };
        return descriptor;
    };
}
