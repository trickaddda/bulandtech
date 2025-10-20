export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  detailedDescription: string;
  benefits: string[];
  tools: string[];
  deliveryTime: string;
  priceRange: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Android App Development",
    slug: "android-app-development",
    description: "Custom Android applications with modern UI/UX and robust functionality",
    icon: "Smartphone",
    detailedDescription: "Transform your ideas into powerful Android applications that engage users and drive business growth. At BulandTech, we specialize in creating high-performance, user-friendly Android apps tailored to your specific needs. Our development process combines cutting-edge technology with intuitive design principles to deliver applications that stand out in the Google Play Store. Whether you need a business app, e-commerce platform, social networking solution, or any custom application, we leverage the latest Android frameworks and best practices to ensure your app is fast, secure, and scalable. Our expertise includes native Android development using Kotlin and Java, integration with third-party APIs, cloud services, payment gateways, and real-time features. We follow Material Design guidelines to create beautiful interfaces that users love, while ensuring optimal performance across all Android devices.",
    benefits: [
      "Native performance with smooth animations",
      "Material Design UI for intuitive user experience",
      "Integration with Google services and APIs",
      "Offline functionality and data synchronization",
      "Push notifications and real-time updates",
      "Secure authentication and data encryption"
    ],
    tools: ["Android Studio", "Kotlin", "Java", "Firebase", "Jetpack Compose", "Retrofit"],
    deliveryTime: "2-6 weeks depending on complexity",
    priceRange: "₹15,000 - ₹2,00,000+"
  },
  {
    id: "2",
    title: "iOS App Development",
    slug: "ios-app-development",
    description: "Beautiful iOS applications for iPhone and iPad with seamless performance",
    icon: "Apple",
    detailedDescription: "Create stunning iOS applications that deliver exceptional user experiences on iPhone and iPad. BulandTech brings your vision to life with native iOS development that leverages the full power of Apple's ecosystem. We design and develop apps that meet Apple's strict quality standards and seamlessly integrate with iOS features like Face ID, Touch ID, Apple Pay, iCloud, and more. Our iOS development expertise spans Swift and SwiftUI, ensuring your app benefits from the latest iOS capabilities while maintaining backward compatibility. Whether you're building a consumer app, enterprise solution, or innovative startup product, we focus on creating polished, performant applications that users love. Our development process includes comprehensive testing on various iOS devices, App Store optimization, and adherence to Apple's Human Interface Guidelines to ensure your app not only functions flawlessly but also provides an intuitive, delightful user experience.",
    benefits: [
      "Native Swift/SwiftUI development for optimal performance",
      "Seamless integration with iOS ecosystem features",
      "Beautiful interfaces following Apple design principles",
      "App Store optimization and submission support",
      "iCloud sync and data persistence",
      "Support for latest iOS features and devices"
    ],
    tools: ["Xcode", "Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit"],
    deliveryTime: "2-6 weeks depending on complexity",
    priceRange: "₹20,000 - ₹2,50,000+"
  },
  {
    id: "3",
    title: "Windows Software Development",
    slug: "windows-software-development",
    description: "Powerful desktop applications for Windows with rich functionality",
    icon: "Monitor",
    detailedDescription: "Develop robust Windows desktop applications that empower your business operations and enhance productivity. At BulandTech, we create professional Windows software solutions ranging from simple utilities to complex enterprise applications. Our Windows development expertise includes modern frameworks like WPF, WinForms, and .NET, ensuring your software runs smoothly on Windows 10 and Windows 11. We specialize in building database-driven applications, automation tools, point-of-sale systems, inventory management software, and custom business solutions. Our applications feature intuitive interfaces, efficient data processing, and seamless integration with Windows features like file system access, printing, hardware integration, and more. Whether you need standalone software or client-server architecture, we deliver solutions that are stable, secure, and easy to maintain. We also provide installation packages, auto-update mechanisms, and ongoing support to ensure your Windows application continues to serve your needs effectively.",
    benefits: [
      "Rich desktop interfaces with advanced controls",
      "Direct hardware and system integration",
      "High-performance data processing",
      "Offline functionality without internet dependency",
      "Integration with Windows ecosystem",
      "Professional installer and auto-update features"
    ],
    tools: [".NET Framework", "C#", "WPF", "WinForms", "Visual Studio", "SQL Server"],
    deliveryTime: "3-8 weeks depending on requirements",
    priceRange: "₹25,000 - ₹3,00,000+"
  },
  {
    id: "4",
    title: "Website Development",
    slug: "website-development",
    description: "Responsive, modern websites from landing pages to full-scale web applications",
    icon: "Globe",
    detailedDescription: "Build your digital presence with stunning, high-performance websites that convert visitors into customers. BulandTech offers comprehensive web development services covering everything from simple landing pages to complex web applications. We create responsive, mobile-first websites that look beautiful on all devices and load lightning-fast for optimal user experience and SEO performance. Our web development expertise includes modern frameworks like React, Next.js, and Vue.js for dynamic single-page applications, as well as traditional CMS platforms like WordPress for content-rich websites. Whether you need a corporate website, e-commerce store, portfolio site, blog, or custom web application, we deliver solutions that are visually appealing, user-friendly, and technically sound. Our websites are built with SEO best practices, accessibility standards, and security in mind. We also provide hosting setup, domain configuration, SSL certificates, and ongoing maintenance to ensure your website stays secure, fast, and up-to-date.",
    benefits: [
      "Responsive design that works on all devices",
      "SEO-optimized for better search rankings",
      "Fast loading speeds and optimal performance",
      "Modern, attractive designs that engage visitors",
      "Easy content management systems",
      "Secure hosting and SSL encryption"
    ],
    tools: ["React", "Next.js", "Tailwind CSS", "WordPress", "Node.js", "MongoDB"],
    deliveryTime: "1-8 weeks depending on scope",
    priceRange: "₹10,000 - ₹2,00,000+"
  },
  {
    id: "5",
    title: "Music Production",
    slug: "music-production",
    description: "Professional song remixes, beat creation, mixing & mastering services",
    icon: "Music",
    detailedDescription: "Elevate your music with professional production services that bring your creative vision to life. At BulandTech, we offer comprehensive music production services including song remixing, original beat creation, mixing, and mastering. Whether you're an artist, content creator, or business looking for custom music, we deliver studio-quality results that compete with professional releases. Our music production process combines technical expertise with artistic creativity to craft sounds that resonate with your audience. We work across multiple genres including hip-hop, electronic, pop, rock, and more. Our remix services transform existing tracks into fresh, exciting versions perfect for clubs, radio, or streaming platforms. For original productions, we create custom beats and instrumentals tailored to your style and requirements. Our mixing services ensure all elements of your track blend perfectly with clarity, punch, and professional polish. Finally, our mastering process adds the finishing touch, optimizing your music for all playback systems and streaming platforms with proper loudness, clarity, and sonic consistency.",
    benefits: [
      "Professional studio-quality sound",
      "Custom productions tailored to your vision",
      "Industry-standard mixing and mastering",
      "Quick turnaround times",
      "Unlimited revisions until satisfaction",
      "Ready for streaming platforms and radio"
    ],
    tools: ["FL Studio", "Ableton Live", "Logic Pro", "Pro Tools", "Waves Plugins", "iZotope"],
    deliveryTime: "3-10 days depending on complexity",
    priceRange: "₹5,000 - ₹50,000+"
  },
  {
    id: "6",
    title: "Video Editing",
    slug: "video-editing",
    description: "Professional video editing for social media, YouTube, and marketing content",
    icon: "Video",
    detailedDescription: "Create captivating video content that engages your audience and amplifies your message. BulandTech provides professional video editing services for content creators, businesses, and marketers looking to stand out in the digital landscape. We transform raw footage into polished, professional videos optimized for your target platform whether it's YouTube, Instagram, TikTok, Facebook, or corporate presentations. Our video editing expertise includes color grading, motion graphics, visual effects, audio enhancement, transitions, and storytelling techniques that keep viewers engaged from start to finish. We work on various video types including vlogs, promotional videos, product demos, testimonials, event coverage, educational content, and social media reels. Our editing process focuses on pacing, visual appeal, and brand consistency to ensure your videos not only look great but also achieve your communication goals. We also provide services like subtitle creation, thumbnail design, and format optimization for different platforms to maximize your content's reach and impact.",
    benefits: [
      "Professional color grading and effects",
      "Engaging motion graphics and animations",
      "Platform-optimized formatting",
      "Audio enhancement and mixing",
      "Fast turnaround for urgent projects",
      "Unlimited revisions for satisfaction"
    ],
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "CapCut"],
    deliveryTime: "2-7 days depending on video length",
    priceRange: "₹2,000 - ₹30,000+"
  },
  {
    id: "7",
    title: "Graphic Designing",
    slug: "graphic-designing",
    description: "Eye-catching graphics for social media, branding, and marketing materials",
    icon: "Palette",
    detailedDescription: "Make a lasting impression with stunning graphic designs that communicate your brand's message effectively. BulandTech offers comprehensive graphic design services covering everything from social media graphics to complete brand identity packages. Our creative team specializes in creating visually compelling designs that capture attention, convey your message clearly, and drive engagement. Whether you need social media posts, banners, posters, flyers, brochures, business cards, or packaging designs, we deliver high-quality graphics that align with your brand identity and resonate with your target audience. Our design process begins with understanding your vision, target audience, and objectives, then we create multiple concepts for your review. We work with the latest design trends while ensuring timeless appeal and brand consistency. Our graphics are created in high resolution suitable for both digital and print use. We also provide brand style guides to maintain visual consistency across all your marketing materials. From minimalist designs to bold, creative concepts, we tailor our approach to match your unique style and requirements.",
    benefits: [
      "Custom designs aligned with your brand",
      "High-resolution files for print and digital",
      "Multiple design concepts to choose from",
      "Quick revisions and iterations",
      "Modern, trending design styles",
      "Complete brand consistency"
    ],
    tools: ["Adobe Photoshop", "Illustrator", "Figma", "Canva Pro", "CorelDRAW"],
    deliveryTime: "1-5 days depending on project",
    priceRange: "₹1,000 - ₹25,000+"
  },
  {
    id: "8",
    title: "Logo Creation",
    slug: "logo-creation",
    description: "Unique, memorable logos that define your brand identity",
    icon: "Sparkles",
    detailedDescription: "Create a powerful brand identity with a professional logo that represents your business values and resonates with your audience. At BulandTech, we understand that your logo is the cornerstone of your brand identity – it's often the first impression customers have of your business. Our logo design process combines creativity with strategic thinking to deliver logos that are not only visually appealing but also meaningful and memorable. We create custom logos tailored to your industry, target audience, and brand personality. Whether you need a minimalist wordmark, iconic symbol, combination mark, or emblem, we design with versatility in mind ensuring your logo looks great across all applications from business cards to billboards. Our design approach includes in-depth research of your industry and competitors, multiple concept presentations, and collaborative refinement until we achieve the perfect logo. We deliver your logo in all necessary formats (vector, PNG, JPG) with variations for different backgrounds and use cases. We also provide a brand style guide explaining proper logo usage, color codes, and typography to maintain brand consistency.",
    benefits: [
      "Unique designs that stand out",
      "Multiple concepts and revisions",
      "Versatile across all media",
      "Vector files for unlimited scaling",
      "Complete brand package with variations",
      "Trademark-friendly designs"
    ],
    tools: ["Adobe Illustrator", "Photoshop", "CorelDRAW", "Affinity Designer"],
    deliveryTime: "3-7 days with revisions",
    priceRange: "₹3,000 - ₹40,000+"
  },
  {
    id: "9",
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Strategic digital marketing to grow your online presence and reach",
    icon: "TrendingUp",
    detailedDescription: "Grow your business with data-driven digital marketing strategies that deliver measurable results. BulandTech offers comprehensive digital marketing services designed to increase your online visibility, engage your target audience, and drive conversions. Our digital marketing expertise spans multiple channels including social media marketing, content marketing, email marketing, PPC advertising, and influencer collaborations. We create customized marketing strategies based on your business goals, target audience, and industry landscape. Our services include social media management where we create and publish engaging content, run targeted ad campaigns on platforms like Facebook, Instagram, Google Ads, and YouTube, and analyze performance metrics to optimize results. We also offer content marketing services creating blog posts, videos, and infographics that attract and engage your audience while improving SEO. Our email marketing campaigns nurture leads and drive repeat business with personalized messaging. We provide detailed analytics and reporting so you can see exactly how your marketing budget translates into website traffic, leads, and sales. Whether you're a startup looking to establish your online presence or an established business wanting to scale, our digital marketing solutions are tailored to your unique needs and budget.",
    benefits: [
      "Increased brand visibility and awareness",
      "Targeted campaigns for better ROI",
      "Comprehensive analytics and reporting",
      "Multi-channel marketing approach",
      "Content creation and management",
      "Continuous optimization for results"
    ],
    tools: ["Google Ads", "Facebook Business Manager", "Hootsuite", "Mailchimp", "Analytics"],
    deliveryTime: "Ongoing monthly service",
    priceRange: "₹10,000 - ₹1,00,000+ per month"
  },
  {
    id: "10",
    title: "SEO Optimization",
    slug: "seo-optimization",
    description: "Improve search rankings and drive organic traffic to your website",
    icon: "Search",
    detailedDescription: "Boost your website's visibility on search engines and attract more organic traffic with professional SEO services. At BulandTech, we employ proven SEO strategies that help your website rank higher in Google search results for keywords that matter to your business. Our comprehensive SEO services include technical SEO audits, keyword research, on-page optimization, content optimization, link building, and local SEO. We start by analyzing your website's current performance, identifying technical issues, and researching the most valuable keywords for your industry. Our on-page optimization ensures your content, meta tags, headers, and images are perfectly optimized for search engines while remaining user-friendly. We create SEO-optimized content that answers user queries and establishes your authority in your niche. Our link-building strategies focus on acquiring high-quality backlinks from reputable websites to boost your domain authority. For local businesses, we optimize your Google Business Profile and local citations to improve visibility in local search results. We provide regular reports tracking your keyword rankings, organic traffic, and conversion metrics. Our SEO approach is white-hat, sustainable, and aligned with Google's guidelines to ensure long-term success without risk of penalties.",
    benefits: [
      "Higher search engine rankings",
      "Increased organic traffic and leads",
      "Better website user experience",
      "Competitive advantage in your market",
      "Improved local visibility for businesses",
      "Long-term sustainable results"
    ],
    tools: ["Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "Google Analytics"],
    deliveryTime: "Ongoing monthly service (results in 3-6 months)",
    priceRange: "₹8,000 - ₹50,000+ per month"
  },
  {
    id: "11",
    title: "Advertising Video Creation",
    slug: "advertising-video-creation",
    description: "Compelling advertising videos that drive conversions and sales",
    icon: "Film",
    detailedDescription: "Capture attention and drive action with professional advertising videos that showcase your products or services in the most compelling way. At BulandTech, we create high-impact video advertisements designed to engage viewers, communicate your value proposition, and motivate them to take action. Our advertising video services cover everything from concept development to final delivery, including scriptwriting, storyboarding, voiceover, motion graphics, and editing. We create various types of advertising videos including product demos, explainer videos, testimonial videos, brand stories, social media ads, and promotional videos for events or campaigns. Our creative approach focuses on understanding your target audience's pain points and desires, then crafting a narrative that resonates emotionally while clearly communicating your message. We optimize videos for different platforms ensuring your ads perform well on YouTube, Facebook, Instagram, TikTok, or television. Our production process includes professional animations, dynamic text overlays, background music, and call-to-action elements that guide viewers toward conversion. We also provide A/B testing variants to help you identify which creative approach performs best with your audience.",
    benefits: [
      "Professional production quality",
      "Platform-optimized formats",
      "Engaging storytelling that converts",
      "Quick turnaround times",
      "Complete creative and technical support",
      "Multiple variants for testing"
    ],
    tools: ["After Effects", "Premiere Pro", "Cinema 4D", "Blender", "Audition"],
    deliveryTime: "5-14 days depending on complexity",
    priceRange: "₹8,000 - ₹80,000+"
  },
  {
    id: "12",
    title: "AI Tools & Automation",
    slug: "ai-tools-automation",
    description: "Leverage AI and automation to streamline workflows and boost productivity",
    icon: "Bot",
    detailedDescription: "Transform your business operations with cutting-edge AI tools and intelligent automation solutions. At BulandTech, we help businesses leverage artificial intelligence and automation to increase efficiency, reduce costs, and unlock new capabilities. Our AI and automation services include chatbot development for customer service, workflow automation to eliminate repetitive tasks, AI-powered content generation, data analysis and insights, and integration of AI tools into your existing systems. We implement solutions using modern AI platforms like ChatGPT API, Google AI, and custom machine learning models tailored to your specific needs. Our chatbots can handle customer inquiries 24/7, qualify leads, schedule appointments, and provide instant support across your website, WhatsApp, or Facebook Messenger. Our automation solutions connect your tools and services to create seamless workflows – for example, automatically processing form submissions, sending personalized emails, updating databases, or generating reports. We also help businesses adopt AI tools for content creation, image generation, voice synthesis, and document processing. Whether you want to automate your marketing, streamline operations, or enhance customer experience, we design and implement AI solutions that deliver measurable ROI.",
    benefits: [
      "24/7 automated customer service",
      "Significant time and cost savings",
      "Improved accuracy and consistency",
      "Scalable solutions that grow with you",
      "Integration with existing systems",
      "Competitive advantage through innovation"
    ],
    tools: ["ChatGPT API", "Make.com", "Zapier", "Python", "TensorFlow", "n8n"],
    deliveryTime: "1-6 weeks depending on scope",
    priceRange: "₹15,000 - ₹2,00,000+"
  }
];
