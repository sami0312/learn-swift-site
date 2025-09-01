import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "London",
      course: "40-Hour Manual Course",
      rating: 5,
      text: "Fantastic from start to finish! My instructor was patient, professional, and really helped build my confidence. I passed first time thanks to the excellent preparation.",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Birmingham",
      course: "30-Hour Automatic Course",
      rating: 5,
      text: "The intensive course was perfect for me. I went from complete beginner to passing my test in just 3 weeks. Couldn't be happier with the service!",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emma Williams",
      location: "Manchester",
      course: "Semi-Intensive Manual",
      rating: 5,
      text: "I was really nervous about learning to drive, but my instructor made me feel at ease from day one. The flexible scheduling worked perfectly around my work.",
      avatar: "EW"
    },
    {
      id: 4,
      name: "James Rodriguez",
      location: "Leeds",
      course: "Refresher Course",
      rating: 5,
      text: "After not driving for 5 years, I needed to rebuild my confidence. The refresher course was exactly what I needed. Now I'm back on the road!",
      avatar: "JR"
    },
    {
      id: 5,
      name: "Lucy Thompson",
      location: "Bristol",
      course: "Premium Automatic Course",
      rating: 5,
      text: "The premium course exceeded all my expectations. The instructor was incredibly knowledgeable and the additional mock tests really prepared me well.",
      avatar: "LT"
    },
    {
      id: 6,
      name: "David Park",
      location: "Glasgow",
      course: "40-Hour Manual Course",
      rating: 5,
      text: "Professional, reliable, and effective teaching. I appreciated the structured approach and how they adapted to my learning style. Highly recommended!",
      avatar: "DP"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentTestimonial + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">What Our Students Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from thousands of successful students who've passed their test with us
          </p>
        </div>

        {/* Desktop View - 3 Cards */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card key={`${testimonial.id}-${currentTestimonial}`} className={`testimonial-card animate-fade-in ${index === 1 ? 'transform scale-105 shadow-xl' : ''}`}>
                <CardContent className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <p className="text-xs text-secondary font-medium">{testimonial.course}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile/Tablet View - Single Card */}
        <div className="lg:hidden relative">
          <Card className="testimonial-card animate-fade-in">
            <CardContent className="relative">
              <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].location}</p>
                  <p className="text-xs text-secondary font-medium">{testimonials[currentTestimonial].course}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-primary w-6' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Pass Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">15K+</div>
              <p className="text-muted-foreground">Students Taught</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">10+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;