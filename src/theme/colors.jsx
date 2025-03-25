const colors = {
    lightBlue: (opacity = 1) => `rgba(187, 187, 217, ${opacity})`,   // #BIBBD9
    mediumBlue: (opacity = 1) => `rgba(173, 174, 214, ${opacity})`,  // #ASAED6
    blue: (opacity = 1) => `rgba(105, 144, 200, ${opacity})`,        // #6990C8
    darkBlue: (opacity = 1) => `rgba(81, 99, 174, ${opacity})`,      // #5163AE
    deepBlue: (opacity = 1) => `rgba(51, 61, 145, ${opacity})`,      // #333D91
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,       // Putih
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,             // Hitam
};

export default colors;