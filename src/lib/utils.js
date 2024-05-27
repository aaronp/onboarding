// utils.js
export function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  export function asLableValue(input) {
    // Check if input is an object and has 'label' and 'value' keys
    if (typeof input === 'object' && input !== null && 'label' in input && 'value' in input) {
        return input;
    }
    
    return {
      label: input,
      value: input
    };
  }