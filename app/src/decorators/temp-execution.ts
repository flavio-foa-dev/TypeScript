export function TempExecution () {
  return function (
    target:any,
    propertykey:string,
    descriptor: PropertyDescriptor) {

      const originMethod = descriptor.value
      descriptor.value = function (...args: any[]) {
        const tempStart = performance.now()
        const resultReturn = originMethod.apply(this, args)
        const tempEnd = performance.now()
        console.log(`Method ${propertykey} had the time to ${(tempEnd - tempStart)/1000} seconds`)
        return resultReturn
      }

    return descriptor;
  }
}