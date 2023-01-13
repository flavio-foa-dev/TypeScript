// desta forma o return sera direto. No etanto, eu tenho certeza que nao possui paramentros.

export function ScanScriptInjector(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
){

  const originMethod = descriptor.value;
  descriptor.value = function(...args: any[]): any {
    let returnResult = originMethod.apply(this, args);
    if(typeof returnResult ===  'string') {
      console.log(`scan in class ${this.constructor.name} to method ${propertyKey}`)
      returnResult = returnResult.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    return returnResult

  }
  return descriptor;
}