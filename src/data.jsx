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
      description: "Learn to create beautiful 3D paper sculptures with simple techniques",
      category: "paper",
      price: 29,
      duration: "2 hours",
      level: "Beginner",
      date: "2023-11-15",
      instructor: "Emma Johnson",
      image: "https://i.ytimg.com/vi/DiL5glGvuOw/maxresdefault.jpg",
      rating: 4.8,
      seats: 12,
      materials: ["Scissors", "Glue", "Colored paper"],
    },
    {
      id: 2,
      title: "DIY Home Decor",
      description: "Transform everyday items into stunning home decorations",
      category: "home",
      price: 39,
      duration: "3 hours",
      level: "Intermediate",
      date: "2023-11-20",
      instructor: "Michael Chen",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwc-te53zXypAjxOiUXU5-as3h59ygOukRA&s",
      rating: 4.9,
      seats: 8,
      materials: ["Fabric scraps", "Paint", "Brushes"],
    },
    {
      id: 3,
      title: "Kids Craft Hour",
      description: "Fun and safe crafting activities for children ages 5-10",
      category: "kids",
      price: 19,
      duration: "1 hour",
      level: "Beginner",
      date: "2023-11-18",
      instructor: "Sarah Williams",
      image: "https://i.ytimg.com/vi/JwJKsWLGB8g/maxresdefault.jpg",
      rating: 4.7,
      seats: 15,
      materials: ["Safety scissors", "Washable markers", "Construction paper"],
    },
    {
      id: 4,
      title: "Advanced Origami",
      description: "Master complex origami designs with our expert instructor",
      category: "paper",
      price: 49,
      duration: "4 hours",
      level: "Advanced",
      date: "2023-11-25",
      instructor: "David Kim",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5BHHH5DKqV6jNRPKACN9LYON0vZWaUFoEw&s",
      rating: 4.9,
      seats: 6,
      materials: ["Origami paper", "Bone folder"],
    },
    {
      id: 5,
      title: "Upcycling Workshop",
      description: "Turn trash into treasure with creative upcycling techniques",
      category: "eco",
      price: 35,
      duration: "2.5 hours",
      level: "Intermediate",
      date: "2023-12-02",
      instructor: "Lisa Rodriguez",
      image: "https://media.slidesgo.com/storage/23498840/conversions/0-upcycling-workshop-thumb.jpg",
      rating: 4.8,
      seats: 10,
      materials: ["Old clothes", "Buttons", "Thread"],
    },
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
  