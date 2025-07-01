export interface Service {
  title: string;
  description: string;
  price: string;
  testimonial: string;
  client: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "We build responsive, scalable, and high-performance websites tailored to your business goals.",
    price: "Start from $1,500",
    testimonial:
      "The development process was seamless and professional. Highly satisfied!",
    client: "— Amanda, COO @ RetailPro",
    image: "/service-web.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "From research to high-fidelity prototypes, we design intuitive and beautiful user experiences.",
    price: "Start from $1,200",
    testimonial:
      "Their design brought our app to life. User engagement skyrocketed.",
    client: "— Daniel, PM @ AppLaunch",
    image: "/service-design.jpg",
  },
  {
    title: "SEO & Analytics",
    description:
      "Optimize your search engine presence and gain actionable insights with our analytics solutions.",
    price: "Start from $900",
    testimonial:
      "Our traffic doubled in 3 months. Truly impressed.",
    client: "— Sarah, Marketing Head @ Healthline",
    image: "/service-seo.jpg",
  },
];

export default services;
