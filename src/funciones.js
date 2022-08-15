const functions = {
    //Función ordenar de la A-Z
  sortOrder: (element) => {
    let out = element.sort((a,b) => a.name.localeCompare(b.name));
    return out
  },


  //Función ordenar de la Z-A
  sortOrderReverse: (element) => {
      let out = element.sort((a,b) => a.name.localeCompare(b.name));
      out.reverse();
      return out
  },


  //Función de filtrado por nombre
  filterNames: (data, input) => {
    return data.filter( (element) => {
      if(element.name.toLowerCase() == input.toLowerCase()) {
        return true
      }else{
        return false
      }
    })
  }
  
}


export default functions
