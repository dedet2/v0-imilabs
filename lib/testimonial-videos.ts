// Centralized video testimonial data
// After running the video generation API, update these URLs with the actual Blob URLs

export interface TestimonialVideo {
  id: string
  title: string
  videoUrl: string | null // Will be populated after generation
  duration: string
  category: string
  industry: string
  company: string
  quote: string
  author: string
  role: string
  companyName: string
}

export const testimonialVideos: TestimonialVideo[] = [
  {
    id: "sarah-chen-cto",
    title: "AI Governance Transformation Success",
    videoUrl: "/placeholder.svg?height=400&width=600&text=Sarah+Chen+Testimonial",
    duration: "2:34",
    category: "AI Ethics",
    industry: "Technology",
    company: "Fortune 500",
    quote: "Dr. Tetsubayashi completely transformed our approach to AI ethics. The ROI was immediate and substantial.",
    author: "Sarah Chen",
    role: "Chief Technology Officer",
    companyName: "TechForward Inc.",
  },
  {
    id: "marcus-rodriguez-cmo",
    title: "Healthcare AI Bias Elimination",
    videoUrl: "/placeholder.svg?height=400&width=600&text=Dr.+Marcus+Rodriguez+Testimonial",
    duration: "3:12",
    category: "Healthcare",
    industry: "Bias Mitigation",
    company: "Patient Care",
    quote: "The accessibility improvements Dr. Tetsubayashi implemented saved us millions and countless lives.",
    author: "Dr. Marcus Rodriguez",
    role: "Chief Medical Officer",
    companyName: "Regional Medical Center",
  },
  {
    id: "amelia-foster-ceo",
    title: "Startup Ethics Framework Implementation",
    videoUrl: "/placeholder.svg?height=400&width=600&text=Amelia+Foster+Testimonial",
    duration: "1:58",
    category: "Startup",
    industry: "EdTech",
    company: "Series C",
    quote: "Dr. Tetsubayashi helped us secure $50M Series C by demonstrating our responsible AI practices.",
    author: "Amelia Foster",
    role: "CEO & Founder",
    companyName: "InnovateLabs",
  },
  {
    id: "james-park-vp",
    title: "Financial Services Compliance Success",
    videoUrl: "/placeholder.svg?height=400&width=600&text=James+Park+Testimonial",
    duration: "4:21",
    category: "Financial Services",
    industry: "Regulatory",
    company: "Risk Management",
    quote: "Dr. Tetsubayashi saved us from a $500M regulatory penalty while improving our AI systems.",
    author: "James Park",
    role: "VP Legal & Compliance",
    companyName: "DataStream Corp",
  },
  {
    id: "lisa-kumar-cio",
    title: "Global Manufacturing Transformation",
    videoUrl: "/placeholder.svg?height=400&width=600&text=Dr.+Lisa+Kumar+Testimonial",
    duration: "3:45",
    category: "Manufacturing",
    industry: "Supply Chain",
    company: "ESG",
    quote: "The supply chain AI improvements delivered $75M in savings while advancing our ESG goals.",
    author: "Dr. Lisa Kumar",
    role: "Chief Innovation Officer",
    companyName: "Global Manufacturing Solutions",
  },
  {
    id: "michael-zhang-product",
    title: "E-commerce Personalization Revolution",
    videoUrl: "/placeholder.svg?height=400&width=600&text=Michael+Zhang+Testimonial",
    duration: "2:17",
    category: "E-commerce",
    industry: "Personalization",
    company: "Customer Experience",
    quote: "Inclusive AI personalization increased our revenue by $95M while improving customer satisfaction.",
    author: "Michael Zhang",
    role: "Head of Product",
    companyName: "ShopSmart Global",
  },
]
