import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, MapPin, Clock, Users } from "lucide-react";

const Contact = () => {
  return (
    <section id="support" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your driving journey? Our friendly team is here to help you every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Support</h4>
                    <p className="text-primary font-semibold text-lg">020 3051 4245</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-secondary font-semibold">Chat with us instantly</p>
                    <p className="text-sm text-muted-foreground">Quick responses during business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-foreground">info@drivemasterpro.co.uk</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Service Areas</h4>
                    <p className="text-foreground">London & Greater London</p>
                    <p className="text-sm text-muted-foreground">Free pickup and drop-off included</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="course-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Why Choose Us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <p className="text-sm text-muted-foreground">First-time pass rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">24h</div>
                    <p className="text-sm text-muted-foreground">Instructor allocation</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">DVSA</div>
                    <p className="text-sm text-muted-foreground">Approved instructors</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">£35</div>
                    <p className="text-sm text-muted-foreground">Per hour from</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="course-card">
            <CardHeader>
              <CardTitle>Get Your Free Quote</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you with a personalized quote
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                </div>

                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium mb-2">
                    Postcode *
                  </label>
                  <Input id="postcode" placeholder="Enter your postcode" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Course Type *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="courseType" value="manual" className="text-primary" />
                      <span>Manual</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="courseType" value="automatic" className="text-primary" />
                      <span>Automatic</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    When would you like to start?
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="startTime" value="asap" className="text-primary" />
                      <span>As soon as possible</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="startTime" value="month" className="text-primary" />
                      <span>Within a month</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="startTime" value="flexible" className="text-primary" />
                      <span>I'm flexible</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Additional Information
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your experience level, preferred times, or any questions you have..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full btn-primary">
                  Get My Free Quote
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our terms and conditions. 
                  We'll never share your information with third parties.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Live Chat Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button className="btn-secondary rounded-full p-4 shadow-2xl animate-float">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;