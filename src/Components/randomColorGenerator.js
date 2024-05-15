function generateColorFromInitial(initial) {
    // Convert initial to lowercase and get its char code
    const charCode = initial.toLowerCase().charCodeAt(0);
  
    // Simple hash function
    let hash = charCode;
    for (let i = 0; i < initial.length; i++) {
      hash = (hash << 5) - hash + initial.charCodeAt(i);
      hash |= 0; // Convert to 32-bit integer
    }
  
    // Generate RGB values from the hash
    const red = (hash & 0xFF0000) >> 16;
    const green = (hash & 0x00FF00) >> 8;
    const blue = hash & 0x0000FF;
  
    // Ensure bright enough colors (optional)
    const minBrightness = 128; 
    const adjustedRed = Math.min(red, minBrightness);
    const adjustedGreen = Math.min(green, minBrightness);
    const adjustedBlue = Math.min(blue, minBrightness);
    return `rgb(${adjustedRed}, ${adjustedGreen}, ${adjustedBlue})`;
  }

  export default generateColorFromInitial;