export const categories = [
    {id: 1, name: 'Building'},
    {id: 2, name: 'Furniture'},
    {id: 3, name: 'Decoration'},
  ];
  
  export const blogList = [
    {
      id: 1,
      title: 'Glasses Case',
      category: 'Decoration',
      description: 'Simple Hand Sewing',
      date: '03.02.21 9:7-33',
      image: require('./assets/images/img1.jpg'),
    },
    {
      id: 2,
      title: 'Stick Wall Decoration',
      category: 'Decoration',
      description: 'Made by Popsicle Sticks',
      date: '03.02.21 16:15',
      image: require('./assets/images/img2.jpg'),
    },
    {
      id: 3,
      title: 'Cute Desk Organizer',
      category: 'Furniture',
      description: 'DIY Ceramic Basket',
      date: '05.02.22 14:12',
      image: require('./assets/images/img3.jpg'),
    },
  ];
  
  export const workshops = [
  {
    id: 1,
    title: "Paper Craft Magic",
    description: "Learn to create beautiful 3D paper sculptures with simple techniques. This workshop will cover basic paper folding, cutting techniques, and how to assemble complex structures. Perfect for beginners looking to explore paper art.",
    category: "paper",
    price: 29,
    duration: "2 hours",
    level: "Beginner",
    date: "2023-11-15",
    time: "10:00 AM - 12:00 PM",
    instructor: "Emma Johnson",
    instructorBio: "Professional paper artist with 10+ years experience, exhibited in 5 countries",
    image: "https://i.ytimg.com/vi/DiL5glGvuOw/maxresdefault.jpg",
    rating: 4.8,
    reviews: 142,
    seats: 12,
    seatsAvailable: 5,
    location: "Creative Hub, Room 203",
    address: "123 Art Street, Jakarta",
    materials: ["Scissors", "Glue", "Colored paper", "Ruler", "Pencil"],
    whatYoullLearn: [
      "Basic paper folding techniques",
      "Creating 3D structures",
      "Color combination principles",
      "Finishing and presentation"
    ],
    requirements: "No experience needed. All materials provided.",
    images: [
      "https://example.com/papercraft1.jpg",
      "https://example.com/papercraft2.jpg"
    ]
  },
  {
    id: 2,
    title: "DIY Home Decor Masterclass",
    description: "Transform everyday items into stunning home decorations. Learn professional techniques to upcycle materials into beautiful decor pieces for your living space.",
    category: "home",
    price: 39,
    duration: "3 hours",
    level: "Intermediate",
    date: "2023-11-20",
    time: "2:00 PM - 5:00 PM",
    instructor: "Michael Chen",
    instructorBio: "Interior designer and DIY expert featured in Home & Decor magazine",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwc-te53zXypAjxOiUXU5-as3h59ygOukRA&s",
    rating: 4.9,
    reviews: 89,
    seats: 8,
    seatsAvailable: 2,
    location: "Design Loft, Main Studio",
    address: "456 Craft Avenue, Jakarta",
    materials: ["Fabric scraps", "Acrylic paint", "Brushes", "Wooden frames", "Decoupage glue"],
    whatYoullLearn: [
      "Surface treatment techniques",
      "Creating wall art",
      "Upcycling furniture",
      "Professional finishing methods"
    ],
    requirements: "Basic crafting experience recommended",
    images: [
      "https://example.com/homedecor1.jpg",
      "https://example.com/homedecor2.jpg"
    ]
  },
  {
    id: 3,
    title: "Kids Creative Craft Hour",
    description: "Fun and safe crafting activities designed specifically for children ages 5-10. Helps develop fine motor skills and creativity in a fun environment.",
    category: "kids",
    price: 19,
    duration: "1 hour",
    level: "Beginner",
    date: "2023-11-18",
    time: "9:30 AM - 10:30 AM",
    instructor: "Sarah Williams",
    instructorBio: "Certified art educator with specialization in child development",
    image: "https://i.ytimg.com/vi/JwJKsWLGB8g/maxresdefault.jpg",
    rating: 4.7,
    reviews: 210,
    seats: 15,
    seatsAvailable: 8,
    location: "Children's Art Center",
    address: "789 Play Road, Jakarta",
    materials: ["Safety scissors", "Washable markers", "Construction paper", "Non-toxic glue", "Stickers"],
    whatYoullLearn: [
      "Basic shapes and colors",
      "Simple paper crafts",
      "Creative expression",
      "Following instructions"
    ],
    requirements: "Ages 5-10 only. Parental supervision optional.",
    images: [
      "https://example.com/kidscraft1.jpg",
      "https://example.com/kidscraft2.jpg"
    ]
  },
  {
    id: 4,
    title: "Advanced Origami Techniques",
    description: "Master complex origami designs with our expert instructor. This intensive workshop covers advanced folding techniques and how to create intricate paper sculptures.",
    category: "paper",
    price: 49,
    duration: "4 hours",
    level: "Advanced",
    date: "2023-11-25",
    time: "1:00 PM - 5:00 PM",
    instructor: "David Kim",
    instructorBio: "Origami master with 15 years experience, creator of the Kim Crane technique",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5BHHH5DKqV6jNRPKACN9LYON0vZWaUFoEw&s",
    rating: 4.9,
    reviews: 67,
    seats: 6,
    seatsAvailable: 1,
    location: "Paper Arts Studio",
    address: "321 Fold Lane, Jakarta",
    materials: ["Specialty origami paper", "Bone folder", "Tweezers", "Cutting mat"],
    whatYoullLearn: [
      "Complex folding patterns",
      "Wet-folding techniques",
      "Creating modular origami",
      "Designing original pieces"
    ],
    requirements: "Must have completed intermediate origami or equivalent experience",
    images: [
      "https://example.com/origami1.jpg",
      "https://example.com/origami2.jpg"
    ]
  },
  {
    id: 5,
    title: "Sustainable Upcycling Workshop",
    description: "Turn trash into treasure with creative upcycling techniques. Learn how to transform discarded materials into beautiful, functional items while reducing waste.",
    category: "eco",
    price: 35,
    duration: "2.5 hours",
    level: "Intermediate",
    date: "2023-12-02",
    time: "11:00 AM - 1:30 PM",
    instructor: "Lisa Rodriguez",
    instructorBio: "Environmental artist and sustainability advocate",
    image: "https://media.slidesgo.com/storage/23498840/conversions/0-upcycling-workshop-thumb.jpg",
    rating: 4.8,
    reviews: 115,
    seats: 10,
    seatsAvailable: 3,
    location: "Green Arts Collective",
    address: "654 Eco Boulevard, Jakarta",
    materials: ["Old clothes", "Assorted buttons", "Thread", "Fabric paint", "Recycled materials"],
    whatYoullLearn: [
      "Identifying upcycling opportunities",
      "Basic sewing techniques",
      "Creative material combinations",
      "Eco-friendly finishing methods"
    ],
    requirements: "Basic sewing skills helpful but not required",
    images: [
      "https://example.com/upcycle1.jpg",
      "https://example.com/upcycle2.jpg"
    ]
  }
];
  
  export const workshopCategories = [
    {id: "all", name: "All Workshops"},
    {id: "paper", name: "Paper Crafts"},
    {id: "home", name: "Home Decor"},
    {id: "kids", name: "Kids Crafts"},
    {id: "eco", name: "Eco Crafts"},
    {id: "seasonal", name: "Seasonal"},
  ];

  export const challengeList = [
    {
      id: '1',
      title: 'Paper Flower Challenge',
      description: 'Make your most creative flower out of colored paper!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ffq3xAT-ciG8MwxGbJ9-XL6cmxc7Vfivfg&s',
      deadline: '2025-06-01',
      reward: 'Craft Kit Bundle',
      category: 'Paper',
      badge: 'Popular',
    },
    {
      id: '2',
      title: 'Recycled Art Week',
      description: 'Use recycled items to create a cool artwork!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aOzTDFVeS1PBD6yj2pmUgW-Q94i9pVISpQ&s',
      deadline: '2025-06-05',
      reward: 'Feature on Home Page',
      category: 'Recycle',
      badge: 'New',
    },
    {
      id: '3',
      title: 'Cute Origami Contest',
      description: 'Fold your cutest origami and submit it!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxVX0TgzlwK--skU2AePseUIKWHbLFoJelQ&s',
      deadline: '2025-06-10',
      reward: 'Special Origami Set',
      category: 'Origami',
      badge: 'Ending Soon',
    }
  ];

  export const collections = [
    {
      id: 1,
      title: 'Watercolor Masterpieces',
      creator: 'Jane Doe',
      image: 'https://i.pinimg.com/736x/37/0b/dd/370bdd517eb43159345237e43ef12292.jpg',
      items: 24,
      category: 'art',
      isFavorite: true,
    },
    {
      id: 2,
      title: 'DIY Home Decor',
      creator: 'John Smith',
      image: 'https://i.pinimg.com/736x/ee/3e/07/ee3e07d8083fddf394c1edab74eb5b01.jpg',
      items: 15,
      category: 'craft',
      isFavorite: false,
    },
    {
      id: 3,
      title: 'Digital Art Inspirations',
      creator: 'Alex Johnson',
      image: 'https://i.pinimg.com/736x/7a/65/07/7a6507619ead677742dd35fac55be687.jpg',
      items: 32,
      category: 'digital',
      isFavorite: true,
    },
    {
      id: 4,
      title: 'Handmade Jewelry',
      creator: 'Maria Garcia',
      image: 'https://i.pinimg.com/736x/5d/dd/dc/5ddddca11e64dc21d472953d6c47f541.jpg',
      items: 18,
      category: 'craft',
      isFavorite: false,
    },
    {
      id: 5,
      title: 'Calligraphy Samples',
      creator: 'David Kim',
      image: 'https://i.pinimg.com/736x/00/e6/30/00e6305ef498c1fdac660c6ecbe24eb5.jpg',
      items: 12,
      category: 'art',
      isFavorite: true,
    },
    {
      id: 6,
      title: 'Pottery Collection',
      creator: 'Emma Wilson',
      image: 'https://i.pinimg.com/736x/5d/bc/ac/5dbcac0cabb427f64257d8400891e12e.jpg',
      items: 8,
      category: 'craft',
      isFavorite: false,
    },
  ];
  
  export const collectionCategories = [
    {id: 'all', name: 'All'},
    {id: 'art', name: 'Art'},
    {id: 'craft', name: 'Craft'},
    {id: 'digital', name: 'Digital'},
    {id: 'photography', name: 'Photography'},
    {id: 'other', name: 'Other'},
  ];

  export const userData = {
    name: 'Devina Dorkas',
    email: 'devinadorkas@example.com',
    bio: 'DIY enthusiast | Workshop lover | Craft collector',
    joinedDate: 'Joined since March 2022',
    stats: {
      workshops: 24,
      collections: 15,
      favorites: 32,
    },
    avatarUrl: 'https://i.pinimg.com/736x/e2/4d/44/e24d44e3847f77e7ca34922a0014e772.jpg'
  };
  
  export const recentActivities = [
    { id: 1, type: 'workshop', title: 'Watercolor Painting', date: '2 days ago' },
    { id: 2, type: 'collection', title: 'Added to DIY Crafts', date: '1 week ago' },
    { id: 3, type: 'favorite', title: 'Liked Pottery Workshop', date: '2 weeks ago' },
  ];
  