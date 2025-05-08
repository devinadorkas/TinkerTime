const colors = {
    // Warna utama (pink dan ungu playful)
    pink: (opacity = 1) => `rgba(255, 105, 180, ${opacity})`,        // Hot pink
    lightPink: (opacity = 1) => `rgba(255, 182, 193, ${opacity})`,   // Light pink
    darkPink: (opacity = 1) => `rgba(255, 20, 147, ${opacity})`,     // Deep pink
    
    // Warna sekunder (ungu dan biru muda)
    purple: (opacity = 1) => `rgba(147, 112, 219, ${opacity})`,      // Medium purple
    lightPurple: (opacity = 1) => `rgba(216, 191, 216, ${opacity})`, // Thistle
    darkPurple: (opacity = 1) => `rgba(102, 51, 153, ${opacity})`,   // Rebecca purple
    
    // Warna aksen (cerah dan fun)
    yellow: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`,        // Gold
    lightYellow: (opacity = 1) => `rgba(255, 255, 153, ${opacity})`, // Light yellow
    mint: (opacity = 1) => `rgba(170, 240, 209, ${opacity})`,       // Mint green
    
    // Netral
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    lightGray: (opacity = 1) => `rgba(230, 230, 230, ${opacity})`,
    gray: (opacity = 1) => `rgba(150, 150, 150, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

    // Mempertahankan beberapa warna biru sebelumnya untuk kompatibilitas
    lightBlue: (opacity = 1) => `rgba(173, 216, 230, ${opacity})`,   // Light blue
    blue: (opacity = 1) => `rgba(100, 149, 237, ${opacity})`,        // Cornflower blue
    darkBlue: (opacity = 1) => `rgba(70, 130, 180, ${opacity})`,     // Steel blue
    deepBlue: (opacity = 1) => `rgba(51, 61, 145, ${opacity})`,  // #333D91

    // Soft pastel colors
    cream: (opacity = 1) => `rgba(255, 253, 245, ${opacity})`,
    lavender: (opacity = 1) => `rgba(200, 182, 224, ${opacity})`,
    lightLavender: (opacity = 1) => `rgba(230, 218, 242, ${opacity})`,
    peach: (opacity = 1) => `rgba(255, 203, 182, ${opacity})`,
    mint: (opacity = 1) => `rgba(182, 231, 213, ${opacity})`,
    
    // Neutrals
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    gray: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`,
    lightGray: (opacity = 1) => `rgba(211, 211, 211, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

export default colors;