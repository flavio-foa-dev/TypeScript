export function ScanScriptInjector(target, propertyKey, descriptor) {
    const originMethod = descriptor.value;
    descriptor.value = function (...args) {
        let returnResult = originMethod.apply(this, args);
        if (typeof returnResult === 'string') {
            console.log(`scan in class ${this.constructor.name} to method ${propertyKey}`);
            returnResult = returnResult.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return returnResult;
    };
    return descriptor;
}
