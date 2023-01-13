export function InspectMethod(){
  return function(
    target:any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {

    const originMethod = descriptor.value
    descriptor.value = function(...args: any[]) {
      console.log(`---- Method: ${propertyKey}`)
      console.log(`-------- Params: ${ JSON.stringify(args) }`)
      const resultReturn = originMethod.apply(this, args)
      console.log(`-------- Result: ${JSON.stringify(resultReturn)}`)
      return resultReturn
    }

    return descriptor
  }
}