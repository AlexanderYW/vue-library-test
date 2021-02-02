const components = import.meta.globEager('./components/**/*.vue')
let componentsRemapped = {}
Object.keys(components).map(function(key, index) {
  const obj = components[key].default
  return componentsRemapped[obj.name] = obj;
});

const library = {
  install (app, options) {
    // Options

    // Components
    Object.keys(componentsRemapped).forEach((componentName) => {
      // Get component config
      const componentConfig = componentsRemapped[componentName]
    
      // Register component globally
      app.component(componentConfig.name, componentConfig)
    })
  }
}

// export default plugin
export default library
