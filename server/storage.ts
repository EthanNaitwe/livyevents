import { 
  users, 
  bookings, 
  testimonials, 
  portfolioItems,
  type User, 
  type InsertUser,
  type Booking,
  type InsertBooking,
  type Testimonial,
  type InsertTestimonial,
  type PortfolioItem,
  type InsertPortfolioItem
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;
  
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  getPortfolioItems(): Promise<PortfolioItem[]>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private bookings: Map<number, Booking>;
  private testimonials: Map<number, Testimonial>;
  private portfolioItems: Map<number, PortfolioItem>;
  private currentUserId: number;
  private currentBookingId: number;
  private currentTestimonialId: number;
  private currentPortfolioId: number;

  constructor() {
    this.users = new Map();
    this.bookings = new Map();
    this.testimonials = new Map();
    this.portfolioItems = new Map();
    this.currentUserId = 1;
    this.currentBookingId = 1;
    this.currentTestimonialId = 1;
    this.currentPortfolioId = 1;

    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Sample testimonials
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Sarah Chen",
        position: "VP Marketing",
        company: "TechForward Inc.",
        quote: "Livy Events transformed our corporate gala into an absolutely stunning experience. Every detail was perfect, and our guests are still talking about it months later. Their professionalism and creativity are unmatched.",
        rating: 5,
        initials: "SC"
      },
      {
        name: "Michael & Jessica Rodriguez",
        position: "Wedding Clients",
        company: "",
        quote: "Our wedding was beyond our wildest dreams. The team at Livy Events captured our vision perfectly and executed it flawlessly. We couldn't have asked for a more magical day. Truly exceptional service.",
        rating: 5,
        initials: "MJ"
      },
      {
        name: "Dr. Lisa Martinez",
        position: "Conference Director",
        company: "Medical Innovations",
        quote: "The attention to detail and level of service provided by Livy Events is extraordinary. Our annual conference was seamlessly executed, allowing us to focus on our attendees while everything else was perfectly managed.",
        rating: 5,
        initials: "DL"
      }
    ];

    // Sample portfolio items
    const samplePortfolioItems: InsertPortfolioItem[] = [
      {
        title: "Elegant Garden Wedding",
        description: "A romantic celebration in Napa Valley",
        category: "wedding",
        imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        galleryImages: [
          "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        ]
      },
      {
        title: "Tech Innovation Summit",
        description: "A forward-thinking corporate conference",
        category: "corporate",
        imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        galleryImages: [
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        ]
      },
      {
        title: "50th Birthday Celebration",
        description: "An intimate milestone celebration",
        category: "party",
        imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        galleryImages: [
          "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        ]
      },
      {
        title: "Healthcare Innovation Forum",
        description: "A thought leadership conference",
        category: "conference",
        imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        galleryImages: [
          "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        ]
      },
      {
        title: "25th Anniversary Gala",
        description: "A silver jubilee celebration",
        category: "party",
        imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        galleryImages: [
          "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        ]
      },
      {
        title: "Luxury Brand Launch",
        description: "An exclusive product unveiling",
        category: "corporate",
        imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        galleryImages: [
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        ]
      }
    ];

    sampleTestimonials.forEach(testimonial => {
      this.createTestimonial(testimonial);
    });

    samplePortfolioItems.forEach(item => {
      this.createPortfolioItem(item);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const booking: Booking = { 
      ...insertBooking, 
      id, 
      createdAt: new Date()
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values());
  }

  async createPortfolioItem(insertPortfolioItem: InsertPortfolioItem): Promise<PortfolioItem> {
    const id = this.currentPortfolioId++;
    const portfolioItem: PortfolioItem = { ...insertPortfolioItem, id };
    this.portfolioItems.set(id, portfolioItem);
    return portfolioItem;
  }
}

export const storage = new MemStorage();
