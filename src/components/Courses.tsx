import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Award, CheckCircle } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Beginner Course - 40 Hours",
      type: "Manual",
      originalPrice: "£1,200",
      salePrice: "£999",
      badge: "Most Popular",
      badgeVariant: "secondary" as const,
      features: ["40 hours of lessons", "Theory test support", "Mock driving tests", "Flexible scheduling"],
      soldOut: false
    },
    {
      id: 2,
      title: "Intensive Course - 30 Hours",
      type: "Automatic",
      originalPrice: "£950",
      salePrice: "£799",
      badge: "Best Value",
      badgeVariant: "default" as const,
      features: ["30 hours intensive", "Fast-track learning", "Test booking included", "Pass guarantee"],
      soldOut: false
    },
    {
      id: 3,
      title: "Semi-Intensive - 25 Hours",
      type: "Manual",
      originalPrice: "£800",
      salePrice: "£679",
      badge: null,
      badgeVariant: null,
      features: ["25 hours of lessons", "Spread over 4 weeks", "Theory support", "Free pickup/dropoff"],
      soldOut: false
    },
    {
      id: 4,
      title: "Refresher Course - 10 Hours",
      type: "Both",
      originalPrice: "£350",
      salePrice: "£299",
      badge: null,
      badgeVariant: null,
      features: ["10 hours refresher", "Build confidence", "Brush up skills", "Nervous driver friendly"],
      soldOut: false
    },
    {
      id: 5,
      title: "Premium Course - 50 Hours",
      type: "Automatic",
      originalPrice: "£1,500",
      salePrice: "£1,199",
      badge: "Premium",
      badgeVariant: "destructive" as const,
      features: ["50 hours comprehensive", "Premium instructor", "Mock tests included", "Theory & hazard prep"],
      soldOut: true
    },
    {
      id: 6,
      title: "Pass Plus Course - 6 Hours",
      type: "Both",
      originalPrice: "£200",
      salePrice: "£169",
      badge: null,
      badgeVariant: null,
      features: ["6 hours advanced", "Post-test course", "Insurance discounts", "Motorway training"],
      soldOut: false
    }
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Our Driving Courses</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our range of professional driving courses designed to get you on the road safely and confidently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className={`course-card ${course.soldOut ? 'opacity-75' : ''}`}>
              <CardHeader className="relative">
                {course.badge && (
                  <Badge variant={course.badgeVariant} className="absolute -top-2 -right-2 z-10">
                    {course.badge}
                  </Badge>
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">{course.type}</span>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">
                      {course.title.includes('40') ? '40h' : 
                       course.title.includes('30') ? '30h' : 
                       course.title.includes('25') ? '25h' : 
                       course.title.includes('10') ? '10h' :
                       course.title.includes('50') ? '50h' : '6h'}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl mb-4">{course.title}</CardTitle>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-secondary">{course.salePrice}</span>
                  <span className="text-lg text-muted-foreground line-through">{course.originalPrice}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full ${course.soldOut ? 'btn-outline opacity-50 cursor-not-allowed' : 'btn-primary'}`}
                  disabled={course.soldOut}
                >
                  {course.soldOut ? 'Sold Out' : 'Book Online'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            All courses include free theory test support and pickup/drop-off within our coverage areas
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Qualified Instructors</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>High Pass Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Modern Vehicles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;