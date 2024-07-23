
export const getWorkOrderCreatedAt = (date:string = new Date().toDateString())=>{
  return date.slice(0, 10)
}
export const  generateInitials = (name :string='') => {
  if (typeof name !== 'string' && name.trim().length === 0) {
    throw new Error('Input must be a non-empty string.');
  }
  const words = name.split(' ');
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  } else if (words.length === 2) {
    return words.map(part => part.charAt(0)).join('').toUpperCase();
  } else {
    return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase() + words[2].charAt(0).toUpperCase();
  }
}

export const capitalizeFirstLetter = (str:string = '') => {
  if (typeof str !== 'string' && str.trim().length === 0) {
    throw new Error('Input must be a non-empty string.');
  }
  
  return str.replace(/\b\w/g, char => char.toUpperCase());
}