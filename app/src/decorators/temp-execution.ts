export function TempExecution (seconds: boolean = false) {
  return function (
    target:any,
    propertyKey:string,
    descriptor: PropertyDescriptor) {

      const originMethod = descriptor.value
      descriptor.value = function (...args: any[]) {
        const tempStart = performance.now()
        const resultReturn = originMethod.apply(this, args)
        const tempEnd = performance.now()
        console.log(`Method ${propertyKey} had the time to ${(tempEnd - tempStart)/1000} seconds`)
        return resultReturn
      }

    return descriptor;
  }
}