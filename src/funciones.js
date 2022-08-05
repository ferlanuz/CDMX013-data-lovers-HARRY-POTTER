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
}
}


export default functions
